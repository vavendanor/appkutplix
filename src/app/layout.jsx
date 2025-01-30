import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kutplix",
  description: "Diseños increíbles para tu negocio al instante.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">  {/* Cambiado a español si es necesario */}
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
