'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter, PageName } from '@/lib/router';
import { cn } from '@/lib/utils';

export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-deep-green">
              {eyebrow}
            </p>
          )}
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-charcoal">{title}</h2>
          {description && (
            <p className="mt-5 text-base md:text-lg leading-8 text-charcoal/70">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function HeroShell({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryPage = 'appointment',
  secondaryLabel,
  secondaryPage,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryPage?: PageName;
  secondaryLabel?: string;
  secondaryPage?: PageName;
  aside?: ReactNode;
}) {
  const { navigate } = useRouter();

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(45,74,62,0.12),_transparent_35%),linear-gradient(180deg,#fafaf5_0%,#f5f3ee_100%)] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-deep-green">{eyebrow}</p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-charcoal sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/72 md:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 rounded-sm px-6 text-sm font-medium" onClick={() => navigate(primaryPage)}>
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryPage && (
              <Button variant="outline" className="h-12 rounded-sm px-6 text-sm font-medium" onClick={() => navigate(secondaryPage)}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-[#d9d5ca] bg-white/80 p-8 shadow-[0_30px_80px_-50px_rgba(26,26,26,0.45)] backdrop-blur"
        >
          {aside}
        </motion.div>
      </div>
    </section>
  );
}

export function InfoCard({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('rounded-3xl border border-[#e8e6df] bg-white p-7 shadow-sm', className)}>
      <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-charcoal/72 md:text-base">{children}</div>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-charcoal/75">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-deep-green" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function StatGrid({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-[#e8e6df] bg-[#f8f6f0] p-5">
          <div className="text-3xl font-semibold text-deep-green">{stat.value}</div>
          <p className="mt-2 text-sm leading-6 text-charcoal/65">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function CTAStrip({
  title,
  description,
  primaryLabel,
  primaryPage,
  secondaryLabel,
  secondaryPage,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryPage: PageName;
  secondaryLabel?: string;
  secondaryPage?: PageName;
}) {
  const { navigate } = useRouter();

  return (
    <div className="rounded-[2rem] bg-deep-green px-8 py-10 text-white md:flex md:items-center md:justify-between md:gap-10">
      <div className="max-w-2xl">
        <h3 className="font-serif text-3xl leading-tight">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-white/78 md:text-base">{description}</p>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
        <Button onClick={() => navigate(primaryPage)} className="h-11 rounded-sm bg-white text-deep-green hover:bg-white/92">
          {primaryLabel}
          <ArrowRight className="size-4" />
        </Button>
        {secondaryLabel && secondaryPage && (
          <Button
            variant="outline"
            onClick={() => navigate(secondaryPage)}
            className="h-11 rounded-sm border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            {secondaryLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
