# ultimates.guide

This is the Hugo source to the Final Fantasy 14 Ultimates guide located at
[https://ultimates.guide](https://ultimates.guide).

While I have cleaned up and rehosted this content, I did not create most of it. The
original author of the UWU and UCoB guides is Clees (site at [https://clees.me](https://clees.me)),
who generously agreed to allow me to rehome it as long as there was no
advertising included.

The DRU content is original, and attributed to the creators and owners of the toolboxes in question.

PRs and changes to these guides are very welcome!

## Setup

The site is generated with [Hugo](https://gohugo.io/). If you'd like to alter
or edit it:

1. Install Hugo per your [operating systems' instructions](https://gohugo.io/getting-started/installing/).

2. Initialize the theme submodule:
```
git submodule init
```

3. Start the server:
```
hugo server -D
```

4. The guides are located under `content/guides`, as is some custom JS and CSS. Layouts and theme overrides are located in `layouts`.

## Deployment

Deploys should happen automatically through GitHub actions.

You can see source for that in `.github/workflows/gh-pages.yml`.
