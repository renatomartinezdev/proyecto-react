import { Form, useActionData, useNavigate, redirect } from "react-router-dom"
import Error from "../components/Error"
import Formulario from "../components/Formulario"
import { agregarCliente } from "../data/clientes";


export async function action({request}) {

  //obtenemos lo que el usuario ingresa
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  //validacion 
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  //expresion regular para el email
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)){
    errores.push('El email no es valido')
  }

  //Retornar datos si hay errores
  if(Object.keys(errores).length){
    return errores
  }

  await agregarCliente(datos)
  

  return redirect('/')
  
}
const NuevoCliente = () => {
  const errores = useActionData()
  const navigate = useNavigate()


  console.log(errores);
  return (
    <>
       <h1 className="font-black text-4xl text-indigo-800">Nuevo Cliente</h1>
        <p className="mt-5 text-xl ">Llena todos los campos para registrar a un nuevo cliente</p>

        <div className="flex justify-end">
          <button
           className="bg-indigo-800 text-white px-3 py-1 font-bold uppercase"
           onClick={() => navigate ('/')} 
          >
            Volver
          </button>
        </div>

        <div className='bg-white mt-10 shadow rounded-md md:w-3/4 mx-auto py-10 px-5'>

          {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
          
          <Form
            method='post'
            noValidate
          >
            <Formulario
            
            />

            <input 
              type="submit" 
              className="mt-5 w-full p-3 bg-indigo-800 hover:bg-indigo-900 uppercase cursor-pointer font-bold text-white"
              value='Registrar Cliente'
            />
          </Form>
          
        </div>
    </>
  )
}

export default NuevoCliente