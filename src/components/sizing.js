const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    halfscreen: `900px`,
    laptop: '1024px',
    laptopL: '1440px',
    laptopXl: '1960px',
    desktop: '2560px'
}
  
const Device = {
    mobileS: `screen and (min-width: ${size.mobileS})`,
    mobileM: `screen and (min-width: ${size.mobileM})`,
    mobileL: `screen and (min-width: ${size.mobileL})`,
    tablet: `screen and (min-width: ${size.tablet})`,
    halfscreen: `screen and (min-width: ${size.halfscreen})`,
    laptop: `screen and (min-width: ${size.laptop})`,
    laptopL: `screen and (min-width: ${size.laptopL})`,
    laptopXl: `screen and (min-width: ${size.laptopXl})`,
    desktop: `screen and (min-width: ${size.desktop})`,
    desktopL: `screen and (min-width: ${size.desktop})`
}

export default Device