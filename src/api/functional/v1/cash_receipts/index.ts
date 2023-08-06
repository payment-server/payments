/**
 * @packageDocumentation
 * @module api.functional.v1.cash_receipts
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../utils/NestiaSimulator";
import type { ITossCashReceipt } from "./../../../structures/ITossCashReceipt";

/**
 * 현금 영수증 발행하기.
 * 
 * @param input 입력 정보
 * @returns 현금 영수증 정보
 * @security basic
 * @author Jeongho Nam - https://github.com/samchon
 * 
 * @controller FakeTossCashReceiptsController.store()
 * @path POST /v1/cash-receipts
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
    connection: IConnection,
    input: store.Input,
): Promise<store.Output> {
    return !!connection.simulate
        ? store.simulate(
              connection,
              input,
          )
        : Fetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              store.ENCRYPTED,
              store.METHOD,
              store.path(),
              input,
          );
}
export namespace store {
    export type Input = Primitive<ITossCashReceipt.IStore>;
    export type Output = Primitive<ITossCashReceipt>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/v1/cash-receipts";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/v1/cash-receipts`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        input: store.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path()
        });
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * 현금 영수증 취소하기.
 * 
 * @param receiptKey 현금 영수증의 {@link ITossCashReceipt.receiptKey}
 * @param input 취소 입력 정보
 * @returns 취소된 현금 영수증 정보
 * @security basic
 * @author Jeongho Nam - https://github.com/samchon
 * 
 * @controller FakeTossCashReceiptsController.cancel()
 * @path POST /v1/cash-receipts/:receiptKey/cancel
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function cancel(
    connection: IConnection,
    receiptKey: string,
    input: cancel.Input,
): Promise<cancel.Output> {
    return !!connection.simulate
        ? cancel.simulate(
              connection,
              receiptKey,
              input,
          )
        : Fetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              cancel.ENCRYPTED,
              cancel.METHOD,
              cancel.path(receiptKey),
              input,
          );
}
export namespace cancel {
    export type Input = Primitive<ITossCashReceipt.ICancel>;
    export type Output = Primitive<ITossCashReceipt>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/v1/cash-receipts/:receiptKey/cancel";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (receiptKey: string): string => {
        return `/v1/cash-receipts/${encodeURIComponent(receiptKey ?? "null")}/cancel`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        receiptKey: string,
        input: cancel.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(receiptKey)
        });
        assert.param("receiptKey")("string")(() => typia.assert(receiptKey));
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}