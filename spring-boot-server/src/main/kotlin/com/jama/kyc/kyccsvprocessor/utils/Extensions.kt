package com.jama.kyc.kyccsvprocessor.utils

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.jama.kyc.kyccsvprocessor.model.Record
import java.io.File

fun String.records(): MutableList<Record> {
    return csvReader()
        .readAll(this)
        .drop(1) // Drop the first row containing the headers
        .map {
            Record(
                name = it[0],
                phone = it[1],
                dobTimestamp = it[2].toLong()
            )
        }.toMutableList()
}

fun File.records(): MutableList<Record> {
    return csvReader()
        .readAll(this)
        .drop(1) // Drop the first row containing the headers
        .map {
            Record(
                name = it[0],
                phone = it[1],
                dobTimestamp = it[2].toLong()
            )
        }.toMutableList()
}