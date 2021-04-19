package com.jama.kyc.kyccsvprocessor.utils

object Constants {

    val CVS_HEADERS = listOf("name", "phone", "dobTimestamp")
    val SAMPLE_FILES = listOf("name", "phone", "dobTimestamp")

    const val INVALID_FILE_EXCEPTION = "Please upload valid a CSV file"
    const val SAMPLE_CSV_NOT_FOUND_EXCEPTION = "Sample CSV files not found"
    const val INVALID_CSV_FORMAT_EXCEPTION = "Invalid CSV format"
    const val KYC_NOT_FOUND_EXCEPTION = "KYC does not exist"
    const val ADD_RECORD_EXCEPTION = "Failed to add KYC record"
    const val UPDATE_RECORD_EXCEPTION = "Failed to update KYC record"
    const val DELETE_RECORD_EXCEPTION = "No record found to delete"


}