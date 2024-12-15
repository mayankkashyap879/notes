import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TopicCardProps {
  title: string;
  description: string;
  path: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, description, path }) => {
  return (
    <Link href={path}>
      <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          <div className="flex items-center text-blue-500 dark:text-blue-400">
            <span>Learn more</span>
            <ChevronRight className="h-4 w-4 ml-2" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

const DiscreteMathPage: React.FC = () => {
  const topics = [
    {
      title: "Mathematical Logic",
      description: "Study of formal logic, propositions, predicates, and logical reasoning. Includes truth tables, logical operators, and proof techniques.",
      path: "/discrete_mathematics/mathematical_logic"
    },
    {
      title: "Set Theory",
      description: "Fundamental concepts of sets, set operations, relations, and functions. Covers Venn diagrams, power sets, and cartesian products.",
      path: "/discrete_mathematics/set_theory"
    },
    {
      title: "Functions",
      description: "Study of mappings between sets, types of functions, composition, and special functions like bijections and inverse functions.",
      path: "/discrete_mathematics/functions"
    },
    {
      title: "Group Theory",
      description: "Introduction to algebraic structures, groups, subgroups, and group operations. Includes permutation groups and cyclic groups.",
      path: "/discrete_mathematics/group_theory"
    },
    {
      title: "Combinatorics",
      description: "Techniques for counting, arrangement, and selection. Covers permutations, combinations, and generating functions.",
      path: "/discrete_mathematics/combinatorics"
    },
    {
      title: "Graph Theory",
      description: "Study of graphs, trees, and networks. Includes graph properties, traversals, and applications in computer science.",
      path: "/discrete_mathematics/graph_theory"
    }
  ];

  return (
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
        <h1 className="text-4xl font-bold mb-4">Discrete Mathematics</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Explore the fundamental mathematical concepts that form the foundation of computer science.
        </p>
      </div>

      <div className="mb-12">
        <Card className="p-6 bg-blue-50 dark:bg-blue-900/20">
          <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Discrete mathematics is the foundation of computer science, dealing with structures that are fundamentally discrete 
            (not continuous). This course covers logical thinking, proof techniques, and discrete structures used in computer science.
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-semibold">Key Learning Objectives:</p>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
              <li>Develop logical thinking and mathematical reasoning abilities</li>
              <li>Master fundamental discrete structures and their properties</li>
              <li>Apply mathematical concepts to solve computational problems</li>
              <li>Understand the mathematical foundations of computer science</li>
            </ul>
          </div>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Topics Covered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard
              key={topic.title}
              title={topic.title}
              description={topic.description}
              path={topic.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscreteMathPage;