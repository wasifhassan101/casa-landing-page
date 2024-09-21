import BlurFade from "@/components/magicui/blur-fade";
import WordPullUp from "@/components/magicui/word-pull-up";
import Navbar from "./Navbar";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
    return (
        <section className="h-screen flex flex-col reelative items-center justify-center py-20 bg-brand-secondary">
            <Navbar />
            <div className="container mx-auto px-4 text-center space-y-5">
                <WordPullUp
                    className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-blue dark:text-white"
                    words="AI-Powered Onboarding for SaaS Platforms"
                />
                <BlurFade delay={1} inView>
                    {/* <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
                        Enhance your user experience by integrating our AI onboarding assistant, which guides new users through your SaaS platform. No need for manual demo calls—our assistant provides personalized, interactive walkthroughs, answers common questions, and continuously improves through machine learning.
                    </span> */}
                    <span className="text-xl text-pretty tracking-tighter sm:text-3xl">
                        Improve your SaaS onboarding with our AI assistant. It guides users through your platform, providing personalized walkthroughs, answering questions, and learning over time—no need for manual demo calls.
                    </span>

                </BlurFade>
                <BlurFade delay={1.5} inView>
                    <a
                        href="#waitlist"
                        className="bg-black text-white tracking-tight font-semibold py-3 px-6 rounded hover:bg-brand-primary"
                    >
                        Join the Waitlist
                    </a>
                </BlurFade>
                <DotPattern
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                    className={cn(
                        "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                    )}
                />
            </div>
        </section>
    );
};

export default Hero;
