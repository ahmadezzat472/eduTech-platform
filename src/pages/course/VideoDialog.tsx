import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

function getYouTubeEmbedUrl(url: string): string {
  const videoIdMatch = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([^&?]+)/
  );
  const videoId = videoIdMatch ? videoIdMatch[1] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

export default function VideoDialog({ videoUrl }: { videoUrl: string }) {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc={embedUrl}
        thumbnailSrc={`https://img.youtube.com/vi/${embedUrl
          .split("/")
          .pop()}/hqdefault.jpg`}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc={embedUrl}
        thumbnailSrc={`https://img.youtube.com/vi/${embedUrl
          .split("/")
          .pop()}/hqdefault.jpg`}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
