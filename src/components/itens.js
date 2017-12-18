import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	item: {
		borderWidth: 0.5,
		borderColor: '#999',
		margin: 10,
		padding: 10,
		flexDirection: 'row',
		backgroundColor: '#fff'
	},
	detalhesItens: { flex: 1 },
	foto: {
		flexDirection: 'row',
		height: 100,
		width: 100, 
		margin: 10
	},
	titulo: {
		fontSize: 18,
		color: 'blue',
		marginBottom: 5
	},
	valor: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	detalhes: { fontSize: 15 }
});

class Itens extends Component {
		render() {
		return (
			<View style={styles.item}>
				<View>
					<Image style={styles.foto} source={{ uri: this.props.item.foto}} />
				</View>			
				<View style={styles.detalhesItens}>
					<Text style={styles.titulo}>{this.props.item.titulo}</Text>
					<Text style={styles.valor}>R$ {this.props.item.valor}</Text>
					<Text style={styles.detalhes}>Local: {this.props.item.local_anuncio}</Text>
					<Text style={styles.detalhes}>Data publicação: {this.props.item.data_publicacao}</Text>
				</View>
			</View>
		);
	}
}

export default Itens;
