export default {
  colors: {
    text: "#4f4f5d",
    background: "#fff",
    darkBackground: "#110515",
    darkText: "#121217",
    primary: "#639",
    secondary: "#ff6347",
    yellow: "#faeb35",
  },
  fonts: {
    body: "Inter UI, sans-serif",
    heading: "Inter UI, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 100],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    h1: {
      fontSize: 70,
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'darkText',
      mt: 4,
      mb: 2,
    },
    h3: {
      fontSize: 26,
      color: 'text',
      fontWeight: 'normal',
      fontFamily: "heading",
      lineHeight: "heading",
      mb: 4,
    },
    h4: {
      fontSize: 20,
      color: 'text',
      fontWeight: 'bold',
      fontFamily: "heading",
      lineHeight: "heading",
      mb: 2,
    },
    p: {
      fontSize: 20,
      color: "text", 
      fontFamily: 'body',
      fontWeight: 'normal',
      lineHeight: 'body',
    }
  },
}
