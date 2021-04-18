package com.jama.kyc.kyccsvprocessor.repository

import com.jama.kyc.kyccsvprocessor.model.KYC
import com.jama.kyc.kyccsvprocessor.model.Record
import com.jama.kyc.kyccsvprocessor.model.Success
import com.jama.kyc.kyccsvprocessor.utils.Constants
import com.jama.kyc.kyccsvprocessor.utils.Constants.ADD_RECORD_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.DELETE_RECORD_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.UPDATE_RECORD_EXCEPTION
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update

class KYCRepositoryImpl {

    @Autowired
    private lateinit var mongoTemplate: MongoTemplate

    fun addRecord(id: String, record: Record): Success {
        try {
            val query = Query(Criteria.where("id").`is`(id))
            val update = Update()
            update.push("records", record)
            mongoTemplate.findAndModify(query, update, KYC::class.java)
            return Success(record)
        } catch (e: Exception) {
            throw Exception(ADD_RECORD_EXCEPTION)
        }
    }

    fun updateRecord(id: String, record: Record): Success {
        try {
            deleteRecord(id, record.id)
            addRecord(id, record)
            return Success(record)
        } catch (e: Exception) {
            throw Exception(UPDATE_RECORD_EXCEPTION)
        }
    }

    fun deleteRecord(id: String, recordId: String): Success {
        val query = Query(Criteria.where("id").`is`(id))
        val updateQuery = Query(Criteria.where("id").`is`(recordId))
        val update = Update()
        update.pull("records", updateQuery)
        val modifiedCount = mongoTemplate.updateMulti(query, update, KYC::class.java).modifiedCount
        if (modifiedCount == 0L) throw Exception(DELETE_RECORD_EXCEPTION)
        return Success(recordId)
    }
}