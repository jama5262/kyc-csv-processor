package com.jama.kyc.kyccsvprocessor.controller

import com.jama.kyc.kyccsvprocessor.model.Record
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
        @RequestParam("name") name: String
    ) = service.uploadCSV(file, name)

    @PostMapping(path = ["upload-sample"])
    fun uploadSampleCSV(
        @RequestParam("fileName") fileName: String,
        @RequestParam("name") name: String
    ) = service.uploadSampleCSV(fileName, name)

    @GetMapping(path = ["all-samples"])
    fun getAllSampleFiles() = service.getAllSampleFiles()

    @GetMapping
    fun getAllKYC() = service.getAllKYC()

    @GetMapping(path = ["{id}"])
    fun getKYC(@PathVariable("id") id: String) = service.getKYC(id)

    @DeleteMapping(path = ["{id}"])
    fun deleteKYC(@PathVariable("id") id: String) = service.deleteKYC(id)

    @PostMapping(path = ["{id}"])
    fun addRecord(
        @PathVariable("id") id: String,
        @RequestBody record: Record
    ) = service.addRecord(id, record)

    @PutMapping(path = ["{id}"])
    fun updateRecord(
        @PathVariable("id") id: String,
        @RequestBody record: Record
    ) = service.updateRecord(id, record)

    @DeleteMapping(path = ["{id}/{record-id}"])
    fun deleteRecord(
        @PathVariable("id") id: String,
        @PathVariable("record-id") recordId: String
    ) = service.deleteRecord(id, recordId)
}