
// NewsItem.js

import React from 'react';
import '../css/NewsItem.css';

export default class NewsItem extends React.Component {
  
  getItem() {
  	var datas = [{"title": "The basic method of jQuery"}, {"title": "React-native"}, {"title": "React Getting Started"}, {"title": "React example"}, {"title": "React-router"}];
  	return(
  		<div className="container">
  		  <div className="left">
  		  		<h2>Hot</h2>	
  		  		<ul>
  		  			{
						datas.map(function(v, key) {
							return(
								<li className="newsItem">
						           
						           <a href="##">{v.title}</a>
						        </li>
							)
						})
						
					}
  		  		</ul>
  		  </div>
		  <div className="item-box">
		  	
        	{
				this.props.item.map(function(v, key) {
					return(
						<div className="newsItem">
				           <h1>{v.title}<span className="fr">{v.date}</span></h1>
				           <p>{v.body}</p>
				        </div>
					)
				})
				
			}
		
		</div>
		</div>
		)
  }
  render() {
  return(
  	<div>
  		{ this.getItem() }  
  	</div>
  )
  	
	 
  }
}