import '@/styles/globals.css'
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <Script id ="tawk" strategy="lazyOnload">
    {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5880d66dbcf30e71ac11daaa/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
    `}
  </Script>
  </>
  );
}
