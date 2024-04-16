import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogData = useLoaderData();

  return (
    <div>
        <Helmet>
            <title>Blog</title>
        </Helmet>
      <h1 className="text-[25px] text-center font-merriweather font-semibold mt-[50px]">
        Recent Blog
      </h1>

      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={blogData[0].image}
              alt={blogData[0].title}
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogData[0].title}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {blogData[0].date}
              </span>
              <p>{blogData[0].description}</p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeInUpBig">
            {blogData.slice(1).map((blog) => (
              <a
                key={blog.id}
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={blog.image}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {blog.title}
                  </h3>
                  <span className="text-xs dark:text-gray-600">
                    {blog.date}
                  </span>
                  <div className="space-x-1">
                    {blog.tags.map((tag, index) => (
                      <p className="text-blue-700" key={index}>#{tag}</p>
                    ))}
                  </div>
                  <p>{blog.description}</p>
                  <p className="font-merriweather">Author : {blog.author}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
