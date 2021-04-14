package com.jama.kyc.kyccsvprocessor.utils

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.jama.kyc.kyccsvprocessor.model.Record
import java.io.File

fun String.records(): List<Record> {
    return csvReader()
        .readAll(this)
        .drop(1)
        .map {
            Record(
                name = it[0],
                phone = it[1],
                dobTimestamp = it[2].toLong()
            )
        }
}

fun File.records(): List<Record> {
    return csvReader()
        .readAll(this)
        .drop(1)
        .map {
            Record(
                name = it[0],
                phone = it[1],
                dobTimestamp = it[2].toLong()
            )
        }
}