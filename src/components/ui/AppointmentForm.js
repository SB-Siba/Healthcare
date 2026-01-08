import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const departments = [
    { value: '', label: 'Choose Department' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neuro-surgery', label: 'Neuro-Surgery' },
    { value: 'pediatriology', label: 'Pediatriology' }
  ];

  const doctors = [
    { value: '', label: 'Select Doctor' },
    { value: 'dr-david-patel', label: 'Dr. David Patel' },
    { value: 'dr-tyler-anderson', label: 'Dr. Tyler Anderson' },
    { value: 'dr-emily-johnson', label: 'Dr. Emily Johnson' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Form Data:', formData);
    // Add form submission logic here
    alert('Appointment booked successfully!');
  };

  return (
    <div className="bg-white text-center rounded p-5">
      <h1 className="mb-4">Book An Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <select 
              className="form-select bg-light border-0" 
              style={{ height: '55px' }}
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              {departments.map((dept, index) => (
                <option key={index} value={dept.value}>
                  {dept.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-sm-6">
            <select 
              className="form-select bg-light border-0" 
              style={{ height: '55px' }}
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              {doctors.map((doctor, index) => (
                <option key={index} value={doctor.value}>
                  {doctor.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-sm-6">
            <input 
              type="text" 
              className="form-control bg-light border-0" 
              placeholder="Your Name" 
              style={{ height: '55px' }}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-sm-6">
            <input 
              type="email" 
              className="form-control bg-light border-0" 
              placeholder="Your Email" 
              style={{ height: '55px' }}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-sm-6">
            <input 
              type="date" 
              className="form-control bg-light border-0" 
              placeholder="Date" 
              style={{ height: '55px' }}
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-sm-6">
            <input 
              type="time" 
              className="form-control bg-light border-0" 
              placeholder="Time" 
              style={{ height: '55px' }}
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">
              Make An Appointment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;