import { useLocation } from 'react-router-dom';

export const TodosAlert = () => {
  const { pathname } = useLocation();

  return (
    <div className='row mt-4 justify-content-center animate__animated animate__zoomIn'>
      <div className='col-12 col-md-9 col-lg-6 px-4'>
        <div className='alert alert-warning'>
          You don't have {pathname.slice(1)} TODOS
        </div>
      </div>
    </div>
  );
};
