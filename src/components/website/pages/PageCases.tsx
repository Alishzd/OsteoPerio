'use client';

import { CTAStrip, HeroShell, InfoCard, Section } from '@/components/website/shared';

const caseIdeas = [
  {
    title: 'Case 01 · Gum recession coverage',
    problem: 'Exposed roots, sensitivity, and visible recession in the aesthetic zone.',
    treatment: 'Microsurgical root coverage with soft-tissue grafting and careful post-operative follow-up.',
    result: 'Improved comfort, thicker tissue, and a more stable soft-tissue profile.',
  },
  {
    title: 'Case 02 · Ridge defect before implant placement',
    problem: 'Insufficient bone volume after tooth loss in a demanding restorative area.',
    treatment: 'Regenerative surgery planned to create a safer and more predictable implant site.',
    result: 'A stronger foundation for implant treatment and long-term restorative planning.',
  },
  {
    title: 'Case 03 · Peri-implant soft-tissue deficiency',
    problem: 'Thin tissue and aesthetic compromise around an implant restoration.',
    treatment: 'Soft-tissue augmentation to improve volume, stability, and long-term maintenance.',
    result: 'A more resilient peri-implant tissue architecture with better visual harmony.',
  },
];

export default function PageCases() {
  return (
    <>
      <HeroShell
        eyebrow="Cases"
        title="Use case pages to prove expertise, not just to decorate the website."
        description="In this no-media version, the visual before-after assets are removed, but the case structure remains. Each case should eventually live on your own site with diagnosis, planning, treatment, healing, and outcome."
        primaryLabel="Contact OsteoPerio"
        primaryPage="contact"
        secondaryLabel="See treatments"
        secondaryPage="treatments"
        aside={<InfoCard title="Important strategy">Keep case authority on your own website. Social media should support discovery, not be the main destination for your best clinical proof.</InfoCard>}
      />

      <Section
        eyebrow="Case storytelling"
        title="A strong clinical case page follows a predictable structure."
        description="That structure helps patients understand their own problem and helps dentists trust your decision-making."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {caseIdeas.map((item) => (
            <InfoCard key={item.title} title={item.title} className="h-full">
              <p><strong>Problem:</strong> {item.problem}</p>
              <p className="mt-4"><strong>Treatment:</strong> {item.treatment}</p>
              <p className="mt-4"><strong>Result:</strong> {item.result}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What to add later"
        title="When you reintroduce media, use it with purpose."
        description="Do not add large files back just to fill space. Add them only when they improve understanding and trust."
        className="bg-[#f7f5ef]"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Before / after sequence', 'Only when the result is clearly understandable and ethically appropriate to show.'],
            ['Short healing timeline', 'Patients respond well to practical expectations and visible progress points.'],
            ['Diagnosis and rationale', 'This strengthens trust with both educated patients and referring clinicians.'],
            ['Call to action', 'Invite similar patients to request a consultation or a second opinion.'],
          ].map(([title, text]) => (
            <InfoCard key={title} title={title}>{text}</InfoCard>
          ))}
        </div>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTAStrip
            title="Your cases should help a patient say: this is exactly my problem."
            description="That is when case content becomes a conversion tool instead of only a portfolio element."
            primaryLabel="Request consultation"
            primaryPage="appointment"
            secondaryLabel="Talk to the team"
            secondaryPage="contact"
          />
        </div>
      </section>
    </>
  );
}
