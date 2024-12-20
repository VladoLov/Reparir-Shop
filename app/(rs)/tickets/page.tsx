import React from "react";
import TicketSearch from "./TicketSearch";
import getOpenTickets from "@/lib/queries/getOpenTickets";
import getTicketSearchResults from "@/lib/queries/getTicketSearchResult";
import TicketTable from "./form/TicketTable";

export const metadata = {
  title: "Tickets Search",
};

export default async function Tickets({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;
  if (!searchText) {
    const results = await getOpenTickets();
    return (
      <>
        <TicketSearch />
        {/* <p>{JSON.stringify(results)}</p> */}
        {results.length ? (
          <TicketTable data={results} />
        ) : (
          <p className="mt-4">No open ticket found</p>
        )}
      </>
    );
  }
  const results = await getTicketSearchResults(searchText);
  return (
    <>
      <TicketSearch />
      {/* <p>{JSON.stringify(results)}</p> */}
      {results.length ? (
        <TicketTable data={results} />
      ) : (
        <p className="mt-4">No results found</p>
      )}
    </>
  );
}
