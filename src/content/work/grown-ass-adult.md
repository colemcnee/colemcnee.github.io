---
title: Grown-Ass Adult
medium: code
summary: An iOS housekeeping app for the chores you always forget, with scheduling that forgives you.
year: "2026"
date: 2026-07-07
role: Sole developer
tags: ["swift", "swiftui", "ios"]
---

Add the chores that never make it onto a list — wipe the counters, change the sheets, vacuum
the couch — and get reminded when they're actually due.

## The scheduling is the whole idea

A chore's next due date is when you last actually did it, plus its interval. Skip vacuuming for
two weeks and it's simply overdue; missed cycles never stack up into a backlog of guilt. This
is the Planta model, and it is the only reason I still use the app. A todo list that punishes
you for a bad week gets deleted after a bad week.

Rooms are user data rather than a fixed list, because a home can have three bathrooms. Each
room has a name you choose and a type that decides its icon and which presets the chore library
offers.

SwiftUI and SwiftData, local notifications, no server and no accounts.
