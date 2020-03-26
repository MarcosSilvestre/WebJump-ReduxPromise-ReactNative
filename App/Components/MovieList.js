import { FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MovieActions from './../Actions';

import MovieItem from './MovieItem';

const keyExtractor = ({movie: { ids: { trakt } }}) => trakt.toString() + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();

class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
    }

    async componentDidMount() {

        const param = {
            page: this.state.page
        };

        this.props.addMovies(param);

        this.setState({
            page: param.page + 1
        });
    }

    updateMovies = async () => {
        
        const param = {
            page: this.state.page
        };
        
        this.props.addMovies(param);
        
        this.setState({
            page: param.page + 1
        });
    }

    renderItem = ({ item: { movie } }) => {

        const { title } = movie;
        return (
            <MovieItem fullname={title}/>
        );
    };

    renderFooter = () => {
        
        return (
            <ActivityIndicator />
        );
    };

    render() {
        const { movies } = this.props.movies;

        return (    
            <FlatList
            ref={(ref) => { this.flatListRef = ref; }}
                data={movies}
                renderItem={this.renderItem}
                ListFooterComponent={this.renderFooter}
                keyExtractor={keyExtractor}
                onEndReached={this.updateMovies}
                onEndReachedThreshold={0.1}
            />
        );
    }
}

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({...MovieActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
