import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import axios from 'axios';
import Itens from './itens';

const styles = StyleSheet.create({
	listagem: { backgroundColor: '#ddd' }
});


class ListaItens extends Component {
	constructor(props) {
		super(props);

		this.state = { listaItens: [] };
	}

	componentWillMount() {
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
		.then((response) => { 
			console.log(response);
			this.setState({ listaItens: response.data});
		}).catch(() => { 
			console.log('erro ao recuperar os dados'); 
		});
	}

	render() {
		return (
			<ScrollView style={styles.listagem}>
				{ this.state.listaItens.map( item => (<Itens key={item.titulo} item={item} />)) }
			</ScrollView>
		);
	}
}

export default ListaItens;
