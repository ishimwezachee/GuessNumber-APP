import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Titletxt from './TitleText';

import color from '../constants/color';

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Titletxt>{props.title}</Titletxt>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: color.primary,
		alignItems: 'center',
		justifyContent: 'center'
	}
	// headerTitle: {
	// 	color: 'black',
	// 	fontSize: 18,
	// 	fontFamily: 'open-sans-bold'
	// }
});

export default Header;
