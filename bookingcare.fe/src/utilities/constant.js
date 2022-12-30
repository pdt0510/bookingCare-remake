export const ObjectKeysValues = Object.freeze({
 //user
 user: 'user',
 userInfo: 'userInfo',
 isLoggedIn: 'isLoggedIn',
 isLoadingSymbol: 'isLoadingSymbol',

 //login comp
 email: 'email',
 password: 'password',

 //app
 vi: 'vi',
 en: 'en',
 app: 'app',
 language: 'language',

 //others
 activeClass: 'actived',
 menuGroupClass: 'menuGroup',
});

export const clientMessages = Object.freeze({
 emailErr: 'Email is not correct',
 passwordErr: 'At least 8 chars, including of upper/lower/number/special (@ * , ! ...)',
});

export const LANGUAGES = {
 VI: ObjectKeysValues.vi,
 EN: ObjectKeysValues.en,
};

export const dateFormat = {
 DMY: 'DD/MM/YYYY',
 dDM: 'dddd, DD/MM',
 weekdaysVI: `C.Nhật_Thứ 2_Thứ 3_Thứ 4_Thứ 5_Thứ 6_Thứ 7`.split('_'),
 weekdaysEN: `Sun_Mon_Tue_Wed_Thu_Fri_Sat`.split('_'),
};
