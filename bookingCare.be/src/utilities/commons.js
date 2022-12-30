import moment from 'moment';
import { dateFormat, LANGUAGES } from './constant';

class Commons {
 static convertFileToImgBlobUrl(fileObj) {
  return URL.createObjectURL(fileObj);
 }

 static convertFileToString(fileObj) {
  return new Promise((resolve, reject) => {
   const reader = new FileReader();
   reader.readAsDataURL(fileObj);
   reader.onload = () => resolve(reader.result);
   reader.onerror = (error) => reject(error);
  });
 }

 static convertBinaryToString(binaryObj) {
  return new Buffer.from(binaryObj).toString();
 }

 static formatCurrency = (priceId, priceList) => {
  const priceLength = priceList.length;
  for (let idx = 0; idx < priceLength; idx++) {
   let viCurrency = null;
   let dollarCurrency = null;

   if (priceList[idx].keymap === priceId) {
    dollarCurrency = `${priceList[idx].valueEN}`;
    viCurrency = `${priceList[idx].valueVI.slice(0, 3)}.000`;
    return { viCurrency, dollarCurrency };
   }
  }

  return null;
 };

 static convertObjDateTo_DMYstr = (date) => {
  if (date) {
   return moment(date).format(dateFormat.DMY);
  }
  return null;
 };

 static convertObjDateTo_dDMstr = (date) => {
  if (date) {
   return moment(date).format(dateFormat.dDM);
  }
  return null;
 };

 static convertStrDateToTimestamp = (strDate) => {
  if (strDate) {
   const dateObj = moment(strDate, 'DD/MM/YYYY');
   return Date.parse(dateObj);
  }
  return null;
 };

 static convertTimestampTo_dDMstr = (timestamp) => {
  if (timestamp) {
   return moment(timestamp).format(dateFormat.dDM);
  }
  return null;
 };

 static convertTimestampTo_DMYstr = (timestamp) => {
  if (timestamp) {
   return moment(timestamp).format(dateFormat.DMY);
  }
  return null;
 };

 static convertHtmlStrToText = (htmlStr) => {
  if (htmlStr) {
   return <span dangerouslySetInnerHTML={{ __html: htmlStr }} />;
  }
  return <span>No content</span>;
 };

 static switchLangLocally = (language) => {
  const { weekdaysVI, weekdaysEN } = dateFormat;
  if (language === LANGUAGES.EN) {
   return moment.updateLocale(LANGUAGES.EN, { weekdays: weekdaysEN });
  } else {
   return moment.updateLocale(LANGUAGES.VI, { weekdays: weekdaysVI });
  }
 };

 static checkEmailRegex = (emailStr) => {
  return new Promise(async (resolve, reject) => {
   try {
    const regex = /^\w+(\.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const isChecked = await regex.test(emailStr);
    resolve(isChecked);
   } catch (error) {
    reject(error);
   }
  });
 };

 static checkUsername = (str) => {
  //20 <= chars >= 8, chữ hoa, thường, số
  const regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  return regex.test(str);
 };

 static checkPasswordRegex = (passwordStr) => {
  return new Promise(async (resolve, reject) => {
   try {
    // >= 8 chars, chữ hoa + thường + số + đặc biệt (! @ ^..)
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    resolve(regex.test(passwordStr));
   } catch (error) {
    reject(error);
   }
  });
 };

 static numberRegex = (number) => {
  const regex = /^[0-9]+$/;
  return regex.test(number);
 };
}

export default Commons;
