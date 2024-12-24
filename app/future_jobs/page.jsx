'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Shield, UserCheck, Users, Network, MessageSquare, Lock, LineChart, Palette, RefreshCw } from 'lucide-react';

const jobsData = [
  {
    title: "AI/AGI Governance and Policy Experts",
    icon: <Brain className="w-6 h-6" />,
    description: "Develop and oversee policies, standards, and governance frameworks related to the ethical and compliant use of AI.",
    ksas: {
      knowledge: "AI ethics, regulatory landscapes, data privacy laws",
      skills: "Policy creation, risk assessment, stakeholder communication",
      abilities: "Translate complex technical concepts, anticipate consequences"
    }
  },
  {
    title: "AI Reliability and Safety Engineers",
    icon: <Shield className="w-6 h-6" />,
    description: "Design and maintain fail-safes, auditing processes, and monitoring systems to ensure AI models operate safely.",
    ksas: {
      knowledge: "Machine learning/AGI architectures, systems engineering",
      skills: "Software engineering, simulation testing, anomaly detection",
      abilities: "Identify failure points, implement redundancy mechanisms"
    }
  },
  {
    title: "AI Ethics and Trust Officers",
    icon: <UserCheck className="w-6 h-6" />,
    description: "Define and communicate ethical principles for AI usage within the organization.",
    ksas: {
      knowledge: "Philosophy, sociology, AI ethics policy",
      skills: "Cross-disciplinary communication, conflict resolution",
      abilities: "Analyze and present complex ethical dilemmas"
    }
  },
  {
    title: "Human-AI Collaboration Strategists",
    icon: <Users className="w-6 h-6" />,
    description: "Design processes where humans and AI agents optimally complement each other's strengths.",
    ksas: {
      knowledge: "Organizational psychology, UX, workflow design",
      skills: "Change management, human-in-the-loop systems",
      abilities: "Blend human capabilities with AI automation"
    }
  },
  {
    title: "AI Integration Specialists",
    icon: <Network className="w-6 h-6" />,
    description: "Oversee the orchestration of multiple AI agents, APIs, and enterprise software tools.",
    ksas: {
      knowledge: "Cloud platforms, enterprise integration patterns",
      skills: "Scripting, systems administration, data engineering",
      abilities: "See big picture while troubleshooting systems"
    }
  },
  {
    title: "Prompt Engineers",
    icon: <MessageSquare className="w-6 h-6" />,
    description: "Craft high-quality prompts and instructions for AI agents to achieve desired outcomes.",
    ksas: {
      knowledge: "Linguistics, psychology, domain-specific semantics",
      skills: "NLP, creative writing, iterative testing",
      abilities: "Adjust AI-generated content for specific needs"
    }
  },
  {
    title: "AI Data Privacy Specialists",
    icon: <Lock className="w-6 h-6" />,
    description: "Ensure AI systems comply with data protection regulations and security practices.",
    ksas: {
      knowledge: "Cybersecurity frameworks, cryptography",
      skills: "Penetration testing, secure software development",
      abilities: "Adapt to evolving security threats"
    }
  },
  {
    title: "AI Explainability Analysts",
    icon: <LineChart className="w-6 h-6" />,
    description: "Develop techniques that demystify AI models for non-technical stakeholders.",
    ksas: {
      knowledge: "XAI methods, data visualization, ML algorithms",
      skills: "Data storytelling, dashboard design",
      abilities: "Translate statistics into executive summaries"
    }
  },
  {
    title: "AI-Enhanced Creative Directors",
    icon: <Palette className="w-6 h-6" />,
    description: "Use AI tools to enhance creative processes and oversee human-creative collaboration.",
    ksas: {
      knowledge: "Branding, marketing, design principles",
      skills: "Prompt-engineering for creative tools",
      abilities: "Combine storytelling with AI generation"
    }
  },
  {
    title: "AI Continuous Learning Facilitators",
    icon: <RefreshCw className="w-6 h-6" />,
    description: "Manage learning loops for AI systems, ensuring models are regularly updated.",
    ksas: {
      knowledge: "ML pipelines, MLOps, data governance",
      skills: "Data curation, workflow automation",
      abilities: "Systematically improve AI performance"
    }
  }
];

const JobCard = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-3">
          <div className="text-blue-600">
            {job.icon}
          </div>
          <CardTitle className="text-lg">{job.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{job.description}</p>
        <Button 
          variant="outline" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mb-4 text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          {isExpanded ? 'Hide Details' : 'Click to See KSAs'}
        </Button>
        {isExpanded && (
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-blue-600">Knowledge</h4>
              <p className="text-sm text-gray-600">{job.ksas.knowledge}</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">Skills</h4>
              <p className="text-sm text-gray-600">{job.ksas.skills}</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">Abilities</h4>
              <p className="text-sm text-gray-600">{job.ksas.abilities}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const AIJobsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Future AI Jobs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As AI transforms the workplace, new roles emerge to manage, optimize, and ensure the responsible use of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsData.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Overarching Skills for the New Era</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cross-Disciplinary Communication",
                description: "Speak the language of technologists, executives, and end-users alike."
              },
              {
                title: "Adaptability and Learning",
                description: "Constant upskilling and willingness to pivot in rapidly evolving AI landscape."
              },
              {
                title: "Ethical Judgment",
                description: "Understand moral, societal, and regulatory implications of AI integration."
              },
              {
                title: "Systems Thinking",
                description: "Comprehend how AI systems fit into broader social and business ecosystems."
              }
            ].map((skill, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIJobsPage;