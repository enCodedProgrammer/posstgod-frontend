import React from 'react';

import { Container, TextBox02 } from './styles';

export default function Footer() {
  return (
    <>
      <Container>
        <h3>©2020 Postgod. All rights reserved.</h3>
        <TextBox02>
          <p>
            We are not affiliated, associated, authorized, endorsed by or in
            <br />
            any way officially connected to Slack Technologies, Inc.
          </p>
        </TextBox02>
      </Container>
    </>
  );
}
