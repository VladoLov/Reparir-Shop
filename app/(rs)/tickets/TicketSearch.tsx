import Form from "next/form";
import { Input } from "@/components/ui/input";
import SearchButton1 from "@/components/SearchButton1";

export default function TicketSearch() {
  return (
    <Form action="/tickets" className="flex gap-2 items-center">
      <Input
        name="searchText"
        type="text"
        placeholder="Search Tickets"
        className="w-full"
        autoFocus
      />
      <SearchButton1 />
    </Form>
  );
}
