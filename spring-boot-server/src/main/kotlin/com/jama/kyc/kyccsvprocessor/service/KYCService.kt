package com.jama.kyc.kyccsvprocessor.service

import org.springframework.stereotype.Service

@Service
class KYCService {

    fun uploadCSV() {}

    fun uploadSampleCSV() {}

    fun getAllKYC() = "Get all KYC"

    fun getKYC(id: String) = "Get KYC $id"

    fun deleteKYC(id: String) = 0

    fun addRecord(id: String, recordId: String) {}

    fun updateRecord(id: String, recordId: String) = 0

    fun deleteRecord(id: String, recordId: String) = 0

}