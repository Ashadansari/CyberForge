import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/hooks/useAuth';
import { Shield, Zap, Target, Award, Flame, TrendingUp } from 'lucide-react';

const statCards = [
  { icon: Shield, label: 'Level', value: '1', color: 'text-cyber-green', bg: 'bg-cyber-green/10' },
  { icon: Zap, label: 'Total XP', value: '0', color: 'text-cyber-cyan', bg: 'bg-cyber-cyan/10' },
  { icon: Target, label: 'Labs Completed', value: '0', color: 'text-cyber-purple', bg: 'bg-cyber-purple/10' },
  { icon: Flame, label: 'Day Streak', value: '0', color: 'text-cyber-orange', bg: 'bg-cyber-orange/10' },
  { icon: Award, label: 'Badges', value: '0', color: 'text-cyber-yellow', bg: 'bg-cyber-yellow/10' },
  { icon: TrendingUp, label: 'Rank', value: 'Script Kiddie', color: 'text-cyber-red', bg: 'bg-cyber-red/10' },
];

const recentPaths = [
  { title: 'Web Application Pentesting', progress: 0, total: 12 },
  { title: 'Linux Fundamentals', progress: 0, total: 8 },
  { title: 'Network Exploitation', progress: 0, total: 10 },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, <span className="text-gradient-cyber">{user?.user_metadata?.username || 'Hacker'}</span>
          </h1>
          <p className="text-muted-foreground mt-1">Continue your cybersecurity training</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {statCards.map((stat) => (
            <div key={stat.label} className="glass-card rounded-lg p-4 text-center">
              <div className={`inline-flex p-2 rounded-lg ${stat.bg} mb-2`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="text-xl font-bold text-foreground font-mono">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Active Learning Paths */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Recommended Paths</h2>
          <div className="space-y-4">
            {recentPaths.map((path) => (
              <div key={path.title} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border hover:border-primary/20 transition-colors cursor-pointer">
                <div>
                  <h3 className="font-medium text-foreground">{path.title}</h3>
                  <p className="text-sm text-muted-foreground">{path.progress}/{path.total} modules</p>
                </div>
                <div className="w-32">
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-gradient-cyber rounded-full" style={{ width: `${path.total > 0 ? (path.progress / path.total) * 100 : 0}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Heatmap placeholder */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Activity</h2>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 49 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-sm bg-muted hover:bg-primary/20 transition-colors" />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 font-mono">Last 7 weeks</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
