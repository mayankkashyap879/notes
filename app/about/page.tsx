import React from 'react';

const AboutPage = () => {
    const features = [
        {
            title: "AI-Enhanced Learning",
            description: "Leveraging advanced AI technology to create comprehensive, accurate, and up-to-date computer science notes tailored to student needs.",
            icon: () => (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "Human-Reviewed Content",
            description: "Every AI-generated note is carefully reviewed and verified by CS students and educators to ensure accuracy and clarity.",
            icon: () => (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: "Regular Updates",
            description: "Our AI system continuously learns and updates content to reflect the latest developments in computer science education.",
            icon: () => (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About CS Notes
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Revolutionizing computer science education through AI-powered learning resources.
                    </p>
                </div>

                {/* AI Badge */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 mb-12 text-white">
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h2 className="text-2xl font-bold">AI-Generated Content</h2>
                    </div>
                    <p className="text-center text-lg">
                        Our notes are generated using advanced AI technology, ensuring comprehensive coverage and regular updates while maintaining high educational standards through human review and verification.
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        CS Notes combines the power of artificial intelligence with educational expertise to provide high-quality, accessible computer science education resources to students worldwide. We believe in making complex concepts understandable through clear explanations, practical examples, and a structured learning approach.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        By leveraging AI technology, we&are able to create and maintain comprehensive study materials that adapt to student needs while ensuring accuracy through human oversight.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
                        >
                            <div className="text-blue-500 dark:text-blue-400 mb-4">
                                {feature.icon()}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* How It Works */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        How Our AI-Powered Notes Work
                    </h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 text-blue-500 dark:text-blue-400 mt-1">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Content Generation</h3>
                                <p className="text-gray-600 dark:text-gray-300">Our AI system generates detailed notes based on verified computer science curricula and resources.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 text-blue-500 dark:text-blue-400 mt-1">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Human Review</h3>
                                <p className="text-gray-600 dark:text-gray-300">Each note is reviewed by CS educators to ensure accuracy and educational value.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 text-blue-500 dark:text-blue-400 mt-1">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Continuous Updates</h3>
                                <p className="text-gray-600 dark:text-gray-300">Content is regularly updated to reflect new developments and incorporate student feedback.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Have questions about our AI-powered notes or suggestions for improvement? We&apos;d love to hear from you!
                    </p>
                    <a
                        href="mailto:mayankkashyap930@gmail.com"
                        className="text-blue-500 dark:text-blue-400 hover:underline"
                    >
                        mayankkashyap930@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;