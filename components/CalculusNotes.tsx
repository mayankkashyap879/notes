'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/Section';
import { SubSection } from '@/components/ui/SubSection';

const CalculusNotes: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <Section title="1. Limits">
                <div className="space-y-6">
                    {/* Basic Limit Formula */}
                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                        <p className="font-bold text-lg">Basic Limit Formulas:</p>
                        <div className="space-y-2">
                            <p>lim(n→∞)(1 + x/n)^(yn) = lim(n→0)(1 + xn)^(y/n) = e^(xy)</p>
                            <p>lim(n→a)f(n); lim(n→a)[f(n)/g(n)] = lim(n→a)f(n)/lim(n→a)g(n)</p>
                        </div>
                    </div>

                    {/* Trigonometric Formulas */}
                    <Card className="p-4">
                        <p className="font-semibold">Trigonometric Limit Formulas:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <div>
                                <p className="font-medium">Basic Limits:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>lim(x→0) sin(x)/x = 1</li>
                                    <li>lim(x→0) tan(x)/x = 1</li>
                                    <li>lim(x→0) sin⁻¹(x)/x = 1</li>
                                    <li>lim(x→0) tan⁻¹(x)/x = 1</li>
                                    <li>lim(x→0) (sin x)²/x = 0</li>
                                    <li>lim(x→∞) cos x = 1</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium">Advanced Formulas:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>sin(A±B) = sinAcosB ± cosAsinB</li>
                                    <li>cos(A±B) = cosAcosB ∓ sinAsinB</li>
                                    <li>tan(A±B) = (tanA ± tanB)/(1 ∓ tanAtanB)</li>
                                    <li>sin2A = 2sinAcosA</li>
                                    <li>cos2A = cos²A - sin²A</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    {/* Indeterminate Forms */}
                    <SubSection title="Indeterminate Forms">
                        <Card className="p-4">
                            <p className="font-semibold">Common Indeterminate Forms:</p>
                            <ul className="list-disc ml-6 mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                                <li>∞/∞</li>
                                <li>0/0</li>
                                <li>∞ - ∞</li>
                                <li>0⁰</li>
                                <li>0 · ∞</li>
                                <li>∞⁰</li>
                                <li>1^∞</li>
                            </ul>
                        </Card>
                    </SubSection>

                    {/* Methods for Solving */}
                    <SubSection title="Methods for Solving">
                        <div className="space-y-4">
                            {/* Factorization Method */}
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">1. Factorization Method</p>
                                <p>Key formulas:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>a³ + b³ = (a + b)(a² - ab + b²)</li>
                                    <li>a³ - b³ = (a - b)(a² + ab + b²)</li>
                                </ul>
                                <div className="mt-3">
                                    <p className="font-medium">Examples:</p>
                                    <ul className="list-disc ml-6">
                                        <li>lim(x→1) (x³-1)/(x-1) = 3</li>
                                        <li>lim(x→1) (x²-√x)/(√x-1) = 3</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Rationalization */}
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">2. Rationalization</p>
                                <p>Used when dealing with expressions involving surds</p>
                                <div className="mt-3">
                                    <p className="font-medium">Example:</p>
                                    <p>lim(x→1) [(x-1)(√x-1)]/[2x²+x+3] = 0.2</p>
                                </div>
                            </div>

                            {/* Infinity Form */}
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">3. Solving ∞/∞ Form</p>
                                <ul className="list-disc ml-6">
                                    <li>Take highest power common in polynomials</li>
                                    <li>Convert to 1/x form by taking xᵐ common</li>
                                    <li>Example: lim(x→∞) √(3x²+2)/(x-2) = √3</li>
                                </ul>
                            </div>

                            {/* L'Hôpital's Rule */}
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">4. L'Hôpital's Rule</p>
                                <p>Used for evaluating limits of indeterminate forms</p>
                                <p className="mt-2">All Fundamental Limit Theorems (FLT) are derived from L'Hôpital's rule</p>
                            </div>

                            {/* 1^∞ Form */}
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">5. Solving 1^∞ Form</p>
                                <div className="space-y-2">
                                    <p>For l = lim(x→a)(1 + f(x))^g(x), where f(a) → 0:</p>
                                    <ul className="list-disc ml-6">
                                        <li>log(l) = lim(x→a)[g(x) × log(1 + f(x)) × f(x)]/f(x)</li>
                                        <li>l = e^(lim(x→a)f(x)g(x))</li>
                                        <li>lim(x→a)f(x)^g(x) = e^(lim(x→a)g(x)(f(x)-1))</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="2. Continuity">
                <div className="space-y-4">
                    {/* Basic Definition */}
                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                        <p className="font-semibold">Definition:</p>
                        <p>A function f(x) is continuous at x = a if:</p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>lim(x→a)f(x) = f(a)</li>
                            <li>OR, LHL = RHL = value of function at a</li>
                        </ul>
                    </div>

                    {/* Left and Right Hand Limits */}
                    <SubSection title="Limit Definitions">
                        <Card className="p-4">
                            <div className="space-y-2">
                                <p className="font-semibold">Left Hand Limit (LHL):</p>
                                <p>lim(n→a⁻)f(n) = lim(h→0)f(a - h)</p>

                                <p className="font-semibold mt-4">Right Hand Limit (RHL):</p>
                                <p>lim(n→a⁺)f(n) = lim(h→0)f(a + h)</p>
                            </div>
                        </Card>
                    </SubSection>

                    {/* Properties */}
                    <SubSection title="Properties">
                        <Card className="p-4">
                            <ul className="list-disc ml-6">
                                <li>If F and G are continuous at x = a, then:
                                    <ul className="list-circle ml-6 mt-2">
                                        <li>F(x)±G(x) is continuous</li>
                                        <li>F(x)·G(x) is continuous</li>
                                        <li>F(x)/G(x) is continuous if G(a) ≠ 0</li>
                                    </ul>
                                </li>
                                <li className="mt-2">Composite function F(G(x)) is continuous when:
                                    <ul className="list-circle ml-6 mt-2">
                                        <li>G(x) is continuous at x = a</li>
                                        <li>F(x) is continuous at x = G(a)</li>
                                    </ul>
                                </li>
                            </ul>
                        </Card>
                    </SubSection>

                    {/* Example Problem */}
                    <SubSection title="Example">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <p className="font-semibold">Problem:</p>
                            <div className="mt-2">
                                <p>Find k if f(x) is continuous at x = 0, where:</p>
                                <p className="mt-2">f(x) = &#123;</p>
                                <ul className="list-none ml-6">
                                    <li>(√(1 + kx) - √(1 - kx))/x, -1 &le; x &lt; 0</li>
                                    <li>(2x + 1)/(x - 1), 0 &lt;= x &lt; 1</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <p className="font-semibold">Solution:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>f(0) = -1 (from the second piece of the function)</li>
                                    <li>LHL = lim(x→0⁻)(√1 + kx - √1 - kx)/x = lim(x→0⁻)k = k</li>
                                    <li>For continuity at x = 0: LHL = f(0)</li>
                                    <li>Therefore, k = -1</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    {/* Special Cases */}
                    <SubSection title="Special Cases">
                        <Card className="p-4">
                            <p className="font-semibold">Discontinuous Functions Can Have Continuous Sum</p>
                            <div className="mt-2">
                                <p>Example:</p>
                                <ul className="list-disc ml-6">
                                    <li>f(x) = 1/x, for x ≠ 0</li>
                                    <li>g(x) = -1/x, for x ≠ 0</li>
                                    <li>h(x) = f(x) + g(x) = 0 (continuous everywhere)</li>
                                </ul>
                                <p className="mt-2">This shows that the sum of two discontinuous functions can be continuous.</p>
                            </div>
                        </Card>
                    </SubSection>
                </div>
            </Section>

            <Section title="3. Differentiability">
                <div className="space-y-6">
                    {/* Basic Definition */}
                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                        <p className="font-semibold">Definition of Differentiability:</p>
                        <ul className="list-disc ml-6">
                            <li>Left hand slope = [f(a-h)-f(a)]/(-h) = A</li>
                            <li>Right hand slope = [f(a+h)-f(a)]/h = B</li>
                            <li>For differentiability: A = B</li>
                        </ul>
                        <p className="mt-2 text-sm italic">Note: The value should be taken from equation where sign is there else root is from this respective equation.</p>
                    </div>

                    {/* Piecewise Functions */}
                    <Card className="p-4">
                        <p className="font-semibold">For Piecewise Functions:</p>
                        <div className="mt-2">
                            <p>If f(x) = {'{'}</p>
                            <ul className="list-disc ml-8">
                                <li>g(x), 0 &lt; x ≤ a</li>
                                <li>h(x), a &lt; x ≤ b</li>
                            </ul>
                            <p>Then, f'(a-) = f'(a+) for differentiability at a</p>
                        </div>
                    </Card>

                    {/* Special Cases */}
                    <SubSection title="Special Cases and Properties">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Important Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>If f is differentiable at x, then f must be continuous at x</li>
                                    <li>However, a function can be continuous but not differentiable at a point</li>
                                    <li>If f'(x) exists, both one-sided derivatives must exist and be equal</li>
                                </ul>
                            </Card>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Square Root Differentiability:</p>
                                <p>If f is differentiable, then:</p>
                                <p className="ml-4">d/dx √f(x) = f'(x)/(2√f(x))</p>
                                <p className="mt-2 text-sm">Note: This doesn't mean if f is differentiable, √f is also differentiable. Counter example: f(x) = x at x = 0</p>
                            </div>
                        </div>
                    </SubSection>

                    {/* Examples Section */}
                    <SubSection title="Common Examples">
                        <Card className="p-4">
                            <p className="font-semibold">Example 1: Absolute Value Function</p>
                            <p>d/dx(|x|) = |x|/x, x ≠ 0</p>
                            <p className="mt-2">Note: Not differentiable at x = 0</p>
                        </Card>

                        <div className="mt-4 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                            <p className="font-semibold">Example 2: Piecewise Function</p>
                            <p>For a function defined as:</p>
                            <div className="ml-4 mt-2">
                                <p>f(x) = {'{'}</p>
                                <ul className="list-disc ml-8">
                                    <li>√(1 + kx) - √(1 - kx))/x, -1 ≤ x &lt; 0</li>
                                    <li>(2x + 1)/(x - 1), 0 ≤ x &lt; 1</li>
                                </ul>
                                <p>Checking differentiability at x = 0 requires:</p>
                                <ol className="list-decimal ml-8 mt-2">
                                    <li>Finding f(0)</li>
                                    <li>Computing left and right hand derivatives</li>
                                    <li>Verifying they are equal</li>
                                </ol>
                            </div>
                        </div>
                    </SubSection>

                    {/* Derivative Properties */}
                    <SubSection title="Derivative Properties">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="p-4">
                                <p className="font-semibold">Basic Rules:</p>
                                <ul className="list-disc ml-6">
                                    <li>d/dx(xⁿ) = nxⁿ⁻¹</li>
                                    <li>d/dx(fg) = f'g + fg'</li>
                                    <li>d/dx(f/g) = (gf' - fg')/g²</li>
                                    <li>d/dx(f(g(x))) = f'(g(x))·g'(x)</li>
                                </ul>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Function Behavior:</p>
                                <ul className="list-disc ml-6">
                                    <li>f'(x) &gt; 0: Function increasing</li>
                                    <li>f'(x) &lt; 0: Function decreasing</li>
                                    <li>f'(x) = 0: Potential critical point</li>
                                    <li>f'(x) DNE: Critical point</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="4. Maxima and Minima">
                <div className="space-y-6">
                    {/* Basic Derivatives */}
                    <SubSection title="Basic Derivatives">
                        <Card className="p-4">
                            <ul className="space-y-2">
                                <li>• d/dx(xⁿ) = nxⁿ⁻¹</li>
                                <li>• d/dx(fg) = fg' + gf'</li>
                                <li>• d/dx(f/g) = (gf' - fg')/g²</li>
                                <li>• d/dx(f(g(x))) = f'(g(x))g'(x)</li>
                                <li>• d/dx(sin x) = cos x</li>
                                <li>• d/dx(cos x) = -sin x</li>
                                <li>• d/dx(tan x) = sec² x</li>
                                <li>• d/dx(cot x) = -csc² x</li>
                                <li>• d/dx(sec x) = sec x tan x</li>
                                <li>• d/dx(csc x) = -csc x cot x</li>
                                <li>• d/dx(eˣ) = eˣ</li>
                                <li>• d/dx(aˣ) = aˣ ln a</li>
                                <li>• d/dx(ln x) = 1/x</li>
                                <li>• d/dx(arcsin x) = 1/√(1-x²)</li>
                                <li>• d/dx(arctan x) = 1/(1+x²)</li>
                                <li>• d/dx(|x|) = |x|/x, x ≠ 0</li>
                            </ul>
                        </Card>
                    </SubSection>

                    {/* Critical Points */}
                    <SubSection title="Critical Points">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold mb-2">Key Points:</p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Stationary points: Points where f'(x) = 0 if f is differentiable</li>
                                    <li>Critical points: Points where f'(x) = 0 or doesn't exist (DNE)</li>
                                    <li>Note: f'(x) = 0 doesn't always mean it's a maximum or minimum
                                        (e.g., f(x) = x³ at x = 0 is neither)</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    {/* Points of Inflection */}
                    <SubSection title="Points of Inflection">
                        <Card className="p-4">
                            <p className="font-semibold mb-2">Definition:</p>
                            <p>Point where function changes from concave to convex or vice versa</p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>Occurs at points where f''(x) = 0</li>
                                <li>Must verify change in concavity by testing points on either side</li>
                                <li>Not necessarily a maximum or minimum point</li>
                            </ul>
                        </Card>
                    </SubSection>

                    {/* Function Behavior Analysis */}
                    <SubSection title="Function Behavior Analysis">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">First Derivative Test:</p>
                                <ul className="list-disc ml-6">
                                    <li>f'(x) &gt; 0: Function is strictly increasing</li>
                                    <li>f'(x) &lt; 0: Function is strictly decreasing</li>
                                </ul>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Second Derivative Test:</p>
                                <ul className="list-disc ml-6">
                                    <li>f''(x) &gt; 0: Function is concave up (sagging)</li>
                                    <li>f''(x) &lt; 0: Function is concave down (hogging)</li>
                                </ul>
                            </Card>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Analysis Steps:</p>
                                <ol className="list-decimal ml-6">
                                    <li>Find critical points by solving f'(x) = 0</li>
                                    <li>Find intervals where f'(x) &gt; 0 and f'(x) &lt; 0</li>
                                    <li>Find points of inflection by solving f''(x) = 0</li>
                                    <li>Create a number line and test points to determine behavior</li>
                                </ol>
                            </div>
                        </div>
                    </SubSection>

                    {/* Special Cases */}
                    <SubSection title="Special Cases">
                        <Card className="p-4">
                            <p className="font-semibold">Important Considerations:</p>
                            <ul className="list-disc ml-6">
                                <li>End points of closed intervals must be checked</li>
                                <li>Points where derivative doesn't exist must be considered</li>
                                <li>Jump discontinuities may indicate local extrema</li>
                                <li>Absolute extrema occur at:
                                    <ul className="list-circle ml-6">
                                        <li>Critical points</li>
                                        <li>Endpoints (if interval is closed)</li>
                                        <li>Points of discontinuity</li>
                                    </ul>
                                </li>
                            </ul>
                        </Card>
                    </SubSection>
                </div>
            </Section>

            <Section title="5. Important Theorems">
                <div className="space-y-6">
                    <SubSection title="Major Theorems">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">1. Intermediate Value Theorem:</p>
                                <div className="space-y-2">
                                    <p>If f is a continuous function on the closed interval [a,b], and if d is between f(a) and f(b), then ∃c ∈ [a,b] with f(c) = d</p>
                                    <p className="text-gray-700 dark:text-gray-300">Special Case: If d = 0:</p>
                                    <ul className="list-disc ml-6">
                                        <li>If f is continuous and f(a) and f(b) have opposite signs</li>
                                        <li>Then ∃c where function intersects x-axis</li>
                                    </ul>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">2. Rolle's Theorem:</p>
                                <div className="space-y-2">
                                    <p>If f is continuous on [a,b] and differentiable on (a,b), and f(a) = f(b), then ∃c ∈ [a,b] with f'(c) = 0</p>
                                    <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg mt-2">
                                        <p className="font-semibold">Conditions:</p>
                                        <ul className="list-disc ml-6">
                                            <li>f must be continuous on [a,b]</li>
                                            <li>f must be differentiable on (a,b)</li>
                                            <li>f(a) = f(b)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">3. Mean Value Theorem:</p>
                                <div className="space-y-2">
                                    <p>If f is continuous on [a,b] and differentiable on (a,b), then ∃c ∈ [a,b] with [f(b) - f(a)]/(b-a) = f'(c)</p>
                                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg mt-2">
                                        <p className="font-semibold">Geometric Interpretation:</p>
                                        <p>There exists at least one point where the instantaneous rate of change equals the average rate of change over the interval</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Applications and Examples">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Application of IVT:</p>
                                <div className="space-y-2">
                                    <p>Example Problem:</p>
                                    <p>For a continuous function f(x) on [0, 2] where:</p>
                                    <ul className="list-disc ml-6">
                                        <li>f(0) = f(2) = -1</li>
                                        <li>f(1) = 1</li>
                                    </ul>
                                    <p className="mt-2">The following must be true:</p>
                                    <ul className="list-disc ml-6">
                                        <li>∃y ∈ (0, 1) such that f(y) = f(y+1)</li>
                                        <li>∃y ∈ (0, 1) such that f(y) = -f(2-y)</li>
                                    </ul>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Properties of Continuous Functions:</p>
                                <div className="space-y-2">
                                    <ul className="list-disc ml-6">
                                        <li>If F and G are continuous at x = a:
                                            <ul className="list-circle ml-6">
                                                <li>F(x) ± G(x) is continuous</li>
                                                <li>F(x) · G(x) is continuous</li>
                                                <li>F(x)/G(x) is continuous if G(a) ≠ 0</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </Card>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Important Note:</p>
                                <p>When two discontinuous functions are added, their sum might be continuous. Example:</p>
                                <ul className="list-disc ml-6">
                                    <li>f(x) = 1/x, x ≠ 0</li>
                                    <li>g(x) = -1/x, x ≠ 0</li>
                                    <li>f(x) + g(x) = 0 (continuous everywhere)</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="6. Integration">
                <div className="space-y-6">
                    <SubSection title="Basic Integration Rules">
                        <Card className="p-4">
                            <div className="space-y-4">
                                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                    <p className="font-semibold">Fundamental Integration Rules:</p>
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li>∫ dx = x + C</li>
                                        <li>∫ 1/x dx = ln|x| + C</li>
                                        <li>∫ eˣ dx = eˣ + C</li>
                                        <li>∫ xᵃ dx = xᵃ⁺¹/(a+1) + C, where a ≠ -1</li>
                                        <li>∫ ln x dx = x ln x - x + C</li>
                                        <li>∫ sin x dx = -cos x + C</li>
                                        <li>∫ cos x dx = sin x + C</li>
                                        <li>∫ tan dx = ln|sec x| + C</li>
                                        <li>∫ cot x dx = ln|sin x| + C</li>
                                        <li>∫ sec x dx = ln|sec x + tan x| + C</li>
                                        <li>∫ csc x dx = ln|csc x - cot x| + C</li>
                                        <li>∫ sec² x dx = tan x + C</li>
                                        <li>∫ sec x tan x dx = sec x + C</li>
                                        <li>∫ csc² x dx = -cot x + C</li>
                                        <li>∫ tan² x dx = tan x - x + C</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </SubSection>

                    <SubSection title="Special Cases">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Gamma Function:</p>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <p>Γ(n + 1) = n! = ∫₀^∞ e^(-x)x^n dx</p>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Wallis's Formulae:</p>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li>∫₀ᵖⁱ sin" x dx = ∫₀ᵖⁱ cos" x dx = [(n-1)(n-3)...4.2]/[n(n-2)(n-4)...5.3]</li>
                                        <li>For n = 3,5,7,9...</li>
                                        <li>A = π/2 if m and n are both even positive integers</li>
                                        <li>A = 1 if m and/or n are odd positive integers</li>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Integration Methods">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Tic-tac-toe Method (ILATE Rule):</p>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <ul className="list-disc ml-6">
                                        <li>I - Inverse trigonometric functions</li>
                                        <li>L - Logarithmic functions</li>
                                        <li>A - Algebraic functions</li>
                                        <li>T - Trigonometric functions</li>
                                        <li>E - Exponential functions</li>
                                    </ul>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Leibnitz's Integration Formula:</p>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <p>d/dx ∫ᵃᵇ f(t)dt = f(b)·db/dx - f(a)·da/dx</p>
                                </div>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Approximation by Integrals">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">For Monotonically Increasing Functions:</p>
                                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                    <p>∫ₘ₋₁ⁿ f(x)dx ≤ Σₖ₌ₘⁿ f(k) ≤ ∫ₘⁿ⁺¹ f(x)dx</p>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">For Monotonically Decreasing Functions:</p>
                                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                    <p>∫ₘⁿ⁺¹ f(x)dx ≤ Σₖ₌ₘⁿ f(k) ≤ ∫ₘ₋₁ⁿ f(x)dx</p>
                                </div>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Integration Properties">
                        <Card className="p-4">
                            <ul className="list-disc ml-6 space-y-2">
                                <li>If u and v are two functions of x, then:
                                    <ul className="list-circle ml-6 mt-2">
                                        <li>∫(u + v)dx = ∫u dx + ∫v dx</li>
                                        <li>∫(u - v)dx = ∫u dx - ∫v dx</li>
                                        <li>∫k·u dx = k∫u dx, where k is constant</li>
                                    </ul>
                                </li>
                                <li>For definite integrals:
                                    <ul className="list-circle ml-6 mt-2">
                                        <li>∫ᵃᵇ f(x)dx = -∫ᵇᵃ f(x)dx</li>
                                        <li>∫ᵃᵃ f(x)dx = 0</li>
                                        <li>∫ᵃᵇ f(x)dx + ∫ᵇᶜ f(x)dx = ∫ᵃᶜ f(x)dx</li>
                                    </ul>
                                </li>
                            </ul>
                        </Card>
                    </SubSection>
                </div>
            </Section>
        </div>
    );
};

export default CalculusNotes;