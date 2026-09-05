---
title: Reed
medium: code
summary: A synthesizer built headless and verified by measurement, whose face turned out to be the waveform itself.
year: "2026"
date: 2026-09-02
pinned: true
pinnedOrder: 2
role: Sole developer
tags: ["swift", "dsp", "audio", "instruments"]
---

A synth written the wrong way round on purpose: the DSP first, headless, with no interface
and no plugin format, checked by a measurement bench rather than by ear. It's a library with a
bench beside it, so Fracture and Session can both play through it and an Audio Unit can wrap
exactly this code later.

Building it this way means the bench has to say things I can't hear. Tuning holds to 0.38
cents across six octaves. The filter gives 9.1 dB per octave with 20.8 dB of resonant lift and
stays stable at Q 18. Envelopes land within 60 ms of what was asked, and they end — linear in,
exponential out, with a floor, because waiting for a true zero from an exponential means
waiting forever, and voices that never free themselves are how a synth runs out of polyphony
after a minute.

Three of the first thirteen checks failed and all three were the measurement rather than the
synth. A Hann window's sidelobes are only 31 dB down, so the skirt of a loud harmonic was
being counted as aliasing. The analysis window included the note's release, and an amplitude
change puts sidebands either side of every harmonic. And the click test measured raw sample
steps on a sawtooth, which finds the sawtooth.

## The shape is the control

The interface is a figure, and the rule is that nothing drawn is decoration: every mark reads
something audible, and the map runs both ways. One orbit per oscillator — lobes are how many
harmonics it actually has, measured rather than assumed, radius is its share of the mix, tilt
its octave, hue its waveform. Two orbits precess against each other at exactly the beat
frequency the detune produces, so what you hear as beating is what you watch going round. The
filter is the horizon: a ring at the cutoff, and the figure fades as it passes through, because
that is what a filter is doing to the sound.

A figure that moves is convincing whether or not anything underneath it changed, which is
exactly the failure this design invites. So the readout was built first rather than after
something went wrong, and the timbre it draws is measured off a rendered note rather than
inferred from the parameters — it reads a sine as 1 partial, a triangle as 5, a square as 32
and a saw as 64, the square being odd harmonics only and so exactly half the saw, which is how
you know the measurement is real.

## Curves as oscillators

Then the figure stopped being a reading of the sound and became the same object. Trace a
closed plane curve at a constant angular rate and read its y against the angle: that is a
periodic function, which is a sound. Draw the curve and you have drawn the waveform.

The family is Gielis's superformula, four numbers for an enormous variety of plane curves, and
the parameters do audible things — symmetry slides a formant, pinch is brightness before the
filter is involved at all, lean breaks the symmetry between axes and brings in the even
harmonics that symmetrical curves are hollow without.

Band-limiting has to go the other way round from the usual trick. A curve's corners can be
anywhere or nowhere and they move as the parameters do, so there is no discontinuity to patch.
Instead the curve is transformed into its harmonic series once and a table built per octave
holding only the harmonics still under Nyquist up there, so playing high reads a table that
never contained anything to fold. Worst inharmonic partial lands 107.7 dB down, against
PolyBLEP's 38.

## What the drawing refuses to draw

The figure breathes with the real spectrum — twenty-two bands taken off the output, so closing
the filter deflates the outer figure because those harmonics genuinely went away. The bands
stop at 80 Hz. A 4096-sample window resolves about 10.8 Hz, and below roughly 80 Hz a
log-spaced band is narrower than two bins: it would have nothing of its own to look at and
would show whatever leaked in from its neighbours. Drawing it anyway would be inventing detail
the transform cannot supply.

The gestures were built for a finger from the start rather than adapted to one — no hover, no
modifiers, no handle smaller than a fingertip, with four pages deciding which parameters the
whole surface reaches. Testing them immediately caught two axes I had inverted by thinking in
screen coordinates when the view already flips y, so up made notes shorter. "Up is more" is
checked on every page now.
