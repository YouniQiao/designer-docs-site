# WebMessagePort

Define html web message port.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@ohos.web.webview';
```

## close

```TypeScript
close(): void
```

Close port.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## onMessageEvent

```TypeScript
onMessageEvent(callback: (result: WebMessage) => void): void
```

Receive message from other port.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (result: WebMessage) =&gt; void | Yes | Callback function for receiving messages. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100006](../errorcode-webview.md#17100006-message-port-callback-cannot-be-registered) | Failed to register a message event for the port. |

## onMessageEventExt

```TypeScript
onMessageEventExt(callback: (result: WebMessageExt) => void): void
```

Receive message from other port.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (result: WebMessageExt) =&gt; void | Yes | Callback function for receiving messages. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100006](../errorcode-webview.md#17100006-message-port-callback-cannot-be-registered) | Failed to register a message event for the port. |

## postMessageEvent

```TypeScript
postMessageEvent(message: WebMessage): void
```

Post a message to other port.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | WebMessage | Yes | Message to send. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100010](../errorcode-webview.md#17100010-failure-to-send-messages-through-a-port) | Failed to post messages through the port. |

## postMessageEventExt

```TypeScript
postMessageEventExt(message: WebMessageExt): void
```

Post a message to other port.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | WebMessageExt | Yes | Message to send. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100010](../errorcode-webview.md#17100010-failure-to-send-messages-through-a-port) | Failed to post messages through the port. |

## isExtentionType

```TypeScript
isExtentionType?: boolean
```

The flag indicates whether more formats are supported than string and array buffers.

**Type:** boolean

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

