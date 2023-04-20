import spain from '../images/spain-square.png'
import caucasus from '../images/caucasus_region.png'
import votecastPrem from '../images/ap-votecast-prem.jpeg'
import votecastLite1 from '../images/ap-votecast-lite-1.jpeg'
import votecastLite2 from '../images/ap-votecast-lite-ge.jpeg'
import votecastStates from '../images/votecast-prem-state-view.jpeg'
import spainZoom from '../images/zoom-in-spain.png'
import caucasusZoom from '../images/zoom-in-caucasus.png'
import votecastPrint from '../images/vc_full.jpeg'
import votecastHealthcare from '../images/vc_healthcare.png'
import votecastSquares from '../images/vc_squares.png'
import votecastTimeline from '../images/vc_timeline.png'
import bidenPromises from '../images/biden-promise-tracker.png'
import approval from '../images/approval.png'
import issues from '../images/issues.png'
import georgiaAudit from '../images/georgia-audit-2020.jpeg'
import yellowstone from '../images/yellowstone.png'
import newZealand from '../images/te-araroa.png'
import armenia from '../images/armenia_reference_map.png'
import emoryRadio from '../images/radio-emory.png'
import emoryNarrative from '../images/radio-emory-narrative.png'
import calahorra from '../images/adventure-in-calahorra.png'
import calahorraZoom from '../images/calahorra-zoom.png'
import gaza from '../images/gaza-breaking-news.jpg'
import freedoms from '../images/ap-polling-freedoms.png'
import surveillance from '../images/ap-polling-surveillance.png'

export const stories = [
  {
    org: 'WP',
    year: 2023,
    link: 'https://www.washingtonpost.com/world/2023/03/01/turkey-earthquake-rubble/',
    title: "Turkey earthquakes generated 10 times more rubble than 2010 Haiti disaster",
  },
  {
    org: 'WP',
    year: 2023,
    link: 'https://www.washingtonpost.com/politics/interactive/2023/democratic-primary-calendar-builder-tool/?itid=ap_katiperry',
    title: "Pick your early Democratic primary states with our 2024 lineup builder",
  },
  {
    org: 'WP',
    year: 2022,
    link: 'https://www.washingtonpost.com/politics/interactive/2022/abortion-rights-election/',
    title: "Here’s how abortion access fared in the midterm elections in nine states",
  },
    {
    org: 'AP',
    year: 2023,
    link: 'https://apnews.com/article/adrift-investigation-migrants-mauritania-tobago-663a576e233cb4b363f5eda8d5969b5a',
    title: "Adrift: An AP investigation into deadly migrant voyage",
  },
  {
    org: 'AP',
    year: 2021,
    link: 'https://projects.apnews.com/features/2021/polar-bears-sea-ice/index.html',
    title: "Arctic sea ice is disappearing and it’s harming polar bears",
  },
  {
    org: 'AP',
    year: 2021,
    link: 'https://projects.apnews.com/features/2021/gaza-toll-of-war/gaza-toll-one-neighborhood.html',
    title: "Gaza's toll: After four wars, Gaza families struggle with the cost",
  },
  {
    org: 'AP',
    year: 2021,
    link: 'https://projects.apnews.com/features/2021/gaza-toll-of-war/gaza-toll-by-the-numbers.html',
    title: 'The deepening costs of 4 Gaza wars in 13 years, in 4 charts',
  },
]

