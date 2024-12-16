'use client';
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

interface SubSectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
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

const SubSection: React.FC<SubSectionProps> = ({ title, children }) => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="ml-4 text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};

const CombinatoricsNotes: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Section title="1. Basic Counting Principles">
      <div className="space-y-6">
        <p className="text-lg">
          Combinatorics fundamentally deals with counting without actually enumerating all possibilities. The core question is: How to figure out how many things have a certain property without actually listing all of them?
        </p>

        <SubSection title="The Addition Rule">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Rule:</p>
              <p>If there are n(A) ways to do A and n(B) ways to do B, and these are mutually exclusive events, then there are n(A) + n(B) ways to do either A or B.</p>
              <div className="mt-2">
                <p className="font-semibold">Critical Requirements:</p>
                <ul className="list-disc ml-6">
                  <li>Events must be mutually disjoint (no overlap)</li>
                  <li>Each event must be distinct and well-defined</li>
                </ul>
              </div>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Examples:</p>
              <div className="space-y-2">
                <div>
                  <p>1. Selecting a person from a group of students and teachers:</p>
                  <p className="ml-4">Total ways = Number of students + Number of teachers</p>
                  <p className="text-sm text-gray-600 ml-4">(Assuming no one is both a student and teacher)</p>
                </div>
                <div>
                  <p>2. Selecting a digit that is either even or greater than 7:</p>
                  <p className="ml-4">Even digits: {'{2,4,6,8}'} (4 ways)</p>
                  <p className="ml-4">Digits &gt; 7: {'{8,9}'} (2 ways)</p>
                  <p className="ml-4">Total = 5 ways (note: 8 is counted only once)</p>
                </div>
              </div>
            </Card>
          </div>
        </SubSection>

        <SubSection title="The Multiplication Rule">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Rule:</p>
              <p>If a sequence of tasks must be completed where:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Task 1 can be done in n ways</li>
                <li>Task 2 can be done in m ways</li>
                <li>Tasks are independent of each other</li>
              </ul>
              <p className="mt-2">Then the sequence can be completed in n × m ways</p>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Key Examples:</p>
              <div className="space-y-3">
                <div>
                  <p>1. Routes from Chennai to Delhi via Bangalore:</p>
                  <ul className="list-disc ml-6">
                    <li>2 ways to reach Bangalore from Chennai</li>
                    <li>3 ways to reach Delhi from Bangalore</li>
                    <li>Total possible routes = 2 × 3 = 6</li>
                  </ul>
                </div>
                <div>
                  <p>2. Four Letter English Words:</p>
                  <ul className="list-disc ml-6">
                    <li>Each position has 26 choices</li>
                    <li>Total possibilities = 26 × 26 × 26 × 26 = 26⁴</li>
                  </ul>
                </div>
                <div>
                  <p>3. Bit Strings of Length Seven:</p>
                  <ul className="list-disc ml-6">
                    <li>Each position has 2 choices (0 or 1)</li>
                    <li>Total possibilities = 2⁷</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold">Important Guidelines:</p>
              <ol className="list-decimal ml-6 mt-2">
                <li>When applying the product rule, start with the most restricted place or choice</li>
                <li>Not all given information may be relevant to solving the problem</li>
                <li>Verify that choices are truly independent before multiplying</li>
              </ol>
            </div>
          </div>
        </SubSection>

        <SubSection title="The Subtraction Rule">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Rule:</p>
              <p>To count elements that satisfy at least one of two conditions:</p>
              <p className="mt-2 font-mono">|A ∪ B| = |A| + |B| - |A ∩ B|</p>
              <p className="mt-2">This is the two-set version of the Inclusion-Exclusion Principle</p>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Examples:</p>
              <div className="space-y-3">
                <div>
                  <p>1. Bit strings of length eight that begin with 00 or end with 101:</p>
                  <ul className="list-disc ml-6">
                    <li>Strings starting with 00: 2⁶</li>
                    <li>Strings ending with 101: 2⁵</li>
                    <li>Strings with both: 2³</li>
                    <li>Total = 2⁶ + 2⁵ - 2³ = 88 strings</li>
                  </ul>
                </div>
                <div>
                  <p>2. K-length English Palindromes:</p>
                  <p className="ml-4">Number of palindromes = 26⌈ᵏ/²⌉</p>
                </div>
              </div>
            </Card>
          </div>
        </SubSection>

        <SubSection title="The Division Rule">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Principle:</p>
              <p>If a task can be done in n ways, and each solution appears exactly k times due to symmetry or repetition, then the actual number of unique solutions is n/k.</p>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Examples:</p>
              <div className="space-y-3">
                <div>
                  <p>1. Counting cows in a field:</p>
                  <ul className="list-disc ml-6">
                    <li>Count total legs</li>
                    <li>Divide by 4 to get number of cows</li>
                  </ul>
                </div>
                <div>
                  <p>2. Placing identical rooks on a chessboard:</p>
                  <ul className="list-disc ml-6">
                    <li>For two identical rooks: n!/2 arrangements</li>
                    <li>Each unique arrangement appears twice due to rook interchangeability</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold">K-to-1 Correspondence:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>A k-to-1 correspondence is an onto mapping where each target element has exactly k preimages</li>
                <li>|A| = k|B| or |B| = |A|/k in such cases</li>
                <li>Often used in solving combinatorial problems with symmetry</li>
              </ul>
            </div>
          </div>
        </SubSection>

        <SubSection title="Bijection Principle">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Definition:</p>
              <p>If there exists a one-to-one correspondence (bijection) between two sets A and B, then |A| = |B|.</p>
              <p className="mt-2">This principle allows us to solve counting problems by relating them to equivalent, simpler problems.</p>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Applications:</p>
              <ul className="list-disc ml-6">
                <li>Proving that the number of bit strings of length n equals the number of subsets of an n-element set (2ⁿ)</li>
                <li>Establishing relationships between different counting problems</li>
                <li>Simplifying complex counting scenarios</li>
              </ul>
            </Card>
          </div>
        </SubSection>
      </div>
    </Section>

    <Section title="2. Permutations and Combinations">
        <div className="space-y-6">
            <p className="text-lg">These are fundamental techniques for counting ordered and unordered selections, derived from the product rule and division principle respectively.</p>

            <SubSection title="Permutations (Order Matters)">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Basic Definition:</p>
                <p>A permutation is an ordered arrangement of objects where order matters.</p>
                <div className="mt-2">
                    <p className="font-semibold">Core Formulas:</p>
                    <ul className="list-disc ml-6 mt-1">
                    <li>All n distinct objects: P(n) = n!</li>
                    <li>r objects from n distinct objects: P(n,r) = n!/(n-r)!</li>
                    <li>With repetition allowed: nʳ</li>
                    </ul>
                </div>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Example: Basic Permutation</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Arranging 5 different books on a shelf: P(5) = 5! = 120 ways</li>
                    <li>Selecting and arranging 3 letters from set {'{A,B,C,D,E}'}:<br/>P(5,3) = 5!/(5-3)! = 60 ways</li>
                </ul>
                </Card>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Permutations with Repetition:</p>
                <p>For n objects where nᵢ are repeated:</p>
                <p className="mt-2 font-mono">n!/(n₁!×n₂!×...×nₖ!)</p>
                <p className="mt-2">Example: Permutations of &apos;COOK&apos;</p>
                <ul className="list-disc ml-6">
                    <li>Method 1: Select positions for C, K, then arrange O&apos;s</li>
                    <li>Method 2: Consider as 4!/(2!) = 12 arrangements</li>
                    <li>Method 3: Select positions with multiplicity</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Special Cases:</p>
                <ul className="list-disc ml-6">
                    <li>Circular Permutations: (n-1)!</li>
                    <li>Permutations with restrictions:
                        <ul className="list-disc ml-6 mt-1">
                            <li>Elements always together: Treat as one unit</li>
                            <li>Elements never together: Total - (together cases)</li>
                        </ul>
                    </li>
                </ul>
                </Card>
            </div>
            </SubSection>

            <SubSection title="Combinations (Order Doesn't Matter)">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A combination is a selection of objects where order doesn&apos;t matter.</p>
                <div className="mt-2">
                    <p className="font-semibold">Core Formula:</p>
                    <p>C(n,r) = n!/[r!(n-r)!]</p>
                    <p className="mt-1">Also written as ⁿCᵣ or (n choose r)</p>
                </div>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Key Properties:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>C(n,r) = C(n,n-r) [Symmetry]</li>
                    <li>C(n,0) = C(n,n) = 1</li>
                    <li>C(n,1) = n</li>
                    <li>C(n,r) = 0 if r &gt; n</li>
                    <li>C(n+1,r) = C(n,r-1) + C(n,r) [Pascal&apos;s Identity]</li>
                </ul>
                </Card>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Pascal&apos;s Triangle:</p>
                <div className="mt-2 text-center font-mono">
                    <p>1</p>
                    <p>1 1</p>
                    <p>1 2 1</p>
                    <p>1 3 3 1</p>
                    <p>1 4 6 4 1</p>
                </div>
                <p className="mt-2 text-sm text-center">Each number is sum of two numbers above it</p>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Vandermonde&apos;s Identity:</p>
                <p className="mt-2">C(m+n,r) = ΣC(m,k)×C(n,r-k)</p>
                <p className="mt-2">Example: Selecting r objects from two groups of m and n objects</p>
                </Card>

                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Combinations with Repetition:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Formula: C(n+r-1,r) or C(n+r-1,n-1)</li>
                    <li>Also known as &quot;Stars and Bars&quot; problem</li>
                    <li>Example: Selecting r items from n types with repetition allowed</li>
                </ul>
                </div>
            </div>
            </SubSection>

            <SubSection title="Common Applications">
            <div className="space-y-4">
                <Card className="p-4">
                <p className="font-semibold">Team Selection Problems:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Selecting team members (combinations)</li>
                    <li>Arranging team positions (permutations)</li>
                    <li>Selecting captains and vice-captains (partial permutations)</li>
                    <li>Forming groups with restrictions</li>
                </ul>
                </Card>

                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Word Formation Problems:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Arranging letters without constraints (permutations)</li>
                    <li>Words with repeated letters (permutations with repetition)</li>
                    <li>Words with position restrictions (conditional permutations)</li>
                    <li>Words requiring specific patterns</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Distribution Problems:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Distributing distinct objects to distinct boxes (permutations)</li>
                    <li>Distributing identical objects to distinct boxes (combinations)</li>
                    <li>Distributing with minimum/maximum constraints</li>
                    <li>Circular distributions</li>
                </ul>
                </Card>
            </div>
            </SubSection>
        </div>
        </Section>

        <Section title="3. Advanced Counting Techniques">
      <div className="space-y-6">
        <p className="text-lg">Advanced counting techniques help solve complex combinatorial problems by using sophisticated principles and methods. These techniques are particularly useful when basic counting principles alone are insufficient.</p>

        <SubSection title="The Pigeonhole Principle">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Basic Principle:</p>
              <p>If m pigeons are placed into n holes and m &gt; n, then at least one hole must contain more than one pigeon.</p>
              
              <div className="mt-4">
                <p className="font-semibold">Generalized Form:</p>
                <p>If m objects are distributed into n boxes:</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>Some box must contain at least ⌈m/n⌉ objects</li>
                  <li>Some box must contain at most ⌊m/n⌋ objects</li>
                </ul>
              </div>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Applications:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">1. Birthday Problem:</p>
                  <p>In a group of 367 people, at least two must share a birthday (since there are only 366 possible birthdays).</p>
                </div>
                <div>
                  <p className="font-medium">2. Sequence Problem:</p>
                  <p>Among any n+1 integers, there must be two that leave the same remainder when divided by n.</p>
                </div>
              </div>
            </Card>
          </div>
        </SubSection>

        <SubSection title="Inclusion-Exclusion Principle">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">For Two Sets:</p>
              <p>|A ∪ B| = |A| + |B| - |A ∩ B|</p>
              
              <div className="mt-4">
                <p className="font-semibold">For Three Sets:</p>
                <p>|A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |B ∩ C| - |A ∩ C| + |A ∩ B ∩ C|</p>
              </div>
              
              <div className="mt-4">
                <p className="font-semibold">General Formula:</p>
                <p>|∪Aᵢ| = Σ|Aᵢ| - Σ|Aᵢ∩Aⱼ| + Σ|Aᵢ∩Aⱼ∩Aₖ| - ...</p>
              </div>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Practical Example: Student Enrollment</p>
              <div className="mt-2">
                <p>In a class:</p>
                <ul className="list-disc ml-6">
                  <li>65 students take English</li>
                  <li>45 take Math</li>
                  <li>42 take Science</li>
                  <li>30 take both English and Math</li>
                  <li>25 take Math and Science</li>
                  <li>20 take English and Science</li>
                  <li>15 take all three subjects</li>
                </ul>
                <p className="mt-2">Total unique students = 65 + 45 + 42 - 30 - 25 - 20 + 15 = 92</p>
              </div>
            </Card>
          </div>
        </SubSection>

        <SubSection title="Double Counting">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Principle:</p>
              <p>Count the same quantity in two different ways to establish an equality or solve a counting problem.</p>
              
              <div className="mt-4">
                <p className="font-semibold">Key Applications:</p>
                <ul className="list-disc ml-6">
                  <li>Proving combinatorial identities</li>
                  <li>Solving complex counting problems</li>
                  <li>Verifying formulas</li>
                </ul>
              </div>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Example: Proving k × C(n,k) = n × C(n-1,k-1)</p>
              <div className="mt-2">
                <p>Method 1: Choose k items then select a leader</p>
                <p>= C(n,k) × k</p>
                <p className="mt-2">Method 2: Choose leader first then k-1 more items</p>
                <p>= n × C(n-1,k-1)</p>
                <p className="mt-2">Both count the same thing ⟹ k × C(n,k) = n × C(n-1,k-1)</p>
              </div>
            </Card>
          </div>
        </SubSection>

        <SubSection title="Bijective Proofs">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Concept:</p>
              <p>Establish a one-to-one correspondence between two sets to prove they have the same size.</p>
              
              <div className="mt-4">
                <p className="font-semibold">Key Steps:</p>
                <ul className="list-disc ml-6">
                  <li>Identify the two sets being compared</li>
                  <li>Construct an explicit bijection between them</li>
                  <li>Verify the mapping is both injective and surjective</li>
                </ul>
              </div>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Example: Bit Strings and Subsets</p>
              <div className="mt-2">
                <p>For an n-element set:</p>
                <ul className="list-disc ml-6">
                  <li>Number of bit strings of length n = 2ⁿ</li>
                  <li>Number of subsets = 2ⁿ</li>
                  <li>Bijection: 1 in position i ↔ element i is in subset</li>
                </ul>
              </div>
            </Card>
          </div>
        </SubSection>

        <SubSection title="Algebraic Techniques">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Methods Include:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Generating functions</li>
                <li>Recurrence relations</li>
                <li>Formal power series</li>
                <li>Polynomial manipulation</li>
              </ul>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Example: Derangement Formula</p>
              <div className="mt-2">
                <p>Number of derangements Dₙ satisfies:</p>
                <p>Dₙ = (n-1)(Dₙ₋₁ + Dₙ₋₂)</p>
                <p>This leads to the formula:</p>
                <p>Dₙ = n! × (1 - 1/1! + 1/2! - ... + (-1)ⁿ/n!)</p>
              </div>
            </Card>
          </div>
        </SubSection>
      </div>
    </Section>

    <Section title="4. Distribution Problems">
    <div className="space-y-6">
      <p className="text-lg">
        Distribution problems involve placing objects into boxes. The nature of both the objects and boxes leads to different counting techniques, with each case requiring its own specific approach.
      </p>

      <SubSection title="Types of Distribution Problems">
        <div className="space-y-4">
          <Card className="p-4">
            <p className="font-semibold">Four Main Cases:</p>
            <div className="space-y-3">
              <div>
                <p className="font-medium">1. DODB (Distinguishable Objects into Distinguishable Boxes)</p>
                <ul className="list-disc ml-6 mt-1 text-gray-600">
                  <li>Each object and box can be identified uniquely</li>
                  <li>Most straightforward case - ordered assignments</li>
                  <li>Formula: nᵏ for n objects into k boxes</li>
                  <li>Example: Assigning distinct tasks to different employees</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">2. IODB (Indistinguishable Objects into Distinguishable Boxes)</p>
                <ul className="list-disc ml-6 mt-1 text-gray-600">
                  <li>Objects are identical</li>
                  <li>Also known as &quot;Stars and Bars&quot; problem</li>
                  <li>Formula: C(n+k-1, k-1) or C(n+k-1, n)</li>
                  <li>Example: Distributing identical coins into different piggy banks</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">3. DOIB (Distinguishable Objects into Indistinguishable Boxes)</p>
                <ul className="list-disc ml-6 mt-1 text-gray-600">
                  <li>Related to set partitioning</li>
                  <li>Uses Stirling numbers of second kind</li>
                  <li>Formula: S(n,k) for n objects into exactly k boxes</li>
                  <li>Example: Grouping distinct elements into indistinguishable sets</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">4. IOIB (Indistinguishable Objects into Indistinguishable Boxes)</p>
                <ul className="list-disc ml-6 mt-1 text-gray-600">
                  <li>Related to integer partitions</li>
                  <li>Most restricted case</li>
                  <li>Uses partition function P(n)</li>
                  <li>Example: Breaking a number into sum of positive integers</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </SubSection>

      <SubSection title="Distribution with Constraints">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Common Constraints:</p>
            <ul className="list-disc ml-6">
              <li>Minimum objects per box (at least)</li>
              <li>Maximum objects per box (at most)</li>
              <li>Empty boxes allowed/not allowed</li>
              <li>Objects must be adjacent/non-adjacent</li>
              <li>Circular arrangements</li>
              <li>Order-sensitive distributions</li>
            </ul>
          </div>

          <Card className="p-4">
            <p className="font-semibold">Solution Strategy:</p>
            <ol className="list-decimal ml-6 mt-2">
              <li>Identify object and box distinguishability</li>
              <li>List all constraints</li>
              <li>Apply appropriate template</li>
              <li>Adjust formula for constraints</li>
              <li>Check for overcounting</li>
              <li>Verify boundary conditions</li>
            </ol>
          </Card>
        </div>
      </SubSection>

      <SubSection title="Integer Compositions">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Definition:</p>
            <p>A composition of an integer n is a way of writing n as the sum of a sequence of positive integers where order matters.</p>
            <div className="mt-2">
              <p className="font-semibold">Key Properties:</p>
              <ul className="list-disc ml-6">
                <li>Total number of compositions of n = 2ⁿ⁻¹</li>
                <li>Compositions into k parts = C(n-1, k-1)</li>
                <li>Different from partitions (where order doesn&apos;t matter)</li>
                <li>Related to IODB distribution problems</li>
                <li>Each composition represents a unique way to break down a number</li>
              </ul>
            </div>
          </div>

          <Card className="p-4">
            <p className="font-semibold">Example: Compositions of 4</p>
            <ul className="list-disc ml-6 mt-2">
              <li>4</li>
              <li>3+1, 1+3</li>
              <li>2+2</li>
              <li>2+1+1, 1+2+1, 1+1+2</li>
              <li>1+1+1+1</li>
            </ul>
            <p className="mt-2 text-sm">Total compositions = 2³ = 8</p>
          </Card>
        </div>
      </SubSection>

      <SubSection title="Important Formulas">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Key Distribution Formulas:</p>
            <div className="mt-2 space-y-3">
              <div>
                <p className="font-medium">DODB with no restrictions:</p>
                <p className="ml-4">n^k (n objects into k boxes)</p>
              </div>
              <div>
                <p className="font-medium">IODB with no restrictions:</p>
                <p className="ml-4">C(n+k-1, k-1) or C(n+k-1, n)</p>
              </div>
              <div>
                <p className="font-medium">DOIB into exactly k boxes:</p>
                <p className="ml-4">S(n,k) (Stirling number of second kind)</p>
              </div>
              <div>
                <p className="font-medium">IOIB (Integer Partitions):</p>
                <p className="ml-4">P(n) (Partition number)</p>
              </div>
            </div>
          </div>

          <Card className="p-4">
            <p className="font-semibold">Special Cases:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>At least one object per box: k! × S(n,k)</li>
              <li>At most m objects per box: Use inclusion-exclusion</li>
              <li>Exactly m objects per box: Direct multiplication</li>
              <li>Cyclic distributions: Divide by appropriate factorial</li>
              <li>Non-empty box constraint: Subtract empty box cases</li>
            </ul>
          </Card>
        </div>
      </SubSection>

      <SubSection title="Application Examples">
        <div className="space-y-4">
          <Card className="p-4">
            <p className="font-semibold">Example 1: Card Distribution</p>
            <div className="mt-2">
              <p>Distributing 52 cards to 4 players:</p>
              <ul className="list-disc ml-6">
                <li>DODB case (ordered dealing): 52!/(13!)⁴</li>
                <li>DOIB case (unordered teams): S(52,4) × 4!</li>
                <li>With constraints on specific cards: Use inclusion-exclusion</li>
              </ul>
            </div>
          </Card>

          <Card className="p-4">
            <p className="font-semibold">Example 2: Integer Solutions</p>
            <div className="mt-2">
              <p>Solutions to x₁ + x₂ + x₃ = n where:</p>
              <ul className="list-disc ml-6">
                <li>Non-negative integers: C(n+2,2)</li>
                <li>Positive integers: C(n-1,2)</li>
                <li>With restrictions: Use inclusion-exclusion</li>
                <li>With upper bounds: Apply complementary counting</li>
              </ul>
            </div>
          </Card>

          <Card className="p-4">
            <p className="font-semibold">Example 3: Team Formation</p>
            <div className="mt-2">
              <p>Dividing n people into k teams:</p>
              <ul className="list-disc ml-6">
                <li>Ordered teams: k! × S(n,k)</li>
                <li>Unordered teams: S(n,k)</li>
                <li>With size restrictions: Adjust using inclusion-exclusion</li>
                <li>With leadership roles: Multiply by appropriate arrangements</li>
              </ul>
            </div>
          </Card>

          <Card className="p-4">
            <p className="font-semibold">Example 4: Classroom Assignments</p>
            <div className="mt-2">
              <p>Assigning students to classrooms:</p>
              <ul className="list-disc ml-6">
                <li>Equal size classes: Use multinomial coefficient</li>
                <li>Variable size classes: Apply IODB formulas</li>
                <li>With teacher assignments: Multiply by teacher arrangements</li>
                <li>With minimum class sizes: Use inclusion-exclusion</li>
              </ul>
            </div>
          </Card>
        </div>
      </SubSection>
    </div>
  </Section>

    <Section title="5. Generating Functions">
      <div className="space-y-6">
        <p className="text-lg">
          Generating functions are powerful tools that convert sequences into functions, enabling us to solve complex counting problems through algebraic manipulation. They provide a systematic way to handle sequences and series.
        </p>

        <SubSection title="Introduction to Sequences">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Definition:</p>
              <p>For a sequence S = {'{a₀, a₁, a₂, a₃, ...}'}, the ordinary generating function is:</p>
              <p className="mt-2 font-mono">G(S) = a₀ + a₁x + a₂x² + a₃x³ + ... = Σₙ≥₀ aₙxⁿ</p>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Important Notes:</p>
              <ul className="list-disc ml-6">
                <li>x is a formal variable - numerical values are not substituted</li>
                <li>We focus on finding coefficients of xⁿ to determine aₙ</li>
                <li>Convergence is not a concern in combinatorial applications</li>
                <li>Used primarily for manipulating sequences algebraically</li>
              </ul>
            </Card>
          </div>
        </SubSection>

        <SubSection title="Arithmetic and Geometric Progressions">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Arithmetic-Geometric Progression Formula:</p>
              <p>For S = a + (a+d)r + (a+2d)r² + (a+3d)r³ + ...</p>
              <p className="mt-2">S = a/(1-r) + dr/(1-r)² for infinite AGP</p>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Example:</p>
              <p>Let G(S) = 1 + 2x + 3x² + 4x³ + ...</p>
              <p>This can be written as 1/(1-x)² using the AGP formula</p>
            </Card>
          </div>
        </SubSection>

        <SubSection title="Common Generating Functions">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Fundamental Series:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Geometric: 1/(1-x) = 1 + x + x² + x³ + ...</li>
                <li>Binomial: (1+x)ⁿ = C(n,0) + C(n,1)x + C(n,2)x² + ...</li>
                <li>Exponential: eˣ = 1 + x + x²/2! + x³/3! + ...</li>
              </ul>
            </div>
          </div>
        </SubSection>

        <SubSection title="Finding Terms in Sequences">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Methods:</p>
              <ol className="list-decimal ml-6 mt-2">
                <li>Direct expansion of the generating function</li>
                <li>Using derivatives to find coefficients</li>
                <li>Partial fraction decomposition for rational functions</li>
              </ol>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Example:</p>
              <p>For f(x) = (2x - 3)³, to find a₀:</p>
              <ul className="list-disc ml-6">
                <li>Put x = 0 to get a₀ = -27</li>
                <li>Take f&apos;(x) = 6(2x - 3)² for a₁</li>
                <li>Put x = 0 in f&apos;(x) to get a₁ = 54</li>
              </ul>
            </Card>
          </div>
        </SubSection>

        <SubSection title="Extended Binomial Coefficients">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Definition and Properties:</p>
              <ul className="list-disc ml-6">
                <li>Extends binomial coefficients to non-integer values</li>
                <li>Example: C(1/2, 2) = (1/2)(1/2-1)/2! = -1/8</li>
                <li>C(-n,r) = (-1)ʳ × C(n+r-1,r)</li>
              </ul>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Important Note:</p>
              <p>Unlike regular binomial coefficients, C(n,r) ≠ C(n,n-r) when n is not a natural number</p>
            </Card>
          </div>
        </SubSection>

        <SubSection title="Applications in Series Expansion">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Expansion of Negative Powers:</p>
              <p>For (1+x)⁻ⁿ expansion:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Take aⁿ outside to get aⁿ(1+(b/a))ⁿ form</li>
                <li>Use extended binomial coefficients for expansion</li>
                <li>Coefficient of xᵏ is C(-n,k)</li>
              </ul>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Example:</p>
              <p>To find coefficient of x⁴ in (1+x)⁻²:</p>
              <p>= C(-2,4) = C(5,4) = 5</p>
            </Card>
          </div>
        </SubSection>

        <SubSection title="Exponential Generating Functions">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Definition:</p>
              <p>For sequence S = {'{a₀, a₁, a₂, a₃, ...}'}</p>
              <p className="mt-2">EG(x) = a₀/0! + a₁x/1! + a₂x²/2! + a₃x³/3! + ...</p>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Uses:</p>
              <ul className="list-disc ml-6">
                <li>Solving counting problems with distinguishable objects</li>
                <li>Handling permutations and arrangements</li>
                <li>Working with labeled structures</li>
              </ul>
            </Card>
          </div>
        </SubSection>
      </div>
    </Section>

    <Section title="6. Recurrence Relations">
    <div className="space-y-6">
      <p className="text-lg">
        Recurrence relations occur when terms in a sequence depend on previous terms. Each recurrence relation combined with initial conditions defines a unique sequence.
      </p>

      <SubSection title="Basic Concepts">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Definition:</p>
            <p>A recurrence relation for the sequence {'{aₙ}'} is an equation that expresses aₙ in terms of one or more of the previous terms.</p>
            <div className="mt-2">
              <p className="font-semibold">Common Examples:</p>
              <ul className="list-disc ml-6">
                <li>Arithmetic Sequence: aₙ = aₙ₋₁ + d</li>
                <li>Geometric Sequence: aₙ = raₙ₋₁</li>
                <li>Fibonacci Sequence: Fₙ = Fₙ₋₁ + Fₙ₋₂</li>
                <li>Derangement: Dₙ = (n-1)(Dₙ₋₁ + Dₙ₋₂)</li>
              </ul>
            </div>
          </div>

          <Card className="p-4">
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-6">
              <li>Recurrence equation</li>
              <li>Initial conditions</li>
              <li>Domain of definition</li>
              <li>Order of recurrence (highest index difference)</li>
            </ul>
          </Card>
        </div>
      </SubSection>

      <SubSection title="Linear Recurrence Relations">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Types:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>First Order: aₙ = paₙ₋₁ + q</li>
              <li>Second Order: aₙ = paₙ₋₁ + qaₙ₋₂</li>
              <li>kth Order: aₙ = f(aₙ₋₁, aₙ₋₂, ..., aₙ₋ₖ)</li>
            </ul>
          </div>

          <Card className="p-4">
            <p className="font-semibold">Classification:</p>
            <div className="mt-2">
              <p>Homogeneous: aₙ = paₙ₋₁ + qaₙ₋₂</p>
              <p>Non-homogeneous: aₙ = paₙ₋₁ + qaₙ₋₂ + f(n)</p>
            </div>
          </Card>
        </div>
      </SubSection>

      <SubSection title="Solving Methods">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Characteristic Equation Method:</p>
            <ol className="list-decimal ml-6 mt-2">
              <li>Replace aₙ with rⁿ in the recurrence relation</li>
              <li>Solve resulting polynomial equation</li>
              <li>Form general solution using roots</li>
              <li>Apply initial conditions to find constants</li>
            </ol>
          </div>

          <Card className="p-4">
            <p className="font-semibold">Alternative Methods:</p>
            <ul className="list-disc ml-6">
              <li>Generating Functions Method</li>
              <li>Method of Iteration</li>
              <li>Master Theorem (for divide-and-conquer)</li>
            </ul>
          </Card>
        </div>
      </SubSection>

      <SubSection title="Limits of Recursive Sequences">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Convergence Analysis:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Find fixed points: x where f(x) = x</li>
              <li>Check if sequence is bounded</li>
              <li>Verify monotonicity using derivatives</li>
              <li>Apply Monotonic Sequence Theorem</li>
            </ul>
          </div>

          <Card className="p-4">
            <p className="font-semibold">Convergence Criteria:</p>
            <div className="mt-2">
              <p>For sequence aₙ₊₁ = f(aₙ):</p>
              <ul className="list-disc ml-6">
                <li>If |f&apos;(L)| &lt; 1 at fixed point L, sequence converges locally</li>
                <li>If sequence is bounded and monotonic, it converges</li>
                <li>For geometric sequence |r| &lt; 1 ensures convergence</li>
              </ul>
            </div>
          </Card>
        </div>
      </SubSection>

      <SubSection title="Special Recurrences">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Bell Numbers:</p>
            <div className="mt-2">
              <p>Bₙ₊₁ = Σₖ₌₀ⁿ C(n,k)Bₖ</p>
              <p className="mt-1">First few values: 1, 1, 2, 5, 15, 52, 203</p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
            <p className="font-semibold">Derangement Numbers:</p>
            <div className="mt-2">
              <p>Dₙ = (n-1)(Dₙ₋₁ + Dₙ₋₂)</p>
              <p>Simplified: Dₙ = nDₙ₋₁ + (-1)ⁿ</p>
              <p className="mt-1">Initial: D₁ = 0, D₂ = 1</p>
            </div>
          </div>

          <Card className="p-4">
            <p className="font-semibold">Applications:</p>
            <ul className="list-disc ml-6">
              <li>Fibonacci Numbers: Growth patterns</li>
              <li>Tower of Hanoi: T(n) = 2T(n-1) + 1</li>
              <li>Binary Tree Properties</li>
              <li>Divide and Conquer Algorithms</li>
              <li>Population Growth Models</li>
              <li>Financial Compound Interest</li>
            </ul>
          </Card>
        </div>
      </SubSection>

      <SubSection title="Convergence and Fixed Points">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Analyzing Convergence:</p>
            <ol className="list-decimal ml-6 mt-2">
              <li>Locate fixed points by solving x = f(x)</li>
              <li>Verify boundedness of sequence</li>
              <li>Check derivative at fixed points</li>
              <li>Analyze concavity with second derivative</li>
              <li>Apply appropriate convergence theorems</li>
            </ol>
          </div>

          <Card className="p-4">
            <p className="font-semibold">Example Analysis:</p>
            <div className="mt-2">
              <p>For aₙ₊₁ = (5)/(6-aₙ) with a₁ = 4:</p>
              <ul className="list-disc ml-6">
                <li>Fixed points: x = 1 or x = 5</li>
                <li>Bounded: 1 &lt; aₙ &lt; 5 for n &gt; 1</li>
                <li>f&apos;(x) &gt; 0 for 1 &lt; x &lt; 5</li>
                <li>Sequence converges to x = 1</li>
              </ul>
            </div>
          </Card>
        </div>
      </SubSection>
    </div>
  </Section>
    </div>
  );
};

export default CombinatoricsNotes;