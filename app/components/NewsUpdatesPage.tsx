import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';

interface BlogPost {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  comments: string;
  date: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: "/images/resource/news-1.jpg",
      title: "Abandoning Prayer  Why To Avoid At All Costs?",
      excerpt: "There are many variations of passages of lorem Ipsum available islam courses",
      author: "Amir Khan",
      authorImage: "/images/resource/author-2.png",
      comments: "03 Comment",
      date: "October 18 2025"
    },
    {
      id: 2,
      image: "/images/resource/news-2.jpg",
      title: "What Are The Conditions Of The Shahadah In Islam",
      excerpt: "There are many variations of passages of lorem Ipsum available islam courses",
      author: "Amir Khan",
      authorImage: "/images/resource/author-3.png",
      comments: "03 Comment",
      date: "October 18 2025"
    },
    {
      id: 3,
      image: "/images/resource/news-3.jpg",
      title: "Types Of Khawf (Fear) And Tawakkul (Reliance) In Islam",
      excerpt: "There are many variations of passages of lorem Ipsum available islam courses",
      author: "Amir Khan",
      authorImage: "/images/resource/author-4.png",
      comments: "03 Comment",
      date: "October 18 2025"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2">
            OUR NEWS UPDATES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest News & Articles From
            <br />
            The Blog
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-6">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-900 text-sm">
                      {post.author}
                    </span>
                  </div>

                  {/* Read More Button */}
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;