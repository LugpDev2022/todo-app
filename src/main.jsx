import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoApp from './TodoApp';
import { TodoProvider } from './context/TodoProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <BrowserRouter>
        <TodoApp />
      </BrowserRouter>
    </TodoProvider>
  </React.StrictMode>
);
