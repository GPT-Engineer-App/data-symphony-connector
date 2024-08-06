import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Welcome to Campaign Dashboard Demo. By accessing this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>
          <h3 className="text-xl font-semibold mb-2">Use of the Application</h3>
          <p className="mb-4">
            This application is a demo and should not be used for actual campaign management. It is intended for demonstration purposes only.
          </p>
          <h3 className="text-xl font-semibold mb-2">No Data Collection</h3>
          <p className="mb-4">
            We do not collect, store, or process any personal information or user data through this application.
          </p>
          <h3 className="text-xl font-semibold mb-2">Disclaimer</h3>
          <p className="mb-4">
            The information provided in this demo application is for illustrative purposes only and does not reflect real campaign data or performance.
          </p>
          <h3 className="text-xl font-semibold mb-2">Changes to Terms</h3>
          <p>
            We reserve the right to modify these terms at any time. Please review this page periodically for changes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsAndConditions;
