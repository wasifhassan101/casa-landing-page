import React from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import RetroGrid from '@/components/magicui/retro-grid';

const features = [
    {
        title: 'Easy Integration',
        content: 'Our AI assistant seamlessly integrates into your SaaS platform with minimal setup, ensuring you can start guiding users quickly and efficiently.',
    },
    {
        title: 'Interactive AI Interface',
        content: 'Set up a fully interactive onboarding interface, where users can explore your platform with the help of our AI assistant, enhancing engagement and satisfaction.',
    },
    {
        title: 'Voice AI Navigation',
        content: 'Enable voice-guided navigation, where the AI speaks to users, walks them through your product features, and answers their questions in real-time.',
    },
    {
        title: 'Automated Onboarding',
        content: 'Let our AI handle the onboarding process by highlighting key features and functionalities, so users understand your product without manual intervention.',
    },
    {
        title: '24/7 User Support',
        content: 'Provide continuous support with our AI answering user queries in real-time, helping to reduce the need for human agents and support tickets.',
    },
    {
        title: 'Personalized Experience',
        content: 'The AI personalizes the onboarding experience by learning from user interactions, adapting to each user’s unique needs and preferences.',
    },
];


const Features: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-brand-light relative overflow-hidden lg:h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-medium text-center mb-12 tracking-tight text-blue">
                    What is Casa.ai?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <BlurFade key={index} delay={0.25 + index * 0.1} className='bg-white z-10 rounded-2xl' inView>
                            <div className="border h-full shadow-lg p-6 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white hover:scale-110 cursor-pointer">
                                <div className="flex flex-col mb-4">
                                    <div className="text-2xl font-semibold tracking-[-0.02em] text-brand-primary">
                                        0{index + 1}
                                    </div>
                                    <h3 className="text-2xl font-semibold tracking-[-0.02em] bg-gradient-to-b from-brand-primary to-brand-accent bg-clip-text text-black">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-brand-dark leading-relaxed">
                                    {feature.content}
                                </p>
                            </div>
                        </BlurFade>
                    ))}
                    <RetroGrid />
                </div>
            </div>
        </section>
    );
};

export default Features;
