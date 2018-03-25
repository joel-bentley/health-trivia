const questions = [
  {
    id: 1,
    questionText:
      'Which of the following is NOT a risk factor for developing high blood pressure (hypertension)?',
    choices: [
      'Smoking cigarettes',
      'Drinking alcohol',
      'Taking too many vitamins',
      'Not exercising enough',
    ],
    correctChoice: 2,
    infoHTML:
      '<p><strong>Correct Answer:</strong> Taking too many vitamins is NOT a risk factor for developing high blood pressure, as claimed by the Center for Disease Control and Prevention (CDC), but it can cause other toxic effects based on the vitamin that is consumed.</p><p>Smoking can increase your risk for hypertension, heart disease, and stroke. Men who drink more than two alcoholic beverages a day or women who drink more than one alcoholic beverage a day are at higher risk of developing chronic high blood pressure. Teenagers and children should average one hour of physical activity a day.</p>',
    videos: [
      {
        text: 'Blood Pressure Animation - Heart Disease Risk Factors:',
        image: require('./images/bloodpressure.png'),
      },
    ],
  },

  {
    id: 2,
    questionText:
      'Americans are suggested to limit their intake of added sugars to less than what percentage of their total daily calorie intake?',
    choices: ['5%', '10%', '25%', '33%'],
    correctChoice: 1,
    infoHTML:
      '<p><strong>Correct Answer:</strong> According to the CDC, Americans should limit their sugar intake to less than 10% of their total calorie intake. Americans, aged 6 years or older, consumed about 14% of total daily calories from added sugars in 2003-2010.</p><p>The leading sources of added sugars in the US are sugar-sweetened beverages (ex. soda/pop, juices), grain-based desserts (ex. cakes, cookies), candy, and dairy desserts (ex. ice cream, cheesecake). One way to reduce sugar intake is to replacing these sugary foods with water, tea, fruits, and vegetables.</p>',
    videos: [
      {
        text:
          'The Health Nerd: What does sugar do to your body? 10 Proven Negative Effects of Sugar',
        image: require('./images/negativesugar.png'),
      },
      {
        text: 'Howcast: How to Reduce Your Sugar Intake',
        image: require('./images/reducesugarintake.png'),
      },
    ],
  },

  {
    id: 3,
    questionText:
      'If you are concerned your friend is at risk of experiencing sexual assault at a party, which of the following is NOT an acceptable action to take?',
    choices: [
      'Give your friend another drink',
      'Create a distraction',
      'Ask/confront them directly',
      'Enlist others for support',
    ],
    correctChoice: 0,
    infoHTML:
      '<p><strong>Correct Answer:</strong> Giving your answer another drink would NOT be an acceptable action if your friend is at risk of sexual assault. The Rape, Abuse, and Incest National Network (RAINN) suggests using the CARE model to help prevent sexual assault. CARE stands for:</p><p>C - Create a distraction to interrupt the situation</p><p>A - Ask directly to the person who might be in trouble</p><p>R - Refer to an authority on the safest way to intervene</p><p>E - Enlist others to support you</p>',
    videos: [
      {
        text: 'Sexual Assault on College Campuses:',
        image: require('./images/sexualassaultincollege.png'),
      },
      {
        text: "It's On Us: Sexual Assault PSA: ",
        image: require('./images/sexualassaultpsa.png'),
      },
    ],
  },

  {
    id: 4,
    questionText:
      'Which of the following food products contains the largest amount of fiber?',
    choices: [
      "Panera's Frontega Chicken Sandwich",
      "Subway's Meatball Marinara Footlong Sandwich",
      "Taco Bell's Steak Quesadilla",
      "Chipotle's Chicken Burrito",
    ],
    correctChoice: 3,
    infoHTML:
      "<p><strong>Correct Answer:</strong> Chipotle's Chicken Burrito has 14g of fiber, whereas Panera's Frontega Chicken Sandwich has 4g, Taco Bell's Steak Quesadilla has 4g, and Subway's Meatball Marina Footlong has 8g.</p>",
    videos: [
      {
        text:
          'Fiber - What Does Fiber Do - Functions of Fiber - Health Benefits of Fiber in the Body',
        image: require('./images/fiber.png'),
      },
    ],
  },

  {
    id: 5,
    questionText:
      'What is the minimum hours of sleep per day recommended by the CDC for teenagers between the age of 13-18?',
    choices: ['6', '7', '8', '9'],
    correctChoice: 2,
    infoHTML:
      "<p><strong>Correct Answer:</strong> 8 hours of good-quality sleep is recommended by the CDC for one's health and well-being. Poor sleeping habits can lead to fatal car accidents, learning difficulties, depression, early aging, high blood pressure and heart disease</p><p>Some sleeping habits that can improve your sleep health include: (1) going to bed around the same time (2) making sure your room is quiet, dark, and at a comfortable temperature (3) removing distracting electronic devices (4) avoiding large meals, caffeine, and alcohol before bedtime (5) exercising can help you fall asleep more easily</p>",
    videos: [
      {
        text:
          'The Importance of Sleep: 8 Scientific Health Benefits of Sleep + Sleeping Tips',
        image: require('./images/sleep.png'),
      },
    ],
  },

  {
    id: 6,
    questionText:
      'Which of the following foods contains the largest amount of sodium?',
    choices: [
      "1 slice of Papa John's Pepperoni Pizza",
      "McDonald's Medium French Fries",
      'Panda Express Orange Chicken',
      "Regal Cinema's Large Buttered Popcorn",
    ],
    correctChoice: 3,
    infoHTML:
      "<p><strong>Correct Answer:</strong> A large buttered popcorn from Regal Cinema's has 1390mg of sodium, whereas a slice of Papa John's pepperoni pizza has 810mg, a medium fry from McDonald's has 230mg, and an orange chicken bowl from Panda Express has 610mg.</p>",
    videos: [
      { text: 'Why Is Salt So Bad for You, Anyway?', image: require('./images/salt.png')},
    ],
  },
];

export default questions;
