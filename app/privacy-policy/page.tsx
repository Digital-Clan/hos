export default function PrivacyPolicy() {
  return (
    <main>
      <section className="py-12 px-5 lg:py-16">
        <div className="container-block">
          <div className="max-w-5xl lg:max-w-6xl">
            <h1 className="text-h-1 font-black text-black mb-5 md:text-3xl md:mb-7 lg:text-h-1-2x lg:mb-10">
              Privacy Policy
            </h1>
            <div className="flex flex-col space-y-10 lg:space-y-14">
              <div>
                <h2 className="text-h-3 font-bold text-[#4C4C4C] mb-3 md:text-xl lg:text-h-3-2x">
                  How we share data
                </h2>
                <p className="text-body text-para-1x font-general-sans font-medium md:text-base md:leading-[27px] lg:text-para-2x">
                  Hour of Solution will never pass on or sell information about
                  our customers to any other business or organization. We would
                  take an exception to this rule if we are legally obliged to do
                  so to comply with a current judicial proceeding, a court order
                  or legal process served on our website.
                </p>
              </div>

              <div>
                <h2 className="text-h-3 font-bold text-[#4C4C4C] mb-3 md:text-xl lg:text-h-3-2x">
                  Contact permissions
                </h2>
                <p className="text-body text-para-1x font-general-sans font-medium md:text-base md:leading-[27px] lg:text-para-2x">
                  Users who no longer wish to receive the promotional
                  communications that they signed up for via our mailing list
                  may opt-out of receiving thesecommunications by hitting the
                  unsubscribe button at the bottom of our most recent marketing
                  email, replying with &apos;unsubscribe&apos; in the subject
                  lineof the email, emailing us at{" "}
                  <a
                    href="mailto:info@hourofsolution.org"
                    className="link black-link font-bold"
                  >
                    info@hourofsolution.org
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-h-3 font-bold text-[#4C4C4C] mb-3 md:text-xl lg:text-h-3-2x">
                  Analytics
                </h2>
                <p className="text-body text-para-1x font-general-sans font-medium md:text-base md:leading-[27px] lg:text-para-2x">
                  A cookie is a file containing an identifier (a string of
                  letters and numbers) that is sent by a web server to a web
                  browser and is stored by the browser. The identifier is then
                  sent back to the server each time the browser request a page
                  from the server. Cookies may be either ”persistent” cookies or
                  &apos;session&apos; cookies: a persistent cookie will be
                  stored by a web browser and will remain valid until its set
                  expiry date, unless deleted by the user before the expiry
                  date; a session cookie, on the other hand, will expire at the
                  end of the user session, when the web browser is closed.
                  Cookies do not typically contain any information that
                  personally identifies a user, but personal that we store about
                  you may be linked to the information stored in and obtained
                  from cookies.
                </p>
                <ul className="mt-5 flex flex-col space-y-2 list-disc list-inside text-body text-para-1x font-general-sans font-medium md:text-base md:leading-[27px] lg:text-para-2x">
                  <li>
                    Where strictly necessary. These cookies and other
                    technologies are essential to the proper functioning of our
                    website.
                  </li>
                  <li>
                    To remember your preferences. These cookies enable our
                    website to remember information that changes the it behaves
                    or looks, likeyour preferred language or the geographical
                    region that you are in.
                  </li>
                  <li>
                    To analyze visitor behavior statistics. These cookies help
                    us understand how visitors interact with our website by
                    collecting and reporting information anonymously.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-h-3 font-bold text-[#4C4C4C] mb-3 md:text-xl lg:text-h-3-2x">
                  How can you opt out of cookies
                </h2>
                <p className="text-body text-para-1x font-general-sans font-medium md:text-base md:leading-[27px] lg:text-para-2x">
                  To opt-out of our use of cookies, you can instruct your
                  browser, by changing its options, to stop accepting cookies or
                  to prompt you before acceptinga cookie from websites you
                  visit. If you do not accept cookies, however, you may not be
                  able to use all aspects of our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
