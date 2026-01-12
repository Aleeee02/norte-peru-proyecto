package com.norte_peru_proyecto.backend.repository;

import com.norte_peru_proyecto.backend.model.Paquete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaqueteRepository extends JpaRepository<Paquete, Long> {
}
