/**
 * @packageDocumentation
 * @module api.functional.payments.internal
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { EncryptedFetcher } from "@nestia/fetcher/lib/EncryptedFetcher";

import type { IPaymentWebhookHistory } from "../../../structures/payments/IPaymentWebhookHistory";

/**
 * 
 * @internal
 * 
 * @controller PaymentInternalController.webhook
 * @path POST /payments/internal/webhook
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function webhook(
    connection: IConnection,
    input: webhook.Input,
): Promise<void> {
    return EncryptedFetcher.fetch(
        {
            ...connection,
            headers: {
                ...(connection.headers ?? {}),
                "Content-Type": "text/plain",
            },
        },
        {
            ...webhook.METADATA,
            path: webhook.path(),
        } as const,
        input,
    );
}
export namespace webhook {
    export type Input = Primitive<IPaymentWebhookHistory>;

    export const METADATA = {
        method: "POST",
        path: "/payments/internal/webhook",
        request: {
            type: "text/plain",
            encrypted: true
        },
        response: {
            type: "text/plain",
            encrypted: true,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/payments/internal/webhook`;
    }
}