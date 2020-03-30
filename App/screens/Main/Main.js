import React from 'react';
import { Platform, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Icon, Input, Item } from 'native-base';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MovieActions from '../../Actions';

// components
import MovieList from '../../Components/MovieList';
import MovieSearchList from '../../Components/MovieSearchList';

// styled components
import {
  Header,
  Title,
  SearchContainer,
  FormSearch,
  Footer,
  Version,
} from './styles';

// dynamic styles
const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const stylesX = StyleSheet.create({
  main: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    marginTop: Platform.OS === 'android' || platformVersion < 11 ? 50 : 0,
  },
  formInputSearchItemIcon: {
    fontSize: 19,
  },
  formInputSearchInput: {
    height: 36,
    fontSize: 13,
  },
});

// image
const logoFooter = require('../../../assets/logo-webjump-footer.png');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
    };
  }

  searchMovie = (searchName) => {
    const { searchMovie, addMovies } = this.props;
    let searching = false;
    if (searchName.length > 5) {
      searching = true;
      searchMovie(searchName);
    } else {
      const param = {
        page: 1,
      };

      addMovies(param);
    }

    this.setState({
      searching,
    });
  };

  render() {
    const { searching } = this.state;

    return (
      <SafeAreaView style={stylesX.main}>
        <Header>
          <Title>Lista de Filmes</Title>
        </Header>
        <SearchContainer>
          <FormSearch>
            <Item style={stylesX.formInputSearchItem}>
              <Icon
                active
                name="search"
                style={stylesX.formInputSearchItemIcon}
              />
              <Input
                placeholder="Search..."
                style={stylesX.formInputSearchInput}
                onChangeText={(v) => this.searchMovie(v)}
                testID="searchInput"
              />
            </Item>
          </FormSearch>
        </SearchContainer>

        {searching ? <MovieSearchList /> : <MovieList />}

        <Footer>
          <Image
            style={{ width: 129, height: 36 }}
            resizeMode="contain"
            source={logoFooter}
          />
          <Version>v 1.0.0</Version>
        </Footer>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...MovieActions }, dispatch);

export default connect(null, mapDispatchToProps)(Main);
