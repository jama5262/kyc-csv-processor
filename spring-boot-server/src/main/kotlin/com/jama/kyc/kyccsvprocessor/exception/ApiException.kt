package com.jama.kyc.kyccsvprocessor.exception

data class ApiException(
    val message: String,
    val statusCode: Int
)
