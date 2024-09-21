import { useState } from 'react';
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from '@/lib/utils';

const WaitlistForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<"success" | "error">("error");
    const [loading, setLoading] = useState<boolean>(false);

    const handleWaitlistSubmission = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        if (!email) {
            setMessage("Please enter a valid email!");
            setMessageType("error");
            setLoading(false);
            return;
        }

        const response = await fetch('/api/addToWaitlist', {
            method: "POST",
            body: JSON.stringify({
                email: email
            })
        })
        if (response.status !== 200) {
            setMessage("There was an error. Please try again!");
            setMessageType("error");
            setLoading(false);
            return
        }

        setMessage("You have been successfully added to waitlist. You will hear from us soon!")
        setMessageType("success");
        setEmail('');
        setLoading(false);
    };

    return (
        <section id="waitlist" className="bg-brand-secondary h-screen overflow-hidden">
            <div className="relative flex flex-col lg:flex-row w-full h-full items-center justify-center overflow-hidden rounded-lg bg-background p-6 lg:p-20">
                <div className="flex flex-col w-full h-full items-center shadow-xl lg:p-10 rounded-xl bg-white z-10 space-y-6">
                    <h2 className="text-2xl lg:text-4xl font-medium text-center text-blue lg:text-left tracking-tighter">
                        Join Our Waitlist
                    </h2>
                    <p className="text-xl text-brand-dark tracking-tight">
                        Be the first to enhance your onboarding experience with our AI assistant.
                    </p>
                    <form onSubmit={handleWaitlistSubmission} className='w-full flex flex-col items-center space-y-3'>
                        {messageType === "success" ? (
                            // Success message, input and button are removed
                            <p className="text-green-800 text-lg font-medium">
                                {message}
                            </p>
                        ) : (
                            // Input and button stay if there is an error or no submission yet
                            <>
                                <input
                                    className='p-4 w-full md:w-1/2 border-2 border-black rounded-lg outline-black'
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button
                                    type='submit'
                                    className='bg-black rounded-lg text-white tracking-tight p-3 font-medium'>
                                    {loading ? "Joining" : "Join the Waitlist"}
                                </button>
                                {/* Error message shown in red */}
                                {message && (
                                    <p className={`text-lg font-medium ${messageType === "error" ? "text-red-500" : ""}`}>
                                        {message}
                                    </p>
                                )}
                            </>
                        )}
                    </form>
                </div>
                <AnimatedGridPattern
                    numSquares={100}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(100dvw_circle_at_center,white,transparent)]",
                        "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </div>
        </section>
    );
};

export default WaitlistForm;
