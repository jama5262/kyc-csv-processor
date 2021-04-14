package com.jama.kyc.kyccsvprocessor.repository

import com.jama.kyc.kyccsvprocessor.model.KYC
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface KYCRepository: MongoRepository<KYC, String>