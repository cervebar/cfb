import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import TestRestCall from './TestRestCall';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(TestRestCall),
    document.getElementById('mount')
  );
});
