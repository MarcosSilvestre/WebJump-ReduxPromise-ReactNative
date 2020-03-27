import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MovieActions from '../Actions';

// components
import MovieItem from './MovieItem';

const keyExtractor = ({
  movie: {
    ids: { trakt },
  },
}) =>
  trakt.toString() +
  new Date().getTime().toString() +
  Math.floor(Math.random() * Math.floor(new Date().getTime())).toString();

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  async componentDidMount() {
    const { addMovies } = this.props;
    const { page } = this.state;

    const param = {
      page,
    };

    addMovies(param);

    this.setState({
      page: param.page + 1,
    });
  }

  updateMovies = async () => {
    const { addMovies } = this.props;
    const { page } = this.state;
    const param = {
      page,
    };

    addMovies(param);

    this.setState({
      page: param.page + 1,
    });
  };

  renderItem = ({ item: { movie } }) => {
    const { title } = movie;
    return <MovieItem fullname={title} />;
  };

  renderFooter = () => {
    return <ActivityIndicator />;
  };

  render() {
    const { moviesList } = this.props;
    const { movies } = moviesList;

    return (
      <FlatList
        ref={(ref) => {
          this.flatListRef = ref;
        }}
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

const mapStateToProps = (state) => ({
  moviesList: state.movies,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...MovieActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
