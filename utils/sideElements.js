import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/Chetanjoinwal',
        'instagram': 'https://www.instagram.com/chetan_joinwal.07/',
        'twitter': 'https://twitter.com/ChetanJoinwal',
        'linkedin': 'https://www.linkedin.com/in/chetan-kumar-7a4192260/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'chetank8202739@gmail.com',
        onClick: () => openLink('mailto:chetank8202739@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements