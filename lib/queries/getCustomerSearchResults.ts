import { db } from "@/db";
import { customers } from "@/db/schema";
import { ilike, or, sql } from "drizzle-orm";

export async function getCustomerSearchResults(searchText: string) {
  const results = await db
    .select()
    .from(customers)
    .where(
      or(
        ilike(customers.firstName, `%${searchText}%`),
        ilike(customers.lastName, `%${searchText}%`),
        ilike(customers.email, `%${searchText}%`),
        ilike(customers.phone, `%${searchText}%`),
        // ilike(customers.address1, `%${searchText}%`),
        // ilike(customers.address2, `%${searchText}%`),
        ilike(customers.city, `%${searchText}%`),
        //  ilike(customers.state, `%${searchText}%`),
        ilike(customers.zip, `%${searchText}%`),
        // ilike(customers.notes, `%${searchText}%`)
        sql`lower(concat(${customers.firstName}, ' ', ${
          customers.lastName
        })) LIKE ${`${searchText.toLowerCase().replace(" ", "%")}%`}`
      )
    );
  return results;
}
// sql lower have longer search time in ms, almost double
