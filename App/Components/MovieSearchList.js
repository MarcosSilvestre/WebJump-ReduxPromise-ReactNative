import { FlatList, ActivityIndicator, View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MovieActions from '../Actions';


import MovieItem from './MovieItem';

const keyExtractor = ({movie: { ids: { trakt } }}) => trakt.toString() + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();

class MovieSearchList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
    }

    renderItem = ({ item: { movie } }) => {

        const { title, year } = movie;
        return (
            <MovieItem fullname={title} year={year}/>
        );
    };

    render() {
        const { search } = this.props.movies;

        return (  
                <FlatList
                ref={(ref) => { this.flatListRef = ref; }}
                data={search}
                renderItem={this.renderItem}
                keyExtractor={keyExtractor}
                />
        );
    }
}

const styles = StyleSheet.create({
    showMoreContainer: { 
        backgroundColor: '#f4f4f4', 
        paddingHorizontal: 20, 
        paddingVertical: 20, 
        marginTop: 10
    },
    showMoreButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 24
      },
      showMoreButtonText: {
        fontSize: 14,
        textDecorationLine: 'underline',
        color: '#a90a1a'
      },
});

const mapStateToProps = state => ({
    movies: state.movies
});

// const mapDispatchToProps = dispatch =>
//     bindActionCreators({...MovieActions}, dispatch);

export default connect(mapStateToProps)(MovieSearchList);
