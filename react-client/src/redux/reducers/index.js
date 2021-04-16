import { combineReducers } from "redux";

import { kyc } from "./kyc"
import { samples } from "./samples"
import { records } from "./records"
import { uploadCSV } from "./uploadCSV"
import { loading } from "./loading"

export const reducer = combineReducers({
    kyc,
    records,
    samples,
    uploadCSV,
    loading
})