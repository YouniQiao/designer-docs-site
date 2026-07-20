# on (System API)

## Modules to Import

```TypeScript
import { screen } from '@kit.ArkUI';
```

## on

```TypeScript
function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<number>): void
```

Subscribes to events related to the screen state.

**Since:** 9

<!--Device-screen-function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<long>): void--><!--Device-screen-function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<long>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'connect' \| 'disconnect' \| 'change' | Yes | Event type.<br>- **connect**: an event indicating that the screen is connected.<br>- **disconnect**: an event indicating that the screen is disconnected.<br>-**change**: an event indicating that the screen state changes. |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | Callback used to return the screen ID, which is an integer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

**Example**

```TypeScript
let callback: Callback<number> = (data: number) => {
  console.info(`Succeeded in registering the callback for screen changes. Data: ${data}`);
};
// Subscribe to the screen connection event.
screen.on('connect', callback);

```


## on

```TypeScript
function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<number>): void
```

Subscribes to events related to the screen state.

**Since:** 9

<!--Device-screen-function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<long>): void--><!--Device-screen-function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<long>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'connect' \| 'disconnect' \| 'change' | Yes | Event type.<br>- **connect**: an event indicating that the screen is connected.<br>- **disconnect**: an event indicating that the screen is disconnected.<br>-**change**: an event indicating that the screen state changes. |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | Callback used to return the screen ID, which is an integer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

**Example**

```TypeScript
let callback: Callback<number> = (data: number) => {
  console.info(`Succeeded in registering the callback for screen changes. Data: ${data}`);
};
// Subscribe to the screen connection event.
screen.on('connect', callback);

```


## on

```TypeScript
function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<number>): void
```

Subscribes to events related to the screen state.

**Since:** 9

<!--Device-screen-function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<long>): void--><!--Device-screen-function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<long>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'connect' \| 'disconnect' \| 'change' | Yes | Event type.<br>- **connect**: an event indicating that the screen is connected.<br>- **disconnect**: an event indicating that the screen is disconnected.<br>-**change**: an event indicating that the screen state changes. |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | Callback used to return the screen ID, which is an integer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

**Example**

```TypeScript
let callback: Callback<number> = (data: number) => {
  console.info(`Succeeded in registering the callback for screen changes. Data: ${data}`);
};
// Subscribe to the screen connection event.
screen.on('connect', callback);

```

