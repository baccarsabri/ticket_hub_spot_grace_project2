import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Buy sports, concert and theater on Tickethubspot"
        />
        {/* <!-- Google fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <meta
          name="keywords"
          content="	booking, car rental, cruise, destination, experiences, flight, holiday, hotel, real estate, resort, tour, travel, travel agency, trip, vacation"
        />

        <link rel="icon" href="/icon_hubspot.jpg" />
          {/* Google Tag Manager */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-9R03BKKW3M"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-9R03BKKW3M');
              `,
            }}
          />
          {/* Google AdSense */}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4334905253329322"
           crossorigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
