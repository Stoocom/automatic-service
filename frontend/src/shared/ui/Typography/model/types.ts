interface Text {
  tagName?: 'p'
  size?: 'medium' | 'medium-plus' | 'large' | 'small' | 'small-xl' | 'large-3xl'
  weight?: 'regular' | 'semi-bold' | 'bold' | 'extra-bold'
}

interface Heading {
  tagName?: 'h1' | 'h2' | 'h3'
  size?: 'medium' | 'medium-plus' | 'large' | 'large-plus' | 'extra-large' | 'large-xl' | 'small'
  weight?: 'regular' | 'semi-bold' | 'bold' | 'extra-bold'
}

export interface Styles {
  variant?: 'primary' | 'default' | 'secondary' | 'white' | 'grey' | 'grey-light' | 'grey-light-xl' | 'primary-accent'
}

export type Variants = Text | Heading
