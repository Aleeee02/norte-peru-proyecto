package com.norte_peru_proyecto.backend.controller;

import com.norte_peru_proyecto.backend.model.Paquete;
import com.norte_peru_proyecto.backend.service.PaqueteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/paquetes")
public class PaqueteController {

    @Autowired
    private PaqueteService paqueteService;

    @GetMapping
    public ResponseEntity<List<Paquete>> obtenerTodos() {
        return ResponseEntity.ok(paqueteService.obtenerTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Paquete> obtenerPorId(@PathVariable Long id) {
        Optional<Paquete> paquete = paqueteService.obtenerPorId(id);
        return paquete.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Paquete> crear(@RequestBody Paquete paquete) {
        return ResponseEntity.ok(paqueteService.guardar(paquete));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Paquete> actualizar(@PathVariable Long id, @RequestBody Paquete paquete) {
        return ResponseEntity.ok(paqueteService.actualizar(id, paquete));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        paqueteService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
