import React from 'react';
import {
    ActivityIndicator,
    ViewPropTypes,
    Button,
    
    Text,
    SafeAreaView,
    View,
    Platform,
    StyleSheet,
    Image
  } from 'react-native';
import PropTypes from 'prop-types';
import { Form, Item, Icon, Input } from 'native-base';
  
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MovieActions from './../Actions';

const logoFooter = require('./../../assets/logo-webjump-footer.png');
import MovieList from '../Components/MovieList';
import MovieSearchList from '../Components/MovieSearchList';
  
class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          loading: false, // nao esquecer de  deixar true
          error: false,
          searching: false
      };
    }

    searchMovie = (searchName) => {
      let searching = false;
      if(searchName.length > 5) {
          searching = true;
          this.props.searchMovie(searchName);
      }else{
          const param = {
              page: 1
          };

          this.props.addMovies(param);
      }

      this.setState({
          searching: searching
      });
    }

    render() {

        const { searching } = this.state;

        return (
          <SafeAreaView style={styles.main}>
              <View style={styles.titleContainer}>
                  <Text style={styles.title}>Lista de Filmes</Text>
              </View>
              <View style={styles.searchContainer}>
                  <Form style={styles.formInputSearch}>
                      <Item style={styles.formInputSearchItem}>
                          <Icon
                            active
                            name="search"
                            style={styles.formInputSearchItemIcon}
                          />
                          <Input
                            placeholder='Search...'
                            style={styles.formInputSearchInput}
                            onChangeText={v => this.searchMovie(v)}
                          />
                      </Item>
                  </Form>
              </View>

              {searching ? <MovieSearchList/> :  <MovieList /> }  

              <View style={styles.footerContainer}>
                  <Image style={styles.logo} resizeMode="contain" source={logoFooter} />
                  <Text style={styles.version}>v 1.0.0</Text>  
              </View>
          </SafeAreaView>
        );
    }
}

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  main: { 
    backgroundColor: '#f4f4f4',
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? 50
        : 0
  },
  // header
  titleContainer: {
      paddingTop: 35,
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#f4f4f4',
  },
  title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  // search
  searchContainer: {
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  formInputSearch: {
      backgroundColor: '#f0f0f0',
      borderRadius: 4
  },
  formInputSearchItem: {
      height: 36,
      borderColor: 'transparent'
  },
  formInputSearchItemIcon: {
    fontSize: 19
  },
  formInputSearchInput: {
    height: 36,
    fontSize: 13
  },

  // footer
  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: '#f4f4f4', 
    width: '100%'
  },
  logo: {
    width: 129,
    height: 36
  },
  version: {
    fontSize: 10
  }
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({...MovieActions}, dispatch);

export default connect(null, mapDispatchToProps)(Main);
