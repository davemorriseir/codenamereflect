const COLORS = {
  active: '#5CC8FF',
  black: '#2C2A28',
  brand: '#5CC8FF',
  focus: '#A682FF',
  placeholder: '#93867F',
  white: '#FDFFFE',
  sidebar: '#A271BE',
  background: '#A271BE',
  header: '#593E68'
}

const PARAGRAPH = {
  medium: {
    maxWidth: '750px'
  }
}

export const THEME = {
  global: {
    colors: { ...COLORS }
  },
  paragraph: { ...PARAGRAPH }
}
