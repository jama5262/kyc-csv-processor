package com.jama.kyc.kyccsvprocessor.validate

import com.jama.kyc.kyccsvprocessor.utils.Constants.INVALID_CSV_FORMAT_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.INVALID_FILE_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.SAMPLE_CSV_NOT_FOUND_EXCEPTION
import com.jama.kyc.kyccsvprocessor.validate.Validate.validateCSVHeaders
import com.jama.kyc.kyccsvprocessor.validate.Validate.validateFileExtension
import com.jama.kyc.kyccsvprocessor.validate.Validate.validateSampleFileExists
import org.junit.jupiter.api.Test
import org.assertj.core.api.Assertions.assertThatThrownBy
import java.io.File


internal class ValidateTest {

    @Test
    fun `test validate file does exists`() {
        validateSampleFileExists("sample1.csv")
    }

    @Test
    fun `test validate file does not exists`() {
        assertThatThrownBy {
            validateSampleFileExists("invalidSample1.csv")
        }.hasMessage(SAMPLE_CSV_NOT_FOUND_EXCEPTION)
    }

    @Test
    fun `test validate valid file extension`() {
        val fileName = "samples/sample1.csv"
        validateFileExtension(fileName)
    }

    @Test
    fun `test validate invalid file extension`() {
        val fileName = "sample1.kt"
        assertThatThrownBy {
            validateFileExtension(fileName)
        }.hasMessage(INVALID_FILE_EXCEPTION)
    }

    @Test
    fun `test validate valid csv header format`() {
        val csvHeader = listOf("name", "phone", "dobTimestamp")
        validateCSVHeaders(csvHeader)
    }

    @Test
    fun `test validate invalid csv header format`() {
        val csvHeader = listOf("name", "age", "dobTimestamp")
        assertThatThrownBy {
            validateCSVHeaders(csvHeader)
        }.hasMessage(INVALID_CSV_FORMAT_EXCEPTION)
    }

    @Test
    fun `test validate empty csv header format`() {
        val csvHeader = listOf<String>()
        assertThatThrownBy {
            validateCSVHeaders(csvHeader)
        }.hasMessage(INVALID_CSV_FORMAT_EXCEPTION)
    }

}