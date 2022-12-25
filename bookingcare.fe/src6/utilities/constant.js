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

 //others
 activeClass: 'actived',
};

const { vi, en } = ObjectKeysValues;
export const LANGUAGES = {
 vi: vi,
 en: en,
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
