// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to Partner Admin UI</h1>
      <Link href="/admin/add-supplier" className="text-blue-600 underline">
        Go to Add Supplier
      </Link>
    </main>
  );
}
