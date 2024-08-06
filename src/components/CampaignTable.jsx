import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CampaignTable = ({ campaigns }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Timeframe</TableHead>
          <TableHead>Spent</TableHead>
          <TableHead>Impressions</TableHead>
          <TableHead>Conversions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {campaigns.map((campaign, index) => (
          <TableRow key={index}>
            <TableCell>{campaign.name}</TableCell>
            <TableCell>{campaign.timeframe}</TableCell>
            <TableCell>${campaign.spent}</TableCell>
            <TableCell>{campaign.impressions}</TableCell>
            <TableCell>{campaign.conversions}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CampaignTable;
