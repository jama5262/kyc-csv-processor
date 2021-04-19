package com.jama.kyc.kyccsvprocessor.utils

object Constants {

    val CVS_HEADERS = listOf("name", "phone", "dobTimestamp")
    val SAMPLE_FILES = listOf("sample1.csv", "sample2.csv", "sample3.csv")

    const val INVALID_FILE_EXCEPTION = "Invalid CVS file, please try and upload again"
    const val SAMPLE_CSV_NOT_FOUND_EXCEPTION = "The sample CSv does not exist"
    const val INVALID_CSV_FORMAT_EXCEPTION = "Please upload a valid CSV format"
    const val KYC_NOT_FOUND_EXCEPTION = "KYC does not exist"
    const val ADD_RECORD_EXCEPTION = "Failed to add record"
    const val UPDATE_RECORD_EXCEPTION = "Failed to update record"
    const val DELETE_RECORD_EXCEPTION = "No record found to delete"
}