import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Chetan,',
   decrypTexts: [
    'A Front-End Developer',
    'Crafting Responsive Web Interfaces',
    'I build beautiful & accessible UIs',
    'Passionate about UX & Performance',
    'Mastering HTML, CSS & JavaScript',
    'React & Next.js Enthusiast',
]
,
    profile :{
        src: '../../assets/chetan.png',
        alt: 'Chetan',
       
    }
    ,
    desciption: `A dedicated and disciplined Full Stack engineer who love to create things for internet, having more than 4 years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:chetank8202739@gmail.com?subject=Hello')
    }
}

export default outer
