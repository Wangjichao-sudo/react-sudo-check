import React from 'react';
import ReactDom from 'react-dom';
import Routers from './router';
import { data, info } from '../../src';
console.log(data, info)
ReactDom.render(<Routers />, document.getElementById('app'));