import './globals.css';

export const metadata = {
  title: 'OneAquaHealth Dashboard',
  description: 'Water health monitoring dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
