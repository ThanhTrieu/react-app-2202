export const REQUEST_SEARCH_WEATHER = Symbol('REQUEST_SEARCH_WEATHER'); // action xuat phat tu nguoi dung

// type action redux toolkit - bat buoc dang string
export const REQUEST_WEATHER = 'REQUEST_WEATHER';

// middleware redux saga se nhan action ben tren va tra ve cac action khac de dispacth vao store
// action REQUEST_SEARCH_WEATHER : call api backend de lay data ==> viec xu ly sideEffect ben ngoai ung dung (thong thuong la cac cong viec xu ly bat dong bo)
// redux saga no se giup minh kiem soat duoc cong viec sideEffect do va ho tro cho cac cong viec xu ly du lieu sau nay

export const START_SEARCH_WEATHER   = Symbol('START_SEARCH_WEATHER'); // action cua saga
export const SEARCH_WEATHER_SUCCESS = Symbol('SEARCH_WEATHER_SUCCESS'); // action cua saga
export const SEARCH_WEATHER_FAIL   = Symbol('SEARCH_WEATHER_FAIL'); // action cua saga
export const FINISH_SEARCH_WEATHER = Symbol('FINISH_SEARCH_WEATHER'); // action cua saga