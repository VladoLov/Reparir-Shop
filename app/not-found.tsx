import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl">Page Not Found</h2>
        <Image
          className="m-0 rounded-xl"
          src="/not-found-1024x1024.png"
          alt="Page Not Found"
          width={300}
          height={300}
          sizes="300px"
          priority
          title="Page Not Found"
        />

        <Link href="/tickets" className="text-center hover:underline">
          <h3>Return Home</h3>
        </Link>
      </div>
    </div>
  );
}
