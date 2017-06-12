import React from 'react'
import Head from 'react-helmet'
import { StyleSheet, Image, View } from 'react-primitives'
import { createContainer } from '@phenomic/preset-react-app/lib/client'

const Home = () => (
  <View style={styles.page}>
    <Head>
      <html lang="ru" />
      <title>Krasnodar Dev Days</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Image
      source={{
        uri: require('file-loader!./text.svg'),
        width: 300,
        height: 133
      }}
    />
  </View>
)

const styles = StyleSheet.create({
  page: {
    flexShrink: 0,
    flexBasis: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    backgroundImage: `url(${require('file-loader!./bg.jpg')})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
})

export default createContainer(Home)