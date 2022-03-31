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

export const stories = [
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
    title: "Gaza's Toll: After four wars, Gaza families struggle with the cost",
  },
  {
    org: 'AP',
    year: 2021,
    link: 'https://projects.apnews.com/features/2021/gaza-toll-of-war/gaza-toll-by-the-numbers.html',
    title: 'The deepening costs of 4 Gaza wars in 13 years, in 4 charts',
  },
  {
    org: 'Graduate research',
    year: 2019,
    link: 'https://kt-prry.github.io/nc-polarization/',
    title: "North Carolina's Polarization Problem",
  }
]

export const graphics = [
  {
    id: 'votecastPrem',
    mainImage: votecastPrem,
    title: 'AP VoteCast Premium',
    link: 'https://interactives.ap.org/votecast-2020-ge-map/',
    wideImages: [votecastPrem, votecastStates],
    pairImages: [votecastLite1, votecastLite2],
    tools: 'JS, React, CSS',
    desc: 'AP VoteCast is a wide-ranging survey of the American electorate, and to make the findings accessible, I worked with my teammate to design and build a set of online interactives.',
  },
  {
    id: 'votecastPrint',
    mainImage: votecastPrint,
    title: 'AP VoteCast Premium',
    wideImages: [votecastPrint, votecastTimeline],
    pairImages: [votecastHealthcare, votecastSquares],
    tools: 'R, Illustrator',
    desc: 'AP VoteCast is a wide-ranging survey of the American electorate, and to make the findings accessible, I brainstormed key themes of the 2020 Democratic primaries, ran case-level analysis, and designed double- and single-page visuals for print.',
  },
  {
    id: 'spain',
    mainImage: spain,
    title: 'Shaded Relief 1: Iberian Peninsula',
    wideImages: [spain, spainZoom],
    tools: 'Illustrator, Photoshop',
  },
  {
    id: 'caucasus',
    mainImage: caucasus,
    title: 'Shaded Relief 2: Caucasus Region',
    wideImages: [caucasus, caucasusZoom],
    tools: 'Illustrator, Photoshop',
  },
]