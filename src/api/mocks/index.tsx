import { env } from "@/env";
import { setupWorker } from "msw/browser";

export const worker = setupWorker();
// o setup worker quando chamado não tem as requisições interceptadas ainda

export async function enableMSW() {
  if (env.MODE !== "test") return;
  //só vamos ligar os mocks caso estivermos em test

  await worker.start();
  // a partir daqui todas as requisições serão interceptadas
}
