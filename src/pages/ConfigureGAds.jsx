import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConfigureGAds = () => {
  const [config, setConfig] = useState({
    clientId: '',
    clientSecret: '',
    refreshToken: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig(prevConfig => ({ ...prevConfig, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Google Ads configuration submitted:', config);
    // Here you would typically send this configuration to your backend
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Configure Google Ads Connection</h1>
      <Card>
        <CardHeader>
          <CardTitle>Google Ads API Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="clientId" className="block text-sm font-medium text-gray-700">Client ID</label>
              <Input
                type="text"
                id="clientId"
                name="clientId"
                value={config.clientId}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="clientSecret" className="block text-sm font-medium text-gray-700">Client Secret</label>
              <Input
                type="password"
                id="clientSecret"
                name="clientSecret"
                value={config.clientSecret}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="refreshToken" className="block text-sm font-medium text-gray-700">Refresh Token</label>
              <Input
                type="text"
                id="refreshToken"
                name="refreshToken"
                value={config.refreshToken}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Save Configuration</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfigureGAds;
