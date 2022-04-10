import Counter from './components/Counter';
import {useSelector} from 'react-redux';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import Auth from './components/Auth';


function App() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <div>
      {
        isAuthenticated && 
          <div>
            <Header />
            <UserProfile />
          </div>
      }
      {
        !isAuthenticated && <Auth />
      }
      <Counter /> 
    </div>
  );
}

export default App;
