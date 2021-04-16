import { combineReducers } from "redux";

import { kyc } from "./kyc"
import { samples } from "./samples"
import { records } from "./records"
import { uploadCSV } from "./uploadCSV"

export const reducer = combineReducers({
    kyc,
    records,
    samples,
    uploadCSV
})