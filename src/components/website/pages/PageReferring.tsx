'use client';

import { BulletList, CTAStrip, HeroShell, InfoCard, Section } from '@/components/website/shared';

export default function PageReferring() {
  return (
    <>
      <HeroShell
        eyebrow="For referring dentists"
        title="A referral page that communicates professionalism, respect, and surgical reliability."
        description="Referring clinicians need to understand that their patients will be treated carefully, communicated with clearly, and returned with continuity."
        primaryLabel="Contact for referral"
        primaryPage="contact"
        secondaryLabel="Request second opinion"
        secondaryPage="appointment"
        aside={<InfoCard title="Referral promise">The tone should always reassure colleagues that OsteoPerio is collaborative, transparent, and respectful of existing patient relationships.</InfoCard>}
      />

      <Section
        eyebrow="What referring dentists need to see"
        title="The referral message should be calm and concrete."
        description="The best referral page is not self-congratulatory. It is dependable."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Complex surgery focus', 'Make clear which kinds of referred cases you are equipped to handle best.'],
            ['Collaborative planning', 'Show willingness to discuss records, prosthetic considerations, and sequencing.'],
            ['Patient communication', 'Explain that patients are informed clearly and cared for in a premium setting.'],
            ['Return pathway', 'Confirm that the patient returns to the referring dentist after the surgical phase when appropriate.'],
          ].map(([title, text]) => (
            <InfoCard key={title} title={title}>{text}</InfoCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Ideal referral types"
        title="Examples of cases that suit this kind of surgical clinic positioning."
        description="Listing them helps both SEO and professional relevance."
        className="bg-[#f7f5ef]"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="Typical referrals">
            <BulletList
              items={[
                'Advanced gum recession and soft-tissue deficiencies',
                'Bone augmentation before implant placement',
                'Peri-implant disease and compromised implant sites',
                'Mucogingival surgery in aesthetic areas',
                'Second opinions for high-risk or previously treated cases',
              ]}
            />
          </InfoCard>
          <InfoCard title="What strengthens confidence">
            <BulletList
              items={[
                'Clear communication before and after surgery',
                'Shared treatment objectives when restorative care is involved',
                'Honest prognosis discussions for difficult situations',
                'A respectful tone that protects the referring relationship',
              ]}
            />
          </InfoCard>
        </div>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTAStrip
            title="A good referral page should make another dentist feel safe sending their patient to you."
            description="That trust is built with clarity, modest confidence, and a visible specialist focus."
            primaryLabel="Speak with OsteoPerio"
            primaryPage="contact"
            secondaryLabel="Patient pathway"
            secondaryPage="projects"
          />
        </div>
      </section>
    </>
  );
}
