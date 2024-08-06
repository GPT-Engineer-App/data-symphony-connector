import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto py-4 px-4 flex justify-center items-center">
        <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 mx-2">
          Privacy Policy
        </Link>
        <span className="text-gray-500 mx-2">|</span>
        <Link to="/terms-and-conditions" className="text-blue-600 hover:text-blue-800 mx-2">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
