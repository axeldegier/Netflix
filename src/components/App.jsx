
import React from 'react';
import '../css/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route} from 'react-router-dom';
import NavBar from './navigation/NavBar.jsx';
import Home from './navigation/Home.jsx';
import Series from './navigation/Series.jsx';
import Films from './navigation/Films.jsx';
import NewAndPopular from './navigation/NewAndPopular.jsx';
import MyList from './navigation/MyList.jsx';

// class App extends React.Component() {
//   render() {

//       const mystyle = {
//         color: "white"
//       };
//   return (
//   <>
//    <h2 style={mystyle}> {'Hallo Boilerplate'} </h2>
//    <div className="myclass"></div>
//   </>
//   );
//  }
// }


class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
   <div className="App-content">
     <NavBar />
     <Route path='/' component={Home} exact />
     <Route path='/Series' component={Series} />
     <Route path='/Films' component={Films} />
     <Route path='/NewAndPopular' component={NewAndPopular} />
     <Route path='/MyList' component={MyList} />
   </div>
   </BrowserRouter>
   
    )
  }
}
export default App;
