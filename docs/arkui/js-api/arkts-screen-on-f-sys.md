# on

## on

```TypeScript
function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<long>): void
```

开启屏幕状态变化的监听。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'connect' \| 'disconnect' \| 'change' | Yes | 监听事件。 -eventType为"connect"表示屏幕连接事件。 -eventType为"  disconnect"表示断开屏幕连接事件。 -eventType为"change"表示屏幕状态改变事件。 |
| callback | Callback&lt;long> | Yes | 回调函数。返回屏幕的id，该参数为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

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
function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<long>): void
```

开启屏幕状态变化的监听。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'connect' \| 'disconnect' \| 'change' | Yes | 监听事件。 -eventType为"connect"表示屏幕连接事件。 -eventType为"  disconnect"表示断开屏幕连接事件。 -eventType为"change"表示屏幕状态改变事件。 |
| callback | Callback&lt;long> | Yes | 回调函数。返回屏幕的id，该参数为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

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
function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<long>): void
```

开启屏幕状态变化的监听。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'connect' \| 'disconnect' \| 'change' | Yes | 监听事件。 -eventType为"connect"表示屏幕连接事件。 -eventType为"  disconnect"表示断开屏幕连接事件。 -eventType为"change"表示屏幕状态改变事件。 |
| callback | Callback&lt;long> | Yes | 回调函数。返回屏幕的id，该参数为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
let callback: Callback<number> = (data: number) => {
  console.info(`Succeeded in registering the callback for screen changes. Data: ${data}`);
};
// Subscribe to the screen connection event.
screen.on('connect', callback);

```

