package com.example.lab8.Controllers;

import com.example.lab8.Models.Productos;
import com.example.lab8.Services.ProductosDB;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductosControllers {
    @GetMapping("/productos/all")
    public List<Productos> ObtenerTodosProductos(){
        return new ProductosDB().ObtenerProductos();
    }

    @PostMapping("/producto")
    public int InsertarProducto(@RequestBody Productos producto){
        return new ProductosDB().GuardarProductos(producto);
    }

    @DeleteMapping("/producto/{id}")
    public int Delete(@PathVariable("id") int id){
        return new ProductosDB().EliminarProducto(id);
    }

    @PutMapping("/producto")
    public int ActualizarProducto(@RequestBody Productos producto){
        return new ProductosDB().ActualizarProductos(producto);
    }
}
