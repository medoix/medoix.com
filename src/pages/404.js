import React from 'react';

function NotFound() {
  return (
    <div className="relative pt-20 rounded-[14px] shadow-md text-white">
      <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
        <h1 className="_h1 !mb-2">
          PAGE NOT FOUND
        </h1>
        <div className="_subtitle text-lg">
          <span>
            Sorry about that.
          </span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;