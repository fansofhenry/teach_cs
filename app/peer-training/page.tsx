import type { Metadata } from "next";
import {
  trainingCards,
  workshopFormats,
  facilitationTips,
  peerTrainingCitations,
} from "@/lib/data/peerTraining";

export const metadata: Metadata = {
  title: "Peer Educator Training — Teaching Computing Differently",
  description:
    "Training cards, workshop formats, and facilitation guides for peer educators grounded in Jeff Anderson's pedagogy and learning science research.",
};

const decks = ["Foundations", "Equity & Identity", "Pedagogy & Practice", "Wild Cards"];

const difficultyColors: Record<string, string> = {
  beginner: "bg-teal/10 text-teal border-teal/30",
  intermediate: "bg-gold/10 text-[#8a6500] border-gold/30",
  advanced: "bg-red/10 text-red border-red/30",
};

export default function PeerTrainingPage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        <div className="border-b border-white/10 px-7 lg:px-[60px] py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/50 flex justify-between">
          <span>Peer Educator Training</span>
          <span>{trainingCards.length} Cards &middot; 4 Decks</span>
        </div>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 lg:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5 animate-fade-up-1">
            Training Cards
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] mb-7 animate-fade-up-2">
            Peer
            <br />
            <span className="text-red">Training</span>
          </h1>
          <p className="text-[15px] leading-[1.9] text-white/60 font-light max-w-[620px] animate-fade-up-3">
            Discussion-based training cards for peer educators. Each card
            presents a concept, scenario, or principle from Jeff Anderson&apos;s
            pedagogy — operationalized for the tutoring center. Draw a card,
            discuss the prompts, build your practice.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-7 animate-fade-up-4">
            {decks.map((d) => (
              <span
                key={d}
                className="px-3.5 py-1.5 border border-white/15 font-mono text-[10px] tracking-[0.1em] uppercase text-white/50"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ======== CARD DECKS ======== */}
      {decks.map((deck) => {
        const cards = trainingCards.filter((c) => c.deck === deck);
        return (
          <section key={deck} className="border-b-2 border-ink">
            <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-10">
                <div className="section-label">{deck}</div>
                <div className="text-[13px] text-dim font-mono tracking-[0.05em]">
                  {cards.length} cards
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="border-2 border-ink"
                  >
                    <div className="bg-cream p-6 border-b-2 border-ink flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-dim">
                          {card.id}
                        </span>
                        <h3 className="font-serif text-[18px] italic leading-[1.3] mt-1">
                          {card.title}
                        </h3>
                      </div>
                      <span
                        className={`shrink-0 px-2.5 py-1 border font-mono text-[9px] tracking-[0.1em] uppercase ${difficultyColors[card.difficulty]}`}
                      >
                        {card.difficulty}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-[13px] leading-[1.85] text-dim mb-5">
                        {card.content}
                      </p>
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-dim block mb-2.5">
                          Discussion Prompts
                        </span>
                        <ul className="space-y-2">
                          {card.prompts.map((p, i) => (
                            <li
                              key={i}
                              className="text-[12px] leading-[1.7] pl-4 border-l-2 border-red"
                            >
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ======== WORKSHOP FORMATS ======== */}
      <section className="bg-ink text-paper border-b-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
              <span className="text-white/20">{"//  "}</span>Workshop Formats
            </div>
            <p className="text-[15px] leading-[1.85] text-white/55 max-w-[620px]">
              Four tested formats for using these cards in professional
              development sessions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10">
            {workshopFormats.map((format, idx) => (
              <div
                key={format.name}
                className={`p-8 ${idx < workshopFormats.length - 1 ? "border-b md:border-r border-white/10" : ""} ${idx === workshopFormats.length - 2 ? "md:border-b-0" : ""}`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-[18px] italic text-paper">
                    {format.name}
                  </h3>
                  <span className="shrink-0 font-mono text-[10px] tracking-[0.1em] text-red">
                    {format.duration}
                  </span>
                </div>
                <p className="text-[13px] leading-[1.8] text-white/45 mb-4">
                  {format.description}
                </p>
                <ol className="space-y-1.5">
                  {format.steps.map((step, i) => (
                    <li
                      key={i}
                      className="text-[12px] leading-[1.6] text-white/55 pl-5 relative"
                    >
                      <span className="absolute left-0 font-mono text-[10px] text-red">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== FACILITATION TIPS ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="section-label">Facilitation Guide</div>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              Principles for running effective peer training sessions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilitationTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-cream border border-ink/10 p-6"
              >
                <span className="font-display text-[32px] leading-none text-ink/15 block mb-2">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-[13px] leading-[1.8]">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== RESEARCH CITATIONS ======== */}
      <section className="bg-cream border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-10">
            <div className="section-label">Research Foundations</div>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              The learning science research underpinning these training
              materials.
            </p>
          </div>
          <div className="border-2 border-ink bg-paper">
            {peerTrainingCitations.map((cite, idx) => (
              <div
                key={cite}
                className={`px-8 py-4 ${idx < peerTrainingCitations.length - 1 ? "border-b border-ink/10" : ""}`}
              >
                <p className="font-mono text-[11px] leading-[1.7] text-dim">
                  {cite}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
