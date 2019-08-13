import { math } from 'polished';

export const theme = {
  colors: {
    primary: '#F5BB00',
    font: '#333',
    background: '#fff',
    placeholder: '#ddd',
  },
  breakpoints: {
    sm: { width: 420, gutter: 30 },
    md: { width: 720, gutter: 50 },
    lg: { width: 1080, gutter: 70 },
  },
  verticalBreakpoints: [
    { height: 920, scale: 0.975 },
    { height: 800, scale: 0.95 },
    { height: 690, scale: 0.925 },
  ],
  font: {
    family: '"Roboto", sans-serif',
    familyHeading: '"Open Sans", sans-serif',
    size: 16,
    sizeMin: 13,
    lineHeight: 1.5,
  },
  pageWidth: 1290,
  pageLimit: p =>
    math(`${p.theme.pageWidth} + (${p.theme.breakpoints.lg.gutter} * 2)`),
  gutter: 30,
  baseline: 16,
  segmentPadding: 200,
  grid: {
    columnCount: 12,
  },
};
