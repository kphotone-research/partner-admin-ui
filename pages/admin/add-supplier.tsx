// pages/admin/add-supplier.tsx
import { useState } from 'react';

export default function AddSupplierPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('/api/add-supplier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Supplier added successfully!');
        setForm({ name: '', email: '', company: '' });
      } else {
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error connecting to the server.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Supplier</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
        {message && <p className="text-sm text-green-600">{message}</p>}
      </form>
    </div>
  );
}
