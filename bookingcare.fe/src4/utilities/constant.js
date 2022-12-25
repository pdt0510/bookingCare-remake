export const ObjectKeysValues = {
 //user
 user: 'user',
 userInfo: 'userInfo',
 isLoggedIn: 'isLoggedIn',
 isLoadingSymbol: 'isLoadingSymbol',

 //app
 vi: 'vi',
 en: 'en',
 app: 'app',
 language: 'language',
};

export const LANGUAGES = {
 vi: 'vi',
 en: 'en',
};

export const manageActions = {
 ADD: 'ADD',
 EDIT: 'EDIT',
 DELETE: 'DELETE',
};

export const dateFormat = {
 DMY: 'DD/MM/YYYY',
 dDM: 'dddd, DD/MM',
 weekdaysVI: `C.Nhật_Thứ 2_Thứ 3_Thứ 4_Thứ 5_Thứ 6_Thứ 7`.split('_'),
 weekdaysEN: `Sun_Mon_Tue_Wed_Thu_Fri_Sat`.split('_'),
};

export const YesNoObj = {
 YES: 'Y',
 NO: 'N',
};

export const USER_ROLES = {
 ADMIN: 'R1',
 DOCTOR: 'R2',
 PATIENT: 'R3',
};

export const CURRENCY = {
 PRICEtype: 'PRICE',
 SPECIALITYtype: 'SPECIALITY',
 vnd: 'VNĐ',
 dollar: 'USD',
};

export const DOCTOR_DEFAULTS = {
 doctorDetail: {
  contentHTML: 'No content',
  contentMarkdown: 'No content',
  description: 'No description',
 },
 doctorInfo: {
  clinicName: '',
  clinicAddress: '',
  note: '',
  paymentId: 'PAY1',
  priceId: 'PRI1',
  provinceId: 'PRO1',
  specialityId: 1,
  clinicId: 1,
 },
};

export const ALLCODE_DEFAULTS = {
 PRIcol: 'PRI',
 PAYcol: 'PAY',
 PROcol: 'PRO',
};

export const DOCTORSCHEDULE_DEFAULTS = {
 today: 'Today',
 homNay: 'Hôm nay',
 fulltime: 'fulltime',
};

export const DETAIL_SPECIALITY_DEFAULTS = {
 provinceKey: {
  HCM: 'PRO2',
  HN: 'PRO1',
  toanQuoc: 'ALL',
 },
};
