"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ChevronsRight,
  Brain,
  Laptop,
  FileText,
  Atoms,
  Robot,
  Zap,
  ChartBar,
  Beaker,
  Shield,
  Network,
  Microscope,
  Clock,
} from "lucide-react";

export default function BlogPage() {
  // --- Updated Timeline Data with More Cautious Language ---
  const timelinePhases = {
    phase1: {
      title: "0-2 Years: The Initial Acceleration",
      sections: [
        {
          title: "AI/ML Research & Development",
          points: [
            "Large language models continue to improve and demonstrate near-human performance in selected, well-defined tasks",
            "AI-driven drug discovery platforms begin to show significant reductions in early-stage research timelines (estimated 20-40%)",
            "Personalized medicine algorithms gain traction for tailored treatment recommendations based on genomic data",
            "Neural-network-assisted designs for quantum circuits start to improve circuit stability in early prototypes",
            "Automation in code generation reaches meaningful accuracy (up to 60-70%) for certain standard tasks, though human oversight remains crucial",
          ],
        },
        {
          title: "Quantum Computing Progress",
          points: [
            "Research into error correction advances, gradually extending quantum coherence times in lab settings",
            "Early demonstrations of quantum advantage appear in highly specialized problems (e.g., certain chemistry or optimization tasks)",
            "Hybrid quantum-classical algorithms see incremental improvements, with more robust prototypes emerging",
            "Efforts toward quantum-resistant cryptography accelerate, but large-scale adoption remains in early stages",
            "Quantum processors with 50–100 physical qubits become more commercially accessible, though error rates are still a key hurdle",
          ],
        },
        {
          title: "Biotech Breakthroughs",
          points: [
            "CRISPR gene editing techniques show increasing precision, though off-target effects remain an active research area",
            "AI-assisted protein-structure prediction reaches high accuracy (as demonstrated by AlphaFold and others), accelerating some aspects of drug design",
            "Lab-grown tissue prototypes (e.g., partial organoids) improve in functionality but remain primarily in research phases",
            "Synthetic biology platforms expand, automating certain strain engineering tasks",
            "Brain-computer interface research continues, with incremental improvements in bandwidth and signal clarity",
          ],
        },
      ],
    },
    phase2: {
      title: "2-5 Years: Convergence & Scaling",
      sections: [
        {
          title: "Advanced AI Integration",
          points: [
            "AI systems show more general problem-solving capabilities, though true AGI remains speculative",
            "Semi-autonomous research labs reduce human oversight but still rely on expert intervention for complex decisions",
            "Industry-wide AI safety frameworks and best practices become more common, though global standards are still emerging",
            "Neural architectures demonstrate improved reasoning within specific specialized domains",
            "Global AI computing infrastructure experiences large-scale growth (possibly 5-10x in total computational throughput)",
          ],
        },
        {
          title: "Quantum Applications",
          points: [
            "Progress in quantum hardware and error correction brings more reliable multi-qubit systems (hundreds of physical qubits), though fully fault-tolerant 1000+ logical qubit devices remain further out",
            "Quantum machine learning shows potential speedups in niche tasks, with some 10-50x performance gains over classical methods in very specific use cases",
            "Quantum internet testbeds demonstrate entanglement-based communication over limited distances",
            "Public and private sectors begin broader transition to quantum-resistant cryptographic algorithms",
            "Quantum sensors offer higher precision imaging and measurements, especially in research and certain medical diagnostics",
          ],
        },
        {
          title: "Biotech & Medical Advances",
          points: [
            "Personalized gene therapies become available for a growing list of rare diseases, though cost and regulatory hurdles persist",
            "3D-printed tissues and organoids see improved functionality in trials, but full organ replacements remain mostly experimental",
            "AI-accelerated protein engineering paves the way for more targeted drug-delivery platforms",
            "Brain-machine interface prototypes allow for basic direct text or motor-control communication in highly controlled settings",
            "Synthetic biology platforms reduce certain biomanufacturing costs, though large-scale adoption varies by sector",
          ],
        },
      ],
    },
    phase3: {
      title: "5-10 Years: Transformative Era (Speculative)",
      sections: [
        {
          title: "AGI & Beyond (Highly Uncertain)",
          points: [
            "Some researchers predict the emergence of near-AGI systems, though significant debate remains about definitions and feasibility",
            "AI systems become integral to scientific research, accelerating discoveries in numerous fields",
            "Global AI governance frameworks mature, but remain subject to international coordination challenges",
            "Human-AI collaboration becomes standard in many knowledge-based industries, with AI augmenting rather than replacing experts",
            "AI safety and alignment remain top concerns as systems grow more capable",
          ],
        },
        {
          title: "Quantum Computing Maturity",
          points: [
            "Large-scale quantum computers may begin to solve specialized intractable problems, though technology readiness for broad commercial use is still evolving",
            "Hybrid quantum-classical systems find deeper industrial applications in materials science, finance, and optimization",
            "Quantum networks enable highly secure communication, though widespread adoption may lag technical breakthroughs",
            "Quantum sensors continue to improve medical imaging and diagnostics, potentially reducing certain detection limits",
            "The quest for fault-tolerant systems continues, potentially unlocking new classes of computations",
          ],
        },
        {
          title: "Biotech Revolution",
          points: [
            "Gene therapies see broader mainstream adoption, especially for certain inherited disorders and late-stage cancers",
            "Advances in anti-aging research and targeted therapeutics begin to address age-related diseases more effectively",
            "Synthetic biology expands into greener industrial production of chemicals, though cost-competitiveness can vary",
            "Brain-computer interfaces refine signal clarity, enabling more nuanced control in niche applications (e.g., assistive technology)",
            "Personalized medicine becomes increasingly common in well-funded health systems, though global inequities remain",
          ],
        },
      ],
    },
  };

  // --- Updated Key Stats ---
  // Where possible, replaced with more cautious or widely cited figures.
  const keyStats = [
    {
      category: "AI/ML Development",
      stats: [
        {
          label: "Annual AI Computing Power Growth",
          value: "~5-10x (est.)",
        },
        {
          label: "AI Model Parameter Count Growth",
          value: "Rapid, but plateauing in some areas",
        },
        {
          label: "AI Research Automation Level",
          value: "30-60% (varies by domain)",
        },
        {
          label: "Projected Global AI Market (2025)",
          value: "~$190–300B (various estimates)",
        },
      ],
    },
    {
      category: "Quantum Computing",
      stats: [
        {
          label: "Quantum Bit Error Rate Reduction",
          value: "Improving, but still a key challenge",
        },
        {
          label: "Quantum Computing Market Growth",
          value: "~25–30% CAGR (varying forecasts)",
        },
        {
          label: "Earliest Broad Quantum Advantage",
          value: "Likely mid- to late-2020s for niche applications",
        },
        {
          label: "Global Investment in Quantum Tech",
          value: "$20B+ (public & private combined)",
        },
      ],
    },
    {
      category: "Biotechnology",
      stats: [
        {
          label: "Gene Therapy Success Rate",
          value: "Increasing, but highly dependent on specific trials",
        },
        {
          label: "Synthetic Biology Market Size",
          value: "$30B+ (by mid-2020s, various estimates)",
        },
        {
          label: "Potential Drug Discovery Time Reduction",
          value: "10-40% (with AI assistance)",
        },
        {
          label: "BCI Bandwidth Improvement",
          value: "Incremental gains, ~2-3x in research settings",
        },
      ],
    },
  ];

  // --- Career Paths (Largely the Same; Slightly More Nuanced Language) ---
  const careerPaths = [
    {
      title: "AI & AGI Specialists",
      roles: [
        "AI Safety Engineer",
        "AGI Research Scientist (Long-Term Goal)",
        "AI Ethics Officer",
        "Neural Architecture Designer",
        "Human-AI Integration Specialist",
      ],
      skills: [
        "Advanced ML/DL Algorithms",
        "AI Safety & Alignment",
        "Ethical AI Design",
        "Multi-Agent Systems",
        "Cognitive Architecture & Neuroscience Foundations",
      ],
    },
    {
      title: "Quantum Computing Experts",
      roles: [
        "Quantum Algorithm Engineer",
        "Quantum Error Correction Researcher",
        "Quantum-Classical Integration Expert",
        "Quantum Security Consultant",
        "Quantum Hardware Specialist",
      ],
      skills: [
        "Quantum Mechanics",
        "Quantum Programming",
        "Error Correction Protocols",
        "Quantum Cryptography",
        "High-Performance Computing & Classical-Quantum Integration",
      ],
    },
    {
      title: "Biotech Innovators",
      roles: [
        "Synthetic Biology Engineer",
        "Gene Therapy Specialist",
        "Biocomputing Architect",
        "Neural Interface Researcher",
        "Bioethics & Regulatory Affairs Officer",
      ],
      skills: [
        "Genetic Engineering",
        "Synthetic Biology",
        "Biocomputing",
        "Neurotechnology",
        "Bioethics & Policy Compliance",
      ],
    },
  ];

  // --- Technology Impact Analysis (Minor Adjustments for Accuracy) ---
  const impactAnalysis = [
    {
      sector: "Healthcare",
      changes: [
        "AI-powered diagnostics reduce error rates and improve early detection",
        "Personalized treatment plans grow more precise, but adoption varies by region",
        "Quantum computing accelerates certain aspects of drug discovery (e.g., complex molecular simulations)",
        "Gene therapies offer potential cures for select inherited diseases, pending successful trials",
        "Brain-computer interfaces restore some mobility for patients with paralysis in pilot studies",
      ],
    },
    {
      sector: "Energy",
      changes: [
        "AI-driven optimization improves grid efficiency (up to 20-40% in certain contexts)",
        "Quantum algorithms show promise for simulating fusion reactors and advanced materials",
        "Synthetic biology contributes to cleaner biofuels, though large-scale viability depends on costs",
        "Carbon capture technologies see incremental improvements in efficiency",
        "Smart grids begin to incorporate autonomous, adaptive maintenance features",
      ],
    },
    {
      sector: "Computing",
      changes: [
        "Quantum computing finds niche supremacy in select domains, though classical computing remains dominant overall",
        "Advanced AI tools streamline software development but still require human oversight",
        "Neuromorphic computing research grows, but widespread adoption is uncertain",
        "DNA storage emerges as a potential long-term solution, though still in early research stages",
        "Edge computing matures, enabling real-time processing in devices and IoT networks",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          The Convergence of Frontier Technologies
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          A forward-looking exploration of how AI, quantum computing,
          biotechnology, and other emerging technologies may reshape our world
          over the next decade.
        </p>
      </div>

      {/* Executive Summary */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            We stand at a pivotal juncture where advances in artificial
            intelligence, quantum computing, and biotechnology are beginning to
            intersect in meaningful ways. These convergences could accelerate
            progress across various scientific and industrial domains. This
            analysis explores current trends and potential timelines for
            maturation, while highlighting the profound implications for society,
            careers, and human development.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Notably, while there is significant optimism about milestones such
            as advanced AI systems (approaching AGI-like capabilities) and
            quantum computers solving specialized problems, much of this remains
            speculative. Breakthroughs in biotechnology—ranging from gene
            editing to brain-computer interfaces—hold great promise but continue
            to face regulatory, ethical, and technical challenges. The potential
            impact is immense, but so are the uncertainties, requiring a careful
            and nuanced approach to development.
          </p>
        </CardContent>
      </Card>

      {/* Key Statistics Dashboard */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <ChartBar className="w-8 h-8" />
          Technology Growth Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyStats.map((statGroup, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{statGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {statGroup.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline Content */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <Clock className="w-8 h-8" />
          Technology Evolution Timeline
        </h2>

        <div className="space-y-12">
          {Object.entries(timelinePhases).map(([phase, phaseData], phaseIndex) => (
            <div key={phase} className="relative">
              {/* Time period header */}
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  {phaseIndex === 0
                    ? "0-2 Years"
                    : phaseIndex === 1
                    ? "2-5 Years"
                    : "5-10 Years"}
                </h3>
                <p className="text-blue-600">
                  {phaseData.title}
                </p>
              </div>

              {/* Timeline sections */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {phaseData.sections.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Connector line to next phase */}
              {phaseIndex < 2 && <div className="h-12 w-1 bg-blue-200 mx-auto my-6" />}
            </div>
          ))}
        </div>
      </section>

      {/* Career Paths and Skills */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <Laptop className="w-8 h-8" />
          Emerging Careers & Required Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerPaths.map((path, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{path.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Roles</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {path.roles.map((role, idx) => (
                        <li key={idx}>{role}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Critical Skills</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {path.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sector Impact Analysis */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <Network className="w-8 h-8" />
          Industry Transformation Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactAnalysis.map((sector, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{sector.sector}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {sector.changes.map((change, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Risks and Challenges */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <Shield className="w-8 h-8" />
          Key Risks & Challenges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">
                      AI Safety & Control:
                    </span>
                    <p className="mt-1">
                      Ensuring advanced AI systems remain aligned with human
                      values and remain controllable as they grow more capable.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Quantum Decoherence:</span>
                    <p className="mt-1">
                      Maintaining stable quantum states for practical
                      computation remains a primary engineering hurdle.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Biotech Safety:</span>
                    <p className="mt-1">
                      Mitigating risks in genetic engineering and synthetic
                      biology to prevent unintended ecological and health
                      impacts.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Integration Complexity:
                    </span>
                    <p className="mt-1">
                      Coordinating multiple emerging technologies in real-world
                      applications requires sophisticated systems design and
                      robust testing.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Societal & Ethical Concerns</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Job Displacement:</span>
                    <p className="mt-1">
                      Certain roles may be automated, prompting the need for
                      workforce retraining and social support structures.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Privacy & Security:</span>
                    <p className="mt-1">
                      As technology becomes more pervasive, protecting data and
                      individual rights becomes increasingly complex.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Ethical Use:</span>
                    <p className="mt-1">
                      Ensuring equitable access to emerging technologies while
                      preventing misuse or exploitation requires careful policy.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Social Impact:</span>
                    <p className="mt-1">
                      Rapid technological change can create disruptions,
                      exacerbate inequality, or lead to unforeseen cultural
                      shifts.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <Beaker className="w-8 h-8" />
          Strategic Recommendations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>For Individuals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Develop cross-disciplinary expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Embrace continuous learning and skill-building</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Gain grounding in AI safety and ethics</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Strengthen foundations in mathematics and programming</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Cultivate adaptability and systems thinking</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Invest in AI and quantum computing R&D</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Establish robust AI governance and oversight</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Foster interdisciplinary collaborations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Integrate ethics and compliance into the innovation pipeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Prioritize cybersecurity and data protection</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Policymakers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Adopt adaptive regulatory frameworks for emerging tech</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Enhance STEM education and workforce training</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Support AI safety research and global collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Promote R&D funding for critical areas (e.g., quantum, biotech)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Address inequities in technology access and benefits</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research Priorities */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <Microscope className="w-8 h-8" />
          Critical Research Priorities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Research Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">
                      AI Safety & Alignment:
                    </span>
                    <p className="mt-1">
                      Refining robust methods to ensure advanced AI systems
                      remain aligned with beneficial human values.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Quantum Error Correction:
                    </span>
                    <p className="mt-1">
                      Exploring techniques to achieve fault-tolerant computing
                      through reductions in error rates and improved
                      architecture.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Neural Architecture:</span>
                    <p className="mt-1">
                      Investigating new paradigms (e.g., transformer
                      variants, neuromorphic chips) for more efficient and
                      generalizable AI.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Biocomputing Integration:
                    </span>
                    <p className="mt-1">
                      Creating bridges between biological and computational
                      systems (e.g., DNA data storage, cell-based sensors).
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interdisciplinary Research Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Human-AI Collaboration:</span>
                    <p className="mt-1">
                      Evaluating optimal methods for integrating AI into
                      human workflows, from healthcare to finance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Ethical Frameworks:</span>
                    <p className="mt-1">
                      Crafting robust guidelines to govern emerging
                      technologies, minimizing harm and maximizing societal
                      benefit.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Societal Impact:</span>
                    <p className="mt-1">
                      Studying how convergence of technology will affect
                      economics, labor markets, and global equity.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronsRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Policy Research:</span>
                    <p className="mt-1">
                      Investigating evidence-based governance models for
                      sustainable, inclusive, and secure deployment of
                      advanced tech.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Looking Ahead: The Path Forward
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              The convergence of AI, quantum computing, and biotechnology has
              the potential to drive one of the most transformative periods in
              modern history. While the opportunities are vast—ranging from
              breakthroughs in healthcare to advanced problem-solving for
              climate and energy—these developments also bring significant
              risks. Society will need to address issues of ethics, governance,
              and equitable distribution of benefits to ensure these powerful
              tools serve the greater good.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              For individuals and organizations alike, proactive skill
              development, interdisciplinary collaboration, and strong ethical
              foundations will be key. The most successful approaches will seek
              to balance technological innovation with human values,
              sustainability, and inclusivity.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              As these technologies advance, dialogue among researchers,
              policymakers, industry, and the public will be crucial.
              International cooperation and responsible innovation can help
              navigate both the known and unknown challenges ahead. By
              thoughtfully shaping this future, we can harness the power of
              these converging frontiers to uplift human potential in
              transformative, yet responsible, ways.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Educational Resources */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <FileText className="w-8 h-8" />
          Preparation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Foundations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="font-semibold">Mathematics & Statistics</li>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Linear Algebra</li>
                  <li>Calculus & Optimization</li>
                  <li>Probability Theory</li>
                  <li>Statistical Methods</li>
                  <li>Information Theory</li>
                </ul>
                <li className="font-semibold mt-4">
                  Programming & Computer Science
                </li>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Algorithm Design & Analysis</li>
                  <li>Data Structures</li>
                  <li>Machine Learning Frameworks</li>
                  <li>Distributed Systems</li>
                  <li>Software Engineering Practices</li>
                </ul>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="font-semibold">AI & Machine Learning</li>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Deep Learning Architectures</li>
                  <li>Reinforcement Learning</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                  <li>AI Safety & Ethics</li>
                </ul>
                <li className="font-semibold mt-4">Quantum Computing</li>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Quantum Mechanics Basics</li>
                  <li>Quantum Algorithms</li>
                  <li>Quantum Error Correction</li>
                  <li>Quantum Programming</li>
                  <li>Classical-Quantum Integration</li>
                </ul>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interdisciplinary Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="font-semibold">Research & Analysis</li>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Scientific Method</li>
                  <li>Study Design</li>
                  <li>Data Analysis & Visualization</li>
                  <li>Technical Writing</li>
                  <li>Project Management</li>
                </ul>
                <li className="font-semibold mt-4">Soft Skills</li>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Effective Communication</li>
                  <li>Interdisciplinary Collaboration</li>
                  <li>Critical Thinking</li>
                  <li>Complex Problem Solving</li>
                  <li>Ethical Decision-Making</li>
                </ul>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
