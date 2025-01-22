import Script from "next/script";
import React from "react";

const GoogleAnalyticScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX'); // Replace G-XXXXXXXXXX with your GA4 Measurement ID`}
      </Script>
    </>
  );
};

export default GoogleAnalyticScript;
