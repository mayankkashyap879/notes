"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

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
  const [hoveredSubjectIndex, setHoveredSubjectIndex] = useState<number | null>(
    null
  );

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Bar */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold"
            >
              <span>CS Notes</span>
              <span className="bg-yellow-300 text-black text-xs font-semibold px-2 py-0.5 rounded-full">
                BETA
              </span>
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-4 text-gray-600 dark:text-gray-300 items-center relative">
              <Link href="/">Home</Link>
              <div
                className="relative"
                onMouseEnter={() => setSubjectsDropdownOpen(true)}
                onMouseLeave={() => {
                  setSubjectsDropdownOpen(false);
                  setHoveredSubjectIndex(null);
                }}
              >
                <button className="flex items-center space-x-1 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none">
                  <span>Subjects</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {subjectsDropdownOpen && (
                  <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg py-2 z-50 whitespace-nowrap flex">
                    <div className="relative">
                      {subjects.map((subj, index) => (
                        <div
                          key={subj.path}
                          className="relative cursor-pointer"
                          onMouseEnter={() => setHoveredSubjectIndex(index)}
                          onMouseLeave={() =>
                            setHoveredSubjectIndex((prev) =>
                              prev === index ? null : prev
                            )
                          }
                        >
                          <div className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link href={subj.path}>{subj.name}</Link>
                          </div>
                          {hoveredSubjectIndex === index &&
                            subj.subTopics.length > 0 && (
                              <div className="absolute top-0 left-full ml-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg py-2">
                                {subj.subTopics.map((topic) => (
                                  <Link
                                    key={topic.path}
                                    href={topic.path}
                                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap"
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
                )}
              </div>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <nav className="px-4 py-4 space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-blue-500 dark:hover:text-blue-400"
                >
                  Home
                </Link>
                <details>
                  <summary className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400">
                    Subjects
                  </summary>
                  <div className="ml-4 mt-2 space-y-2">
                    {subjects.map((subj) => (
                      <details key={subj.path} className="pl-2">
                        <summary className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400">
                          {subj.name}
                        </summary>
                        <div className="ml-4 mt-2 space-y-2">
                          {subj.subTopics.map((topic) => (
                            <Link
                              key={topic.path}
                              href={topic.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block hover:text-blue-500 dark:hover:text-blue-400"
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
                  className="block hover:text-blue-500 dark:hover:text-blue-400"
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-blue-500 dark:hover:text-blue-400"
                >
                  About
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 dark:text-gray-300 text-center text-sm space-y-2">
            <p>
              *If there&apos;s anything wrong or missing, please{" "}
              <a
                href="mailto:contact@csnotes.example.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                email me
              </a>
              .
            </p>
            <p>
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/mayankksp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Mayank Kashyap
              </a>{" "}
              <a
                href="https://www.linkedin.com/company/go-classes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
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
