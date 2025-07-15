import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function VideoDialog({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc={videoUrl}
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc={videoUrl}
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
