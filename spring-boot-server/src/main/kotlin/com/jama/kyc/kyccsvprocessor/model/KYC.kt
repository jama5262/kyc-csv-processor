package com.jama.kyc.kyccsvprocessor.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class KYC(
    @Id
    val id: String? = null,
    val name: String,
    val fileName: String,
    val records: MutableList<Record>
)
