/**
 * @packageDocumentation
 * @module api.functional.payments.webhooks
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { IIamportPayment } from "iamport-server-api/lib/structures/IIamportPayment";
import type { ITossPaymentWebhook } from "toss-payments-server-api/lib/structures/ITossPaymentWebhook";

/**
 * @danger
 * @controller PaymentWebhooksController.iamport
 * @path POST /payments/webhooks/iamport
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function iamport(
  connection: IConnection,
  input: IIamportPayment.IWebhook,
): Promise<void> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...iamport.METADATA,
      template: iamport.METADATA.path,
      path: iamport.path(),
    },
    input,
  );
}
export namespace iamport {
  export type Input = IIamportPayment.IWebhook;

  export const METADATA = {
    method: "POST",
    path: "/payments/webhooks/iamport",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 201,
  } as const;

  export const path = () => "/payments/webhooks/iamport";
}

/**
 * @internal
 * @controller PaymentWebhooksController.toss
 * @path POST /payments/webhooks/toss
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function toss(
  connection: IConnection,
  input: ITossPaymentWebhook,
): Promise<void> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...toss.METADATA,
      template: toss.METADATA.path,
      path: toss.path(),
    },
    input,
  );
}
export namespace toss {
  export type Input = ITossPaymentWebhook;

  export const METADATA = {
    method: "POST",
    path: "/payments/webhooks/toss",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 201,
  } as const;

  export const path = () => "/payments/webhooks/toss";
}
