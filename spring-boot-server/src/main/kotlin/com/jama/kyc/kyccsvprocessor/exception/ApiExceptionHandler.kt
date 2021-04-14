package com.jama.kyc.kyccsvprocessor.exception

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class ApiExceptionHandler {

    @ExceptionHandler(value = [(Exception::class)])
    fun handleApiException(exception: Exception): ResponseEntity<ApiException> {
        val statusCode = HttpStatus.BAD_REQUEST
        val apiException = ApiException(
            exception.message!!,
            statusCode
        )
        return ResponseEntity(apiException, statusCode)
    }
}