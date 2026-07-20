# HttpInterceptorChain

Defines an HTTP Interceptor chain.

**Since:** 22

<!--Device-http-export class HttpInterceptorChain--><!--Device-http-export class HttpInterceptorChain-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@kit.NetworkKit';
```

## addChain

```TypeScript
public addChain(chain: HttpInterceptor[]): boolean
```

Add an interceptor chain to the HTTP client.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-HttpInterceptorChain-public addChain(chain: HttpInterceptor[]): boolean--><!--Device-HttpInterceptorChain-public addChain(chain: HttpInterceptor[]): boolean-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chain | [HttpInterceptor](arkts-network-http-httpinterceptor-i.md)[] | Yes | The chain of interceptors. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the chain is added successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2300801 | Parameter type not supported by the interceptor. |
| 2300802 | Duplicated interceptor type in the chain. |
| [2300999](../errorcode-net-http.md#2300999-internal-error) | Internal error. |

## apply

```TypeScript
public apply(httpRequest: HttpRequest): boolean
```

Attach the chain to the target http request.Only one chain can be attached to a given request.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-HttpInterceptorChain-public apply(httpRequest: HttpRequest): boolean--><!--Device-HttpInterceptorChain-public apply(httpRequest: HttpRequest): boolean-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| httpRequest | [HttpRequest](arkts-network-connection-httprequest-t.md) | Yes | Initiates an HTTP request to a given URL. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the interceptor chain is attached successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2300801 | Parameter type not supported by the interceptor. |
| [2300999](../errorcode-net-http.md#2300999-internal-error) | Internal error. |

## getChain

```TypeScript
public getChain(): HttpInterceptor[]
```

The method to get the chain of interceptors.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-HttpInterceptorChain-public getChain(): HttpInterceptor[]--><!--Device-HttpInterceptorChain-public getChain(): HttpInterceptor[]-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [HttpInterceptor](arkts-network-http-httpinterceptor-i.md)[] | The chain of interceptors. |

