import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {

  const location = useLocation()
  return (
    <div>
       <div className='md:flex md:min-h-screen'>
            <aside className="md:w-1/4 bg-indigo-800 py-10">
                <h2 className='text-4xl font-black text-center text-white'>Gestion Clientes</h2>

                <nav className='mt-10'>
                    <Link 
                        to='/'
                        className={` ${location.pathname === '/' ? 'text-indigo-200' : 'text-white'} block text-2xl mt-2 ml-3 hover:text-indigo-200`}
                    >
                        Clientes
                    </Link>
                    
                    <Link 
                        to='/clientes/nuevo'
                        className={` ${location.pathname === '/clientes/nuevo' ? 'text-indigo-200' : 'text-white'} block text-2xl mt-2 ml-3 hover:text-indigo-200`}
                    >
                        Nuevo Cliente
                    </Link>
                </nav>
            </aside>

            <main className='md:w-3/4 p-10 md:h-screen overflow-y-scroll'>
                <Outlet/>
            </main>
       </div>

    </div>
  )
}

export default Layout