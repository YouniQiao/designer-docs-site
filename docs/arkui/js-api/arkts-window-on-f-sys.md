# on

## on('systemBarTintChange')

```TypeScript
function on(type: 'systemBarTintChange', callback: Callback<SystemBarTintState>): void
```

开启状态栏、导航栏属性变化的监听。

**Since:** 8

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemBarTintChange' | Yes | 监听事件，固定为'systemBarTintChange'，即导航栏、状态栏属性变化事件。 |
| callback | Callback&lt;SystemBarTintState> | Yes | 回调函数。返回当前的状态栏、导航栏信息集合。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**Example**

```TypeScript
try {
  window.on('systemBarTintChange', (data) => {
    console.info('Succeeded in enabling the listener for systemBarTint changes. Data: ' + JSON.stringify(data));
  });
} catch (exception) {
  console.error(`Failed to enable the listener for systemBarTint changes. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## on('gestureNavigationEnabledChange')

```TypeScript
function on(type: 'gestureNavigationEnabledChange', callback: Callback<boolean>): void
```

添加手势导航启用状态变化的监听。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'gestureNavigationEnabledChange' | Yes | 监听事件，固定为'gestureNavigationEnabledChange'，即手势导航启用状态变化事件。 |
| callback | Callback&lt;boolean> | Yes | 回调函数。返回当前手势导航的启用状态。true表示手势导航状态变化为启用；false表示手势导航状态变化为禁用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types.  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
try {
  window.on('gestureNavigationEnabledChange', (data) => {
    console.info(`Succeeded in enabling the listener for gesture navigation status changes. Data: ${data}`);
  });
} catch (exception) {
  console.error(`Failed to enable the listener for gesture navigation status changes. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## on('waterMarkFlagChange')

```TypeScript
function on(type: 'waterMarkFlagChange', callback: Callback<boolean>): void
```

添加水印启用状态变化的监听。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'waterMarkFlagChange' | Yes | 监听事件，固定为'waterMarkFlagChange'，即水印启用状态变化事件。 |
| callback | Callback&lt;boolean> | Yes | 回调函数。返回当前水印的启用状态。true表示当前已启用水印；false表示当前未启用水印。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
try {
  window.on('waterMarkFlagChange', (data) => {
    console.info(`Succeeded in enabling the listener for watermark flag changes. Data: ${data}`);
  });
} catch (exception) {
  console.error(`Failed to enable the listener for watermark flag changes. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

