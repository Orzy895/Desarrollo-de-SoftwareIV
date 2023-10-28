package com.example.lab8.Services;

import com.example.lab8.Models.Productos;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class ProductosDB {
    Connection cnn;

    public ProductosDB(){
        cnn = new Conexion().openDb();
    }

    public List<Productos> ObtenerProductos(){
        try{
            Statement stmt = cnn.createStatement();
            String query = "SELECT * FROM productos";
            List<Productos> productos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while(result.next()){
                Productos producto = new Productos();
                producto.setId(result.getInt("id"));
                producto.setNombre(result.getString("nombre"));
                producto.setPrecio(result.getFloat("precio"));
                producto.setCategoriaId(result.getInt("categoria_id"));
                producto.setFoto(result.getString("fotoUrl"));
                producto.setFechaProduccion(result.getString("fecha_preparacion"));
                producto.setFechaCaducidad(result.getString("fecha_expiracion"));
                productos.add(producto);
            }
            result.close();
            stmt.close();
            return productos;
        }
        catch(Exception e){
            int x = 1;
        }
        return null;
    }

    public int GuardarProductos(Productos producto){
        int resultado = 0;
        try{
            Statement stmt = cnn.createStatement();
            String query = "Call InsertarProducto('"
            +producto.getNombre()+"',"
            +producto.getPrecio()+","
            +producto.getCategoriaId()+",'"
            +producto.getFoto()+"','"
            +producto.getFechaProduccion()+"','"
            +producto.getFechaCaducidad()+"')";
            resultado = stmt.executeUpdate(query);
            return resultado;
        }
        catch(Exception e){
            int x = 1;
        }
        return resultado;
    }

    public int EliminarProducto(int id){
        int resultado = 0;
        try{
            Statement stmt = cnn.createStatement();
            String query = "Call EliminarProducto("+id+")";
            return stmt.executeUpdate(query);
        }
        catch(Exception e){
            int x = 1;
        }
        return resultado;
    }

    public int ActualizarProductos(Productos producto){
        int resultado = 0;
        try{
            Statement stmt = cnn.createStatement();
            String query = "Call ActualizarProducto("
                    +producto.getId()+",'"
                    +producto.getNombre()+"',"
                    +producto.getPrecio()+","
                    +producto.getCategoriaId()+",'"
                    +producto.getFoto()+"','"
                    +producto.getFechaProduccion()+"','"
                    +producto.getFechaCaducidad()+"')";
            resultado = stmt.executeUpdate(query);
            return resultado;
        }
        catch(Exception e){
            int x = 1;
        }
        return resultado;
    }

}
