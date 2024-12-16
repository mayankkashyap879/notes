// /app/discrete_mathematics/functions/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import FunctionNotes from '@/components/FunctionsNotes';

export default function FunctionsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/discrete_mathematics"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Discrete Mathematics
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Functions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A function is a relation between a set of inputs and a set of possible outputs with the property that each input is related to exactly one output.
          </p>

          <FunctionNotes />
        </div>
      </div>
    </div>
  );
}