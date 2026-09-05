---
title: Session
medium: code
summary: A song machine — a conductor the parts have to ask, rather than layers left to drift apart.
year: "2026"
date: 2026-09-02
pinned: true
pinnedOrder: 4
role: Sole developer
tags: ["swift", "generative", "audio", "midi"]
---

Fracture's sibling, and the one architectural difference is the whole point. There, every
layer derives its material from its own number and the cycle lengths never line up, so the
parts drift apart forever — which is why it sounds like weather. Here there is a conductor: a
key, a progression, a bar count, a section. Every part asks it what is happening rather than
working it out alone. The bass plays this root because it asked which chord it was; the lead
lands on a chord tone at the downbeat because it asked. That dependence is what makes it a
song rather than a texture.

## What makes it listenable is mostly not the chords

Register separation — the bass tops out at D3, chords start at F3, the lead sits above them,
and the two ranges must not so much as touch or the bottom of the mix goes vague. Voice
leading, by searching every octave placement of every chord tone inside the band and taking
the voicing that moves least, which measures at five semitones across a whole chord through
I–V–vi–IV. One grid, everything on sixteenths. And form: parts arriving and leaving at section
boundaries, with a bridge that drops the kit so the last chorus lands.

Casting the instruments is random and stays safe because the sample library is already filed
by role, then filtered again by the range each instrument was actually recorded across, so a
celesta is never handed a bassline. There are only seven dedicated bass folders, so anything
pitched that reaches below D2 can take the part instead — a Rhodes playing bass is a record,
not a mistake — which took casting from 5 distinct basses in 40 to 21.

Rendering is offline, about 200× real time. Musical rules get settled by ear over dozens of
passes, and a loop costing two minutes of listening per change is a loop nobody runs. Seeds
are words, so a song can be written down and sent to somebody.

## Measurement, not taste

There's an audition mode that writes two hundred songs, measures them, and renders a
shortlist. Nothing here has heard anything — but out of two hundred songs a good number carry
a flat defect, and those can be found without ears. Ordering the survivors is guesswork;
removing the duds is not.

Six measures reported broken out rather than as one number, so when a shortlist is wrong it's
possible to see which measure lied. The worst-scoring song gets rendered alongside the best,
because if the difference isn't audible then the measures aren't measuring anything, and a
shortlist that merely looks authoritative is worse than none.

It is deliberately not fed back into generation. Selection from a fixed generator is safe;
optimising a generator against a metric produces things that score well and are dead.

## The bug that sounded like bad drumming

Someone listening said the drums on one song "missed." They were right, and I had already
written the comment against it: swing that only some parts follow is not a groove, it's a
mistake. Half the parts went through the swing function and half were written as `top + 1.5`
and landed dead on the grid. That song swings at 26%, the strongest setting there is, so its
hats sat eighteen milliseconds behind a bass playing the same offbeat, for the whole song —
precisely what a kit that keeps missing sounds like, and invisible in every count and summary
the tool prints.

The fix needed a positive modulo, because an anticipated chord sits at step −2 and Swift's `%`
calls that −2 rather than 2. The permanent check compares every note in a swung song against
the grid it claims to be on: 2208 notes across five songs, nothing off it. The lead keeps its
few milliseconds of deliberate looseness; the rest of the band gets none.
