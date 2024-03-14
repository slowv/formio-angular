import {localStorageSync} from 'ngrx-store-localstorage';
import {ActionReducer} from '@ngrx/store';
import CryptoJS from 'crypto-es';

function encryptFunction(str: string = '') {
  try {
    return CryptoJS.AES.encrypt(str, '11FGA6432KLV98TTY').toString();
  } catch (e) {
    return '';
  }
}

function decryptFunction(str: string = '') {
  try {
    return CryptoJS.AES.decrypt(str, '11FGA6432KLV98TTY').toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return '';
  }
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [{auth: {encrypt: encryptFunction, decrypt: decryptFunction}}],
    rehydrate: true   // allowed init state from local storage
  })(reducer);
}
