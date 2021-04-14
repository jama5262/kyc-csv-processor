package com.jama.kyc.kyccsvprocessor

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KycCsvProcessorApplication

fun main(args: Array<String>) {
	runApplication<KycCsvProcessorApplication>(*args)
}
