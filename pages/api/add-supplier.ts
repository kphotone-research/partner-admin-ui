// pages/api/add-supplier.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, company } = req.body;

      // TODO: Save supplier data using Supabase or your database
      console.log('New supplier:', { name, email, company });

      return res.status(200).json({ message: 'Supplier added successfully' });
    } catch (error) {
      console.error('Error adding supplier:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
