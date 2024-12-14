import React from 'react';
import Link from 'next/link';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface SubjectProps {
  title: string;
  description: string;
  topics: Array<{
    name: string;
    path: string;
  }>;
}

const SubjectCard: React.FC<SubjectProps> = ({ title, description, topics }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="mt-1">
          <BookOpen className="h-6 w-6 text-blue-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <ul className="space-y-2">
            {topics.map((topic) => (
              <li key={topic.path}>
                <Link 
                  href={topic.path}
                  className="group flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <ChevronRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                  {topic.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

const CSNotesHome: React.FC = () => {
  const subjects = [
    {
      title: "Engineering Mathematics",
      description: "Fundamental mathematical concepts essential for computer science",
      topics: [
        {
          name: "Discrete Mathematics",
          path: "/discrete_mathematics",
          subtopics: [
            { name: "Mathematical Logic", path: "/discrete_mathematics/mathematical_logic" },
            { name: "Set Theory", path: "/discrete_mathematics/set_theory" },
            { name: "Functions", path: "/discrete_mathematics/functions" },
            { name: "Group Theory", path: "/discrete_mathematics/group_theory" },
            { name: "Combinatorics", path: "/discrete_mathematics/combinatorics" },
            { name: "Graph Theory", path: "/discrete_mathematics/graph_theory" },
          ]
        },
        { name: "Linear Algebra", path: "/linear_algebra" },
        { name: "Calculus", path: "/calculus" },
        { name: "Probability and Statistics", path: "/probability_statistics" }
      ]
    },
    {
      title: "Digital Logic",
      description: "Understanding digital circuits and boolean algebra",
      topics: [
        { name: "Digital Logic Design", path: "/digital_logic" }
      ]
    },
    {
      title: "Computer Organization and Architecture",
      description: "Hardware components and system architecture",
      topics: [
        { name: "Computer Architecture", path: "/computer_architecture" }
      ]
    },
    {
      title: "Programming and Data Structures",
      description: "Programming fundamentals and data organization",
      topics: [
        { name: "C Programming", path: "/c_programming" },
        { name: "Data Structures", path: "/data_structures" }
      ]
    },
    {
      title: "Algorithms",
      description: "Design and analysis of algorithms",
      topics: [
        { name: "Algorithm Analysis", path: "/algorithms" }
      ]
    },
    {
      title: "Theory of Computation",
      description: "Fundamental theory of computational systems",
      topics: [
        { name: "Theory of Computation", path: "/theory_of_computation" }
      ]
    },
    {
      title: "Compiler Design",
      description: "Principles and practices of compiler construction",
      topics: [
        { name: "Compiler Design", path: "/compiler_design" }
      ]
    },
    {
      title: "Operating Systems",
      description: "Concepts and implementation of operating systems",
      topics: [
        { name: "Operating Systems", path: "/operating_systems" }
      ]
    },
    {
      title: "Databases",
      description: "Database management systems and SQL",
      topics: [
        { name: "Database Systems", path: "/databases" }
      ]
    },
    {
      title: "Computer Networks",
      description: "Network protocols and architecture",
      topics: [
        { name: "Computer Networks", path: "/computer_networks" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Computer Science Notes</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Comprehensive study materials for computer science and engineering
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.title}
            title={subject.title}
            description={subject.description}
            topics={subject.topics}
          />
        ))}
      </div>
    </div>
  );
};

export default CSNotesHome;