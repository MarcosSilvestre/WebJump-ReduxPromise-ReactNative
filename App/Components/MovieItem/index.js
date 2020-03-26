import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Avatar from './../Avatar';
import getAvatarColor from './../../utils/getAvatarColor';
import getInitials from './../../utils/getInitials';
import {
  Container,
  Info,
  FullName,
  Year
} from './styles'; 

export default class MovieItem extends React.Component {
  

  render() {
    const { fullname, year } = this.props;

    return (
      <Container>
          <Avatar
            size={35}
            initials={getInitials(fullname)}
            backgroundColor={getAvatarColor(fullname)}
          />
          <Info>
              <FullName>{fullname}</FullName>
              { year  && (<Year>{year}</Year>) }
          </Info>
    </Container>
    );
  }
}

MovieItem.propTypes = {
  fullname: PropTypes.string.isRequired
};
