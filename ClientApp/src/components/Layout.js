import React, { useState } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

const Layout = (props) => {

  const [Search, setSearch] = useState(true);

  return (
    <div>
      <NavMenu search= {setSearch} />
      <Container tag="main" search = {Search}>
        {props.children}
      </Container>
    </div>
  );
}

export default Layout;
