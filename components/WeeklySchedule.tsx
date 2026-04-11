import type { WeeklyModule } from '@/lib/data/types';

interface WeeklyScheduleProps {
  weeks: WeeklyModule[];
  accentHex: string;
}

export default function WeeklySchedule({ weeks, accentHex }: WeeklyScheduleProps) {
  // Group weeks by unit
  const units: { name: string; weeks: WeeklyModule[] }[] = [];
  let currentUnit = '';

  for (const week of weeks) {
    const unitName = week.unit || 'General';
    if (unitName !== currentUnit) {
      currentUnit = unitName;
      units.push({ name: unitName, weeks: [] });
    }
    units[units.length - 1].weeks.push(week);
  }

  return (
    <div className="border-2 border-ink">
      {/* Table header */}
      <div className="hidden md:grid grid-cols-[72px_2fr_2fr_2fr] bg-ink text-paper">
        <div className="px-4 py-3.5 font-mono text-[10px] tracking-[0.15em] uppercase border-r border-white/10">
          Wk
        </div>
        <div className="px-5 py-3.5 font-mono text-[10px] tracking-[0.15em] uppercase border-r border-white/10">
          Theme
        </div>
        <div className="px-5 py-3.5 font-mono text-[10px] tracking-[0.15em] uppercase border-r border-white/10">
          Topics
        </div>
        <div className="px-5 py-3.5 font-mono text-[10px] tracking-[0.15em] uppercase">
          Project
        </div>
      </div>

      {units.map((unit, unitIdx) => (
        <div key={unitIdx}>
          {/* Unit header */}
          <div
            className="px-5 py-2.5 font-mono text-[10px] tracking-[0.15em] uppercase border-t-2 border-ink flex items-center gap-3"
            style={{
              backgroundColor: `${accentHex}10`,
              color: accentHex,
              borderLeft: `3px solid ${accentHex}`,
            }}
          >
            <span aria-hidden className="opacity-40">{'//'}</span>
            {unit.name}
          </div>

          {/* Week rows */}
          {unit.weeks.map((week) => (
            <div
              key={week.week}
              className="grid grid-cols-1 md:grid-cols-[72px_2fr_2fr_2fr] border-t border-cream transition-colors hover:bg-cream/40"
            >
              {/* Week number */}
              <div className="px-4 py-4 md:border-r-2 md:border-ink flex md:flex-col items-center md:items-center justify-start md:justify-center gap-2 md:gap-0.5">
                <span className="font-display text-[28px] leading-none text-ink">
                  {String(week.week).padStart(2, '0')}
                </span>
                <span className="font-mono text-[7px] tracking-[0.1em] uppercase text-dim opacity-60 md:mt-0.5">
                  Week
                </span>
              </div>

              {/* Title */}
              <div className="px-5 py-4 md:border-r border-cream">
                <div className="font-serif text-[14px] italic mb-1">{week.title}</div>
              </div>

              {/* Topics */}
              <div className="px-5 py-4 md:border-r border-cream">
                <p className="text-[12px] leading-[1.65] text-dim">{week.topics.join(', ')}</p>
              </div>

              {/* Project */}
              <div className="px-5 py-4 pb-5 md:pb-4">
                <p className="text-[12px] leading-[1.65] text-dim">{week.project || '—'}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
