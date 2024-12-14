import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults";
import CustomerSearch from "./CustomerSearch";
import CustomerTable from "./CustomerTable";

export const metadata = {
  title: "Customer Search",
};

export default async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) return <CustomerSearch />;

  // query database
  const result = await getCustomerSearchResults(searchText);

  //return results
  return (
    <>
      <CustomerSearch />
      {/*  <p>{JSON.stringify(result)}</p> */}
      {result.length ? (
        <CustomerTable data={result} />
      ) : (
        <p className="mt-4">No results found</p>
      )}
    </>
  );
}
