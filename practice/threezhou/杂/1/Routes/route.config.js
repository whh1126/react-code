import All from "../pages/All";
import Create from "../pages/Create";
import Join from "../pages/Join";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const route = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/create/detail/:id",
        component: Detail
      },
      {
        path: "/all",
        component: All,
        navTitle: "所有"
      },
      {
        path: "/create",
        component: Create,
        navTitle: "创建"
      },
      {
        path: "/join",
        component: Join,
        navTitle: "参加"
      }
    ]
  }
];

export default route;
