const standardColors = {
  black: '#000000',
  blue: '#5b6dff',
  blueLight: '#a3a8ff',
  blueNavy: '#456efd',
  white: '#ffffff',
  green: '#4bb34b',
  greenLight: '#1dcd9d',
  red: '#ff0000',
  redLight: '#ff6850',
  orange: 'orange',
  orangeLight: '#fbaf2a',
  gray: '#d8d8d8',
  grayDark: '#9ea2ae',
  purple: '#d8b1d4', // TODO change
};

const colors = {
  main: {
    primary: standardColors.blue,
    primaryDark: standardColors.purple,
    secondary: standardColors.blueLight,
    info: standardColors.blueNavy,
    success: standardColors.green,
    error: standardColors.red,
    warning: standardColors.orange,
  },
  background: {
    main: standardColors.white,
    secondary: 'linear-gradient(to top right, #6849d0, #a948ea)',
    crownBalance: '#8464fb',
    autoClicker: '#c9295e',
    vipSilver: 'linear-gradient(to top right, #69c6ed, #585ee0)',
    booster: 'linear-gradient(to top right, #ecb818, #ce5c35)',
    icon: 'rgb(0, 140, 255)',
    iconRed: standardColors.red,
  },
  text: {
    main: standardColors.white,
    secondary: standardColors.blueLight,
    additional: standardColors.grayDark,
    contrast: standardColors.black,
  },
  border: standardColors.gray,
};

const typography = {
  size: {
    xs: '0.725rem',
    md: '0.875rem',
    lg: '1rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '1.75rem',
  },
  weight: {
    thin: 100,
    ultraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    ultraBold: 800,
    heavy: 900,
  },
};

const border = {
  small: '6px',
  base: '8px',
  medium: '15px',
  large: '30px',
};

const breakpoints = {
  xs: 360,
  md: 768,
  xl: 1280,
};

const shadow = {
  button: '0 0 5px rgba(0, 0, 0, 0.5)',
  card: '0px 4px 40px rgba(0, 0, 0, 0.07)',
};

const getBreakpointPx = (breakpoint) => `(min-width: ${breakpoint}px)`;

const media = {
  xs: getBreakpointPx(breakpoints.xs),
  md: getBreakpointPx(breakpoints.md),
  xl: getBreakpointPx(breakpoints.xl),
};

export const theme = { breakpoints, media, standardColors, colors, typography, border, shadow };
