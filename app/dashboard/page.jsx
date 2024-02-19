// En tu archivo Dashboard.js o donde estés utilizando ambos componentes
'use client'
import React from 'react';
import Header from '../../components/Header';
import { Menu, Transition } from '@headlessui/react'
import api from '../../lib/axios';
import { useEffect, useState } from 'react'; 

const Dashboard = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Smith', email: 'alice@example.com', role: 'User' },
  ];
  const [orders, setOrders] = useState(null)
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  useEffect(() => {
    getLogisticCenters()
  }, [])
  function getLogisticCenters() {
    api.get(`/orders`)
    .then(response => {
      setOrders(response.data.data)
      console.log("orders", orders)
      })
      .catch(error => {
        console.error('Hubo un error al hacer la solicitud GET:', error);
      });
    }
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-grow p-4">
          <div className="rounded bg-white shadow text-gray-800 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Datos de la Tabla</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full rounded border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Total</th>
                    <th className="border p-2">Mètodo de pago</th>
                    <th className="border p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders && 
                  <>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="border p-2">{order._id}</td>
                      <td className="border p-2">{order.customer.names}</td>
                      <td className="border p-2">{order.total}</td>
                      <td className="border p-2">{order.payment.paymentMethod}</td>
                      <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      hola
                    </Menu.Button>
                  </div>
                  <Transition
                    // as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                      <label > hola</label>

                      </Menu.Item>
                      <Menu.Item>
                      <label > hola</label>

                      </Menu.Item>
                      <Menu.Item>
                        <label > hola</label>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                      <td className="border p-2">{order.payment.status}</td>
                    </tr>
                  ))}
                  </>
                  }
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
