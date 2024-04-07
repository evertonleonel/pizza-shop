import { api } from "@/lib/axios";

export interface GetDailyRevenueInPeriodQuery {
  from?: Date;
  to?: Date;
}

export type GetDaylyRevenueInPeriodResponse = {
  date: string;
  receipt: number;
}[];

export async function getDaylyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDaylyRevenueInPeriodResponse>(
    "/metrics/dayly-receipt-in-period",
    {
      params: {
        from,
        to,
      },
    },
  );

  return response.data;
}
