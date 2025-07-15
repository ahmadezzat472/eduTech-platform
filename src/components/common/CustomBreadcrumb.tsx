import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { Link, useLocation } from "react-router";

// Helper to format segment: replace dashes, capitalize words
const formatSegment = (segment: string) =>
  segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const CustomBreadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  // Build up the path for each segment
  let accumulatedPath = "";

  return (
    <Breadcrumb>
      <BreadcrumbList className="font-bold text-gray-400 relative z-20">
        {pathSegments.map((segment, idx) => {
          accumulatedPath += `/${segment}`;
          const isLast = idx === pathSegments.length - 1;
          return (
            <>
              {idx > 0 && (
                <BreadcrumbSeparator key={`sep-${idx}`}>
                  <Slash />
                </BreadcrumbSeparator>
              )}
              <BreadcrumbItem key={segment + idx}>
                {isLast ? (
                  <BreadcrumbPage>{formatSegment(segment)}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={accumulatedPath}>{formatSegment(segment)}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
