// /app/discrete_mathematics/functions/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProbabilityAndStatisticsNotes from '@/components/ProbabilityAndStatisticsNotes';

export default function ProbabilityAndStatisticsPage() {
    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>
                </div>

                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Probability and Statistics
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Probability and statistics are two related but separate academic disciplines. Statistical analysis often uses probability distributions, and the two topics are often studied together.
                    </p>

                    <ProbabilityAndStatisticsNotes />
                </div>
            </div>
        </div>
    );
}