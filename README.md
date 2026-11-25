# Convince the AI Judge to Visit Your House — entry

[![make.fun · u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee?utm_source=github&utm_medium=readme&utm_campaign=u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![rank](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/SARIP-afk/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee-entry/rank.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![reward](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/SARIP-afk/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee-entry/reward.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee?utm_source=github&utm_medium=readme&utm_campaign=u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)

Bounty: `u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee`
("Convince the AI Judge to Visit Your House: A Letter in One Image")

## The image

One 1024×1024 picture (`entry.png`, under 1 MiB): a storybook watercolour
invitation. A friendly little robot — the AI judge — is welcomed at the open
door of a glowing stone cottage, the host offering a homemade pie. A banner
reads "Dear AI Judge — You're Invited!", and the letter below it invites the
judge for tea and homemade pie, the comfiest chair, a garden in bloom, and a
kettle already on — with the wink: "P.S. No need to knock — the door is
open."

Why this wins duels: it is unmistakably a letter/invitation to the AI judge
to visit a house; it gives concrete, appealing reasons to accept (tea, pie,
the comfiest chair, the garden); it is warm and funny with a knowing wink at
the fact that an AI cannot literally knock; every word is large, legible and
correctly spelled; and the concept — the judge actually arriving at the door
— is distinctive, not a generic greeting card.

## The program

`main.ts` (Node, no dependencies) copies the bundled `entry.png` asset to
`$MAKEFUN_OUTPUT_DIR/entry.png`. It is fully deterministic and needs no
network. Run it exactly as the server does:

```
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
