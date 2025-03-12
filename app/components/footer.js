// components/Footer.jsx
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'Company',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Our Team', path: '/team' },
                { name: 'Investors', path: '/investors' },
                // { name: 'Careers', path: '/careers' },
                // { name: 'Press', path: '/press' },
            ],
        },
        {
            title: 'Resources',
            links: [
                // { name: 'Blog', path: '/blog' },
                // { name: 'Documentation', path: '/docs' },
                // { name: 'Tutorials', path: '/tutorials' },
                { name: 'FAQs', path: '/faqs' },
            ],
        },
        // {
        //     title: 'Legal',
        //     links: [
        //         { name: 'Privacy Policy', path: '/privacy' },
        //         { name: 'Terms of Service', path: '/terms' },
        //         { name: 'Cookie Policy', path: '/cookies' },
        //     ],
        // },
    ];

    const socialLinks = [
        // { name: 'Twitter', icon: faTwitter, url: 'https://twitter.com' },
        { name: 'Facebook', icon: faFacebook, url: 'https://www.facebook.com/LilBeansBakeryATL/' },
        { name: 'Instagram', icon: faInstagram, url: 'https://www.instagram.com/lilbeansbakery/' },
        // { name: 'LinkedIn', icon: faLinkedin, url: 'https://linkedin.com' },
        // { name: 'GitHub', icon: faGithub, url: 'https://github.com' },
    ];

    return (
        <footer className="bg-gradient-to-b from-yellow-300 to-amber-400">
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Top Section with Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            className="text-sm text-gray-600 hover:text-blue-500 transition duration-150 ease-in-out"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section with Social and Copyright */}
                <div className="border-t pt-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex space-x-6 md:order-2">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-amber-800 transition duration-150 ease-in-out"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <FontAwesomeIcon icon={item.icon} className='fa fa-2x'/>
                                </a>
                            ))}
                        </div>
                        <div className="mt-8 md:mt-0 md:order-1">
                            <p>&copy; {new Date().getFullYear()} Lil Beans Bakery and Cafe. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;