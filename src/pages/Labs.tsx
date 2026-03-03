import DashboardLayout from '@/components/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock } from 'lucide-react';

const labs = [
  { title: 'SQL Injection Lab', category: 'Web', difficulty: 'Easy', points: 10, tags: ['OWASP', 'SQLi'] },
  { title: 'XSS Playground', category: 'Web', difficulty: 'Easy', points: 10, tags: ['XSS', 'JavaScript'] },
  { title: 'Buffer Overflow Basics', category: 'Binary', difficulty: 'Medium', points: 20, tags: ['BOF', 'C'] },
  { title: 'Privilege Escalation - Linux', category: 'Pentesting', difficulty: 'Medium', points: 25, tags: ['Linux', 'PrivEsc'] },
  { title: 'Active Directory Enumeration', category: 'Pentesting', difficulty: 'Hard', points: 40, tags: ['AD', 'Windows'] },
  { title: 'JWT Token Exploitation', category: 'Web', difficulty: 'Medium', points: 20, tags: ['JWT', 'Auth'] },
  { title: 'SSRF Attack Chain', category: 'Web', difficulty: 'Hard', points: 35, tags: ['SSRF', 'Cloud'] },
  { title: 'Malware Analysis 101', category: 'RE', difficulty: 'Hard', points: 30, tags: ['Malware', 'RE'] },
  { title: 'Network Scanning', category: 'Network', difficulty: 'Easy', points: 10, tags: ['Nmap', 'Recon'] },
  { title: 'Hash Cracking Challenge', category: 'Crypto', difficulty: 'Easy', points: 15, tags: ['Hashing', 'Crack'] },
];

const diffColor: Record<string, string> = {
  Easy: 'bg-cyber-green/20 text-cyber-green',
  Medium: 'bg-cyber-orange/20 text-cyber-orange',
  Hard: 'bg-cyber-red/20 text-cyber-red',
};

export default function Labs() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Labs & <span className="text-gradient-cyber">Challenges</span></h1>
            <p className="text-muted-foreground mt-1">Hands-on hacking environments</p>
          </div>
        </div>

        <div className="space-y-3">
          {labs.map((lab) => (
            <div key={lab.title} className="glass-card rounded-lg p-4 flex items-center justify-between hover:border-primary/20 transition-all group">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-mono font-bold text-sm">
                  {lab.points}
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-foreground truncate">{lab.title}</h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-xs text-muted-foreground font-mono">{lab.category}</span>
                    {lab.tags.map(tag => (
                      <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Badge className={`${diffColor[lab.difficulty]} border-0 text-xs font-mono`}>{lab.difficulty}</Badge>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Play className="h-3.5 w-3.5" /> Start
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
