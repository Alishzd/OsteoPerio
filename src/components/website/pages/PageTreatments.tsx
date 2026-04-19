'use client';

import { BulletList, CTAStrip, HeroShell, InfoCard, Section } from '@/components/website/shared';

const treatments = [
  {
    title: 'Gum recession treatment',
    items: ['Root coverage surgery', 'Soft-tissue grafting', 'Management of sensitivity and aesthetics'],
  },
  {
    title: 'Soft-tissue enhancement around teeth and implants',
    items: ['Connective tissue grafting', 'Keratinized tissue augmentation', 'Improved stability for long-term maintenance'],
  },
  {
    title: 'Bone regeneration',
    items: ['Ridge preservation after extraction', 'Horizontal and vertical augmentation', 'Preparation of complex implant sites'],
  },
  {
    title: 'Peri-implant disease',
    items: ['Assessment of inflammation and bone loss', 'Specialist decontamination and surgical management', 'Long-term maintenance planning'],
  },
  {
    title: 'Complex implant surgery',
    items: ['Compromised sites', 'Aesthetic-zone planning', 'Decision-making for challenging restorative situations'],
  },
  {
    title: 'Second opinions and referred cases',
    items: ['Review of records and scans', 'Honest discussion of prognosis', 'Coordination with the referring dentist'],
  },
];

export default function PageTreatments() {
  return (
    <>
      <HeroShell
        eyebrow="Treatments"
        title="Organize treatments around patient concerns and specialist outcomes."
        description="The site should explain what you treat, who benefits, and why an expert periodontal and implant surgery team is the right fit for demanding cases."
        primaryLabel="Request appointment"
        primaryPage="appointment"
        secondaryLabel="View cases"
        secondaryPage="cases"
        aside={
          <InfoCard title="Simple rule for this page">
            Patients think in symptoms and outcomes first. Procedure names should support the explanation, not carry the whole message.
          </InfoCard>
        }
      />

      <Section
        eyebrow="Treatment categories"
        title="A clearer treatment map helps both SEO and patient understanding."
        description="Each of these can later become a dedicated landing page if you want stronger organic visibility."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment) => (
            <InfoCard key={treatment.title} title={treatment.title} className="h-full">
              <BulletList items={treatment.items} />
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How to explain treatment well"
        title="Every important treatment page should answer the same practical questions."
        description="This is especially important for gum recession, regeneration, peri-implantitis, and second-opinion pages."
        className="bg-[#f7f5ef]"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['What is the problem?', 'Describe the condition in human language, including symptoms and common concerns.'],
            ['Who is this for?', 'Clarify which patients are good candidates and when a specialist is useful.'],
            ['What does treatment involve?', 'Explain consultation, planning, surgery, recovery, and follow-up at a high level.'],
            ['Why OsteoPerio?', 'Summarize experience, planning philosophy, and how difficult cases are approached.'],
          ].map(([title, text]) => (
            <InfoCard key={title} title={title}>{text}</InfoCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Suggested future landing pages"
        title="These are some of the best high-intent pages to build next."
        description="Even in this lighter version, the structure now supports a much stronger information hierarchy."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard title="Patient-facing pages">
            <BulletList
              items={[
                'Gum recession treatment in Barcelona',
                'Bone regeneration and ridge preservation in Barcelona',
                'Peri-implantitis and failing implant management',
                'Second opinion in periodontal and implant surgery',
              ]}
            />
          </InfoCard>
          <InfoCard title="Professional and academic pages">
            <BulletList
              items={[
                'For referring dentists',
                'International patient pathway',
                'Observerships and education',
                'Complex case collaboration',
              ]}
            />
          </InfoCard>
        </div>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTAStrip
            title="Strong treatment pages reduce confusion and improve conversions."
            description="They also give you better building blocks for SEO, ads, referrals, and patient education."
            primaryLabel="Book a consultation"
            primaryPage="appointment"
            secondaryLabel="Ask a question"
            secondaryPage="contact"
          />
        </div>
      </section>
    </>
  );
}
