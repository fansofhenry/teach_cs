import { notFound } from 'next/navigation';
import Link from 'next/link';
import { courses, getCourseBySlug } from '@/lib/data/courses';
import CourseDetailTabs from '@/components/CourseDetailTabs';

// ── Static Params for Static Export ──────────────────────────
export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

// ── Metadata ─────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: 'Course Not Found' };

  const title = `${course.courseNumber} — ${course.title}`;
  const ogImage = `/courses/${course.slug}/opengraph-image.png`;
  return {
    title,
    description: course.shortDescription,
    openGraph: {
      title,
      description: course.shortDescription,
      url: `/courses/${course.slug}`,
      type: 'article',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: course.shortDescription,
      images: [ogImage],
    },
  };
}

// ── Status config ────────────────────────────────────────────
const statusConfig = {
  taught: { label: 'Taught', className: 'status-taught' },
  'in-development': { label: 'In Development', className: 'status-dev' },
  proposed: { label: 'Proposed', className: 'status-proposed' },
} as const;

// ── Page Component ───────────────────────────────────────────
export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const status = statusConfig[course.status];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${course.courseNumber} — ${course.title}`,
    description: course.shortDescription,
    courseCode: course.courseNumber,
    provider: {
      '@type': 'Organization',
      name: 'Teaching Computing Differently',
      url: 'https://fansofhenry.github.io/teach_cs',
    },
    educationalLevel: 'Community College',
    inLanguage: 'en',
    teaches: course.learningObjectives,
    url: `https://fansofhenry.github.io/teach_cs/courses/${course.slug}`,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Blended',
      courseWorkload: `PT${course.weeks}W`,
    },
  };

  return (
    <div className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── HERO ─────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden border-b-[5px]"
        style={{ backgroundColor: course.accentColor, borderBottomColor: course.accentColor }}
      >
        {/* Large watermark */}
        <span className="absolute -right-6 -top-8 font-display text-[clamp(120px,20vw,280px)] leading-none text-white/5 select-none pointer-events-none">
          {course.courseNumber.replace(/\s/g, '')}
        </span>

        <div className="relative z-10 max-w-[1300px] mx-auto px-7 lg:px-15">
          {/* Breadcrumb */}
          <div className="pt-6 pb-2">
            <Link
              href="/courses"
              className="font-mono text-[12px] tracking-[0.12em] uppercase text-white/80 no-underline hover:text-white transition-colors"
            >
              &larr; All Courses
            </Link>
          </div>

          {/* Hero content */}
          <div className="py-12 lg:py-20 max-w-3xl">
            <span className={`status-badge ${status.className}`}>
              {status.label}
            </span>

            <div className="font-mono text-[12px] tracking-[0.16em] uppercase text-white/85 mt-4 mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-white/60 inline-block" />
              {course.category}
            </div>

            <div className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] text-white animate-fade-up-1">
              {course.courseNumber}
            </div>

            <h1 className="font-serif text-[clamp(24px,3.5vw,42px)] italic text-white/90 leading-tight mt-3 animate-fade-up-2">
              {course.title}
            </h1>

            <p className="text-[17px] leading-[1.75] text-white/85 max-w-2xl mt-6 font-light animate-fade-up-3">
              {course.shortDescription}
            </p>

            {/* Stats bar */}
            <div className="flex gap-0 border border-white/35 w-fit mt-8 animate-fade-up-4">
              <div className="px-5 py-3 border-r border-white/35 text-center">
                <span className="block font-display text-[30px] leading-none text-white">{course.weeks}</span>
                <span className="block font-mono text-[10px] tracking-[0.08em] uppercase text-white/75 mt-1.5">Weeks</span>
              </div>
              <div className="px-5 py-3 border-r border-white/35 text-center">
                <span className="block font-display text-[30px] leading-none text-white">{course.units}</span>
                <span className="block font-mono text-[10px] tracking-[0.08em] uppercase text-white/75 mt-1.5">Units</span>
              </div>
              <div className="px-5 py-3 border-r border-white/35 text-center">
                <span className="block font-display text-[30px] leading-none text-white">{course.tracks.length}</span>
                <span className="block font-mono text-[10px] tracking-[0.08em] uppercase text-white/75 mt-1.5">{course.tracks.length === 1 ? 'Track' : 'Tracks'}</span>
              </div>
              <div className="px-5 py-3 text-center">
                <span className="block font-display text-[30px] leading-none text-white">0</span>
                <span className="block font-mono text-[10px] tracking-[0.08em] uppercase text-white/75 mt-1.5">Exams</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <div className="max-w-[1300px] mx-auto px-7 lg:px-15">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-0 lg:gap-16 py-12 lg:py-16">
          {/* Left: Main content with tabs */}
          <div className="min-w-0">
            <CourseDetailTabs course={course} />
          </div>

          {/* Right: Sidebar */}
          <aside className="mt-10 lg:mt-0">
            {/* Quick metadata */}
            <div className="border-2 border-ink sticky top-20">
              <div className="bg-ink text-paper px-5 py-3.5">
                <span className="font-mono text-[12px] tracking-[0.14em] uppercase">
                  Quick Reference
                </span>
              </div>

              <div className="p-5">
                {/* Status */}
                <div className="mb-5">
                  <span className="block font-mono text-[11px] tracking-[0.14em] uppercase text-dim mb-1.5">
                    Status
                  </span>
                  <span className={`status-badge ${status.className}`}>{status.label}</span>
                </div>

                {/* Category */}
                <div className="mb-5">
                  <span className="block font-mono text-[11px] tracking-[0.14em] uppercase text-dim mb-1.5">
                    Category
                  </span>
                  <span className="font-serif text-[17px] italic">{course.category}</span>
                </div>

                {/* Prerequisites */}
                <div className="mb-5">
                  <span className="block font-mono text-[11px] tracking-[0.14em] uppercase text-dim mb-2">
                    Prerequisites
                  </span>
                  <ul className="list-none space-y-2">
                    {course.prerequisites.map((prereq, i) => (
                      <li key={i} className="text-[14px] leading-[1.6] text-ink/85 pl-5 relative">
                        <span className="absolute left-0 font-mono text-[12px]" style={{ color: course.accentColor }}>
                          &rarr;
                        </span>
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Philosophy */}
                <div className="border-t border-cream pt-5">
                  <span className="block font-mono text-[11px] tracking-[0.14em] uppercase text-dim mb-3">
                    Philosophy
                  </span>
                  <ul className="list-none space-y-3">
                    {course.teachingPhilosophy.map((p, i) => (
                      <li key={i} className="text-[14px] leading-[1.65] text-ink/85 pl-7 relative">
                        <span className="absolute left-0 font-display text-[18px] leading-none" style={{ color: course.accentColor }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Back link */}
              <div className="border-t-2 border-ink">
                <Link
                  href="/courses"
                  className="block px-5 py-3.5 font-mono text-[12px] tracking-[0.1em] uppercase text-center no-underline transition-colors hover:bg-ink hover:text-paper"
                  style={{ color: course.accentColor }}
                >
                  &larr; Back to Catalog
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
