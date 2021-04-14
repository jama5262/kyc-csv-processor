package com.jama.kyc.kyccsvprocessor.model

import java.time.LocalDate

data class KYC(
    val name: String,
    val phone: String,
    val dob: LocalDate
)
