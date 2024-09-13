package net.youssfi.demoensetstudents.web;

import com.example.backend.entities.Paiement;
import com.example.backend.entities.PaiementStatus;
import com.example.backend.entities.PaiementType;
import com.example.backend.entities.Student;
import com.example.backend.repository.PaiementRepository;
import com.example.backend.repository.StudentRepository;
import com.example.backend.service.PaiementService;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;


@RestController
//@CrossOrigin("*")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentRestController {
    private StudentRepository studentRepository;
    private PaiementRepository paiementRepository;

    private PaiementService paiementService;

    public StudentRestController(StudentRepository studentRepository, PaiementRepository paiementRepository, PaiementService paiementService) {
        this.studentRepository = studentRepository;
        this.paiementRepository = paiementRepository;
        this.paiementService = paiementService;
    }

    @GetMapping(path = "/students")
    public List<Student> allStudents(){
        return studentRepository.findAll();
    }
    @GetMapping("/students/{code}")
    public Student getStudentByCode(@PathVariable String code){
        return studentRepository.findByCode(code);
    }
    @GetMapping(path = "/studentsByProgram")
    public List<Student> studentsByProgram(@RequestParam String programId){
        return studentRepository.findByProgramId(programId);
    }



    @GetMapping("/paiements")
    public List<Paiement> allPaiements(){
        return paiementRepository.findAll();
    }
    @GetMapping("/paiements/{id}")
    public Paiement getPaiementById(@PathVariable Long id){
        return paiementRepository.findById(id).get();
    }
    @GetMapping("/students/{code}/paiements")
    public List<Paiement> paiementsByStudentCode(@PathVariable String code){
        return paiementRepository.findByStudentCode(code);
    }
    @GetMapping("/paiementsByStatus")
    public List<Paiement> paiementsByStaus(@RequestParam PaiementStatus status){
        return paiementRepository.findByStatus(status);
    }
    @PutMapping("/paiements/{paiementId}/updateStatus")
    public Paiement updatePaiementStatus(@RequestParam PaiementStatus status, @PathVariable Long paiementId){
        return paiementService.updatePaiementStatus(status,paiementId);
    }
    @PostMapping(path="/paiements", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Paiement savePaiement(@RequestParam MultipartFile file, double amount, PaiementType type,
                               LocalDate date, String studentCode) throws IOException {
        return paiementService.savePaiement(file,amount,type,date,studentCode);

    }

    @GetMapping(path="paiements/{id}/file",produces = MediaType.APPLICATION_PDF_VALUE)
    public byte[] getPaiementFile(@PathVariable Long id) throws IOException {
       return paiementService.getPaiementFile(id);

    }
}
