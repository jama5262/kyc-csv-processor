package com.jama.kyc.kyccsvprocessor.validate

import com.jama.kyc.kyccsvprocessor.utils.Constants
import com.jama.kyc.kyccsvprocessor.utils.Constants.INVALID_CSV_FORMAT_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.INVALID_FILE_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.SAMPLE_CSV_NOT_FOUND_EXCEPTION
import java.io.File

object Validate {

    fun validateCSVHeaders(records: List<String>) {
        if (records != Constants.csvHeaders) {
            throw Exception(INVALID_CSV_FORMAT_EXCEPTION)
        }
    }

    fun validateSampleFileExists(path: String) {
        val exists = File(path).exists()
        if (!exists) throw Exception(SAMPLE_CSV_NOT_FOUND_EXCEPTION)
    }

    fun validateFileExtension(fileName: String) {
        if (fileName.takeLast(4) != ".csv") {
            throw Exception(INVALID_FILE_EXCEPTION)
        }
    }

}