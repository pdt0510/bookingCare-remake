import * as lang from '../utilities/groupedLangs';

const { userL, clinicL, specialityL, handbookL } = lang.parentMenuLang;
const {
 userManagerL,
 doctorManagerL,
 scheduleManagerL,
 adminManagerL,
 clinicManagerL,
 specialityManagerL,
 handbookManagerL,
} = lang.subMenuLang;

export const adminMenu = [
 {
  name: userL,
  subMenu: [
   {
    name: userManagerL,
    link: null,
   },
   {
    name: doctorManagerL,
    link: null,
   },
   {
    name: scheduleManagerL,
    link: null,
   },
   {
    name: adminManagerL,
    link: null,
   },
  ],
 },
 {
  name: clinicL,
  subMenu: [
   {
    name: clinicManagerL,
    link: null,
   },
  ],
 },
 {
  name: specialityL,
  subMenu: [
   {
    name: specialityManagerL,
    link: null,
   },
  ],
 },
 {
  name: handbookL,
  subMenu: [
   {
    name: handbookManagerL,
    link: null,
   },
  ],
 },
];