export const graphics = [
  {
    id: 'gaza',
    mainImage: gaza,
    title: 'Breaking news in Gaza, May 2021',
    wideImages: [{ src: gaza }],
    tools: 'Illustrator, Photoshop',
    org: 'AP',
    year: 2021,
  },
  {
    id: 'votecastPrem',
    mainImage: votecastPrem,
    title: 'AP VoteCast Premium',
    link: 'https://interactives.ap.org/votecast-2020-ge-map/',
    wideImages: [{ src: votecastPrem }, { src: votecastStates }],
    pairImages: [{ src: votecastLite1 }, { src: votecastLite2 }],
    tools: 'JS, React',
    desc: 'AP VoteCast is a wide-ranging survey of the American electorate, and to make the findings accessible, I worked with my teammate to design and build a set of online interactives.',
    org: 'AP',
    year: 2020,
  },
  {
    id: 'votecastPrint',
    mainImage: votecastPrint,
    title: 'AP VoteCast in Print',
    wideImages: [{ src: votecastPrint }, { src: votecastTimeline }],
    pairImages: [{ src: votecastHealthcare }, { src: votecastSquares }],
    tools: 'R, Illustrator',
    desc: 'AP VoteCast is a wide-ranging survey of the American electorate, and to make the findings accessible, I brainstormed key themes of the 2020 Democratic primaries, ran case-level analysis, and designed double- and single-page visuals for print.',
    org: 'AP',
    year: 2020,
  },
  {
    id: 'bidenPromises',
    mainImage: bidenPromises,
    title: "Tracking Biden's 100-day promises",
    link: 'https://interactives.ap.org/biden-promise-tracker/',
    wideImages: [{ src: bidenPromises }],
    tools: 'JS, React',
    desc: "A team at the AP tracked and visualized each of President Biden's promises for his first 100 days in office.",
    org: 'AP',
    year: 2021,
  },
  {
    id: 'georgiaAudit',
    mainImage: georgiaAudit,
    title: "Georgia's 2020 Election Audit",
    link: 'https://interactives.ap.org/georgia-election-audit/',
    wideImages: [{ src: georgiaAudit }],
    tools: 'JS, React',
    org: 'AP',
    year: 2021,
  },
  {
    id: 'pollingData',
    mainImage: freedoms,
    title: 'AP-NORC polls',
    wideImages: [
      { src: issues, link: 'https://interactives.ap.org/most-important-issues' }, 
      { src: approval, link: 'https://interactives.ap.org/ap-polling-presidential-approval'}, 
      { src: freedoms, link: 'https://interactives.ap.org/ap-polling-freedoms'}, 
      { src: surveillance, link: 'https://interactives.ap.org/ap-polling-surveillance'}
    ],
    tools: 'JS, React',
    desc: "I created interactives to visualize AP-NORC polling data, including President Biden's approval rating since his inauguration and changes in Americans' priorities for 2022. Click on each image to jump to the live page.",
    org: 'AP',
    year: 2021,
  },
  {
    id: 'spain',
    mainImage: spain,
    title: 'Shaded Relief 1: Iberian Peninsula',
    wideImages: [{ src: spain }, { src: spainZoom }],
    tools: 'Illustrator, Photoshop',
    org: 'For fun',
    year: 2019,
  },
  {
    id: 'caucasus',
    mainImage: caucasus,
    title: 'Shaded Relief 2: Caucasus Region',
    wideImages: [{ src: caucasus }, { src: caucasusZoom }],
    tools: 'Illustrator, Photoshop',
    org: 'USAID/OTI',
    year: 2019,
  },
  // {
  //   id: 'teAraroa',
  //   mainImage: newZealand,
  //   title: 'Te Araroa',
  //   wideImages: [{ src: newZealand }],
  //   tools: 'Illustrator, Photoshop',
  //   desc: 'Using Illustrator and Photoshop, I wanted to try to create a monochrome shaded relief layer and decided to test out the approach with this map.',
  //   org: 'For fun',
  //   year: 2019,
  // },
  // {
  //   id: 'yellowstone',
  //   mainImage: yellowstone,
  //   title: 'Earthquakes in Yellowstone',
  //   wideImages: [{ src: yellowstone }],
  //   tools: 'Illustrator, Photoshop',
  //   desc: 'I worked on data cleaning and data visualization for the earthquakes map that appears in the Yellowstone Atlas. (Alethea Steingisser made the beautiful shaded relief in this map!)',
  //   org: 'UO',
  //   year: 2019,

  // },
  // {
  //   id: 'armenia',
  //   mainImage: armenia,
  //   title: 'Armenia Reference Map',
  //   wideImages: [{ src: armenia }],
  //   tools: 'Illustrator, Photoshop',
  //   org: 'USAID/OTI',
  //   year: 2019,
  // },
  // {
  //   id: 'calahorra',
  //   mainImage: calahorra,
  //   title: 'Calahorra Adventure Map',
  //   wideImages: [{ src: calahorra }, { src: calahorraZoom }],
  //   tools: 'Illustrator, Photoshop',
  //   org: 'For fun',
  //   year: 2019,
  // },
  // {
  //   id: 'emory',
  //   mainImage: emoryRadio,
  //   title: 'Radio in Emory',
  //   wideImages: [{ src: emoryRadio }, { src: emoryNarrative }],
  //   tools: 'Illustrator, Photoshop',
  //   org: 'For fun',
  //   year: 2019,
  // },
]
