import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import AppIcons from '../components/AppIcons'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="th">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          {AppIcons()}
          <link rel="stylesheet" href="/static/css/styles.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
