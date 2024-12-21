'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/Section';
import { SubSection } from '@/components/ui/SubSection';

const ProbabilityAndStatisticsNotes: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <Section title="1. Introduction to Probability">
                {/* Axioms of Probability */}
                <Card className="p-4 mb-6">
                    <h3 className="font-bold text-lg mb-4">Axioms of Probability</h3>
                    <ol className="list-decimal ml-6 space-y-2">
                        <li>Nonnegativity: P(A) ≥ 0</li>
                        <li>Normalization: P(Ω) = 1</li>
                        <li>Additivity: If A ∩ B = φ (disjoint), then P(A ∪ B) = P(A) + P(B)</li>
                    </ol>
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p>Where P(A) = Number of element of A / Total number of sample points = n(A)/n(S)</p>
                    </div>
                </Card>

                {/* Inclusion Exclusion Principle */}
                <SubSection title="The Inclusion Exclusion Principle">
                    <Card className="p-4">
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">For any two events, E and F:</p>
                                <p className="mt-2 p-2 bg-blue-50 dark:bg-blue-900 rounded-lg">
                                    P(E ∪ F) = P(E) + P(F) - P(E ∩ F)
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold">For three events, E, F, and G:</p>
                                <p className="mt-2 p-2 bg-blue-50 dark:bg-blue-900 rounded-lg">
                                    P(E ∪ F ∪ G) = P(E) + P(F) + P(G) - P(E ∩ F) - P(E ∩ G) - P(F ∩ G) + P(E ∩ F ∩ G)
                                </p>
                            </div>
                        </div>
                    </Card>
                </SubSection>

                {/* Conditional Probability Introduction */}
                <SubSection title="Conditional Probability">
                    <Card className="p-4">
                        <p className="mb-4">Conditional probability is nothing but "Change in belief". Example of conditioning:</p>

                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                            <p className="font-semibold">Dice tossing example:</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>We throw 2 dice</li>
                                <li>We look for P(Sum of 2 faces is 9)</li>
                                <li>Without prior information: P(sum of 2 faces is 9) = 1/9</li>
                                <li>Now, consider B: It is given that first face is 6</li>
                                <li>So, now what is probability P(sum is 9 | B) = 1/6</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                            <p>P(A|B) = P(A∩B)/P(B)</p>
                            <p className="mt-2 text-sm">We call this as "Conditional probability of A given B"</p>
                        </div>
                    </Card>
                </SubSection>
            </Section>
        </div>
    );
};

export default ProbabilityAndStatisticsNotes;