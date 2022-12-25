import * as lang from '../utilities/groupedLangs';
import { adminSystemLinks } from './routeSupplies';

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

const {
 userManagerLink,
 doctorManagerLink,
 scheduleManagerLink,
 adminManagerLink,
 clinicManagerLink,
 specialityManagerLink,
 handbookManagerLink,
} = adminSystemLinks;

export const adminMenu = [
 //system: user
 {
  name: userL,
  subMenu: [
   {
    name: userManagerL,
    link: userManagerLink,
   },
   {
    name: doctorManagerL,
    link: doctorManagerLink,
   },
   {
    name: scheduleManagerL,
    link: scheduleManagerLink,
   },
   {
    name: adminManagerL,
    link: adminManagerLink,
   },
  ],
 },

 //system: clinic
 {
  name: clinicL,
  subMenu: [
   {
    name: clinicManagerL,
    link: clinicManagerLink,
   },
  ],
 },

 //system: speciality
 {
  name: specialityL,
  subMenu: [
   {
    name: specialityManagerL,
    link: specialityManagerLink,
   },
  ],
 },

 //system: handbook
 {
  name: handbookL,
  subMenu: [
   {
    name: handbookManagerL,
    link: handbookManagerLink,
   },
  ],
 },
];
