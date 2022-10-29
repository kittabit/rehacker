# CHANGELOG.md

## 1.4.0 (2022-10-29)

Changed:

  - Layout/`Head` Updates
  - Pagination Updates & Changes
  - Caching Tweaks
  - Single News/Item Meta Detail Updates (to match index pages)
  - Padding/Margin Comment Cleanup

## 1.3.0 (2022-10-29)

Features:

  - Mobile Updates & Cleanup
  - Sitemap.xml + Robots.txt
  - Initial SEO Work (Title, Description, Canonical)

Changed:

  - Move API Calls from `app/*` into `lib/*`

Fixed:

  - `DateOutput.js` class to className Patch
  - `SinglePost` Flex Updates (for meta information)
  - `userData.about` inside `page.js` within `user/[slug]` HTML Output

## 1.2.0 (2022-10-28)

Features:

  - Threaded Comments
  - Comment Styling & Updates
  - User Profile Basic Pages (w/ Submissions)
  - Scroll to Top (UI)

Changed:

  - Misc Layout Updates & Cleanup/Tweaks
  - Pagination Conditional (need proper hook, not this nonsense)
  - Pagination Default Limit Update (`30` to `25`)
  - Date Format Update (`mm/dd/YYYY hh:mm`)

Fixed:

  - `Undefined` Issues w/ Loaded JSON for Comments
  - Page Number `0` in `PaginateNews` Component

## 1.1.0 (2022-10-26) - Lunchtime Updates

Features:

  - Navigation Updates & Improvements (Logo, Active Class, etc) - `next/navigation`
  - Post/Item Listing Output Cleanup (better UI/UX for listings)
  - Post/Item Listing Pagination Support
  - Post/Item Components / Shared Code (`SinglePost.js` and `NewsList.js`)

## 1.0.0 (2022-10-25)

Features:

  - Basic URL Routing & API Calls
  - Basic Comment Outputs & Settings
  - Tailwind Integration
