import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import BackButton from "@/components/BackButton";

export default async function TicketFormAge({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;

    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Ticket ID or Customer ID ${customerId} require to load ticket form!
            <BackButton title="Go Back" variant="default" />
          </h2>
        </>
      );
    }

    // New ticket form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID ${customerId} not found!
              <BackButton title="Go Back" variant="default" />
            </h2>
          </>
        );
      }
      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID ${customerId} is not active!
              <BackButton title="Go Back" variant="default" />
            </h2>
          </>
        );
      }

      //return ticket form
      console.log(customer);
    }
    //edit ticket form
    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));
      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Ticket ID ${ticketId} not found!
              <BackButton title="Go Back" variant="default" />
            </h2>
          </>
        );
      }
      const customer = await getCustomer(ticket.customerId);

      // return ticket form
      console.log("ticket: ", ticket);
      console.log("customer: ", customer);
    }
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
  }
}
