// src/components/OfficeList.js
import React from 'react';

const OfficeList = () => {
  const officeSpaces = [
    {
      id: 1,
      name: 'TechPark One',
      rent: 45000,
      address: 'Whitefield, Bangalore',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Innovate Hub',
      rent: 72000,
      address: 'Hinjewadi, Pune',
      image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Co-Works Infinity',
      rent: 58000,
      address: 'Cyber City, Gurgaon',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="office-list">
      {officeSpaces.map((office) => {
        const rentColor = office.rent > 60000 ? 'green' : 'red';
        return (
          <div className="office-card" key={office.id}>
            <img src={office.image} alt={office.name} />
            <h3>{office.name}</h3>
            <p style={{ color: rentColor }}>Rent: ₹{office.rent}</p>
            <p>Address: {office.address}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
