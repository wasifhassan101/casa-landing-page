const Footer: React.FC = () => {
    return (
        <footer className="py-6 bg-brand-dark text-brand-light">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} casa.ai. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
