import { ClothesList } from './ClothesList/ClothesList';
import { LoginForm } from './LoginForm/LoginForm';
import { Fragment, useState } from 'react';
import './App.css';
import { RoleWrapper } from './RoleWrapper/RoleWrapper';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [role, setRole] = useState('');
  return (
    <>
      <div className='cStore'>
        <h1 className='sName'>Fashion Clothing Store</h1>
      </div>
      <LoginForm setRole={setRole} />
      <RoleWrapper rolesAllowed={['admin', 'visitor']} currentRole={role} >
        <ClothesList role={role} />
      </RoleWrapper>
    </>
  );
}

export default App;
