import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ManageServices = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Meta', enabled: true },
    { id: 2, name: 'Google Ads', enabled: false },
  ]);

  const [newServiceName, setNewServiceName] = useState('');

  const toggleService = (id) => {
    setServices(services.map(service =>
      service.id === id ? { ...service, enabled: !service.enabled } : service
    ));
  };

  const addService = () => {
    if (newServiceName.trim()) {
      setServices([...services, { id: Date.now(), name: newServiceName, enabled: false }]);
      setNewServiceName('');
    }
  };

  const removeService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Manage Services</h1>
      <div className="grid gap-4">
        {services.map(service => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <Button onClick={() => toggleService(service.id)}>
                {service.enabled ? 'Disable' : 'Enable'}
              </Button>
              <Button variant="destructive" onClick={() => removeService(service.id)}>
                Remove
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex gap-2">
        <Input
          type="text"
          placeholder="New service name"
          value={newServiceName}
          onChange={(e) => setNewServiceName(e.target.value)}
        />
        <Button onClick={addService}>Add Service</Button>
      </div>
    </div>
  );
};

export default ManageServices;
