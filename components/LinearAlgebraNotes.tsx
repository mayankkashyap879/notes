'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/Section';
import { SubSection } from '@/components/ui/SubSection';

const LinearAlgebraNotes: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <Section title="1. Introduction to Linear Algebra">
                <div className="space-y-4">
                    <p className="text-lg">By using linear algebra, we can convert any row data into useful data or data which is easily interpretable by particular machine. Every type of data can be represented as matrices or as vectors.</p>
                    <p>Linear algebra is fuel of machine learning.</p>
                    <p><strong>Word Embedding:</strong> Representing a word with vector.</p>
                </div>
            </Section>

            <Section title="2. Basic Terminology">
                <div className="space-y-6">
                    <Card className="p-4">
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Scalar:</strong> Any number</li>
                            <li><strong>Vector:</strong> Which have direction and magnitude →</li>
                            <li><strong>Linear combination of vector:</strong> (addition of Scalar times vectors)</li>
                        </ul>
                    </Card>

                    <SubSection title="Linear Dependent and Independent Vectors">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p><strong>Linear dependent vectors:</strong> A finite set of a vector space is said to be linearly dependent (LD) if there exists a set of scalers k1, k2, k3, …, kn such that, k1u1 + k2u2 + … + knun = O (zero vector)</p>
                                <p className="mt-2">Remember set of scalers can be zero or nonzero.</p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p><strong>Linear independent vectors:</strong> If none of the vectors can be written as a linear combination of the others.</p>
                                <p className="mt-2">OR A set of vectors is linearly independent if the only linear combination of the vectors that equals 0 is the trivial linear combination (i.e. all coefficient = 0).</p>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300">Here linear combination is not same as multiple of another vector. Multiple of vector is only defined for two vectors so it does not give us exact definition of LI.</p>
                        </div>
                    </SubSection>

                    <SubSection title="Row and Column Space">
                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                            <p>The row space of an m×n matrix A is the subspace of Rn spanned by rows of A. The column space of A is a subspace of Rm spanned by columns of A.</p>
                        </div>
                    </SubSection>

                    <SubSection title="Filling the Space (Span)">
                        <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                            <p>Any two linearly independent vector can fill R2. Because we can form any vector using these linearly independent vectors. This is same as two equation and two variables.</p>
                            <p className="mt-2">In general, &quot;Any n linearly independent vector can fill Rn space.&quot;</p>
                        </div>
                    </SubSection>

                    <SubSection title="Basis of a Space">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <p>A basis of a space is a set of vectors v1, v2, v3, …, vd with 2 properties:</p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>They are independent</li>
                                <li>They span the space</li>
                            </ul>
                        </div>
                    </SubSection>

                    <SubSection title="Questions">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Question 1:</p>
                                <p>If a set of vectors are LD then all vectors can be represented by a linear combination of set of vectors?</p>

                                <p className="mt-4 font-semibold">Answer:</p>
                                <p>Surprisingly the answer is NO. Consider these vector set {'{0, v}'}, {'{(1, 0, 0), (0, 1, 0), (0, 0, 0)}'}</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>In first case we cannot represent v as linear combination of vector 0 for v ≠ 0</li>
                                    <li>In second set we cannot represent (1, 0, 0) or (0, 1, 0) as linear combination</li>
                                    <li>Here you may observe a pattern in each case there are no non-zero LD vectors</li>
                                    <li>The correct answer is: all vectors can be represented by a linear combination of set of vectors if and only if it contains at least 1 non-zero LD vector</li>
                                    <li>It means If 0 vector present then set of vectors is LD</li>
                                    <li>And If subset is LD then its superset is LD</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Question 2:</p>
                                <p>Can we have more than 2 independent vectors in R2?</p>

                                <p className="mt-4 font-semibold">Answer:</p>
                                <p>NO. Because:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>If you have two independent vectors then we can construct any vector in R2 using these two-independent vectors</li>
                                    <li>If we add some vector to this set, we would have set having dependent vectors</li>
                                    <li>If we extend this idea then we cannot have more than n independent vector in Rn space</li>
                                    <li>Or in other words &quot;If a subset of Rn contains more than n vectors, then the subset is linearly dependent&quot;</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Question 3:</p>
                                <p>What if we have 3 vectors or less than 3 vectors in R3 space are they independent or dependent?</p>

                                <p className="mt-4 font-semibold">Answer:</p>
                                <p>For 2 vectors in R2 space is easy we just have to put ratio but here in above case we cannot use, so we have another method which we will learn later.</p>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Important Notes">
                        <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                            <ul className="list-disc ml-6 space-y-2">
                                <li>A single element set {'{v}'} is linearly independent if and only if v ≠ 0</li>
                                <li>Another meaning of Ax = b: We know that A is group of vectors. So, this means b is linear combination of columns of A. Not only that but If we have set of A and b then this set is linearly dependent provided columns of A are linearly independent</li>
                                <li>b is column space of A means b can be represented as linear combination of columns of A</li>
                                <li>Here A is called coefficient matrix, and if you include b into it, it is called argument matrix</li>
                            </ul>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="3. System of Linear Equations">
                <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                        <p>Examples of Linear and Non-linear equations:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>x + y = 2 ← Linear</li>
                            <li>2x – 3y = 1.5 ← Linear</li>
                            <li>x² + y = 5 ← Non-linear</li>
                            <li>x – xy = 4 ← Non-linear</li>
                        </ul>
                    </div>

                    <p>Group of these linear equations known as system of linear equation. We can represent this system of linear equation in the form of Ax = b.</p>

                    <div className="mt-4">
                        <p>Example system:</p>
                        <p>x₁ – 2x₂ = -1</p>
                        <p>-x₁ + 3x₂ = 3</p>

                        <p className="mt-4">This system of linear equation can be represented in two formats:</p>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg my-4">
                            <p>[1 -2][x₁] = [-1]</p>
                            <p>[-1 3][x₂] = [3]</p>
                            <p className="mt-2">OR</p>
                            <p>x₁[1] + x₂[-2] = [-1]</p>
                            <p>[-1] [3] [3]</p>
                        </div>
                    </div>

                    <SubSection title="Solution Cases">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Case 1: Unique solution</p>
                                <p>x₁ – 2x₂ = -1</p>
                                <p>-x₁ + 3x₂ = 3</p>
                                <p>x₁ = 3, x₂ = 2</p>
                                <p className="mt-2">i.e., Unique solution if each column of A is linearly independent. It also means two lines intersect at one point.</p>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Case 2: No solution</p>
                                <p>x₁ – 2x₂ = -1</p>
                                <p>-x₁ + 2x₂ = 3</p>
                                <p className="mt-2">i.e., No solution if column of A is linearly dependent. It also means two lines are parallel or does not intersect at all.</p>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Case 3: Infinite solution</p>
                                <p>x₁ – 2x₂ = -1</p>
                                <p>-x₁ + 2x₂ = 1</p>
                                <p className="mt-2">i.e., Infinite solution if column of A and b is linearly dependent. It also means two lines are same.</p>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Important Questions">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Q1: If Ax = 0 has some solution then what can you say about linearly dependency of columns of A?</p>
                                <p className="mt-2">Answer: If solution is trivial then columns of A are independent. If they are nontrivial then it will be linearly dependent. If they are nontrivial then we can write one row as ax₁+bx₂+…=0 which is dependency condition.</p>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Q2: Suppose a matrix A₃ₓ₄ contains 3 linearly independent columns, what can you say about the solutions to Ax = b? (here b ≠ 0)</p>
                                <p className="mt-2">Answer: Size is 3 x 4 means here we are taking about R³ space. And there are 4 vectors of that space clearly it is written 3 linearly independent columns so any of the one column is redundant means we can create that with 3 linearly independent columns so we ignore that column and we always have solution.</p>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Q3: Suppose a matrix A₅ₓ₄ contains 3 linearly independent columns. What can you say about the solutions to Ax = b? (here b ≠ 0)</p>
                                <p className="mt-2">Answer: Size is 5 x 4 means here we are taking about R⁵ space. And there are 4 vectors out of which 3 are linearly independent columns so remaining 1 vector may or may not be linearly independent. So, there may be solution to this system or there cannot be a solution. And answer also depends upon the b as if b is a linear combination of columns of A then solution exists as we have combination of 5 and otherwise no solution.</p>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="General Conclusions">
                        <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                            <p className="font-semibold">In general, we can say that:</p>
                            <ol className="list-decimal ml-6 space-y-2">
                                <li>Solutions of Ax = b, Amxn has m linearly independent columns?
                                    <ul className="list-disc ml-6 mt-1">
                                        <li>Yes → There is always a solution</li>
                                        <li>No → May or may not be solutions</li>
                                    </ul>
                                </li>
                                <li>Solution of Ax = b, b is linear combination of columns of A?
                                    <ul className="list-disc ml-6 mt-1">
                                        <li>Yes → There is always a solution (Unique or infinite)</li>
                                        <li>Columns of A are LI: Yes → Unique</li>
                                        <li>No → infinite</li>
                                        <li>No → There is never a solution (No solution)</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="4. Matrix Multiply by Matrix">
                <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                        <p>Multiplying matrix with one vector is nothing but applying linear transformation to that one vector. Similarly multiplying one matrix with second matrix is nothing but applying linear transformation of one matrix to the all columns of second matrix. Remember columns of matrix represents vectors only.</p>
                    </div>

                    <Card className="p-4">
                        <div className="space-y-4">
                            <div className="font-mono text-sm">
                                <p>{`[1 2][a b] = [a + 2c    b + 2d] = [a[1] + c[2]  b[1] + d[2]]`}</p>
                                <p>{`[3 4][c d] = [3a + 4c    3b + 4d]   [  [3]        [3]    [4]]`}</p>
                            </div>

                            <div className="mt-4">
                                <p><strong>AB = C</strong> here:</p>
                                <ul className="list-disc ml-6">
                                    <li>Rows of C is linear combination of rows of B with row of A acting as coefficient</li>
                                    <li>Columns of C is linear combination of columns of A with column of B acting as coefficient</li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <p><strong>AB = sum of (columns of A) × rows of B</strong></p>
                            </div>
                        </div>
                    </Card>

                    <SubSection title="Question">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <p>Let c1,...,cn be scalars, not all zero, such that Σ(i=1 to n) ciai = 0 where ai are column vectors in Rn.</p>
                            <p>Consider the set of linear equations Ax = b</p>
                            <p>where A = [a1,...,an] and b = Σ(i=1 to n) ai. The set of equations has:</p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>a unique solution at x = Jn where Jn denotes a n-dimensional vector of all 1</li>
                                <li>no solution</li>
                                <li>infinitely many solutions</li>
                                <li>finitely many solutions</li>
                            </ul>
                        </div>
                    </SubSection>

                    <Card className="p-4">
                        <p><strong>Answer:</strong></p>
                        <div className="space-y-2">
                            <p>Σ(i=1 to n) ciai = 0 this condition means columns of A are linearly dependent as we can represent ai using other combination of columns of A (please look carefully).</p>
                            <p>Now, it is also given that Σ(i=1 to n) ai = b this means we have solution as we can represent b as linear combination of columns of A.</p>
                            <p>Now, as b is linear combination of columns of A, and columns of A are dependent so there can be many combinations of dependency of columns of A. I mean all columns can be same or some are same so there are infinitely many combinations.</p>
                            <p><strong>Therefore, there are infinitely many solutions.</strong></p>
                        </div>
                    </Card>
                </div>
            </Section>

            <Section title="5. Gaussian Elimination">
                <div className="space-y-4">
                    <p className="text-lg">Gaussian elimination is nothing but converting original matrix to echelon form of matrix.</p>

                    <SubSection title="Echelon Form of Matrix (Row Echelon Form)">
                        <div className="space-y-4">
                            <p className="italic text-gray-600">(This method is used to calculate rank of matrix)</p>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Requirements:</p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>All nonzero rows are above any rows of all zeros</li>
                                    <li>All entries in a column below a leading entry are zero</li>
                                    <li>The leading entry of any row occurs to the right of the leading entry of the row above it
                                        <p className="text-sm text-gray-600 mt-1">
                                            (take second row as an example, leading entry of any row occurs – Take second row,
                                            to the right of the leading entry of the row above it. – row above it means first row
                                            and right of the first row is second which is in the right side.)
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Examples of Echelon Form:</p>
                                <div className="mt-2 space-y-2">
                                    <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded">
                                        (
                                        <div className="ml-4">
                                            5  1  -6  1<br />
                                            0  1  -2  0<br />
                                            0  0  0  -6
                                        </div>
                                        )
                                    </code>
                                    <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded">
                                        (
                                        <div className="ml-4">
                                            0  -3  3  4  5  -2<br />
                                            0   0  0  1  7   3<br />
                                            0   0  0  0  0  -1<br />
                                            0   0  0  0  0   0
                                        </div>
                                        )
                                    </code>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Examples which are NOT in Echelon Form:</p>
                                <div className="mt-2 space-y-2">
                                    <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded">
                                        [
                                        <div className="ml-4">
                                            1  0  5  0<br />
                                            0  0  0  0<br />
                                            0 -1  0  1
                                        </div>
                                        ]
                                    </code>
                                    <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded">
                                        [
                                        <div className="ml-4">
                                            1  0  3  2<br />
                                            0  0  1  5<br />
                                            0  1  0  3
                                        </div>
                                        ]
                                    </code>
                                </div>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Pivot and Free Variables">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p>In row echelon form – A variable whose coefficient is leading nonzero is called a pivot or basic variable.
                                    Otherwise, the variable is known as a free variable. Free variables are also known as NULLITY.</p>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Example:</p>
                                <p className="mt-2">Which are basic variables (pivot) and which are free variables in given augmented matrix?</p>
                                <div className="mt-4 space-y-4">
                                    <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded">
                                        [
                                        <div className="ml-4">
                                            1  4  3  0  0<br />
                                            0  0  1 -3  1<br />
                                            0  0  0  0  0
                                        </div>
                                        ]
                                    </code>
                                    <p>Basic variables (columns): 1,3<br />Free variables: 2, 4</p>
                                </div>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Elementary Row Operations">
                        <div className="space-y-4">
                            <p>We perform this operation to convert any matrix to row echelon form of matrix.</p>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Three types of elementary row operations:</p>
                                <ol className="list-decimal ml-6 space-y-2">
                                    <li>Swap the positions of two rows.</li>
                                    <li>Multiply a row by a non-zero scalar.</li>
                                    <li>Add to one row a scalar multiple of another.
                                        <p className="text-sm text-gray-600 mt-1">
                                            (We can do this operation because if u = v and x = y then u + x = v + y and if you want
                                            intuitive reason then replacing one vector by resultant vector doesn&apos;t change its meaning)
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Row Reduced Echelon Form">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p>Row reduced echelon form = all pivots are 1. All elements below + above pivots are zero.</p>
                                <p className="mt-2">In row echelon form we only have all element below are zero but here in row reduced
                                    echelon form we have one more condition that elements above pivots are also zero.</p>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Rank of Matrix">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Rank has different representation:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>Linearly independent rows</li>
                                    <li>Linearly independent columns</li>
                                    <li>Pivot elements in echelon form of matrix</li>
                                    <li>Non-zero rows of an echelon form of matrix</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Procedure of finding the rank of matrix:</p>
                                <ol className="list-decimal ml-6 space-y-2">
                                    <li>Convert matrix to row echelon form using elementary row operations</li>
                                    <li>Then count pivot elements of echelon form of matrix</li>
                                    <li>Or after converting matrix to REF see how many vectors are LI</li>
                                </ol>
                            </Card>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">NOTE:</p>
                                <ol className="list-decimal ml-6 space-y-2">
                                    <li>Rank is zero only for zero matrix.</li>
                                    <li>Number of variables = Number of columns of coefficient matrix (Row space) = pivot columns + Free variables</li>
                                </ol>
                            </div>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="6. Solving System of Linear Equations">
                <div className="space-y-6">
                    <SubSection title="Types of Systems">
                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg space-y-2">
                            <ul className="list-disc ml-6">
                                <li>Homogenous (Ax = 0)</li>
                                <li>Heterogenous (Ax = b)</li>
                            </ul>
                        </div>
                    </SubSection>

                    <SubSection title="Example Problems">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold mb-2">Problem 1: Solve using Gaussian reduction</p>
                                <p>x₁ + x₂ - x₃ = 0</p>
                                <p>x₁ - x₂ + x₃ = 2</p>
                                <p>2x₁ - x₂ - x₃ = -3</p>

                                <div className="mt-4">
                                    <p className="font-semibold">Solution:</p>
                                    <p>Augmented matrix is:</p>
                                    <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-2">
                                        [1  1  -1 | 0]
                                        [1 -1   1 | 2]
                                        [2 -1  -1 |-3]
                                    </pre>

                                    <p className="mt-2">Converting to row echelon form:</p>
                                    <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-2">
                                        [1  1  -1 | 0]
                                        [0 -2   2 | 2]
                                        [0  0   1 | 3]
                                    </pre>

                                    <p className="mt-2">∴ x₃ = 3, x₂ = 2, x₁ = 1</p>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold mb-2">Problem 2: Solve the system</p>
                                <p>5x₁ - 11x₂ = -2</p>
                                <p>-4x₁ + 9x₂ = 1</p>
                                <p>x₁ - 2x₂ = 1</p>

                                <div className="mt-4">
                                    <p className="font-semibold">Solution:</p>
                                    <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-2">
                                        [ 5 -11 |-2]
                                        [-4  9  | 1]
                                        [ 1 -2  | 1]
                                    </pre>

                                    <p className="mt-2">Converting to row echelon form:</p>
                                    <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-2">
                                        [1 -2  |-1]
                                        [0  1  |-3]
                                        [0  0  | 0]
                                    </pre>

                                    <p className="mt-2">∴ x₂ = -3, x₁ = -7</p>
                                    <p className="text-sm mt-2">Note: If you encounter 0 0 |0 in any row then it is not always that solution is infinite. If pivot element = n then unique solution regardless of 0 0... | 0.</p>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold mb-2">Problem 3: Row Echelon Form Analysis</p>
                                <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-2">
                                    [3  5  -4 | 0]
                                    [0 -3   0 | 0]
                                    [0  0   0 | 0]
                                </pre>

                                <div className="space-y-2 mt-4">
                                    <p>Very first step: Identify the free variables and assign a constant parameter to that. Clearly third column or variable is free variable.</p>
                                    <p>∴ x₃ = k and x₂ = 0</p>
                                    <p>3x₁ + 5x₂ - 4x₃ = 0</p>
                                    <p>3x₁ - 4k = 0, x₁ = 4k/3</p>
                                    <p>Solution: x = [4k/3, 0, k]ᵀ</p>
                                </div>

                                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mt-4">
                                    <p className="font-semibold">Important Notes:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Number of solutions possible = infinite</li>
                                        <li>Number of Linearly independent solutions possible = 1</li>
                                        <li>Here number of free variables is 1 that is why you have one independent solution which means one nullity</li>
                                        <li>Which means determinant is zero (presence of free variable implies zero determinant)</li>
                                    </ul>
                                </div>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold mb-2">Important Note for Heterogeneous Systems:</p>
                                <p>Here b = 0 now consider, b = some real number i.e. heterogenous system of equation. Then the value of x would be x + some constant. This constant represents the perpendicular distance between two resultant line of Ax = 0 and Ax = b.</p>
                                <p className="mt-2 font-semibold">Key Rule:</p>
                                <p>If there are free variables then there are infinite solutions</p>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Solution Properties">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <p className="font-semibold">For a matrix A with dimension m×n:</p>
                            <ol className="list-decimal ml-6 space-y-2">
                                <li>Solutions of Ax = b, A has m linearly independent columns?
                                    <ul className="list-disc ml-6">
                                        <li>Yes → There is always a solution</li>
                                        <li>No → May or may not be solutions</li>
                                    </ul>
                                </li>
                                <li>Solution of Ax = b, b is linear combination of columns of A?
                                    <ul className="list-disc ml-6">
                                        <li>Yes → There is always a solution (Unique or infinite)</li>
                                        <li>If columns of A are LI → Unique</li>
                                        <li>If columns of A are not LI → Infinite</li>
                                        <li>No → There is never a solution (No solution)</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="7. Determinant, Inverses, Eigenvalues and Eigenvectors">
                <div className="space-y-6">
                    <SubSection title="7.1 Determinant">
                        <div className="space-y-4">
                            <p className="text-lg">It represents area in R2 space and volume in R3 space.</p>

                            <Card className="p-4">
                                <p className="font-semibold">Properties of Determinant:</p>
                                <ol className="list-decimal ml-6 space-y-2">
                                    <li>Determinant of identity matrix is 1.</li>
                                    <li>The determinant changes sign when two rows (or two columns) are exchanged.</li>
                                    <li>Linearity for one row (or one column) at a time</li>
                                </ol>

                                <div className="mt-4">
                                    <p className="font-semibold">Examples:</p>
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li>|ta tb|
                                            |c  d | = t|a b|
                                            |c d|</li>
                                        <li>|a+a&apos; b+b&apos;|
                                            |c    d   | = |a b| + |a&apos; b&apos;|
                                            |c d|   |c  d |</li>
                                    </ul>
                                </div>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Important Properties:</p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>If any row or columns are linearly combination of row or columns respectively then determinant is zero.</li>
                                    <li>Det(AB) = Det(A) × Det(B) Provided A and B should be square matrix of same order.</li>
                                    <li>If A and B can be same in that case we will get det(A²) = (Det(A))².</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="7.2 Inverse of Matrix">
                        <div className="space-y-4">
                            <p>Inverse of a matrix is a matrix which if we multiply this matrix to original matrix, we get identity matrix. It is denoted as A⁻¹.</p>

                            <Card className="p-4">
                                <p className="font-semibold">Proof of Inverse Formula:</p>
                                <p>Consider the matrix:</p>
                                <div className="mt-2">
                                    <p>A = [a11 a12 a13]</p>
                                    <p>    [a21 a22 a23]</p>
                                    <p>    [a31 a32 a33]</p>
                                </div>
                                <p className="mt-2">and Transpose of (Cofactor(A)) = adjoint(A)</p>
                            </Card>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Properties:</p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>A × Adj(A) = |A|I</li>
                                    <li>Therefore, A⁻¹ = Adj(A)/|A|</li>
                                    <li>For 2×2 matrix: A = [a b] has inverse 1/(ad-bc)[d -b]</li>
                                    <li>                                                  [-c a]</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="7.3 Eigenvalues and Eigenvectors">
                        <div className="space-y-4">
                            <p className="text-lg">When you apply linear transformation on some vector v, if you get same vector scaled by some factor, then that vector is known as eigen vector and factor is called eigen value.</p>

                            <Card className="p-4">
                                <p className="font-semibold">Definition:</p>
                                <p>Av = λv such that λ ∈ R, v ≠ 0, A is square matrix</p>
                                <p className="mt-2">Why are they always in the limelight? – It turns out that several properties of matrices can be analyzed based on their eigenvalues. And in machine learning there is concept called regularization which uses concept of eigen values and eigen vector.</p>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Calculating Eigenvalues:</p>
                                <ol className="list-decimal ml-6 space-y-2">
                                    <li>Av = λv</li>
                                    <li>(A - λI)v = 0</li>
                                    <li>det(A-λI) = 0 (as v ≠ 0)</li>
                                </ol>
                                <p className="mt-2">Determinant is zero means there are free variables and infinite solutions.</p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Important Notes:</p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Eigenvectors from different eigenvalues are linearly independent.</li>
                                    <li>If λ₁ ≠ λ₂ then corresponding eigenvectors are linearly independent.</li>
                                    <li>For repeating eigenvalues, we can get either one or two linearly independent vectors.</li>
                                    <li>If (λ - λ₁)^m₁(λ - λ₂)^m₂...(λ - λₖ)^mₖ is the characteristic equation, then it can have at least k Linearly independent eigenvectors and at most Σmᵢ Linearly independent eigenvectors.</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Real Symmetric Matrices">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Properties:</p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>If n real eigenvalues then n orthogonal eigenvectors</li>
                                    <li>All eigenvectors are LI even if eigenvalues are repeating</li>
                                    <li>Aij = Aji which means A^T = A</li>
                                    <li>Eigenvectors corresponding to different eigenvalues must be orthogonal to each other</li>
                                </ul>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Properties of Eigenvalues:</p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Determinant of any matrix is product of eigen values.</li>
                                    <li>Trace (sum of elements in main diagonal) of matrix is sum of eigen values.</li>
                                    <li>Tr(A+B) = Tr(A) + Tr(B)</li>
                                    <li>Tr(ABC) = Trace(CAB) = Trace(BCA) ... cyclic permutation are allowed</li>
                                    <li>det(e^A) = e^tr(A)</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="8. Important Properties of Eigen Values and Matrix">
                <div className="space-y-6">
                    <SubSection title="8.1 Rank and Eigen Values">
                        <div className="space-y-4">
                            <p className="text-lg">Is there any relationship between Rank and eigen values of A?</p>

                            <Card className="p-4">
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>If eigenvalue of A ≠ 0 then rank = n</li>
                                    <li>If eigenvalues of A = 0 then rank &lt; n</li>
                                </ul>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p>Because if eigenvalue is 0 then determinant is definitely zero. And Determinant only becomes zero when two or more columns are dependent which means there is decrease in row space.</p>
                            </div>

                            <SubSection title="Important Questions">
                                <div className="space-y-4">
                                    <Card className="p-4">
                                        <p className="font-semibold">Q1: Can Ax = 0 have a unique non-trivial solution?</p>
                                        <div className="mt-2">
                                            <p>Answer: x = 0 is trivial solution. This always exists in case of homogenous equation. That means rows are linearly dependent because we always have c1x1 + c2x2 + … + cnxn = 0. Means we always have infinite many solutions because we can have infinite many combinations for each solution of x. So, we can replace each c1 or c2 or c3 by different equation which means we have more than one solution but question asks for unique solution. Which cannot exist.</p>
                                            <p className="mt-2">One interesting fact is Ax = 0 is nothing but characteristic equation corresponding to λ = 0.</p>
                                        </div>
                                    </Card>

                                    <Card className="p-4">
                                        <p className="font-semibold">Q2: Let A be 5 x 5 matrix and one of the eigenvalues of A is 0. It is also known that there are 4 linearly independent eigenvectors corresponding to 0 eigenvalue. What is Rank of A?</p>
                                        <p className="mt-2">Answer: If one of the eigenvalues of A is 0. That means rank &lt; 5. And 4 LI eigenvectors are corresponding to 0 which is nothing but Nullity or number of free variables. Which means rank = 1.</p>
                                    </Card>

                                    <Card className="p-4">
                                        <p className="font-semibold">Q3: Let A be 15 x 15 matrix and one of its eigenvalues is zero. What is rank of A?</p>
                                        <p className="mt-2">Answer: One of its eigenvalues is zero which means rank &lt; 15. But no other information is given so rank cannot be determined.</p>
                                    </Card>

                                    <Card className="p-4">
                                        <p className="font-semibold">Q4: Let A be 15 x 15 matrix and one of its eigenvalues is zero. It is also known that there are 10 linearly independent eigenvector of A. What is rank of A?</p>
                                        <p className="mt-2">Answer: 10 linear independent eigenvectors of A is given which may or may not be corresponds by eigenvalue zero. Which means rank cannot be determined.</p>
                                    </Card>
                                </div>
                            </SubSection>
                        </div>
                    </SubSection>

                    <SubSection title="8.2 Cayley-Hamilton Theorem">
                        <div className="space-y-4">
                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p>It says every square matrix satisfies its own characteristics equation.</p>
                                <p className="mt-2">From Cayley-Hamilton theorem, we can also say that if eigenvalue of A is λ then eigenvalue of An is λn.</p>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="8.3 Eigenvalues of AB and BA">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p>Let x and λ be the eigenvector and eigenvalues of AB respectively. Then ABx = λx, BABx = λBx.</p>
                                <p className="mt-2">That means Bx is eigenvectors of BA and λ is an eigenvalue. That means AB and BA shares their eigenvalues.</p>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Theorem:</p>
                                <p>For arbitrary square m×n matrix A and n×m matrix B, and n≥m, the following statements are valid:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>The nonzero eigenvalues of m×m matrix AB and n×n matrix BA are the same, with the same algebraic multiplicities.</li>
                                    <li>If 0 is an eigenvalue of AB with algebraic multiplicity k≥0, then 0 is an eigenvalue of BA with algebraic multiplicity k+n-m.</li>
                                    <li>If m=n, then the eigenvalues of AB and BA are the same, with the same algebraic multiplicities.</li>
                                </ul>
                            </Card>

                            <SubSection title="Example Questions">
                                <div className="space-y-4">
                                    <Card className="p-4">
                                        <p className="font-semibold">Q1: Let A be 3 x 7 and B be 7 x 3 and eigenvalues of AB are 1, 2, 4. Then what will be eigenvalues of BA?</p>
                                        <p className="mt-2">Answer: As from above, AB and BA shares same nonzero eigenvalues so eigenvalues of BA will be 1, 2, 4 and 4 0&apos;s. Why 4 0&apos;s because dimension of BA is 7x7 so after copying non-zero eigenvalues all remaining eigenvalues must be zero to accommodate.</p>
                                    </Card>

                                    <Card className="p-4">
                                        <p className="font-semibold">Q2: Let A be 4 x 3 and B be 3 x 4 then AB must have at least one zero eigenvalues.</p>
                                        <p className="mt-2">Because if one eigenvalue is not zero then BA would be wrong. One more reasoning is that A has 3 columns and the columns of AB are linear combination of A only. Because AB is 4 x 4 and is generated using A. Means A has 3 columns and using these 3 columns and AB contains 4 columns. Now, these 4 columns should be linearly dependent as these 4 columns are generated from 3 LI columns of A or LD columns of A. that means determinant of AB is zero which means one of the eigenvalues of AB should be zero. As determinant is product of eigenvalues.</p>
                                    </Card>

                                    <Card className="p-4">
                                        <p className="font-semibold">Q3: Consider A be 10x10 matrix having rank 2.</p>
                                        <p className="mt-2">So, Nullity is 8. Rank is 2 means determinants should be zero. Because you have 10 dimensions of which only 2 dimensions are dominating so determinant is zero. Determinant is nothing but product of eigenvalues. Which means one of the eigenvalues is zero. And This nullity is nothing but no of linearly independent eigenvector corresponding to these zero eigenvalues.</p>
                                    </Card>
                                </div>
                            </SubSection>

                            <SubSection title="Important Notes">
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li>Single eigen value can have multiple LI eigenvectors.</li>
                                        <li>If there is pivot element in any column then it is LI also. So, if every row contains pivot element means that columns can have ability to produce any vector in that space.</li>
                                        <li>When solving Ax = b question, also take help from pivot and free variable.</li>
                                        <li>If Ax = b has unique solution then A has to be invertible. This seems correct at first glance but consider A matrix having 3 x 2. Here unique solution exists but A is not invertible since it is not square matrix. So, this sentence is false.</li>
                                        <li>Unit eigenvector is nothing but vector divided by magnitude. Same as unit vector. Consider x be the unit eigenvector then x.xT is 1 because x.xT is nothing but magnitude of unit vector which is nothing but 1.</li>
                                        <li>Ax = λx means that after applying linear transformation A on x, x would get scaled by some constant factor λ. If scaled version of x is concurrent to previous x then corresponding factor will be real number (i.e. λ asso. With x is real number) if scaled version of x is not concurrent to previous x (i.e. rotated by some factor) then factor associated with x is imaginary number.</li>
                                        <li>Apply definition of symmetric do not take example without taking definition.</li>
                                    </ul>
                                </div>
                            </SubSection>
                        </div>
                    </SubSection>
                </div>
            </Section>
        </div>
    );
};

export default LinearAlgebraNotes;