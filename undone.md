# Undone Tasks / Future Enhancements

This file documents future implementation details that were postponed or earmarked for further integration.

## Google Apps Script Integration for Leads Capture (COMPLETED)

Successfully integrated! Newsletter submissions and book sample downloads are wired directly to the Google Sheet Web App API endpoint:
`https://script.google.com/macros/s/AKfycbybNggaJltC0EaS1ci11nJN_uWn6yMygFUCTvxgfsRh2EVy0wFqiPHOc7oG3vVs57rk4g/exec`

## Fix Amazon Book Links

The purchase buttons on the Bookstore and New Release pages are temporarily set to `#` or general domains for Amazon. Once the client provides the specific Amazon product IDs or ASINs for the following books, replace their anchor tags:
- *The Tomb Was A Womb*
- *I Never Knew I Was Me*
- *Unbothered*
- *The Business of Your Gift*
- *Brand & Sell You*
