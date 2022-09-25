import { AppRouter } from './router/AppRouter';

import { Nav, Footer } from './ui';

const TodoApp = () => (
  <div className='container'>
    <div className='row mt-4 text-center'>
      <h1 className='animate__animated animate__bounce'>
        <b>#todo</b>
      </h1>
    </div>
    <Nav />
    <AppRouter />
    <Footer />
  </div>
);

export default TodoApp;
