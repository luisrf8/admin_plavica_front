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
    
    function handleOptionChange(event, data) {
      const selectedOption = event.target.value;
      const status = {
        status: selectedOption
      }
      api.patch(`/payments/${data}`, status)
      .then(response => {
        console.log("orders", response.data)
        getLogisticCenters()
        })
        .catch(error => {
          console.error('Hubo un error:', error);
        });
    }
    
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-grow p-4">
          <div className="rounded bg-white shadow text-gray-800 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Ordenes</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full rounded border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Orden</th>
                    <th className="border p-2">Cliente</th>
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
                      <td className="border p-2">
                        {order.orderDetails.length > 1 ? (
                          <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              Detalles de la Compra:
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-[30rem] origin-top-right rounded-md bg-gray-200 p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {order.orderDetails.map((orderDetail) => (
                              <div key={orderDetail.id}>
                              <Menu.Item>
                                <label className='block px-4 py-1 text-sm text-gray-700'> 
                                <b className='text-blue-700'>Compra: </b>{orderDetail._id}.
                                </label>
                              </Menu.Item>
                              <Menu.Item>
                                <label className='block px-4 py-1 text-sm text-gray-700'> 
                                <b className='text-blue-700'>Cantidad: </b>{orderDetail.quantity}.
                                </label>
                              </Menu.Item>
                              </div>
                             ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                        ) : (
                          <div>
                            <label className='block px-4 py-1 text-sm text-gray-700'> 
                              <b className='text-blue-700'>Compra: </b>{order.orderDetails[0]?._id}
                            </label>
                            <label className='block px-4 py-1 text-sm text-gray-700'> 
                              <b className='text-blue-700'>Cantidad: </b>{order.orderDetails[0]?.quantity}
                            </label>
                          </div>
                        )}
                      </td>
                      <td className="border p-2">{order.customer.names}</td>
                      <td className="border p-2">{order.total}</td>
                      {/* <td className="border p-2">{order.payment.paymentMethod}</td> */}
                      <td className="border p-2">
                      <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      {order.payment.paymentMethod}
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-[15rem] origin-top-right rounded-md bg-gray-200 p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <label className='block px-4 py-1 text-sm text-gray-700'> 
                        <b className='text-blue-700'>Monto pagado: </b>{order.payment.amount}.
                        </label>
                      </Menu.Item>
                      <Menu.Item>
                        <label className='block px-4 py-1 text-sm text-gray-700'> 
                        <b className='text-blue-700'>Banco de Origen: </b>{order.payment.bankOrigin}.
                        </label>
                      </Menu.Item>
                      <Menu.Item>
                      <label className='block px-4 py-1 text-sm text-gray-700'> 
                      <b className='text-blue-700'>Banco de Destino: </b>{order.payment.bankDestine}.
                        </label>
                      </Menu.Item>
                      <Menu.Item>
                      <label className='block px-4 py-1 text-sm text-gray-700'> 
                      <b className='text-blue-700'>Fecha del pago: </b>{order.payment.paymentDate}.
                        </label>
                      </Menu.Item>
                      <Menu.Item>
                        <label className='block px-4 py-1 text-sm text-gray-700'> 
                          <b className='text-blue-700'>Referencia: </b>{order.payment.reference}.
                        </label>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                      </td>
                      <td className="border p-2">
                      {order.payment.status === "PENDING" ? (
                        <div class="mt-2">
                          <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                          onChange={() => handleOptionChange(event, order.payment._id)}
                          >
                            <option disabled selected>Pendiente</option>
                            <option value="APPROVED">Aprobar</option>
                            <option value="REJECTED">Rechazar</option>
                          </select>
                        </div>
                      ) : (
                        <label> 
                          {order.payment.status === "APPROVED" ? ("Aprobado") : order.payment.status === "REJECTED" ? ("Rechazado") : ("") }
                        </label>
                      )}
                      </td>
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
