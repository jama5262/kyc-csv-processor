package com.jama.kyc.kyccsvprocessor.controller

import com.jama.kyc.kyccsvprocessor.service.KYCService
import com.jama.kyc.kyccsvprocessor.utils.Constants.API_ENDPOINT
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping(path = [API_ENDPOINT])
class KYCController {

    @Autowired
    private lateinit var service: KYCService

    @PostMapping(path = ["upload"])
    fun uploadCSV(
        @RequestParam("file") file: MultipartFile,
        @RequestParam("fileName") fileName: String
    ) {
        service.uploadCSV(file, fileName)
    }

    @PostMapping(path = ["upload-sample"])
    fun uploadSampleCSV(@RequestParam("fileName") fileName: String) = service.uploadSampleCSV(fileName)

    @GetMapping
    fun getAllKYC() = service.getAllKYC()

    @GetMapping(path = ["{id}"])
    fun getKYC(@PathVariable("id") id: String) = service.getKYC(id)

    @DeleteMapping(path = ["{id}"])
    fun deleteKYC(@PathVariable("id") id: String) = service.deleteKYC(id)

    @PostMapping(path = ["{id}/{record-id}"])
    fun addRecord(
        @PathVariable("id") id: String,
        @PathVariable("record-id") recordId: String
    ) = service.addRecord(id, recordId)

    @PutMapping(path = ["{id}/{record-id}"])
    fun updateRecord(
        @PathVariable("id") id: String,
        @PathVariable("record-id") recordId: String
    ) = service.updateRecord(id, recordId)

    @DeleteMapping(path = ["{id}/{record-id}"])
    fun deleteRecord(
        @PathVariable("id") id: String,
        @PathVariable("record-id") recordId: String
    ) = service.deleteRecord(id, recordId)
}