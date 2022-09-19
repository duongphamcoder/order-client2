import DefaultComponent from "./Component/default/index";
import CompanyPage from "./Component/public/company/conpmany";
import ContactPage from "./Component/public/contact/contact";
import HomePage from "./Component/public/home/home";
import OrderPage from "./Component/public/order/order";
import OtherOrderPage from "./Component/public/order/other";
import Form from "./Component/public/form";
import LoginPage from "./Component/public/form/login/login";
import RegisterPage from "./Component/public/form/register/register";
import ProfilePage from "./Component/private/profile/profile";
import DashBoard from "./Component/admin/defaultLayout/admin";
import AdminHomePage from "./Component/admin/home/admin.home";
import AllProduct from "./Component/admin/product/all_product/all_product";
import AddProduct from "./Component/admin/product/add_product/add_product";
import AllACcount from "./Component/admin/account/all_account";
import AdminLoginPage from "./Component/admin/login/login";
import ErrorPage from "./Component/public/404/error";

const RoutesPubic = [
  {
    path: "/order/:slug",
    component: OrderPage,
    layout: DefaultComponent,
  },
  {
    path: "/order",
    component: OtherOrderPage,
    layout: DefaultComponent,
  },
  {
    path: "/company",
    component: CompanyPage,
    layout: DefaultComponent,
  },
  {
    path: "/contact",
    component: ContactPage,
    layout: DefaultComponent,
  },
  {
    path: "/form/login",
    component: Form,
    layout: null,
    children: LoginPage,
  },
  {
    path: "/form/register",
    component: Form,
    layout: null,
    children: RegisterPage,
  },
  {
    path: "/",
    component: HomePage,
    layout: DefaultComponent,
  },

  {
    path: "*",
    component: ErrorPage,
    layout: null,
  },
];

const RoutesPrivate = [
  // {
  //   path: "/user/profile",
  //   component: ProfilePage,
  //   layout: DefaultComponent,
  // },
];

const RoutesAdmin = [
  {
    path: "/admin/dashboard",
    component: AdminHomePage,
    layout: DashBoard,
  },
  {
    path: "/admin/all-product",
    component: AllProduct,
    layout: DashBoard,
  },
  {
    path: "/admin/add-product",
    component: AddProduct,
    layout: DashBoard,
  },
  {
    path: "/admin/all-account",
    component: AllACcount,
    layout: DashBoard,
  },
  {
    path: "/admin/login",
    component: AdminLoginPage,
    layout: null,
  },
];

export { RoutesPubic, RoutesPrivate, RoutesAdmin };
