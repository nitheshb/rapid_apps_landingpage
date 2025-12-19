import Script from "next/script";

export function CtaSection() {
  return (
    <>
      <section id="cta" className="w-full py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div
          className="calendly-inline-widget  w-full max-w-6xl bg-gray-50"
          data-url="https://calendly.com/hellostores561/30min"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </section>
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
    </>
  );
}

export default CtaSection;
