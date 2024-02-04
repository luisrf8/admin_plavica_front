// En tu archivo Dashboard.js o donde estés utilizando ambos componentes
import React from 'react';
import Header from '../../components/Header';

const Dashboard = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Smith', email: 'alice@example.com', role: 'User' },
  ];

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-grow p-4">
          <div className="rounded bg-white shadow mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Datos de la Tabla</h2>

            <div className="overflow-x-auto">
              <table className="table-auto w-full rounded border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Correo Electrónico</th>
                    <th className="border p-2">Rol</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row) => (
                    <tr key={row.id}>
                      <td className="border p-2">{row.id}</td>
                      <td className="border p-2">{row.name}</td>
                      <td className="border p-2">{row.email}</td>
                      <td className="border p-2">{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
