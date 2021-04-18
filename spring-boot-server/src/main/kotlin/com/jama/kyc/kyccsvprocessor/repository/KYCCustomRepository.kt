package com.jama.kyc.kyccsvprocessor.repository

import com.jama.kyc.kyccsvprocessor.model.Record
import com.jama.kyc.kyccsvprocessor.model.Success

interface KYCCustomRepository {

    @Throws(Exception::class)
    fun addRecord(id: String, record: Record): Success

    @Throws(Exception::class)
    fun updateRecord(id: String, record: Record): Success

    @Throws(Exception::class)
    fun deleteRecord(id: String, recordId: String): Success

}