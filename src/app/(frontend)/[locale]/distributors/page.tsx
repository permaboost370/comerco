import { getDistributors } from "@/lib/distributors";
import DistributorsView from "./distributors-view";

export default async function DistributorsPage() {
  const distributors = await getDistributors();
  return <DistributorsView distributors={distributors} />;
}
