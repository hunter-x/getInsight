import React from 'react'
import { render } from 'react-dom'
import App from './App.js'
import Survey from './Survey.js'

import { Router, Route, browserHistory } from 'react-router';

render((
		<Router history={ browserHistory }>
	    	<Route path="/home" component={App}/>
	    	<Route path="/createSurvey" component={Survey}/>
 		</Router>
 		),document.querySelector('#surveyx'));
