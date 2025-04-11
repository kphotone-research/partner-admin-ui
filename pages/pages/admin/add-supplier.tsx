import { useState } from 'react';

export default function AddSupplierPage() {
  const [supplierName, setSupplierName] = useState('');
  const [supplierEmail, setSupplierEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/add-supplier', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ supplierName, supplierEmail }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(`✅ ${data.message}`);
      setSupplierName('');
      setSupplierEmail('');
    } else {
      setMessage(`❌ Error: ${data.message}`);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Add Supplier</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Supplier Name"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Supplier Email"
          value={supplierEmail}
          onChange={(e) => setSupplierEmail(e.target.value)}
          required
        />
        <button type="submit">Add Supplier</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
