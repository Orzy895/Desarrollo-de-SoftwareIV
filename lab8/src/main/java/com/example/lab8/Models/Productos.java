package com.example.lab8.Models;

public class Productos {
    private int Id, categoriaId;
    private String nombre, foto, FechaCaducidad, FechaProduccion;
    private float precio;

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public int getCategoriaId() {
        return categoriaId;
    }

    public void setCategoriaId(int categoriaId) {
        this.categoriaId = categoriaId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getFechaCaducidad() {
        return FechaCaducidad;
    }

    public void setFechaCaducidad(String fechaCaducidad) {
        FechaCaducidad = fechaCaducidad;
    }

    public String getFechaProduccion() {
        return FechaProduccion;
    }

    public void setFechaProduccion(String fechaProduccion) {
        FechaProduccion = fechaProduccion;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }
}
