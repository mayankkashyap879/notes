"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, Sun, Moon } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const subjects = [
  {
    name: "Eng. Maths",
    path: "/engineering_mathematics",
    subTopics: [
      { name: "Discrete Math", path: "/discrete_mathematics" },
      { name: "Linear Algebra", path: "/linear_algebra" },
      { name: "Calculus", path: "/calculus" },
      { name: "Prob. & Stats", path: "/probability_statistics" },
    ],
  },
  {
    name: "D. Logic",
    path: "/digital_logic",
    subTopics: [{ name: "Digital Logic Design", path: "/digital_logic" }],
  },
  {
    name: "COA",
    path: "/computer_architecture",
    subTopics: [{ name: "Comp. Architecture", path: "/computer_architecture" }],
  },
  {
    name: "PDS",
    path: "/programming_data_structures",
    subTopics: [
      { name: "C Programming", path: "/c_programming" },
      { name: "Data Structures", path: "/data_structures" },
    ],
  },
  {
    name: "Algo",
    path: "/algorithms",
    subTopics: [{ name: "Algorithm Analysis", path: "/algorithms" }],
  },
  {
    name: "ToC",
    path: "/theory_of_computation",
    subTopics: [
      { name: "Theory of Computation", path: "/theory_of_computation" },
    ],
  },
  {
    name: "Comp.Des.",
    path: "/compiler_design",
    subTopics: [{ name: "Compiler Design", path: "/compiler_design" }],
  },
  {
    name: "OS",
    path: "/operating_systems",
    subTopics: [{ name: "Operating Systems", path: "/operating_systems" }],
  },
  {
    name: "DB",
    path: "/databases",
    subTopics: [{ name: "Database Systems", path: "/databases" }],
  },
  {
    name: "CN",
    path: "/computer_networks",
    subTopics: [{ name: "Computer Networks", path: "/computer_networks" }],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subjectsDropdownOpen, setSubjectsDropdownOpen] = useState(false);
  const [hoveredSubjectIndex, setHoveredSubjectIndex] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeMediaQuery.matches);

      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setIsDarkMode(storedTheme === 'dark');
      }
    }
  }, []);

  // Update theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>

        <main className="min-h-screen">{children}</main>
        <Analytics />
        <SpeedInsights />

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              *If there&apos;s anything wrong or missing, please{" "}
              <a
                href="mailto:contact@csnotes.example.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                email me
              </a>
              .
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/mayankksp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Mayank Kashyap
              </a>{" "}
              <a
                href="https://www.linkedin.com/company/go-classes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                (GO Classes Student)
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
