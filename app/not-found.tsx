import { title } from "@/components/utils/primitives";
import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import NextLink from "next/link";

function NotFoundPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-20 gap-4">
      <span className={title({ color: "pink" })}>404 - Page Not Found</span>
      <p>{siteConfig.errors.pageNotFound}</p>

      <NextLink href="/">
        <Button variant="bordered" color="default" radius="lg">
          Go to Home
        </Button>
      </NextLink>
    </div>
  );
}

export default NotFoundPage;