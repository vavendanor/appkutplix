"use client";

function Formdata() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4 ">
      <div>
      <h2 className="text-6xl text-purple-400 font-bold">Información de tu negocio</h2>
      </div>
      <div className="text-center text-4xl mb-4 max-w-xl w-full">
            
            <p className="text-2xl">Esta información es necesaria para poder crear tus diseños de mejor manera</p>
      </div>
      <form action="" className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl  ">
            <div className="flex align-middle justify-center gap-10  ">

              <input type="text" placeholder="Nombre de tu empresa" className=" bg-none border rounded-xl border-gray-400 p-5 w-full" />
              <select name="" id="" className="bg-none border rounded-xl  border-gray-400 p-5 w-full"> 
                <option value="">Comida</option>
                <option value="">Ropa</option>
                <option value="">Electrodomestico</option>
              </select>
            </div>

            <div className="flex align-middle justify-between gap-10 mt-6"> 
              <input type="text" placeholder="Teléfono " className="bg-none border-gray-400 border rounded-xl p-5 w-full" />
              <input type="text" placeholder="Correo" className="bg-none  border-gray-400 border rounded-xl p-5 w-full" />
            </div>

            <div className="flex align-middle justify-between bor gap-10 mt-6"> 
              <input type="text" placeholder="Sitio web" className="bg-none border rounded-xl p-5 border-gray-400 w-full" />
              <input type="text" placeholder="Direccion" className="bg-none border rounded-xl p-5 border-gray-400 w-full" />
            </div>

            <div className="flex align-middle justify-center">
            <label className="bg-purple-300 w-full py-4 px-8 rounded-xl text-center mt-5 text-white cursor-pointer hover:bg-purple-400 transition-colors">
    Sube logo sin fondo
        <input
          type="file"
          className="hidden" // Hide the default input
          accept="image/*" // Accept only images
        />
      </label>
    </div>

    <div className="flex align-middle justify-around gap-10 mt-5">
    <input type="color" value="#9AA1FF" /> {/*//change the color of the input  */}
    <input type="color" value="#2D5D85"/>
    <input type="color" value=""/>
    </div>
      </form>
    
      <div className="w-full max-w-xl mt-5">
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Formdata