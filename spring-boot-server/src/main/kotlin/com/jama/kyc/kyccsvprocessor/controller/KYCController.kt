package com.jama.kyc.kyccsvprocessor.controller

import com.jama.kyc.kyccsvprocessor.utils.Constants.API_ENDPOINT
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping(path = [API_ENDPOINT])
class KYCController {

    @PostMapping(path = ["upload"])
    fun uploadCSV() {}

    @PostMapping(path = ["upload-sample"])
    fun uploadSampleCSV() {}

    @GetMapping
    fun getAllKYC() = "Get all KYC"

    @GetMapping(path = ["{id}"])
    fun getKYC(@PathVariable("id") id: String) = "Get KYC $id"

    @DeleteMapping
    fun deleteKYC() = 0

    @PostMapping(path = ["{id}"])
    fun addRecord(@PathVariable("id") id: String) {}

    @PutMapping(path = ["{id}"])
    fun updateRecord(@PathVariable("id") id: String) = 0

    @DeleteMapping(path = ["{id}"])
    fun deleteRecord(@PathVariable("id") id: String) = 0
}