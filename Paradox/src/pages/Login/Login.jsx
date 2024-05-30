import { Return } from '../../components/Return/Return';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import LogoG from '../../assets/imgs/LogoG.png';
import open from '../../assets/imgs/open.png';
import close from '../../assets/imgs/close.png';
import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogIn } from  '../../services/firebase'

export function Login() { 
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event;
    setFormValues({ ...formValues, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const { state } = useLocation();
  const prevPage = state?.prevPage || '';

  const handleLogin = async () => {
    const { email, password } = formValues;
    if (email.trim() === '' || password.trim() === '') {
      alert('Por favor, llena ambos campos.');
      return;
    }
    try {
      const user = await LogIn({ email, password });
      navigate('/');
    } catch (error) {
      console.error("Error during login:", error);
      alert('Error during login. Please check your credentials and try again.');
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 flex flex-row p-6">
        <div className="flex justify-start items-center">
          <Return />
        </div>
      </nav>
      <main className="flex flex-col content-center	items-center cell:flex-row w-screen">
        <section className="w-2/5 cell:h-screen mb-10 flex flex-col items-center justify-center">
          <img className="w-3/4 cell:w-1/2 animate-pulse" src={LogoG} alt="Logo" />
          <h1 className="px-contact-title font-extrabold">Login</h1>
        </section>
        <section className="cell:w-1/2 w-screen flex flex-col items-center justify-center">
          <Input
            className="w-4/6 h-12 mb-4"
            placeholder="Email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            ref={emailInputRef}
          />
          <div className="relative w-4/6 h-12 mb-4">
            <Input
              className="w-full h-12 mb-4"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formValues.password}
              onChange={handleChange}
              ref={passwordInputRef}
            />
            <button
              type="button"
              className="px-eye-icon absolute inset-y-0 right-2 top-0 px-5 flex items-center focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          <Button
            className="w-4/6 h-12 mt-10"
            type="button"
            title="Login"
            onClick={handleLogin}
          />
        </section>
      </main>
    </>
  );
}

const EyeIcon = () => (
  <img className="h-6 w-6 border-none" src={open} alt="Eye Icon" />
);

const EyeOffIcon = () => (
  <img className="h-6 w-6 border-none" src={close} alt="Eye Off Icon" />
);
