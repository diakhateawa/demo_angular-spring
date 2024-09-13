package com.example.backend.service;

import com.example.backend.entities.Paiement;
import com.example.backend.entities.PaiementStatus;
import com.example.backend.entities.PaiementType;
import com.example.backend.entities.Student;
import com.example.backend.repository.PaiementRepository;
import com.example.backend.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.UUID;

@Service
@Transactional
public class PaiementService {

    private PaiementRepository paiementRepository;
    private StudentRepository studentRepository;

    public PaiementService(PaiementRepository paiementRepository, StudentRepository studentRepository) {
        this.paiementRepository = paiementRepository;
        this.studentRepository = studentRepository;
    }

    public Paiement savePaiement(MultipartFile file, double amount, PaiementType type,
                                     LocalDate date, String studentCode) throws IOException {
        Path folderPath = Paths.get(System.getProperty("user.home"),"enset-students","paiements");
        if(!Files.exists(folderPath)){
            Files.createDirectories(folderPath);
        }
        String fileName = UUID.randomUUID().toString();
        Path filePath = Paths.get(System.getProperty("user.home"),"enset-students","paiements",fileName+".pdf");
        Files.copy(file.getInputStream(), filePath);
        Student student = studentRepository.findByCode(studentCode);
        Paiement paiement=Paiement.builder()
                .type(type)
                .status(PaiementStatus.CREATED)
                .date(date)
                .student(student)
                .amount(amount)
                .file(filePath.toUri().toString())
                .build();
        return paiementRepository.save(paiement);

    }

    public byte[] getPaiementFile(Long id) throws IOException {
        Paiement paiement = paiementRepository.findById(id).get();
        return Files.readAllBytes(Path.of(URI.create(paiement.getFile())));

    }

    public Paiement updatePaiementStatus(PaiementStatus status, Long paiementId){
        Paiement paiement = paiementRepository.findById(paiementId).get();
        paiement.setStatus(status);
        return paiementRepository.save(paiement);
    }
}
