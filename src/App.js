import { ClothesList } from './ClothesList/ClothesList';
import { LoginForm } from './LoginForm/LoginForm';
import { Fragment, useState } from 'react';
import './App.css';
import { RoleWrapper } from './RoleWrapper/RoleWrapper';

function App() {

  const [role, setRole] = useState('');
  return (
    <>
      <LoginForm setRole={setRole} />
      <RoleWrapper rolesAllowed={['admin', 'visitor']} currentRole={role} >
        <ClothesList role={role} />
      </RoleWrapper>
    </>
  );
}

export default App;
