import BrandedLoader from "@/components/common/Loading/BrandedLoader";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[999] grid place-items-center h-dvh w-dvw bg-gray-100">
      <BrandedLoader />
    </div>
  );
};

export default Loading;
