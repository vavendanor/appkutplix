"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import {useRouter} from 'next/navigation'
import {useState} from 'react'

function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter()
  const [error, setError] = useState(null)
  
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res)
    if (res.error) {
      setError(res.error)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  });


  return  (
    <div className="h-[calc(100vh-7rem)] flex items-center">
  {/* Sección para la imagen grande */}
  <div className="w-1/2  flex justify-center items-center">
    <img
      src="/image/login-bg.png"
      alt="Imagen decorativa"
      className=" h-full w-full rounded-lg shadow-lg object-cover"
    />
  </div>

  {/* Sección para el formulario */}
  <div className="w-1/2 flex justify-left items-center ml-10">
    <form onSubmit={onSubmit} className="w-1/2 ml-40">
      {error && (
        <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">
          {error}
        </p>
      )}

      <h1 className="text-customDarkPurple font-bold text-6xl mb-4">Kutplix</h1>
      <p className="text-black mb-12">
        Diseños increíbles para tu negocio al instante.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-xl mb-12 w-full">
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="bg-white w-full px-4 mb-4 py-2 text-center placeholder-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
          placeholder="Ingresa tu correo"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="bg-white w-full px-4 mb-4 py-2 text-center placeholder-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
          placeholder="Contraseña"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}

        <button className="w-full bg-customDarkPurple text-white p-3 rounded-lg mt-2 mb-5">
          Iniciar sesión
        </button>

        <p className="text-center mb-5 text-slate-600">¿Olvidaste tu contraseña?</p>

        <hr className="border-t-2 border-slate-600 w-[320px] mx-auto mb-5" />

        <button className="w-full bg-customPink text-white p-3 rounded-lg mt-2 mb-5">
          Crear cuenta nueva
        </button>
      </div>

      <button className="flex items-center justify-center w-full p-3 mt-15 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100">
        <img
          src="/image/google.png"
          alt="Google Logo"
          className="w-6 h-6 mr-3"
        />
        Continuar con Google
      </button>
    </form>
  </div>
</div>
  );
}

export default LoginPage;