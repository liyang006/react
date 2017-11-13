
import '../css/app.css';

import React from 'react'
import { render } from 'react-dom';
import $ from 'jquery';
import NewsList from '../js/NewsList.jsx';


// component for hello
class Hello extends React.Component {
  render() {
    return (
        <h1>Hello webpack</h1>
        );
  }
}
// render
// index.html
if(location.href.indexOf('index.html') > 0) {
	render(
	  <NewsList/>,
	  document.querySelector('#wrapper')
	);
}





