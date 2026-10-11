# Playtron team-review prototype

[Open the public team-review beta](https://playtron-team-review.nutmeg-snow-7003.chatgpt.site/#pack=omma).

A free static review candidate for playing Playtronica sound packs with Playtron, a keyboard or touch.

Pipeline: qualified immutable runtime → three hash-checked distribution files → pinned public release → native Sites hosting wrapper → live-origin checks → human sound/style/device review.

## File map

- `site/index.html` — exact qualified browser instrument; no source rebuild.
- `site/playtron-sw.js` — verified offline shell for this candidate.
- `site/release.json` — source identity, hashes and review limits.
- `SHA256SUMS` — exact expected entry, worker and original sound-library hashes.
- `README.md` — publishing and review handoff.
- `.gitignore` — local caches, build output and sound-library copies stay outside Git.

## Data

The original encoded sound library is an immutable prerelease attachment. The hosting wrapper serves the exact qualified entry and service worker and forwards only a verified single byte range to that pinned public attachment. Runtime receives selected-pack bytes from the same origin. No credentials, personal review notes, local reports, microphone capture or source archives belong here. Browser-local preferences and explicitly saved packs stay on the visitor's device.

## Run and test

There is no GitHub Actions workflow; the connected publishing credential does not authorize it. Native Sites publishes a separately tracked minimal Worker wrapper with exact embedded HTML/service-worker bytes and one pinned library URL. Verify upstream and live-origin206 ranges, streamed bytes and hashes before announcing a passing deployment. Existing source and exact-artifact checks passed before this copy. Check HTTPS, 206 ranges, pack links, native audio and offline reopening against the live URL before announcing qualification.

## Safety rails

This is a team-review beta, not an approved physical-device, listening, beginner or universal browser result. No automatic firmware writes, purchases, analytics or external messages. Original audio bytes stay unchanged. Publication is explicitly authorized by the owner on 2026-10-11. Never include private evidence or alter runtime bytes in this distribution repository.

## Git and rollback

Only intentional, qualified distributions are committed. The development repository remains private. No scheduled commits or deployments. Retain candidate releases and previous artifacts; a new runtime requires matching fresh gates. First deployment has no previous public version. Record failures and withdraw a broken first entry rather than claim a passing release.

Checked 2026-10-12 Europe/Lisbon: the exact deployed player passes isolated native Chrome 154 and WebKit 27.2 checks, including all 48 pack auditions per engine, touch-view layouts and saved-pack offline PCM/reopening. This is desktop-engine software evidence; physical phone, hardware, MIDIWeb Browser and hearing/style/novice acceptance remain pending. The initial live start timeout stays recorded internally; later cold/full checks pass without a player/audio change. Delivery preserves exact shell bytes with no-transform, while sound requests remain explicit ranges.
