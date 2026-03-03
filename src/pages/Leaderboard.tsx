import DashboardLayout from '@/components/DashboardLayout';
import { Trophy, Medal, Award } from 'lucide-react';

const leaderboard = [
  { rank: 1, username: 'sh4d0w_', xp: 15420, level: 32, labs: 245 },
  { rank: 2, username: 'r00t_access', xp: 14200, level: 30, labs: 230 },
  { rank: 3, username: 'cyber_ninja', xp: 13100, level: 28, labs: 210 },
  { rank: 4, username: 'zer0day_', xp: 12500, level: 27, labs: 198 },
  { rank: 5, username: 'h4ck3r_x', xp: 11800, level: 25, labs: 185 },
  { rank: 6, username: 'ph1sh3r', xp: 10900, level: 24, labs: 170 },
  { rank: 7, username: 'byt3_m3', xp: 9500, level: 22, labs: 155 },
  { rank: 8, username: 'n3tw0rk_', xp: 8700, level: 20, labs: 140 },
  { rank: 9, username: 'xpl01t', xp: 7600, level: 18, labs: 120 },
  { rank: 10, username: 'r3c0n_', xp: 6800, level: 16, labs: 100 },
];

const rankIcon = (rank: number) => {
  if (rank === 1) return <Trophy className="h-5 w-5 text-cyber-yellow" />;
  if (rank === 2) return <Medal className="h-5 w-5 text-muted-foreground" />;
  if (rank === 3) return <Award className="h-5 w-5 text-cyber-orange" />;
  return <span className="text-sm font-mono text-muted-foreground w-5 text-center">{rank}</span>;
};

export default function Leaderboard() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Leader<span className="text-gradient-cyber">board</span></h1>
          <p className="text-muted-foreground mt-1">Top hackers on CyberForge</p>
        </div>

        <div className="glass-card rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider w-16">Rank</th>
                <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">Hacker</th>
                <th className="text-right p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">Level</th>
                <th className="text-right p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">XP</th>
                <th className="text-right p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Labs</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr key={entry.rank} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="p-4">{rankIcon(entry.rank)}</td>
                  <td className="p-4">
                    <span className="font-mono font-medium text-foreground">{entry.username}</span>
                  </td>
                  <td className="p-4 text-right font-mono text-sm text-cyber-cyan">{entry.level}</td>
                  <td className="p-4 text-right font-mono text-sm text-primary">{entry.xp.toLocaleString()}</td>
                  <td className="p-4 text-right font-mono text-sm text-muted-foreground hidden sm:table-cell">{entry.labs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
