import './globals.css';

export const metadata = {
  title: 'Iklavya - UI/UX Wireframe Document',
  description: 'Complete Interface Planning for Iklavya Student Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
