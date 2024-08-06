import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            At Campaign Dashboard Demo, we are committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and disclosure of your information.
          </p>
          <h3 className="text-xl font-semibold mb-2">Information Collection and Use</h3>
          <p className="mb-4">
            We do not track users or collect any personal information. This application is a demo and does not store or process any user data.
          </p>
          <h3 className="text-xl font-semibold mb-2">Data Security</h3>
          <p className="mb-4">
            As we do not collect or store any user information, there is no risk of your data being compromised through our application.
          </p>
          <h3 className="text-xl font-semibold mb-2">Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
