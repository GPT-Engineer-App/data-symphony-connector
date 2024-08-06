import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CampaignTable from '../components/CampaignTable';
import CampaignChart from '../components/CampaignChart';
import { mockCampaignData } from '../lib/mockData';

const Dashboard = () => {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState('all');
  const campaigns = mockCampaignData;

  const handleLogout = () => {
    navigate('/');
  };

  const totalSpent = campaigns.reduce((sum, campaign) => sum + campaign.spent, 0);
  const totalImpressions = campaigns.reduce((sum, campaign) => sum + campaign.impressions, 0);
  const totalConversions = campaigns.reduce((sum, campaign) => sum + campaign.conversions, 0);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Campaign Dashboard</h1>
        <Button onClick={handleLogout}>Back to Home</Button>
      </div>
      <div className="mb-4">
        <Select value={dataSource} onValueChange={setDataSource}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select data source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="meta">Meta</SelectItem>
            <SelectItem value="gads">Google Ads</SelectItem>
          </SelectContent>
        </Select>
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
                <p className="text-2xl font-bold">${totalSpent.toLocaleString()}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Impressions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{totalImpressions.toLocaleString()}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{totalConversions.toLocaleString()}</p>
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
