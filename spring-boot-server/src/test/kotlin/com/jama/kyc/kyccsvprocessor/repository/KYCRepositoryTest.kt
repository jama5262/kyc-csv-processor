package com.jama.kyc.kyccsvprocessor.repository

import com.jama.kyc.kyccsvprocessor.model.KYC
import com.jama.kyc.kyccsvprocessor.model.Record
import com.jama.kyc.kyccsvprocessor.utils.Constants.DELETE_RECORD_EXCEPTION
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.AfterEach
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest

@DataMongoTest
class KYCRepositoryTest {

    @Autowired
    private lateinit var repository: KYCRepository

    private lateinit var kycId: String
    private lateinit var record1Id: String

    @BeforeEach
    fun setUp() {
        val record1 = Record(
            name = "John Doe",
            phone = "0712345678",
            dobTimestamp = 1618390321123
        )

        val record2 = Record(
            name = "Diana Doe",
            phone = "0787654321",
            dobTimestamp = 1618390321123
        )

        val kyc = KYC(
            name = "Students",
            fileName = "students.csv",
            records = listOf(record1, record2)
        )

        val savedKYC = repository.save(kyc)
        kycId = savedKYC.id!!
        record1Id = record1.id
    }

    @AfterEach
    fun tearDown() {
        repository.deleteAll()
    }

    @Test
    fun `test add new record`() {
        val record = Record(
            name = "James Doe",
            phone = "0787654321",
            dobTimestamp = 1618390321123
        )
        val success = repository.addRecord(kycId, record)
        val addedRecord = success.result as Record
        val kyc = repository.findById(kycId).get()
        assertThat(kyc.records)
            .contains(addedRecord)
            .hasSize(3)
    }

    @Test
    fun `test update record`() {
        val record = Record(
            record1Id,
            "Kevin Doe",
            "0712345678",
            1618390321123
        )
        val success = repository.updateRecord(kycId, record)
        val updatedRecord = success.result as Record
        val kyc = repository.findById(kycId).get()
        assertThat(kyc.records)
            .contains(updatedRecord)
            .hasSize(2)
    }

    @Test
    fun `test delete record`() {
        repository.deleteRecord(kycId, record1Id)

        val kyc = repository.findById(kycId).get()
        assertThat(kyc.records)
            .hasSize(1)
    }

    @Test
    fun `test delete record that does not exist`() {
        val randomRecordId = "random id"
        assertThatThrownBy {
            repository.deleteRecord(kycId, randomRecordId)
        }.hasMessage(DELETE_RECORD_EXCEPTION)
    }

}