import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function SocialSidebar() {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col bg-white shadow-lg rounded-r-lg overflow-hidden border border-l-0 border-gray-200">
            {/* Facebook */}
            <a
                href="https://www.facebook.com/profile.php?id=61583000570242"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-[#1877F2] hover:text-white text-[#1877F2] transition-colors duration-300 flex items-center justify-center group relative"
                title="Facebook"
            >
                <Facebook className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-gray-800 text-xs px-2 py-1 rounded border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                    Facebook
                </span>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/company/112232906/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] transition-colors duration-300 flex items-center justify-center group relative"
                title="LinkedIn"
            >
                <Linkedin className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-gray-800 text-xs px-2 py-1 rounded border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                    LinkedIn
                </span>
            </a>

            {/* Instagram */}
            <a
                href="https://www.instagram.com/haramtaxii/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-pink-600 hover:text-white text-pink-600 transition-colors duration-300 flex items-center justify-center group relative"
                title="Instagram"
            >
                <Instagram className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-gray-800 text-xs px-2 py-1 rounded border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                    Instagram
                </span>
            </a>

            {/* Reddit */}
            <a
                href="https://www.reddit.com/user/ActAppropriate7146/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-[#FF4500] hover:text-white text-[#FF4500] transition-colors duration-300 flex items-center justify-center group relative"
                title="Reddit"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-2.467 3.928c-1.353 0-2.433-.679-2.435-.682a.375.375 0 0 0-.528.1.375.375 0 0 0 .1.527c.038.026 1.285.808 2.863.808 1.583 0 2.825-.783 2.863-.808a.375.375 0 0 0 .1-.528.375.375 0 0 0-.528-.1c-.003.003-1.084.683-2.435.683z" /></svg>
                <span className="absolute left-full ml-2 bg-white text-gray-800 text-xs px-2 py-1 rounded border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                    Reddit
                </span>
            </a>

            {/* Quora */}
            <a
                href="https://www.quora.com/profile/Haram-Taxii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-[#B92B27] hover:text-white text-[#B92B27] transition-colors duration-300 flex items-center justify-center group relative"
                title="Quora"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.964 1.942c-5.495 0-9.957 4.191-9.957 9.68 0 3.737 2.213 6.96 5.408 8.618l-.519 1.831h2.296l.487-1.874c.758.204 1.52.296 2.296.296 5.49 0 9.948-4.256 9.948-9.69a9.7 9.7 0 0 0-9.96-8.86zm6.315 14.54l-1.921-.772.31 1.18h-1.6l-.375-1.284a7.228 7.228 0 0 1-2.903.626c-3.15 0-5.748-2.316-5.748-5.743s2.598-5.733 5.748-5.733c3.16 0 5.759 2.306 5.759 5.733 0 1.268-.426 2.457-1.12 3.441a5.61 5.61 0 0 1 .491 1.636l1.359.535v.38zm-1.39-8.496c-.477-1.278-1.782-2.181-3.328-2.181-1.914 0-3.486 1.488-3.486 3.493s1.572 3.492 3.486 3.492c1.472 0 2.723-.815 3.255-2.001A3.763 3.763 0 0 0 17 10.51a3.812 3.812 0 0 0-.111-2.524z" /></svg>
                <span className="absolute left-full ml-2 bg-white text-gray-800 text-xs px-2 py-1 rounded border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                    Quora
                </span>
            </a>

            {/* Trustpilot */}
            <a
                href="https://www.trustpilot.com/review/haramtaxii.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-[#00B67A] hover:text-white text-[#00B67A] transition-colors duration-300 flex items-center justify-center group relative"
                title="Trustpilot"
            >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.007 0C5.378 0 0 5.377 0 12c0 6.623 5.378 12 12.007 12 6.623 0 12-5.377 12-12 0-6.623-5.377-12-12-12zm4.35 17.512l-4.35-3.135-4.35 3.135 1.634-5.116-4.351-3.111h5.395l1.672-5.116 1.672 5.116h5.395l-4.351 3.111 1.634 5.116z" /></svg>
                <span className="absolute left-full ml-2 bg-white text-gray-800 text-xs px-2 py-1 rounded border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                    Trustpilot
                </span>
            </a>

            {/* X (Twitter) */}
            <a
                href="https://x.com/HaramTaxii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-black hover:text-white text-gray-700 transition-colors duration-300 flex items-center justify-center group relative"
                title="X (Twitter)"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                <span className="absolute left-full ml-2 bg-white text-gray-800 text-xs px-2 py-1 rounded border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                    X
                </span>
            </a>

            {/* Pinterest */}
            <a
                href="https://pin.it/15NxhfI6X"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-[#E60023] hover:text-white text-[#E60023] transition-colors duration-300 flex items-center justify-center group relative"
                title="Pinterest"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.601 0 12.017 0z" /></svg>
                <span className="absolute left-full ml-2 bg-white text-gray-800 text-xs px-2 py-1 rounded border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                    Pinterest
                </span>
            </a>
        </div>
    );
}
