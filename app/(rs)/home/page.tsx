/* export const metadata = {
  title: "Home",
}; */
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/tickets");
}
