import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_FLIGHT,
  LOAD_FLIGHT_SUCCEED,
  LOAD_FLIGHT_FAILED
} from "../constant";

import { loadFlights } from "../apis/api";
import { get_data } from "../temp_data_reciever";

function* getFlights(action) {
  // const response = yield call(loadFlights, action);
  // if(response.statusText === 'OK') {
  //     yield put({type: LOAD_FLIGHT_SUCCEED, flights: response.data});
  // } else {
  //     yield put({type: LOAD_FLIGHT_FAILED, errors: response.errors});
  // }
  yield put({ type: LOAD_FLIGHT_SUCCEED, flights: get_data() });
}

export const flightSaga = [takeLatest(LOAD_FLIGHT, getFlights)];
