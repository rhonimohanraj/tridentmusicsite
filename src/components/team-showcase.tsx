"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { TeamMember } from '@/types';

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = [] }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <>
      {/* ── Mobile: card grid (photo + name + role) ── */}
      <div className="md:hidden grid grid-cols-2 gap-4 px-4 py-8 w-full select-none font-sans">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      {/* ── Desktop: original side-by-side layout ── */}
      <div className="hidden md:flex flex-row items-center justify-center gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-6 font-sans">
        {/* Left: photo grid */}
        <div className="flex gap-3 flex-shrink-0">
          <div className="flex flex-col gap-3">
            {col1.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[155px] h-[165px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-[68px]">
            {col2.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[172px] h-[182px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-[32px]">
            {col3.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[162px] h-[172px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>

        {/* Right: member name list */}
        <div className="flex flex-col gap-5 pt-2 flex-1 w-full">
          {members.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   Mobile member card (photo + text below)
───────────────────────────────────────── */

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-2xl w-full aspect-[3/4]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          style={{
            filter: 'grayscale(1) brightness(0.77)',
            objectPosition: member.objectPosition || '50% 25%',
            transform: `scale(${member.imageScale || 1.20})`,
          }}
        />
      </div>
      <div>
        <p className="text-sm font-semibold tracking-tight text-foreground leading-snug">
          {member.name}
        </p>
        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
          {member.role}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-3xl cursor-pointer flex-shrink-0 transition-opacity duration-400',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover rounded-3xl transition-[filter,transform] duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
          objectPosition: member.objectPosition || '50% 25%',
          transform: `scale(${member.imageScale || 1.20})`,
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social */}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-foreground w-5' : 'bg-foreground/25',
          )}
        />
        <span
          className={cn(
            'text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          {member.name}
        </span>

      </div>

      {/* Role */}
      <p className="mt-1.5 pl-[27px] text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {member.role}
      </p>
    </div>
  );
}
