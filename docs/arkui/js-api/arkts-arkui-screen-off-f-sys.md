# off (System API)

## Modules to Import

```TypeScript
import { screen } from '@kit.ArkUI';
```

<a id="off"></a>
## off

```TypeScript
function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<number>): void
```

Unsubscribes from events related to the screen state.

**Since:** 9

<!--Device-screen-function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<long>): void--><!--Device-screen-function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<long>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'connect' \| 'disconnect' \| 'change' | Yes | Event type.<br>- **connect**: an event indicating that the screen is connected.<br>- **disconnect**: an event indicating that the screen is disconnected.<br>-**change**: an event indicating that the screen state changes. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | Callback used to return the screen ID, which is an integer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

**Example**

```TypeScript
let callback: Callback<number> = (data: number) => {
  console.info(`Succeeded in unregistering the callback for screen changes. Data: ${data}`);
};
// Unregister the specified callback.
screen.off('connect', callback);
// Unregister all the callbacks that have been registered through on().
screen.off('connect');

```


<a id="off-1"></a>
## off

```TypeScript
function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<number>): void
```

Unsubscribes from events related to the screen state.

**Since:** 9

<!--Device-screen-function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<long>): void--><!--Device-screen-function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<long>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'connect' \| 'disconnect' \| 'change' | Yes | Event type.<br>- **connect**: an event indicating that the screen is connected.<br>- **disconnect**: an event indicating that the screen is disconnected.<br>-**change**: an event indicating that the screen state changes. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | Callback used to return the screen ID, which is an integer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

**Example**

```TypeScript
let callback: Callback<number> = (data: number) => {
  console.info(`Succeeded in unregistering the callback for screen changes. Data: ${data}`);
};
// Unregister the specified callback.
screen.off('connect', callback);
// Unregister all the callbacks that have been registered through on().
screen.off('connect');

```


<a id="off-2"></a>
## off

```TypeScript
function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<number>): void
```

Unsubscribes from events related to the screen state.

**Since:** 9

<!--Device-screen-function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<long>): void--><!--Device-screen-function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<long>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'connect' \| 'disconnect' \| 'change' | Yes | Event type.<br>- **connect**: an event indicating that the screen is connected.<br>- **disconnect**: an event indicating that the screen is disconnected.<br>-**change**: an event indicating that the screen state changes. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | Callback used to return the screen ID, which is an integer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

**Example**

```TypeScript
let callback: Callback<number> = (data: number) => {
  console.info(`Succeeded in unregistering the callback for screen changes. Data: ${data}`);
};
// Unregister the specified callback.
screen.off('connect', callback);
// Unregister all the callbacks that have been registered through on().
screen.off('connect');

```

