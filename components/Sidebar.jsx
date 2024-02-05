// Sidebar.jsx
import { useEffect } from 'react';
import api from '../lib/axios'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    api
      .get(`/orders`)
      .then((response) => {
        console.log("resp", response);
        // setCompetitors(response.data.response);
      })
      .catch((error) => {
        console.log("errr", error);
      });
  }, []);
  return (
    <aside className={`fixed ${isOpen ? 'sidebar open' : 'sidebar'}`}>
      {/* Add links to different sections */}
      {/* <button onClick={toggleSidebar}>Toggle Sidebar</button> */}
      <style jsx>{`
        .sidebar {
          width: ${isOpen ? '100vw' : '0'};
          transition: width 0.5s ease-in-out;
          background-color: #555;
          overflow-x: hidden;
          height: 100vh;
        }

        .sidebar h2 {
          color: white;
          padding: 16px;
        }

        .sidebar button {
          background-color: #555;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          width: 100%;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
