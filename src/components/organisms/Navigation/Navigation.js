import React from 'react';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as ListIcon } from 'assets/icons/list.svg';
import { ReactComponent as DoneIcon } from 'assets/icons/done.svg';
import { Wrapper, Link } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Link to="/">
        <AddIcon />
      </Link>
      <Link to="list">
        <ListIcon />
      </Link>
      <Link to="done">
        <DoneIcon />
      </Link>
    </Wrapper>
  );
};

export default Navigation;
