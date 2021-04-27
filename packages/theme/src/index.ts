const colors = {
    white: '#ffffff',
    red: '#c41429',
    dark: '#222222',
    dimGrey: '#727272',
    midGrey: '#949494',
    grey: '#bfbfbf',
    paleGrey: '#e6e6e6',
    lightGrey: '#f5f5f5',
    gold: '#9c7d31',
    green: '#048273',
}

const fontWeight = {
    normal: 'normal',
    bold: 'bold',
}

const space = {
    xxxs: '2px',
    xxs: '4px',
    xs: '6px',
    xsp: '8px',
    s: '12px',
    sp: '16px',
    m: '24px',
    l: '48px',
}

const fonts = {
    // regular: `'PingFangSC-Regular', 'sans-serif', 'Helvetica Neue For Number', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial`,
    // medium: `'PingFangSC-Medium', 'sans-serif-medium', 'Helvetica Neue For Number', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial`,
    light: `'PingFangSC-Light', 'sans-serif-light', 'Helvetica Neue For Number', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial`,
    semibold: `PingFangSC-Semibold', 'sans-serif-black', 'Helvetica Neue For Number', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial`,
    // polc: 'PolarisCondensed',
}

const lineHeights = {
    compact: '1',
    default: '1.2',
    comfortable: '1.35',
}

const height = {
    l: '42px',
    m: '32px',
    s: '24px',
    lp: '54px',
}

const width = {
    l: '40px',
    m: '34px',
}

const fontSizes = {
    xxs: '0.625rem',
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.25rem',
    xl: '1.5rem',
    xxl: '1.875rem',
    xxxl: '2rem',
    xxxxl: '2.875rem',
}

// const buttonStyle = {
//     colors: {
//         primary: {
//             color: colors.white,
//             backgroundColor: colors.dark,
//             borderColor: colors.dark,
//         },
//         disabled: {
//             color: colors.white,
//             backgroundColor: colors.grey,
//             borderColor: colors.grey,
//         },
//         secondary: {
//             color: colors.dark,
//             backgroundColor: colors.white,
//             borderColor: colors.dark,
//         },
//         link: {
//             color: colors.dark,
//             backgroundColor: 'transparent',
//             borderColor: 'transparent',
//         },
//     },
//     space,
//     fonts,
//     lineHeights,
//     fontSizes,
//     fontWeight,
//     heights: {
//         small: space.xl,
//         medium: space.xxl,
//         large: space.xxxl,
//     },
// }

const theme = {
    colors,
    fontWeight,
    space,
    fonts,
    lineHeights,
    fontSizes,
    height,
    width,
}

export default theme
