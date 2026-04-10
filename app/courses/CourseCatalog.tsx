'use client';

import { useState, useMemo } from 'react';
import { courses, categories } from '@/lib/data/courses';
import type { CourseCategory, CourseStatus } from '@/lib/data/courses';
import CourseCard from '@/components/CourseCard';

const statusFilters: { value: CourseStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All Status' },
  { value: 'taught', label: 'Taught' },
  { value: 'in-development', label: 'In Development' },
  { value: 'proposed', label: 'Proposed' },
];

export default function CourseCatalogClient() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'all'>('all');
  const [activeStatus, setActiveStatus] = useState<CourseStatus | 'all'>('all');

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      // Category filter
      if (activeCategory !== 'all' && course.category !== activeCategory) return false;

      // Status filter
      if (activeStatus !== 'all' && course.status !== activeStatus) return false;

      // Search filter
      if (search.trim()) {
        const q = search.toLowerCase();
        const searchable = `${course.courseNumber} ${course.title} ${course.shortDescription} ${course.category}`.toLowerCase();
        if (!searchable.includes(q)) return false;
      }

      return true;
    });
  }, [search, activeCategory, activeStatus]);

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero header */}
      <div className="bg-ink text-paper border-b-[5px] border-red">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-16 lg:py-24">
          <div className="font-mono text-[12px] tracking-[0.16em] uppercase text-red mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-red inline-block" />
            Course Catalog
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,66px)] italic leading-[1.05] mb-5">
            Teaching Computing<br />
            <span className="text-red not-italic font-display tracking-[0.02em]">Differently.</span>
          </h1>
          <p className="text-[17px] leading-[1.75] text-paper/85 max-w-[600px] font-light">
            Eleven courses spanning AI, systems, mathematics, and engineering.
            Every course is project-based, equity-centered, and grounded in
            learning science. No exams. No required textbooks. Every concept
            earned through building.
          </p>

          {/* Stats row */}
          <div className="flex gap-0 border border-white/25 w-fit mt-8">
            <div className="px-5 py-3 border-r border-white/25 text-center">
              <span className="block font-display text-[30px] leading-none text-red">{courses.length}</span>
              <span className="block font-mono text-[10px] tracking-[0.1em] uppercase text-paper/70 mt-1.5">Courses</span>
            </div>
            <div className="px-5 py-3 border-r border-white/25 text-center">
              <span className="block font-display text-[30px] leading-none text-orange">5</span>
              <span className="block font-mono text-[10px] tracking-[0.1em] uppercase text-paper/70 mt-1.5">Categories</span>
            </div>
            <div className="px-5 py-3 border-r border-white/25 text-center">
              <span className="block font-display text-[30px] leading-none text-gold">3</span>
              <span className="block font-mono text-[10px] tracking-[0.1em] uppercase text-paper/70 mt-1.5">Tracks Per Course</span>
            </div>
            <div className="px-5 py-3 text-center">
              <span className="block font-display text-[30px] leading-none text-teal">0</span>
              <span className="block font-mono text-[10px] tracking-[0.1em] uppercase text-paper/70 mt-1.5">Exams</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-cream border-b-2 border-ink sticky top-13 z-50">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-dim/50 tracking-[0.08em] pointer-events-none">
                //
              </span>
              <input
                type="search"
                placeholder="Search courses..."
                aria-label="Search courses by name, number, or topic"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-paper border-2 border-ink px-4 pl-9 py-3 font-mono text-[14px] tracking-[0.02em] text-ink placeholder:text-dim/60 focus:outline-none focus:border-red transition-colors"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-0 border-2 border-ink">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2.5 font-mono text-[12px] tracking-[0.1em] uppercase border-r border-ink transition-colors cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-ink text-paper'
                    : 'bg-paper text-ink hover:bg-cream'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2.5 font-mono text-[12px] tracking-[0.1em] uppercase border-r border-ink last:border-r-0 transition-colors cursor-pointer ${
                    activeCategory === cat.value
                      ? 'bg-ink text-paper'
                      : 'bg-paper text-ink hover:bg-cream'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Status filter */}
            <div className="flex flex-wrap gap-0 border-2 border-ink">
              {statusFilters.map((sf) => (
                <button
                  key={sf.value}
                  onClick={() => setActiveStatus(sf.value)}
                  className={`px-3 py-2.5 font-mono text-[12px] tracking-[0.06em] uppercase border-r border-ink last:border-r-0 transition-colors cursor-pointer ${
                    activeStatus === sf.value
                      ? 'bg-ink text-paper'
                      : 'bg-paper text-ink hover:bg-cream'
                  }`}
                >
                  {sf.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course grid */}
      <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-12 lg:py-16">
        {/* Results count */}
        <div className="font-mono text-[12px] tracking-[0.12em] uppercase text-dim mb-8 flex items-center gap-3">
          <span className="opacity-60">//</span>
          {filtered.length} {filtered.length === 1 ? 'Course' : 'Courses'} Found
        </div>

        {filtered.length === 0 ? (
          <div className="border-2 border-ink py-24 text-center">
            <div className="font-display text-[48px] text-cream leading-none mb-3">0</div>
            <p className="font-serif text-[18px] italic text-dim">
              No courses match your filters.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory('all');
                setActiveStatus('all');
              }}
              className="mt-4 font-mono text-[10px] tracking-[0.12em] uppercase text-red border border-red px-4 py-2 hover:bg-red hover:text-paper transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0">
            {filtered.map((course, idx) => (
              <div
                key={course.slug}
                className={`${idx % 3 !== 2 ? 'xl:border-r-0' : ''} ${idx % 2 !== 1 ? 'md:border-r-0 xl:border-r-0' : 'md:border-r-2 xl:border-r-0'}`}
                style={{ marginTop: idx >= 3 ? '-2px' : undefined }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom tagline */}
      <div className="bg-ink text-paper px-7 lg:px-15 py-12 border-t-2 border-ink">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <div className="font-mono text-[12px] tracking-[0.16em] uppercase text-red mb-2">
              Teaching Philosophy
            </div>
            <p className="font-serif text-[clamp(20px,2.5vw,32px)] italic leading-tight text-paper/85 max-w-xl">
              Every concept is earned through building. Every student is the world&apos;s leading expert on their own learning.
            </p>
          </div>
          <div className="font-mono text-[12px] tracking-[0.04em] text-paper/65 leading-7 text-right">
            Community College CS<br />
            All resources free &middot; Open access<br />
            No required textbooks<br />
            henry@henryfan.org
          </div>
        </div>
      </div>
    </div>
  );
}
