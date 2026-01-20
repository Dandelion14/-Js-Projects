 ✦ ✦ Gold & Silver Live Price (MCX-Style) ✦ ✦

A simple web project that displays live Gold and Silver prices in an Indian MCX-style format, converted from international spot prices.

This project was built for daily reference, especially for users who regularly check gold and silver prices.

Features

Live Gold price (₹ / 10g)

Live Silver price (₹ / 1kg)

Prices auto-refresh every 30 seconds

Clean, minimal UI

Mobile and desktop friendly

MCX-style indicative pricing

Data Source

GoldAPI – International spot prices

Prices are fetched in INR and converted into MCX-style units

How MCX-Style Price Is Calculated

This project does not use real MCX futures data.
Instead, it converts spot prices using standard unit conversion and an approximate Indian market premium.

Conversion Logic

Gold

MCX Gold (₹/10g) = (Spot Price ₹/oz ÷ 31.1035) × 10 × 1.10


Silver

MCX Silver (₹/kg) = Spot Price ₹/oz × 32.1507 × 1.10


The 1.10 factor represents an approximate premium for duties, taxes, and futures pricing.

Important Note

Prices shown are indicative, not official MCX prices

Exact MCX prices require direct exchange data

This project is meant for reference and learning purposes

Tech Stack

HTML

CSS

Vanilla JavaScript

Fetch API

How to Run

Clone or download the repository

Open the HTML file in a browser

Make sure you add your GoldAPI key

Prices will load automatically

Author

 ✦ ✦ Deepali Panchal ✦ ✦