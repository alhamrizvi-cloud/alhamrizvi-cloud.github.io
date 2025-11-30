import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Lock, Zap, Bug, Skull, Eye, Code, Network, Database, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function OffensiveSecPortfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.id === 'skills' && entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Penetration Testing', level: 95, icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-orange-500' },
    { name: 'Exploit Development', level: 90, icon: <Bug className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Network Security', level: 88, icon: <Network className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Web Application Testing', level: 92, icon: <Code className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { name: 'Social Engineering', level: 85, icon: <Eye className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
    { name: 'Reverse Engineering', level: 87, icon: <Terminal className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Cryptography', level: 82, icon: <Lock className="w-5 h-5" />, color: 'from-pink-500 to-red-500' },
    { name: 'Database Exploitation', level: 89, icon: <Database className="w-5 h-5" />, color: 'from-teal-500 to-green-500' }
  ];

  const certifications = [
    { name: 'CRTA', full: 'Certified Red Team Analyst', year: '2025' },
    { name: 'eJPT', full: 'eLearnSecurity Junior Penetration Tester', year: '2025' },
    { name: 'CNSP', full: 'Certified Network Security Practitioner', year: '2025' },
    { name: 'CAPIE', full: 'Certified API Hacking Expert', year: '2025' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-red-500 rounded-full opacity-20 blur-xl"
              style={{
                width: Math.random() * 300 + 100 + 'px',
                height: Math.random() * 300 + 100 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <div className="mb-8 inline-block animate-bounce">
            <Skull className="w-24 h-24 text-red-500 mx-auto drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]" />
          </div>
          <h1 className="text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              ALHAM RIZVI
            </span>
          </h1>
          <h2 className="text-4xl font-light mb-8 text-gray-300 animate-slide-up">
            Offensive Security Researcher & Penetration Tester
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4 animate-fade-in-delay">
            Breaking systems to build stronger defenses. Specializing in advanced exploitation techniques and vulnerability research.
          </p>
          <p className="text-lg text-gray-500 mb-12 animate-fade-in-delay">
            Mumbai, Maharashtra • its47h4m@gmail.com • +91 8329478587
          </p>
          
          <div className="flex gap-6 justify-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-red-500/50 hover:shadow-red-500/80 flex items-center gap-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </button>
            <button className="px-8 py-4 border-2 border-red-500 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300">
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-fade-in-delay">
            <a href="https://github.com/alham-rizvi" target="_blank" rel="noopener noreferrer" 
               className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30">
              <Github className="w-6 h-6 group-hover:text-red-500 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/alham-rizvi" target="_blank" rel="noopener noreferrer"
               className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30">
              <Linkedin className="w-6 h-6 group-hover:text-red-500 transition-colors" />
            </a>
            <a href="https://tryhackme.com/p/alhamrizvi" target="_blank" rel="noopener noreferrer"
               className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30">
              <Shield className="w-6 h-6 group-hover:text-red-500 transition-colors" />
            </a>
            <a href="mailto:its47h4m@gmail.com" 
               className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30">
              <Mail className="w-6 h-6 group-hover:text-red-500 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              TECHNICAL ARSENAL
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Weapons of choice in the cybersecurity battlefield</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/20"
                style={{
                  animation: skillsVisible ? `slideIn 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm text-gray-400">{skill.level}% Proficiency</span>
                  </div>
                </div>
                
                <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: skillsVisible ? `${skill.level}%` : '0%',
                      boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)'
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-32 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              CERTIFICATIONS
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-red-500/30 hover:border-red-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 rounded-xl transition-all duration-500" />
                <Zap className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold mb-2 text-white">{cert.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{cert.full}</p>
                <span className="text-xs text-red-400 font-semibold">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'TryHackMe Rank', value: 'Top #6' },
              { label: 'CTF Labs Completed', value: '400+' },
              { label: 'Security Writeups', value: '200+' },
              { label: 'Verified Vulnerabilities', value: '5' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105"
                style={{
                  animation: `fadeIn 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out 0.2s both;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
