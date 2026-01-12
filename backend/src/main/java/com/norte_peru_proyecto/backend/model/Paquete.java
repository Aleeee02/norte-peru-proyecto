package com.norte_peru_proyecto.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "paquetes")
public class Paquete {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    private String imagen;

    private String descripcion;

    private String precio;

    private String duracion;

    @ElementCollection
    private List<String> caracteristicas;

    public Paquete() {
    }

    public Paquete(String titulo, String imagen, String descripcion,
                   String precio, String duracion, List<String> caracteristicas) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.duracion = duracion;
        this.caracteristicas = caracteristicas;
    }

    // GETTERS & SETTERS

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getTitulo() { return titulo; }

    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getImagen() { return imagen; }

    public void setImagen(String imagen) { this.imagen = imagen; }

    public String getDescripcion() { return descripcion; }

    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public String getPrecio() { return precio; }

    public void setPrecio(String precio) { this.precio = precio; }

    public String getDuracion() { return duracion; }

    public void setDuracion(String duracion) { this.duracion = duracion; }

    public List<String> getCaracteristicas() { return caracteristicas; }

    public void setCaracteristicas(List<String> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }
}
