import { Home, LayoutDashboard, Settings, Link } from "lucide-react";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ManageServices from "./pages/ManageServices.jsx";
import ConfigureMeta from "./pages/ConfigureMeta.jsx";
import ConfigureGAds from "./pages/ConfigureGAds.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Manage Services",
    to: "/manage-services",
    icon: <Settings className="h-4 w-4" />,
    page: <ManageServices />,
  },
  {
    title: "Configure Meta",
    to: "/configure-meta",
    icon: <Link className="h-4 w-4" />,
    page: <ConfigureMeta />,
  },
  {
    title: "Configure G-Ads",
    to: "/configure-gads",
    icon: <Link className="h-4 w-4" />,
    page: <ConfigureGAds />,
  },
];
