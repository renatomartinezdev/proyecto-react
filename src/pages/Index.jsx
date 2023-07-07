import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";


export function loader() {
  const clientes = obtenerClientes()
  
  return clientes
}

const Index = () => {
  const clientes = useLoaderData();
  
  return (
    <>
      <h1 className="font-black text-4xl text-indigo-900">Clientes</h1>
      <p className="mt-5 text-xl">Administra tus Clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white mt-5 table-auto shadow">
          <thead className="bg-indigo-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <Cliente cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay clientes</p>
      )}
    </>
  );
};

export default Index;
