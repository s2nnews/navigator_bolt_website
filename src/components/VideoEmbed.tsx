interface VideoEmbedProps {
  src: string;
  title?: string;
  aspectRatio?: '16/9' | '4/3';
}

export function VideoEmbed({ src, title, aspectRatio = '16/9' }: VideoEmbedProps) {
  const paddingClass = aspectRatio === '16/9' ? 'pt-[56.25%]' : 'pt-[75%]';

  return (
    <div className="my-8">
      <div className={`relative ${paddingClass} bg-[#2d2d2d] rounded-lg overflow-hidden`}>
        <iframe
          src={src}
          title={title || 'Video'}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {title && <p className="text-sm text-gray-400 mt-2 text-center">{title}</p>}
    </div>
  );
}
