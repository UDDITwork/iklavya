import './globals.css';

export const metadata = {
  title: 'Iklavya - Product Design and Implementation Planning',
  description: 'AI-powered career readiness platform for Indian college students',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
