here's the handoff. the new domain will be called distributionpilot.com  - it will be an app like higgsfeild but more emphasis on automation and data powered decision making *not JUST making the fideos, but making the right videos, at scale, automatically, with extra guidance*

|| SECTION 1: THE WHOLE APP VISION ||


STEP 1: Before you build: (catching myself here, I wont make the same mistake as I always do. Cant build before we validate)_  

Get the landing page up under distribution pilot. update it with the below info. Get it live on the new domain (www.distributionpilot.com) then email the 10 leads I have now.

Then test the competition and study what they do. Less is more, honestly. 

Run ads testing different landing pages and messages on Facebook for distributionpilot

Hypothetical selling points: 1) best real time social data (make the right content based on realtime data unlike competitors who have vague or old data, ours is updated every month) 2) create wining formats tailored to your brand 3) learns from your posts past performance for recursive improvement! 4) full auto or semi automatic creation/posting loop 5) social scheduler to make a months worth of content at a flash with a bunch of options on saleslyness frequency, format and more 6) can also iterate and name groups of paid ads for you, help you track and continue to improve campaigns 

The flow I think we’re selling: (Look at whats working, customize to your brand and dMake organic vid calendar, post it, improve organic based on results, run iterations of winners as paid ads, repeat for new format) General note: the key is going to be mapping this flow visually on some sort of home screen and letting the user know where they are in this cycle and letting them click on any of the lit up icons on the map to take them to that interface (very cool UX I think, easy to understand. And we want KPIs across the top of this) 

——

STEP 2:  WE NEED TO START WITH THE MVP NOT THE FULL APP ABOVE BUT THE MVP NEEDS TO BE ready TO be SCALED: 

