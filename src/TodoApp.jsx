import { AppRouter } from './router/AppRouter';

import { Nav } from './ui';

const TodoApp = () => (
  <div className='container'>
    <div className='row mt-4 text-center'>
      <h1>#todo</h1>
    </div>
    <Nav />
    <AppRouter />
  </div>
);

export default TodoApp;
