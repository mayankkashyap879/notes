'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/Section';
import { SubSection } from '@/components/ui/SubSection';

const GraphTheoryNotes: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <Section title="1. Basic Terminology">
                <div className="space-y-4">
                    <p className="text-lg">
                        Graph theory was established by Leonhard Euler in 1736 when he solved the famous Seven Bridges of Königsberg problem. Here graph is different from math function graph - it is a structure consisting of nodes and edges connecting those nodes.
                    </p>

                    <SubSection title="Graph Definition">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p>A graph G = (V, E) consists of two sets:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>V: A nonempty set of vertices</li>
                                    <li>E: A set of edges (unordered pairs of vertices)</li>
                                    <li>Size: Number of edges |E|</li>
                                    <li>Order: Number of vertices |V|</li>
                                </ul>
                                <p className="mt-2 text-sm">For instance, V = {'{1, 2, 3, 4, 5, 6}'} and E = {'{1, 2}, {2, 3}, ...{4, 6}'}</p>
                                <p className="mt-2 text-sm font-medium">Note: We use {'{a, b}'} for edges rather than (a, b) because edges are unordered pairs in undirected graphs</p>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Types of Edges">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <ul className="list-disc ml-6">
                                    <li>Undirected edge: No direction specified (e = {'{a, b}'})</li>
                                    <li>Directed edge: Has a specific direction (e = (a, b))</li>
                                    <li>Self-loop: Edge connecting a vertex to itself</li>
                                    <li>Multi-edges/Parallel edges: Multiple edges between same vertices</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Types of Graphs">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border p-2 text-left">Type</th>
                                        <th className="border p-2 text-left">Edges</th>
                                        <th className="border p-2 text-left">Multiple Edges?</th>
                                        <th className="border p-2 text-left">Loops?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-2">Simple graph</td>
                                        <td className="border p-2">Undirected</td>
                                        <td className="border p-2">No</td>
                                        <td className="border p-2">No</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-2">Multigraph</td>
                                        <td className="border p-2">Undirected</td>
                                        <td className="border p-2">Yes</td>
                                        <td className="border p-2">No</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-2">Pseudograph</td>
                                        <td className="border p-2">Undirected</td>
                                        <td className="border p-2">Yes</td>
                                        <td className="border p-2">Yes</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-2">Directed graph</td>
                                        <td className="border p-2">Directed</td>
                                        <td className="border p-2">No</td>
                                        <td className="border p-2">No</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-2">Mixed graph</td>
                                        <td className="border p-2">Both</td>
                                        <td className="border p-2">Yes</td>
                                        <td className="border p-2">Yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </SubSection>

                    <SubSection title="Vertex Properties">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Adjacency and Degree:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>Two vertices are adjacent if they share an edge</li>
                                    <li>Adjacent edges share a common endpoint</li>
                                    <li>Degree of a vertex (deg(v)): Number of edges incident to the vertex</li>
                                    <li>Self-loops contribute twice to degree</li>
                                    <li>Isolated vertex: Degree zero</li>
                                    <li>Pendant vertex: Degree one</li>
                                </ul>

                                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded">
                                    <p className="font-medium">Example Degrees:</p>
                                    <ul className="list-disc ml-6 mt-2">
                                        <li>deg(a) = 2</li>
                                        <li>deg(b) = 4</li>
                                        <li>deg(c) = 4</li>
                                        <li>deg(d) = 1 (pendant)</li>
                                        <li>deg(g) = 0 (isolated)</li>
                                    </ul>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Additional Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>min-deg(G): Minimum degree in graph G</li>
                                    <li>max-deg(G): Maximum degree in graph G</li>
                                    <li>Total-deg(G): Sum of all degrees</li>
                                    <li>Avg-deg(G) = Total-deg(G) / no. of vertices</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Handshaking Theorems">
                        <div className="space-y-4">
                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">For Undirected Graphs:</p>
                                <ul className="list-disc ml-6">
                                    <li>Total degree = 2 × |E|</li>
                                    <li>Adding one edge increases total degree by two</li>
                                    <li>Number of odd-degree vertices must be even</li>
                                    <li>Average degree = (2 × |E|) / |V|</li>
                                </ul>

                                <div className="mt-4 bg-white/50 dark:bg-black/50 p-3 rounded">
                                    <p className="font-medium">Example:</p>
                                    <p>For a graph with 10 vertices each of degree six:</p>
                                    <ul className="list-disc ml-6">
                                        <li>Total degree = 10 × 6 = 60</li>
                                        <li>Using handshaking theorem: 60 = 2 × |E|</li>
                                        <li>Therefore, |E| = 30 edges</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">For Directed Graphs:</p>
                                <ul className="list-disc ml-6">
                                    <li>Indegree (deg-(v)): Number of edges terminating at v</li>
                                    <li>Outdegree (deg+(v)): Number of edges originating from v</li>
                                    <li>∑deg-(v) = ∑deg+(v) = |E|</li>
                                    <li>A loop contributes 1 to both indegree and outdegree</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Degree Sequence">
                        <Card className="p-4">
                            <p>The degree sequence of a graph of order n is the n-term sequence of vertex degrees, usually written in descending order.</p>
                            <div className="mt-2">
                                <p className="text-sm">Example: For a path graph with 4 vertices</p>
                                <p className="text-sm">Degree sequence: (2, 2, 1, 1)</p>
                            </div>
                        </Card>
                    </SubSection>
                </div>
            </Section>

            <Section title="2. More Graph Terminology">
                <div className="space-y-6">
                    {/* Walk, Trail, Path Section - Added from PDF */}
                    <SubSection title="Walk, Trail, Path and Circuits">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Basic Definitions:</p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>
                                        <span className="font-medium">Walk:</span> A sequence of alternating vertices and edges v₁e₁v₂e₂...vₙeₙvₙ₊₁ with n≥0
                                        <ul className="list-disc ml-6 mt-1">
                                            <li>Closed if v₁ = vₙ₊₁</li>
                                            <li>Length is the number of edges</li>
                                            <li>Trivial walk has length zero</li>
                                            <li>Allows repetition of edges and vertices</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-medium">Trail:</span> A walk where repetition of edges is not allowed
                                        <ul className="list-disc ml-6 mt-1">
                                            <li>Closed trail is also known as circuit</li>
                                            <li>Trivial circuit has a single vertex and no edges</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-medium">Path:</span> A walk with no repetition of edges or vertices
                                        <ul className="list-disc ml-6 mt-1">
                                            <li>No vertex repetitions implies no edge repetitions in simple graphs</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-medium">Cycle:</span> A sequence of alternating distinct vertices and edges with n≥3 where only first/last vertex repeats
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Connected Components">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Component Definition:</p>
                                <p>A maximal connected subgraph. Why maximal not maximum?</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>Maximum connected graph: largest possible connected subgraph</li>
                                    <li>Maximal connected graph: set of all connected components</li>
                                    <li>Cannot be contained in any larger connected subgraph</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Connected Graph Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>Path exists between every pair of distinct vertices</li>
                                    <li>Forms an equivalence relation on vertices</li>
                                    <li>Number of equivalence classes equals number of connected components</li>
                                </ul>
                            </Card>

                            {/* Added properties from PDF */}
                            <Card className="p-4">
                                <p className="font-semibold">Additional Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>Every component is maximal with respect to connectivity</li>
                                    <li>Vertices are connected if there is a path between them</li>
                                    <li>Connected components partition the vertex set</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Complement of Graphs">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Complement Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>For graph G(V,E), complement G'(V,E') has edges missing from G</li>
                                    <li>|E'| = n(n-1)/2 - |E| where n is number of vertices</li>
                                    <li>Complement of disconnected graph is always connected</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Self-Complementary Graph:</p>
                                <p>A graph is self-complementary if the graph and its complement are isomorphic</p>
                                <p className="mt-2">Example: Every path graph is self-complementary</p>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Bipartite Graphs">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Definition:</p>
                                <p>A graph whose vertices can be divided into two disjoint sets where:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>X ∩ Y = ∅</li>
                                    <li>No edges between vertices in same set</li>
                                    <li>X ∪ Y = V</li>
                                    <li>X, Y can be empty</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Key Theorem:</p>
                                <p>A graph is bipartite if and only if it doesn't have an odd cycle</p>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Complete Bipartite Graph (Km,n):</p>
                                <ul className="list-disc ml-6">
                                    <li>|V| = m + n</li>
                                    <li>|E| = mn</li>
                                    <li>Degree sequence: n (m times), m (n times)</li>
                                    <li>If a graph on n vertices has edges {'>'} ⌊n²/4⌋, it cannot be bipartite</li>
                                </ul>
                            </Card>

                            {/* Added from PDF */}
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Additional Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>Every tree is bipartite</li>
                                    <li>Every cycle of even length is bipartite</li>
                                    <li>Sum of degrees in each partition is equal</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Graph Properties">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Cyclic and Acyclic Graphs:</p>
                                <ul className="list-disc ml-6">
                                    <li>Cyclic Graph: Contains at least one cycle</li>
                                    <li>Acyclic Graph: No cycles (also called forest if not necessarily connected)</li>
                                    <li>Tree: Connected acyclic graph</li>
                                    <li>Forest: Components are trees</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Tree Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>Number of edges = n - 1 (n vertices)</li>
                                    <li>Unique path between any two vertices</li>
                                    <li>Minimally connected: removing any edge disconnects it</li>
                                    <li>Maximally acyclic: adding any edge creates a cycle</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="3. Connectivity and Coloring">
                <div className="space-y-6">
                    <SubSection title="Maximal vs Maximum">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Definitions:</p>
                                <ul className="list-disc ml-6">
                                    <li>Maximal: A set where no new elements can be added while preserving the property</li>
                                    <li>Maximum: The largest among all maximal sets</li>
                                </ul>
                                <p className="mt-2 text-sm">Example: For property P: &quot;No two elements consecutive&quot; in set S = {'{1, 2, 3, 4, 5}'}:</p>
                                <ul className="list-disc ml-6 mt-1">
                                    <li>{'{2, 4}'} and {'{1, 3, 5}'} are maximal sets</li>
                                    <li>{'{1, 3, 5}'} is the maximum set</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Cliques and Independent Sets">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Clique:</p>
                                <p>A set of pairwise adjacent vertices in a graph</p>

                                <p className="font-semibold mt-4">Independent Set:</p>
                                <p>A set of pairwise non-adjacent vertices</p>

                                <div className="mt-4">
                                    <p className="font-semibold">Important Numbers:</p>
                                    <ul className="list-disc ml-6">
                                        <li>ω(G): Clique number (size of maximum clique)</li>
                                        <li>α(G): Independence/stability number (size of maximum independent set)</li>
                                    </ul>
                                </div>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Special Cases:</p>
                                <ul className="list-disc ml-6">
                                    <li>For cycle graph Cn: ω(Cn) = 2</li>
                                    <li>For cycle graph Cn: α(Cn) = ⌊n/2⌋</li>
                                    <li>For hypercube Qn: ω(Qn) = 2</li>
                                    <li>For hypercube Qn: α(Qn) = 2^(n-1)</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Vertex and Edge Covers">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Vertex Cover:</p>
                                <ul className="list-disc ml-6">
                                    <li>Set of vertices covering all edges</li>
                                    <li>β(G): Vertex covering number</li>
                                    <li>Must contain at least one endpoint of every edge</li>
                                </ul>

                                <p className="font-semibold mt-4">Edge Cover:</p>
                                <ul className="list-disc ml-6">
                                    <li>Set of edges covering all vertices</li>
                                    <li>β&apos;(G): Edge covering number</li>
                                    <li>Exists if and only if δ &gt; 0 (minimum degree &gt; 0)</li>
                                    <li>Minimum edge cover ≥ ⌈n/2⌉</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Important Relationships:</p>
                                <ul className="list-disc ml-6">
                                    <li>α + β = n (vertex cover and independent set)</li>
                                    <li>α&apos; + β&apos; = n (matching and edge cover)</li>
                                    <li>β&apos; ≥ ⌈n/2⌉</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Cut Vertices and Bridges">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Definitions:</p>
                                <ul className="list-disc ml-6">
                                    <li>Cut Vertex (Articulation Point): A vertex whose removal increases the number of components</li>
                                    <li>Bridge (Cut Edge): An edge whose removal increases the number of components</li>
                                </ul>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>All non-cycle edges are bridges</li>
                                    <li>A vertex incident to a bridge is a cut vertex if and only if its degree ≥ 2</li>
                                    <li>Cut vertices and bridges only defined for connected graphs</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Graph Coloring">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Vertex Coloring:</p>
                                <ul className="list-disc ml-6">
                                    <li>Assignment of colors to vertices</li>
                                    <li>No adjacent vertices share same color</li>
                                    <li>χ(G): Chromatic number (minimum colors needed)</li>
                                    <li>k-colorable: Can be colored using k colors</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Brooks&apos; Theorem:</p>
                                <p>All connected graphs have χ(G) ≤ Δ(G), except for complete graphs and odd cycles</p>

                                <p className="font-semibold mt-4">Important Bounds:</p>
                                <ul className="list-disc ml-6">
                                    <li>Δ(G) + 1 ≥ χ(G) ≥ ω(G)</li>
                                    <li>χ(G) ≤ d + 1 where d is maximum degree</li>
                                </ul>
                            </Card>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Greedy Coloring Algorithm:</p>
                                <ul className="list-disc ml-6">
                                    <li>Process vertices in any order</li>
                                    <li>Assign smallest available color not used by neighbors</li>
                                    <li>May not achieve optimal coloring</li>
                                    <li>Uses at most Δ(G) + 1 colors</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Matching">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Definition:</p>
                                <p>A matching is a set of pairwise non-adjacent edges (edge independent set)</p>

                                <div className="mt-4">
                                    <p className="font-semibold">Types:</p>
                                    <ul className="list-disc ml-6">
                                        <li>Perfect Matching: Covers all vertices</li>
                                        <li>Maximum Matching: Largest possible matching</li>
                                        <li>μ(G) or α&apos;(G): Matching number (size of maximum matching)</li>
                                    </ul>
                                </div>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>μ ≤ β ≤ 2μ</li>
                                    <li>For bipartite graphs: μ = β</li>
                                    <li>Complete graph with 2n vertices has (2n-1)!! perfect matchings</li>
                                    <li>Maximum matching covers even number of vertices</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="4. More on Connectivity">
                <div className="space-y-6">
                    <p className="text-lg">
                        This section explores the concepts of vertex and edge connectivity, cut vertices, cut edges, and strong/weak connectivity in graphs.
                    </p>

                    <SubSection title="Cut Vertices and Cut Edges">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Cut Vertex (Articulation Point):</p>
                                <p>A vertex whose removal creates more components in the graph.</p>

                                <div className="mt-4">
                                    <p className="font-semibold">Cut Edge (Bridge):</p>
                                    <p>An edge whose removal creates more components in the graph.</p>
                                    <ul className="list-disc ml-6 mt-2">
                                        <li>All non-cycle edges are cut edges or bridges</li>
                                        <li>If a graph contains a bridge e incident with vertex v, then v is a cut vertex if and only if deg v ≥ 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Vertex Cut and Edge Cut">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Vertex Cut:</p>
                                <ul className="list-disc ml-6">
                                    <li>A set of vertices whose removal increases number of components</li>
                                    <li>Only defined for connected graphs (unlike cut vertex)</li>
                                    <li>Vertex cut is a subset of vertices whose removal either disconnects graph OR leaves a single vertex</li>
                                </ul>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Edge Cut:</p>
                                <ul className="list-disc ml-6">
                                    <li>A set of edges whose removal increases number of components</li>
                                    <li>Only defined for connected graphs (unlike bridges)</li>
                                    <li>Every minimal edge cut is the set of edges from some subset of vertices to its complement</li>
                                </ul>
                            </Card>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Connectivity Number (κ(G)):</p>
                                <ul className="list-disc ml-6">
                                    <li>Size of smallest vertex cut</li>
                                    <li>Expresses difficulty of disconnecting the graph by removing vertices</li>
                                    <li>For disconnected graph: κ(G) = 0</li>
                                    <li>For complete graph Kn: κ(Kn) = n-1</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="k-Connected Graphs">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Definition:</p>
                                <p>A graph is k-connected if κ(G) ≥ k, where k is variable.</p>
                                <p className="mt-2">Alternatively: Removal of any ≤ k-1 vertices doesn't disconnect the graph or leaves a single vertex.</p>

                                <div className="mt-4">
                                    <p className="font-semibold">Important Properties:</p>
                                    <ul className="list-disc ml-6">
                                        <li>Every k-connected graph is also (k-1)-connected</li>
                                        <li>For complete graphs: Kn is (n-1)-connected</li>
                                        <li>Minimum degree δ(G) ≥ κ(G) for any graph G</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Strong and Weak Connectivity">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Singly Connected Graph:</p>
                                <p>A directed graph G = (V, E) is singly connected if u → v implies that G contains at most one simple path from u to v for all vertices u, v ∈ V.</p>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Strongly Connected:</p>
                                <ul className="list-disc ml-6">
                                    <li>In a directed graph, two nodes u and v are strongly connected if there is a path from u to v AND from v to u</li>
                                    <li>Forms an equivalence relation on vertices</li>
                                    <li>Every vertex is strongly connected to itself</li>
                                </ul>
                            </Card>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Strongly Connected Components:</p>
                                <ul className="list-disc ml-6">
                                    <li>Each equivalence class of "strongly connected relation" is called a strongly connected component</li>
                                    <li>Every vertex belongs to exactly one strongly connected component</li>
                                    <li>Maximum subgraphs that are strongly connected</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Weakly Connected:</p>
                                <ul className="list-disc ml-6">
                                    <li>A directed graph is weakly connected if its underlying undirected graph is connected</li>
                                    <li>Every strongly connected graph is weakly connected</li>
                                    <li>A graph can be weakly connected without being strongly connected</li>
                                </ul>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Associated DAG:</p>
                                <p>Created by:</p>
                                <ul className="list-disc ml-6">
                                    <li>Shrinking each strongly connected component to a single node</li>
                                    <li>Drawing edges between components if there was an edge from a vertex in first component to a vertex in second component</li>
                                    <li>Results in a directed acyclic graph</li>
                                    <li>Useful for analyzing the overall structure of directed graphs</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Properties of Strong Components:</p>
                                <ul className="list-disc ml-6">
                                    <li>Every maximal strongly connected subgraph is a strong component</li>
                                    <li>Strong components partition the vertex set</li>
                                    <li>The condensation of a directed graph (contracting each strong component to a vertex) is always acyclic</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="5. Euler and Hamiltonian Graph">
                <div className="space-y-6">
                    <p className="text-lg">
                        This section explores graph traversal problems, particularly the famous Seven Bridges of Königsberg problem and its generalizations.
                    </p>

                    <SubSection title="Historical Context">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Seven Bridges of Königsberg:</p>
                                <p>A historical problem that led to the development of graph theory: Is it possible to start at some location in the town, travel across all bridges once without crossing any bridge twice, and return to the starting point?</p>
                                <p className="mt-2 text-sm">Later solved by Leonhard Euler, establishing the foundations of graph theory.</p>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Euler Paths and Circuits">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Definitions:</p>
                                <ul className="list-disc ml-6">
                                    <li>Euler Circuit: A simple circuit containing every edge of G exactly once</li>
                                    <li>Euler Path: A simple path containing every edge of G exactly once</li>
                                    <li>Euler Graph: A connected graph with an Euler circuit</li>
                                    <li>Note: Euler circuit = Euler cycle (unlike general circuits and cycles)</li>
                                </ul>
                            </Card>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Key Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>Every vertex must have even degree for an Euler circuit to exist</li>
                                    <li>For an Euler path (without circuit), exactly two vertices must have odd degree</li>
                                    <li>An Euler circuit begins and ends at the same vertex</li>
                                    <li>A vertex other than the start/end has even degree as the path enters and exits equal times</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Directed Graph Conditions:</p>
                                <ul className="list-disc ml-6">
                                    <li>For Euler Circuit:
                                        <ul className="list-disc ml-6 mt-2">
                                            <li>Graph must be strongly connected</li>
                                            <li>Every vertex's indegree must equal its outdegree</li>
                                        </ul>
                                    </li>
                                    <li>For Euler Path:
                                        <ul className="list-disc ml-6 mt-2">
                                            <li>Graph must be weakly connected</li>
                                            <li>One vertex has indegree = outdegree - 1</li>
                                            <li>One vertex has indegree = outdegree + 1</li>
                                            <li>All other vertices have indegree = outdegree</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Hamiltonian Graph">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Core Concepts:</p>
                                <ul className="list-disc ml-6">
                                    <li>Hamiltonian Cycle: Visit every vertex exactly once</li>
                                    <li>Hamiltonian Path: Path visiting every vertex exactly once with different start and end points</li>
                                    <li>Hamiltonian Graph: Graph containing a Hamiltonian cycle</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Comparison with Euler Graphs:</p>
                                <div className="mt-2">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100 dark:bg-gray-700">
                                                <th className="border p-2">Feature</th>
                                                <th className="border p-2">Euler</th>
                                                <th className="border p-2">Hamiltonian</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border p-2">Vertex repetition</td>
                                                <td className="border p-2">Allowed</td>
                                                <td className="border p-2">Not allowed</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2">Edge repetition</td>
                                                <td className="border p-2">Not allowed</td>
                                                <td className="border p-2">Allowed</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2">Detection algorithm</td>
                                                <td className="border p-2">Efficient</td>
                                                <td className="border p-2">No efficient method</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Dirac's Theorem:</p>
                                <p>If minimum degree of any vertex in a simple connected undirected graph is ≥ n/2 (where n is the number of vertices), then a Hamiltonian cycle exists (provided |V| ≥ 3)</p>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Important Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>If a Hamiltonian cycle exists, then a Hamiltonian path exists (but not vice versa)</li>
                                    <li>If an Euler circuit exists, then an Euler path cannot exist in graphs with |V| &gt; 2</li>
                                    <li>Unlike Euler circuits, no simple characterization exists for Hamiltonian cycles</li>
                                    <li>Determining if a graph has a Hamiltonian cycle is NP-complete</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="6. Planar Graphs">
                <div className="space-y-6">
                    <p className="text-lg">
                        This section explores graphs that can be drawn in the plane without edge crossings and addresses the famous houses-and-utilities problem.
                    </p>

                    <SubSection title="Basic Definitions">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Definition:</p>
                                <p>A graph is called planar if it can be drawn in the plane without any edges crossing (where a crossing of edges is the intersection of the lines or arcs representing them at a point other than their common endpoint). Such a drawing is called a planar representation of the graph.</p>
                                <div className="mt-2">
                                    <p className="font-medium">Key Points:</p>
                                    <ul className="list-disc ml-6 mt-2">
                                        <li>Edges can only intersect at vertices</li>
                                        <li>Drawing must be continuous</li>
                                        <li>A planar representation splits the plane into regions (faces)</li>
                                        <li>One of these regions is unbounded (exterior face)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Euler's Formula">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Fundamental Equation:</p>
                                <p>For a connected planar graph with v vertices, e edges, and f faces:</p>
                                <p className="mt-2 text-lg font-medium text-center">v - e + f = 2</p>
                                <p className="mt-2 text-sm">This formula is valid for any planar representation of a connected graph.</p>
                            </Card>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Important Corollaries:</p>
                                <ul className="list-disc ml-6">
                                    <li>For any connected planar simple graph where v ≥ 3: e ≤ 3v - 6</li>
                                    <li>Every planar graph has a vertex of degree at most 5</li>
                                    <li>If G is a connected planar simple graph with no circuits of length three, then e ≤ 2v - 4</li>
                                    <li>If G has girth g (length of shortest cycle) &gt; 3, then e ≤ (g/(g-2))(v-2)</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Corollary Proofs">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Proof of Vertex Degree ≤ 5:</p>
                                <ul className="list-disc ml-6">
                                    <li>For a graph with v ≥ 3, we know e ≤ 3v - 6</li>
                                    <li>If every vertex had degree ≥ 6, then 2e ≥ 6v</li>
                                    <li>This would contradict e ≤ 3v - 6</li>
                                    <li>Therefore, at least one vertex must have degree ≤ 5</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Consequences:</p>
                                <ul className="list-disc ml-6">
                                    <li>The average degree of a planar graph is less than 6</li>
                                    <li>This property is crucial for graph coloring algorithms</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Non-Planar Graphs">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Important Examples:</p>
                                <ul className="list-disc ml-6">
                                    <li>K₅ (complete graph on 5 vertices) is not planar</li>
                                    <li>K₃,₃ (complete bipartite graph with 3 vertices in each partition) is not planar</li>
                                    <li>These are the fundamental non-planar graphs</li>
                                </ul>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>Any graph containing K₅ or K₃,₃ as a subgraph is non-planar</li>
                                    <li>The converse is not necessarily true</li>
                                    <li>Subdivisions of these graphs are also non-planar</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Kuratowski's Theorem">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Theorem Statement:</p>
                                <p>A graph is planar if and only if it contains no subgraph homeomorphic to K₅ or K₃,₃</p>

                                <div className="mt-4">
                                    <p className="font-semibold">Homeomorphic Graphs:</p>
                                    <ul className="list-disc ml-6">
                                        <li>Obtained from the same graph by elementary subdivisions</li>
                                        <li>Elementary subdivision: Replacing an edge with a path through a new vertex</li>
                                    </ul>
                                </div>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Application:</p>
                                <p>The theorem provides a complete characterization of planar graphs and can be used to prove that a graph is non-planar by finding a subgraph homeomorphic to either K₅ or K₃,₃.</p>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Region Degrees">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Degree of a Region:</p>
                                <ul className="list-disc ml-6">
                                    <li>Number of edges on the boundary of the region</li>
                                    <li>Edges appearing twice on the boundary count twice</li>
                                    <li>Minimum degree of a region in a simple graph is 3</li>
                                    <li>For any face f, deg(f) ≥ girth of G</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Properties of Regions:</p>
                                <ul className="list-disc ml-6">
                                    <li>Sum of degrees of all regions is 2|E|</li>
                                    <li>Average degree of regions is at least 3</li>
                                    <li>In a simple planar graph, f ≤ 2v - 4</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Houses-and-Utilities Problem">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Problem Statement:</p>
                                <p>Given three houses and three utilities (water, gas, electricity), is it possible to connect each house to each utility without any crossings?</p>

                                <div className="mt-4">
                                    <p className="font-semibold">Solution:</p>
                                    <ul className="list-disc ml-6">
                                        <li>This problem is equivalent to asking if K₃,₃ is planar</li>
                                        <li>Since K₃,₃ is not planar, the problem has no solution</li>
                                        <li>This can be proved using Euler's formula or Kuratowski's theorem</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="7. Powers of Adjacency Matrix of a Graph">
                <div className="space-y-6">
                    <div className="text-lg">
                        <p>This section explores how powers of adjacency matrices can be used to analyze walks, paths, and connectivity in graphs.</p>
                    </div>

                    <SubSection title="Basic Understanding">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Key Concepts:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>An adjacency matrix (M) of a graph gives walks of length 1</li>
                                    <li>M² shows the number of walks of length 2 between vertex pairs</li>
                                    <li>M^n element (i,j) gives the number of walks of length n from vertex i to j</li>
                                    <li>If n is the smallest nonnegative integer where element (i,j) of M^n is positive, then n is the distance between vertices i and j</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Finding Vertex Degrees">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Two Methods:</p>
                                <ol className="list-decimal ml-6 space-y-2">
                                    <li>Count row/column entries in adjacency matrix</li>
                                    <li>Use M², where main diagonal contains vertex degrees</li>
                                    <li>For simple undirected graphs: trace(M²) = Σdeg(v) = 2|E|</li>
                                </ol>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Testing Graph Connectivity">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">For Undirected Graphs:</p>
                                <ul className="list-disc ml-6">
                                    <li>Method 1: M¹ + M² + ... + M^(n-1) where n is vertex count</li>
                                    <li>Method 2: (I_n + A)^(n-1) should have no zeros</li>
                                </ul>

                                <p className="font-semibold mt-4">For Directed Graphs:</p>
                                <ul className="list-disc ml-6">
                                    <li>Method 1: M¹ + M² + ... + M^n where n is vertex count</li>
                                    <li>Method 2: (I_n + A)^n should have no zeros</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Self-Loop Transformation">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p>If we convert undirected graph G to a new graph G' by adding self-loops on all vertices then:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>If there's a walk of length 1 to n-1 in G between vertices</li>
                                    <li>Then there's a walk of exactly length n-1 in G'</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Applications">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Counting 3-Length Cycles:</p>
                                <p>For directed simple graphs with no self-loops:</p>
                                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
                                    <p>Number of 3-length cycles = trace(M³)/3</p>
                                </div>
                            </Card>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Finding Paths:</p>
                                <ul className="list-disc ml-6">
                                    <li>Distance between vertices equals smallest k where M^k has positive (i,j) entry</li>
                                    <li>Number of distinct paths equals entry value in corresponding matrix power</li>
                                    <li>Can be used to determine all possible connections between vertices</li>
                                    <li>Helpful in finding shortest paths and connectivity analysis</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Matrix Properties">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Important Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>For undirected graphs: M is symmetric</li>
                                    <li>For simple graphs: Main diagonal is zero</li>
                                    <li>For directed graphs: May be asymmetric</li>
                                    <li>Sum of diagonal elements in M² equals twice the number of edges</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Using Powers for Graph Analysis">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Connectivity Analysis:</p>
                                <ul className="list-disc ml-6">
                                    <li>Check if graph is connected using M¹ + M² + ... + M^(n-1)</li>
                                    <li>For directed graphs, use M¹ + M² + ... + M^n</li>
                                    <li>Add self-loops for exact length walks</li>
                                    <li>Can determine strongly connected components in directed graphs</li>
                                </ul>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Transitive Closure:</p>
                                <p>Can be found using matrix powers to determine all possible connections between vertices</p>
                                <p className="mt-2">The transitive closure matrix shows whether there exists a path between any two vertices</p>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Matrix Power Examples">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Example 1: Finding Walks</p>
                                <div className="mt-4">
                                    <p>Consider this graph:</p>
                                    <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-800 rounded">
                                        <p>Adjacency Matrix M:</p>
                                        <pre className="mt-2">
                                            {`[0 1 1 0]
[1 0 0 1]
[1 0 0 1]
[0 1 1 0]`}
                                        </pre>

                                        <p className="mt-4">M² (showing walks of length 2):</p>
                                        <pre className="mt-2">
                                            {`[2 0 0 2]
[0 2 2 0]
[0 2 2 0]
[2 0 0 2]`}
                                        </pre>

                                        <p className="mt-2 text-sm">Entry M²[1,4] = 2 means there are two different walks of length 2 from vertex 1 to vertex 4</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <p className="font-semibold">Example 2: Finding Circuits</p>
                                <div className="mt-2">
                                    <p>For the same matrix:</p>
                                    <p>M³[1,1] = 0 means no circuits of length 3 starting at vertex 1</p>
                                    <p>But M⁴[1,1] = 4 means there are 4 circuits of length 4 starting at vertex 1</p>
                                </div>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Degree Calculation Examples">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Method 1: Row/Column Sum</p>
                                <div className="mt-2">
                                    <pre className="bg-white dark:bg-gray-900 p-2 rounded">
                                        {`[0 1 1]
[1 0 1]
[1 1 0]`}
                                    </pre>
                                    <p className="mt-2">Degrees:</p>
                                    <ul className="list-disc ml-6">
                                        <li>Vertex 1: sum of row 1 = 2</li>
                                        <li>Vertex 2: sum of row 2 = 2</li>
                                        <li>Vertex 3: sum of row 3 = 2</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Method 2: Using M²</p>
                                <p className="mt-2">M² diagonal entries show:</p>
                                <pre className="bg-white/50 dark:bg-black/50 p-2 rounded mt-2">
                                    {`[2 * * ]
[* 2 * ]
[* * 2 ]`}
                                </pre>
                                <p className="mt-2">Main diagonal entries equal the vertex degrees</p>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="3-Length Cycle Detection">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Counting 3-Length Cycles:</p>
                                <div className="mt-2">
                                    <p>Example calculation:</p>
                                    <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded mt-2">
                                        {`M = [0 1 0]
    [0 0 1]
    [1 0 0]

M³ = [0 0 2]
     [2 0 0]
     [0 2 0]`}
                                    </pre>
                                    <p className="mt-2">trace(M³) = 0</p>
                                    <p>Therefore, no 3-length cycles exist in this graph</p>
                                </div>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Transitive Closure Example">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Finding Transitive Closure:</p>
                                <div className="mt-2">
                                    <p>Original Matrix A:</p>
                                    <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded">
                                        {`[0 1 0]
 [0 0 1]
 [0 0 0]`}
                                    </pre>
                                    <p className="mt-4">Transitive Closure T = A + A² + A³:</p>
                                    <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded">
                                        {`[0 1 1]
 [0 0 1]
 [0 0 0]`}
                                    </pre>
                                    <p className="mt-2">Entry T[1,3] = 1 indicates existence of a path from vertex 1 to 3</p>
                                </div>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Special Properties and Tips">
                        <div className="space-y-4">
                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Important Observations:</p>
                                <ul className="list-disc ml-6">
                                    <li>The power of adjacency matrix can never have negative entries</li>
                                    <li>For simple graphs, diagonal entries of M are always 0</li>
                                    <li>In undirected graphs, all powers of M remain symmetric</li>
                                    <li>Entry (i,j) in M^k counts walks of exact length k from i to j</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Practical Applications:</p>
                                <ul className="list-disc ml-6">
                                    <li>Network reachability analysis</li>
                                    <li>Finding shortest paths between vertices</li>
                                    <li>Detecting cycles of specific lengths</li>
                                    <li>Analyzing connectivity patterns</li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>
                </div>
            </Section>

        </div>
    );
};

export default GraphTheoryNotes;