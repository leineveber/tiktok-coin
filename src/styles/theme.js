const standardColors = {
  blue: '#5b6dff',
  blueLight: '#a3a8ff',
  blueNavy: '#456efd',
  white: '#ffffff',
  green: '#00ff00',
  greenLight: '#1dcd9d',
  red: '#ff0000',
  redLight: '#ff6850',
  orange: 'orange',
  orangeLight: '#fbaf2a',
  gray: '#d8d8d8',
  grayDark: '#9ea2ae',
};

const colors = {
  main: {
    primary: standardColors.blue,
    secondary: standardColors.blueLight,
    info: standardColors.blueNavy,
    success: standardColors.green,
    error: standardColors.red,
    warning: standardColors.orange,
    background: standardColors.white,
  },
  text: {
    main: standardColors.white,
    secondary: standardColors.blueLight,
    additional: standardColors.grayDark,
  },
  border: standardColors.gray,
};

const border = {
  small: '6px',
  large: '30px',
};

const breakpoints = {
  xs: 360,
  md: 768,
  xl: 1280,
};

const getBreakpointPx = (breakpoint) => `(min-width: ${breakpoint}px)`;

const media = {
  xs: getBreakpointPx(breakpoints.xs),
  md: getBreakpointPx(breakpoints.md),
  xl: getBreakpointPx(breakpoints.xl),
};

export const theme = { breakpoints, media, colors, border, shadow: '0 0 5px rgba(0, 0, 0, 0.5)' };
