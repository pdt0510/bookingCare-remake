import { toast } from 'react-toastify';

export const ObjectKeysValues = Object.freeze({
 //user
 user: 'user',
 userInfo: 'userInfo',
 isLoggedIn: 'isLoggedIn',

 //login comp
 email: 'email',
 password: 'password',
 firstname: 'firstname',
 lastname: 'lastname',
 address: 'address',

 //app
 vi: 'vi',
 en: 'en',
 app: 'app',
 language: 'language',
 isLoadingSymbol: 'isLoadingSymbol',

 //others
 activeClass: 'actived',
 menuGroupClass: 'menuGroup',
 delayTime: 1000,
 noErrors: 0,
});

export const dateFormat = Object.freeze({
 DMY: 'DD/MM/YYYY',
 dDM: 'dddd, DD/MM',
 weekdaysVI: `C.Nhật_Thứ 2_Thứ 3_Thứ 4_Thứ 5_Thứ 6_Thứ 7`.split('_'),
 weekdaysEN: `Sun_Mon_Tue_Wed_Thu_Fri_Sat`.split('_'),
});

export const LANGUAGES = {
 VI: ObjectKeysValues.vi,
 EN: ObjectKeysValues.en,
};

export const clientMessages = {
 emailErr: 'Email is not correct',
 passwordErr: 'At least 8 chars, including of upper/lower/number/special (@ * , ! ...)',
};

export const displayToast = {
 toastSuccess: (mess) => toast.success(mess ? mess : 'Successfully requested', { autoClose: 1000 }),
 toastError: (mess) => toast.error(mess ? mess : 'Failed requested'),
};
