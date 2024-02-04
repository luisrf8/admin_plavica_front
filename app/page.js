// import Link from 'next/link';
import Login from './login/page';
const Home = () => {
  return (
    <div>
      <Login/>
      {/* <h1>Ruedas del centro</h1> */}
      {/* <div 
        className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        style={{
          margin: '5rem'
        }}>
        <Link href="/dashboard" >
          Iniciar sesion
        </Link>
      </div> */}
    </div>
  );
};

export default Home;