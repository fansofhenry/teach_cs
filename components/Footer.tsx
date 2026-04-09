export default function Footer() {
  return (
    <footer className="bg-ink text-paper px-7 lg:px-15 py-10 flex flex-col lg:flex-row justify-between items-center gap-4 border-t-3 border-red">
      <div className="font-mono text-[11px] tracking-[0.08em] text-paper/35 leading-8 text-center lg:text-left">
        Community College Computer Science
        <br />
        All resources free and open-access &middot; No required textbook purchases
        &middot;{' '}
        <a
          href="mailto:henry@henryfan.org"
          className="text-paper/50 no-underline hover:text-paper transition-colors"
        >
          henry@henryfan.org
        </a>
        <br />
        Liberatory Education &middot; Project-Based Learning &middot; Portfolio
        Assessment
      </div>
      <div className="font-display text-[28px] tracking-[0.05em] text-paper/15">
        CS 175 &middot; 180 &middot; 185 &middot; 210 &middot; Math 2B &middot;
        ENGR 11
      </div>
    </footer>
  );
}
