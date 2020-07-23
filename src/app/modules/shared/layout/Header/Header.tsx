import React from 'react';
import * as styles from './Header.styles';
import Typography from '../../components/Typography/Typography';

const Header: React.FC = () => (
  <styles.Header>
    <Typography color="secondary" contrastText component="h1" variant="h1">
      Sempre em Casa
    </Typography>
  </styles.Header>
);

export default Header;
