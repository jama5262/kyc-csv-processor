package com.jama.kyc.kyccsvprocessor.utils

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.jama.kyc.kyccsvprocessor.model.Record
import com.jama.kyc.kyccsvprocessor.validate.Validate.validateCSVHeaders
import java.io.File

fun String.records(): List<Record> {
    val records = csvReader()
        .readAll(this)

    validateCSVHeaders(records.take(1)[0])

    return records
        .drop(1) // Drop the first row containing the headers
        .map {
            Record(
                name = it[0],
                phone = it[1],
                dobTimestamp = it[2].toLong()
            )
        }
}

fun File.records(): List<Record> {
    val records = csvReader()
        .readAll(this)

    validateCSVHeaders(records.take(1)[0])

    return records
        .drop(1) // Drop the first row containing the headers
        .map {
            Record(
                name = it[0],
                phone = it[1],
                dobTimestamp = it[2].toLong()
            )
        }
}