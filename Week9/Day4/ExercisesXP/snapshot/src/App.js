import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import PhotoList from './components/PhotoList';
import SearchBox from './components/SearchBox';
import { getPictures, setSearchFields } from './actions/index';

class App extends React.Component  {

  componentDidMount = () => {
    this.props.next('nature');
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1>SnapShot</h1>
          <SearchBox />
          <nav class="main-nav">
            <ul>
            <li onClick={() => this.props.setSearchFields('mountain')}>Mountain</li>
            <li onClick={() => this.props.setSearchFields('beach')}>Beaches</li>
            <li onClick={() => this.props.setSearchFields('bird')}>Birds</li>
            <li onClick={() => this.props.setSearchFields('food')}>Food</li>
            </ul>
          </nav>
        </div>

        <PhotoList pictures={this.props.pictures} category={this.props.searchField} />

      </div>

      );
  }

}

const mapStateToProps = (state) =>{
  return {
    pictures: state.pictures.photos,
    searchField: state.searchField,
    loading: state.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchFields: (text) =>dispatch(setSearchFields(text)),
    next: (category) => dispatch(getPictures(category))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
