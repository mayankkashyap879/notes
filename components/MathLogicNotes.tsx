'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/Section';
import { SubSection } from '@/components/ui/SubSection';

const MathLogicNotes: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Section title="1. Introduction to Mathematical Logic">
        <div className="space-y-4">
          <p className="text-lg">Mathematical logic provides precise, unambiguous meaning to mathematical statements, theorems, and proofs.</p>
          
          <SubSection title="Need for Mathematical Logic">
            <div className="space-y-4">
              <p>Natural languages like English are inherently ambiguous. Consider these examples:</p>
              
              <Card className="p-4">
                <p className="font-semibold">Example 1:</p>
                <p>&quot;The sun is shining and I feel happy.&quot;</p>
                <p className="mt-2">This could mean either:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>The person is happy because the sun is shining (causation)</li>
                  <li>The sun is shining and the person&apos;s happiness are independent facts (conjunction)</li>
                </ul>
              </Card>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Example 2:</p>
                <p>&quot;Cats are furry and elephants are heavy.&quot;</p>
                <p className="mt-2">This has the same structure as Example 1, but:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Nobody assumes elephants are heavy because cats are furry</li>
                  <li>The statements are clearly independent</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-6">
                <p className="font-semibold">Key Point:</p>
                <p>Mathematical logic resolves such ambiguities by providing:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Formal notation</li>
                  <li>Precise semantics</li>
                  <li>Clear rules for interpretation</li>
                  <li>Unambiguous meaning to mathematical statements</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="World of Mathematical Logic">
            <div className="space-y-4">
              <p>Mathematical logic operates in a world of:</p>
              <ul className="list-disc ml-6">
                <li>Truth values (True/False)</li>
                <li>Propositional variables (Boolean variables)</li>
                <li>Logical connectives (AND, OR, NOT, etc.)</li>
                <li>Quantifiers (∀ - for all, ∃ - there exists)</li>
              </ul>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Foundation for:</p>
                <ul className="list-disc ml-6">
                  <li>Mathematical proofs</li>
                  <li>Computer programming</li>
                  <li>Artificial intelligence</li>
                  <li>Database systems</li>
                  <li>Digital circuit design</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="2. Propositional Logic">
        <div className="space-y-6">
          <div className="mb-4">
            <p className="text-lg">Propositional logic forms the foundation of mathematical reasoning, dealing with propositions that can be either true or false.</p>
          </div>
          
          <SubSection title="Propositions">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A proposition is a declarative sentence that:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Makes a definite statement or declares a fact</li>
                  <li>Must be either true or false (not both)</li>
                  <li>Has a well-defined truth value</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Valid Propositions:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>&quot;Jaipur is the capital of India&quot; (False)</li>
                  <li>&quot;Some cows are brown&quot; (True)</li>
                  <li>&quot;2 × 2 = 5&quot; (False)</li>
                </ul>
              </Card>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Non-Propositions:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Commands:&quot;Close the door&quot;</li>
                  <li>Questions:&quot;What time is it?&quot;</li>
                  <li>Expressions with variables:&quot;x + 2 = 2x&quot;</li>
                  <li>Exclamations:&quot;How beautiful!&quot;</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Special Case: Paradoxes</p>
                <p>Consider the statement S:&quot;S is false&quot;</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>If S is true, then by its own admission, it&apos;s false</li>
                  <li>If S is false, then its statement is true</li>
                  <li>This creates a logical paradox and is not a valid proposition</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Boolean Variables">
            <div className="space-y-4">
              <p>Each proposition can be represented by a propositional (Boolean) variable:</p>
              <ul className="list-disc ml-6">
                <li>Generally denoted by uppercase letters (P, Q, R, etc.)</li>
                <li>Can only take values of True (T) or False (F)</li>
                <li>Also called truth values</li>
              </ul>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Example:</p>
                <p>Let S be a proposition that is false</p>
                <p className="mt-2">Then:</p>
                <ul className="list-disc ml-6">
                  <li>S = false is the truth value assignment</li>
                  <li>false is the truth value of proposition S</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Atomic and Compound Propositions">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Atomic Propositions:</p>
                <ul className="list-disc ml-6">
                  <li>Cannot be broken down into simpler propositions</li>
                  <li>Truth value is independent of other propositions</li>
                  <li>Represented by a single Boolean variable</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Example of Atomic Proposition:</p>
                <p>&quot;4 is a prime number&quot;</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>This is false</li>
                  <li>Its truth value doesn&apos;t depend on other propositions</li>
                  <li>Cannot be broken down further</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Compound Propositions:</p>
                <ul className="list-disc ml-6">
                  <li>Built from atomic propositions using logical connectives</li>
                  <li>Truth value depends on component propositions</li>
                  <li>Can be broken down into simpler propositions</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Example of Compound Proposition:</p>
                <p>&quot;4 is a prime number AND New Delhi is the capital of India&quot;</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Combines two atomic propositions</li>
                  <li>Uses the logical connective AND</li>
                  <li>Truth value depends on both components</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Standard Logical Connectives:</p>
                <ul className="list-disc ml-6">
                  <li>NOT (¬)</li>
                  <li>AND (∧)</li>
                  <li>OR (∨)</li>
                  <li>Exclusive OR (⊕)</li>
                  <li>Implication (→)</li>
                  <li>Biimplication (↔)</li>
                  <li>NAND (↑)</li>
                  <li>NOR (↓)</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Properties and Rules">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Basic Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Every proposition must have exactly one truth value</li>
                  <li>Truth values cannot change within the same context</li>
                  <li>Complex propositions&apos; truth values are determined by their components</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Important Rules:</p>
                <ul className="list-disc ml-6">
                  <li>Law of Excluded Middle: P ∨ ¬P is always true</li>
                  <li>Law of Non-Contradiction: P ∧ ¬P is always false</li>
                  <li>Double Negation: ¬(¬P) ≡ P</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="3. Atomic and Compound Propositions">
        <div className="space-y-6">
          <SubSection title="Atomic Propositions">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>An atomic proposition is a statement whose truth value:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Does not depend on any other proposition</li>
                  <li>Cannot be broken down into simpler propositions</li>
                  <li>Is determined independently of other logical statements</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Examples of Atomic Propositions:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>&quot;4 is a prime number&quot;
                    <ul className="list-circle ml-6 mt-1">
                      <li>Truth value: False</li>
                      <li>Cannot be derived from other propositions</li>
                      <li>Stands as a complete statement</li>
                    </ul>
                  </li>
                  <li>&quot;New Delhi is the capital of India&quot;
                    <ul className="list-circle ml-6 mt-1">
                      <li>Truth value: True</li>
                      <li>Independent of other statements</li>
                      <li>Basic, indivisible proposition</li>
                    </ul>
                  </li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Representation:</p>
                <ul className="list-disc ml-6">
                  <li>Usually denoted by a single Boolean variable (p, q, r, etc.)</li>
                  <li>Can only have one truth value (True or False)</li>
                  <li>Forms the basic building block of logical expressions</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Compound Propositions">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>A compound proposition is formed by combining atomic propositions using logical connectives.</p>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Formation Rules:</p>
                <ul className="list-disc ml-6">
                  <li>Created using logical connectives (AND, OR, NOT, etc.)</li>
                  <li>Must follow proper syntax and grammar</li>
                  <li>Truth value depends on component propositions</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Examples with Logical Connectives:</p>
                <p className="mt-2">Let:</p>
                <ul className="list-disc ml-6">
                  <li>P:&quot;4 is a prime number&quot;</li>
                  <li>Q:&quot;New Delhi is the capital of India&quot;</li>
                </ul>
                <p className="mt-2">Compound Propositions:</p>
                <ol className="list-decimal ml-6 space-y-2">
                  <li>&quot;4 is a prime number AND New Delhi is the capital of India&quot; (P ∧ Q)</li>
                  <li>&quot;4 is NOT a prime number&quot; (¬P)</li>
                  <li>&quot;New Delhi is the capital of India OR 4 is not a prime number&quot; (Q ∨ ¬P)</li>
                </ol>
              </div>
            </div>
          </SubSection>

          <SubSection title="Standard Logical Connectives">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Basic Connectives:</p>
                <ul className="list-disc ml-6 space-y-3">
                  <li>NOT (¬)
                    <p className="ml-4 text-sm">Negation of a proposition</p>
                  </li>
                  <li>AND (∧)
                    <p className="ml-4 text-sm">Conjunction of propositions</p>
                  </li>
                  <li>OR (∨)
                    <p className="ml-4 text-sm">Disjunction of propositions</p>
                  </li>
                  <li>Exclusive OR (⊕)
                    <p className="ml-4 text-sm">True when propositions have different truth values</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Advanced Connectives:</p>
                <ul className="list-disc ml-6 space-y-3">
                  <li>Implication (→)
                    <p className="ml-4 text-sm">If-then relationship</p>
                  </li>
                  <li>Biimplication (↔)
                    <p className="ml-4 text-sm">If and only if (equivalence)</p>
                  </li>
                  <li>NAND (↑)
                    <p className="ml-4 text-sm">NOT of AND operation</p>
                  </li>
                  <li>NOR (↓)
                    <p className="ml-4 text-sm">NOT of OR operation</p>
                  </li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Properties of Compound Propositions">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Associative Properties:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>(a + b) + c = a + (b + c)</li>
                  <li>AND and OR operations are associative</li>
                </ul>
              </Card>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Commutative Properties:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>a + b = b + a</li>
                  <li>AND and OR operations are commutative</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Important Note:</p>
                <ul className="list-disc ml-6">
                  <li>The precedence of EXOR, NOR, NAND operators is not universally defined</li>
                  <li>Use parentheses to clarify order of operations</li>
                  <li>Consider expanding to simpler logical connectives when needed</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="4. Logical Connectives and Truth Values">
        <div className="space-y-6">
          <div className="mb-4">
            <p className="text-lg">Logical connectives combine atomic propositions to create compound propositions with precisely defined truth values.</p>
          </div>

          <SubSection title="Basic Logical Connectives">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Negation (NOT, ¬):</p>
                <ul className="list-disc ml-6">
                  <li>Reverses the truth value of a proposition</li>
                  <li>If p is true, ¬p is false</li>
                  <li>If p is false, ¬p is true</li>
                </ul>
                <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold">Example:</p>
                  <p>p:&quot;Today is Sunday&quot;</p>
                  <p>¬p:&quot;Today is not Sunday&quot;</p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Conjunction (AND, ∧):</p>
                <ul className="list-disc ml-6">
                  <li>True only when both propositions are true</li>
                  <li>False if either or both propositions are false</li>
                </ul>
                <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold">Truth Table:</p>
                  <table className="w-full mt-2 text-center">
                    <thead>
                      <tr>
                        <th>p</th>
                        <th>q</th>
                        <th>p ∧ q</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>T</td>
                        <td>T</td>
                        <td>T</td>
                      </tr>
                      <tr>
                        <td>T</td>
                        <td>F</td>
                        <td>F</td>
                      </tr>
                      <tr>
                        <td>F</td>
                        <td>T</td>
                        <td>F</td>
                      </tr>
                      <tr>
                        <td>F</td>
                        <td>F</td>
                        <td>F</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Disjunction (OR, ∨):</p>
                <ul className="list-disc ml-6">
                  <li>True when at least one proposition is true</li>
                  <li>False only when both propositions are false</li>
                </ul>
                <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold">Truth Table:</p>
                  <table className="w-full mt-2 text-center">
                    <thead>
                      <tr>
                        <th>p</th>
                        <th>q</th>
                        <th>p ∨ q</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>T</td>
                        <td>T</td>
                        <td>T</td>
                      </tr>
                      <tr>
                        <td>T</td>
                        <td>F</td>
                        <td>T</td>
                      </tr>
                      <tr>
                        <td>F</td>
                        <td>T</td>
                        <td>T</td>
                      </tr>
                      <tr>
                        <td>F</td>
                        <td>F</td>
                        <td>F</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Advanced Logical Connectives">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Implication (→):</p>
                <ul className="list-disc ml-6">
                  <li>Represents&quot;if p then q&quot;</li>
                  <li>False only when p is true and q is false</li>
                  <li>True in all other cases</li>
                </ul>
                <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold">Alternative Expressions:</p>
                  <ul className="list-disc ml-6">
                    <li>&quot;p implies q&quot;</li>
                    <li>&quot;if p, then q&quot;</li>
                    <li>&quot;p only if q&quot;</li>
                    <li>&quot;q if p&quot;</li>
                    <li>&quot;q whenever p&quot;</li>
                  </ul>
                </div>
                <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold">Truth Table:</p>
                  <table className="w-full mt-2 text-center">
                    <thead>
                      <tr>
                        <th>p</th>
                        <th>q</th>
                        <th>p → q</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>T</td>
                        <td>T</td>
                        <td>T</td>
                      </tr>
                      <tr>
                        <td>T</td>
                        <td>F</td>
                        <td>F</td>
                      </tr>
                      <tr>
                        <td>F</td>
                        <td>T</td>
                        <td>T</td>
                      </tr>
                      <tr>
                        <td>F</td>
                        <td>F</td>
                        <td>T</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Biconditional (↔):</p>
                <ul className="list-disc ml-6">
                  <li>Represents&quot;p if and only if q&quot;</li>
                  <li>True when p and q have the same truth value</li>
                  <li>Equivalent to (p → q) ∧ (q → p)</li>
                </ul>
                <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded">
                  <p className="font-semibold">Alternative Expressions:</p>
                  <ul className="list-disc ml-6">
                    <li>&quot;p iff q&quot;</li>
                    <li>&quot;p is necessary and sufficient for q&quot;</li>
                    <li>&quot;if p then q, and conversely&quot;</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">NAND and NOR:</p>
                <ul className="list-disc ml-6">
                  <li>NAND (↑): Negation of AND</li>
                  <li>NOR (↓): Negation of OR</li>
                  <li>These operators are functionally complete</li>
                </ul>
                <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded">
                  <p>Any logical expression can be written using only NAND or only NOR operations.</p>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Properties of Logical Connectives">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Associative Properties:</p>
                <ul className="list-disc ml-6">
                  <li>(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)</li>
                  <li>(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Commutative Properties:</p>
                <ul className="list-disc ml-6">
                  <li>p ∧ q ≡ q ∧ p</li>
                  <li>p ∨ q ≡ q ∨ p</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Distributive Properties:</p>
                <ul className="list-disc ml-6">
                  <li>p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)</li>
                  <li>p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="5. Case Method and Logical Equivalence">
        <div className="space-y-6">
          <SubSection title="Case Method">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>The case method is a systematic approach to evaluate logical expressions by:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Assigning specific truth values to one variable</li>
                  <li>Checking truth values of the entire expression</li>
                  <li>Avoiding the need to draw complete truth tables</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Example:</p>
                <p>Consider the expression: p ∧ ¬(q ∨ p)</p>
                <div className="mt-2">
                  <p className="font-semibold">Case 1: When p is true:</p>
                  <ul className="list-disc ml-6">
                    <li>p ∧ ¬(q ∨ T)</li>
                    <li>= T ∧ ¬(q ∨ T)</li>
                    <li>= T ∧ ¬(T)</li>
                    <li>= T ∧ F</li>
                    <li>= F</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Case 2: When p is false:</p>
                  <ul className="list-disc ml-6">
                    <li>F ∧ ¬(q ∨ F)</li>
                    <li>= F</li>
                  </ul>
                </div>
                <p className="mt-4">Conclusion: The expression is a contradiction (always false)</p>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Logical Equivalence">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>Two propositions are logically equivalent (P ≡ Q) if they have the same truth value under all possible interpretations.</p>
              </div>

              <div className="space-y-4 mt-4">
                <p className="font-semibold">Key Equivalence Laws:</p>
                
                <Card className="p-4">
                  <p className="font-semibold">1. Identity Laws:</p>
                  <ul className="list-disc ml-6">
                    <li>p ∧ T ≡ p</li>
                    <li>p ∨ F ≡ p</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">2. Domination Laws:</p>
                  <ul className="list-disc ml-6">
                    <li>p ∨ T ≡ T</li>
                    <li>p ∧ F ≡ F</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">3. Idempotent Laws:</p>
                  <ul className="list-disc ml-6">
                    <li>p ∨ p ≡ p</li>
                    <li>p ∧ p ≡ p</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">4. Double Negation Law:</p>
                  <ul className="list-disc ml-6">
                    <li>¬(¬p) ≡ p</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">5. Commutative Laws:</p>
                  <ul className="list-disc ml-6">
                    <li>p ∨ q ≡ q ∨ p</li>
                    <li>p ∧ q ≡ q ∧ p</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">6. Associative Laws:</p>
                  <ul className="list-disc ml-6">
                    <li>(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)</li>
                    <li>(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">7. Distributive Laws:</p>
                  <ul className="list-disc ml-6">
                    <li>p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)</li>
                    <li>p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">8. De Morgan&apos;s Laws:</p>
                  <ul className="list-disc ml-6">
                    <li>¬(p ∧ q) ≡ ¬p ∨ ¬q</li>
                    <li>¬(p ∨ q) ≡ ¬p ∧ ¬q</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">9. Absorption Laws:</p>
                  <ul className="list-disc ml-6">
                    <li>p ∨ (p ∧ q) ≡ p</li>
                    <li>p ∧ (p ∨ q) ≡ p</li>
                  </ul>
                </Card>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mt-6">
                <p className="font-semibold">Important Notes:</p>
                <ul className="list-disc ml-6">
                  <li>If you need to check if two formulas are equivalent, you can:
                    <ul className="list-circle ml-6 mt-1">
                      <li>Compare their truth tables</li>
                      <li>Use the laws of logical equivalence</li>
                      <li>Try to find a counterexample</li>
                    </ul>
                  </li>
                  <li>Logical equivalence is different from implication:
                    <ul className="list-circle ml-6 mt-1">
                      <li>P ≡ Q means P ↔ Q is a tautology</li>
                      <li>P → Q means Q is true whenever P is true</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Example of Proving Equivalence:</p>
                <p>Show that ¬(p ∨ q) ≡ ¬p ∧ ¬q using the case method:</p>
                <div className="mt-2 ml-4">
                  <p>Case 1: p true, q true → Both sides F</p>
                  <p>Case 2: p true, q false → Both sides F</p>
                  <p>Case 3: p false, q true → Both sides F</p>
                  <p>Case 4: p false, q false → Both sides T</p>
                  <p className="mt-2">Therefore, the expressions are logically equivalent.</p>
                </div>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="6. English to Propositional Logic Translation">
        <div className="space-y-6">
          <p className="text-lg">Converting English statements to propositional logic requires understanding common patterns and logical relationships. This process is crucial for formalizing mathematical proofs and computer programming logic.</p>

          <SubSection title="Logical Equivalences in English">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Equivalent Words for AND:</p>
                <ul className="list-disc ml-6">
                  <li>But</li>
                  <li>Although</li>
                  <li>Though</li>
                  <li>Even though</li>
                  <li>However</li>
                  <li>Yet</li>
                  <li>Still</li>
                  <li>Moreover</li>
                  <li>Nevertheless</li>
                  <li>Nonetheless</li>
                  <li>Comma (,)</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="The 'Unless' Construction">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Rule:</p>
                <ul className="list-disc ml-6">
                  <li>&quot;Unless P, Q&quot; translates to&quot;¬P → Q&quot; or&quot;P ∨ Q&quot;</li>
                  <li>&quot;P unless Q&quot; translates to&quot;P if not Q&quot; =&quot;¬Q → P&quot; =&quot;Q ∨ P&quot;</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Example 1:</p>
                <p>&quot;Jen won&apos;t go to the party UNLESS Mary goes to the party&quot;</p>
                <div className="ml-4 mt-2">
                  <p>Let:</p>
                  <ul className="list-disc ml-6">
                    <li>p =&quot;Jen won&apos;t go to the party&quot;</li>
                    <li>q =&quot;Mary goes to the party&quot;</li>
                  </ul>
                  <p className="mt-2">Translation: ¬q → p</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Example 2:</p>
                <p>&quot;I won&apos;t study UNLESS you complete my demand&quot;</p>
                <div className="ml-4 mt-2">
                  <p>Let:</p>
                  <ul className="list-disc ml-6">
                    <li>p =&quot;I won&apos;t study&quot;</li>
                    <li>q =&quot;you complete my demand&quot;</li>
                  </ul>
                  <p className="mt-2">Translation: ¬q → p</p>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Complex Statement Translation">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Important Rule:</p>
                <p>When translating complex statements, consider the natural flow of English rather than strictly applying precedence rules.</p>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Example:</p>
                <p>&quot;If you study well, you will crack GATE exam unless you make silly mistakes.&quot;</p>
                <div className="ml-4 mt-2">
                  <p>Let:</p>
                  <ul className="list-disc ml-6">
                    <li>p =&quot;you study well&quot;</li>
                    <li>q =&quot;you will crack GATE exam&quot;</li>
                    <li>r =&quot;you make silly mistakes&quot;</li>
                  </ul>
                  <p className="mt-2">Translation: (p → q) ∨ r</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Note: We take&quot;if you study well, you will crack GATE exam&quot; as the first unit because it forms a complete thought in English.
                  </p>
                </div>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Common Patterns">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <p className="font-semibold">Conditional Statements:</p>
                  <ul className="list-disc ml-6">
                    <li>&quot;if p then q&quot; → p → q</li>
                    <li>&quot;p implies q&quot; → p → q</li>
                    <li>&quot;p only if q&quot; → p → q</li>
                    <li>&quot;q if p&quot; → p → q</li>
                    <li>&quot;q when p&quot; → p → q</li>
                    <li>&quot;q whenever p&quot; → p → q</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">Biconditional Statements:</p>
                  <ul className="list-disc ml-6">
                    <li>&quot;p if and only if q&quot; → p ↔ q</li>
                    <li>&quot;p exactly when q&quot; → p ↔ q</li>
                    <li>&quot;p is necessary and sufficient for q&quot; → p ↔ q</li>
                    <li>&quot;p iff q&quot; → p ↔ q</li>
                  </ul>
                </Card>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Translation Strategy:</p>
                <ol className="list-decimal ml-6 space-y-2">
                  <li>Identify atomic propositions and assign variables</li>
                  <li>Identify main logical connectives</li>
                  <li>Follow the natural language structure</li>
                  <li>Build the formula incrementally</li>
                  <li>Verify the translation matches the original meaning</li>
                </ol>
              </div>
            </div>
          </SubSection>

          <SubSection title="Special Cases">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Necessary and Sufficient Conditions:</p>
                <ul className="list-disc ml-6">
                  <li>&quot;P is necessary for Q&quot; means&quot;Q → P&quot;</li>
                  <li>&quot;P is sufficient for Q&quot; means&quot;P → Q&quot;</li>
                  <li>&quot;P is necessary and sufficient for Q&quot; means&quot;P ↔ Q&quot;</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Example:</p>
                <p>&quot;Being Natural number is sufficient for Being integer number&quot;</p>
                <div className="ml-4 mt-2">
                  <ul className="list-disc ml-6">
                    <li>Let N =&quot;is a natural number&quot;</li>
                    <li>Let I =&quot;is an integer number&quot;</li>
                    <li>Translation: N → I</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    This is correct because every natural number is an integer, but not every integer is a natural number.
                  </p>
                </div>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="7. Logical Arguments and Valid Arguments">
        <div className="space-y-6">
          <div className="mb-4">
            <p className="text-lg">A logical argument is a sequence of propositions including premises (knowledge base/hypothesis/antecedents) and a conclusion.</p>
          </div>

          <SubSection title="Fundamental Concepts">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Structure of an Argument:</p>
                <ul className="list-disc ml-6">
                  <li>Premises: Given statements assumed to be true</li>
                  <li>Conclusion: Statement derived from premises</li>
                  <li>Inference Rules: Logical steps connecting premises to conclusion</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Example Argument:</p>
                <div className="ml-4">
                  <p className="font-medium">Premises:</p>
                  <ul className="list-disc ml-6">
                    <li>&quot;If it is raining, He&apos;ll take umbrella.&quot; (P → Q)</li>
                    <li>&quot;It is not raining.&quot; (¬P)</li>
                  </ul>
                  <p className="mt-2 font-medium">Conclusion:</p>
                  <p className="ml-6">&quot;He&apos;ll not take umbrella&quot; (¬Q)</p>
                </div>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Rules of Inference">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Standard Rules:</p>
                <div className="space-y-4 mt-2">
                  <div>
                    <p className="font-medium">1. Modus Ponens:</p>
                    <div className="ml-6 border-l-2 pl-4 mt-1">
                      <p>P</p>
                      <p>P → Q</p>
                      <div className="border-t w-12 my-1"></div>
                      <p>∴ Q</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">2. Modus Tollens:</p>
                    <div className="ml-6 border-l-2 pl-4 mt-1">
                      <p>¬Q</p>
                      <p>P → Q</p>
                      <div className="border-t w-12 my-1"></div>
                      <p>∴ ¬P</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">3. Hypothetical Syllogism:</p>
                    <div className="ml-6 border-l-2 pl-4 mt-1">
                      <p>P → Q</p>
                      <p>Q → R</p>
                      <div className="border-t w-12 my-1"></div>
                      <p>∴ P → R</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">4. Disjunctive Syllogism:</p>
                    <div className="ml-6 border-l-2 pl-4 mt-1">
                      <p>P ∨ Q</p>
                      <p>¬P</p>
                      <div className="border-t w-12 my-1"></div>
                      <p>∴ Q</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Validity and Truth">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Valid Argument:</p>
                <ul className="list-disc ml-6">
                  <li>An argument is valid if whenever all premises are true, the conclusion must also be true</li>
                  <li>Validity depends on the logical form, not the content</li>
                  <li>Can have false premises and still be valid</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">The Inference Symbol:</p>
                <div className="space-y-2 mt-2">
                  <p>P₁, P₂, P₃ hence C can be written as:</p>
                  <ul className="list-disc ml-6">
                    <li>P₁, P₂, P₃ |= C (semantic entailment)</li>
                    <li>P₁, P₂, P₃ ⊢ C (syntactic derivability)</li>
                  </ul>
                  <p className="mt-2 text-sm">An argument is valid iff (P₁ ∧ P₂ ∧ P₃ → C) is a Tautology</p>
                </div>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Common Fallacies">
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                <p className="font-semibold">Invalid Arguments:</p>
                <div className="space-y-4 mt-2">
                  <div>
                    <p className="font-medium">1. Fallacy of Affirming the Conclusion:</p>
                    <div className="ml-6 mt-1">
                      <p>((p → q) ∧ q) → p</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Invalid when p is false and q is true</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">2. Fallacy of Denying the Hypothesis:</p>
                    <div className="ml-6 mt-1">
                      <p>((p → q) ∧ ¬p) → ¬q</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Invalid when q is true and p is false</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Knowledge Base and Inference">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Knowledge Base (KB) Notation:</p>
                <p className="mt-2">KB |= y is equivalent to:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>KB infers y</li>
                  <li>KB entails y</li>
                  <li>KB implies y</li>
                  <li>y is a consequence of KB</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Example:</p>
                <div className="mt-2">
                  <p>Knowledge Base:</p>
                  <ul className="list-disc ml-6">
                    <li>&quot;All men are mortal&quot;</li>
                    <li>&quot;Socrates is a man&quot;</li>
                  </ul>
                  <p className="mt-2">Valid Inference:</p>
                  <p className="ml-6">&quot;Therefore, Socrates is mortal&quot;</p>
                </div>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="8. First Order Logic">
        <div className="space-y-6">
          <div className="mb-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <p className="font-semibold text-lg">Definition:</p>
              <p>First order logic (FOL), also known as:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Predicate calculus</li>
                <li>Predicate logic</li>
                <li>Quantificational logic</li>
              </ul>
            </div>
          </div>

          <SubSection title="Motivation for First Order Logic">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Example of Propositional Logic Limitations:</p>
                <div className="mt-2 space-y-2">
                  <p>Consider this valid argument:</p>
                  <div className="ml-4 pl-4 border-l-4 border-gray-300">
                    <p>&quot;All men are mortal.&quot;</p>
                    <p>&quot;Socrates is a man.&quot;</p>
                    <p>&quot;Therefore, Socrates is mortal.&quot;</p>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    This cannot be expressed adequately in propositional logic, showing its limitations.
                  </p>
                </div>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Problems with Propositional Logic:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Limited to true/false values only</li>
                  <li>Cannot assign numerical values to variables</li>
                  <li>Cannot express relationships between objects</li>
                  <li>Cannot represent quantification (all, some, none)</li>
                  <li>Limited expressive power for real-world scenarios</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Components of First Order Logic">
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">1. Objects (Domain)</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Set of values a variable can take (Universe)</li>
                  <li>Cannot be empty unless explicitly stated</li>
                  <li>Values in domain are called constants</li>
                  <div className="mt-2 ml-4 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    <p className="font-semibold">Example Domains:</p>
                    <ul className="list-disc ml-6">
                      <li>Set of all people</li>
                      <li>Set of natural numbers</li>
                      <li>Set of real numbers</li>
                    </ul>
                  </div>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">2. Predicates (Properties and Relationships)</p>
                <div className="space-y-4">
                  <div className="mt-2">
                    <p className="font-semibold">Types of Predicates:</p>
                    <div className="ml-4">
                      <p className="font-semibold mt-2">Unary Predicates:</p>
                      <ul className="list-disc ml-6">
                        <li>C(x):&quot;x is clever&quot;</li>
                        <li>M(x):&quot;x is male&quot;</li>
                      </ul>
                      
                      <p className="font-semibold mt-2">Binary Predicates:</p>
                      <ul className="list-disc ml-6">
                        <li>F(x,y):&quot;x is father of y&quot;</li>
                        <li>L(x,y):&quot;x is less than y&quot;</li>
                      </ul>
                      
                      <p className="font-semibold mt-2">Ternary Predicates:</p>
                      <ul className="list-disc ml-6">
                        <li>B(x,y,z):&quot;x is between y and z&quot;</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">3. Quantifiers</p>
                <div className="space-y-4">
                  <div className="mt-2">
                    <p className="font-semibold">Universal Quantifier (∀):</p>
                    <ul className="list-disc ml-6">
                      <li>&quot;For all&quot; or&quot;For every&quot;</li>
                      <li>∀x P(x) means&quot;P(x) is true for all values of x&quot;</li>
                      <li>False if there exists a counterexample</li>
                    </ul>
                    
                    <p className="font-semibold mt-4">Existential Quantifier (∃):</p>
                    <ul className="list-disc ml-6">
                      <li>&quot;There exists&quot; or&quot;For some&quot;</li>
                      <li>∃x P(x) means&quot;There exists an x such that P(x) is true&quot;</li>
                      <li>True if there is at least one witness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Special Cases and Behavior">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Empty Domain Behavior:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>∀x P(x) is vacuously true (no counterexamples possible)</li>
                  <li>∃x P(x) is false (no witnesses possible)</li>
                  <li className="text-red-600 dark:text-red-400">Important: Domain is always non-empty unless explicitly stated</li>
                </ul>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">No Free Variables:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>If P has no free variable x, then:</li>
                  <ul className="list-circle ml-6">
                    <li>∃x P ≡ P</li>
                    <li>∀x P ≡ P</li>
                  </ul>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Formula Structure:</p>
                <p className="mt-2">First order logic = </p>
                <ul className="list-disc ml-6">
                  <li>Propositional logic</li>
                  <li>+ Objects (Domain)</li>
                  <li>+ Properties (Predicates)</li>
                  <li>+ Multiple objects (Quantifiers)</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Key Differences from Propositional Logic">
            <div className="space-y-4">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border p-2">Feature</th>
                    <th className="border p-2">Propositional Logic</th>
                    <th className="border p-2">First Order Logic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Variables</td>
                    <td className="border p-2">Only truth values</td>
                    <td className="border p-2">Can represent objects</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Relationships</td>
                    <td className="border p-2">Cannot express</td>
                    <td className="border p-2">Can express via predicates</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Quantification</td>
                    <td className="border p-2">Not possible</td>
                    <td className="border p-2">Possible (∀, ∃)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Expressive Power</td>
                    <td className="border p-2">Limited</td>
                    <td className="border p-2">Much greater</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="9. Quantifiers and Their Properties">
        <div className="space-y-6">
          <p className="text-lg mb-4">Quantifiers are fundamental logical operators that express quantities or amounts in logical statements.</p>

          <SubSection title="Universal Quantifier (∀)">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>The universal quantification of P(x) is a proposition stating&quot;P(x) is true for all values of x in the universe of discourse&quot;</p>
                <div className="mt-2">
                  <p>Notation:</p>
                  <ul className="list-disc ml-6">
                    <li>&quot;For all x P(x)&quot; or&quot;For every x P(x)&quot;</li>
                    <li>Written as: ∀x P(x)</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Properties:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>False if there is a counterexample</li>
                  <li>For finite domain {'{a,b,c,d}'}, ∀x P(x) means P(a) ∧ P(b) ∧ P(c) ∧ P(d)</li>
                  <li>∀ acts like conjunction over finite domains</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Example:</p>
                <p>Domain: Natural numbers</p>
                <p>P(x):&quot;x ≥ 0&quot;</p>
                <p>∀x P(x) means&quot;All natural numbers are greater than or equal to 0&quot;</p>
                <p className="mt-2 text-green-600 dark:text-green-400">This is true as every natural number satisfies this property</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Existential Quantifier (∃)">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>The Existential Quantification of P(x) is a proposition stating&quot;There exists an element x in the universe of discourse such that P(x) is true&quot;</p>
                <div className="mt-2">
                  <p>Notation:</p>
                  <ul className="list-disc ml-6">
                    <li>&quot;There exists x such that P(x)&quot;</li>
                    <li>&quot;There is at least one x such that P(x)&quot;</li>
                    <li>Written as: ∃x P(x)</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Properties:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>True if there is at least one witness</li>
                  <li>For finite domain {'{a,b,c,d}'}, ∃x P(x) means P(a) ∨ P(b) ∨ P(c) ∨ P(d)</li>
                  <li>∃ acts like disjunction over finite domains</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Special Cases and Empty Domains">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Empty Domain Behavior:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>∀x P(x) is TRUE (vacuously true as there are no counterexamples)</li>
                  <li>∃x P(x) is FALSE (no elements exist to be witnesses)</li>
                  <li>Important: Domain is always non-empty unless explicitly stated</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">No Free Variables:</p>
                <p>If&quot;A&quot; doesn&apos;t have any free variable x then:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>∃x A = A</li>
                  <li>∀x A = A</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Nested Quantifiers">
            <div className="space-y-4">
              <p>Many interesting statements require combinations of quantifiers.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <p className="font-semibold">∀x ∀y P(x,y)</p>
                  <p className="mt-2">For every value of x and for every value of y, P(x,y) is true</p>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">∀x ∃y P(x,y)</p>
                  <p className="mt-2">For every x there exists a y (possibly different for each x) such that P(x,y) is true</p>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">∃x ∀y P(x,y)</p>
                  <p className="mt-2">There exists an x such that for all y, P(x,y) is true</p>
                </Card>

                <Card className="p-4">
                  <p className="font-semibold">∃x ∃y P(x,y)</p>
                  <p className="mt-2">There exists an x and a y such that P(x,y) is true</p>
                </Card>
              </div>

              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg mt-4">
                <p className="font-semibold">Important Note:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Order matters for different quantifiers (∀x ∃y ≠ ∃y ∀x)</li>
                  <li>Same quantifiers can be reordered (∀x ∀y = ∀y ∀x)</li>
                  <li>Quantifiers must be read from left to right</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Negation of Quantifiers">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Rules:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>¬(∀x P(x)) ≡ ∃x ¬P(x)</li>
                  <li>¬(∃x P(x)) ≡ ∀x ¬P(x)</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Example:</p>
                <p>Statement:&quot;All students are clever&quot;</p>
                <p>∀x (Student(x) → Clever(x))</p>
                <p className="mt-2">Negation:&quot;There exists a student who is not clever&quot;</p>
                <p>∃x (Student(x) ∧ ¬Clever(x))</p>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Uniqueness Quantifier">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>∃!x P(x) means&quot;there exists exactly one x such that P(x)&quot;</p>
                <p className="mt-2">Equivalent to:</p>
                <p>∃x (P(x) ∧ ∀y (P(y) → x = y))</p>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Negation of Uniqueness:</p>
                <p>¬(∃!x P(x)) ≡ ∀x ¬P(x) ∨ ∃x∃y(x ≠ y ∧ P(x) ∧ P(y))</p>
                <p className="mt-2">Meaning: Either no element satisfies P, or at least two elements satisfy P</p>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="10. Interpretation and Models in Logic">
        <div className="space-y-6">
          <SubSection title="Interpretation and Models in Propositional Logic">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Interpretation Definition:</p>
                <p>An interpretation I assigns a truth value to each atomic proposition.</p>
                
                <div className="mt-4">
                  <p className="font-semibold">For a propositional formula G:</p>
                  <ul className="list-disc ml-6">
                    <li>Interpretation assigns True or False to each variable</li>
                    <li>Total possible interpretations = 2ⁿ (n = number of variables)</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Example:</p>
                <p>Consider formula G with variables a, b, c</p>
                <p className="mt-2">Sample interpretation I₁:</p>
                <ul className="list-disc ml-6">
                  <li>a = True</li>
                  <li>b = False</li>
                  <li>c = False</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Models:</p>
                <p>A model is an interpretation that makes the formula true.</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>If system has n variables and expression uses m variables:</li>
                  <li>Total models = 2⁽ⁿ⁻ᵐ⁾ × P (where P = number of satisfying assignments)</li>
                  <li>Co-model: An interpretation where the formula is false</li>
                  <li>Interpretation = Model + Co-model</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Interpretation and Models in First-Order Logic">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Components of Interpretation:</p>
                <ul className="list-disc ml-6">
                  <li>Domain (non-empty universe of discourse)</li>
                  <li>Assignment of predicates</li>
                  <li>Mapping of function symbols</li>
                  <li>Assignment of constant symbols to domain elements</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Example:</p>
                <p>For formula G: ∀x P(x)</p>
                <p className="mt-2">An interpretation includes:</p>
                <ul className="list-disc ml-6">
                  <li>Domain (e.g., set of natural numbers)</li>
                  <li>Meaning of P(x) (e.g.,&quot;x is even&quot;)</li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Models in First-Order Logic:</p>
                <ul className="list-disc ml-6">
                  <li>Finite model: Model with finite domain</li>
                  <li>Infinite model: Model with infinite domain</li>
                  <li>Valid formula: True under all interpretations (no co-models)</li>
                  <li>Satisfiable formula: Has at least one model</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Key Concepts and Comparisons">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Important Distinctions:</p>
                <div className="overflow-x-auto">
                  <table className="w-full mt-2">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="px-4 py-2 text-left">Term</th>
                        <th className="px-4 py-2 text-left">Propositional Logic</th>
                        <th className="px-4 py-2 text-left">First-Order Logic</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Valid</td>
                        <td className="border px-4 py-2">There exists a model</td>
                        <td className="border px-4 py-2">There is no co-model</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Satisfiable</td>
                        <td className="border px-4 py-2">There exists a model</td>
                        <td className="border px-4 py-2">There exists a model</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Unsatisfiable</td>
                        <td className="border px-4 py-2">There is no model</td>
                        <td className="border px-4 py-2">There is no model</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Tautology</td>
                        <td className="border px-4 py-2">There is no co-model</td>
                        <td className="border px-4 py-2">Special definition*</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Contradiction</td>
                        <td className="border px-4 py-2">There is no model</td>
                        <td className="border px-4 py-2">There is no model</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-sm">*A tautology in first-order logic is a sentence obtained by replacing propositional variables in a propositional tautology with first-order formulas.</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold">Special Cases and Considerations:</p>
                <ul className="list-disc ml-6">
                  <li>Empty domain interpretations are typically not allowed unless explicitly specified</li>
                  <li>Unique names assumption: Different constants denote different elements</li>
                  <li>Closed world assumption: Facts not explicitly stated are false</li>
                  <li>Domain closure: Domain contains only elements that must exist</li>
                </ul>
              </div>

              <Card className="p-4 mt-4">
                <p className="font-semibold">Knowledge Base (KB) Interpretation:</p>
                <p>For a set of logical expressions KB = {'{E₁, E₂, E₃, ..., Eₙ}'}</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>A model must satisfy all expressions in KB</li>
                  <li>KB |= α means α is true in all models of KB</li>
                  <li>KB is consistent if it has at least one model</li>
                  <li>KB is inconsistent if it has no models</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>
    </div>
  );
};

export default MathLogicNotes;