/**
 * TYSON Media Group - Single Page Application Engine & Preferences Controller
 * Handles:
 * 1. Appearance / Themes (Noir Midnight, Nintendo Wii, Frutiger Aero, Nature Botanical)
 * 2. Settings Modal (Gear Icon, Replay Intro Sequence, Persistence)
 * 3. SPA Router (Instant, seamless view transitions without page reloads)
 * 4. YouTube Theater Modal Player (with Direct Autoplay & Clean Escape Controls)
 * 5. Complete 79-Video Database with Real-Time Search & Category Filters
 * 6. Contact Form Submissions & Responsive Navigation
 */

const TYSON_VIDEOS = [
    {
        "id": "qBp9h8yo5as",
        "title": "1994 Ford F-150 | POV Night Drive | BeamNG.Drive #beamngdrive #beamngdrivemods #fordtrucks",
        "duration": "HD",
        "views": "55 views",
        "date": "August 19, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "3xfesrOah6Q",
        "title": "Introducing... RPM World",
        "duration": "HD",
        "views": "TYSON and RPM World by TYSON",
        "date": "August 10, 2026",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "gHCmZ-Qr92g",
        "title": "2022 Ford F-350 Limited | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods #fordtrucks [GAME]",
        "duration": "HD",
        "views": "120 views",
        "date": "July 03, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "v1S0mT4TdhQ",
        "title": "More Forza Motorsport content coming to TYSON",
        "duration": "HD",
        "views": "46 views",
        "date": "June 03, 2026",
        "type": "video",
        "category": "Sim & Racing"
    },
    {
        "id": "VEmux2kX6NQ",
        "title": "TYSON Racing",
        "duration": "HD",
        "views": "59 views",
        "date": "May 31, 2026",
        "type": "video",
        "category": "Sim & Racing"
    },
    {
        "id": "tpca3zN2cOo",
        "title": "2019 Ford F-150 Limited | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods #fordtrucks",
        "duration": "HD",
        "views": "498 views",
        "date": "May 23, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "bwrrfE51zb8",
        "title": "2026 Subaru Outback Touring XT POV Start Up + Walkaround | Subaru Really refined this Wagon-ish SUV!",
        "duration": "HD",
        "views": "142 views",
        "date": "May 19, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "E-PbyK67wkE",
        "title": "2026 Ford F-150 XLT | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods #fordtrucks",
        "duration": "HD",
        "views": "921 views",
        "date": "May 17, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "NrupA4P5kiw",
        "title": "A Subtle Evolution.",
        "duration": "HD",
        "views": "21 views",
        "date": "April 23, 2026",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "DO1tXbvDY8E",
        "title": "4.23.2026",
        "duration": "HD",
        "views": "103 views",
        "date": "April 21, 2026",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "XJVepifSEPw",
        "title": "[VR] 2022 G20 BMW M340i | Virtual Reality POV Drive | #beamngdrive #automotive",
        "duration": "HD",
        "views": "96 views",
        "date": "April 16, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "hKkaMk9B14o",
        "title": "2013 Honda Accord | POV Drive | #beamngdrive #automotive",
        "duration": "HD",
        "views": "265 views",
        "date": "April 08, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "cOKhe6ceF9w",
        "title": "2012 Porsche 911 GT3RS | POV Drive | #beamngdrive #automotive",
        "duration": "HD",
        "views": "44 views",
        "date": "April 04, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "oORfNFwPOaw",
        "title": "2018 Dodge Durango SRT 392 POV | POV Drive | #beamngdrive #automotive",
        "duration": "HD",
        "views": "95 views",
        "date": "March 28, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "kKvkLH415aA",
        "title": "2025 Ford Mustang Shelby GT350  | POV Sunset Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "123 views",
        "date": "March 10, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "aBuYpa5NeGg",
        "title": "2025 Toyota RAV4 Plug-in Hybrid EV | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "176 views",
        "date": "February 27, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "Vb66I2fvTU0",
        "title": "424BRAYDEN by TYSON Media Group | 2026 Porsche Taycan GT",
        "duration": "HD",
        "views": "58 views",
        "date": "February 22, 2026",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "MP2d4Majj7k",
        "title": "2022 Nissan Rogue Sport | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "276 views",
        "date": "February 19, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "7rifzovDY0c",
        "title": "In Loving Memory of Margot DeVita",
        "duration": "HD",
        "views": "44 views",
        "date": "February 16, 2026",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "MZu8pFT3KQE",
        "title": "11JACKSON by TYSON Racing | 2023 Porsche Cayman 718",
        "duration": "HD",
        "views": "56 views",
        "date": "February 10, 2026",
        "type": "video",
        "category": "Sim & Racing"
    },
    {
        "id": "9vcX3QY7JIM",
        "title": "1NICOLAS by TYSON Racing | 2015 Porsche Cayman 981",
        "duration": "HD",
        "views": "46 views",
        "date": "February 08, 2026",
        "type": "video",
        "category": "Sim & Racing"
    },
    {
        "id": "r8YGldyVPFM",
        "title": "8ESTON by TYSON Racing | 2025 Porsche Cayman 718",
        "duration": "HD",
        "views": "77 views",
        "date": "February 07, 2026",
        "type": "video",
        "category": "Sim & Racing"
    },
    {
        "id": "i0qGQsalNVE",
        "title": "The Next Chapter of TYSON",
        "duration": "HD",
        "views": "58 views",
        "date": "February 06, 2026",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "BoQl1WTsJTc",
        "title": "2022 Nissan Rogue Sport | POV Driving Impressions | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "136 views",
        "date": "January 28, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "Lqc6emN7d2E",
        "title": "2011 Audi RS6 | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "47 views",
        "date": "January 24, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "6miuuMjnMWY",
        "title": "2018 Dodge Durango SRT 392 + Empty Race Trailer POV | Time-Lapse Road Trip | #beamngdrive",
        "duration": "HD",
        "views": "71 views",
        "date": "January 11, 2026",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "AkWWTj_i3E8",
        "title": "2024 Volkswagen Tiguan R | POV Time-Lapse Road Trip | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "88 views",
        "date": "December 31, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "MrbbHyd5iIQ",
        "title": "TYSON Live! (December 5, 2025) | Forza Horizon 5 Stream Replay",
        "duration": "HD",
        "views": "76 views",
        "date": "December 05, 2025",
        "type": "video",
        "category": "Sim & Racing"
    },
    {
        "id": "JxiaiSv7G4k",
        "title": "THIS MIGHT BE THEE BEST CAR I'VE TESTED | 2024 Porsche Taycan GT POV Drive #beamngdrivemods #cars",
        "duration": "HD",
        "views": "53 views",
        "date": "December 01, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "TT3BzXM26VQ",
        "title": "TYSON Atlantis Announcement",
        "duration": "HD",
        "views": "TYSON and TYSON Atlantis",
        "date": "November 30, 2025",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "aEx2eCiyFu8",
        "title": "Happy Thanksgiving",
        "duration": "HD",
        "views": "12 views",
        "date": "November 27, 2025",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "PH8d05EfKuw",
        "title": "2016 Ford F-350 Lariat Dually | POV Time-Lapse | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "59 views",
        "date": "November 26, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "dDeFIPaeano",
        "title": "2024 Toyota RAV4 Hybrid Woodlands Edition | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "618 views",
        "date": "November 25, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "98oa8gk2Ejo",
        "title": "2022 Porsche Mission R | POV Track Racing | Forza Motorsport #forza #forzamotorsport #porsche",
        "duration": "HD",
        "views": "32 views",
        "date": "November 16, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "riTnKX0MrKM",
        "title": "1999 Ford F-350 Dually | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "135 views",
        "date": "October 20, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "oo0grEGRYbc",
        "title": "My New 2024 Subaru BRZ | POV Drive | BeamNG TYSON \"My\" Series",
        "duration": "HD",
        "views": "55 views",
        "date": "October 08, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "UtSyIvYPeGI",
        "title": "2010 Audi A3 S-Line | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "121 views",
        "date": "October 01, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "bVDtj8MMz8s",
        "title": "2015 Subaru Legacy | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "50 views",
        "date": "September 29, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "n8JlfN59ml4",
        "title": "2024 Jeep Grand Cherokee | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "95 views",
        "date": "September 28, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "6CNLitMf76g",
        "title": "2022 Porsche Taycan 4S | POV Time-Lapse | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "52 views",
        "date": "September 27, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "bwbaWKDMPUg",
        "title": "\ud835\udfe7 \ud835\udcb4\ud835\udc52\ud835\udcb6\ud835\udcc7\ud835\udcc8",
        "duration": "HD",
        "views": "58 views",
        "date": "September 26, 2025",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "syRGzTRqhAE",
        "title": "2015 Ford F-350 Lariat Dually | POV Time-Lapse | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "50 views",
        "date": "September 20, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "mI3EfzAYxlQ",
        "title": "2024 Toyota Grand Highlander | POV Sunset Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "134 views",
        "date": "July 08, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "tXD0989ptqo",
        "title": "TYSON Live! (July 6, 2025) | BeamNG.drive Driving around in a Porsche 911 GT3 RS (992) Stream Replay",
        "duration": "HD",
        "views": "87 views",
        "date": "July 06, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "Z-y6jWZYHj4",
        "title": "2015 Dodge Charger R/T | POV Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "108 views",
        "date": "June 11, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "qSeDAp8UZPo",
        "title": "2014 Audi Q7 | POV Morning Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "93 views",
        "date": "May 28, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "6UtyPS1i-RQ",
        "title": "2016 Infiniti QX80 | POV Morning Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "141 views",
        "date": "May 27, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "HUQFXSRP1O8",
        "title": "2024 Ford Mustang GT | POV Sunset Drive | BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "514 views",
        "date": "May 26, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "204czvLWJD4",
        "title": "2020 Rolls-Royce Cullinan | POV Sunset Drive | City Car Driving #citycardriving  #citycardrivingmods",
        "duration": "HD",
        "views": "70 views",
        "date": "May 25, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "C7NJlk5vUyw",
        "title": "2025 BMW M5 G90 | POV Drive + 0-100 Statistics BeamNG.Drive #beamngdrive #beamngdrivemods",
        "duration": "HD",
        "views": "97 views",
        "date": "May 23, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "ji9Mv5mhP2w",
        "title": "2014 Lexus RX350 | POV Sunset Drive | City Car Driving #citycardriving  #citycardrivingmods",
        "duration": "HD",
        "views": "481 views",
        "date": "May 23, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "XVnookl3jZs",
        "title": "2020 Dodge Challenger | POV Spirited Drive | City Car Driving #citycardriving  #citycardrivingmods",
        "duration": "HD",
        "views": "81 views",
        "date": "May 22, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "7UHrZQF-qZI",
        "title": "Hyundai Santa Fe | POV Sunset Drive | City Car Driving #citycardriving  #citycardrivingmods",
        "duration": "HD",
        "views": "1.6K views",
        "date": "May 21, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "Ugb62HSYspA",
        "title": "2018 Honda Civic | POV Rainy Drive | City Car Driving #citycardriving  #citycardrivingmods",
        "duration": "HD",
        "views": "98 views",
        "date": "May 20, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "8KdvhpvIgZ4",
        "title": "2017 Ford Focus RS | POV Foggy Drive | City Car Driving #citycardriving  #citycardrivingmods",
        "duration": "HD",
        "views": "53 views",
        "date": "May 19, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "8GISO1NZeqY",
        "title": "Porsche Taycan Turbo S | POV Foggy Drive | City Car Driving #citycardriving  #citycardrivingmods",
        "duration": "HD",
        "views": "545 views",
        "date": "May 18, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "9b1UilKMhxs",
        "title": "Subaru Levorg | POV Spirited Drive | City Car Driving #subaru #citycardriving #citycardrivingmods",
        "duration": "HD",
        "views": "178 views",
        "date": "May 17, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "jw8obvQmrzU",
        "title": "Relaxing Night Time POV Drive | CCD Subaru WRX",
        "duration": "HD",
        "views": "115 views",
        "date": "May 17, 2025",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "JCKIqykIudU",
        "title": "This car can go MACH 30!",
        "duration": "HD",
        "views": "110 views",
        "date": "April 17, 2025",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "-V5w8hWvW-A",
        "title": "CECCS Open Bedrock Server - Coming Soon...",
        "duration": "HD",
        "views": "50 views",
        "date": "January 23, 2025",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "SWRwadt0Y5Y",
        "title": "Southwest Airlines | Stormy High Windspeed Flight line landing",
        "duration": "HD",
        "views": "54 views",
        "date": "November 25, 2024",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "aqZ811-1Jy8",
        "title": "TYSON Media Group End Card New",
        "duration": "HD",
        "views": "46 views",
        "date": "August 02, 2024",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "0mEUBAmMU6o",
        "title": "Flight Line | Southwest Airlines",
        "duration": "HD",
        "views": "47 views",
        "date": "October 21, 2023",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "BVyQuHIF-RA",
        "title": "DISCORD'S SPECIAL RINGTONE!",
        "duration": "HD",
        "views": "15 views",
        "date": "May 26, 2023",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "7wirBl4lhxU",
        "title": "Microsoft Flight Simulator | Boeing 787-10 | TYSON Media Group",
        "duration": "HD",
        "views": "45 views",
        "date": "May 14, 2023",
        "type": "video",
        "category": "Sim & Racing"
    },
    {
        "id": "wBlh2no-t-4",
        "title": "Project T6 Trailer",
        "duration": "HD",
        "views": "76 views",
        "date": "October 14, 2022",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "ULdep9gTUnk",
        "title": "Rest In Peace Technoblade",
        "duration": "HD",
        "views": "16 views",
        "date": "July 02, 2022",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "or-lD564HUQ",
        "title": "Collider Pulse",
        "duration": "HD",
        "views": "30 views",
        "date": "June 03, 2022",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "eljXW2tezK0",
        "title": "Greenvile start screen music",
        "duration": "HD",
        "views": "29 views",
        "date": "February 21, 2021",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "qSIpLYA6Yas",
        "title": "practicing landing on the fields mfs2020",
        "duration": "HD",
        "views": "36 views",
        "date": "December 25, 2020",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "XsITHchZDkI",
        "title": "Flight line roblox landing",
        "duration": "HD",
        "views": "118 views",
        "date": "November 08, 2020",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "CxmQuPtJeNo",
        "title": "We are so close",
        "duration": "Short",
        "views": "139 views",
        "date": "July 14, 2026",
        "type": "short",
        "category": "Shorts & Teasers"
    },
    {
        "id": "ecCd57p5SEs",
        "title": "What do you think?",
        "duration": "Short",
        "views": "39 views",
        "date": "June 28, 2026",
        "type": "short",
        "category": "Shorts & Teasers"
    },
    {
        "id": "6U6Hq5PZ0T8",
        "title": "Porsche 911 GT3RS",
        "duration": "Short",
        "views": "199 views",
        "date": "April 04, 2026",
        "type": "short",
        "category": "Shorts & Teasers"
    },
    {
        "id": "3IyWeKx0ueA",
        "title": "This video is way more important than you think",
        "duration": "Short",
        "views": "921 views",
        "date": "March 31, 2026",
        "type": "short",
        "category": "Shorts & Teasers"
    },
    {
        "id": "qaJj_toVHaE",
        "title": "\ud835\udd4a\ud835\udd66\ud835\udd53\ud835\udd52\ud835\udd63\ud835\udd66 - \u2119\ud835\udd60\ud835\udd63\ud835\udd64\ud835\udd54\ud835\udd59\ud835\udd56",
        "duration": "Short",
        "views": "187 views",
        "date": "August 25, 2025",
        "type": "short",
        "category": "Shorts & Teasers"
    },
    {
        "id": "IPKAGZt2070",
        "title": "How to help someone better. #caring #supporting #shorts #youtubeshorts #helpothers #cars",
        "duration": "Short",
        "views": "173 views",
        "date": "October 27, 2024",
        "type": "short",
        "category": "Shorts & Teasers"
    },
    {
        "id": "AxlVCcTqoDI",
        "title": "Stream Deck | Disco Feature | If you ask me I think it's really cool!",
        "duration": "Short",
        "views": "223 views",
        "date": "November 13, 2022",
        "type": "short",
        "category": "Shorts & Teasers"
    },
    {
        "id": "xCeZ186TvDw",
        "title": "Logitech G29 | Force Feedback | It's no joke!",
        "duration": "Short",
        "views": "480 views",
        "date": "November 13, 2022",
        "type": "short",
        "category": "Shorts & Teasers"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // 1. Settings & Theme Engine
    // =========================================================================
    const settingsModal = document.getElementById('settings-modal');
    const settingsToggleBtn = document.getElementById('settings-toggle-btn');
    const settingsCloseBtn = document.getElementById('settings-modal-close-btn');
    const themeOptionCards = document.querySelectorAll('.theme-option-card');
    const replayIntroBtn = document.getElementById('replay-intro-btn');

    const savedTheme = localStorage.getItem('tyson_theme') || 'noir';

    function applyTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('tyson_theme', themeName);

        themeOptionCards.forEach(card => {
            if (card.getAttribute('data-theme-choice') === themeName) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
    }

    applyTheme(savedTheme);

    if (settingsToggleBtn && settingsModal) {
        settingsToggleBtn.addEventListener('click', () => {
            settingsModal.classList.add('active');
            settingsModal.setAttribute('aria-hidden', 'false');
        });
    }

    function closeSettingsModal() {
        if (settingsModal) {
            settingsModal.classList.remove('active');
            settingsModal.setAttribute('aria-hidden', 'true');
        }
    }

    const settingsDoneBtn = document.getElementById('settings-done-btn');
    if (settingsCloseBtn) settingsCloseBtn.addEventListener('click', closeSettingsModal);
    if (settingsDoneBtn) settingsDoneBtn.addEventListener('click', closeSettingsModal);
    if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) closeSettingsModal();
        });
    }

    themeOptionCards.forEach(card => {
        card.addEventListener('click', () => {
            const choice = card.getAttribute('data-theme-choice');
            applyTheme(choice);
        });
    });

    // =========================================================================
    // 2. Launch Intro Animation (Font-Ready Guard & High-Speed Trace)
    // =========================================================================
    const animatedPage = document.querySelector('.intro-animated-page');

    function triggerTraceSequence() {
        if (!animatedPage) return;

        const fontLoadPromise = (document.fonts && document.fonts.load)
            ? Promise.all([
                document.fonts.load('italic 78px "Cormorant Garamond"'),
                document.fonts.ready
              ])
            : Promise.resolve();

        fontLoadPromise.then(() => {
            const traceChars = document.querySelectorAll('.trace-char');
            traceChars.forEach(ch => {
                ch.style.animation = 'none';
                void ch.offsetWidth; // force reflow
                ch.style.animation = '';
            });

            const svgHero = document.querySelector('.domain-hero-svg');
            if (svgHero) {
                svgHero.style.animation = 'none';
                void svgHero.offsetWidth;
                svgHero.style.animation = '';
            }

            setTimeout(() => {
                animatedPage.classList.add('intro-complete');
            }, 1850);
        }).catch(() => {
            setTimeout(() => {
                animatedPage.classList.add('intro-complete');
            }, 1850);
        });
    }

    triggerTraceSequence();

    if (replayIntroBtn && animatedPage) {
        replayIntroBtn.addEventListener('click', () => {
            closeSettingsModal();
            navigateToView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            animatedPage.classList.remove('intro-complete');
            triggerTraceSequence();
        });
    }

    // =========================================================================
    // 3. SPA Router (Single Page Navigation & Active State Sync)
    // =========================================================================
    const views = document.querySelectorAll('.page-view');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNav = document.getElementById('main-nav');

    function navigateToView(viewId, pushToHistory = true) {
        const targetId = (viewId || 'home').replace('#', '');
        let targetView = document.getElementById(`view-${targetId}`);

        if (!targetView) {
            targetView = document.getElementById('view-home');
        }

        // Switch active view
        views.forEach(v => v.classList.remove('active-view'));
        if (targetView) {
            targetView.classList.add('active-view');
        }

        // Update nav bar active state
        navLinks.forEach(link => {
            const href = link.getAttribute('href') || '';
            if (href === `#${targetId}` || (targetId === 'home' && (href === '#home' || href === '#'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        if (mobileNav) {
            mobileNav.classList.remove('active');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (animatedPage && targetId !== 'home') {
            animatedPage.classList.add('intro-complete');
        }

        if (pushToHistory && window.location.hash !== `#${targetId}`) {
            history.pushState(null, '', `#${targetId}`);
        }
    }

    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            const href = link.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                navigateToView(href);
            }
        }
    });

    window.addEventListener('popstate', () => {
        const currentHash = window.location.hash || '#home';
        navigateToView(currentHash, false);
    });

    const initialRoute = window.location.hash || '#home';
    navigateToView(initialRoute, false);

    // =========================================================================
    // 4. YouTube Theater Modal Player
    // =========================================================================
    const ytModal = document.getElementById('yt-player-modal');
    const ytIframe = document.getElementById('yt-modal-iframe');
    const ytTitle = document.getElementById('yt-modal-title');
    const ytExtLink = document.getElementById('yt-modal-external-link');
    const ytCloseBtn = document.getElementById('yt-modal-close-btn');

    function openYtModal(vid, title) {
        if (!ytModal || !ytIframe) return;
        ytIframe.src = `https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`;
        if (ytTitle) ytTitle.textContent = title || 'TYSON Media Group Release';
        if (ytExtLink) ytExtLink.href = `https://www.youtube.com/watch?v=${vid}`;
        
        ytModal.classList.add('active');
        ytModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeYtModal() {
        if (!ytModal || !ytIframe) return;
        ytIframe.src = '';
        ytModal.classList.remove('active');
        ytModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (ytCloseBtn) ytCloseBtn.addEventListener('click', closeYtModal);
    if (ytModal) {
        ytModal.addEventListener('click', (e) => {
            if (e.target === ytModal) closeYtModal();
        });
    }
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeYtModal();
    });

    function attachVideoClickEvents() {
        document.querySelectorAll('.yt-video-trigger').forEach(trigger => {
            if (!trigger.dataset.bound) {
                trigger.dataset.bound = 'true';
                trigger.addEventListener('click', () => {
                    const vid = trigger.getAttribute('data-vid');
                    const title = trigger.getAttribute('data-title');
                    openYtModal(vid, title);
                });
            }
        });
    }

    // =========================================================================
    // 5. Render All 79 Videos in #videos Feed
    // =========================================================================
    const ytFeedContainer = document.getElementById('yt-feed-container');
    const videoSearchInput = document.getElementById('video-search');
    const categoryTabs = document.querySelectorAll('.video-filter-tab');
    const videoCountDisplay = document.getElementById('video-count-display');
    const loadMoreBtn = document.getElementById('load-more-videos-btn');

    let currentCategory = 'all';
    let searchQuery = '';
    let displayedCount = 24;
    const PAGE_CHUNK = 24;

    function renderVideosFeed() {
        if (!ytFeedContainer) return;

        let filtered = TYSON_VIDEOS.filter(v => {
            const matchesCategory = currentCategory === 'all' || 
                                    (currentCategory === 'shorts' && v.type === 'short') ||
                                    v.category.toLowerCase() === currentCategory.toLowerCase();
            const matchesSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  (v.views && v.views.toLowerCase().includes(searchQuery.toLowerCase())) ||
                                  (v.date && v.date.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });

        if (videoCountDisplay) {
            videoCountDisplay.textContent = `Showing ${Math.min(displayedCount, filtered.length)} of ${filtered.length} releases`;
        }

        ytFeedContainer.innerHTML = '';

        if (filtered.length === 0) {
            ytFeedContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 0;">
                    <p style="font-size: 1.3rem; color: var(--text-muted); font-family: var(--font-heading); font-style: italic;">
                        No video releases found matching "${escapeHTML(searchQuery)}" in this category.
                    </p>
                </div>
            `;
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }

        const visibleItems = filtered.slice(0, displayedCount);

        visibleItems.forEach(v => {
            const card = document.createElement('div');
            card.className = 'yt-card yt-video-trigger';
            card.setAttribute('data-vid', v.id);
            card.setAttribute('data-title', v.title);

            const isShort = v.type === 'short';
            const badgeLabel = isShort ? 'Short' : (v.duration || 'HD');
            const thumbUrl = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;

            card.innerHTML = `
                <div class="yt-card-thumb-container">
                    <img src="${thumbUrl}" alt="${escapeHTML(v.title)}" class="yt-card-thumb-img" loading="lazy">
                    <span class="yt-duration-badge ${isShort ? 'badge-short' : ''}">${badgeLabel}</span>
                    <div class="yt-play-overlay-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
                <div class="yt-card-info-row">
                    <div class="yt-card-avatar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </div>
                    <div class="yt-card-text">
                        <h3 class="yt-card-title">${escapeHTML(v.title)}</h3>
                        <span class="yt-card-channel-name">TYSON Media Group</span>
                        <div class="yt-card-metrics">
                            <span>${v.views || 'TYSON Media'}</span>
                            <span>&bull;</span>
                            <span>${v.date || 'Recent'}</span>
                        </div>
                    </div>
                </div>
            `;

            ytFeedContainer.appendChild(card);
        });

        if (loadMoreBtn) {
            loadMoreBtn.style.display = displayedCount >= filtered.length ? 'none' : 'inline-flex';
        }

        attachVideoClickEvents();
    }

    if (categoryTabs.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentCategory = tab.getAttribute('data-category');
                displayedCount = PAGE_CHUNK;
                renderVideosFeed();
            });
        });
    }

    if (videoSearchInput) {
        videoSearchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            displayedCount = PAGE_CHUNK;
            renderVideosFeed();
        });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            displayedCount += PAGE_CHUNK;
            renderVideosFeed();
        });
    }

    // =========================================================================
    // 6. Render Featured Home Videos (Top 8)
    // =========================================================================
    const homeVideosContainer = document.getElementById('home-featured-videos');
    if (homeVideosContainer) {
        const latestEight = TYSON_VIDEOS.slice(0, 8);
        homeVideosContainer.innerHTML = '';
        latestEight.forEach(v => {
            const card = document.createElement('div');
            card.className = 'yt-card yt-video-trigger';
            card.setAttribute('data-vid', v.id);
            card.setAttribute('data-title', v.title);

            const isShort = v.type === 'short';
            const badgeLabel = isShort ? 'Short' : (v.duration || 'HD');
            const thumbUrl = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;

            card.innerHTML = `
                <div class="yt-card-thumb-container">
                    <img src="${thumbUrl}" alt="${escapeHTML(v.title)}" class="yt-card-thumb-img" loading="lazy">
                    <span class="yt-duration-badge">${badgeLabel}</span>
                    <div class="yt-play-overlay-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
                <div class="yt-card-info-row">
                    <div class="yt-card-avatar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </div>
                    <div class="yt-card-text">
                        <h3 class="yt-card-title">${escapeHTML(v.title)}</h3>
                        <span class="yt-card-channel-name">TYSON Media Group</span>
                        <div class="yt-card-metrics">
                            <span>${v.views || 'TYSON Media'}</span>
                            <span>&bull;</span>
                            <span>${v.date || 'Recent'}</span>
                        </div>
                    </div>
                </div>
            `;
            homeVideosContainer.appendChild(card);
        });
        attachVideoClickEvents();
    }

    // =========================================================================
    // 7. Contact Form Submissions
    // =========================================================================
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');

    if (contactForm && contactStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactStatus.textContent = 'TRANSMITTING MESSAGE...';
            contactStatus.className = 'form-feedback loading';

            const submitBtn = document.getElementById('contact-submit-btn');
            if (submitBtn) submitBtn.disabled = true;

            setTimeout(() => {
                contactStatus.textContent = 'MESSAGE RECEIVED. WE WILL RESPOND PROMPTLY.';
                contactStatus.className = 'form-feedback success';
                contactForm.reset();
                if (submitBtn) submitBtn.disabled = false;

                setTimeout(() => {
                    contactStatus.textContent = '';
                }, 6000);
            }, 1000);
        });
    }

    // =========================================================================
    // 8. Mobile Device Detection & Responsive Navigation Engine
    // =========================================================================
    function checkMobileState() {
        const isMobileDevice = window.innerWidth <= 900 || 
            ('ontouchstart' in window) || 
            (navigator.maxTouchPoints > 0) || 
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        document.documentElement.classList.toggle('is-mobile', isMobileDevice);
        document.body.classList.toggle('is-mobile', isMobileDevice);

        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        return isMobileDevice;
    }

    checkMobileState();
    window.addEventListener('resize', checkMobileState);
    window.addEventListener('orientationchange', checkMobileState);

    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileNav.classList.toggle('active');
            mobileToggle.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Auto close mobile nav on any navigation link tap
        const navLinks = mobileNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close on outside tap
        document.addEventListener('click', (e) => {
            if (mobileNav.classList.contains('active') && !mobileNav.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileNav.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    function escapeHTML(str) {
        if (!str) return '';
        return String(str).replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }

    // High-Speed Local Cache Service Worker Registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(() => {
                // Local dev fallback
            });
        });
    }

    renderVideosFeed();
});
