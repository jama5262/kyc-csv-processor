package com.jama.kyc.kyccsvprocessor.service

import com.jama.kyc.kyccsvprocessor.model.KYC
import com.jama.kyc.kyccsvprocessor.model.Record
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

    fun uploadCSV(file: MultipartFile, name: String): KYC {
        val fileName = file.originalFilename!!
        val records = String(file.bytes).records()
        val kyc = KYC(
            name = name,
            fileName = fileName,
            records = records.toMutableList()
        )
        return addKYC(kyc)
    }

    fun uploadSampleCSV(fileName: String, name: String): KYC {
        try {
            val records = File("src/main/resources/samples/$fileName").records()
            val kyc = KYC(
                name = name,
                fileName = fileName,
                records = records.toMutableList()
            )
            return addKYC(kyc)
        } catch (e: Exception) {
            throw Exception("Path cannot be found")
        }
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
            Exception("KYS does not exists")
        }
    }

    fun addKYC(kyc: KYC): KYC {
        return repository.save(kyc)
    }

    fun deleteKYC(id: String) {
        return repository.deleteById(id)
    }

    fun addRecord(id: String, record: Record): KYC {
        val kyc = getKYC(id)
        kyc.records.add(record)
        return addKYC(kyc)
    }

    fun updateRecord(id: String, recordId: String, record: Record) {
        val kyc = getKYC(id)
        val oldRecord  = kyc.records.find { it.id == recordId }
            ?: throw Exception("Record can not be found")
        kyc.records.remove(oldRecord)
        val newRecord = Record(
            oldRecord.id,
            record.name,
            record.phone,
            record.dobTimestamp
        )
        kyc.records.add(newRecord)
        addKYC(kyc)
    }

    fun deleteRecord(id: String, recordId: String) {
        val kyc = getKYC(id)
        val removed = kyc.records.removeIf { it.id == recordId }
        if (removed) throw Exception("Record does not exist, hence can not be deleted")
        addKYC(kyc)
    }

}