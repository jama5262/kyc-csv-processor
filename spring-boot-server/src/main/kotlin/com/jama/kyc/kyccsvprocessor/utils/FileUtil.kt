package com.jama.kyc.kyccsvprocessor.utils

object FileUtil {
    fun getFile(fileName: String): String {
        return javaClass.classLoader.getResource(fileName)!!.file
    }
}