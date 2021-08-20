/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Requests from "views/Requests";
import Legacy from "views/Legacy";
import Burials from "views/Burials";
import Donations from "views/Donations";
import Charity from "views/Charity";
import LegacyDetail from "views/LegacyDetail";
import UserDetail from "views/UserDetail";
import Users from "views/Users";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    sidebar:true
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-notes",
    component: Users,
    layout: "/admin",
    sidebar:true
  },
  {
    path: "/legacy",
    name: "Digital Legacies",
    icon: "nc-icon nc-notes",
    component: Legacy,
    layout: "/admin",
    sidebar:true
  },
  {
    path: "/burials",
    name: "Burials",
    icon: "nc-icon nc-square-pin",
    component: Burials,
    layout: "/admin",
    sidebar:true
  },
  {
    path: "/charity",
    name: "Charity",
    icon: "nc-icon nc-favourite-28",
    component: Charity,
    layout: "/admin",
    sidebar:true
  },
  {
    path: "/donations",
    name: "Donations",
    icon: "nc-icon nc-money-coins",
    component: Donations,
    layout: "/admin",
    sidebar:false
  },
  {
    path: "/requests",
    name: "Donation Requests",
    icon: "nc-icon nc-money-coins",
    component: Requests,
    layout: "/admin",
    sidebar:true
  },
  {
    path: "/legacyDetail",
    name: "Digital Legacy Detail",
    icon: "nc-icon nc-money-coins",
    component: LegacyDetail,
    layout: "/admin",
    sidebar:false
  },
  {
    path: "/userDetail",
    name: "User Detail",
    icon: "nc-icon nc-money-coins",
    component: UserDetail,
    layout: "/admin",
    sidebar:false
  },
  
];

export default dashboardRoutes;
