import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function VideoDialog({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc={videoUrl}
        thumbnailSrc={videoUrl}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc={videoUrl}
        thumbnailSrc={videoUrl}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
