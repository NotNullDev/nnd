---
layout: ../../layouts/ProjectLayout.astro
author: NotNullDev
title: >
    Challenge: Google login with OAuth - to understand the process behind it
date: 19.11.2022
slug: oauth-for-developer
tags:
  - auth
description: |
    We, as the developers, often skip part how it works and focus on the part how to make it work.

    But things often aren't as complicated as we think.

---

# Setup

1. Navigate to [Google Cloud Platform](https://console.cloud.google.com/)
2. Create new project
3. Seach for `API & Services`
4. Click `OAuth consent screen`
5. Fill the form
6. Click `Navigate to credentials`
7. Create new credential with type `OAuth client ID`
8. As type select `Web application`
9. Fill the form
9. Authorize your domain in `Authorized JavaScript origins` as `http://localhost`
10. Add the redirect url `http://localhost:3000/auth/google/callback` and `http://localhost:3000`
11. Download as JSON created credential for later use


## The Google's OAuth flow

![Google's OAuth flow](/google-oath-flow.png)


Let's invesigate google login process url:

    https://accounts.google.com/o/oauth2/auth
    ?client_id=999452766845-qk1mft13gf6iku0ekcu3eoji0pnpimik.apps.googleusercontent.com
    &code_challenge=HxdmH9_t90zFMacvChb7xkEmDx-gaaiURiKrqcMGs7o
    &code_challenge_method=S256
    &response_type=code
    &scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email
    &state=lq2HzWMa9A8yZzHM7iGa1pAKmDkGop
    &redirect_uri=http://localhost:3000

And the response:

    http://localhost:3000/
    ?state=lq2HzWMa9A8yZzHM7iGa1pAKmDkGop
    &code=4%2F0AfgeXvuXOiE4X1BIG6SyFKmB9Fl-NqCr5eNW6QGDsbUbgupF1PnbvchExpRMYrXsZZYnMg
    &scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid
    &authuser=0
    &prompt=consent