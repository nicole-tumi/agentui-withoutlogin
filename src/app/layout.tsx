import "./globals.css";
import type { ReactNode } from "react";

export const metadata = { title: "MiChatbot" };

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
            <body className="flex h-screen bg-gray-50">
                <aside className="w-64 text-white p-4 text-xl font-semibold">
                    MiChatbot
                </aside>
                <main className="flex-1 overflow-auto bg-gray-100 p-6">
                    {children}
                </main>
            </body>
        </html>
    );
}
