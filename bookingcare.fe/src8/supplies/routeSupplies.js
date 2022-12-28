import DoctorManager from '../components/doctorManager/DoctorManager';
import { Notfound } from '../components/homePage/HomePage';
import UserManager from '../components/userManager/UserManager';
import System from '../routes/System';
import HomePage from '../components/homePage/HomePage';
import Login from '../containers/login/Login';
import * as lang from '../utilities/groupedLangs';

const { parentMenuLang, subMenuLang } = lang;
const { userL, clinicL, specialityL, handbookL } = parentMenuLang;

export const paths = Object.freeze({
 home: '/',
 allPaths: '*',
 notFound: '/not-found',
 system: '/system',
 login: '/login',
});

const systemLinks = Object.freeze({
 userManagerLink: `${paths.system}/user-manager`,
 doctorManagerLink: `${paths.system}/doctor-manager`,
 scheduleManagerLink: `${paths.system}/schedule-manager`,
 adminManagerLink: `${paths.system}/admin-manager`,
 clinicManagerLink: `${paths.system}/clinic-manager`,
 specialityManagerLink: `${paths.system}/speciality-manager`,
 handbookManagerLink: `${paths.system}/handbook-manager`,
});

export const parentRoutes = [
 {
  path: paths.home,
  element: <HomePage />,
 },
 {
  path: paths.system,
  element: <System />, // v41xx2
 },
 {
  path: paths.login,
  element: <Login />, //v41xx2
 },
 {
  path: paths.allPaths,
  element: <Notfound />,
 },
];

export const systemRoutes = [
 //users
 {
  path: systemLinks.userManagerLink,
  element: <UserManager />,
 },
 {
  path: systemLinks.doctorManagerLink,
  element: <DoctorManager />,
 },
 {
  path: systemLinks.scheduleManagerLink,
  element: <UserManager />,
 },
 {
  path: systemLinks.adminManagerLink,
  element: <UserManager />,
 },
 {
  path: systemLinks.adminManagerLink,
  element: <UserManager />,
 },

 //clinic
 {
  path: systemLinks.clinicManagerLink,
  element: <UserManager />,
 },

 //speciality
 {
  path: systemLinks.specialityManagerLink,
  element: <UserManager />,
 },

 //handbook
 {
  path: systemLinks.handbookManagerLink,
  element: <UserManager />,
 },

 //index route
 {
  index: true,
  element: <UserManager />,
 },
];

export const adminMenu = [
 //system: user
 {
  name: userL,
  subMenu: [
   {
    name: subMenuLang.userManagerL,
    link: systemLinks.userManagerLink,
   },
   {
    name: subMenuLang.doctorManagerL,
    link: systemLinks.doctorManagerLink,
   },
   {
    name: subMenuLang.scheduleManagerL,
    link: systemLinks.scheduleManagerLink,
   },
   {
    name: subMenuLang.adminManagerL,
    link: systemLinks.adminManagerLink,
   },
  ],
 },

 //system: clinic
 {
  name: clinicL,
  subMenu: [
   {
    name: subMenuLang.clinicManagerL,
    link: systemLinks.clinicManagerLink,
   },
  ],
 },

 //system: speciality
 {
  name: specialityL,
  subMenu: [
   {
    name: subMenuLang.specialityManagerL,
    link: systemLinks.specialityManagerLink,
   },
  ],
 },

 //system: handbook
 {
  name: handbookL,
  subMenu: [
   {
    name: subMenuLang.handbookManagerL,
    link: systemLinks.handbookManagerLink,
   },
  ],
 },
];
