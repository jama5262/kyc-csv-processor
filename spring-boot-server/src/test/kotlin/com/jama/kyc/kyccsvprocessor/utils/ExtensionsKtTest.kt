package com.jama.kyc.kyccsvprocessor.utils

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import java.io.File
import java.io.FileNotFoundException

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
    fun `test get list of records from empty string`() {
        val csvString = ""
        val records = csvString.records()
        assertThat(records).isEmpty()
    }

    @Test
    fun `test get list of records File location`() {
        val csvFile = File("src/main/resources/samples/sample2.csv")
        val records = csvFile.records()
        assertThat(records)
            .hasSize(2)
    }

    @Test
    fun `test get list of records invalid File location`() {
        val csvFile = File("src/main/resources/samples/invalidSample2.csv")

        assertThrows<FileNotFoundException> {
            csvFile.records()
        }
    }

}