/* HOME PAGE */

interface homePageDataInterface {
    section_main: {
        heading: string,
        sub: string
    },
    section_three_cards: string[],
    section_auxillary: {
        heading: string,
        sub: string
    },
    section_closing: {
        heading: string,
        sub: string
    },
    disclaimer: {
        text: string
    }
}

export const homePageData: homePageDataInterface = {
    section_main: {
        heading: "Empowering Your Fitness Journey with Knowledge",
        sub: "Because fitness is not as complicated as it's made to seem"
    },
    section_three_cards: [
        "I aim to provide accurate, evidence-based information on various aspects of fitness, including exercise, nutrition, wellness, and more. Whether you're a beginner looking to kickstart a healthy lifestyle or a seasoned fitness enthusiast seeking to deepen your understanding, I've got you covered. After all, knowledge is the key to unlocking your full potential on your fitness journey.",
        "Dive into a wealth of easy-to-read guides designed to empower you on your fitness quest. From workout routines to dietary guidelines, I cover a wide range of topics to support your holistic well-being. I aim to break down complex concepts into accessible and actionable information. Whether you're interested in strength training, cardiovascular fitness, flexibility, or overall wellness, my content is tailored to meet your needs.",
        "The fitness landscape can be overwhelming, with a flood of conflicting information and trends. That's why we need to separate fact from fiction, dispel myths, and provide trustworthy information you can rely on. You receive information that is not only practical but also aligned with the latest research in the field. Together, we can overcome challenges, celebrate milestones, and embark on a fulfilling journey towards improved fitness and well-being."
    ],
    section_auxillary: {
        heading: "Unlock Your Fitness Potential, One Fact at a Time",
        sub: "As cheesy as it sounds, knowledge is power indeed"
    },
    section_closing: {
        heading: "Enough reading, let's get to work",
        sub: "Click this lovely yellow button to start exploring all topics fitness"
    },
    disclaimer: {
        text: "Disclaimer: Remember to consult with a healthcare professional before making any significant changes to your fitness or diet regimen. Check for allergies and other issues before adopting new practices."
    }
}

/* ABOUT PAGE */


// ABOUT PAGE DATA

export interface AboutInterface {
    title: string,
    paragraph: string,
    width_percent: number
}

export const goalSection: AboutInterface = {
    title: "My Goal",
    paragraph: "The primary goal is to provide accurate and reliable information related to fitness. I aim to  empower individuals with the knowledge and guidance they need to make informed decisions about their health and well-being. By offering evidence-based content, I aim to debunk myths, dispel misconceptions, and present scientifically supported information that can be applied to various fitness goals. I want to inspire and educate my audience, fostering a deeper understanding of exercise, nutrition, and overall wellness. I want to promote a healthier and more informed society, encouraging individuals to lead active lifestyles and make choices that contribute to their long-term fitness success.",
    width_percent: 50
}

export const aboutMeSection: AboutInterface = {
    title: "About Me",
    paragraph: "I am not a doctor, nor a trainer. I am the average college student who has made changes to his body following prinicples I learnt throughout my journey to my goal, which was to lose weigth at the time. I got plenty of great advise, I commited plenty mistakes, and through this platform I aim to help anyone willing to undergo a body transformation. I created this platform to have all my knowledge in an easy-to-access place available to all.",
    width_percent: 30
}





/* EXPLORE PAGE */


// EXPLORE PAGE DATA


interface ExploreCardInterface {
    url: string,
    paragraph: string
}

// change paragraphs for all three
export const muscleBuildingExploreCard: ExploreCardInterface =  {
    url: '/explore/muscle-building',
    paragraph: `MuscleGain`
}

export const fatLossExploreCard: ExploreCardInterface =  {
    url: '/explore/fat-loss',
    paragraph: `FatLoss`
}

export const miscellaneousExploreCard: ExploreCardInterface =  {
    url: '/explore/miscellaneous',
    paragraph: `Miscellaneous`
}





// EXPLORE CARD IMAGE SIZING
export const img_sizes: string = '(max-width: 650px) 64vw, (max-width: 850px) 28.51vw, (max-width: 1350px) 24vw,  320px' 





/* FEEDBACK PAGE */

// feedback form type and state
export interface FeedbackFormDataInterface {
    username: string,
    age: number,
    country: string,
    email: string,
    feedback: string
}


export const feedbackFormInitialState: FeedbackFormDataInterface = {
    username: '',
    age: 0,
    country: '-- Select Country --',
    email: '',
    feedback: ''
}


