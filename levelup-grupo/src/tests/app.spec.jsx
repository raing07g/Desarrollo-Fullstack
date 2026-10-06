import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';
import Productos from '../pages/Productos';
import Registro from '../pages/Registro';
import Contacto from '../pages/Contacto';

describe('Suite de Pruebas Unitarias Frontend - Level-Up Gamer (10/10)', () => {

  it('1. Debe renderizar el título de la marca LEVEL-UP GAMER', () => {
    render(<Navbar setPage={() => {}} />);
    expect(screen.getByText('LEVEL-UP GAMER')).toBeTruthy();
  });

  it('2. Debe renderizar las opciones de navegación principales', () => {
    render(<Navbar setPage={() => {}} />);
    expect(screen.getByText('Inicio')).toBeTruthy();
    expect(screen.getByText('Productos')).toBeTruthy();
    expect(screen.getByText('Registrarse')).toBeTruthy();
    expect(screen.getByText('Contacto')).toBeTruthy();
  });

  it('3. Debe renderizar los productos iniciales en la tienda', () => {
    render(<Productos cart={[]} setCart={() => {}} />);
    expect(screen.getByText('PlayStation 5')).toBeTruthy();
    expect(screen.getByText('Mouse Gamer Logitech G502 HERO')).toBeTruthy();
    expect(screen.getByText('Headset Gamer')).toBeTruthy();
  });

  it('4. Debe llamar a setCart al hacer clic en Agregar', () => {
    const mockSetCart = jasmine.createSpy('setCart');
    render(<Productos cart={[]} setCart={mockSetCart} />);
    
    const btnAgregar = screen.getByTestId('agregar-1');
    fireEvent.click(btnAgregar);

    expect(mockSetCart).toHaveBeenCalledWith([
      {
        id: 1,
        nombre: 'PlayStation 5',
        descripcion: 'Consola de última generación.',
        precio: 549990,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZhtw9oWeYAg9xc3SzbAGH9KWL-6tBeZg8_NHXIE7PQ&s=10'
      }
    ]);
  });

  it('5. Debe eliminar un producto del carrito al hacer clic en X', () => {
    const mockSetCart = jasmine.createSpy('setCart');
    const cartMock = [{ nombre: 'PlayStation 5', precio: 549990 }];
    render(<Productos cart={cartMock} setCart={mockSetCart} />);

    const btnEliminar = screen.getByTestId('eliminar-0');
    fireEvent.click(btnEliminar);

    expect(mockSetCart).toHaveBeenCalledWith([]);
  });

  it('6. Debe mostrar errores de validación en Registro si los campos están vacíos', () => {
    render(<Registro />);
    const btnSubmit = screen.getByText('Registrarme');
    fireEvent.click(btnSubmit);

    expect(screen.getByText('Ingresa un nombre válido.')).toBeTruthy();
    expect(screen.getByText('Ingresa un correo válido.')).toBeTruthy();
    expect(screen.getByText('Debes tener 18 años o más.')).toBeTruthy();
  });

  it('7. Debe exigir una contraseña de mínimo 8 caracteres', () => {
    render(<Registro />);
    const inputPass = screen.getByLabelText('Contraseña');
    fireEvent.change(inputPass, { target: { value: '123' } });

    const btnSubmit = screen.getByText('Registrarme');
    fireEvent.click(btnSubmit);

    expect(screen.getByText('La contraseña debe tener al menos 8 caracteres.')).toBeTruthy();
  });

  it('8. Debe otorgar 20% de descuento a correos institucionales @duoc.cl', () => {
    render(<Registro />);
    
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Estudiante Duoc' } });
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'alumno@duoc.cl' } });
    fireEvent.change(screen.getByLabelText('Edad'), { target: { value: '22' } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByLabelText('Acepto los términos y condiciones'));

    fireEvent.click(screen.getByText('Registrarme'));

    expect(screen.getByText('Registro exitoso. ¡Tienes un 20% de descuento por ser alumno Duoc!')).toBeTruthy();
  });

  it('9. Debe exigir que el mensaje de contacto tenga al menos 10 caracteres', () => {
    render(<Contacto />);
    const inputMensaje = screen.getByLabelText('Mensaje');
    fireEvent.change(inputMensaje, { target: { value: 'Hola' } });

    fireEvent.click(screen.getByText('Enviar mensaje'));

    expect(screen.getByText('El mensaje debe tener al menos 10 caracteres.')).toBeTruthy();
  });

  it('10. Debe mostrar mensaje de éxito al completar el formulario de contacto correctamente', () => {
    render(<Contacto />);
    
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Carlos Pérez' } });
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'carlos@gmail.com' } });
    fireEvent.change(screen.getByLabelText('Asunto'), { target: { value: 'Consulta de stock' } });
    fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: 'Hola, quisiera saber si tienen stock de PS5.' } });

    fireEvent.click(screen.getByText('Enviar mensaje'));

    expect(screen.getByText('Mensaje enviado correctamente.')).toBeTruthy();
  });

});