'use client';

import { BulletList, CTAStrip, HeroShell, InfoCard, Section } from '@/components/website/shared';

export default function PageProjects() {
  return (
    <>
      <HeroShell
        eyebrow="International patients"
        title="A dedicated pathway for patients travelling to Barcelona for specialist surgery."
        description="Instead of a vague projects page, this lighter version uses the space for a high-value international patient journey: remote screening, travel clarity, surgical planning, and follow-up coordination."
        primaryLabel="Send your case"
        primaryPage="appointment"
        secondaryLabel="Contact the clinic"
        secondaryPage="contact"
        aside={
          <InfoCard title="Why this matters">
            International patients need logistics, predictability, and confidence. They are not only buying treatment — they are buying certainty during a complex process.
          </InfoCard>
        }
      />

      <Section
        eyebrow="Suggested international workflow"
        title="What overseas patients should understand before they book."
        description="This page should reduce anxiety and make complex travel-based treatment feel manageable."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="Before travelling">
            <BulletList
              items={[
                'Initial online enquiry with symptoms, goals, and travel timeline.',
                'Submission of records, scans, photographs, and previous treatment history.',
                'A first specialist opinion about complexity, suitability, and likely treatment phases.',
                'Guidance about whether one trip or multiple visits are more realistic.',
              ]}
            />
          </InfoCard>
          <InfoCard title="During and after treatment">
            <BulletList
              items={[
                'Clear explanation of surgery day, healing expectations, and temporary limitations.',
                'Written follow-up guidance for patients and local dentists when needed.',
                'Coordination with the home dentist for maintenance or restorative continuation.',
                'A calm communication channel for recovery questions after returning home.',
              ]}
            />
          </InfoCard>
        </div>
      </Section>

      <Section
        eyebrow="What to include later"
        title="This page becomes especially strong when you add final clinic specifics."
        description="The structure is already ready for the details that international patients care about most."
        className="bg-[#f7f5ef]"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Languages spoken', 'State clearly which languages the team can support throughout treatment and follow-up.'],
            ['Travel timing', 'Explain how many days may be needed depending on consultation, surgery, and review.'],
            ['Records required', 'List what should be sent before a remote assessment.'],
            ['Referring dentist coordination', 'Show that the patient is supported even when care is shared across countries.'],
          ].map(([title, text]) => (
            <InfoCard key={title} title={title}>{text}</InfoCard>
          ))}
        </div>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTAStrip
            title="International patients should feel guided before they even arrive."
            description="This page makes OsteoPerio feel more premium, more organized, and more trustworthy for travel-based care."
            primaryLabel="Start your assessment"
            primaryPage="appointment"
            secondaryLabel="Contact the team"
            secondaryPage="contact"
          />
        </div>
      </section>
    </>
  );
}
