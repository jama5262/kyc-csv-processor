package com.jama.kyc.kyccsvprocessor.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Record (
    @Id
    val id: String = ObjectId().toString(),
    val name: String,
    val phone: String,
    val dobTimestamp: Long
)
