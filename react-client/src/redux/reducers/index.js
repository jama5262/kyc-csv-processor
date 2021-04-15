import { combineReducers } from "redux";

import { kyc } from "./kyc"
import { samples } from "./samples"
import { records } from "./records"

export const reducer = combineReducers({
    kyc,
    records,
    samples
})