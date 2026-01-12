package com.norte_peru_proyecto.backend.service;

import com.norte_peru_proyecto.backend.model.Paquete;
import com.norte_peru_proyecto.backend.repository.PaqueteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaqueteService {

    @Autowired
    private PaqueteRepository paqueteRepository;

    public List<Paquete> obtenerTodos() {
        return paqueteRepository.findAll();
    }

    public Optional<Paquete> obtenerPorId(Long id) {
        return paqueteRepository.findById(id);
    }

    public Paquete guardar(Paquete paquete) {
        return paqueteRepository.save(paquete);
    }

    public Paquete actualizar(Long id, Paquete paquete) {
        paquete.setId(id);
        return paqueteRepository.save(paquete);
    }

    public void eliminar(Long id) {
        paqueteRepository.deleteById(id);
    }
}
