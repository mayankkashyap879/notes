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
                    <p className="text-lg">Graph theory studies the relationships between objects through vertices and edges, established by Leonhard Euler in 1736.</p>

                    <SubSection title="Graph Definition">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p>A graph G = (V, E) consists of two sets:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>V: A nonempty set of vertices</li>
                                    <li>E: A set of edges (unordered pairs of vertices)</li>
                                    <li>Size: Number of edges</li>
                                    <li>Order: Number of vertices</li>
                                </ul>
                                <p className="mt-2 text-sm">Example: V = {'{1, 2, 3, 4, 5, 6}'} and E = {'{1, 2}, {2, 3}, ...{4, 6}'}</p>
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
                                </tbody>
                            </table>
                        </div>
                    </SubSection>

                    <SubSection title="Vertex Properties">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Degree of a Vertex (deg(v)):</p>
                                <ul className="list-disc ml-6">
                                    <li>Number of edges incident to the vertex</li>
                                    <li>Self-loops contribute twice to degree</li>
                                    <li>Isolated vertex: Degree zero</li>
                                    <li>Pendant vertex: Degree one</li>
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
                                </ul>
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
                        </Card>
                    </SubSection>
                </div>
            </Section>

            <Section title="2. More Graph Terminology">
                <div className="space-y-6">
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
                        </div>
                    </SubSection>

                    <SubSection title="Complement of Graphs">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Complement Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>For graph G(V,E), complement G&apos;(V,E&apos;) has edges missing from G</li>
                                    <li>|E&apos;| = n(n-1)/2 - |E| where n is number of vertices</li>
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
                                <p>A graph is bipartite if and only if it doesn&apos;t have an odd cycle</p>
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
                                </ul>
                            </Card>
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
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="4. More on Connectivity">
                <div className="space-y-6">
                    <SubSection title="Cut Vertices and Cut Edges">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Cut Vertex (Articulation Point):</p>
                                <p>A vertex whose removal creates more components in the graph.</p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Cut Edge (Bridge):</p>
                                <p>An edge whose removal creates more components in the graph.</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>All non-cycle edges are cut edges or bridges</li>
                                    <li>If a graph contains a bridge e incident with vertex v, then v is a cut vertex if and only if deg v ≥ 2</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Connectivity Number and Cuts">
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
                                </ul>
                            </Card>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Connectivity Number (κ(G)):</p>
                                <ul className="list-disc ml-6">
                                    <li>Size of smallest vertex cut</li>
                                    <li>Expresses difficulty of disconnecting the graph by removing vertices</li>
                                    <li>For disconnected graph: κ(G) = 0</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="k-Connected Graphs">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Definition:</p>
                                <p>A graph is k-connected if κ(G) ≥ k, where k is variable.</p>
                                <p className="mt-2">Alternatively: Removal of any ≤ k-1 vertices doesn&apos;t disconnect the graph or leaves a single vertex.</p>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Strong and Weak Connectivity">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Strongly Connected:</p>
                                <ul className="list-disc ml-6">
                                    <li>In a directed graph, two nodes u and v are strongly connected if there is a path from u to v AND from v to u</li>
                                    <li>Forms an equivalence relation on vertices</li>
                                </ul>
                            </Card>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Strongly Connected Components:</p>
                                <p>Each equivalence class of &quot;strongly connected relation&quot; is called a strongly connected component</p>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Weakly Connected:</p>
                                <ul className="list-disc ml-6">
                                    <li>A directed graph is weakly connected if its underlying undirected graph is connected</li>
                                    <li>Every strongly connected graph is weakly connected</li>
                                </ul>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Associated DAG:</p>
                                <p>Created by:</p>
                                <ul className="list-disc ml-6">
                                    <li>Shrinking each strongly connected component to a single node</li>
                                    <li>Drawing edges between components if there was an edge from a vertex in first component to a vertex in second component</li>
                                    <li>Results in a directed acyclic graph</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Singly Connected Graphs">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Definition:</p>
                                <p>A directed graph G = (V, E) is singly connected if u → v implies that G contains at most one simple path from u to v for all vertices u, v ∈ V.</p>
                            </Card>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="5. Euler and Hamiltonian Graph">
                <div className="space-y-6">
                    <SubSection title="Historical Context">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Seven Bridges of Königsberg:</p>
                                <p>A historical problem that led to the development of graph theory: Is it possible to start at some location in the town, travel across all bridges once without crossing any bridge twice, and return to the starting point?</p>
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
                                </ul>
                            </Card>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Key Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>A connected graph is Eulerian if and only if every vertex has even degree</li>
                                    <li>For undirected graphs: every vertex must have even degree to leave after entering</li>
                                    <li>A graph has an Euler path but no Euler circuit if and only if it has exactly two vertices of odd degree</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Directed Graph Conditions:</p>
                                <ul className="list-disc ml-6">
                                    <li>For Euler Circuit: Graph must be strongly connected and indegree = outdegree for all vertices</li>
                                    <li>For Euler Path: Graph must be weakly connected with:
                                        <ul className="list-disc ml-6 mt-2">
                                            <li>One vertex with indegree = outdegree - 1</li>
                                            <li>One vertex with indegree = outdegree + 1</li>
                                            <li>All other vertices having indegree = outdegree</li>
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
                                <p className="font-semibold">Dirac&apos;s Theorem:</p>
                                <p>If minimum degree of any vertex in a simple connected undirected graph is ≥ n/2 (where n is the number of vertices), then a Hamiltonian cycle exists (provided |V| ≥ 3)</p>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Important Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>If a Hamiltonian cycle exists, then a Hamiltonian path exists (but not vice versa)</li>
                                    <li>If an Euler circuit exists, then an Euler path cannot exist in graphs with |V| &gt; 2</li>
                                    <li>Unlike Euler circuits, no simple characterization exists for Hamiltonian cycles</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="6. Planar Graphs">
                <div className="space-y-6">
                    <p className="text-lg">This section explores graphs that can be drawn in the plane without edge crossings, including the famous houses-and-utilities problem.</p>

                    <SubSection title="Basic Definitions">
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Planar Graph:</p>
                                <p>A graph that can be drawn in the plane without any edges crossing, where:</p>
                                <ul className="list-disc ml-6 mt-2">
                                    <li>Edges can only intersect at vertices</li>
                                    <li>Drawing must be continuous</li>
                                    <li>A planar representation splits the plane into regions (faces)</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Euler's Formula">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Fundamental Equation:</p>
                                <p>For a connected planar graph with v vertices, e edges, and f faces:</p>
                                <p className="mt-2 text-lg font-medium text-center">v - e + f = 2</p>
                            </Card>

                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Important Corollaries:</p>
                                <ul className="list-disc ml-6">
                                    <li>For any connected planar simple graph where v ≥ 3: e ≤ 3v - 6</li>
                                    <li>Every planar graph has a vertex of degree at most 5</li>
                                    <li>If G is a connected planar simple graph with no circuits of length three, then e ≤ 2v - 4</li>
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
                        </div>
                    </SubSection>

                    <SubSection title="Non-Planar Graphs">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Important Examples:</p>
                                <ul className="list-disc ml-6">
                                    <li>K₅ (complete graph on 5 vertices) is not planar</li>
                                    <li>K₃,₃ (complete bipartite graph with 3 vertices in each partition) is not planar</li>
                                </ul>
                            </Card>
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
                                </ul>
                            </div>
                        </div>
                    </SubSection>
                </div>
            </Section>

            <Section title="7. Powers of Adjacency Matrix of a Graph">
                <div className="space-y-6">
                    <SubSection title="Basic Concepts">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Definition:</p>
                                <ul className="list-disc ml-6">
                                    <li>Adjacency matrix (M) of a graph gives walks of length 1</li>
                                    <li>M² gives number of walks of length 2 between vertex pairs</li>
                                    <li>M^n element (i,j) gives number of walks of length n from vertex i to j</li>
                                </ul>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Important Property:</p>
                                <p>If n is the smallest nonnegative integer where element (i,j) of M^n is positive, then n is the distance between vertices i and j.</p>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Matrix Operations and Graph Properties">
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Finding Vertex Degrees:</p>
                                <ul className="list-disc ml-6">
                                    <li>In M², the main diagonal contains vertex degrees</li>
                                    <li>trace(M²) = Σdeg(v) = 2|E| (for simple undirected graphs)</li>
                                </ul>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Graph Connectivity Test:</p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>
                                        <p className="font-medium">Undirected Graphs:</p>
                                        <ul className="list-disc ml-6">
                                            <li>Method 1: M¹ + M² + ... + M^(n-1) where n is vertex count</li>
                                            <li>Method 2: (I_n + A)^(n-1) should have no zeros</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="font-medium">Directed Graphs:</p>
                                        <ul className="list-disc ml-6">
                                            <li>Method 1: M¹ + M² + ... + M^n where n is vertex count</li>
                                            <li>Method 2: (I_n + A)^n should have no zeros</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </SubSection>

                    <SubSection title="Specialized Applications">
                        <div className="space-y-4">
                            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                                <p className="font-semibold">Counting Cycles:</p>
                                <p>For directed simple graphs with no self-loops:</p>
                                <div className="mt-2 p-2 bg-white/50 dark:bg-black/50 rounded">
                                    <p>Number of 3-length cycles = trace(M³)/3</p>
                                </div>
                            </div>

                            <Card className="p-4">
                                <p className="font-semibold">Self-Loop Transformation:</p>
                                <p>Converting graph G to G&apos; by adding self-loops:</p>
                                <ul className="list-disc ml-6">
                                    <li>If there&apos;s a walk of length 1 to n-1 in G between vertices</li>
                                    <li>Then there&apos;s a walk of exactly length n-1 in G&apos;</li>
                                </ul>
                            </Card>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold">Matrix Properties:</p>
                                <ul className="list-disc ml-6">
                                    <li>For undirected graphs: M is symmetric</li>
                                    <li>For simple graphs: Main diagonal is zero</li>
                                    <li>For directed graphs: May be asymmetric</li>
                                </ul>
                            </div>
                        </div>
                    </SubSection>

                    <SubSection title="Additional Applications">
                        <div className="space-y-4">
                            <Card className="p-4">
                                <p className="font-semibold">Finding Paths:</p>
                                <ul className="list-disc ml-6">
                                    <li>Distance between vertices equals smallest k where M^k has positive (i,j) entry</li>
                                    <li>Number of distinct paths equals entry value in corresponding matrix power</li>
                                </ul>
                            </Card>

                            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                <p className="font-semibold">Transitive Closure:</p>
                                <p>Can be found using matrix powers to determine all possible connections between vertices</p>
                            </div>
                        </div>
                    </SubSection>
                </div>
            </Section>
        </div>
    );
};

export default GraphTheoryNotes;