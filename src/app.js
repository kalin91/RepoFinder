import "core-js/stable";
import "regenerator-runtime/runtime";
import './app.css';
import {buildBody} from './buildBody'
import {sendRequest} from './sendRequest'

buildBody();

const btn = document.getElementById('btn');
btn.addEventListener('click',sendRequest)