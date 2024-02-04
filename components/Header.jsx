// Header.jsx
'use client'
import Link from 'next/link';
import Sidebar from './Sidebar';
import { Menu, Transition } from '@headlessui/react'
import { BellIcon,  } from '@heroicons/react/24/outline'
import { useState } from 'react';
const navigation = [
    { name: 'Ordenes', href: '#', current: true },
    { name: 'Pagos', href: '#', current: false },
    { name: 'Almacen', href: '#', current: false },
    { name: 'Cuota', href: '#', current: false },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <div>
      <nav className="bg-gray-200 text-gray-800">
        <div className="relative flex items-center">
          <div className="flex w-full items-center justify-between pt-4 pb-4 px-7">
            <div className="md:hidden flex justify-center">
              {/* <MobileMenu menu={parentCategories} /> */}
              <button onClick={toggleSidebar}>
                <BellIcon className="h-6 " aria-hidden="true" />
              </button>
            </div>
            <div className="flex w-full justify-center md:w-1/3">
            <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/images/logoPlavica.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              {/* <Link href="/" className="flex w-full items-center justify-center md:w-auto">
                hola
              </Link> */}
            </div>
            {/* <div className="hidden justify-center md:flex md:w-1/3">
              hola
            </div> */}
            <div className="flex justify-center gap-5  xs:w-[4rem]">
            {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                </button> */}
            <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              {/* <div className="hidden flex-none md:block">
                hola
              </div> */}
            </div>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
