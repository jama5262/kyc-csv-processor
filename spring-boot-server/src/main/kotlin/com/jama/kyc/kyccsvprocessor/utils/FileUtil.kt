package com.jama.kyc.kyccsvprocessor.utils

import java.io.BufferedReader
import java.io.InputStream
import java.io.InputStreamReader

object FileUtil {

    fun isSampleFilePathValid(fileName: String): InputStream? {
        return javaClass.classLoader.getResourceAsStream("samples/$fileName")
    }

    fun getSampleFile(fileName: String): String {
        val inputStream = javaClass.classLoader.getResourceAsStream("samples/$fileName")!!
        return BufferedReader(InputStreamReader(inputStream)).readText()
    }
}