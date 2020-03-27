import React from 'react';

// components
import Avatar from '../Avatar';

// utils
import getAvatarColor from '../../utils/getAvatarColor';
import getInitials from '../../utils/getInitials';

// styles components
import { Container, Info, FullName, Year } from './styles';

function MovieItem({ fullname, year }) {
  return (
    <Container>
      <Avatar
        size={35}
        initials={getInitials(fullname)}
        backgroundColor={getAvatarColor(fullname)}
      />
      <Info>
        <FullName>{fullname}</FullName>
        {year && <Year>{year}</Year>}
      </Info>
    </Container>
  );
}

export default MovieItem;
