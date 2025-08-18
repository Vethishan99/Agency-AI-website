import React from "react";

function Title({ title, desc }) {
  return (
    <>
      <h2>
        <h2 className="text-3xl sm:text-5xl font-medium">{title}</h2>
        <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">
          {desc}
        </p>
      </h2>
    </>
  );
}

export default Title;
