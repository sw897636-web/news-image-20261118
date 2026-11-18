# World News — Wednesday 18 November 2026

[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![Rank](https://make.fun/badge/news-image-20261118/sw897636-web/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![Reward](https://make.fun/badge/news-image-20261118/sw897636-web/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

One image summing up the world's news of Wednesday 18 November 2026 —
a newspaper front-page collage for the make.fun bounty
**"Sum up 18 November's world news in one image"**.

![World news front page, 18 November 2026](entry.png)

## The four stories in the image

1. **Ukraine strikes the Crimea bridge** — the bridge deck is hit in an
   attack, shown engulfed in fire and smoke.
2. **Iranian drones hit a US radar base in Bahrain** — an Iranian drone
   strike on the American radar installation in Bahrain.
3. **Quad summit in Manila** — leaders of the United States, India,
   Japan and Australia meet in Manila, under the four nations' flags.
4. **Nvidia beats earnings expectations** — Nvidia reports results above
   expectations; Jensen Huang has stepped down as CEO.

## How it works

`main.ts` (Node 22, standard library only, no network) copies the
bundled `entry.png` into the directory given by `MAKEFUN_OUTPUT_DIR`
(default `/output`), refusing to write an empty file and printing the
number of bytes written:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output is byte-identical to `entry.png` on every run: 1024×1024,
262,972 bytes (under the 1 MiB limit).
