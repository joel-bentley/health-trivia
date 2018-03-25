import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { Constants } from 'expo';
import { Card, Button, List, ListItem } from 'react-native-elements';
import CountdownCircle from 'react-native-countdown-circle';
import HTMLView from 'react-native-htmlview';

import questions from './questions';
import usersList from './users';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

const SECONDS_TO_ANSWER = 5;
const SOLUTION_TIMEOUT = 2; // seconds
const BACKGROUND_COLOR = '#fff';
const ANSWER_COLOR = '#669999';
const SELECTED_ANSWER_COLOR = '#226666';
const COUNTDOWN_COLOR = '#aa3939';
const WRONG_ANSWER_COLOR = '#aa3939';
const CORRECT_ANSWER_COLOR = '#7a9f35';

export default class App extends React.Component {
  state = {
    questionNumber: 0, // 0 to (questions.length - 1)
    selectedAnswer: null, // 0, 1, 2, etc.
    screenState: 'menu', // 'question', 'solutionWrong', 'solutionCorrect', 'infoWrongAnswer', 'infoCorrectAnswer', 'leaderboard'
  };

  handleTimeElapsed = () => {
    const question = questions[this.state.questionNumber];
    const isCorrect = question.correctChoice === this.state.selectedAnswer;
    console.log({ isCorrect });
    this.setState(
      {
        screenState: isCorrect ? 'solutionCorrect' : 'solutionWrong',
      },
      () =>
        delay(SOLUTION_TIMEOUT * 1000).then(() =>
          this.setState({
            screenState: isCorrect ? 'infoCorrectAnswer' : 'infoWrongAnswer',
          })
        )
    );
  };

  handleAnswerClick = index => {
    if (this.state.selectedAnswer === null) {
      console.log({ selectedAnswer: index });
      this.setState({ selectedAnswer: index });
    }
  };

  render() {
    const question = questions[this.state.questionNumber];
    const { screenState, selectedAnswer } = this.state;

    return (
      <View style={styles.container}>
        {screenState === 'menu' && (
          <View>
            <View style={{ height: 20 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                source={require('./images/logo.jpg')}
                style={{
                  width: WINDOW_WIDTH * 0.8,
                  height: WINDOW_WIDTH * 0.8,
                }}
                resizeMode="contain"
              />
            </View>
            <View style={{ height: 20 }} />
            <List>
              <ListItem
                title="Start Game"
                onPress={() => this.setState({ screenState: 'question' })}
                titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
              />
              <ListItem
                title="Leaderboard"
                onPress={() => this.setState({ screenState: 'leaderboard' })}
                titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
              />
              <ListItem
                title="FAQ"
                titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
              />
              <ListItem
                title="About Us"
                titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
              />
            </List>
          </View>
        )}
        {['question', 'solutionWrong', 'solutionCorrect'].includes(
          screenState
        ) && (
          <View style={styles.questionCardView}>
            <Card>
              <View style={styles.messageView}>
                {screenState === 'question' ? (
                  <CountdownCircle
                    seconds={SECONDS_TO_ANSWER}
                    radius={30}
                    borderWidth={8}
                    color={COUNTDOWN_COLOR}
                    bgColor="#fff"
                    textStyle={{ fontSize: 20 }}
                    onTimeElapsed={this.handleTimeElapsed}
                  />
                ) : screenState === 'solutionCorrect' ? (
                  <Text
                    style={[
                      styles.messageText,
                      { color: CORRECT_ANSWER_COLOR },
                    ]}
                  >
                    Correct Solution!
                  </Text>
                ) : (
                  <Text
                    style={[styles.messageText, { color: WRONG_ANSWER_COLOR }]}
                  >
                    Wrong.
                  </Text>
                )}
              </View>
              <Text style={styles.questionText}>{question.questionText}</Text>
              {question.choices.map((choice, index) => {
                if (index === selectedAnswer) {
                  var buttonColor = {
                    question: SELECTED_ANSWER_COLOR,
                    solutionWrong: WRONG_ANSWER_COLOR,
                    solutionCorrect: CORRECT_ANSWER_COLOR,
                  }[screenState];
                } else if (
                  ['solutionWrong', 'solutionCorrect'].includes(screenState) &&
                  index === question.correctChoice
                ) {
                  var buttonColor = CORRECT_ANSWER_COLOR;
                } else if (
                  ['solutionWrong', 'solutionCorrect'].includes(screenState) &&
                  index !== question.correctChoice
                ) {
                  var buttonColor = 'lightgray';
                } else {
                  var buttonColor = ANSWER_COLOR;
                }
                return (
                  <Button
                    key={index}
                    title={choice}
                    onPress={() => this.handleAnswerClick(index)}
                    buttonStyle={[
                      styles.answerButton,
                      { backgroundColor: buttonColor },
                    ]}
                  />
                );
              })}
            </Card>
          </View>
        )}
        {['infoWrongAnswer', 'infoCorrectAnswer'].includes(screenState) && (
          <ScrollView style={styles.infoView}>
            <HTMLView value={question.infoHTML} stylesheet={htmlStyles} />
            {screenState === 'infoWrongAnswer' && (
              <View>
                {question.videos.map((video, index) => (
                  <View key={index}>
                    <Image
                      source={video.image}
                      resizeMode="contain"
                      style={{ height: 82, width: 100, marginTop: 40 }}
                    />
                    <Text>{video.text}</Text>
                  </View>
                ))}
              </View>
            )}

            <Button
              buttonStyle={[styles.answerButton, { marginTop: 60 }]}
              title="Continue"
              onPress={() => {
                if (this.state.questionNumber < questions.length - 1) {
                  this.setState({
                    questionNumber: this.state.questionNumber + 1,
                    selectedAnswer: null,
                    screenState: 'question',
                  });
                } else {
                  this.setState({ screenState: 'leaderboard' });
                }
              }}
            />

            <View style={{ height: 40 }} />
          </ScrollView>
        )}
        {screenState === 'leaderboard' && (
          <View>
            <View style={{ height: 40 }} />
            <Text style={styles.questionText}>LEADERBOARD</Text>
            <List containerStyle={{ marginBottom: 20 }}>
              {usersList.map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={{ uri: l.avatar }}
                  key={i}
                  title={`${i + 1}. ${l.name}`}
                  subtitle={`      $${l.money} Amazon GiftCard`}
                  chevronColor="#fff"
                />
              ))}
            </List>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Button
                buttonStyle={[styles.answerButton, { marginTop: 60 }]}
                title="Back to Menu"
                onPress={() => this.setState({ screenState: 'menu' })}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    marginTop: Constants.statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  questionCardView: {
    marginTop: 100,
  },
  messageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 80,
  },
  infoView: {
    // justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  questionText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  messageText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  answerButton: {
    backgroundColor: ANSWER_COLOR,
    width: 300,
    height: 45,
    borderRadius: 22.5,
    marginBottom: 10,
  },
});

const htmlStyles = StyleSheet.create({
  p: {
    // color: textColor,
    fontSize: 18,
    marginBottom: -20,
    textAlign: 'justify',
  },
  strong: {
    fontWeight: 'bold',
  },
});
