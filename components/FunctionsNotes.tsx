'use client';
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FunctionVisualizationProps {
    type: 'injective' | 'surjective' | 'bijective';
  }
  
  const FunctionVisualization: React.FC<FunctionVisualizationProps> = ({ type }) => {
    const baseProps = {
      width: "100%",
      height: "300",
      className: "mt-4",
      style: { maxWidth: "600px" }
    };
  
    const commonStyles = {
      labelStyle: {
        fontSize: 20,
        fontFamily: "system-ui",
        textAnchor: "middle"
      },
      dotStyle: {
        r: 15
      }
    };
  
    if (type === "injective") {
      return (
        <svg {...baseProps} viewBox="0 0 600 360">
          <text x="300" y="40" textAnchor="middle" fontSize="24" fontFamily="system-ui">One-to-One (Injective)</text>
          
          {/* Domain container */}
          <rect x="100" y="80" width="140" height="180" rx="20" fill="#f0f7ff"/>
          <text x="170" y="110" {...commonStyles.labelStyle}>Domain</text>
          
          {/* Domain dots */}
          <circle cx="170" cy="140" fill="#1976d2" {...commonStyles.dotStyle}/>
          <circle cx="170" cy="190" fill="#1976d2" {...commonStyles.dotStyle}/>
          <circle cx="170" cy="240" fill="#1976d2" {...commonStyles.dotStyle}/>
          
          {/* Codomain container - taller to include the extra dot */}
          <rect x="360" y="80" width="140" height="230" rx="20" fill="#f0fdf4"/>
          <text x="430" y="110" {...commonStyles.labelStyle}>Codomain</text>
          
          {/* Codomain dots */}
          <circle cx="430" cy="140" fill="#388e3c" {...commonStyles.dotStyle}/>
          <circle cx="430" cy="190" fill="#388e3c" {...commonStyles.dotStyle}/>
          <circle cx="430" cy="240" fill="#388e3c" {...commonStyles.dotStyle}/>
          <circle cx="430" cy="290" fill="#388e3c" {...commonStyles.dotStyle}/>
          
          {/* Arrows */}
          <path d="M185 140 L415 140" stroke="#2196f3" strokeWidth="2"/>
          <path d="M185 190 L415 190" stroke="#2196f3" strokeWidth="2"/>
          <path d="M185 240 L415 240" stroke="#2196f3" strokeWidth="2"/>
        </svg>
      );
    }
  
    if (type === "surjective") {
      return (
        <svg {...baseProps} viewBox="0 0 600 360">
          <text x="300" y="40" textAnchor="middle" fontSize="24" fontFamily="system-ui">Onto (Surjective)</text>
          
          {/* Domain container - taller for extra dot */}
          <rect x="100" y="80" width="140" height="230" rx="20" fill="#f0f7ff"/>
          <text x="170" y="110" {...commonStyles.labelStyle}>Domain</text>
          
          {/* Domain dots */}
          <circle cx="170" cy="140" fill="#1976d2" {...commonStyles.dotStyle}/>
          <circle cx="170" cy="190" fill="#1976d2" {...commonStyles.dotStyle}/>
          <circle cx="170" cy="240" fill="#1976d2" {...commonStyles.dotStyle}/>
          <circle cx="170" cy="290" fill="#1976d2" {...commonStyles.dotStyle}/>
          
          {/* Codomain container */}
          <rect x="360" y="80" width="140" height="180" rx="20" fill="#f0fdf4"/>
          <text x="430" y="110" {...commonStyles.labelStyle}>Codomain</text>
          
          {/* Codomain dots */}
          <circle cx="430" cy="140" fill="#388e3c" {...commonStyles.dotStyle}/>
          <circle cx="430" cy="190" fill="#388e3c" {...commonStyles.dotStyle}/>
          <circle cx="430" cy="240" fill="#388e3c" {...commonStyles.dotStyle}/>
          
          {/* Arrows */}
          <path d="M185 140 L415 140" stroke="#2196f3" strokeWidth="2"/>
          <path d="M185 190 L415 190" stroke="#2196f3" strokeWidth="2"/>
          <path d="M185 240 L415 190" stroke="#2196f3" strokeWidth="2"/>
          <path d="M185 290 L415 240" stroke="#2196f3" strokeWidth="2"/>
        </svg>
      );
    }
  
    if (type === "bijective") {
      return (
        <svg {...baseProps} viewBox="0 0 600 300">
          <text x="300" y="40" textAnchor="middle" fontSize="24" fontFamily="system-ui">Bijective</text>
          
          {/* Domain container */}
          <rect x="100" y="80" width="140" height="180" rx="20" fill="#f0f7ff"/>
          <text x="170" y="110" {...commonStyles.labelStyle}>Domain</text>
          
          {/* Domain dots */}
          <circle cx="170" cy="140" fill="#1976d2" {...commonStyles.dotStyle}/>
          <circle cx="170" cy="190" fill="#1976d2" {...commonStyles.dotStyle}/>
          <circle cx="170" cy="240" fill="#1976d2" {...commonStyles.dotStyle}/>
          
          {/* Codomain container */}
          <rect x="360" y="80" width="140" height="180" rx="20" fill="#f0fdf4"/>
          <text x="430" y="110" {...commonStyles.labelStyle}>Codomain</text>
          
          {/* Codomain dots */}
          <circle cx="430" cy="140" fill="#388e3c" {...commonStyles.dotStyle}/>
          <circle cx="430" cy="190" fill="#388e3c" {...commonStyles.dotStyle}/>
          <circle cx="430" cy="240" fill="#388e3c" {...commonStyles.dotStyle}/>
          
          {/* Arrows */}
          <path d="M185 140 L415 140" stroke="#2196f3" strokeWidth="2"/>
          <path d="M185 190 L415 190" stroke="#2196f3" strokeWidth="2"/>
          <path d="M185 240 L415 240" stroke="#2196f3" strokeWidth="2"/>
        </svg>
      );
    }
  };

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

