import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

// Import images
import CrocodileImage from './img/crocodile.jpg';
import OwlImage from './img/owl.jpg';
import TigerImage from './img/tiger.jpg';

// Define correct answers for the quiz
const correctAnswers = {
  question1: 'Crocodile',
  question2: 'Owl',
  question3: 'Tiger'
};

const QuizApp = () => {
  // State variables for each answer
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const checkAnswers = () => {
    let score = 0;

    // Calculate the score
    if (answer1 === correctAnswers.question1) score++;
    if (answer2 === correctAnswers.question2) score++;
    if (answer3 === correctAnswers.question3) score++;

    // Show an alert with the result
    Alert.alert(`You got ${score} out of 3 correct!`);
  };

  return (
      <View style={styles.quizContainer}>
        {/* Question 1 */}
        <Text>Question 1: What animal is this?</Text>
        <Image source={CrocodileImage} style={styles.image} />
        <RNPickerSelect
            onValueChange={(value) => setAnswer1(value)}
            items={[
              { label: 'Crocodile', value: 'Crocodile' },
              { label: 'Lion', value: 'Lion' },
              { label: 'Tiger', value: 'Tiger' }
            ]}
        />

        {/* Question 2 */}
        <Text>Question 2: What animal is this?</Text>
        <Image source={OwlImage} style={styles.image} />
        <RNPickerSelect
            onValueChange={(value) => setAnswer2(value)}
            items={[
              { label: 'Peacock', value: 'Peacock' },
              { label: 'Owl', value: 'Owl' },
              { label: 'Kingfisher', value: 'Kingfisher' }
            ]}
        />

        {/* Question 3 */}
        <Text>Question 3: What animal is this?</Text>
        <Image source={TigerImage} style={styles.image} />
        <RNPickerSelect
            onValueChange={(value) => setAnswer3(value)}
            items={[
              { label: 'Zebra', value: 'Zebra' },
              { label: 'Bee', value: 'Bee' },
              { label: 'Tiger', value: 'Tiger' }
            ]}
        />

        {/* Submit Button */}
        <Button title="Submit Answers" onPress={checkAnswers} />
      </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  }
});

export default QuizApp;
