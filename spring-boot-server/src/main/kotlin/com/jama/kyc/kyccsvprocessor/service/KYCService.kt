package com.jama.kyc.kyccsvprocessor.service

import com.jama.kyc.kyccsvprocessor.model.KYC
import com.jama.kyc.kyccsvprocessor.repository.KYCRepository
import com.jama.kyc.kyccsvprocessor.utils.records
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.io.File

@Service
class KYCService {

    @Autowired
    private lateinit var repository: KYCRepository

    fun uploadCSV(file: MultipartFile, fileName: String) {
        val records = String(file.bytes).records()
        println(fileName)
    }

    fun uploadSampleCSV(fileName: String) {
        val records = File("src/main/resources/samples/$fileName")
        println(records)
    }

    fun getAllSampleFiles(): List<String> {
        return File("src/main/resources/samples")
            .walk()
            .filter { it.extension == "csv" }
            .map {
            println(it.name)
            it.name
        }.toList()
    }

    fun getAllKYC(): List<KYC> {
        return repository.findAll()
    }

    fun getKYC(id: String): KYC {
        return repository.findById(id).orElseThrow {
            Exception("not found")
        }
    }

    fun deleteKYC(id: String) {
        return repository.deleteById(id)
    }

    fun addRecord(id: String, recordId: String) {}

    fun updateRecord(id: String, recordId: String) {

    }

    fun deleteRecord(id: String, recordId: String) = 0

}