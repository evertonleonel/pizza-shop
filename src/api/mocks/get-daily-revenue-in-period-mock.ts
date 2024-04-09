import { http, HttpResponse } from "msw";
import { GetDaylyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDaylyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    {
      date: "01/01/2024",
      receipt: 1000,
    },
    {
      date: "02/01/2024",
      receipt: 2000,
    },
    {
      date: "03/01/2024",
      receipt: 3000,
    },
  ]);
});
