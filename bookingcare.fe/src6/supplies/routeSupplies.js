import DoctorManager from '../components/doctorManager/DoctorManager';
import UserManager from '../components/userManager/UserManager';

export const paths = Object.freeze({
 home: '/',
 allPaths: '*',
 notFound: '/not-found',
 system: '/system',
});

export const adminSystemLinks = Object.freeze({
 userManagerLink: `${paths.system}/user-manager`,
 doctorManagerLink: `${paths.system}/doctor-manager`,
 scheduleManagerLink: `${paths.system}/schedule-manager`,
 adminManagerLink: `${paths.system}/admin-manager`,
 clinicManagerLink: `${paths.system}/clinic-manager`,
 specialityManagerLink: `${paths.system}/speciality-manager`,
 handbookManagerLink: `${paths.system}/handbook-manager`,
});

// v69xx2
export const systemRoutes = [
 //users
 {
  path: adminSystemLinks.userManagerLink,
  element: <UserManager />,
 },
 {
  path: adminSystemLinks.doctorManagerLink,
  element: <DoctorManager />,
 },
 {
  path: adminSystemLinks.scheduleManagerLink,
  element: <UserManager />,
 },
 {
  path: adminSystemLinks.adminManagerLink,
  element: <UserManager />,
 },
 {
  path: adminSystemLinks.adminManagerLink,
  element: <UserManager />,
 },

 //clinic
 {
  path: adminSystemLinks.clinicManagerLink,
  element: <UserManager />,
 },

 //speciality
 {
  path: adminSystemLinks.specialityManagerLink,
  element: <UserManager />,
 },

 //handbook
 {
  path: adminSystemLinks.handbookManagerLink,
  element: <UserManager />,
 },

 //index route
 {
  isIndex: true,
  element: <UserManager isIndex={true} />,
 },
];
