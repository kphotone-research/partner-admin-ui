import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { supplierName, supplierEmail } = req.body;

    // Here, you can add logic to save to database or Supabase
    console.log('New Supplier:', { supplierName, supplierEmail });

    res.status(200).json({ message: 'Supplier added successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
