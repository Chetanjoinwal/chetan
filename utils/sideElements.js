import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/Chetan',
        'instagram': 'https://www.instagram.com/Chetan/',
        'twitter': 'https://twitter.com/Chetan',
        'linkedin': 'https://www.linkedin.com/in/Chetan/',
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