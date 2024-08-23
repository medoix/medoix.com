import React from 'react';

const projects = [
  {
    title: 'medoix.com',
    link: 'https://github.com/medoix/medoix.com',
    image: '/projects/medoix-com.png',
    desc: 'This website you are viewing now.. it is a staticaly generated website with an automated workflow to generate the static conent and serve it.',
    language: 'Javascript',
    article: '',
    active: true,
  },
  {
    title: 'GoodReads JSON API',
    link: 'https://github.com/medoix/goodreads-json',
    image: '/projects/goodreads-json.png',
    desc: 'Third party GoodReads API returning JSON instead of XML',
    language: 'JavaScript',
    article: '',
    active: true,
  },
];

export default function Projects() {
  return (
    <div className="mx-auto mt-8">
      {projects.map((project) => (
        <div className='flex my-4 mx-2 border-[1px] p-2 rounded border-[#0088CC]'>
          <div className='flex justify-start items-center p-4'>
            <img
              src={project.image}
              alt={project.title}
              className="w-[200px] object-cover"
            />
          </div>
          <div className='flex flex-col justify-start items-start ml-0 text-left p-2'>
            <div>
              <div className="title md:text-lg font-bold">
                {project.title}
              </div>
              <div className="subtitle text-sm flex mt-2 leading-tight max-w-[400px]">
                {project.desc}
              </div>
            </div>
            <div className="flex mt-4 mb-2 items-start justify-end">
              <a
                target="_blank"
                rel="noreferrer"
                href={project.link}
                className="mr-4 !no-underline"
              >
                <button
                  className="flex rounded-xl p-2 whitespace-nowrap text-sm font-semibold bg-[#0088CC] hover:bg-grey-300 hover:dark:bg-grey-200 hover:text-[#0088CC] hover:no-underline"
                  type="button"
                >
                  Source code
                </button>
              </a>
              {project.article && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.article}
                >
                  <button
                    className="flex rounded-xl p-2 whitespace-nowrap text-sm"
                    type="button"
                  >
                    Read more
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};