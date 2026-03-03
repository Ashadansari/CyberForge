import DashboardLayout from '@/components/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Terminal, Shield, Bug, Globe, Network, Lock, Server, Cpu } from 'lucide-react';

const paths = [
  { icon: Terminal, title: 'Linux Fundamentals', desc: 'Master the command line and Linux administration', category: 'Fundamentals', difficulty: 'Beginner', modules: 8, hours: 6, color: 'text-cyber-green' },
  { icon: Globe, title: 'Web Application Pentesting', desc: 'Learn OWASP Top 10 and web exploitation techniques', category: 'Web Security', difficulty: 'Intermediate', modules: 12, hours: 15, color: 'text-cyber-cyan' },
  { icon: Bug, title: 'Bug Bounty Hunter', desc: 'Find real vulnerabilities and earn bounties', category: 'Bug Bounty', difficulty: 'Intermediate', modules: 10, hours: 12, color: 'text-cyber-purple' },
  { icon: Network, title: 'Network Exploitation', desc: 'Scanning, enumeration, and network attacks', category: 'Network', difficulty: 'Intermediate', modules: 10, hours: 10, color: 'text-cyber-red' },
  { icon: Shield, title: 'Active Directory Attacks', desc: 'Compromise enterprise AD environments', category: 'Pentesting', difficulty: 'Advanced', modules: 8, hours: 14, color: 'text-cyber-orange' },
  { icon: Lock, title: 'Cryptography Essentials', desc: 'Understand and break crypto implementations', category: 'Cryptography', difficulty: 'Intermediate', modules: 6, hours: 8, color: 'text-cyber-yellow' },
  { icon: Cpu, title: 'Reverse Engineering', desc: 'Analyze binaries, malware, and firmware', category: 'RE', difficulty: 'Advanced', modules: 9, hours: 16, color: 'text-cyber-red' },
  { icon: Server, title: 'Cloud Security', desc: 'AWS, Azure, GCP exploitation and hardening', category: 'Cloud', difficulty: 'Advanced', modules: 7, hours: 10, color: 'text-cyber-cyan' },
];

const difficultyColor: Record<string, string> = {
  Beginner: 'bg-cyber-green/20 text-cyber-green',
  Intermediate: 'bg-cyber-cyan/20 text-cyber-cyan',
  Advanced: 'bg-cyber-red/20 text-cyber-red',
};

export default function LearningPaths() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Learning <span className="text-gradient-cyber">Paths</span></h1>
          <p className="text-muted-foreground mt-1">Structured courses to master cybersecurity</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {paths.map((path) => (
            <div key={path.title} className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer group">
              <div className="flex items-start justify-between mb-4">
                <path.icon className={`h-8 w-8 ${path.color} group-hover:scale-110 transition-transform`} />
                <Badge className={`${difficultyColor[path.difficulty]} border-0 text-xs font-mono`}>
                  {path.difficulty}
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{path.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{path.desc}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                <span>{path.modules} modules</span>
                <span>~{path.hours}h</span>
                <span className="text-primary/60">{path.category}</span>
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-cyber rounded-full w-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
