import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CampaignTable from '../components/CampaignTable';
import CampaignChart from '../components/CampaignChart';

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/');
    } else {
      // Fetch campaign data here
      fetchCampaignData();
    }
  }, [navigate]);

  const fetchCampaignData = () => {
    // Simulated API call
    const mockData = [
      { name: 'Campaign 1', timeframe: '2023-01-01 to 2023-01-31', spent: 1000, impressions: 50000, conversions: 100 },
      { name: 'Campaign 2', timeframe: '2023-02-01 to 2023-02-28', spent: 1500, impressions: 75000, conversions: 150 },
      // Add more mock data as needed
    ];
    setCampaigns(mockData);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Campaign Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Spent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">${campaigns.reduce((sum, campaign) => sum + campaign.spent, 0)}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Impressions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{campaigns.reduce((sum, campaign) => sum + campaign.impressions, 0)}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{campaigns.reduce((sum, campaign) => sum + campaign.conversions, 0)}</p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <CampaignChart campaigns={campaigns} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Details</CardTitle>
            </CardHeader>
            <CardContent>
              <CampaignTable campaigns={campaigns} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
