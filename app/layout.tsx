"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, Sun, Moon } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

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
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white">
              <span>CS Notes</span>
              <span className="bg-yellow-300 text-black text-xs font-semibold px-2 py-0.5 rounded-full">
                BETA
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 text-gray-600 dark:text-gray-300">
              <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</Link>

              {/* Subjects Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSubjectsDropdownOpen(true)}
                onMouseLeave={() => {
                  setSubjectsDropdownOpen(false);
                  setHoveredSubjectIndex(null);
                }}
              >
                <button className="flex items-center space-x-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  <span>Subjects</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Remove gap by positioning dropdown right at the bottom of the button */}
                <div
                  className={`absolute left-0 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transform transition-all duration-200 origin-top-right ${subjectsDropdownOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-2 invisible'
                    }`}
                  style={{ top: "100%" }}
                >
                  {subjects.map((subject, index) => (
                    <div
                      key={subject.path}
                      className="relative"
                      onMouseEnter={() => setHoveredSubjectIndex(index)}
                      onMouseLeave={() => setHoveredSubjectIndex(null)}
                    >
                      <Link
                        href={subject.path}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subject.name}
                      </Link>

                      {/* Sub-topics dropdown */}
                      {subject.subTopics.length > 0 && (
                        <div
                          className={`absolute left-full top-0 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-all duration-200 ${hoveredSubjectIndex === index
                            ? 'opacity-100 translate-x-0 visible'
                            : 'opacity-0 -translate-x-2 invisible'
                            }`}
                          style={{ marginLeft: "8px" }}
                        >
                          {subject.subTopics.map((topic) => (
                            <Link
                              key={topic.path}
                              href={topic.path}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                            >
                              {topic.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</Link> */}
              <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <nav className="px-4 py-4 space-y-2 text-sm">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  Home
                </Link>
                <details className="group">
                  <summary className="cursor-pointer py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 list-none flex items-center justify-between">
                    Subjects
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="ml-4 mt-2 space-y-2">
                    {subjects.map((subj) => (
                      <details key={subj.path} className="group/inner">
                        <summary className="cursor-pointer py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 list-none flex items-center justify-between">
                          {subj.name}
                          <ChevronDown className="h-4 w-4 transition-transform group-open/inner:rotate-180" />
                        </summary>
                        <div className="ml-4 mt-2 space-y-2">
                          {subj.subTopics.map((topic) => (
                            <Link
                              key={topic.path}
                              href={topic.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                              {topic.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </details>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  About
                </Link>
              </nav>
            </div>
          )}
        </header>

        <main className="min-h-screen">{children}</main>
        <Analytics />

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
