
// NewsHeader.js
import '../css/NewsHeader.css';
import React from 'react';
import NewsLogo from '../js/NewsLogo.jsx';

export default class NewsHeader extends React.Component {
	

	// getTitle
	getTitle() {
	 return (
		     <div className="newsHeader-title">
		       <a className="newsHeader-textLink" href="##">Blog</a>
		     </div>
	     );
	}

	// getNav
	getNav() {
	 var navLinks = [
	 {
	   name: 'Home',
	   url: '##'
	 },
	 {
	   name: 'About',
	   url: '##'
	 },
	 {
	   name: 'Contact',
	   url: '##'
	 }
	 ];

	 return (
	     <div className="newsHeader-nav">
	       {
	         navLinks.map(function(navLink, key) {
	           return (
	               <a className="newsHeader-navLink newsHeader-textLink" href={navLink.url} >
	                 {navLink.name}
	               </a>
	               );
	         })
	       }
	     </div>
	     );
	}
	// getLogin
	getLogin() {
	 return (
	     <div className="newsHeader-login">
	       <a className="newsHeader-textLink" href="##">login</a>
	     </div>
	     );
	}
	
	render() {
	return (
	    <div className="newsHeader">
      		<NewsLogo/>
      		{ this.getTitle() }
      		{ this.getNav() }
      		{ this.getLogin() }
	    </div>
	    );
	}
}