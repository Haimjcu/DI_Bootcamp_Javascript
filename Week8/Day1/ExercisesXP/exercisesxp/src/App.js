import './App.css';
import user from './ex3';
import UserFavoriteColors from './Ex3a';
import Exercise4 from './ex4';

function App() {
  return (
    <>
    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>
    <ul><UserFavoriteColors animals={user.favAnimals}/></ul>
    <Exercise4 />
    </>
  );
}

export default App;
