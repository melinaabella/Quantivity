import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';

export const Grid = styled.div ``;
export const Row = styled.div`
  display: flex;
`;
export const Col = styled.div`
  flex: ${(props) => props.size};
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse:''
    };
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI').then((res) => {
      return res.text();
    }).then((text) => {
      console.log(text);
      this.setState({
        apiResponse: text
      })
    });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" />
          <p> {this.state.apiResponse} </p>
        </header>

        <h1>Responsive Grid</h1>
        <Grid>
          <Row>
            <Col size={1}>
              Looooong column
            </Col>
          </Row><Row>
            <Col size={2}>
              Double the size of
            </Col>
            <Col size={1}>
              ME
            </Col>
          </Row>
        </Grid>

        
      </div>
    );
  }
}



export default App;
