import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renderiza el hero y el botón del pedido', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /la fórmula para comer increíble/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /mi pedido/i })).toBeInTheDocument();
});

test('muestra la pantalla de bienvenida y permite entrar', () => {
  render(<App />);

  const enterButton = screen.getByRole('button', {
    name: /un rincón de placer sin culpa/i,
  });
  expect(enterButton).toBeInTheDocument();

  userEvent.click(enterButton);

  expect(
    screen.queryByRole('button', { name: /un rincón de placer sin culpa/i })
  ).not.toBeInTheDocument();
});

test('navega al menú y agrega productos al pedido', () => {
  render(<App />);

  userEvent.click(
    screen.getByRole('button', { name: /explorar el menú/i })
  );

  expect(
    screen.getByRole('heading', { name: /nuestro menú/i })
  ).toBeInTheDocument();

  const addButtons = screen.getAllByRole('button', { name: /añadir/i });
  userEvent.click(addButtons[0]);

  expect(screen.getByText(/total estimado/i)).toBeInTheDocument();
  expect(screen.getAllByText('US$ 3,00').length).toBeGreaterThan(0);
  expect(
    screen.getByRole('button', { name: /preparar pedido en whatsapp/i })
  ).toBeEnabled();
  expect(
    screen.getByLabelText(/descripción del pedido/i)
  ).toBeInTheDocument();
});

test('navega a la vista de contacto y vuelve al inicio', () => {
  render(<App />);

  userEvent.click(screen.getByRole('button', { name: /^contacto$/i }));

  expect(
    screen.getByRole('heading', { name: /ven a visitarnos/i })
  ).toBeInTheDocument();
  expect(
    screen.getByTitle(/ubicación de the flavor engineer/i)
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: /← inicio/i }));

  expect(
    screen.getByRole('heading', { name: /la fórmula para comer increíble/i })
  ).toBeInTheDocument();
});

const fillOrderDetails = () => {
  const dateInput = screen.getByLabelText(/fecha del pedido/i);
  const timeInput = screen.getByLabelText(/hora del pedido/i);
  const noteInput = screen.getByLabelText(/descripción del pedido/i);

  fireEvent.change(dateInput, { target: { value: '2026-11-21' } });
  fireEvent.change(timeInput, { target: { value: '20:30' } });
  fireEvent.change(noteInput, { target: { value: 'Sin cebolla, salsa aparte' } });

  return { dateInput, timeInput, noteInput };
};

test('cancelar el pedido limpia fecha, hora, descripción y carrito', () => {
  render(<App />);

  userEvent.click(screen.getByRole('button', { name: /explorar el menú/i }));
  userEvent.click(screen.getAllByRole('button', { name: /añadir/i })[0]);

  const { dateInput, timeInput, noteInput } = fillOrderDetails();

  expect(dateInput).toHaveValue('2026-11-21');
  expect(noteInput).toHaveValue('Sin cebolla, salsa aparte');

  userEvent.click(screen.getByRole('button', { name: /cancelar pedido/i }));

  expect(screen.getByText(/todavía no hay productos/i)).toBeInTheDocument();
  expect(dateInput).toHaveValue('');
  expect(timeInput).toHaveValue('');
  expect(noteInput).toHaveValue('');
});

test('al enviar por WhatsApp también se limpian fecha, hora y descripción', () => {
  render(<App />);

  userEvent.click(screen.getByRole('button', { name: /explorar el menú/i }));
  userEvent.click(screen.getAllByRole('button', { name: /añadir/i })[0]);

  const { dateInput, timeInput, noteInput } = fillOrderDetails();

  userEvent.click(
    screen.getByRole('button', { name: /preparar pedido en whatsapp/i })
  );

  expect(window.open).toHaveBeenCalledTimes(1);
  expect(window.open.mock.calls[0][0]).toContain('https://wa.me/5804121473926');
  expect(dateInput).toHaveValue('');
  expect(timeInput).toHaveValue('');
  expect(noteInput).toHaveValue('');
});

test('abre y cierra la vista previa de un producto', () => {
  render(<App />);

  userEvent.click(screen.getByRole('button', { name: /explorar el menú/i }));
  userEvent.click(
    screen.getAllByRole('button', { name: /ver foto de sencilla/i })[0]
  );

  const dialog = screen.getByRole('dialog', { name: /foto de sencilla/i });
  expect(
    within(dialog).getByRole('img', { name: /sencilla/i })
  ).toBeInTheDocument();

  userEvent.click(
    within(dialog).getByRole('button', { name: /cerrar foto/i })
  );

  expect(
    screen.queryByRole('dialog', { name: /foto de sencilla/i })
  ).not.toBeInTheDocument();
});