The MVP useful BASIC INTERNAL TOOL FOR ME and team (slideshow builder to start, then we'll have the other 3 as placeholders and work up from there) we can start with that, then add the rest step by step but we will want the intrastructure of either a side bar or a top bar with all the features mentioned above, even if they’re placeholder it’ll be lifesaver to have the auth and structure in place. 

Basally just make feature two from below + landing + supabase + stripe integrations 

——


when you want to start building  full app (after some validation) here is the plan:

General notes:
- gemini api key has 20 calls max per day, so will need a new key made for each user 
- this problem I dont think exists for open ai if we’re using them for the image gen but its possible 
- connecting to instagram api is notoriously a pain in the balls (user usually needs to reconnect). Tikotk/YouTube is fine. 
- the app theme is dark with orange accent so we can have buttons and sales and other things POP using colours like neon blue, neon yellow and neon purple, while respecting the main orange theme. we’ll want to have looping MP4s in the app (the alternative is to make it a plain white theme that’s more “corporate” friendly but really this is next gen software I want it to stand out as such) 
- we need a custom “loading” animation for when videos are getting generated and/or a page is loading (either an abstract orange pixel thing OR a bunch of static images cycling through in succession with an orange hue overtop or smth) 
- future in a dreamworld, we have something like Manas or Claude desktop Claude coworker, or stage hand and browser base doing the review step of the performance of your organic campaign automatically and automatically entering that data back into the loop so that it's automatically self improving.


THE ARCHETECTURE AND BUSINESS PLAN:

Ideally these all link for automation purposes, but also we want them to function as stand alone tools (for a number of reasons). So the dream is we have an insanely simple interface that lets you batch everything, review then upload in basically a two clicks (or one if you want to skip review). But still allowing users to go into each step if they want to get more manual. 

[ Feature one: ] (realtime trend data specific metrics and examples and overview dash) VA’s / me / marketing team collects data (trending content on insta and tik tok and maybe forms too later (put reddit and quora and X.com coming soon) and fill out this spreadsheet that includes: 
- tiktok/insta url to video 
- hook + style
- CTA + CTA style (meaning, what was the cta (if any) and what was the style (tell viewer in caption to view link in bio, pinned comment “the app is called XYZ for those asking”, insta only highlighted story) 
- 
- text based break down of the video (this is a bit harder and def hard to automate, but it would let us feed the text into a prompt for an image or video AI model)
- category I guess?
- hashtags / caption
- report button (in case the video got taken down, or we have an automated system that checks all links and deletes that entry if the redirect
- some kind of overview of all the trending vids from the month and see like pie and bar charts of categories and hook style 

[ Feature two ] 
Basic (these can be made now)
- slideshow creator tool (8 slides, whats it about , visual style/aethetic examples to quick click, hook examples and you customize to your brand) 
- UGC reaction tool (pick one reaction from a set or upload your own (flashing card that says more dropping weekly with a countdown), one text hook and a huge ass list of examples and then “drop your demo here” with length recommendation, “auto trim” and save it.
- ad re-skin (use the new Kling model to change out an existing ad for different person
advanced (make placeholder for now, but put in the same area of the app)
- podcast maker (empty frames on the right, and on the left with space for dialogue and ability to generate reference images for all and hard cap on 25 chars to ensure it fits in veo’s gen max)
- free form (bit harder but bascically like the podcast maker but with more freedom to make other kinds of vids, very visual though and lets you see them all before mashing together, maybe we make it a video editor too as you usually need to trim. This would be HUGE time saver to have a little basic video trimmer than merger) 

- gen note: for all of feat two tools we want the option to pick “what’s your CTA” and you’re either having the product mentioned in the video itself OR its ON the user to pin a comment or add it in the caption and/or bio but we want a VISUILIZATION of the different options so they know what to do and 
- can have a recommended CTA for some in a coloured pill for pop

[ Feature three ]
- schedule creator. Make a calendar with X number of posts per day for format 1,2,3 (slideshow, UGC etc.) - pick how many sales vids to how many valuetainment, 

[ feature four ]
- batch create for the week or the month  (have a brand info intake here to tailor the vids {what do you sell to who and what’s you’re brand like}  AND/OR  leverage data from past batch performance to optimize this generation if you have it (big glowing orange blue button -)
- batch upload/ batch (unlike post bridge, we want this to be integrated in the generation flow which may mean we need an intermediary data storage where the vids are kept after gen but before upload briefly) -> maybe we allow regular batch download too. 


[ feature five ] 
- possibly connected to feature four and/or three, possibly stand alone, but someway to check in on all accounts and see whats posting when. Another compnay did a good job making a calendar that shows which account is posting on which day and let you click into a day to preview and edit the posts that were meant to be posted on that day 
- we need a place to measure the performance of the accounts which is probably going to be manual to start (just enter the top 5 best performers of the month and the top 5 biggest losers and add some info about the hook/vid format/content/cta that you used for those 10 and we feed this info into your next generation. This can be attached to the calendar or put elsewhere. 
- we can support your automated accounts and watching your human UGC creators too if you have a mix 

[ Feat six ]
- warming guide AND later, offering to load in a pre warmed account right off the bat (hard because then we need to figure out credential transfer)

[ feat seven ]
- dashboard with the “MAP” with dotted lines connecting features one through six and each feature has an icon on this MAP and you can click into any . But ideally just have an AUTO mode where it continues to post, review, improve, post, and you can add new accounts.

[ feat eight ] 
- static ad generator and iterator (easy reskin of the slideshow tool into single image or carousel ads en masse to test say 5 ad groups (fun, calming, educational, routine building, healthy) and the 5 ads per category . Basically the better version of tiktok or meta’s built in AI ad creator studio
- similar can be done for video but you’re basically doing the testing organically first then very simply running mild varations of the winners as ads , I guess we can help keep that organized here 




|| SECTION 2: THE APP STRCTURE, AUTH AND SCAFFOLD ||


[5 tools called]

---

# Handoff Doc: Next.js + Supabase Auth Boilerplate

## .env.example

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Google Gemini
GEMINI_API_KEY=your_gemini_api_key

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

---

## File Structure

```
├── app/
│   ├── api/
│   │   └── checkout/
│   │       └── route.ts          # Stripe checkout endpoint
│   ├── auth/
│   │   ├── auth-code-error/
│   │   │   └── page.tsx          # Error page for failed auth
│   │   └── callback/
│   │       └── route.ts          # ⭐ Magic link callback handler
│   ├── login/
│   │   ├── actions.ts            # ⭐ Server action: signInWithOtp()
│   │   └── page.tsx              # Login UI
│   ├── chat/                     # Protected route
│   ├── community/                # Protected route
│   ├── history/                  # Protected route
│   ├── onboarding/               # Protected route (default redirect after auth)
│   ├── pricing/                  # Protected route
│   ├── layout.tsx
│   ├── page.tsx                  # Landing (public)
│   └── globals.css
├── components/
│   └── ui/                       # shadcn components
├── lib/
│   └── utils.ts                  # cn() helper
├── utils/
│   └── supabase/
│       ├── client.ts             # ⭐ Browser client (createBrowserClient)
│       ├── server.ts             # ⭐ Server client (createServerClient)
│       └── middleware.ts         # ⭐ Session refresh + route protection
├── middleware.ts                 # Root middleware entry point
└── package.json
```

---

## Supabase Auth Setup (Magic Link)

### 1. Install Dependencies
```bash
npm install @supabase/supabase-js @supabase/ssr
```

### 2. Create Three Supabase Clients

**Browser Client** (`utils/supabase/client.ts`):
```typescript
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

**Server Client** (`utils/supabase/server.ts`):
```typescript
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Ignore if called from Server Component
          }
        },
      },
    }
  )
}
```

**Middleware Client** (`utils/supabase/middleware.ts`):
- Creates client with request/response cookie handling
- Calls `supabase.auth.getUser()` to refresh session
- Redirects unauthenticated users to `/login`
- Allows: `/`, `/login`, `/auth/*`

### 3. Login Server Action

```typescript
// app/login/actions.ts
'use server'
import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'

export async function login(formData: FormData) {
  const supabase = await createClient()
  const email = formData.get('email') as string
  const origin = (await headers()).get('origin')

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) return { error: 'Could not authenticate user' }
  return { success: true, message: 'Check email to continue sign in process' }
}
```

### 4. Auth Callback Route

```typescript
// app/auth/callback/route.ts
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/onboarding'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
```

---

## Supabase Dashboard Config (Critical!)

### In Supabase Dashboard → Authentication → URL Configuration:

1. **Site URL**: `http://localhost:3000` (dev) or your prod URL
2. **Redirect URLs**: Add these:
   - `http://localhost:3000/auth/callback`
   - `https://yourdomain.com/auth/callback`

### Email Templates (Optional):
- Supabase → Authentication → Email Templates
- Customize the magic link email if needed

---

## Gotchas & Lessons Learned

1. **`cookies()` must be awaited** in Next.js 14+ App Router — server.ts uses `await cookies()`

2. **Middleware runs on every request** — make sure to skip static assets and API routes to avoid unnecessary auth checks

3. **`exchangeCodeForSession(code)`** is the critical call in the callback route — this exchanges the URL code for actual session cookies

4. **`shouldCreateUser: true`** in signInWithOtp auto-creates user if they don't exist

5. **Origin header** — use `headers().get('origin')` for the redirect URL, not hardcoded URLs (breaks in prod)

6. **Default redirect** — callback route defaults to `/onboarding`, change `next` param default as needed

7. **Session refresh** — middleware calls `getUser()` which automatically refreshes expired sessions via cookies

---

## Swapping to Google OAuth

Replace `signInWithOtp()` with:
```typescript
const { error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: `${origin}/auth/callback`,
  },
})
```

Then enable Google provider in Supabase Dashboard → Authentication → Providers.

---

## Route Protection Summary

| Route | Protected | Notes |
|-------|-----------|-------|
| `/` | ❌ | Landing page |
| `/login` | ❌ | Login page |
| `/auth/*` | ❌ | Auth callbacks |
| Everything else | ✅ | Redirects to `/login` |

---