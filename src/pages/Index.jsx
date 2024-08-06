import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // In a real application, you would validate the token here
    if (token) {
      localStorage.setItem('authToken', token);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Campaign Dashboard Login</h1>
        <Input
          type="text"
          placeholder="Enter your access token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Index;
