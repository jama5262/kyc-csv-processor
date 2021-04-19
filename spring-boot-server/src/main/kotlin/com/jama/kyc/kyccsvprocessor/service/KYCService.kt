package com.jama.kyc.kyccsvprocessor.service

import com.jama.kyc.kyccsvprocessor.model.KYC
import com.jama.kyc.kyccsvprocessor.model.Record
import com.jama.kyc.kyccsvprocessor.model.Success
import com.jama.kyc.kyccsvprocessor.repository.KYCRepository
import com.jama.kyc.kyccsvprocessor.utils.Constants.KYC_NOT_FOUND_EXCEPTION
import com.jama.kyc.kyccsvprocessor.utils.Constants.SAMPLE_FILES
import com.jama.kyc.kyccsvprocessor.utils.FileUtil.getSampleFile
import com.jama.kyc.kyccsvprocessor.utils.records
import com.jama.kyc.kyccsvprocessor.validate.Validate.validateFileExtension
import com.jama.kyc.kyccsvprocessor.validate.Validate.validateSampleFileExists
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile

@Service
class KYCService {

    @Autowired
    private lateinit var repository: KYCRepository

    fun uploadCSV(file: MultipartFile, name: String): KYC {
        val fileName = file.originalFilename!!
        validateFileExtension(fileName)
        val records = String(file.bytes).records()
        val kyc = KYC(
            name = name,
            fileName = fileName,
            records = records
        )
        return addKYC(kyc)
    }

    fun uploadSampleCSV(fileName: String, name: String): KYC {
        validateFileExtension(fileName)
        validateSampleFileExists(fileName)
        val sampleFile = getSampleFile(fileName)
        val records = sampleFile.records()
        val kyc = KYC(
            name = name,
            fileName = fileName,
            records = records
        )
        return addKYC(kyc)
    }

    fun getAllSampleFiles(): List<String> {
        return SAMPLE_FILES
    }

    fun getAllKYC(): List<KYC> {
        return repository.findAll()
    }

    fun getKYC(id: String): KYC {
        return repository.findById(id).orElseThrow {
            Exception(KYC_NOT_FOUND_EXCEPTION)
        }
    }

    fun addKYC(kyc: KYC): KYC {
        return repository.save(kyc)
    }

    fun deleteKYC(id: String) {
        return repository.deleteById(id)
    }

    fun addRecord(id: String, record: Record): Success {
        return repository.addRecord(id, record)
    }

    fun updateRecord(id: String, record: Record): Success {
        return repository.updateRecord(id, record)
    }

    fun deleteRecord(id: String, recordId: String): Success {
        return repository.deleteRecord(id, recordId)
    }

}