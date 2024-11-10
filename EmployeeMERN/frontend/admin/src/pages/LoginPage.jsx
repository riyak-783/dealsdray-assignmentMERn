import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Attempting to log in with:', { email, password });
    console.log('Form submitted!');

   
    const apiUrl = 'http://localhost:5000/api/auth/login'; 

    try {
      const res = await axios.post(apiUrl, { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/employees');
    } catch (error) {
      console.error('Error during login:', error); 
      alert('Invalid credentials'); 
    }
  };

  return (
    <div className="flex items-center  justify-center min-h-screen bg-[#bbd1ea]">
      <form onSubmit={handleLogin} className="p-8 bg-white rounded shadow-2xl">
        <h1 className="mb-6 text-2xl text-center font-serif
         font-bold">Welcome! to website</h1>
        <h2 className="mb-6 text-2xl text-center font-serif
         font-bold">Admin Sign In</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Password"
          required
        />
        <button type="submit" className="w-full p-2 font-mono text-white text-xl bg-gradient-to-r from-pink-300 via-blue-500 to-purple-600 hover:from-purple-500 hover:to-blue-500 rounded">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;