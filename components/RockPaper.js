import {React, useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Animated } from 'react-native';
import Constants from 'expo-constants';
import DisplayText from './DisplayText';
import Actions from './Actions';
import Heading from './Heading';


export default function RockPaper(){
    const [userChoice, setUserChoice] = useState(0);
    const [computerChoice, setComputerChoice ] = useState(0);
    const [result, setResult] = useState("");
    const [canPlay, setPlay ] = useState(true);


    //Animation
    const fadeAnimation = useRef(new Animated.Value(1)).current;

    function play(choice){
        //This Game has 3 choice to select
        // 1 = rock
        // 2 = paper
        // 3 = scissor

        const randomComputerChoice = Math.floor(Math.random() * 3 ) + 1
        let resultString = "";

        if(choice === 1) {
            resultString = randomComputerChoice === 3 ? "Win" : "Lose"
        }
        else if(choice === 2) {
            resultString = randomComputerChoice === 1 ? "Win" : "Lose"
        }
        else  {
            resultString = randomComputerChoice === 2 ? "Win" : "Lose"
        }


        if(choice === randomComputerChoice) {
            resultString = "Draw"
        }

        setUserChoice(choice);
        setComputerChoice(randomComputerChoice);


        //wait animation hide old result
        setTimeout(() => {
            setResult(resultString);
        }, 300);


        // Animation hide old result and show new result
        Animated.sequence([
            Animated.timing(fadeAnimation, {
                toValue:0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnimation, {
                toValue:1,
                duration:300,
                useNativeDriver: true,
            }),
        ]).start();

        //Disable action when the animation is running
        setPlay(false);
        setTimeout(()=> {
            setPlay(true);
        }, 600);
    }


    // returning the View of the page
    return(
        <SafeAreaView style={styles.container}>
            <Heading/>
            <View style={styles.content}>
                <View style={styles.result}>
                    <Animated.Text style={[styles.resultText, {opacity: fadeAnimation}]}>
                        {result}
                    </Animated.Text>
                </View>
                    <View style={styles.screen}>

                    {!result ? (
                        <Text style={styles.readyText}>Let's Play this Game</Text>
                    ) : (
                        <DisplayText
                            userChoice={userChoice}
                            computerChoice={computerChoice}
                        />
                    )}

                    </View>

                    <Actions play={play}  canPlay={canPlay}/>
            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: Constants.statusBarHeight,
    },

    content : {
        flex: 1,
        marginBottom: 5,
        backgroundColor: '#e8ef',
    },

    result : {
        height:100,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    resultText : {
        fontSize:48,
        fontWeight: 'bold',

    },

    screen: {
        flex:1,
        flexDirection: 'row'
    },

    readyText:{
        marginTop:-48,
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%',
        fontSize: 48,
        fontWeight: 'bold',

    }
})