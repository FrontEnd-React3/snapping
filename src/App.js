import React, { Component } from "react";
import styled from "styled-components";
import scrollSnapPolyfill from "css-scroll-snap-polyfill";

const Container = styled.div`
  width: 100%;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-type: mandatory;
  font-size: 0;

  > div {
    width: 100%;
    height: 100vh;
    background: gray;
    line-height: 100px;
    text-align: center;
    font-size: 50px;
    scroll-snap-align: start;
  }
  #two{    background:lightgray;
}
`;

export default class extends Component {
  componentDidMount() {
    scrollSnapPolyfill();
  }

  render() {
    return (
      <Container>
        <div>1</div>
        <div id="two">2</div>
        <div>3</div>
      </Container>
    );
  }
}
