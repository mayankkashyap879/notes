import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="mb-6">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center w-full p-3 text-left font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          {isOpen ? <ChevronDown className="mr-2 h-5 w-5" /> : <ChevronRight className="mr-2 h-5 w-5" />}
          {title}
        </button>
        {isOpen && (
          <div className="mt-2 ml-4 p-4 border-l-2 border-gray-200 dark:border-gray-700">
            {children}
          </div>
        )}
      </div>
    );
  };