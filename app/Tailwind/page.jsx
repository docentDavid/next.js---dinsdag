import React from "react";

export default function Tailwind() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-indigo-600 mb-6">
          Next.js with Tailwind CSS
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Tailwind CSS is a utility-first CSS framework that allows you to
          create custom designs without leaving your HTML. It provides a set of
          pre-defined classes that can be combined to build complex layouts.
        </p>
        <p className="text-lg text-gray-700">
          Integrating Tailwind CSS with Next.js is straightforward, and it
          enhances the styling capabilities of your application significantly.
        </p>
      </div>
    </main>
  );
}
