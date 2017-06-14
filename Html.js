import React from 'react'
import PropTypes from 'prop-types'
import Head from 'react-helmet'
import { YMInitializer } from 'react-yandex-metrika'

import sheet from './ServerStyleSheet'

const Html = (props) => {
  const helmet = Head.renderStatic()

  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.base.toComponent()}
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        <link rel='stylesheet' href='/styles.css' />
        {sheet.getStyleElement()}
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        {props.body}
        {props.state}
        {props.script}
        <YMInitializer accounts={[44994376]} options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true
        }} />
      </body>
    </html>
  )
}

Html.propTypes = {
  body: PropTypes.any,
  state: PropTypes.any,
  script: PropTypes.any
}

export default Html
