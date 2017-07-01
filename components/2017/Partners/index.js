import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Section from '../Section'
import Text from '../Text'
import Button from '../Button'
import grayscale from '../grayscale'

const Heading = require('../Heading').default.withComponent('h3')

const Partner = styled(({className, href, image, name}) => (
  <a className={className} href={href} target='_blank'>
    <img src={image} alt={name} title={name} height='40px' />
  </a>
))`
  ${grayscale}
  
  display: inline-block;
  margin: 1rem 0.5rem;
  padding: 0;
  text-decoration: none;
  
  > img {
    vertical-align: top;
  }
`

export default () => (
  <ThemeProvider theme={{color: 'light'}}>
    <Section>
      <Heading>Партнеры</Heading>
      <Text align='center'>
        <Partner
          href='http://www.iidf.ru/'
          image={require('./free.png')}
          name='ФРИИ'
        />
      </Text>
      <Text align='center'>
        <Button href='mailto:mark@krddevdays.ru?subject=Хочу стать партнером KDD2'>Стать парнером</Button>
      </Text>
    </Section>
  </ThemeProvider>
)
