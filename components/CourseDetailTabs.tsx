'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import type { Course } from '@/lib/data/courses';
import WeeklySchedule from '@/components/WeeklySchedule';

type Tab = 'overview' | 'schedule' | 'projects' | 'resources';

const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'schedule', label: 'Weekly Schedule' },
  { id: 'projects', label: 'Projects' },
  { id: 'resources', label: 'Resources' },
];

export default function CourseDetailTabs({ course }: { course: Course }) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActiveTab(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      focusTab(index + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      focusTab(index - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusTab(tabs.length - 1);
    }
  };

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Course detail sections"
        className="flex gap-0 border-2 border-ink mb-10 overflow-x-auto"
      >
        {tabs.map((tab, index) => {
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`flex-1 min-w-[120px] px-5 py-3.5 font-mono text-[11px] tracking-[0.12em] uppercase border-r border-ink last:border-r-0 transition-colors cursor-pointer whitespace-nowrap ${
                selected
                  ? 'bg-ink text-paper'
                  : 'bg-paper text-dim hover:bg-cream'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
      >
        {activeTab === 'overview' && <OverviewTab course={course} />}
        {activeTab === 'schedule' && <ScheduleTab course={course} />}
        {activeTab === 'projects' && <ProjectsTab course={course} />}
        {activeTab === 'resources' && <ResourcesTab course={course} />}
      </div>
    </div>
  );
}

// ── OVERVIEW TAB ─────────────────────────────────────────────
function OverviewTab({ course }: { course: Course }) {
  return (
    <div>
      {/* Description */}
      <div className="mb-12">
        <div className="border-l-4 pl-6 py-2 mb-6" style={{ borderColor: course.accentColor }}>
          <p className="font-serif text-[clamp(18px,2.5vw,26px)] italic leading-[1.4] text-ink/80">
            {course.title}
          </p>
        </div>
        <div className="section-label mb-4" style={{ color: course.accentColor }}>
          About This Course
        </div>
        <p className="text-[16px] leading-[1.9] text-dim max-w-2xl">
          {course.shortDescription}
        </p>
      </div>

      {/* Learning objectives */}
      <div className="mb-12">
        <div className="section-label mb-4" style={{ color: course.accentColor }}>
          Learning Objectives
        </div>
        <div className="border-2 border-ink">
          {course.learningObjectives.map((obj, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 px-6 py-4 ${
                i !== course.learningObjectives.length - 1 ? 'border-b border-cream' : ''
              } transition-colors hover:bg-cream/40`}
            >
              <span
                className="font-display text-[24px] leading-none shrink-0 mt-0.5"
                style={{ color: `${course.accentColor}30` }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[13.5px] leading-[1.75] text-ink">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy cards */}
      <div>
        <div className="section-label mb-4" style={{ color: course.accentColor }}>
          Course Philosophy
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-ink">
          {course.teachingPhilosophy.map((phil, i) => (
            <div
              key={i}
              className={`px-6 py-7 ${
                i !== course.teachingPhilosophy.length - 1 ? 'md:border-r-2 border-b-2 md:border-b-0 border-ink' : ''
              } transition-colors hover:bg-ink hover:text-paper group`}
            >
              <div
                className="font-display text-[56px] leading-none mb-2 transition-colors"
                style={{ color: `${course.accentColor}15` }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-[13.5px] leading-[1.75] text-dim group-hover:text-paper/65 transition-colors">
                {phil}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── SCHEDULE TAB ─────────────────────────────────────────────
function ScheduleTab({ course }: { course: Course }) {
  return (
    <div>
      <div className="section-label mb-3" style={{ color: course.accentColor }}>
        {course.weeks}-Week Calendar
      </div>
      <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] leading-[1.05] mb-3">
        Root to Branch,{' '}
        <em className="italic" style={{ color: course.accentColor }}>
          Week by Week
        </em>
      </h2>
      <p className="text-[16px] leading-[1.9] text-dim max-w-2xl mb-10">
        Every week opens with a problem you can&apos;t yet solve. By the end of that
        week, you can -- and you understand why the solution works, not just how
        to run it.
      </p>

      <WeeklySchedule weeks={course.weeklyModules} accentHex={course.accentColor} />
    </div>
  );
}

// ── PROJECTS TAB ─────────────────────────────────────────────
function ProjectsTab({ course }: { course: Course }) {
  return (
    <div>
      <div className="section-label mb-3" style={{ color: course.accentColor }}>
        Student Deliverables
      </div>
      <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] leading-[1.05] mb-3">
        Every Structure Is a{' '}
        <em className="italic" style={{ color: course.accentColor }}>
          Mini Project
        </em>
      </h2>
      <p className="text-[16px] leading-[1.9] text-dim max-w-2xl mb-10">
        No exams. No LeetCode grind. Each major concept culminates in a project
        where you build something real, deploy it, and reflect on what you
        learned.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-ink">
        {course.tracks.flatMap(t => t.projects).map((project, i) => (
          <div
            key={i}
            className="px-6 py-6 relative border-b-2 border-ink last:border-b-0 odd:md:border-r-2 transition-colors hover:bg-cream/40"
          >
            <div className="absolute -top-2 left-4 bg-paper px-1.5">
              <span className="font-mono text-[8px] tracking-[0.2em] uppercase" style={{ color: course.accentColor }}>
                Project
              </span>
            </div>

            <div className="flex items-start gap-4 mt-1">
              <span
                className="font-display text-[32px] leading-none shrink-0"
                style={{ color: `${course.accentColor}20` }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-[13px] leading-[1.75] text-dim">{project}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Assessment note */}
      <div className="mt-10 border-2 border-ink">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-ink text-paper px-7 py-7 md:border-r-2 border-b-2 md:border-b-0 border-ink">
            <h3 className="font-serif text-[22px] italic mb-4" style={{ color: course.accentColor }}>
              Portfolio-Based Assessment
            </h3>
            <p className="text-[13px] leading-[1.75] text-paper/60">
              A living document of your journey -- not a polished showcase, but a
              process record. First attempts, failures, revised understanding. All
              of it belongs here.
            </p>
          </div>
          <div className="px-7 py-7">
            <h3 className="font-serif text-[22px] italic mb-4" style={{ color: course.accentColor }}>
              You Assign Your Grade
            </h3>
            <p className="text-[13px] leading-[1.75] text-dim">
              Adapted from Jeff Anderson&apos;s ungrading practice. The goal is not
              to perform mastery for a grade. The goal is to build real
              understanding that serves you in 10 years. Evidence of learning --
              not test scores -- is the only currency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── RESOURCES TAB ────────────────────────────────────────────
function ResourcesTab({ course }: { course: Course }) {
  return (
    <div>
      <div className="section-label mb-3" style={{ color: course.accentColor }}>
        Intellectual Lineage
      </div>
      <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] leading-[1.05] mb-3">
        Standing on the{' '}
        <em className="italic" style={{ color: course.accentColor }}>
          Shoulders of Thinkers
        </em>
      </h2>
      <p className="text-[16px] leading-[1.9] text-dim max-w-2xl mb-10">
        Every design choice in this course is grounded in research on how people
        learn. These are the thinkers whose work shapes our classroom.
      </p>

      {/* Resources grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-ink">
        {course.keyResources.map((resource, i) => (
          <div
            key={i}
            className="px-6 py-6 border-b-2 sm:border-r-2 border-ink last:border-b-0 last:border-r-0 transition-colors hover:bg-cream/40"
          >
            <span
              className="block font-mono text-[9px] tracking-[0.12em] uppercase mb-1.5"
              style={{ color: course.accentColor }}
            >
              Resource
            </span>
            <p className="font-serif text-[16px] italic">{resource}</p>
          </div>
        ))}
      </div>

      {/* Course info */}
      <div className="mt-12 bg-ink text-paper px-7 py-8 border-2 border-ink">
        <h3 className="font-display text-[28px] tracking-[0.05em] mb-4" style={{ color: course.accentColor }}>
          {course.courseNumber}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <span className="block font-mono text-[9px] tracking-[0.15em] uppercase text-paper/30 mb-2">
              Course Details
            </span>
            <ul className="list-none space-y-1 text-[12px] text-paper/55 leading-relaxed">
              <li>{course.units} Units &middot; {course.weeks} Weeks</li>
              <li>{course.tracks.length} Adventure {course.tracks.length === 1 ? 'Track' : 'Tracks'}</li>
              <li>Flipped + Project-Based</li>
              <li>Portfolio + Ungrading</li>
            </ul>
          </div>
          <div>
            <span className="block font-mono text-[9px] tracking-[0.15em] uppercase text-paper/30 mb-2">
              Resources
            </span>
            <ul className="list-none space-y-1 text-[12px] text-paper/55 leading-relaxed">
              <li>All resources free and open-access</li>
              <li>No required textbook purchases</li>
              <li>Liberatory education</li>
              <li>
                <a
                  href="mailto:henry@henryfan.org"
                  className="underline underline-offset-2 hover:text-paper/80 transition-colors"
                  style={{ textDecorationColor: course.accentColor }}
                >
                  henry@henryfan.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
