import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setIsDesktop(window.innerWidth > 1024);
    }
  }, []);

  return (
    <Layout title="Home" description="medoix personal website">
      <Head>
        <meta property="og:title" content="Medoix" />
        <meta property="og:description" content="Where you can find my posts, personal projects and everything in between."/>
        <meta property="og:image" content={`./img/portrait.png`} />{' '}
        <meta property="og:url" content={'http://medoix.com'} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center items-center md:mt-16">
          <img className="max-w-[200px]" src="./img/portrait.png" alt="medoix"></img>
          <div className="_subtitle mt-8 text-lg">
            Pentester | DevOps | DevSecOps | Bug Hunter | Hacker of Things
          </div>
          <div className="flex-none overflow-y-scroll rounded-sm mx-auto text-base mt-4">
            <div className="flex mx-auto gap-8 grid-cols-2 justify-center">
              <div className="flex justify-center items-center mx-auto mt-4">
                <a
                  href="https://github.com/medoix"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="!no-underline"
                >
                  <div className="flex rounded-xl p-2 w-32 bg-[#0088CC] hover:bg-grey-200 hover:dark:bg-grey-200 hover:text-[#0088CC] hover:no-underline mx-auto text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={1}
                      viewBox="0 0 24 24"
                      className="mx-auto"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center mx-auto mt-4">
                <a
                  href="https://gitlab.com/medoix"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="!no-underline"
                >
                  <div className="flex rounded-xl p-2 w-32 bg-[#0088CC] hover:bg-grey-200 hover:dark:bg-grey-200 hover:text-[#0088CC] hover:no-underline mx-auto text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={1}
                      viewBox="0 0 25 25"
                      className="mx-auto"
                    >
                      <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center mx-auto mt-4">
                <a
                  href="https://twitter.com/medoix"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="!no-underline"
                >
                  <div className="flex rounded-xl p-2 w-32 bg-[#0088CC] hover:bg-grey-200 hover:dark:bg-grey-200 hover:text-[#0088CC] hover:no-underline mx-auto text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={1}
                      viewBox="0 0 24 24"
                      className="mx-auto"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center mx-auto mt-4">
                <a
                  href="https://www.linkedin.com/in/medoix/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="!no-underline"
                >
                  <div className="flex rounded-xl p-2 w-32 bg-[#0088CC] hover:bg-grey-200 hover:dark:bg-grey-200 hover:text-[#0088CC] hover:no-underline mx-auto justify-center items-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      strokeWidth={1}
                      viewBox="0 0 24 24"
                      className="mx-auto"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center mx-auto mt-4">
                <a
                  href="https://stackoverflow.com/users/192725/medoix"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="!no-underline"
                >
                  <div className="flex rounded-xl p-2 w-32 bg-[#0088CC] hover:bg-grey-200 hover:dark:bg-grey-200 hover:text-[#0088CC] hover:no-underline mx-auto justify-center items-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      strokeWidth={1}
                      viewBox="0 0 24 24"
                      className="mx-auto"
                    >
                      <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-16 mx-auto grid-cols-2 justify-center">             
          <img src="https://github-stats-alpha.vercel.app/api?username=medoix&cc=000&tc=fff&ic=fff&bc=fff" />
        </div>

        {/* <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center mb-16">
          <h1 className="_h1 !mb-2">Let's catch up!</h1>
          <div className="flex-none overflow-y-scroll rounded-sm text-center mx-auto text-lg p-2 pr-8 mb-2">
            <span>
              I am available for 15 minutes calls as long as you set an agenda.
            </span>
            <p>(and it is not a sales call)</p>
          </div>
          <div className="flex justify-center items-center mx-auto mt-2">
            <a
              href="https://cal.com/medoix/15min"
              target="_blank"
              rel="noreferrer noopener"
              className="flex justify-center items-center mx-auto"
            >
              <div className="flex rounded-xl p-2 w-32 bg-[#0088CC] hover:bg-grey-200 hover:dark:bg-grey-200 hover:text-[#0088CC] hover:no-underline mx-auto text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={101}
                  height={22}
                  fill="currentColor"
                  className="mx-auto"
                >
                  <path d="M10.058 20.817C4.321 20.817 0 16.277 0 10.67 0 5.046 4.1.468 10.058.468c3.163 0 5.351.971 7.061 3.195l-2.758 2.299c-1.159-1.234-2.556-1.85-4.303-1.85-3.88 0-6.013 2.97-6.013 6.558 0 3.588 2.336 6.503 6.013 6.503 1.729 0 3.2-.616 4.358-1.85l2.721 2.392c-1.636 2.13-3.88 3.102-7.079 3.102ZM29.016 5.886h3.714v14.575h-3.714v-2.13c-.772 1.514-2.06 2.523-4.523 2.523-3.935 0-7.08-3.42-7.08-7.624 0-4.205 3.145-7.624 7.08-7.624 2.445 0 3.75 1.009 4.523 2.522V5.886Zm.11 7.344c0-2.28-1.563-4.167-4.027-4.167-2.372 0-3.916 1.906-3.916 4.167 0 2.205 1.544 4.167 3.916 4.167 2.446 0 4.027-1.906 4.027-4.167ZM35.36 0h3.714v20.443H35.36V0ZM40.73 18.518c0-1.196.955-2.205 2.26-2.205a2.18 2.18 0 0 1 2.226 2.205c0 1.233-.938 2.242-2.225 2.242a2.231 2.231 0 0 1-2.262-2.242ZM59.43 18.107c-1.38 1.681-3.476 2.747-5.958 2.747-4.432 0-7.686-3.42-7.686-7.624 0-4.205 3.254-7.624 7.686-7.624 2.39 0 4.468 1.009 5.847 2.597l-2.868 2.41c-.717-.896-1.655-1.569-2.98-1.569-2.371 0-3.916 1.906-3.916 4.167s1.545 4.167 3.917 4.167c1.434 0 2.427-.747 3.163-1.757l2.795 2.486ZM59.742 13.23c0-4.205 3.255-7.624 7.686-7.624 4.432 0 7.686 3.42 7.686 7.624s-3.254 7.624-7.686 7.624c-4.431-.02-7.686-3.42-7.686-7.624Zm11.603 0c0-2.28-1.545-4.167-3.917-4.167-2.372-.019-3.916 1.887-3.916 4.167 0 2.26 1.544 4.167 3.916 4.167s3.917-1.906 3.917-4.167ZM100.232 11.548v8.895h-3.714v-7.98c0-2.522-1.177-3.606-2.942-3.606-1.655 0-2.832.823-2.832 3.607v7.979H87.03v-7.98c0-2.522-1.195-3.606-2.942-3.606-1.655 0-3.108.823-3.108 3.607v7.979h-3.714V5.868h3.714v2.018c.772-1.57 2.17-2.355 4.321-2.355 2.041 0 3.751 1.01 4.69 2.71.937-1.738 2.316-2.71 4.817-2.71 3.052.019 5.424 2.336 5.424 6.017Z" />
                </svg>
              </div>
            </a>
          </div>
        </div> */}
      </main>
    </Layout>
  );
}
