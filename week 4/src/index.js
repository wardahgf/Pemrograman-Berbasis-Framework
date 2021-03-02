import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from 'register-service-worker';

import BlogSpot from "./container/BlogSpot/BlogSpot";

ReactDOM.render(<BlogSpot/>, document.getElementById('content'));

//function HelloComponent(){
//  return HelloComponent
//}
//ReactDOM.render(<HelloComponent/>, document.getElementById('root'));
serviceWorker.unregister();