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
    desciption: `Experienced front-end developer with strong skills in HTML, CSS, JavaScript, and experience with React, seeking a role where I can contribute to building high-performance and user-friendly web applications , Motivated and detail-oriented Front-End Developer with a growing focus on the MERN stack.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('tel:+918860587852')
    }
}

export default outer
