---
title: Fracture
medium: code
alsoIn: ["theater", "film"]
summary: An immersive theatre machine where the audience types library call numbers and the catalogue plays itself.
year: "2026"
date: 2026-09-02
pinned: true
pinnedOrder: 1
role: Sole developer
tags: ["swift", "metal", "midi", "generative", "live-performance"]
---

It began as a VJ instrument: a Maschine under your hands, sixteen pads, each one firing a
sample and throwing a momentary video effect over a film. That mode is still there. But the
piece it was built for turned the pads into a keypad, and the machine into something stranger.

Participants type Dewey Decimal call numbers. The catalogue plays them.

## The catalogue was already a score

A call number isn't an arbitrary string, and nothing here is rigged — there's no list of
accepted numbers. The machine reads the structure that is already in the classification:

- The **first digit** is the main class, and it picks the instrument. Philosophy is a drone,
  religion a choir, science a bell, technology metal and impact, history the low end. Ten
  classes, ninety-two editions indexed off the sample library at launch, deliberately spread
  across the register because six layers all living in the middle is mud.
- The **digits after the point** pick the role — ground, bass, body, figure, air, grain — which
  decides cycle length, how many onsets, how it sits.
- The **Cutter number**, the letters derived from the author's surname, picks the tune.

That last split is the one I'd defend hardest. Dewey says what a book is *about*; the Cutter is
the only part of a shelf label separating two books standing side by side on the same subject.
So the subject picks the instrument and the author picks the melody. Before that, every phrase
walked by one hardcoded interval array shared by every layer ever built, which is why the
melodies had a family resemblance nobody asked for.

Neighbouring numbers still sound like each other — 512.482 and 512.483 are the same
glockenspiel, one in the air, one in the grain. A shelf away is still an instrument away.

## It arrives

The participants type freely and the paths are finite, so all of them converge: early results
track their arithmetic closely, later ones are pulled toward the target, and the search visibly
homes in on 001. There's a flag that simulates two hundred random sessions and reports how many
landed. It says 200/200.

## Nobody is exactly together

Every layer sits a few milliseconds off the grid according to its role — grain ten ahead,
figure on it, bass eleven behind, ground sixteen. Drummers push and bass players sit back, and
an ensemble never being perfectly together is exactly what stops six simultaneous onsets from
masking one another. Measured: notes landing on an occupied slot went from 44% to zero, and the
distinct velocities in a whole piece from 2 to 24.

The film follows the music now rather than the typing. It used to react to which pad was
pressed — a 5 always ghosted, whatever was playing — which is a VJ instrument with a keypad in
front of it. The effects belong to the classes and are driven by the layers' own envelopes, so
a seven-second pad holds a slow warp and a click snaps a glitch and is gone.

## Two things a room taught it

The original sixteen effects were a damage set — glitch, tear, invert, posterize. That suited a
breakdown; it did not suit a machine that turned out to be about light in a dark space. Bloom
and drift were added because they read as the picture sitting in a moving space rather than
being a flat backdrop.

And it records everything, unasked. Generative music's problem is that the good bit has already
happened by the time you notice it was good, so a session opens a take when its first layer
lands and closes it when the figure departs, named for the numbers that made it — the filename
is the score, and you can read an evening off an `ls`. That immediately needed a ceiling: at
24-bit stereo the machine writes about 950 MB an hour, and an unattended installation would
fill a disk in a day.

There's a preflight mode, because the failure mode of live performance is finding out in front
of people. It checks the shader, the sample library, the movie decode and MIDI, measures real
signal on the output bus, and reports the exact note numbers the hardware is sending — which is
how you discover the controller is in the wrong mode before it matters.
