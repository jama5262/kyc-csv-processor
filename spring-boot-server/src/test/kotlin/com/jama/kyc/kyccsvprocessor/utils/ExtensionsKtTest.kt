package com.jama.kyc.kyccsvprocessor.utils

import com.jama.kyc.kyccsvprocessor.utils.Constants.INVALID_CSV_FORMAT_EXCEPTION
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.Test
import java.io.File

class ExtensionsKtTest {

    @Test
    fun `test get list of records from csv string`() {
        val csvString = """
            name,phone,dobTimestamp
            Mike James,0790749401,1618390321123
            Diana Jonnes,0790749401,1618390321123
        """.trimIndent()
        val records = csvString.records()
        assertThat(records)
            .hasSize(2)
    }

    @Test
    fun `test get list of records from csv file`() {
        val path = "src/test/resources/samples/sample1.csv"
        val csvFile = File(path)
        val records = csvFile.records()
        assertThat(records)
            .hasSize(2)
    }

    @Test
    fun `test get list of records from empty string`() {
        val csvString = ""

        assertThatThrownBy {
            csvString.records()
        }.hasMessage(INVALID_CSV_FORMAT_EXCEPTION)
    }

}