// /app/discrete_mathematics/graph_theory/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import GraphTheoryNotes from '@/components/GraphTheoryNotes';

export default function GraphTheoryPage() {
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
                    <h1 className="text-4xl font-bold mb-4">Graph Theory</h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects. A graph in this context is made up of vertices, nodes, or points which are connected by edges, arcs, or lines.
                    </p>

                    <GraphTheoryNotes />
                </div>
            </div>
        </div>
    );
}