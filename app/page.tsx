'use client'
import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from './components/Hero';
import Features from './components/Features';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark flex flex-col">
      <Head>
        <title>AI Onboarding Assistant for SaaS Companies</title>
        <meta
          name="description"
          content="Integrate an AI onboarding assistant into your SaaS product to enhance user experience and reduce demo calls."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <Hero />
        <Features />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
