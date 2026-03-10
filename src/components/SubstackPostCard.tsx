import { Calendar, ArrowUpRight } from 'lucide-react';
import { SubstackPost, formatPostDate } from '../utils/substack';

interface SubstackPostCardProps {
  post: SubstackPost;
  variant?: 'full' | 'compact';
}

export function SubstackPostCard({ post, variant = 'full' }: SubstackPostCardProps) {
  if (variant === 'compact') {
    return (
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl overflow-hidden hover:border-[#FF9500]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9500]/5"
      >
        {post.image && (
          <div className="h-40 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <Calendar size={12} />
            <span>{formatPostDate(post.pubDate)}</span>
          </div>
          <h3 className="font-bold text-base text-white group-hover:text-[#FF9500] transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-1 text-[#FF9500] text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            Read on Substack
            <ArrowUpRight size={14} />
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl overflow-hidden hover:border-[#FF9500]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9500]/5"
    >
      <div className="flex flex-col md:flex-row">
        {post.image && (
          <div className="md:w-80 h-48 md:h-auto flex-shrink-0 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            <span className="bg-[#FF9500]/10 text-[#FF9500] px-3 py-1 rounded-full text-xs font-medium">
              Newsletter
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar size={13} />
              <span>{formatPostDate(post.pubDate)}</span>
            </div>
            <span className="text-gray-600">by {post.author}</span>
          </div>
          <h2 className="text-2xl font-bold text-white group-hover:text-[#FF9500] transition-colors mb-3">
            {post.title}
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 text-[#FF9500] font-semibold text-sm">
            Read Full Post
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
}
