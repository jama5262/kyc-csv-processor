package com.jama.kyc.kyccsvprocessor.repository

import com.jama.kyc.kyccsvprocessor.utils.records
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class KYCRepositoryTest {

    @Test
    fun `test get list of records from string`() {
        val csvString = """
            name,phone,dobTimestamp
            Mike James,0790749401,1618390321123
            Diana Jonnes,0790749401,1618390321123
        """.trimIndent()

        val records = csvString.records()

        assertThat(records)
            .hasSize(2)
    }

}