// FEEDBACK PAGE ARRAY OF COUNTRIES
export const Countries: string[] = [
    `-- Select Country --`,
    `Afghanistan`,
    `Albania`,
    `Algeria`,
    `Andorra`,
    `Angola`,
    `Antigua and Barbuda`,
    `Argentina`,
    `Armenia`,
    `Australia`,
    `Austria`, 
    `Azerbaijan`,
    `Bahamas`,
    `Bahrain`,
    `Bangladesh`,
    `Barbados`,
    `Belarus`,
    `Belgium`,
    `Belize`,
    `Benin`,
    `Bhutan`,
    `Bolivia`,
    `Bosnia and Herzegovina`,
    `Botswana`,
    `Brazil`,
    `Brunei`,
    `Bulgaria`,
    `Burkina Faso`,
    `Burundi`,
    `Côte d'Ivoire`,
    `Cabo Verde`,
    `Cambodia`,
    `Cameroon`,
    `Canada`,
    `Central African Republic`,
    `Chad`,
    `Chile`,
    `China`,
    `Columbia`,
    `Comoros`,
    `Congo (Congo=Brazzaville)`,
    `Costa Rica`,
    `Croatia`,
    `Cuba`,
    `Cyprus`,
    `Czachia (Czech Republic)`,
    `Democratic Republic of Congo`,
    `Denmark`,
    `Djibouti`,
    `Dominica`,
    `Dominican Republic`,
    `Ecuador`,
    `Egypt`,
    `El Salvador`,
    `Equatorial Guinea`,
    `Eritrea`,
    `Estonia`,
    `Eswatini (fmr. Swaziland)`,
    `Ethiopia`,
    `Fiji`,
    `Finland`,
    `France`,
    `Gabon`,
    `Gambia`,
    `Georgia`,
    `Germany`,
    `Ghana`,
    `Greece`,
    `Grenada`,
    `Guatemala`,
    `Guinea`,
    `Guinea-Bissau`,
    `Guyana`,
    `Haiti`,
    `Holy See`,
    `Honduras`,
    `Hungary`,
    `Iceland`,
    `India`,
    `Indonesia`,
    `Iran`,
    `Iraq`,
    `Ireland`,
    `Israel`,
    `Italy`,
    `Jamaica`,
    `Japan`,
    `Jordan`,
    `Kazakhstan`,
    `Kenya`,
    `Kiribati`,
    `Kuwait`,
    `Kyrgystan`,
    `Laos`,
    `Latvia`,
    `Lebanon`,
    `Lesotho`,
    `Liberia`,
    `Libya`,
    `Liechtenstein`,
    `Lithuania`,
    `Luxembourg`,
    `Madagascar`,
    `Malawi`,
    `Malaysia`,
    `Maldives`,
    `Mali`,
    `Malta`,
    `Marshall Islands`,
    `Mauritania`,
    `Mauritius`,
    `Mexico`,
    `Micronesia`,
    `Moldova`,
    `Monaco`,
    `Mongolia`,
    `Montenegro`,
    `Morocco`,
    `Mozambique`,
    `Myanmar (fmr. Burma)`,
    `Namibia`,
    `Nauru`,
    `Nepal`,
    `Netherlands`,
    `New Zealand`,
    `Nicaragua`,
    `Niger`,
    `Nigeria`,
    `North Korea`,
    `North Macedonia`,
    `Norway`,
    `Oman`,
    `Pakistan`,
    `Palau`,
    `Palestine State`,
    `Panama`,
    `Papua New Guinea`,
    `Paraguay`,
    `Peru`,
    `Philippines`,
    `Poland`,
    `Portugal`,
    `Qatar`,
    `Romania`,
    `Russia`,
    `Rwanda`,
    `Saint Kitts and Nevis`,
    `Saint Lucia`,
    `Saint Vincent and the Grenadines`,
    `Samoa`,
    `San Marino`,
    `Sao Tome and Principe`,
    `Saudi Arabia`,
    `Senegal`,
    `Serbia`,
    `Seychelles`,
    `Sierra Leone`,
    `Singapore`,
    `Slovakia`,
    `Slovenia`,
    `Solomon Islands`,
    `Somalia`,
    `South Africa`,
    `South Korea`,
    `South Sudan`,
    `Spain`,
    `Sri Lanka`,
    `Sudan`,
    `Suriname`,
    `Sweden`,
    `Switzerland`,
    `Syria`,
    `Tajikistan`,
    `Tanzania`,
    `Thailand`,
    `Timor-Leste`,
    `Togo`,
    `Tonga`,
    `Trinidad and Tobago`,
    `Tunisia`,
    `Turkey`,
    `Turkmenistan`,
    `Tuvalu`,
    `Uganda`,
    `Ukraine`,
    `United Arab Emirates`,
    `United Kingdom`,
    `United States of America`,
    `Uruguay`,
    `Uzbekistan`,
    `Vanuatu`,
    `Venezuela`,
    `Vietnam`,
    `Yemen`,
    `Zambia`,
    `Zimbabwe`
]