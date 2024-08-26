'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { useCompany } from '@/context/CompanyContext';
import api from '@/services/api';

export default function LoginPage() {
  const router = useRouter();
  const { setCompanyData } = useCompany();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    await api.post('/company', {
      username: username,
      password: password
    })
    .then((res) => {
      setCompanyData(res.data);
      console.log(res.data);
      router.push('/company');
    })
    .catch((error) => {
      console.log(error);
      alert('Login failed');
    })
  };

  const styles: any = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',

    height: '100vh',
    fontSize: '24px',
  };
  const formStyles: any = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    maxWidth: '360px',
    fontSize: '24px',
    padding: '16px',

    border: '.5px solid #5e5e5e',
    borderRadius: '8px',
  }
  const inputStyles: any = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '.5px solid #5e5e5e',
    borderRadius: '4px',
    boxSizing: 'border-box',
  }
  const buttonStyles: any = {
    width: '100%',
    padding: '12px 20px',
    margin: '32px 8px 0',
    display: 'inline-block',
    border: '.5px solid #5e5e5e',
    borderRadius: '4px',
    boxSizing: 'border-box',
    cursor: 'pointer',
  }


  return (
    <div style={styles}>
      <h2>Tela de Login</h2>
      <form onSubmit={handleLogin} style={formStyles}>
        <input 
          style={inputStyles}
          name="username" 
          type="text" 
          placeholder="Username" 
          required 
        />
        <input 
          style={inputStyles}
          name="password" 
          type="password" 
          placeholder="Password" 
          required 
        />
        <button 
          style={buttonStyles} 
          type="submit"
        >Login</button>
      </form>
    </div>
  );
}
