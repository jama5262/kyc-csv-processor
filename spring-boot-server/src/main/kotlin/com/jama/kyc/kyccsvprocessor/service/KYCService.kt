package com.jama.kyc.kyccsvprocessor.service

import com.jama.kyc.kyccsvprocessor.model.KYC
import com.jama.kyc.kyccsvprocessor.model.Record
import com.jama.kyc.kyccsvprocessor.repository.KYCRepository
import com.jama.kyc.kyccsvprocessor.utils.Constants.DELETE_RECORD_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.INVALID_FILE_FAILED_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.KYC_NOT_FOUND_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.PATH_NOT_FOUND_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.SAMPLES_PATH
import com.jama.kyc.kyccsvprocessor.utils.Constants.UPDATE_RECORD_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.records
import com.mongodb.client.result.UpdateResult
import org.bson.BsonValue
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.io.File

@Service
class KYCService {

    @Autowired
    private lateinit var repository: KYCRepository

    @Autowired
    private lateinit var mongoTemplate: MongoTemplate

    fun uploadCSV(file: MultipartFile, name: String): KYC {
        val fileName = file.originalFilename!!
        if (fileName.takeLast(4) != ".csv") {
            throw Exception(INVALID_FILE_FAILED_EXCEPTION)
        }
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
            val records = File("$SAMPLES_PATH$fileName").records()
            val kyc = KYC(
                name = name,
                fileName = fileName,
                records = records.toMutableList()
            )
            return addKYC(kyc)
        } catch (e: Exception) {
            throw Exception(PATH_NOT_FOUND_EXCEPTION)
        }
    }

    fun getAllSampleFiles(): List<String> {
        return File(SAMPLES_PATH)
            .walk()
            .filter { it.extension == "csv" }
            .map { it.name }
            .toList()
    }

    fun getAllKYC(): List<KYC> {
        return repository.findAll()
    }

    fun getKYC(id: String): KYC {
        return repository.findById(id).orElseThrow {
            Exception(KYC_NOT_FOUND_EXCEPTION)
        }
    }

    fun addKYC(kyc: KYC): KYC {
        return repository.save(kyc)
    }

    fun deleteKYC(id: String) {
        return repository.deleteById(id)
    }

    fun addRecord(id: String, record: Record): Document {
        try {
            val query = Query(Criteria.where("id").`is`(id))
            val update = Update()
            val newRecord = update.push("records", record).updateObject
            mongoTemplate.updateFirst(query, update, KYC::class.java)
            return newRecord
        } catch (e: Exception) {
            throw Exception(e.message)
        }
    }

    fun updateRecord(id: String, record: Record) {
        try {
            deleteRecord(id, record.id)
            addRecord(id, record)
        } catch (e: Exception) {
            throw Exception(UPDATE_RECORD_EXCEPTION)
        }
    }

    fun deleteRecord(id: String, recordId: String) {
        val query = Query(Criteria.where("id").`is`(id))
        val updateQuery = Query(Criteria.where("id").`is`(recordId))
        val update = Update()
        update.pull("records", updateQuery)
        val modifiedCount = mongoTemplate.updateMulti(query, update, KYC::class.java).modifiedCount
        if (modifiedCount == 0L) throw Exception(DELETE_RECORD_EXCEPTION)
    }

}