const colors = {
  main: {
    primary: '#5b6dff',
    info: '#456efd',
    success: '#1dcd9d',
    error: '#ff6850',
    warning: '#fbaf2a',
  },
  text: {
    main: '#ffffff',
    secondary: '',
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
