import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConfigureMeta = () => {
  const [config, setConfig] = useState({
    apiKey: '',
    accountId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig(prevConfig => ({ ...prevConfig, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meta configuration submitted:', config);
    // Here you would typically send this configuration to your backend
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Configure Meta Connection</h1>
      <Card>
        <CardHeader>
          <CardTitle>Meta API Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">API Key</label>
              <Input
                type="text"
                id="apiKey"
                name="apiKey"
                value={config.apiKey}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="accountId" className="block text-sm font-medium text-gray-700">Account ID</label>
              <Input
                type="text"
                id="accountId"
                name="accountId"
                value={config.accountId}
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

export default ConfigureMeta;
