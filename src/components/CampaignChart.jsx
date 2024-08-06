import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CampaignChart = ({ campaigns }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={campaigns}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="spent" fill="#8884d8" name="Spent ($)" />
        <Bar yAxisId="right" dataKey="impressions" fill="#82ca9d" name="Impressions" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CampaignChart;
