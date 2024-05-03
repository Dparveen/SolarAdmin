import Dashboard from "views/Dashboard.js";
import Deaprtments from "views/Department";
import Inquery from "views/Inquery";
import Notifications from "views/Notifications.js";
import Staff from "views/Staff";
import Tracking from "views/Tracking";
import UserPage from "views/User.js";
import Users from "views/Users";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/inquery",
    name: "Inquery",
    icon: "nc-icon nc-tile-56",
    component: <Inquery />,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "New User",
    icon: "nc-icon nc-circle-10",
    component: <Users />,
    layout: "/admin",
  },
  {
    path: "/department",
    name: "Department",
    icon: "nc-icon nc-shop",
    component: <Deaprtments />,
    layout: "/admin",
  },
  {
    path: "/staff",
    name: "Staff",
    icon: "nc-icon nc-circle-10",
    component: <Staff />,
    layout: "/admin",
  },
  {
    path: "/tracking",
    name: "Track Order",
    icon: "nc-icon nc-circle-10",
    component: <Tracking />,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: <UserPage />,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: <TableList />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
];
export default routes;
