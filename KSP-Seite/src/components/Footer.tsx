import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-4 bg-card border-t border-white/10 text-center text-sm text-gray-400">
            <div className="container mx-auto px-4 flex justify-center space-x-6">
                <Link href="/impressum" className="hover:text-primary transition-colors">
                    Impressum
                </Link>
                <span>|</span>
                <Link href="/quellen" className="hover:text-primary transition-colors">
                    Quellenhinweise
                </Link>
            </div>
        </footer>
    );
}
