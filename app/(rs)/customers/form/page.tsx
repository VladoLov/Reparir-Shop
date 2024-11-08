import { getCustomer } from "@/lib/queries/getCustomer";
import BackButton from "@/components/BackButton";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

    //Edit customer form
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
      console.log(customer);
      // put customer form component
    } else {
      // new customer form component
    }
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
  }
}
