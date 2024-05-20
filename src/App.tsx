import { useState } from 'react';
import './App.css';
import Label from './components/Label.tsx';
import DefaultTextField from './components/DefaultTextField.tsx';

function App() {
  const [email, setEmail] = useState('');
  const [address, setAdress] = useState('');
  const [error, setIsError] = useState(false);
  
  return (
    <>
      <Label htmlFor={'email'}>Email</Label>
      <DefaultTextField id={'email'}
                        errorMessage={'이메일을 확인해주세요.'}
                        iconPath={'/icons/ic-delete-dark.svg'}
                        placeholder={'이메일을 입력해주세요.'}
                        iconAlt={'delete icon'}
                        isError={error}
                        onIconClick={() => setEmail('')}
                        onChange={e => setEmail(e.target.value)}
                        value={email}/>
      <div className={'my-10'}/>
      <Label htmlFor={'address'}>Address</Label>
      <DefaultTextField id={'address'}
                        errorMessage={'주소를 확인해주세요.'}
                        iconPath={'/icons/ic-delete-dark.svg'}
                        placeholder={'주소를 입력해주세요.'}
                        iconAlt={'delete icon'}
                        isError={error}
                        onIconClick={() => setEmail('')}
                        onChange={e => setAdress(e.target.value)}
                        value={address}/>
      
      <button className={'mt-20'} onClick={() => setIsError(!error)}>에러 토글</button>
    </>
  );
}

export default App;
