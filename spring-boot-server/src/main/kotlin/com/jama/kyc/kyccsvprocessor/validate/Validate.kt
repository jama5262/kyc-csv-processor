package com.jama.kyc.kyccsvprocessor.validate

import com.jama.kyc.kyccsvprocessor.utils.Constants
import com.jama.kyc.kyccsvprocessor.utils.Constants.INVALID_CSV_FORMAT_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.INVALID_FILE_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.SAMPLE_CSV_NOT_FOUND_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.FileUtil.isFilePathValid

object Validate {

    fun validateIfCSVEmpty(records: List<List<String>>) {
        if (records.isEmpty()) throw Exception(INVALID_CSV_FORMAT_EXCEPTION)
    }

    fun validateCSVHeaders(records: List<String>) {
        if (records != Constants.CVS_HEADERS) throw Exception(INVALID_CSV_FORMAT_EXCEPTION)
    }

    fun validateSampleFileExists(fileName: String) {
        isFilePathValid(fileName) ?: throw Exception(SAMPLE_CSV_NOT_FOUND_EXCEPTION)
    }

    fun validateFileExtension(fileName: String) {
        if (fileName.takeLast(4) != ".csv") throw Exception(INVALID_FILE_EXCEPTION)
    }

}