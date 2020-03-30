import { FlatList } from 'react-native';
import React from 'react';

import { connect } from 'react-redux';

import MovieItem from './MovieItem';

const keyExtractor = ({
  movie: {
    ids: { trakt },
  },
}) =>
  trakt.toString() +
  new Date().getTime().toString() +
  Math.floor(Math.random() * Math.floor(new Date().getTime())).toString();

class MovieSearchList extends React.Component {
  renderItem = ({ item: { movie } }) => {
    const { title, year } = movie;
    return <MovieItem fullname={title} year={year} />;
  };

  render() {
    const { movies } = this.props;
    const { search } = movies;

    return (
      <FlatList
        ref={(ref) => {
          this.flatListRef = ref;
        }}
        data={search}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
        testID="MovieSearchListTest"
      />
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(MovieSearchList);
