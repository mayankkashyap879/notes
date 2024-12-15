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

const SetTheoryNotes: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Section title="1. Introduction to Set Theory">
        <div className="space-y-4">
          <Card className="p-4">
            <p className="font-semibold mb-2">Definition:</p>
            <p>A set is an unordered collection of distinct objects. The objects that make up a set are called elements or members of the set.</p>
            <div className="mt-4">
              <p className="font-semibold">Formal Set Notation:</p>
              <ul className="list-disc ml-6">
                <li>Elements are enclosed in curly braces {'{}'}</li>
                <li>Elements are separated by commas</li>
                <li>Order is irrelevant: {'{a, b, c}'} = {'{c, b, a}'}</li>
                <li>Repetition is ignored: {'{a, a, b}'} = {'{a, b}'}</li>
              </ul>
            </div>
          </Card>

          <SubSection title="Set Membership">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Membership Notation:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>∈ denotes &quot;is an element of&quot;</li>
                  <li>∉ denotes &quot;is not an element of&quot;</li>
                  <li>For S = {'{a, b, c}'}, we write:</li>
                  <ul className="list-disc ml-6 mt-1">
                    <li>a ∈ S (a is an element of S)</li>
                    <li>d ∉ S (d is not an element of S)</li>
                  </ul>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Critical Distinctions:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>1 ≠ {'{1}'} (number vs singleton set)</li>
                  <li>For S = {'{a, b, c}'}:</li>
                  <ul className="list-disc ml-6 mt-1">
                    <li>a ∈ S (true)</li>
                    <li>{'{a}'} ∉ S (false - set containing a is not an element)</li>
                    <li>{'{a, b}'} ⊆ S (subset relation, not membership)</li>
                  </ul>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Empty Set">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Empty Set Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Denoted by ∅ or {'{}'}</li>
                  <li>Contains no elements: |∅| = 0</li>
                  <li>Unique: There is only one empty set</li>
                  <li>∅ ≠ {'{∅}'} (empty set vs set containing empty set)</li>
                  <li>|{'{∅}'}| = 1 (cardinality of set containing empty set)</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Set Representation Methods">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Types of Representation:</p>
                <ul className="list-disc ml-6">
                  <li>Verbal: Description in words</li>
                  <li>Roster/List: Explicit listing of elements</li>
                  <li>Set-Builder: {'{x | P(x)}'} where P(x) is a property</li>
                  <li>Venn Diagrams: Visual representation</li>
                </ul>
                <div className="mt-4">
                  <p className="font-semibold">Set-Builder Examples:</p>
                  <ul className="list-disc ml-6">
                    <li>Even integers: {'{n | n ∈ Z ∧ n mod 2 = 0}'}</li>
                    <li>Prime numbers less than 10: {'{x | x is prime ∧ x < 10}'}</li>
                    <li>Positive reals: {'{x | x ∈ R ∧ x > 0}'}</li>
                  </ul>
                </div>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Set Classification">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Types of Sets:</p>
                <ul className="list-disc ml-6">
                  <li>Finite Sets: |A| = n for some n ∈ N</li>
                  <li>Infinite Sets: No finite cardinality</li>
                  <li>Countable Sets: Can be put in 1-1 correspondence with N</li>
                  <li>Uncountable Sets: Cannot be counted</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Examples:</p>
                <ul className="list-disc ml-6">
                  <li>Finite: D = {'{1, 2, 3, 4}'}</li>
                  <li>Infinite Countable: N = {'{1, 2, 3, ...}'}</li>
                  <li>Infinite Uncountable: R (real numbers)</li>
                  <li>Empty: ∅</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="2. More About Sets">
        <div className="space-y-6">
          <SubSection title="Subset Relations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition of Subset:</p>
                <p>A set A is a subset of set S (denoted A ⊆ S) if every element of A is also an element of S.</p>
                <div className="mt-2">
                  <p className="font-semibold">First-Order Logic Definition:</p>
                  <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">A ⊆ S ⟺ ∀x(x ∈ A → x ∈ S)</p>
                </div>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Fundamental Subset Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Reflexive: Every set is a subset of itself (S ⊆ S)</li>
                  <li>Empty set is a subset of every set (∅ ⊆ S)</li>
                  <li>Transitive: If A ⊆ B and B ⊆ C, then A ⊆ C</li>
                  <li>Important Distinction: ∅ ∈ S and ∅ ⊆ S have different meanings</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Important Examples:</p>
                <p>Let S = {'{1, {2, 3}, 4}'}</p>
                <ul className="list-disc ml-6">
                  <li>{'{1}'} ⊆ S is true, but 1 ⊆ S is meaningless (numbers cannot be subsets)</li>
                  <li>{'{1}'} ∈ S is false, but 1 ∈ S is true</li>
                  <li>{'{2}'} ⊆ S is false (2 is not directly in S)</li>
                  <li>{'{2, 3}'} ⊆ S is false but {'{2, 3}'} ∈ S is true</li>
                  <li>{'{}'} ⊆ S is true (empty set is subset of all sets)</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Proper Subsets">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A proper subset of set S is a set T that satisfies:</p>
                <ul className="list-disc ml-6">
                  <li>T ⊆ S (T is a subset of S)</li>
                  <li>T ≠ S (T is not equal to S)</li>
                  <li>Notation: T ⊂ S or T ⊊ S</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Examples:</p>
                <p>For S = {'{1, 2, 3}'}</p>
                <ul className="list-disc ml-6">
                  <li>Proper subsets: ∅, {'{1}'}, {'{2}'}, {'{3}'}, {'{1,2}'}, {'{1,3}'}, {'{2,3}'}</li>
                  <li>Non-proper subset: {'{1,2,3}'} (equal to S)</li>
                  <li>Total number of proper subsets = 2|S| - 1 = 7</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Key Distinctions:</p>
                <ul className="list-disc ml-6">
                  <li>A ⊂ B means A is a proper subset of B</li>
                  <li>A ⊆ B means A is a subset of B (may be equal)</li>
                  <li>If A ⊂ B, then |A| &lt; |B|</li>
                  <li>No set is a proper subset of itself</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Powerset">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>The powerset of a set S (written as P(S) or 2S) is the set of all subsets of S, including ∅ and S itself.</p>
                <div className="mt-2">
                  <p className="font-semibold">Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>|P(S)| = 2|S| where |S| is the cardinality of S</li>
                    <li>∅ ∈ P(S) for any set S</li>
                    <li>S ∈ P(S) for any set S</li>
                    <li>A ⊆ B ⟺ P(A) ⊆ P(B)</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Special Cases:</p>
                <ul className="list-disc ml-6">
                  <li>P(∅) = {'{∅}'}</li>
                  <li>|P(∅)| = 1</li>
                  <li>P({'{∅}'}) = {'{∅, {∅}}'}</li>
                  <li>|P(P(S))| = 2^(2^n) where |S| = n</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Examples:</p>
                <p>For S = {'{a, b}'}</p>
                <p>P(S) = {'{∅, {a}, {b}, {a,b}}'}</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Cardinality: |P(S)| = 2² = 4</li>
                  <li>Each element of P(S) is a set</li>
                  <li>Elements are ordered by ⊆ relation</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Important Theorems:</p>
                <ul className="list-disc ml-6">
                  <li>For any sets A and B: P(A) ∩ P(B) = P(A ∩ B)</li>
                  <li>For any sets A and B: P(A) ⊆ P(B) ⟹ A ⊆ B</li>
                  <li>P(A ∪ B) ≠ P(A) ∪ P(B) in general</li>
                  <li>For any set A: P(P(A)) has cardinality 2^(2^|A|)</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="3. Set Operations">
        <div className="space-y-6">
          <SubSection title="Universal Set">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>The Universal set U is the set containing everything currently under consideration. Content depends on context and must be explicitly defined.</p>
                <div className="mt-4">
                  <p className="font-semibold">Examples of Context:</p>
                  <ul className="list-disc ml-6">
                    <li>For vowels: U = {'{a, e, i, o, u}'}</li>
                    <li>For natural numbers: U = N</li>
                    <li>For real analysis: U = R</li>
                    <li>For computer science: U = {'{0, 1}*'}</li>
                  </ul>
                </div>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Basic Set Operations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Intersection (∩):</p>
                <div className="mt-2">
                  <p>Definition: A ∩ B = {'{x | x ∈ A ∧ x ∈ B}'}</p>
                  <p className="mt-2">Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>A ∩ B = B ∩ A (Commutative)</li>
                    <li>(A ∩ B) ∩ C = A ∩ (B ∩ C) (Associative)</li>
                    <li>A ∩ A = A (Idempotent)</li>
                    <li>A ∩ U = A (Identity)</li>
                    <li>A ∩ ∅ = ∅ (Annihilator)</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Union (∪):</p>
                <div className="mt-2">
                  <p>Definition: A ∪ B = {'{x | x ∈ A ∨ x ∈ B}'}</p>
                  <p className="mt-2">Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>A ∪ B = B ∪ A (Commutative)</li>
                    <li>(A ∪ B) ∪ C = A ∪ (B ∪ C) (Associative)</li>
                    <li>A ∪ A = A (Idempotent)</li>
                    <li>A ∪ ∅ = A (Identity)</li>
                    <li>A ∪ U = U (Annihilator)</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Set Difference (−):</p>
                <div className="mt-2">
                  <p>Definition: A − B = {'{x | x ∈ A ∧ x ∉ B}'}</p>
                  <p className="mt-2">Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>A − A = ∅</li>
                    <li>A − ∅ = A</li>
                    <li>A − B ≠ B − A (generally)</li>
                    <li>∅ − A = ∅</li>
                    <li>A − U = ∅</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-4">
              <p className="font-semibold">Complement (Ā or A′):</p>
              <div className="mt-2">
                <p>Definition: Ā = {'{x ∈ U | x ∉ A}'}</p>
                <p className="mt-2">Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Ā = U − A</li>
                  <li><span style={{textDecoration: "overline"}}>Ā</span> = A (Double Complement)</li>
                  <li><span style={{textDecoration: "overline"}}>∅</span> = U</li>
                  <li><span style={{textDecoration: "overline"}}>U</span> = ∅</li>
                </ul>
              </div>
            </Card>
            </div>
          </SubSection>

          <SubSection title="Symmetric Difference">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A △ B = (A − B) ∪ (B − A) = {'{x | x ∈ A ⊕ x ∈ B}'}</p>
                <div className="mt-4">
                  <p className="font-semibold">Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>A △ B = B △ A (Commutative)</li>
                    <li>A △ ∅ = A</li>
                    <li>A △ A = ∅</li>
                    <li>A △ Ā = U</li>
                  </ul>
                </div>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Set Identities">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">De Morgan&apos;s Laws:</p>
                <ul className="list-disc ml-6">
                  <li>(A ∪ B)̄ = Ā ∩ B̄</li>
                  <li>(A ∩ B)̄ = Ā ∪ B̄</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Distributive Laws:</p>
                <ul className="list-disc ml-6">
                  <li>A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</li>
                  <li>A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</li>
                </ul>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Absorption Laws:</p>
                <ul className="list-disc ml-6">
                  <li>A ∪ (A ∩ B) = A</li>
                  <li>A ∩ (A ∪ B) = A</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Set Operation Proofs">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Method 1: Element Method</p>
                <p className="mt-2">To prove A = B:</p>
                <ol className="list-decimal ml-6">
                  <li>Show x ∈ A ⟹ x ∈ B</li>
                  <li>Show x ∈ B ⟹ x ∈ A</li>
                </ol>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Method 2: Set Containment</p>
                <p className="mt-2">To prove A = B:</p>
                <ol className="list-decimal ml-6">
                  <li>Show A ⊆ B</li>
                  <li>Show B ⊆ A</li>
                </ol>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Example Proof:</p>
                <p className="mt-2">Prove: A − (B ∩ C) = (A − B) ∪ (A − C)</p>
                <p className="mt-2">Let x be arbitrary:</p>
                <ul className="list-disc ml-6">
                  <li>x ∈ A − (B ∩ C)</li>
                  <li>⟺ x ∈ A ∧ x ∉ (B ∩ C)</li>
                  <li>⟺ x ∈ A ∧ (x ∉ B ∨ x ∉ C)</li>
                  <li>⟺ (x ∈ A ∧ x ∉ B) ∨ (x ∈ A ∧ x ∉ C)</li>
                  <li>⟺ x ∈ (A − B) ∨ x ∈ (A − C)</li>
                  <li>⟺ x ∈ (A − B) ∪ (A − C)</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Operator Precedence">
            <Card className="p-4">
              <p className="font-semibold">Order of Operations (highest to lowest):</p>
              <ol className="list-decimal ml-6">
                <li>Complement ( ̄ )</li>
                <li>Intersection (∩)</li>
                <li>Union (∪)</li>
                <li>Difference (−)</li>
                <li>Symmetric Difference (△)</li>
              </ol>
              <p className="mt-4">Note: Use parentheses to override precedence or clarify operations</p>
            </Card>
          </SubSection>
        </div>
      </Section>

      <Section title="4. Ordered Pairs and Cartesian Product">
        <div className="space-y-6">
          <SubSection title="Ordered Pairs">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>An ordered pair (a, b) is a sequence of two elements where:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Order matters: (a, b) ≠ (b, a) if a ≠ b</li>
                  <li>Repetition is allowed: (a, a) is a valid ordered pair</li>
                  <li>Two ordered pairs (a, b) and (c, d) are equal if and only if a = c and b = d</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Comparison with Sets:</p>
                <div className="mt-2">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="border p-2">Property</th>
                        <th className="border p-2">Sets</th>
                        <th className="border p-2">Ordered Pairs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Order</td>
                        <td className="border p-2">{'{a, b}'} = {'{b, a}'}</td>
                        <td className="border p-2">(a, b) ≠ (b, a)</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Repetition</td>
                        <td className="border p-2">{'{a, a}'} = {'{a}'}</td>
                        <td className="border p-2">(a, a) is distinct</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Structures with Order">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Different Types of Structures:</p>
                <ul className="list-disc ml-6">
                  <li className="mb-2">
                    <span className="font-medium">Set (finite or infinite):</span>
                    <ul className="list-disc ml-6 mt-1">
                      <li>Order doesn&apos;t matter</li>
                      <li>Repetition doesn&apos;t matter</li>
                      <li>Example: {'{1, 2, 3}'} = {'{3, 1, 2}'}</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Ordered n-tuple (finite):</span>
                    <ul className="list-disc ml-6 mt-1">
                      <li>Order matters</li>
                      <li>Repetition matters</li>
                      <li>Example: (1, 2, 3) ≠ (3, 1, 2)</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium">Sequence (finite or infinite):</span>
                    <ul className="list-disc ml-6 mt-1">
                      <li>Order matters</li>
                      <li>Repetition matters</li>
                      <li>Can be infinite</li>
                      <li>Notation: ⟨1, 2, 3, ...⟩</li>
                    </ul>
                  </li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Cartesian Product">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <ul className="list-disc ml-6">
                  <li>A × B = {'{(x,y) | x ∈ A and y ∈ B}'}</li>
                  <li>B × A = {'{(x,y) | x ∈ B and y ∈ A}'}</li>
                </ul>
                <p className="mt-4">General form for n sets:</p>
                <p className="ml-6">A₁ × A₂ × ... × Aₙ = {'{(x₁, x₂, ..., xₙ) | xᵢ ∈ Aᵢ}'}</p>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Properties:</p>
                <ul className="list-disc ml-6">
                  <li>|A × B| = |A| × |B| where |A| and |B| are cardinalities</li>
                  <li>A × ∅ = ∅</li>
                  <li>A × B = B × A only if A = B or one is empty</li>
                  <li>Not associative: (A × B) × C ≠ A × (B × C)</li>
                  <li>Not commutative: A × B ≠ B × A in general</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Special Cases:</p>
                <p>For set {'{1, 2}'} and exponent n:</p>
                <ul className="list-disc ml-6">
                  <li>n = 2: {'{(1,1), (1,2), (2,1), (2,2)}'}</li>
                  <li>n = 3: {'{(1,1,1), (1,1,2), (1,2,1), ..., (2,2,2)}'}</li>
                  <li>General case: {'{1, 2}'}<sup>n</sup> = set of all n-tuples of 1s and 2s</li>
                  <li>|{'{1, 2}'}<sup>n</sup>| = 2<sup>n</sup></li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Examples:</p>
                <ul className="list-disc ml-6">
                  <li>A = {'{1, 2}'}, B = {'{a, b}'}</li>
                  <li>A × B = {'{(1,a), (1,b), (2,a), (2,b)}'}</li>
                  <li>B × A = {'{(a,1), (a,2), (b,1), (b,2)}'}</li>
                  <li>|A × B| = |A| × |B| = 2 × 2 = 4</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="5. Relations">
        <div className="space-y-6">
          <SubSection title="Binary Relations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A binary relation R between sets A and B is a subset of their Cartesian product A × B. For elements a ∈ A and b ∈ B, we write:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>(a, b) ∈ R or aRb to indicate a is related to b</li>
                  <li>R: A → B denotes a relation from A to B</li>
                  <li>R ⊆ A × B defines the relation formally</li>
                </ul>
                <div className="mt-4">
                  <p className="font-semibold">Important Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>One-way: aRb doesn&apos;t imply bRa</li>
                    <li>Two-way: Some relations work in both directions</li>
                    <li>On same set: R: A → A (relation on A)</li>
                  </ul>
                </div>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Examples:</p>
                <ul className="list-disc ml-6">
                  <li>&quot;Less than&quot; on real numbers: R = {'{(x,y) ∈ R × R | x < y}'}</li>
                  <li>&quot;Divides&quot; on integers: R = {'{(x,y) ∈ Z × Z | x|y}'}</li>
                  <li>&quot;Subset&quot; on power set: R = {'{(X,Y) ∈ P(A) × P(A) | X ⊆ Y}'}</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Representation of Relations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Matrix Representation:</p>
                <p>For finite sets A = {'{a₁, ..., aₙ}'} and B = {'{b₁, ..., bₘ}'}, relation R can be represented as an n×m matrix M where:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>M[i,j] = 1 if aᵢRbⱼ</li>
                  <li>M[i,j] = 0 if not aᵢRbⱼ</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Graph Representation:</p>
                <ul className="list-disc ml-6">
                  <li>Vertices: Elements of A and B</li>
                  <li>Edges: Directed edges (a,b) for each aRb</li>
                  <li>For relation on A, vertices are elements of A</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Types of Relations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Reflexive Relation:</p>
                <ul className="list-disc ml-6">
                  <li>Definition: ∀x∈A(xRx)</li>
                  <li>Every element relates to itself</li>
                  <li>Matrix: All diagonal entries are 1</li>
                  <li>Graph: Self-loop at each vertex</li>
                  <li>Example: = on any set</li>
                </ul>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Symmetric Relation:</p>
                <ul className="list-disc ml-6">
                  <li>Definition: ∀x,y∈A(xRy → yRx)</li>
                  <li>If a relates to b, then b relates to a</li>
                  <li>Matrix: Symmetric about diagonal</li>
                  <li>Graph: If edge a→b exists, b→a exists</li>
                  <li>Example: &quot;is sibling of&quot;</li>
                </ul>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Antisymmetric Relation:</p>
                <ul className="list-disc ml-6">
                  <li>Definition: ∀x,y∈A((x≠y ∧ xRy) → ¬(yRx))</li>
                  <li>Alternative: ∀x,y∈A((xRy ∧ yRx) → x=y)</li>
                  <li>If a relates to b and b relates to a, then a=b</li>
                  <li>Example: ≤ on real numbers</li>
                </ul>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Transitive Relation:</p>
                <ul className="list-disc ml-6">
                  <li>Definition: ∀x,y,z∈A((xRy ∧ yRz) → xRz)</li>
                  <li>If a relates to b and b relates to c, then a relates to c</li>
                  <li>Graph: If paths a→b and b→c exist, a→c exists</li>
                  <li>Example: &quot;ancestor of&quot;</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Properties of Relations">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Composition of Relations:</p>
                <p>For relations R: A → B and S: B → C, the composition S∘R: A → C is defined as:</p>
                <p className="ml-4 mt-2">S∘R = {'{(a,c) | ∃b∈B(aRb ∧ bSc)}'}</p>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Properties of Composition:</p>
                <ul className="list-disc ml-6">
                  <li>Not commutative: R∘S ≠ S∘R generally</li>
                  <li>Associative: (R∘S)∘T = R∘(S∘T)</li>
                  <li>Identity relation I: R∘I = I∘R = R</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Closure of Relations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>The closure of a relation R with respect to property P is the smallest relation S that:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Contains R (R ⊆ S)</li>
                  <li>Has property P</li>
                  <li>Is minimal (no proper subset of S containing R has P)</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Types of Closure:</p>
                <ul className="list-disc ml-6">
                  <li>Reflexive closure: R ∪ {'{(a,a) | a ∈ A}'}</li>
                  <li>Symmetric closure: R ∪ R⁻¹</li>
                  <li>Transitive closure: R ∪ R² ∪ R³ ∪ ...</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="6. Equivalence Relations and Partitions">
        <div className="space-y-6">
          <SubSection title="Equivalence Relations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition and Properties:</p>
                <p>Given the properties discussed in Section 5, a relation R on a set A becomes an equivalence relation when it satisfies all three:</p>
                <ul className="list-disc ml-6">
                  <li>Reflexivity: ∀x∈A(xRx)</li>
                  <li>Symmetry: ∀x,y∈A(xRy → yRx)</li>
                  <li>Transitivity: ∀x,y,z∈A((xRy ∧ yRz) → xRz)</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Common Examples:</p>
                <ul className="list-disc ml-6">
                  <li>Congruence modulo n: aRb ⟺ n|(a-b)</li>
                  <li>Same length strings: xRy ⟺ length(x) = length(y)</li>
                  <li>Similar triangles: xRy ⟺ x is similar to y</li>
                  <li>Parallel lines: lRm ⟺ l is parallel to m</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Equivalence Classes">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>For an equivalence relation R on set A and an element a∈A, the equivalence class of a is:</p>
                <p className="ml-4 mt-2">[a]ᴿ = {'{x∈A | xRa}'}</p>
                <div className="mt-4">
                  <p className="font-semibold">Key Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>∀a,b∈A: aRb ⟺ [a]ᴿ = [b]ᴿ</li>
                    <li>∀a,b∈A: [a]ᴿ ∩ [b]ᴿ = ∅ or [a]ᴿ = [b]ᴿ</li>
                    <li>⋃{'{[a]ᴿ | a∈A}'} = A</li>
                  </ul>
                </div>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Example:</p>
                <p>For R = &quot;congruence modulo 3&quot; on Z:</p>
                <ul className="list-disc ml-6">
                  <li>[0]ᴿ = {'{..., -3, 0, 3, 6, ...}'}</li>
                  <li>[1]ᴿ = {'{..., -2, 1, 4, 7, ...}'}</li>
                  <li>[2]ᴿ = {'{..., -1, 2, 5, 8, ...}'}</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Partitions">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A partition of set S is a collection of non-empty subsets {'{A₁, A₂, ..., Aₙ}'} where:</p>
                <ul className="list-disc ml-6">
                  <li>∀i(Aᵢ ≠ ∅) (no empty subsets)</li>
                  <li>∀i,j(i≠j → Aᵢ ∩ Aⱼ = ∅) (pairwise disjoint)</li>
                  <li>⋃Aᵢ = S (covers all of S)</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Relationship to Equivalence Relations:</p>
                <ul className="list-disc ml-6">
                  <li>Every equivalence relation induces a partition (via equivalence classes)</li>
                  <li>Every partition determines an equivalence relation</li>
                  <li>There is a one-to-one correspondence between equivalence relations and partitions</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Counting Partitions:</p>
                <p>For a set with n elements:</p>
                <ul className="list-disc ml-6">
                  <li>Number of different partitions = Bell number Bₙ</li>
                  <li>Bell numbers: B₁=1, B₂=2, B₃=5, B₄=15, B₅=52, ...</li>
                  <li>Bell triangle construction:
                    <p className="mt-1 ml-4">
                      1<br/>
                      1 2<br/>
                      2 3 5<br/>
                      5 7 10 15
                    </p>
                  </li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Applications">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Common Uses:</p>
                <ul className="list-disc ml-6">
                  <li>Classification of objects</li>
                  <li>Decomposition of sets into disjoint classes</li>
                  <li>Modular arithmetic</li>
                  <li>Pattern recognition</li>
                  <li>Database indexing and grouping</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="7. Partial Order Relations">
        <SubSection title="Introduction and Motivation">
          <div className="space-y-4">
            <Card className="p-4">
              <p className="font-semibold">Ordering in Sets:</p>
              <ul className="list-disc ml-6">
                <li>Dictionary ordering of words</li>
                <li>Project task dependencies</li>
                <li>Natural numbers under ≤ relation</li>
                <li>Set containment under ⊆ relation</li>
              </ul>
            </Card>

            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Example: GATE Course Prerequisites</p>
              <ul className="list-disc ml-6">
                <li>DM → TOC → CD (Discrete Math before Theory of Computation)</li>
                <li>DLD → CO → OS (Digital Logic before Computer Organization)</li>
                <li>FM (Fundamental Mathematics - independent)</li>
                <li>GA (General Aptitude - independent)</li>
                <p className="mt-2 italic">Note: Not all subjects have defined relationships (partial order)</p>
              </ul>
            </div>
          </div>
        </SubSection>

        <SubSection title="Formal Definition">
          <div className="space-y-4">
            <Card className="p-4">
              <p className="font-semibold">Definition:</p>
              <p>A relation R on a set A is a partial order if and only if R is:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Reflexive: ∀x∈A(xRx)</li>
                <li>Antisymmetric: ∀x,y∈A((xRy ∧ yRx) → x=y)</li>
                <li>Transitive: ∀x,y,z∈A((xRy ∧ yRz) → xRz)</li>
              </ul>
            </Card>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
              <p className="font-semibold">Standard Examples:</p>
              <ul className="list-disc ml-6">
                <li>(ℕ, ≤): Natural numbers under less than or equal to</li>
                <li>(P(A), ⊆): Power set under subset relation</li>
                <li>(ℕ, |): Natural numbers under divisibility</li>
                <li>(Strings, prefix): String set under prefix relation</li>
              </ul>
            </div>
          </div>
        </SubSection>

        <SubSection title="Comparability">
          <div className="space-y-4">
            <Card className="p-4">
              <p className="font-semibold">Comparable Elements:</p>
              <p>Elements a and b in a poset (A,R) are comparable if either:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>aRb (a is related to b)</li>
                <li>bRa (b is related to a)</li>
              </ul>
              <p className="mt-2">If neither holds, a and b are incomparable.</p>
            </Card>

            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Example with Divisibility:</p>
              <p>In ({'{1,2,3,4}'}, |):</p>
              <ul className="list-disc ml-6">
                <li>Comparable pairs: 1|2, 1|4, 2|4</li>
                <li>Incomparable pairs: 2|3, 3|2</li>
                <li>Notation: x||y means x and y are incomparable</li>
              </ul>
            </div>
          </div>
        </SubSection>

        <SubSection title="Total Order">
          <div className="space-y-4">
            <Card className="p-4">
              <p className="font-semibold">Definition:</p>
              <p>A total order or linear order is a partial order where every pair of elements is comparable.</p>
              <ul className="list-disc ml-6 mt-2">
                <li>∀x,y∈A(xRy ∨ yRx)</li>
                <li>No incomparable elements exist</li>
              </ul>
            </Card>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold">Examples:</p>
              <ul className="list-disc ml-6">
                <li>(ℕ, ≤): Total order</li>
                <li>(P(A), ⊆): Not total order if |A| &gt; 1</li>
                <li>Lexicographic ordering of strings: Total order</li>
                <li>School grades: K → 1 → 2 → ... → 12</li>
              </ul>
            </div>
          </div>
        </SubSection>

        <SubSection title="Special Elements">
          <div className="space-y-4">
            <Card className="p-4">
              <p className="font-semibold">Maximal and Minimal Elements:</p>
              <ul className="list-disc ml-6">
                <li>Maximal: m∈A such that ∄x∈A(mRx ∧ m≠x)</li>
                <li>Minimal: m∈A such that ∄x∈A(xRm ∧ m≠x)</li>
                <li>Multiple maximal/minimal elements possible</li>
                <li>May have elements both maximal and minimal</li>
              </ul>
            </Card>

            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold">Greatest and Least Elements:</p>
              <ul className="list-disc ml-6">
                <li>Greatest: g∈A such that ∀x∈A(xRg)</li>
                <li>Least: l∈A such that ∀x∈A(lRx)</li>
                <li>If exists, must be unique</li>
                <li>May not exist even in finite posets</li>
              </ul>
            </div>

            <Card className="p-4">
              <p className="font-semibold">Upper and Lower Bounds:</p>
              <ul className="list-disc ml-6">
                <li>Upper bound of X⊆A: u∈A such that ∀x∈X(xRu)</li>
                <li>Lower bound of X⊆A: l∈A such that ∀x∈X(lRx)</li>
                <li>Least upper bound (supremum): Least element of upper bounds</li>
                <li>Greatest lower bound (infimum): Greatest element of lower bounds</li>
              </ul>
            </Card>
          </div>
        </SubSection>

        <SubSection title="Properties and Examples">
          <div className="space-y-4">
            <Card className="p-4">
              <p className="font-semibold">Key Properties:</p>
              <ul className="list-disc ml-6">
                <li>Every finite poset has maximal and minimal elements</li>
                <li>A total order implies every non-empty subset has a least upper bound</li>
                <li>In a finite poset, maximal = greatest for total orders</li>
                <li>Every chain in a poset is totally ordered</li>
              </ul>
            </Card>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
              <p className="font-semibold">Common Applications:</p>
              <ul className="list-disc ml-6">
                <li>Version control systems (commit history)</li>
                <li>Task scheduling and dependencies</li>
                <li>Database transaction ordering</li>
                <li>Mathematical proof structures</li>
              </ul>
            </div>
          </div>
        </SubSection>
      </Section>

      <Section title="8. Lattice Theory">
        <div className="space-y-6">
          <SubSection title="8.1 Basic Definitions and Concepts">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A lattice is a partially ordered set (A, ≼) in which any two elements a, b have:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>A least upper bound (LUB or join): denoted a ∨ b</li>
                  <li>A greatest lower bound (GLB or meet): denoted a ∧ b</li>
                </ul>
                <p className="mt-2">Formally: ∀a,b∈A (a ∧ b exists and a ∨ b exists)</p>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Equivalent Definition:</p>
                <p>A poset is a lattice if and only if every pair of incomparable elements has:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Unique GLB</li>
                  <li>Unique LUB</li>
                </ul>
                <p className="mt-2 text-sm">(This is more efficient for verification as comparable elements always have GLB and LUB)</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="8.2 Fundamental Properties">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Basic Properties (ICAA):</p>
                <ul className="list-disc ml-6">
                  <li>Idempotent:
                    <ul className="list-disc ml-6">
                      <li>x ∧ x = x</li>
                      <li>x ∨ x = x</li>
                    </ul>
                  </li>
                  <li>Commutative:
                    <ul className="list-disc ml-6">
                      <li>x ∧ y = y ∧ x</li>
                      <li>x ∨ y = y ∨ x</li>
                    </ul>
                  </li>
                  <li>Associative:
                    <ul className="list-disc ml-6">
                      <li>(x ∧ y) ∧ z = x ∧ (y ∧ z)</li>
                      <li>(x ∨ y) ∨ z = x ∨ (y ∨ z)</li>
                    </ul>
                  </li>
                  <li>Absorption:
                    <ul className="list-disc ml-6">
                      <li>x ∧ (x ∨ y) = x</li>
                      <li>x ∨ (x ∧ y) = x</li>
                    </ul>
                  </li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="8.3 Types of Lattices">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold mb-2">1. Bounded Lattice:</p>
                <p>A lattice ⟨A, ≼⟩ is bounded if and only if it has:</p>
                <ul className="list-disc ml-6">
                  <li>A minimum element (denoted by 0)</li>
                  <li>A maximum element (denoted by 1)</li>
                </ul>
                <div className="mt-2">
                  <p className="font-semibold">Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>Every finite lattice is bounded</li>
                    <li>Infinite lattices can be bounded (e.g., [a,b] with ≤)</li>
                    <li>Identity laws: 0 ∨ x = x = x ∨ 0; 1 ∧ x = x = x ∧ 1</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4">
                <p className="font-semibold mb-2">2. Complemented Lattice:</p>
                <p>A bounded lattice where every element has at least one complement.</p>
                <div className="mt-2">
                  <p>For element a, its complement b satisfies:</p>
                  <ul className="list-disc ml-6">
                    <li>a ∨ b = 1</li>
                    <li>a ∧ b = 0</li>
                  </ul>
                </div>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold mb-2">3. Distributive Lattice:</p>
                <p>A lattice satisfying for all elements a, b, c:</p>
                <ul className="list-disc ml-6">
                  <li>a ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c)</li>
                  <li>a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c)</li>
                </ul>
                <div className="mt-2">
                  <p className="font-semibold">Key Theorems:</p>
                  <ul className="list-disc ml-6">
                    <li>No &quot;kite&quot; or &quot;pentagon&quot; sublattice exists in distributive lattices</li>
                    <li>If |L| ≤ 4, then L is definitely distributive</li>
                    <li>In distributive lattices, elements have at most one complement</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4">
                <p className="font-semibold mb-2">4. Boolean Lattice:</p>
                <p>A lattice that is:</p>
                <ul className="list-disc ml-6">
                  <li>Bounded</li>
                  <li>Complemented</li>
                  <li>Distributive</li>
                </ul>
                <div className="mt-2">
                  <p className="font-semibold">Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>Every Boolean algebra has 2ⁿ elements</li>
                    <li>Isomorphic to (P(A), ⊆) for some set A</li>
                    <li>Examples of possible sizes:
                      <ul className="list-disc ml-6">
                        <li>1 element: {'{∅}'}</li>
                        <li>2 elements: {'{∅, {1}}'}</li>
                        <li>3 elements: impossible</li>
                        <li>4 elements: possible</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </SubSection>

          <SubSection title="8.4 Divisibility Lattices">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>For positive integer n, Dn = set of all divisors of n, ordered by divisibility.</p>
                <div className="mt-2">
                  <p className="font-semibold">Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>LUB = LCM (Least Common Multiple)</li>
                    <li>GLB = GCD (Greatest Common Divisor)</li>
                    <li>All divisibility lattices are distributive</li>
                    <li>Complemented if and only if n is square-free</li>
                  </ul>
                </div>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Square-Free Numbers:</p>
                <ul className="list-disc ml-6">
                  <li>No prime factor occurs more than once</li>
                  <li>Example: 6 = 2 × 3 (is square-free)</li>
                  <li>Example: 8 = 2³ (not square-free)</li>
                  <li>For square-free n, complement of a is n/a</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>
    </div>
  );
};

export default SetTheoryNotes;