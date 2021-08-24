import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import {BrowserRouter, Route} from "react-router-dom"
import Dialogs from './components/Dialogs/Dialogs'
import ProfileContainer from './components/Profile/ProfileContainer.jsx'
import Music from './components/Music/Music.jsx'
import News from './components/News/News.jsx'
import UsersContainer from "./components/Users/UsersContainer.jsx"
import FriendsContainer from './components/Friends/FriendsContainer'
import {connect} from 'react-redux'


function App() {
  return (
    <BrowserRouter> 
    <div className="app_wrapper">
      
     <Header/>
     <NavBar/>
      <div className = "app_wrapper_content">
       <Route path = "/profile/:userId?" render = {() => <ProfileContainer/>} />
       <Route path = "/dialogs" component = {Dialogs} />
       <Route path = "/news" component = {News} />
       <Route path = "/music"  component = {Music}/>
       <Route path = "/users" render = {() => <UsersContainer/>}  />
       <Route path = "/friends" render = {() => <FriendsContainer/>} />
       
       

      </div>

    
    </div>
     </BrowserRouter>
    
  );
}

export default App;
