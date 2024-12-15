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
          <p className="text-lg">Set is a collection of objects.</p>

          <SubSection title="Basic Concepts and Notation">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Set Notation:</p>
                <ul className="list-disc ml-6">
                  <li>Curly braces with commas separating elements</li>
                  <li>Example: Set of English vowels {'{a, e, i, o, u}'}</li>
                  <li>Two sets are equal when they have same contents, ignoring order</li>
                  <li>Sets cannot contain duplicate elements</li>
                  <li>Sets may contain anything (including other sets)</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Membership:</p>
                <p>For S = {'{a, b, c}'}</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>a ∈ S (element &quot;a&quot; belongs to set S)</li>
                  <li>d ∉ S (element &quot;d&quot; is not in set S)</li>
                  <li>∈ is called set membership symbol</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Important Examples:</p>
                <ul className="list-disc ml-6">
                  <li>1 ≠ {'{1}'} (number vs set containing number)</li>
                  <li>{'{a}'} ∉ S (set containing a is not an element of S)</li>
                  <li>{'{a, b, c}'} ∉ S (the set itself is not an element)</li>
                  <li>∅ or { } represents empty set</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Set Terminology">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Types of Sets:</p>
                <ul className="list-disc ml-6">
                  <li>Finite set: Limited number of elements</li>
                  <li>Infinite set: Unlimited number of elements</li>
                  <li>Empty set (∅): No elements</li>
                  <li>Cardinality: Number of elements in a set</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Examples:</p>
                <ul className="list-disc ml-6">
                  <li>Finite: D = {'{dog, cat, fish, frog}'}</li>
                  <li>Infinite: N = {'{1, 2, 3, 4, ...}'}</li>
                  <li>Empty: Set of prime numbers between 14 and 16</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Set Representations">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Methods of Representation:</p>
                <ul className="list-disc ml-6">
                  <li>Verbal representation: Description in words</li>
                  <li>List/Roster representation: Listing elements</li>
                  <li>Venn diagram: Visual representation</li>
                  <li>Set-builder notation: {'{x | property of x}'}</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Set-Builder Examples:</p>
                <ul className="list-disc ml-6">
                  <li>Even natural numbers: {'{n | n ∈ N and n is even}'}</li>
                  <li>Prime numbers less than 10: {'{x | x is prime and x < 10}'}</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="2. More About Sets">
        <div className="space-y-6">
          <SubSection title="Subset">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A subset is a sub collection of a set. If set A is subset of set S then we represent it as A ⊆ S.</p>
                <div className="mt-2">
                  <p className="font-semibold">First-Order Logic Representation:</p>
                  <p>A ⊆ S can be written as: ∀x(x ∈ A → x ∈ S)</p>
                </div>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Important Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Every set is subset of itself: S ⊆ S</li>
                  <li>Empty set is subset of every set: ∅ ⊆ S</li>
                  <li>∅ ∈ S is false (empty set is not an element of S)</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Examples:</p>
                <p>Let S = {'{1, {2, 3}, 4}'}</p>
                <ul className="list-disc ml-6">
                  <li>{'{1}'} ⊆ S is true, but 1 ⊆ S is false</li>
                  <li>{'{1}'} ∈ S is false, but 1 ∈ S is true</li>
                  <li>{'{2}'} ⊆ S is false</li>
                  <li>{'{2, 3}'} ⊆ S is false but {'{2, 3}'} ∈ S is true</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Proper Subsets">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A proper subset of set S is a set T such that:</p>
                <ul className="list-disc ml-6">
                  <li>T ⊆ S</li>
                  <li>T ≠ S</li>
                  <li>Notation: T ⊂ S or T ⊊ S</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Example:</p>
                <p>Let S = {'{1, 2}'}</p>
                <p>Proper subsets of S are: ∅, {'{1}'}, {'{2}'}</p>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Powerset">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>The powerset of a set S (written as P(S)) is the set of all subsets of S.</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>S ∈ P(S) but S ⊈ P(S)</li>
                  <li>If |S| = n, then |P(S)| = 2ⁿ</li>
                </ul>
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
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="3. Set Operations">
        <div className="space-y-6">
          <SubSection title="Basic Operations">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Universal Set:</p>
                <p>The Universal set U is the set containing everything currently under consideration. Content depends on context.</p>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Main Operations:</p>
                <ul className="list-disc ml-6">
                  <li>Intersection (A ∩ B): Elements common to both sets</li>
                  <li>Union (A ∪ B): Elements in either set</li>
                  <li>Difference (A - B): Elements in A but not in B</li>
                  <li>Symmetric difference (A △ B): Elements in either set but not both</li>
                  <li>Complement (Ā): Elements not in A</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Example Using Set M and N:</p>
                <p>If M is the set of students who love mangoes, and N is the set of students who love kiwis:</p>
                <ul className="list-disc ml-6">
                  <li>M ∩ N: Students who love both fruits</li>
                  <li>M ∪ N: Students who love either fruit</li>
                  <li>M - N: Students who love mangoes but not kiwis</li>
                  <li>M △ N: Students who love exactly one of the fruits</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Set Identities">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Basic Laws:</p>
                <ul className="list-disc ml-6">
                  <li>Identity laws: A ∪ ∅ = A, A ∩ U = A</li>
                  <li>Domination laws: A ∪ U = U, A ∩ ∅ = ∅</li>
                  <li>Idempotent laws: A ∪ A = A, A ∩ A = A</li>
                  <li>Complement laws: A ∩ Ā = ∅, A ∪ Ā = U</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Additional Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Commutative laws: A ∪ B = B ∪ A</li>
                  <li>Associative laws: (A ∪ B) ∪ C = A ∪ (B ∪ C)</li>
                  <li>Distributive laws</li>
                  <li>De Morgan&apos;s laws</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="4. Ordered Pairs and Cartesian Product">
        <div className="space-y-6">
          <SubSection title="Ordered Pairs">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>An ordered pair is a sequence of two elements a, b where:</p>
                <ul className="list-disc ml-6">
                  <li>Order matters: (a, b) ≠ (b, a) if a ≠ b</li>
                  <li>Repetition matters: (a, a) is valid</li>
                </ul>
                <div className="mt-2">
                  <p className="font-semibold">Comparison with Sets:</p>
                  <ul className="list-disc ml-6">
                    <li>Sets: Order doesn&apos;t matter, repetition doesn&apos;t matter</li>
                    <li>Ordered pairs: Order matters, repetition matters</li>
                  </ul>
                </div>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Structures with Order:</p>
                <ul className="list-disc ml-6">
                  <li>Set (finite or infinite): Order doesn&apos;t matter, repetition doesn&apos;t matter</li>
                  <li>Ordered n-tuple (finite): Order matters, repetition matters</li>
                  <li>Sequence (finite or infinite): Order matters, repetition matters</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Cartesian Product">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A × B = {'{(x,y) | x ∈ A and y ∈ B}'}</p>
                <p>B × A = {'{(x,y) | x ∈ B and y ∈ A}'}</p>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Properties:</p>
                <ul className="list-disc ml-6">
                  <li>|A × B| = |A| × |B| where |A| and |B| are cardinalities</li>
                  <li>A × ∅ = ∅</li>
                  <li>A × B = B × A only if A = B or one is empty</li>
                  <li>Not associative or commutative</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Special Case:</p>
                <p>{'{1, 2}'}<sup>n</sup> represents:</p>
                <ul className="list-disc ml-6">
                  <li>n = 2: {'{(1,1), (1,2), (2,1), (2,2)}'}</li>
                  <li>n = 4: {'{(1111), (1112), (1121), ..., (2222)}'}</li>
                </ul>
              </div>
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
                <p>A binary relation R between sets A and B is a subset of A × B. We write:</p>
                <ul className="list-disc ml-6">
                  <li>(a, b) ∈ R or aRb to show a is related to b</li>
                  <li>R: A → B denotes a relation from A to B</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Important Properties:</p>
                <p>Relations may be:</p>
                <ul className="list-disc ml-6">
                  <li>One-way: aRb doesn&apos;t imply bRa</li>
                  <li>Two-way: Some relations work in both directions</li>
                  <li>Defined between same set: R: A → A</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Counting Relations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Number of Possible Relations:</p>
                <ul className="list-disc ml-6">
                  <li>For sets A and B, relations are subsets of A × B</li>
                  <li>Number of relations = 2|A×B| = 2|A|×|B|</li>
                  <li>Each element in A × B can either be in R or not</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Relations on a Set">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Special Case: R: A → A</p>
                <p>When relation is from a set to itself:</p>
                <ul className="list-disc ml-6">
                  <li>Domain and codomain are the same set</li>
                  <li>R ⊆ A × A</li>
                  <li>Called a relation &quot;on&quot; set A</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Representations:</p>
                <ul className="list-disc ml-6">
                  <li>Graph representation</li>
                  <li>Matrix representation</li>
                  <li>Arrow diagram representation</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="6. Types of Binary Relations">
        <div className="space-y-6">
          <SubSection title="Categories of Relations">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">When relation is defined on a set A (R: A → A)</p>
                <p>Special types of relations:</p>
                <ul className="list-disc ml-6">
                  <li>Reflexive, irreflexive</li>
                  <li>Symmetric, Anti-symmetric, Asymmetric</li>
                  <li>Transitive</li>
                </ul>
                <p className="mt-2 text-sm">Note: This categorization is only for relations on set type.</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Reflexive Relations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>If every element is related to itself, it&apos;s a reflexive relation.</p>
                <div className="mt-2">
                  <p>For relation R on set A:</p>
                  <ul className="list-disc ml-6">
                    <li>∀x∈A(x R x)</li>
                    <li>Every element must be related to itself</li>
                  </ul>
                </div>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Examples:</p>
                <p>Let A = {'{1, 2, 3}'}</p>
                <ul className="list-disc ml-6">
                  <li>R = {'{(1,1), (1,2), (3,3)}'} - Not reflexive (missing (2,2))</li>
                  <li>R = {'{(1,1), (2,2), (3,2), (3,3)}'} - Reflexive</li>
                  <li>R = {'{(1,1), (2,2)}'} - Not reflexive (incomplete)</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Symmetric Relations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>If a R b then b R a for all elements.</p>
                <ul className="list-disc ml-6">
                  <li>∀a,b∈A(a R b → b R a)</li>
                  <li>If one element is related to another, the reverse must also be true</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Properties:</p>
                <ul className="list-disc ml-6">
                  <li>If a R a (reflexive), no impact on symmetry</li>
                  <li>If a !R a (not related to self), no impact on symmetry</li>
                  <li>Must check pairs of different elements</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Anti-symmetric Relations">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>For two different elements a, b, if a R b and b R a then a = b</p>
                <p>∀a,b∈A((a ≠ b ∧ a R b) → ¬(b R a))</p>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Alternate Definition:</p>
                <p>∀a,b∈A((b R a ∧ a R b) → b = a)</p>
                <p className="mt-2">Two elements cannot be related in both directions unless they&apos;re the same element</p>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Transitive Relations">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>If a R b and b R c then a R c</p>
                <p>∀a,b,c∈A((a R b ∧ b R c) → a R c)</p>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Graph Representation:</p>
                <p>In a graph, if there&apos;s a path from a to b and b to c, there must be a direct path from a to c</p>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="7. Equivalence Relations">
        <div className="space-y-6">
          <SubSection title="Definition and Properties">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Equivalence Relation Requirements:</p>
                <p>A relation R is an equivalence relation if it is:</p>
                <ul className="list-disc ml-6">
                  <li>Reflexive</li>
                  <li>Symmetric</li>
                  <li>Transitive</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Equivalence Classes:</p>
                <p>[a]ᴿ = {'{x | x R a}'}</p>
                <ul className="list-disc ml-6">
                  <li>All elements equivalent to a</li>
                  <li>Forms partition of the set</li>
                  <li>Each element belongs to exactly one class</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="8. Partitions">
        <div className="space-y-6">
          <SubSection title="Basic Concepts">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A partition of set S is non-empty subsets of S which are pairwise disjoint such that it includes all the elements of set S.</p>
                <div className="mt-2">
                  <p className="font-semibold">Key Properties:</p>
                  <ul className="list-disc ml-6">
                    <li>Ai ⊆ A (Each part is a subset)</li>
                    <li>Ai ∩ Aj = ∅ for 0 &lt; i,j &lt;= 4 and i ≠ j (Parts are disjoint)</li>
                    <li>A1 ∪ A2 ∪ A3 ∪ A4 = A (Union covers whole set)</li>
                    <li>Ai ≠ ∅ (No empty parts)</li>
                  </ul>
                </div>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Examples:</p>
                <p>Consider S = {'{1, 2, 3, 4}'}</p>
                <p>P : {'{1}, {2, 3}, {4}'} is a partition</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Each subset is non-empty</li>
                  <li>Subsets are disjoint</li>
                  <li>Union gives complete set S</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Counting Partitions">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Example with S = {'{1, 2, 3}'}</p>
                <div className="ml-4">
                  <p>One part partition: {'{123}'} → 1 way</p>
                  <p>Two part partitions:</p>
                  <ul className="list-disc ml-6">
                    <li>{'{1}, {23}'}</li>
                    <li>{'{2}, {13}'}</li>
                    <li>{'{3}, {12}'} → 3 ways</li>
                  </ul>
                  <p>Three part partition: {'{1}, {2}, {3}'} → 1 way</p>
                  <p className="mt-2">Total: 5 different partitions possible</p>
                </div>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Verification Example:</p>
                <p>Is {'{prime numbers, composite numbers}'} a partition of N?</p>
                <ul className="list-disc ml-6">
                  <li>Prime numbers = {'{2, 3, 5, ...}'}</li>
                  <li>Composite numbers = {'{4, 6, 8, 9, ...}'}</li>
                  <li>Not a partition because 1 is missing</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Relationship with Equivalence Relations">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Key Connection:</p>
                <ul className="list-disc ml-6">
                  <li>Every equivalence relation on a set creates a partition (via equivalence classes)</li>
                  <li>Every partition corresponds to an equivalence relation</li>
                  <li>Number of different partitions = Number of equivalence relations</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Bell Numbers:</p>
                <p>Number of different partitions of a set with n elements is given by nth Bell number Bn</p>
                <div className="mt-2">
                  <p className="font-semibold">Bell Triangle:</p>
                  <p>E(i,j) = E(i-1,j-1) + E(i,j-1); i,j &gt; 1</p>
                  <p>E(1,1) = 1, E(i,1) = E(i-1,i-1)</p>
                </div>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="9. Partial Order Relations">
        <div className="space-y-6">
          <SubSection title="Introduction to Order">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Use of Relations for Ordering:</p>
                <ul className="list-disc ml-6">
                  <li>Words ordered in dictionary</li>
                  <li>Project tasks ordered by completion requirements</li>
                  <li>Integers ordered by less than relation</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Example with Gate Aspirants:</p>
                <p>At the beginning of preparation, partial order might be:</p>
                <ul className="list-disc ml-6">
                  <li>DM → TOC → CD</li>
                  <li>DLD → CO → OS</li>
                  <li>FM</li>
                  <li>GA</li>
                </ul>
                <p className="mt-2">Not all subjects have defined relationships (partial order)</p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Example of Total Order:</p>
                <p>School standards:</p>
                <p>KG → 1 → 2 → 3 → 4 → ... → 12</p>
                <p>Every element is comparable (total order)</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="POSET Definition">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A relation R on a set A is partial order (or partial ordering) if R is:</p>
                <ul className="list-disc ml-6">
                  <li>Reflexive</li>
                  <li>Antisymmetric</li>
                  <li>Transitive</li>
                </ul>
                <p className="mt-2">A set A with a partial order is called a partially ordered set, or POSET.</p>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Standard Partial Order Relations:</p>
                <ul className="list-disc ml-6">
                  <li>(N, ≤) is partial order relation</li>
                  <li>(N, ≥) is partial order relation</li>
                  <li>(P(A), ⊆) is partial order relation</li>
                  <li>Divisibility relation: R on N, xRy iff x|y</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Comparable and Non-Comparable Elements">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definitions:</p>
                <ul className="list-disc ml-6">
                  <li>Elements a and b are comparable if a ≼ b or b ≼ a</li>
                  <li>If neither holds, they are incomparable</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Example:</p>
                <p>For ({'{1, 2, 3, 4}'}, |):</p>
                <ul className="list-disc ml-6">
                  <li>Comparable elements: 1|2, 2|4</li>
                  <li>Non-comparable elements: 2|3, 3|2</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Total Order">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A total order or total ordering relation is:</p>
                <ul className="list-disc ml-6">
                  <li>A partial order relation where every element is comparable</li>
                  <li>For any a,b: either a ≼ b or b ≼ a</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Note on P(A):</p>
                <p>POR (P(A), ⊆) is TOR iff |A| ≤ 1</p>
                <div className="mt-2">
                  <p className="font-semibold">Examples:</p>
                  <ul className="list-disc ml-6">
                    <li>If A is empty: P(A) has one element</li>
                    <li>If |A| = 1: P(A) has ordered elements ∅ ⊂ {'{a}'}</li>
                    <li>If |A| &gt; 1: Some elements become incomparable</li>
                  </ul>
                </div>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="10. Special Elements of POSET">
        <div className="space-y-6">
          <SubSection title="Maximal and Minimal Elements">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Maximal Element:</p>
                <ul className="list-disc ml-6">
                  <li>Element of poset which is not related to any element of same poset</li>
                  <li>In Hasse diagram: no path from m to anyone else (no edge)</li>
                </ul>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Minimal Element:</p>
                <ul className="list-disc ml-6">
                  <li>Element of poset which is not related by any element of same poset</li>
                  <li>In Hasse diagram: no path from element to minimal element</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Greatest and Least Elements">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Greatest/Maximum Element:</p>
                <ul className="list-disc ml-6">
                  <li>Element of poset which is related by every element of poset</li>
                  <li>Must be unique if exists</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Least/Minimum Element:</p>
                <ul className="list-disc ml-6">
                  <li>Element of poset which is related to every element of poset</li>
                  <li>Must be unique if exists</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Important Properties:</p>
                <ul className="list-disc ml-6">
                  <li>If greatest/least exists, must be unique</li>
                  <li>Multiple maximal/minimal elements possible</li>
                  <li>One element can be both minimal and maximal</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Upper and Lower Bounds">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Upper Bound:</p>
                <p>Upper bound of X is the element a ∈ A such that all elements of X are related to a</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Lower Bound:</p>
                <p>Lower bound of X is the element a ∈ A such that all elements of X are related by a</p>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Least Upper Bound (LUB):</p>
                <ul className="list-disc ml-6">
                  <li>The least element in the upper bound of subset</li>
                  <li>First find upper bound of X then find least element</li>
                </ul>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Greatest Lower Bound (GLB):</p>
                <ul className="list-disc ml-6">
                  <li>The greatest element in the lower bound of subset</li>
                  <li>First find lower bound of X then find greatest element</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="11. Lattice">
        <div className="space-y-6">
          <SubSection title="Definition and Basic Concepts">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A lattice is a poset (A, ≼) in which any two elements a, b has:</p>
                <ul className="list-disc ml-6">
                  <li>LUB(a,b)</li>
                  <li>GLB(a,b)</li>
                </ul>
                <p className="mt-2">∀a,b∈A (a ∧ b should exists and a ∨ b should exists)</p>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Checking for Lattice:</p>
                <ul className="list-disc ml-6">
                  <li>Only need to check incomparable elements</li>
                  <li>Comparable elements always have GLB and LUB</li>
                  <li>Every pair of non-comparable elements must have Unique GLB and LUB</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Properties of Lattices">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Basic Properties (ICAA):</p>
                <ul className="list-disc ml-6">
                  <li>Idempotent (x ∧ x = x; x ∨ x = x)</li>
                  <li>Commutative (x ∧ y = y ∧ x; x ∨ y = y ∨ x)</li>
                  <li>Associative ((x ∧ y) ∧ z = x ∧ (y ∧ z))</li>
                  <li>Absorption (x ∧ (x ∨ y) = x; x ∨ (x ∧ y) = x)</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Optional Properties:</p>
                <p>Some lattices may also have:</p>
                <ul className="list-disc ml-6">
                  <li>Identity</li>
                  <li>Complement</li>
                  <li>Distributive properties</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="12. Types of Lattices">
        <div className="space-y-6">
            <SubSection title="Bounded Lattice">
            <div className="space-y-4">
                <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A lattice ⟨A, ≼⟩ is bounded if and only if it has:</p>
                <ul className="list-disc ml-6">
                    <li>A minimum element (denoted by 0)</li>
                    <li>A maximum element (denoted by 1)</li>
                </ul>
                </Card>

                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Properties:</p>
                <ul className="list-disc ml-6">
                    <li>Every finite lattice is bounded</li>
                    <li>Infinite lattices can be bounded (e.g., [a,b] with ≤)</li>
                    <li>Infinite lattices may be unbounded (e.g., (Z, ≤))</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Identity Properties:</p>
                <ul className="list-disc ml-6">
                    <li>0 ∨ x = x = x ∨ 0</li>
                    <li>1 ∧ x = x = x ∧ 1</li>
                    <li>0 ∧ x = 0</li>
                    <li>1 ∨ x = 1</li>
                </ul>
                </Card>
            </div>
            </SubSection>

            <SubSection title="Complemented Lattice">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A lattice is complemented if and only if every element has at least one complement.</p>
                <p>For an element &quot;a&quot;, a complement &quot;b&quot; satisfies:</p>
                <ul className="list-disc ml-6">
                    <li>a ∨ b = 1</li>
                    <li>a ∧ b = 0</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Important Notes:</p>
                <ul className="list-disc ml-6">
                    <li>The lattice must be bounded first</li>
                    <li>An element might have multiple complements</li>
                    <li>Not every bounded lattice is complemented</li>
                </ul>
                </Card>
            </div>
            </SubSection>

            <SubSection title="Distributive Lattice">
            <div className="space-y-4">
                <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>A lattice is distributive if and only if for all elements a, b, c:</p>
                <ul className="list-disc ml-6">
                    <li>a ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c)</li>
                    <li>a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c)</li>
                </ul>
                </Card>

                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Theorem:</p>
                <ul className="list-disc ml-6">
                    <li>If a &quot;kite&quot; or &quot;pentagon&quot; sublattice exists, then the lattice is not distributive</li>
                    <li>If |L| ≤ 4, then it is definitely distributive</li>
                    <li>If distributive, then at most one complement per element</li>
                </ul>
                </div>
            </div>
            </SubSection>

            <SubSection title="Boolean Lattice">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A lattice is Boolean if it is:</p>
                <ul className="list-disc ml-6">
                    <li>Bounded</li>
                    <li>Complemented</li>
                    <li>Distributive</li>
                </ul>
                </div>

                <Card className="p-4">
                <p className="font-semibold">Properties:</p>
                <ul className="list-disc ml-6">
                    <li>Every Boolean algebra has 2^n elements</li>
                    <li>It has the same structure as (P(A), ⊆)</li>
                    <li>Examples of Boolean lattices:
                    <ul className="list-disc ml-6">
                        <li>1 element = &quot;{'{∅}'}&quot;</li>
                        <li>2 elements = &quot;{'∅, {1}'}&quot;</li>
                        <li>3 elements = impossible</li>
                        <li>4 elements = possible</li>
                    </ul>
                    </li>
                </ul>
                </Card>
            </div>
            </SubSection>
        </div>
        </Section>

      <Section title="13. Analysis on Divisibility Relations">
        <div className="space-y-6">
          <SubSection title="Divisibility Lattice">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Definition:</p>
                <p>Dn = set of all divisors of n</p>
                <ul className="list-disc ml-6">
                  <li>D4 = {'{1, 2, 4}'}</li>
                  <li>D6 = {'{1, 2, 3, 6}'}</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Properties:</p>
                <ul className="list-disc ml-6">
                  <li>LUB = LCM</li>
                  <li>GLB = GCD</li>
                  <li>All divisibility lattices are distributive</li>
                  <li>Complemented iff n is square-free</li>
                </ul>
              </div>

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