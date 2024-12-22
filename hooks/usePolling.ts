import { useEffect } from "react";
import { useRouter } from "next/navigation";

function usePolling(ms: number = 6000, searchParams: string | null) {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("interval running");

      if (!searchParams) {
        console.log("refreshing data");
        router.refresh();
      }
    }, ms);

    return () => clearInterval(intervalId);
  }, [searchParams, ms]); //eslint-disable-line react-hooks/exhaustive-deps
}

export default usePolling;
