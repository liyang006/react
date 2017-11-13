// NewsLogo.js

import React from 'react';
import imageLogo from '../img/y18.gif';

export default class NewsLogo extends React.Component {
	
	// get logo	
	getLogo() {
		let tit = 'logo2';
		return (
		   
		      <a title={tit} href="##"><img src={imageLogo} alt={tit}/></a>
		    
	    );
	}
	render() {
	return (
	   		<div className="news-logo" style={{ float:'left' }}>
		     	{this.getLogo()}

		    </div>
      		
      		
	   
	    );
	}
}