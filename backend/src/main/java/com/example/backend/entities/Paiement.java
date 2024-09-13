package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
@Entity
@NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString @Builder
public class Paiement {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "paiement_seq")
    @SequenceGenerator(name = "paiement_seq", sequenceName = "paiement_sequence", allocationSize = 1)
    private Long id;
    private LocalDate date;
    private double amount;
    @Enumerated(EnumType.STRING)
    private PaiementType type;
    @Enumerated(EnumType.STRING)
    private PaiementStatus status;
    private String file;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
}







