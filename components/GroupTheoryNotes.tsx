'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/Section';
import { SubSection } from '@/components/ui/SubSection';

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
                <p className="font-semibold">Galois&apos;s Key Contributions:</p>
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

      <Section title="2. Properties and Operations">
        <div className="space-y-6">
          <SubSection title="Binary Operations and Closure">
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
                <p>For set {'{a,b}'} with operation *:</p>
                <div className="mt-2 font-mono">
                  <p>* | a b</p>
                  <p>a | a b</p>
                  <p>b | b a</p>
                </div>
                <p className="mt-2">This table completely defines the operation on the set.</p>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Closure Property:</p>
                <p>A set has closure property if the result is always an element in the set.</p>
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

      <Section title="3. Classification of structures with binary operation">
        <div className="space-y-6">
          <SubSection title="Hierarchy of Structures">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Basic Structures (Ascending Order of Properties):</p>
                <div className="mt-2 space-y-2">
                  <div className="pl-4 border-l-4 border-blue-500">
                    <p className="font-medium">1. Magma (Groupoid)</p>
                    <p className="text-sm">Only closure property</p>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-500">
                    <p className="font-medium">2. Semigroup</p>
                    <p className="text-sm">Closure + Associative</p>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-500">
                    <p className="font-medium">3. Monoid</p>
                    <p className="text-sm">Closure + Associative + Identity</p>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-500">
                    <p className="font-medium">4. Group</p>
                    <p className="text-sm">Closure + Associative + Identity + Inverse</p>
                  </div>
                </div>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Important Note:</p>
                <p>Every algebraic structure with binary operation is a magma because all algebraic structures with binary operation satisfy closure property.</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Magma (Groupoid)">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>Let G be a non-empty set and * be a binary operation. The structure (G, *) is called a groupoid if:</p>
                <p className="mt-2 font-mono">∀a,b ∈ G: a * b ∈ G</p>
                <p className="mt-2">Example: The set N is not a groupoid with respect to subtraction (-)</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Semigroup">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A groupoid with associative property is a semigroup.</p>
                <div className="mt-2">
                  <p className="font-semibold">Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>Closure</li>
                    <li>Associativity: (a * b) * c = a * (b * c)</li>
                  </ul>
                </div>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Monoid">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A semigroup with identity property is a monoid.</p>
                <div className="mt-2">
                  <p className="font-semibold">Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>Closure</li>
                    <li>Associativity</li>
                    <li>Identity element e: a * e = e * a = a</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Monoid Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Left cancellation: If a * b = a * c then b = c</li>
                  <li>Right cancellation: If b * a = c * a then b = c</li>
                  <li>Identity element is unique</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Example Structure:</p>
                <p>Consider (Z, *) where a * b = a + b - 3</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Closure: ∀a,b∈Z, a+b-3 ∈ Z</li>
                  <li>Associative: (a*b)*c = a*(b*c)</li>
                  <li>Identity element: e = 3 (because a*3 = a+3-3 = a)</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Group">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A monoid with inverse property is a group.</p>
                <div className="mt-2">
                  <p className="font-semibold">Required Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>Closure</li>
                    <li>Associativity</li>
                    <li>Identity element</li>
                    <li>Inverse elements</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Additional Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Left and right cancellation laws hold</li>
                  <li>Unique inverse elements</li>
                  <li>Unique identity element</li>
                  <li>May be non-abelian (non-commutative)</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Important Notes">
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc ml-6">
                  <li>When operation "*" is NOT associative, expressions like a * b * c are ambiguous and require parentheses</li>
                  <li>Every structure has at most one identity element</li>
                  <li>Non-commutative doesn't mean ∀x,y(x*y ≠ y*x), as e*a = a*e always holds</li>
                  <li>Operation tables (Cayley tables) completely define binary operations on finite sets</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Property Examples:</p>
                <div className="space-y-2">
                  <p>Associative and Commutative:</p>
                  <ul className="list-disc ml-6">
                    <li>Addition and multiplication in number theory</li>
                    <li>Set operations (union, intersection)</li>
                  </ul>
                  <p className="mt-2">Associative but not Commutative:</p>
                  <ul className="list-disc ml-6">
                    <li>Matrix multiplication</li>
                    <li>(N, #) where a#b = a</li>
                  </ul>
                </div>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="4. Types of Groups">
        <div className="space-y-6">
          <SubSection title="Important Group Types">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Addition Modulo n Groups:</p>
                <ul className="list-disc ml-6">
                  <li>Base set: Zn = {'{0, 1, 2, ..., n-1}'}</li>
                  <li>Operation: Addition modulo n (⊕ₙ)</li>
                  <li>Forms an abelian group</li>
                  <li>Identity element: 0</li>
                  <li>For each a, inverse is (n-a)</li>
                  <li>Cannot form a group under multiplication (0 has no inverse)</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">nth Roots of Unity:</p>
                <ul className="list-disc ml-6">
                  <li>Set of complex numbers satisfying xⁿ = 1</li>
                  <li>Forms a cyclic group under multiplication</li>
                  <li>Identity element: 1</li>
                  <li>Order equals number of roots</li>
                  <li>Always forms an abelian group</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Groups of Small Order">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Order 1 Groups:</p>
                <ul className="list-disc ml-6">
                  <li>Only one possible group structure</li>
                  <li>Contains only identity element</li>
                  <li>Examples: ({'{T}'}, ∧), ({'{1}'}, ×), ({'{0}'}, +)</li>
                  <li>All order 1 groups are isomorphic</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Order 2 and Higher:</p>
                <ul className="list-disc ml-6">
                  <li>Order 2: Only one possible group up to isomorphism</li>
                  <li>Order 3: Only one possible group (cyclic)</li>
                  <li>Order 4: Two non-isomorphic groups exist:
                    <ul className="list-circle ml-6 mt-1">
                      <li>Cyclic group C₄</li>
                      <li>Klein four-group V₄</li>
                    </ul>
                  </li>
                </ul>
              </Card>

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

          <SubSection title="Special Properties">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Cancellation Laws:</p>
                <ul className="list-disc ml-6">
                  <li>Left Cancellation: If ab = ac, then b = c</li>
                  <li>Right Cancellation: If ba = ca, then b = c</li>
                  <li>Both laws hold in all groups</li>
                  <li>In non-abelian groups: a * c = b * a ↛ c = b</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Identity and Inverse Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Identity element is unique</li>
                  <li>Each element has unique inverse</li>
                  <li>a*a⁻¹ = a⁻¹*a = e (always true)</li>
                  <li>ae = ea (always true)</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="5. Subgroups">
        <div className="space-y-6">
          <SubSection title="Definition and Properties">
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
                <p>A non-empty subset H of a group G is a subgroup if and only if:</p>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <p>For any x, y ∈ H, xy⁻¹ ∈ H</p>
                </div>
                <p className="mt-2 text-sm">Note: This single condition implies all subgroup properties, including the presence of identity.</p>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Generated Subgroups">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Subgroup Generated by an Element:</p>
                <p>For a ∈ G, the cyclic subgroup {'<a>'} is defined as:</p>
                <div className="mt-2 font-mono">
                  {'<a> = {aⁿ | n ∈ Z}'}
                </div>
                <div className="mt-2">
                  <p className="font-semibold">Important Notes:</p>
                  <ul className="list-disc ml-6">
                    <li>Inverses only needed for infinite groups</li>
                    <li>In finite groups, inverse is a positive power</li>
                    <li>Forms a cyclic subgroup</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Example: (Z, +)</p>
                <ul className="list-disc ml-6">
                  <li>Subgroup generated by 2: {'{...,-4,-2,0,2,4,...}'}</li>
                  <li>Must contain 0 (identity)</li>
                  <li>Closed under addition</li>
                  <li>Contains inverses (-2 for 2, etc.)</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Properties of Subgroups">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Fundamental Properties:</p>
                <ul className="list-disc ml-6">
                  <li>A group is never the union of two proper subgroups</li>
                  <li>The intersection of any collection of subgroups is a subgroup</li>
                  <li>Union of subgroups generally not a subgroup</li>
                  <li>Every subgroup contains the identity element</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Example: Intersection Property</p>
                <p>For subgroups H and K of G:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Closure: If a,b ∈ H∩K, then a*b ∈ H and a*b ∈ K, thus a*b ∈ H∩K</li>
                  <li>Identity: e ∈ H and e ∈ K for all subgroups, thus e ∈ H∩K</li>
                  <li>Inverse: If a ∈ H∩K, then a⁻¹ ∈ H and a⁻¹ ∈ K, thus a⁻¹ ∈ H∩K</li>
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
                  <li>The subgroup containing both elements also contains aᵍᶜᵈ⁽ᵛ⁾</li>
                  <li>This is the smallest such subgroup</li>
                  <li>For finite groups, inverse of element can be expressed as positive power</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Lemma:</p>
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
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="6. Unit Groups">
        <div className="space-y-6">
          <SubSection title="Definition and Construction">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Unit Group Construction:</p>
                <p>While multiplication modulo n is not a group over all of Zn, we can create a group by selecting only elements with multiplicative inverses:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Start with multiplication modulo n operation</li>
                  <li>Remove elements that don't have multiplicative inverses</li>
                  <li>Remaining elements form Un</li>
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

      <Section title="7. Cyclic Groups">
        <div className="space-y-6">
          <SubSection title="Definition and Basic Properties">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A group G is cyclic if there exists an element a ∈ G (called a generator) such that:</p>
                <p className="mt-2 font-mono">G = {'<a> = {aⁿ | n ∈ ℤ}'}</p>
                <div className="mt-2">
                  <p className="font-semibold">Important Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>At least one generator exists in cyclic groups</li>
                    <li>A group may have multiple generators</li>
                    <li>Every cyclic group is abelian</li>
                    <li>Smallest non-cyclic group has order 4</li>
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

          <SubSection title="Examples and Core Concepts">
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
                  <li>Element orders divide group order (Lagrange&apos;s Theorem)</li>
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
                  <li>If G is cyclic of order n, then number of generators = φ(n) (Euler&apos;s totient)</li>
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

      <Section title="8. Lagrange's theorem">
        <div className="space-y-6">
          <SubSection title="Main Theorem">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Statement:</p>
                <p>If G is a finite group and H ≤ G then |H| divides |G|.</p>
                <p className="mt-2 italic">In other words: The order of every subgroup of a finite group G divides the order of G.</p>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Important Consequences:</p>
                <ul className="list-disc ml-6">
                  <li>Since every element generates a subgroup, the order of any element divides the group order</li>
                  <li>This restricts possible subgroup sizes to divisors of the group order</li>
                  <li>Helps identify potential subgroup structures</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Converse and Special Cases">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Converse Statement (Not Always True):</p>
                <p>"If n divides |G|, then G has a subgroup of order n"</p>
                <div className="mt-2">
                  <p className="font-semibold">Special Cases:</p>
                  <ul className="list-disc ml-6">
                    <li>The converse holds for abelian groups</li>
                    <li>If G is cyclic, the converse is true</li>
                    <li>For prime order groups, the converse provides valuable insights</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Prime Order Groups:</p>
                <ul className="list-disc ml-6">
                  <li>When |G| = p (prime), only possible subgroup orders are 1 and p</li>
                  <li>This implies G must be cyclic</li>
                  <li>Every element except identity must have order p</li>
                  <li>Such groups are always cyclic and thus abelian</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Subgroup Properties">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Classification of Subgroups:</p>
                <ul className="list-disc ml-6">
                  <li>Trivial subgroups: {'{e}'} and G itself</li>
                  <li>Non-trivial subgroups: All other proper subgroups</li>
                  <li>Example: For |G| = 6, subgroups of order 2 or 3 are non-trivial</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Intersection Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Intersection of any collection of subgroups is a subgroup</li>
                  <li>Union of subgroups is generally not a subgroup</li>
                  <li>Example: In (Z,+), (3Z,+) ∪ (4Z,+) is not a subgroup as 3+4 ∉ (3Z ∪ 4Z)</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Additional Properties">
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
                <p className="font-semibold">Element Orders:</p>
                <p>For element g with O(g) = n:</p>
                <ul className="list-disc ml-6">
                  <li>O(gᵏ) = n/gcd(n,k)</li>
                  <li>Powers of elements eventually cycle in finite groups</li>
                  <li>Order of element divides group order</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>
    </div>
  );
};

export default GroupTheoryNotes;