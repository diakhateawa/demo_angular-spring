package com.example.backend.repository;

import com.example.backend.entities.Paiement;
import com.example.backend.entities.PaiementStatus;
import com.example.backend.entities.PaiementType;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
@Repository
public interface PaiementRepository extends JpaRepository<Paiement, Long> {
    List<Paiement> findByStudentCode(String code);
    List<Paiement> findByStatus(PaiementStatus status);
    List<Paiement> findByType(PaiementType type);
}
