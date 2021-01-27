import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Front end task</title>
                    <link  rel="icon" href={'../public/images/logo.png'} />
                </Head>
                <body>
                <Main />
                <NextScript>

                </NextScript>
                </body>
            </Html>
        )
    }
}

export default MyDocument