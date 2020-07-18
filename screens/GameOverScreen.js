import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BodyText from '../components/BodyText';
import colors from '../constants/color';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<TitleText>The Game is Over!</TitleText>
			<View style={styles.imageContainer}>
				<Image
					fadeDuration={300}
					// source={require('../assets/success.png')}
					source={{ uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg' }}
					style={styles.image}
					resizeMode="cover"
				/>
			</View>
			<View style={styles.resultContainer}>
				<BodyText style={styles.resultText}>
					Your phone needed {''}
					<Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number {''}
					<Text style={styles.highlight}>{props.userNumber}</Text>
				</BodyText>
			</View>
			<BodyText>Number was: {props.userNumber}</BodyText>
			<MainButton onPress={props.onRestart}>New GAME</MainButton>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: 300,
		overflow: 'hidden',
		margin: 20
	},
	image: {
		width: '100%',
		height: '100%'
	},
	highlight: {
		color: colors.primary
	},
	resultContainer: {
		marginHorizontal: 30,
		marginVertical: 2
	},
	resultText: {
		textAlign: 'center',
		fontSize: 20
	}
});

export default GameOverScreen;
