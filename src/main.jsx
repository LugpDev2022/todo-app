import React from 'react';
import ReactDOM from 'react-dom/client';

import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoApp from './TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
