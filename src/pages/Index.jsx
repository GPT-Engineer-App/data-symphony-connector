import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Campaign Dashboard Demo</h1>
        <p className="mb-4 text-center">Click the button below to view the dashboard demo.</p>
        <Button onClick={handleLogin} className="w-full">
          View Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Index;
