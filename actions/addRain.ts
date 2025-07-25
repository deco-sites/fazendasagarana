import type { AppContext } from "site/apps/deco/records.ts";

interface Props {
  month: string;
  year: string;
  value: number;
}

export default async function action({ month, year, value }: Props, _req: Request, {invoke}: AppContext) {
  const drizzle = await invoke.records.loaders.drizzless();

  return name
}
