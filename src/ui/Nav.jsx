import { NavLink, useLocation } from 'react-router-dom';

import './Nav.css';

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <div className='row d-flex justify-content-center'>
      <div className='nav justify-content-between mt-4 gap-3 px-0 col-12 col-md-9 col-lg-5 mx-5'>
        <NavLink
          to='/'
          className={`nav-link nav-item text-dark pb-0 ${
            pathname === '/' ? 'my-active' : ''
          }`}
        >
          All
        </NavLink>
        <NavLink
          to='/active'
          className={`nav-link nav-item text-dark pb-0 ${
            pathname === '/active' ? 'my-active' : ''
          }`}
        >
          Active
        </NavLink>

        <NavLink
          to='/completed'
          className={`nav-link nav-item text-dark pb-0 ${
            pathname === '/completed' ? 'my-active' : ''
          } `}
        >
          Completed
        </NavLink>
      </div>

      <div className='col-12 col-md-9 col-lg-6 px-4 mx-5'>
        <div className='si'></div>
      </div>
    </div>
  );
};
