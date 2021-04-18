package com.jama.kyc.kyccsvprocessor.utils

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

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

}