const FunctionNotes: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Section title="1. Introduction to Functions">
        <div className="space-y-4">
          <p className="text-lg">A function is a special type of relation from set A to set B, written as R: A → B, where R ⊆ A × B. A binary relation R from A to B is a function if for every element a in A, there is a unique element b in B so that (a, b) is in R.</p>
          
          <SubSection title="Basic Function Requirements">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Two Essential Rules:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>No element of the domain must be left unmapped</li>
                  <li>No element of the domain may map to more than one element of the codomain</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Key Terms:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Domain (A): The set of input values</li>
                  <li>Codomain (B): The set of possible output values</li>
                  <li>Range: The actual output values used by the function</li>
                  <li>Image: For a function R(a) = b, b is called the image of a</li>
                  <li>Preimage: For a function R(a) = b, a is called the preimage of b</li>
                </ul>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Function Categories:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Real valued function: Function whose codomain = R (real numbers)</li>
                  <li>Integer valued function: Function whose codomain = Z (integers)</li>
                  <li>Natural valued function: Function whose codomain = N (natural numbers)</li>
                  <li>Boolean valued function: Function whose codomain = {'{0, 1}'}</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Set Representation">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Function as a Set:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Since a function is a relation, it can be represented as a set of ordered pairs</li>
                  <li>For example: R = {'{(a,α), (b,γ), (c,γ), (d,β), (e,β)}'}</li>
                  <li>As a relation is a subset of A × B, we can apply set operations (union, intersection, difference) to create new relations</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Notation Conventions:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Function mapping: R: A → B</li>
                  <li>Function application: R(a) = b or (a,b) ∈ R</li>
                  <li>Image of subset: For S ⊆ A, R(S) represents the set of all images of elements in S</li>
                  <li>Set membership: R ⊆ A × B indicates R is a subset of the Cartesian product</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Special Properties">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Operations with Functions:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Two real-valued functions with the same domain can be added to create a new function</li>
                  <li>Two integer-valued functions with the same domain can be added to create a new function</li>
                  <li>Functions with the same domain type can be multiplied to create a new function</li>
                  <li>The domain of the resulting function is the intersection of the domains of the original functions</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Important Visualizations:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Arrow diagrams: Show mappings between elements of domain and codomain</li>
                  <li>Set notation: Express function as a set of ordered pairs</li>
                  <li>Tables: Display input-output relationships</li>
                  <li>Graphs: Represent functions geometrically (for real-valued functions)</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="2. Number of Functions">
        <div className="space-y-4">
          <p className="text-lg">When counting possible functions between two sets, we need to consider all valid mappings that satisfy the function requirements.</p>
          
          <SubSection title="Counting Basics">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Formula:</p>
                <p>Number of possible functions = |codomain|^|domain|</p>
                <p className="mt-2">where:</p>
                <ul className="list-disc ml-6">
                  <li>|codomain| is the size of the codomain</li>
                  <li>|domain| is the size of the domain</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Example 1:</p>
                <p>For A = {'{1, 2}'} and B = {'{a, b}'}</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>|codomain| = 2</li>
                  <li>|domain| = 2</li>
                  <li>Number of functions = 2² = 4 possible functions</li>
                  <li>The four possible functions are:</li>
                  <ul className="list-circle ml-6">
                    <li>f₁: 1→a, 2→a</li>
                    <li>f₂: 1→a, 2→b</li>
                    <li>f₃: 1→b, 2→a</li>
                    <li>f₄: 1→b, 2→b</li>
                  </ul>
                </ul>
              </Card>

              <Card className="p-4">
                <p className="font-semibold">Example 2:</p>
                <p>For a 2-element set mapping to a 3-element set:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>|domain| = 2</li>
                  <li>|codomain| = 3</li>
                  <li>Number of functions = 3² = 9 possible functions</li>
                  <li>Each element in the domain can map to any of the three elements in codomain</li>
                </ul>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Important Notes:</p>
                <p>When counting functions with specific properties:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>For one-to-one functions: Each element must map to a different element
                    <ul className="list-circle ml-6">
                      <li>Possible only if |domain| ≤ |codomain|</li>
                    </ul>
                  </li>
                  <li>For onto functions: Every codomain element must be used
                    <ul className="list-circle ml-6">
                      <li>Possible only if |domain| ≥ |codomain|</li>
                    </ul>
                  </li>
                  <li>For bijective functions: |domain| must equal |codomain|</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="Function Operations">
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold">Operations on Functions:</p>
                <p>For functions with the same domain type:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Two real-valued functions can be:
                    <ul className="list-circle ml-6">
                      <li>Added to create a new function</li>
                      <li>Multiplied to create a new function</li>
                    </ul>
                  </li>
                  <li>Two integer-valued functions can be:
                    <ul className="list-circle ml-6">
                      <li>Added to create a new function</li>
                      <li>Multiplied to create a new function</li>
                    </ul>
                  </li>
                </ul>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Example of Function Operations:</p>
                <p>Given functions f, g: {'{1,2,3}'} → R where:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>f(x) = x²</li>
                  <li>g(x) = x + 1</li>
                  <li>(f + g)(x) = x² + x + 1</li>
                  <li>(f · g)(x) = x² · (x + 1)</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="3. Types of Functions">
    <div className="space-y-6">
      <p className="text-lg mb-4">There are three main types of functions, each with distinct properties and relationships between their domain and codomain.</p>

      <SubSection title="Injective (One-to-One) Functions">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Definition:</p>
            <p>A function f is injective (one-to-one) if:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Each element in the codomain is mapped to by at most one element in the domain</li>
              <li>If f(a) = f(b), then a = b</li>
              <li>Every element of domain maps to different distinct elements of codomain</li>
            </ul>
          </div>

          <Card className="p-4">
            <p className="font-semibold text-xl mb-2">Visual Representation:</p>
            <FunctionVisualization type="injective" />
            <p className="mt-6 mb-2">In this example:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Each domain element maps to a unique codomain element</li>
              <li>Some codomain elements may remain unmapped</li>
              <li>No two arrows point to the same element</li>
            </ul>
          </Card>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="font-semibold">Properties and Conditions:</p>
            <ul className="list-disc ml-6">
              <li>No two different elements in the domain map to the same element in the codomain</li>
              <li>Each element in the codomain is mapped to by at most one element</li>
              <li>|domain| ≤ |codomain| must be true for injection to be possible</li>
              <li>If |domain| &gt; |codomain|, one-to-one function is not possible</li>
            </ul>
          </div>
        </div>
      </SubSection>

      <SubSection title="Surjective (Onto) Functions">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Definition:</p>
            <p>A function f is surjective (onto) if:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Every element in the codomain is mapped to by at least one element in the domain</li>
              <li>The range equals the codomain</li>
              <li>Every element of codomain has at least one preimage</li>
            </ul>
          </div>

          <Card className="p-4">
            <p className="font-semibold text-xl mb-2">Visual Representation:</p>
            <FunctionVisualization type="surjective" />
            <p className="mt-6 mb-2">In this example:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Every codomain element has at least one arrow pointing to it</li>
              <li>Multiple domain elements can map to the same codomain element</li>
              <li>No codomain element is left unmapped</li>
            </ul>
          </Card>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
            <p className="font-semibold">Key Requirements:</p>
            <ul className="list-disc ml-6">
              <li>|domain| ≥ |codomain| must be true for surjection to be possible</li>
              <li>If |domain| &lt; |codomain|, onto function is not possible</li>
              <li>Multiple elements from domain can map to the same codomain element</li>
              <li>No codomain element can be left unmapped</li>
            </ul>
          </div>
        </div>
      </SubSection>

      <SubSection title="Bijective Functions">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="font-semibold">Definition:</p>
            <p>A function f is bijective if it is both injective and surjective, meaning:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Each element in the codomain is mapped to by exactly one element in the domain</li>
              <li>Creates a perfect one-to-one pairing between domain and codomain</li>
              <li>If R: A → B then |A| = |B| must be true</li>
            </ul>
          </div>

          <Card className="p-4">
            <p className="font-semibold text-xl mb-2">Visual Representation:</p>
            <FunctionVisualization type="bijective" />
            <p className="mt-6 mb-2">In this example:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Each domain element maps to exactly one codomain element</li>
              <li>Each codomain element is mapped to by exactly one domain element</li>
              <li>Perfect one-to-one correspondence between sets</li>
            </ul>
          </Card>

          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <p className="font-semibold">Essential Properties:</p>
            <ul className="list-disc ml-6">
              <li>Guarantees existence of an inverse function</li>
              <li>|domain| = |codomain| must be true</li>
              <li>Every element in domain maps to exactly one element in codomain</li>
              <li>Every element in codomain has exactly one preimage</li>
              <li>Function is both one-to-one and onto</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
            <p className="font-semibold">Size Relationships Summary:</p>
            <ul className="list-disc ml-6">
              <li>For injective (one-to-one): |domain| ≤ |codomain|</li>
              <li>For surjective (onto): |domain| ≥ |codomain|</li>
              <li>For bijective: |domain| = |codomain|</li>
            </ul>
          </div>
        </div>
      </SubSection>
    </div>
        </Section>

      <Section title="4. Function Composition">
        <div className="space-y-6">
          <SubSection title="Basic Composition">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>Composition is a relation operation that creates new relations transitively. For functions f: A → B and g: B → C, their composition g∘f: A → C is defined as:</p>
                <p className="mt-2">(g∘f)(x) = g(f(x))</p>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Requirements:</p>
                <ul className="list-disc ml-6">
                  <li>The codomain of f must equal the domain of g</li>
                  <li>Composition is read from right to left (first apply f, then g)</li>
                  <li>The domain of g∘f is the same as the domain of f</li>
                  <li>The codomain of g∘f is the same as the codomain of g</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Properties of Composition">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Fundamental Properties:</p>
                <ul className="list-disc ml-6">
                  <li>Composition is associative: (h∘g)∘f = h∘(g∘f)</li>
                  <li>Composition is not commutative: g∘f ≠ f∘g generally</li>
                  <li>If f and g are bijective, g∘f is bijective</li>
                  <li>If g∘f is injective, then f must be injective</li>
                  <li>If g∘f is surjective, then g must be surjective</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Necessary Conditions:</p>
                <p>For functions f: A → B and g: M → N to define g∘f:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>The codomain of f must equal the domain of g (B = M)</li>
                  <li>This ensures the output of f can be used as input for g</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Composition Examples">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">Example 1:</p>
                <p>Consider functions:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>f(x) = x²</li>
                  <li>g(x) = x + 1</li>
                  <li>(g∘f)(x) = g(f(x)) = g(x²) = x² + 1</li>
                  <li>(f∘g)(x) = f(g(x)) = f(x + 1) = (x + 1)²</li>
                </ul>
                <p className="mt-2">Note that (g∘f)(x) ≠ (f∘g)(x), demonstrating non-commutativity</p>
              </div>

              <Card className="p-4">
                <p className="font-semibold">As a Relation Operation:</p>
                <p>Since functions are special types of relations:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Composition creates new relations transitively</li>
                  <li>When composing relations R₁ and R₂, write as R₂∘R₁</li>
                  <li>First apply R₁, then apply R₂ to the result</li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Special Cases:</p>
                <ul className="list-disc ml-6">
                  <li>Identity function composition: f∘I = I∘f = f</li>
                  <li>Inverse function composition: f∘f⁻¹ = f⁻¹∘f = I (where I is the identity function)</li>
                  <li>Composition with itself: f∘f is often written as f²</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      </Section>

      <Section title="5. Inverse Functions">
        <div className="space-y-6">
          <SubSection title="Inverse Function Basics">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Definition:</p>
                <p>For a function f: A → B, its inverse function f⁻¹: B → A exists if and only if f is bijective.</p>
                <p className="mt-2">Properties:</p>
                <ul className="list-disc ml-6">
                  <li>f⁻¹(f(x)) = x for all x in A</li>
                  <li>f(f⁻¹(y)) = y for all y in B</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Requirements for Inverse:</p>
                <ul className="list-disc ml-6">
                  <li>Function must be bijective (both one-to-one and onto)</li>
                  <li>If f is not one-to-one, reverse of f is not a function (due to multiple preimages)</li>
                  <li>If f is not onto, reverse of f is not a function (due to missing preimages)</li>
                  <li>The inverse must create a valid function in the reverse direction</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Properties of Inverse Relations">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">For a binary relation δ ⊆ X × X:</p>
                <ul className="list-disc ml-6">
                  <li>δ ∘ δ⁻¹ = δ⁻¹ ∘ δ</li>
                  <li>If δ is transitive, δ⁻¹ is also transitive</li>
                  <li>If δ is antisymmetric, δ⁻¹ is also antisymmetric</li>
                  <li>δ⁻¹ is symmetric if δ is symmetric</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Example with Function Composition:</p>
                <ul className="list-disc ml-6">
                  <li>If h = g∘f, then h⁻¹ = f⁻¹∘g⁻¹ (when all inverses exist)</li>
                  <li>This shows that the inverse of a composition is the composition of the inverses in reverse order</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Examples and Special Cases">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="font-semibold">Important Example:</p>
                <p>Consider the function f: R → [0, ∞) where f(x) = x²</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>f is not one-to-one (both -1 and 1 map to 1)</li>
                  <li>f is onto [0, ∞) (every non-negative number has a square root)</li>
                  <li>f is not bijective, so it does not have an inverse function</li>
                  <li>However, √x is a partial inverse defined only on [0, ∞)</li>
                </ul>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Key Observations:</p>
                <ul className="list-disc ml-6">
                  <li>If X² = 25, then X = ±5 (two possible values)</li>
                  <li>If X = √25, then X = 5 only (codomain restricted to non-negative numbers)</li>
                  <li>This illustrates why we must be careful with inverse operations</li>
                  <li>Some functions may have restricted domains to make them invertible</li>
                </ul>
              </Card>
            </div>
          </SubSection>

          <SubSection title="Verification of Inverses">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="font-semibold">Steps to Verify an Inverse:</p>
                <ol className="list-decimal ml-6">
                  <li>Check if the function is one-to-one</li>
                  <li>Check if the function is onto</li>
                  <li>Verify that f⁻¹(f(x)) = x for all x in the domain</li>
                  <li>Verify that f(f⁻¹(y)) = y for all y in the codomain</li>
                </ol>
              </div>

              <Card className="p-4">
                <p className="font-semibold">Common Mistakes to Avoid:</p>
                <ul className="list-disc ml-6">
                  <li>Assuming every function has an inverse</li>
                  <li>Forgetting to check both one-to-one and onto properties</li>
                  <li>Not considering domain and codomain restrictions</li>
                  <li>Confusing inverse functions with inverse operations</li>
                </ul>
              </Card>
            </div>
          </SubSection>
        </div>
      </Section>
    </div>
  );
};

export default FunctionNotes;