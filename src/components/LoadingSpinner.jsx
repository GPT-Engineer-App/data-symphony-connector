import { Loader2 } from "lucide-react";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <Loader2 className="h-16 w-16 animate-spin text-primary" />
  </div>
);

export default LoadingSpinner;
