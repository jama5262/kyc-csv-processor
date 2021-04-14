package com.jama.kyc.kyccsvprocessor.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate

@Document
data class Record (
    @Id
    val id: String? = null,
    val name: String,
    val phone: String,
    val dobTimestamp: Long
)
