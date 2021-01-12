const colors =  {
  white: '#ffffff',
  red: '#fc5d65',
  dark: '#222222',
  grey: '#bfbfbf'
}

const fontWeight = {
  normal: "normal",
  bold: "bold"
}

const space = {
  xxxxs: "0.25rem",
  xxxs: "0.375rem",
  xxs: "0.5rem",
  xs: "0.625rem",
  s: "0.75rem",
  m: "1rem",
  l: "1.5rem",
  xl: "2.25rem",
  xxl: "3rem",
  xxxl: "3.375rem",
  xxxxl: "4.5rem"
}

const fonts = {
  regular: `'PingFangSC-Regular', 'sans-serif', 'Helvetica Neue For Number', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial`,
  medium: `'PingFangSC-Medium', 'sans-serif-medium', 'Helvetica Neue For Number', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial`,
  light: `'PingFangSC-Light', 'sans-serif-light', 'Helvetica Neue For Number', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial`,
  semibold: `PingFangSC-Semibold', 'sans-serif-black', 'Helvetica Neue For Number', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial`,
  polc: 'PolarisCondensed'
}

const lineHeights = {
  compact: "1",
  default: "1.2",
  comfortable: "1.35"
};

const fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  s: "0.875rem",
  m: "1rem",
  l: "1.25rem",
  xl: "1.5rem",
  xxl: "1.875rem",
  xxxl: "2rem",
  xxxxl: "2.875rem"
};

const buttonStyle = {
  colors: {
    primary: {
      color: colors.white,
      backgroundColor: colors.dark,
      borderColor: colors.dark
    },
    disabled: {
      color: colors.white,
      backgroundColor: colors.grey,
      borderColor: colors.grey
    },
    secondary: {
      color: colors.dark,
      backgroundColor: colors.white,
      borderColor: colors.dark
    },
    link: {
      color: colors.dark,
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    }
  },
  space,
  fonts, 
  lineHeights,
  fontSizes,
  fontWeight,
  heights: {
    small: space.xl,
    medium: space.xxl,
    large: space.xxxl,
  }
}

const theme = {
  buttonStyle
}

export default theme;