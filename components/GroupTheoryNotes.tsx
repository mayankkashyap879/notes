'use client';
import React, { ReactNode, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

interface SubSectionProps {
  title: string;
  children: ReactNode;
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

const GroupTheoryNotes: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Section title="1. Introduction to Group Theory">
        <div className="space-y-4">
          <p className="text-lg">Group theory is a fundamental branch of abstract algebra that studies algebraic structures called groups.</p>

          <SubSection title="Core Concept">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Abstract Algebra Approach:</p>
                <p>Instead of studying specific mathematical objects, we focus on:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Operations rather than specific elements</li>
                  <li>Structure rather than content</li>
                  <li>Relationships between elements without considering their nature</li>
                  <li>Common patterns across different mathematical systems</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Historical Context">
            <div className="space-y-4">
              <p>Group theory was discovered by Évariste Galois while studying polynomial equations.</p>
              
              <Card className="p-4">
                <p className="font-semibold">Galois's Key Contributions:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Developed while studying polynomials of different degrees</li>
                  <li>Proved there is no formula for finding roots of degree 5 polynomials</li>
                  <li>Used group theory to prove this fundamental limitation</li>
                  <li>Established connection between symmetries and solvability</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Algebraic Structures Hierarchy">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Examples of Single Binary Operation Structures:</p>
                <ol className="list-decimal ml-6 mt-2">
                  <li>Magma (Groupoid) - Most basic structure</li>
                  <li>Quasigroup - Adds division properties</li>
                  <li>Semigroup - Adds associativity</li>
                  <li>Monoid - Adds identity element</li>
                  <li>Group - Adds inverse elements</li>
                  <li>Abelian Group - Adds commutativity</li>
                  <li>Lattice - Special algebraic structure</li>
                  <li>Boolean Algebra - Most structured</li>
                </ol>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Important Note:</p>
                <p>In GATE syllabus and basic group theory, we focus primarily on simple binary operations and their properties.</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Basic Concepts">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Operation Tables (Cayley Tables):</p>
                <p>Consider a set with two elements {'{a, b}'} and an operation *:</p>
                <div className="mt-2 font-mono">
                  <p>* | a b</p>
                  <p>a | a b</p>
                  <p>b | b a</p>
                </div>
                <p className="mt-2">This table completely defines the operation on the set.</p>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Key Study Approach:</p>
                <ul className="list-disc ml-6">
                  <li>Focus on operations and their properties</li>
                  <li>Study relationships between elements</li>
                  <li>Analyze patterns and symmetries</li>
                  <li>Abstract from specific examples to general principles</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Examples of Common Algebraic Structures:</p>
                <ul className="list-disc ml-6">
                  <li>(Z, +) - Integers under addition</li>
                  <li>(R, ×) - Real numbers under multiplication</li>
                  <li>Matrix groups under matrix multiplication</li>
                  <li>Symmetry groups of geometric figures</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="2. Binary Operations">
        <div className="space-y-6">
          <SubSection title="Definition and Properties">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Binary Operation Definition:</p>
                <p>In abstract algebra, a binary operation on a set S is a structure which satisfies closure property:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Formally written as # : S × S → S</li>
                  <li>Maps two elements of set to one value in same set</li>
                  <li>Must satisfy closure property by definition</li>
                  <li>Different from normal math where it's just operation between two operands</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Operation Table (Cayley Table):</p>
                <ul className="list-disc ml-6">
                  <li>Read going up to right for operation order</li>
                  <li>Each entry must belong to the set (closure)</li>
                  <li>For set {'{a,b}'}, table shows all possible combinations</li>
                  <li>Gives visual representation of operation results</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Closure Property:</p>
                <p>A set has closure property under an operation if the result is always an element in the set.</p>
                <div className="mt-2">
                  <p className="font-semibold">Examples:</p>
                  <ul className="list-disc ml-6">
                    <li>({'{1, 2, 3}'}, +) is not closed: 2+3 = 5 ∉ {'{1, 2, 3}'}</li>
                    <li>(R, /) is not closed: 0/0 is undefined</li>
                    <li>In operation table, all entries must belong to original set</li>
                  </ul>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="The Associative Property">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>(S, #) is associative iff ∀a,b,c∈S (a # b) # c = a # (b # c)</p>
                <div className="mt-2">
                  <p className="font-semibold">Important Notes:</p>
                  <ul className="list-disc ml-6">
                    <li>Cannot be easily verified from Cayley table</li>
                    <li>Requires three-term equation verification</li>
                    <li>Identity element combinations always associate</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Examples:</p>
                <ul className="list-disc ml-6">
                  <li>Natural numbers under addition (N, +) is associative</li>
                  <li>Matrix multiplication is associative</li>
                  <li>Operation (x, y) → xy + 1 on integers is not associative</li>
                  <li>Subtraction and division are not associative</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Function Properties">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Examples of Functions with Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Associative and Commutative:
                    <ul className="list-circle ml-6">
                      <li>Addition and multiplication in number theory</li>
                      <li>Set operations (union, intersection)</li>
                      <li>Logical operations (AND, OR)</li>
                    </ul>
                  </li>
                  <li>Associative but not Commutative:
                    <ul className="list-circle ml-6">
                      <li>Matrix multiplication</li>
                      <li>(N, #) where a#b = a</li>
                    </ul>
                  </li>
                  <li>Not Associative but Commutative:
                    <ul className="list-circle ml-6">
                      <li>Operation (x, y) → xy + 1 on integers</li>
                      <li>NAND operation</li>
                    </ul>
                  </li>
                  <li>Neither Associative nor Commutative:
                    <ul className="list-circle ml-6">
                      <li>Subtraction</li>
                      <li>Division</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Important Note:</p>
                <p>When operation "*" is NOT associative:</p>
                <ul className="list-disc ml-6">
                  <li>Cannot write a * b * c because it's ambiguous</li>
                  <li>Must use parentheses to disambiguate</li>
                  <li>Different parentheses placements may give different results</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Operation Tables">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Checking Properties in Tables:</p>
                <ul className="list-disc ml-6">
                  <li>Closure: All entries must be in the set</li>
                  <li>Commutativity: Table should be symmetric about diagonal</li>
                  <li>Identity: Look for row/column that matches header</li>
                  <li>Do not check associativity with identity element combinations</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Table Analysis Tips:</p>
                <ul className="list-disc ml-6">
                  <li>Identity row/column exactly matches element order</li>
                  <li>Inverse elements produce identity in both orders</li>
                  <li>Each element should appear exactly once in each row/column for groups</li>
                  <li>Commutativity can be checked by comparing (a,b) with (b,a) entries</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="3. Group Definition and Examples">
        <div className="space-y-6">
          <SubSection title="Formal Definition">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A group (G, *) consists of a set G and a binary operation * such that:</p>
                <ol className="list-decimal ml-6 mt-2">
                  <li>Closure: For all a, b ∈ G, a * b ∈ G</li>
                  <li>Associativity: For all a, b, c ∈ G, (a * b) * c = a * (b * c)</li>
                  <li>Identity: There exists e ∈ G such that for all a ∈ G, e * a = a * e = a</li>
                  <li>Inverse: For each a ∈ G, there exists a⁻¹ ∈ G such that a * a⁻¹ = a⁻¹ * a = e</li>
                </ol>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Important Notes:</p>
                <ul className="list-disc ml-6">
                  <li>The identity element is always unique in any group</li>
                  <li>Each element has exactly one inverse</li>
                  <li>A group might be non-commutative (a * b ≠ b * a)</li>
                  <li>Identity property must work from both left and right</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Examples of Groups">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <p className="font-semibold">Addition Modulo n:</p>
                  <ul className="list-disc ml-6">
                    <li>Set: Zₙ = {'{0, 1, 2, ..., n-1}'}</li>
                    <li>Operation: Addition modulo n (⊕ₙ)</li>
                    <li>Identity: 0</li>
                    <li>Inverse: (n-a) for element a</li>
                    <li>Forms an abelian group</li>
                    <li>Cannot multiply elements to form a group (0 has no inverse)</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">nth Roots of Unity:</p>
                  <ul className="list-disc ml-6">
                    <li>Set: Solutions to xⁿ = 1</li>
                    <li>Operation: Multiplication</li>
                    <li>Identity: 1</li>
                    <li>Forms a cyclic group</li>
                    <li>Order equals number of roots</li>
                    <li>Always forms an abelian group</li>
                  </ul>
                </Card>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Special Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Left/Right Cancellation Laws hold in all groups</li>
                  <li>In non-abelian groups: a * c = b * a ↛ c = b</li>
                  <li>In groups: a * a⁻¹ = a⁻¹ * a and ae = ea (always true)</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Groups of Small Order">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Order 1 Groups:</p>
                <ul className="list-disc ml-6">
                  <li>Only one possible group structure</li>
                  <li>Contains only identity element</li>
                  <li>Example structures: ({'{T}'}, ∧), ({'{1}'}, ×), ({'{0}'}, +)</li>
                  <li>All order 1 groups are isomorphic</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Order 2 and Higher:</p>
                <ul className="list-disc ml-6">
                  <li>Order 2: Only one possible group up to isomorphism</li>
                  <li>Order 3: Only one possible group up to isomorphism (cyclic)</li>
                  <li>Order 4: Two non-isomorphic groups exist
                    <ul className="list-circle ml-6 mt-1">
                      <li>Cyclic group C₄</li>
                      <li>Klein four-group V₄</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Important Theorems:</p>
                <ul className="list-disc ml-6">
                  <li>Every group of prime order is cyclic</li>
                  <li>Every group of order p² (p prime) is abelian</li>
                  <li>Every group of order less than 6 is abelian</li>
                  <li>If every element satisfies x² = e, then the group is abelian</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Properties in Cayley Table">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Cayley Table Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Each element appears exactly once in each row and column</li>
                  <li>Identity element's row and column match the header</li>
                  <li>Inverse elements can be identified by finding e in the table</li>
                  <li>Commutativity can be checked by table symmetry</li>
                  <li>Cannot easily check associativity from table alone</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Common Mistakes:</p>
                <ul className="list-disc ml-6">
                  <li>Checking associativity with identity element is redundant</li>
                  <li>Row/column permutations may hide group structure</li>
                  <li>Non-identical tables might represent isomorphic groups</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="4. Properties of Groups">
        <div className="space-y-6">
          <SubSection title="Basic Properties">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Fundamental Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Identity element is unique</li>
                  <li>Each element has a unique inverse</li>
                  <li>Cancellation laws hold</li>
                  <li>(a⁻¹)⁻¹ = a for all elements a</li>
                  <li>Both left and right cancellation are valid</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Cancellation Laws:</p>
                <div className="space-y-2 mt-2">
                  <p>Left Cancellation: If ab = ac, then b = c</p>
                  <p>Right Cancellation: If ba = ca, then b = c</p>
                  <div className="bg-yellow-50 dark:bg-yellow-900 p-2 rounded mt-2">
                    <p className="italic">Note: In non-abelian groups, a * c = b * a → c = b is not valid due to absence of commutativity</p>
                  </div>
                </div>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Identity Properties:</p>
                <ul className="list-disc ml-6">
                  <li>ae = ea = a for any element a</li>
                  <li>a⁻¹a = aa⁻¹ = e (inverse property)</li>
                  <li>(ab)⁻¹ = b⁻¹a⁻¹ (inverse of product)</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Group Operation Properties">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Important Equivalences:</p>
                <ul className="list-disc ml-6">
                  <li>a*a⁻¹ = a⁻¹*a and ae = ea do not imply abelian property</li>
                  <li>These are just basic group axioms, not special properties</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Cayley Table Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Each element appears exactly once in each row and column</li>
                  <li>Row and column of identity element matches the header</li>
                  <li>No repeating elements in rows/columns (Latin square property)</li>
                  <li>Table shows permutations of elements in each row/column</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Special Cases and Theorems">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Special Properties:</p>
                <ul className="list-disc ml-6">
                  <li>If ∀x ∈ G, x² = e then G is abelian</li>
                  <li>Every group of order p² or p (p prime) is abelian</li>
                  <li>Every group of order less than 6 is abelian</li>
                  <li>A group is never the union of two proper subgroups</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Checking Group Properties:</p>
                <ul className="list-disc ml-6">
                  <li>When checking associativity in Cayley table:</li>
                  <ul className="list-circle ml-6">
                    <li>Never check formulas including identity element</li>
                    <li>(a * e) * b = a * (e * b) is always true</li>
                    <li>Must verify three-term equations</li>
                  </ul>
                </ul>
              </Card>

              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                <p className="font-semibold">Common Mistakes to Avoid:</p>
                <ul className="list-disc ml-6">
                  <li>Assuming aⁿ = e implies n is the order of a</li>
                  <li>Confusing non-abelian with lack of inverses</li>
                  <li>Forgetting to check both left and right cancellation</li>
                  <li>Assuming commutative-like properties imply abelian group</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="5. Subgroups">
        <div className="space-y-6">
          <SubSection title="Definition and Fundamental Properties">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Classical Definition:</p>
                <p>Let (G, *) be a group. A subgroup of G is a subset H ⊆ G such that:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Identity element e ∈ H</li>
                  <li>Closure: For all x, y ∈ H, x * y ∈ H</li>
                  <li>Inverse: For all x ∈ H, x⁻¹ ∈ H</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Alternative Definition:</p>
                <p>A non-empty subset H of a group is a subgroup if and only if:</p>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <p>For any x, y ∈ H, xy⁻¹ ∈ H</p>
                </div>
                <p className="mt-2 text-sm">Note: This single condition implies all subgroup properties, including the presence of identity element (when x = y).</p>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Special Types of Subgroups">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Trivial and Non-trivial Subgroups:</p>
                <ul className="list-disc ml-6">
                  <li>Trivial subgroups: {'{e}'} and G itself</li>
                  <li>Non-trivial subgroups: All other proper subgroups</li>
                  <li>Example: For a group of order 6, subgroups of order 2 or 3 are non-trivial</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Important Properties:</p>
                <ul className="list-disc ml-6">
                  <li>A group is never the union of two proper subgroups</li>
                  <li>The intersection of any collection of subgroups is a subgroup</li>
                  <li>The union of subgroups is generally not a subgroup</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Intersection and Union Properties">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Intersection Theorem:</p>
                <p>For any group G, the intersection of two subgroups is always a subgroup.</p>
                <p className="mt-2">Proof steps:</p>
                <ol className="list-decimal ml-6">
                  <li>Closure: If a,b ∈ H∩K, then a*b ∈ H and a*b ∈ K, thus a*b ∈ H∩K</li>
                  <li>Identity: e ∈ H and e ∈ K for all subgroups, thus e ∈ H∩K</li>
                  <li>Inverse: If a ∈ H∩K, then a⁻¹ ∈ H and a⁻¹ ∈ K, thus a⁻¹ ∈ H∩K</li>
                </ol>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Union Counter-Example:</p>
                <p>Consider (Z,+) with subgroups:</p>
                <ul className="list-disc ml-6">
                  <li>(3Z,+): {'{..., -3, 0, 3, 6, ...}'}</li>
                  <li>(4Z,+): {'{..., -4, 0, 4, 8, ...}'}</li>
                  <li>Their union fails closure: 3 + 4 = 7 ∉ (3Z ∪ 4Z)</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Element Orders and Subgroups">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Existence of Elements:</p>
                <p>For group G = {'<a>'} and elements aᵛ, aᵘ ∈ G:</p>
                <ul className="list-disc ml-6">
                  <li>The subgroup containing both aᵛ and aᵘ contains aᵍᶜᵈ⁽ᵛ'ᵘ⁾</li>
                  <li>This is the smallest such subgroup</li>
                  <li>For finite groups, inverse of element can be expressed as positive power</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Cyclic Subgroups:</p>
                <p>For element a ∈ G, the cyclic subgroup {'<a>'} is:</p>
                <div className="mt-2 font-mono bg-gray-50 dark:bg-gray-800 p-2 rounded">
                  {'<a> = {aⁿ | n ∈ Z}'}
                </div>
                <p className="mt-2">Note: In finite groups, we only need positive powers as negative powers can be expressed as positive ones.</p>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Common Mistakes and Important Notes">
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                <p className="font-semibold">Common Errors:</p>
                <ul className="list-disc ml-6">
                  <li>Assuming a subset closed under the operation is a subgroup (must check inverse)</li>
                  <li>Forgetting that identity must be in every subgroup</li>
                  <li>Assuming union of subgroups is a subgroup</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Key Points to Remember:</p>
                <ul className="list-disc ml-6">
                  <li>Subgroups inherit the operation from the parent group</li>
                  <li>Every subgroup contains the identity element</li>
                  <li>In finite groups, closure under operation implies existence of inverses</li>
                  <li>The single condition xy⁻¹ ∈ H is sufficient to prove subgroup property</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="6. Cyclic Groups">
        <div className="space-y-6">
          <SubSection title="Definition and Basic Properties">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A group G is cyclic if there exists an element a ∈ G (called a generator) such that:</p>
                <p className="mt-2 font-mono">G = {'<a> = {aⁿ | n ∈ ℤ}'}</p>
                <div className="mt-2">
                  <p className="font-semibold">Important Notes:</p>
                  <ul className="list-disc ml-6">
                    <li>Not all groups have generators (smallest non-cyclic group has order 4)</li>
                    <li>A group may have multiple generators</li>
                    <li>Every cyclic group is abelian</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Fundamental Theorem:</p>
                <ul className="list-disc ml-6">
                  <li>Every infinite cyclic group is isomorphic to (ℤ, +)</li>
                  <li>Every finite cyclic group of order n is isomorphic to (ℤn, ⊕n)</li>
                  <li>Two cyclic groups of the same order are isomorphic</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Examples and Properties">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <p className="font-semibold">nth Roots of Unity:</p>
                  <ul className="list-disc ml-6">
                    <li>Forms a cyclic group under multiplication</li>
                    <li>Order equals number of roots</li>
                    <li>Set is abelian under multiplication</li>
                    <li>All nth roots form an abelian group</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">(ℤn, ⊕n):</p>
                  <ul className="list-disc ml-6">
                    <li>Addition modulo n group</li>
                    <li>Generator is 1 (generates all elements)</li>
                    <li>Base set: remainders when divided by n</li>
                    <li>Satisfies all group properties</li>
                  </ul>
                </Card>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Key Properties of Elements:</p>
                <ul className="list-disc ml-6">
                  <li>If O(g) = n then O(gk) = n/gcd(n,k)</li>
                  <li>Powers of generator eventually cycle back to identity</li>
                  <li>In finite cyclic groups, every element is a power of generator</li>
                  <li>Element orders divide group order (Lagrange's Theorem)</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Structure Theorems">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Important Results:</p>
                <ul className="list-disc ml-6">
                  <li>Every subgroup of a cyclic group is cyclic</li>
                  <li>For G = {'<a>'} of order n:
                    <ul className="list-circle ml-6 mt-1">
                      <li>{'<aᵏ>'} has order n/gcd(n,k)</li>
                      <li>Exactly one subgroup of each order dividing n</li>
                    </ul>
                  </li>
                  <li>Groups of prime order are cyclic</li>
                  <li>If G is cyclic of order n, then number of generators = φ(n) (Euler's totient)</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Existence of Elements:</p>
                <p>In a cyclic group G = {'<a>'}, for elements av and au:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>The subgroup containing both av and au also contains agcd(v,u)</li>
                  <li>This is the smallest such subgroup</li>
                  <li>agcd(v,u) generates this subgroup</li>
                </ul>
              </Card>

              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                <p className="font-semibold">Common Mistakes to Avoid:</p>
                <ul className="list-disc ml-6">
                  <li>Not every finite group is cyclic</li>
                  <li>A group may have multiple generators</li>
                  <li>Not every element of order n generates a cyclic group of order n</li>
                  <li>For infinite cyclic groups, negative powers must be considered</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Applications and Examples">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Finding Elements of Given Order:</p>
                <p>Example: In a cyclic group of order 48, to find elements of order 8:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Need k where 48/gcd(48,k) = 8</li>
                  <li>Therefore, gcd(48,k) = 6</li>
                  <li>k = 6, 18, 30, 42 give elements of order 8</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Important Examples:</p>
                <ul className="list-disc ml-6">
                  <li>Integer addition (ℤ, +) - infinite cyclic group</li>
                  <li>Complex nth roots of unity - finite cyclic group</li>
                  <li>Addition modulo n (ℤn, ⊕n) - finite cyclic group</li>
                  <li>Rotational symmetries of regular n-gon - finite cyclic group</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="7. Unit Groups">
        <div className="space-y-6">
            <SubSection title="Definition and Construction">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Unit Group Construction:</p>
                <p>While multiplication modulo n is not a group over all of Zn, we can create a group by selecting only elements with multiplicative inverses:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Start with multiplication modulo n operation</li>
                    <li>Remove elements that don't have multiplicative inverses</li>
                    <li>Resulting set with remaining elements forms Un</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Formal Definition:</p>
                <div className="space-y-2">
                    <p>For a positive integer n, the unit group Un consists of elements that are coprime to n:</p>
                    <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">Un = {'{m | m ∈ Zn, gcd(m,n) = 1}'}</p>
                </div>
                </Card>

                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Key Properties:</p>
                <ul className="list-disc ml-6">
                    <li>Forms a group under multiplication modulo n</li>
                    <li>All elements have multiplicative inverses</li>
                    <li>Order of Un equals φ(n) (Euler's totient function)</li>
                </ul>
                </div>
            </div>
            </SubSection>

            <SubSection title="Example: U4">
            <div className="space-y-4">
                <Card className="p-4">
                <p className="font-semibold">Construction of U4:</p>
                <div className="space-y-2">
                    <p>Starting with Z4 = {'{0, 1, 2, 3}'}</p>
                    <p>Check coprimality with 4:</p>
                    <ul className="list-disc ml-6">
                    <li>gcd(0,4) = 4 → 0 is not in U4</li>
                    <li>gcd(1,4) = 1 → 1 is in U4</li>
                    <li>gcd(2,4) = 2 → 2 is not in U4</li>
                    <li>gcd(3,4) = 1 → 3 is in U4</li>
                    </ul>
                    <p className="mt-2">Therefore, U4 = {'{1, 3}'}</p>
                </div>
                </Card>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">U4 Operation Table:</p>
                <div className="grid grid-cols-3 gap-1 text-center mt-2">
                    <div className="font-bold">×</div>
                    <div className="font-bold">1</div>
                    <div className="font-bold">3</div>
                    <div className="font-bold">1</div>
                    <div>1</div>
                    <div>3</div>
                    <div className="font-bold">3</div>
                    <div>3</div>
                    <div>1</div>
                </div>
                <p className="mt-2 text-sm">Note: Operations are performed modulo 4</p>
                </div>
            </div>
            </SubSection>

            <SubSection title="Patterns in Unit Groups">
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                    <p className="font-semibold">U8 Structure:</p>
                    <p>U8 = {'{1, 3, 5, 7}'}</p>
                    <ul className="list-disc ml-6">
                    <li>Order of group: |U8| = 4</li>
                    <li>Forms an abelian group</li>
                    <li>Each element is its own inverse</li>
                    </ul>
                </Card>

                <Card className="p-4">
                    <p className="font-semibold">U10 Structure:</p>
                    <p>U10 = {'{1, 3, 7, 9}'}</p>
                    <ul className="list-disc ml-6">
                    <li>Order of group: |U10| = 4</li>
                    <li>Isomorphic to U8</li>
                    <li>Shows same inverse pattern</li>
                    </ul>
                </Card>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Important Observations:</p>
                <ul className="list-disc ml-6">
                    <li>Unit groups of different moduli can be isomorphic</li>
                    <li>For order 4 unit groups, only two non-isomorphic structures exist</li>
                    <li>All unit groups are abelian</li>
                    <li>Identity element is always 1</li>
                    <li>Elements and their inverses are unique modulo n</li>
                </ul>
                </div>
            </div>
            </SubSection>

            <SubSection title="Properties and Applications">
            <div className="space-y-4">
                <Card className="p-4">
                <p className="font-semibold">Fundamental Properties:</p>
                <ul className="list-disc ml-6">
                    <li>Every element has unique multiplicative inverse</li>
                    <li>Product of units is a unit</li>
                    <li>Closure under multiplication modulo n</li>
                    <li>Associates with number theory through coprimality</li>
                </ul>
                </Card>

                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Relationship to Other Concepts:</p>
                <ul className="list-disc ml-6">
                    <li>Connected to Euler's totient function</li>
                    <li>Important in cryptography (RSA algorithm)</li>
                    <li>Used in studying cyclic groups</li>
                    <li>Helps understand group structure through isomorphisms</li>
                </ul>
                </div>
            </div>
            </SubSection>
        </div>
        </Section>

        <Section title="8. Element Orders and Properties">
        <div className="space-y-6">
            <SubSection title="Element Orders in Groups">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>The order of an element a in a group G is the least positive integer n such that aⁿ = e, where e is the identity.</p>
                <p className="mt-2">For any a ∈ G we define:</p>
                <ul className="list-disc ml-6">
                    <li>a⁰ = e (identity element)</li>
                    <li>aⁿ = aⁿ⁻¹a, for n ≥ 1</li>
                    <li>a⁻ⁿ = (a⁻¹)ⁿ for n ≥ 1</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Fundamental Properties:</p>
                <ul className="list-disc ml-6">
                    <li>aⁿa⁻ⁿ = e</li>
                    <li>aᵐaⁿ = aᵐ⁺ⁿ</li>
                    <li>(aᵐ)ⁿ = aᵐⁿ</li>
                    <li>If aⁿ = e then a⁻¹ = aⁿ⁻¹</li>
                </ul>
                </Card>
            </div>
            </SubSection>

            <SubSection title="Existence of Elements in Subgroups">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Key Theorem:</p>
                <p>For a cyclic group G = {'<a>'}, given elements aᵛ and aᵘ:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Their powers are related: aᵛˣaᵘʸ = aᵛˣ⁺ᵘʸ</li>
                    <li>The subgroup containing both elements also contains aᵍᶜᵈ⁽ᵛ'ᵘ⁾</li>
                    <li>This is the smallest such subgroup</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Important Lemma:</p>
                <p>If O(g) = n then O(gᵏ) = n/gcd(n,k)</p>
                <div className="mt-2">
                    <p className="font-semibold">Applications Example:</p>
                    <p>In a cyclic group of order 48, elements of order 8:</p>
                    <ul className="list-disc ml-6">
                    <li>Need k where 48/gcd(48,k) = 8</li>
                    <li>Therefore, gcd(48,k) = 6</li>
                    <li>Solutions: k = 6, 18, 30, 42</li>
                    <li>These k values give elements of order 8</li>
                    </ul>
                </div>
                </Card>
            </div>
            </SubSection>

            <SubSection title="Properties of Even Order Groups">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Theorem:</p>
                <p>If G is a group of even order, then there exists an element a ≠ e such that a² = e</p>
                <p className="mt-2">Proof Sketch:</p>
                <ul className="list-disc ml-6">
                    <li>Remove identity element from consideration</li>
                    <li>Pair remaining elements with their inverses</li>
                    <li>With even order, one unpaired element must remain</li>
                    <li>This element must be its own inverse (a² = e)</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Consequences:</p>
                <ul className="list-disc ml-6">
                    <li>Every group of even order has an element of order 2</li>
                    <li>Such elements are self-inverse: a = a⁻¹</li>
                    <li>These elements form their own conjugacy class</li>
                </ul>
                </Card>

                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Common Mistakes to Avoid:</p>
                <ul className="list-disc ml-6">
                    <li>gᵐ = e does not imply m is the order of g</li>
                    <li>Order of gᵏ may not be order of g divided by k</li>
                    <li>Element orders must divide group order (Lagrange)</li>
                    <li>Self-inverse elements (a² = e) always have order 2 or 1</li>
                </ul>
                </div>
            </div>
            </SubSection>

            <SubSection title="Additional Properties">
            <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">General Results:</p>
                <ul className="list-disc ml-6">
                    <li>The order of g⁻¹ equals the order of g</li>
                    <li>If g has finite order n, then gᵏ has order n/gcd(n,k)</li>
                    <li>In a finite group, the order of any element divides the group order</li>
                    <li>Powers of an element form a cyclic subgroup</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Special Cases:</p>
                <ul className="list-disc ml-6">
                    <li>The identity element always has order 1</li>
                    <li>Elements of prime order generate cyclic subgroups</li>
                    <li>If g has order n, then gᵏ = gʲ if and only if k ≡ j (mod n)</li>
                </ul>
                </Card>
            </div>
            </SubSection>
        </div>
        </Section>

        <Section title="9. Additional Properties and Notes">
        <div className="space-y-6">
            <SubSection title="Unit Groups">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Unit Group Definition:</p>
                <p>For a positive integer n, the unit group Un is defined as:</p>
                <p className="mt-2 font-mono">Un = {'{m | m ∈ Zn, m and n are coprime}'}</p>
                <p className="mt-2">Properties:</p>
                <ul className="list-disc ml-6">
                    <li>Forms a group under multiplication modulo n</li>
                    <li>Contains only elements coprime to n</li>
                    <li>Can be derived from multiplication modulo n group by removing elements without inverses</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Example: U4 Construction</p>
                <ul className="list-disc ml-6">
                    <li>Start with Z4 = {'{0, 1, 2, 3}'}</li>
                    <li>Check coprime elements:</li>
                    <ul className="list-circle ml-6">
                    <li>1 is coprime to 4 (include)</li>
                    <li>2 shares factor 2 with 4 (exclude)</li>
                    <li>3 is coprime to 4 (include)</li>
                    </ul>
                    <li>Therefore, U4 = {'{1, 3}'}</li>
                </ul>
                </Card>
            </div>
            </SubSection>

            <SubSection title="Properties of Orders">
            <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Important Order Theorems:</p>
                <ul className="list-disc ml-6">
                    <li>If |G| = 2n (even order), there exists an element a ≠ e with a² = e</li>
                    <li>Order of element divides group order (Lagrange's Theorem)</li>
                    <li>If g^m = e, order of g divides m</li>
                    <li>Every group of prime order is cyclic</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Order Properties in Finite Groups:</p>
                <ul className="list-disc ml-6">
                    <li>Every element has finite order</li>
                    <li>Powers of elements eventually cycle</li>
                    <li>O(g) = O(g⁻¹) for any element g</li>
                    <li>O(gᵏ) = O(g)/gcd(O(g),k)</li>
                </ul>
                </Card>
            </div>
            </SubSection>

            <SubSection title="Properties of Cyclic Groups">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Key Theorems:</p>
                <ul className="list-disc ml-6">
                    <li>Every cyclic group is isomorphic to either Z or Zn</li>
                    <li>Every cyclic group is abelian</li>
                    <li>Every subgroup of a cyclic group is cyclic</li>
                    <li>Smallest non-cyclic group has order 4</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Properties of Finite Cyclic Groups:</p>
                <ul className="list-disc ml-6">
                    <li>Number of generators equals φ(n) for group of order n</li>
                    <li>Has unique subgroup of each order dividing group order</li>
                    <li>Every element is of form gᵏ for some generator g</li>
                </ul>
                </Card>
            </div>
            </SubSection>

            <SubSection title="General Theorems and Notes">
            <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                <p className="font-semibold">Important Notes:</p>
                <ul className="list-disc ml-6">
                    <li>A group is never the union of two proper subgroups</li>
                    <li>Groups of order p² or p (p prime) are abelian</li>
                    <li>Groups of order less than 6 are abelian</li>
                    <li>If ∀x ∈ G, x² = e then G is abelian</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Advanced Properties:</p>
                <ul className="list-disc ml-6">
                    <li>Non-isomorphic abelian groups of order pᵏ equals partitions of k</li>
                    <li>Intersection of subgroups is always a subgroup</li>
                    <li>Union of subgroups may not be a subgroup</li>
                    <li>Every subgroup contains the identity element</li>
                </ul>
                </Card>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Common Errors to Avoid:</p>
                <ul className="list-disc ml-6">
                    <li>Assuming gᵐ = e implies O(g)|m</li>
                    <li>Confusing order of element with order of group</li>
                    <li>Forgetting to check closure in subgroup proofs</li>
                    <li>Assuming all groups of same order are isomorphic</li>
                </ul>
                </div>
            </div>
            </SubSection>
        </div>
        </Section>
    </div>
  );
};

export default GroupTheoryNotes;