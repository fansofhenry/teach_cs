import Link from 'next/link';
import type { Course } from '@/lib/data/courses';

const statusConfig = {
  taught: { label: 'Taught', className: 'status-taught' },
  'in-development': { label: 'In Development', className: 'status-dev' },
  proposed: { label: 'Proposed', className: 'status-proposed' },
} as const;

export default function CourseCard({ course }: { course: Course }) {
  const status = statusConfig[course.status];

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block border-2 border-ink bg-paper transition-all duration-200 hover:-translate-y-0.5 no-underline"
    >
      {/* Dark header with large course number */}
      <div
        className="relative overflow-hidden px-6 py-7 border-b-2 border-ink"
        style={{ backgroundColor: course.accentColor }}
      >
        {/* Large watermark number */}
        <span className="absolute -right-2 -top-3 font-display text-[80px] leading-none text-white/10 select-none pointer-events-none">
          {course.courseNumber.replace(/\s/g, '')}
        </span>

        <div className="relative z-10">
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/60">
            {course.category}
          </span>
          <div className="font-display text-[38px] leading-[0.88] tracking-[0.02em] text-white mt-1">
            {course.courseNumber}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="px-6 pt-5 pb-6">
        {/* Status badge */}
        <span className={`status-badge ${status.className}`}>
          {status.label}
        </span>

        {/* Title */}
        <h3 className="font-serif text-[19px] italic leading-snug text-ink mt-2 mb-2 group-hover:text-red transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-[12.5px] leading-[1.75] text-dim line-clamp-3">
          {course.shortDescription}
        </p>

        {/* Metadata row */}
        <div className="flex gap-0 border border-cream mt-4">
          <div className="flex-1 px-3 py-2 border-r border-cream text-center">
            <span className="block font-display text-[22px] leading-none" style={{ color: course.accentColor }}>
              {course.weeks}
            </span>
            <span className="block font-mono text-[7px] tracking-[0.1em] uppercase text-dim mt-0.5">
              Weeks
            </span>
          </div>
          <div className="flex-1 px-3 py-2 border-r border-cream text-center">
            <span className="block font-display text-[22px] leading-none" style={{ color: course.accentColor }}>
              {course.units}
            </span>
            <span className="block font-mono text-[7px] tracking-[0.1em] uppercase text-dim mt-0.5">
              Units
            </span>
          </div>
          <div className="flex-1 px-3 py-2 text-center">
            <span className="block font-display text-[22px] leading-none" style={{ color: course.accentColor }}>
              {course.tracks.length}
            </span>
            <span className="block font-mono text-[7px] tracking-[0.1em] uppercase text-dim mt-0.5">
              {course.tracks.length === 1 ? 'Track' : 'Tracks'}
            </span>
          </div>
        </div>

        {/* Read more indicator */}
        <div className="mt-4 font-mono text-[10px] tracking-[0.12em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: course.accentColor }}>
          View Course Details &rarr;
        </div>
      </div>
    </Link>
  );
}
