// En tu archivo Dashboard.js o donde estés utilizando ambos componentes
'use client'
import React from 'react';
import Header from '../../components/Header';
import { Menu, Transition } from '@headlessui/react'
import api from '../../lib/axios';
import { useEffect, useState } from 'react'; 

const Deliveries = () => {
  const [orders, setOrders] = useState(null)
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  useEffect(() => {
    getLogisticCenters()
  }, [])
  function getLogisticCenters() {
    api.get(`/orders/aproved-payments`)
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
            <h2 className="text-2xl font-semibold mb-6">Pedidos pagados por entregar</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full rounded border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Pedido</th>
                    <th className="border p-2">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {orders && 
                  <>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="border p-2">
                        {order._id}
                      </td>
                      <td className="border p-2">{order.total}</td>
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

export default Deliveries;
