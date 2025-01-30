"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirigir al login si no hay sesión
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  // Mostrar un mensaje mientras se obtiene la sesión
  if (status === "loading")
    return <p className="text-white text-xl text-center mt-20">Cargando sesión...</p>;

  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-white text-5xl mb-4">Dashboard</h1>
        {session ? (
          <>
            <p className="text-white text-xl">Bienvenido, {session.user.name} 👋</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 transition"
              onClick={() => signOut()}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <p className="text-white text-xl">No estás autenticado.</p>
        )}
      </div>
    </section>
  );
}

export default DashboardPage;
