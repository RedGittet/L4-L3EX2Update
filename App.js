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
            {/* Quiz Title */}
            <Text style={styles.title}>ANIMAL QUIZ</Text>

            {/* Question 1 */}
            <View style={styles.questionContainer}>
                <Image source={CrocodileImage} style={styles.image} />
                <Text style={styles.questionText}>WHAT ANIMAL IS THIS?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setAnswer1(value)}
                    placeholder={{ label: "Select an animal", value: null }}
                    items={[
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Lion', value: 'Lion' },
                        { label: 'Tiger', value: 'Tiger' }
                    ]}
                    style={pickerSelectStyles}
                    useNativeAndroidPickerStyle={false} // Ensures custom styling on Android
                />
            </View>

            {/* Question 2 */}
            <View style={styles.questionContainer}>
                <Image source={OwlImage} style={styles.image} />
                <Text style={styles.questionText}>WHAT ANIMAL IS THIS?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setAnswer2(value)}
                    placeholder={{ label: "Select an animal", value: null }}
                    items={[
                        { label: 'Peacock', value: 'Peacock' },
                        { label: 'Owl', value: 'Owl' },
                        { label: 'Kingfisher', value: 'Kingfisher' }
                    ]}
                    style={pickerSelectStyles}
                    useNativeAndroidPickerStyle={false} // Ensures custom styling on Android
                />
            </View>

            {/* Question 3 */}
            <View style={styles.questionContainer}>
                <Image source={TigerImage} style={styles.image} />
                <Text style={styles.questionText}>WHAT ANIMAL IS THIS?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setAnswer3(value)}
                    placeholder={{ label: "Select an animal", value: null }}
                    items={[
                        { label: 'Zebra', value: 'Zebra' },
                        { label: 'Bee', value: 'Bee' },
                        { label: 'Tiger', value: 'Tiger' }
                    ]}
                    style={pickerSelectStyles}
                    useNativeAndroidPickerStyle={false} // Ensures custom styling on Android
                />
            </View>

            {/* Submit Button */}
            <View style={styles.submitButtonContainer}>
                <Button title="Submit Answers" onPress={checkAnswers} color="#337ab7" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    quizContainer: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    questionContainer: {
        marginBottom: 30,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#337ab7',
        textAlign: 'center',
    },
    submitButtonContainer: {
        marginTop: 20,
        width: '80%',
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#337ab7',
        borderRadius: 4,
        color: 'black',
        backgroundColor: '#f1f1f1',
        marginTop: 10,
        width: '100%',
        textAlign: 'center',
    },
});

export default QuizApp;
