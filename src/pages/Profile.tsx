import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/hooks/useAuth';
import { Shield, Zap, Target, Award, Flame, Calendar } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();
  const username = user?.user_metadata?.username || 'Hacker';

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="glass-card rounded-xl p-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-cyber flex items-center justify-center text-3xl font-bold text-primary-foreground font-mono">
              {username[0]?.toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground font-mono">{username}</h1>
              <p className="text-muted-foreground text-sm">{user?.email}</p>
              <p className="text-primary text-sm font-mono mt-1">Script Kiddie · Level 1</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: Zap, label: 'Total XP', value: '0', color: 'text-cyber-cyan' },
            { icon: Target, label: 'Labs Done', value: '0', color: 'text-cyber-purple' },
            { icon: Flame, label: 'Streak', value: '0 days', color: 'text-cyber-orange' },
            { icon: Award, label: 'Badges', value: '0', color: 'text-cyber-yellow' },
            { icon: Shield, label: 'Rank', value: '#—', color: 'text-cyber-green' },
            { icon: Calendar, label: 'Joined', value: user?.created_at ? new Date(user.created_at).toLocaleDateString() : '—', color: 'text-cyber-red' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-lg p-4 text-center">
              <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
              <div className="text-lg font-bold text-foreground font-mono">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Badges</h2>
          <p className="text-muted-foreground text-sm">Complete labs and learning paths to earn badges.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
