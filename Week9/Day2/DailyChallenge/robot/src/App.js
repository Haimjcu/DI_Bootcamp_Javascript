import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { setSearchFields } from './actions/index';

class App extends React.Component {

  onSearchChange = (event) => {
    this.props.setSearchFields(event.target.value)
  }

  render() {
    const filteredRobots = this.props.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });

    return (
      <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList robots={filteredRobots} />
    </div>
    );
  }

}

const mapStateToProps = (state) =>{
  return {
    robots: state.robots,
    searchField: state.searchField
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchFields: (text) =>dispatch(setSearchFields(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
