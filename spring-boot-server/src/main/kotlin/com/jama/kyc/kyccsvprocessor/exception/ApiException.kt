package com.jama.kyc.kyccsvprocessor.exception

import org.springframework.http.HttpStatus

data class ApiException(
    val message: String,
    val status: HttpStatus
)
