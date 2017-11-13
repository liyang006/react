
import React from 'react';
import NewsHeader from '../js/NewsHeader.jsx';
import NewsItem from '../js/NewsItem.jsx';
import NewsFooter from '../js/NewsFooter.jsx';

export default class NewsList extends React.Component {
  render() {
    var testData = [
    	{
	  		'title': 'React',
	  		'date': '11-07',
	  		'body': 'A JavaScript library for building user interfaces'
	 	},
	 	{
	  		'title': 'Declarative',
	  		'date': '11-07',
	  		'body': 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
	 	},
	 	{
	  		'title': 'Component-Based',
	  		'date': '11-07',
	  		'body': 'Build encapsulated components that manage their own state, then compose them to make complex UIs.'
	 	},
	 	{
	  		'title': 'Learn Once, Write Anywhere',
	  		'date': '11-07',
	  		'body': 'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.'
	 	}
	 ];

	 return (
	     <div className="newsList">
	       <NewsHeader />
	       <NewsItem item={testData} rank={1} />
	       <NewsFooter />
	     </div>
	     );
  }
}