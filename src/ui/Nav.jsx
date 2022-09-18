import { NavLink } from 'react-router-dom';

export const Nav = () => (
  <div className='row'>
    <div className='nav justify-content-center mt-4 gap-3'>
      <NavLink to='/' className='nav-link nav-item text-dark'>
        All
      </NavLink>
      <NavLink to='/active' className='nav-link nav-item text-dark'>
        Active
      </NavLink>

      <NavLink to='/completed' className='nav-link nav-item text-dark'>
        Completed
      </NavLink>
    </div>
  </div>
);
