package com.norte_peru_proyecto.backend;


import com.norte_peru_proyecto.backend.model.Paquete;
import com.norte_peru_proyecto.backend.repository.PaqueteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataLoader implements CommandLineRunner {
    
    @Autowired
    private PaqueteRepository paqueteRepository;
    
    @Override
    public void run(String... args) throws Exception {
        paqueteRepository.deleteAll();
        
        paqueteRepository.save(new Paquete(
            "Máncora y Punta Sal",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
            "Sol, playa y deportes acuáticos",
            "S/ 899",
            "4 días / 3 noches",
            Arrays.asList("Hotel 4★", "Desayunos", "Tours", "Traslados")
        ));
        
        paqueteRepository.save(new Paquete(
            "Cajamarca Colonial",
            "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800",
            "Historia y Baños del Inca",
            "S/ 799",
            "3 días / 2 noches",
            Arrays.asList("Hotel 3★", "Alimentación", "Guía", "Entradas")
        ));
        
        System.out.println("✅ Datos cargados");
    }

}