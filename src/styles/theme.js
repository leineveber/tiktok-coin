const standardColors = {
  blue: '#5b6dff',
  blueLight: '#a3a8ff',
  blueNavy: '#456efd',
  white: '#ffffff',
  green: 'green',
  greenLight: '#1dcd9d',
  red: 'red',
  redLight: '#ff6850',
  orange: 'orange',
  orangeLight: '#fbaf2a',
};

const colors = {
  main: {
    primary: standardColors.blue,
    secondary: standardColors.blueLight,
    info: standardColors.blueNavy,
    success: standardColors.green,
    error: standardColors.red,
    warning: standardColors.orange,
  },
  text: {
    main: standardColors.white,
    secondary: standardColors.blueLight,
  },
};

const border = {
  radius: '6px',
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

export const theme = { breakpoints, media, colors, border };
