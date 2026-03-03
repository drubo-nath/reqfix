'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
} from 'lucide-react';

const data = () => ({
  navigation: {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '#integrations' },
    
    ],
    company: [
      { name: 'Workflow', href: '#workflow' },
      { name: 'Features', href: '#features' },
      { name: 'Benefits', href: '#benefits' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
  },
  socialLinks: [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: MessageCircle, label: 'Discord', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ],
  bottomLinks: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookie Policy' },
  ],
});

export default function FooterStandard() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  if (!mounted) return null;

  return (
    <footer className="w-full relative overflow-hidden bg-[#020808] text-white pt-20 pb-10">
      {/* Top Gradient separator matching Workflow bottom */}
      <div 
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#034f46] to-transparent opacity-50" 
      />
      
      <div className="relative w-full px-5 z-10">
        {/* Top Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* Company Info */}
          <div className="space-y-6 max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* White Logo for dark background */}
              <div className="relative h-10 w-10 bg-[#034f46] rounded-xl flex items-center justify-center">
                 <Image
                   src="reqFix.svg"
                   alt="Logo"
                   width={40}
                   height={40}

                 />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">ReqFix</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative solutions for modern maintenance management. 
              The AI-powered standard for property operations.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              {data().socialLinks.map(({ icon: Icon, label, href }) => (
                <Link 
                  key={label} 
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
             <div>
               <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
               <ul className="space-y-3">
                 {data().navigation.product.map((item) => (
                   <li key={item.name}>
                     <Link href={item.href} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                       {item.name}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
             
             <div>
               <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
               <ul className="space-y-3">
                 {data().navigation.company.map((item) => (
                   <li key={item.name}>
                     <Link href={item.href} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                       {item.name}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="hidden md:block">
               <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
               <ul className="space-y-3">
                 {data().navigation.legal.map((item) => (
                   <li key={item.name}>
                     <Link href={item.href} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                       {item.name}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>

        {/* Big Text Background Effect */}
        <div className="w-full flex justify-center py-16 opacity-10 pointer-events-none select-none overflow-hidden">
          <h1 className="text-[20vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent tracking-tighter bg-[#034f46]">
            REQFIX
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {currentYear} ReqFix Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {data().bottomLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-emerald-400 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background radial glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(3, 79, 70, 0.15) 0%, transparent 70%)',
        }}
      />
    </footer>
  );
}
