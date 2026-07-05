# off

## off('systemBarTintChange')

```TypeScript
function off(type: 'systemBarTintChange', callback?: Callback<SystemBarTintState>): void
```

关闭状态栏、导航栏属性变化的监听。

**Since:** 8

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemBarTintChange' | Yes | 监听事件，固定为'systemBarTintChange'，即导航栏、状态栏属性变化事件。 |
| callback | Callback&lt;SystemBarTintState> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |

**Example**

```TypeScript
const callback = (systemBarTintState: window.SystemBarTintState) => {
  // ...
}
try {
  window.on('systemBarTintChange', callback);

  window.off('systemBarTintChange', callback);
  // Unregister all the callbacks that have been registered through on().
  window.off('systemBarTintChange');
} catch (exception) {
  console.error(`Failed to enable or disable the listener for systemBarTint changes. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## off('gestureNavigationEnabledChange')

```TypeScript
function off(type: 'gestureNavigationEnabledChange', callback?: Callback<boolean>): void
```

移除手势导航启用状态变化的监听。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'gestureNavigationEnabledChange' | Yes | 监听事件，固定为'gestureNavigationEnabledChange'，即手势导航启用状态变化事件。 |
| callback | Callback&lt;boolean> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
const callback = (bool: boolean) => {
  // ...
}
try {
  window.on('gestureNavigationEnabledChange', callback);
  window.off('gestureNavigationEnabledChange', callback);
  // Unregister all the callbacks that have been registered through on().
  window.off('gestureNavigationEnabledChange');
} catch (exception) {
  console.error(`Failed to enable or disable the listener for gesture navigation status changes. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## off('waterMarkFlagChange')

```TypeScript
function off(type: 'waterMarkFlagChange', callback?: Callback<boolean>): void
```

移除水印启用状态变化的监听。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'waterMarkFlagChange' | Yes | 监听事件，固定为'waterMarkFlagChange'，即水印启用状态变化事件。 |
| callback | Callback&lt;boolean> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
const callback = (bool: boolean) => {
  // ...
}
try {
  window.on('waterMarkFlagChange', callback);
  window.off('waterMarkFlagChange', callback);
  // Unregister all the callbacks that have been registered through on().
  window.off('waterMarkFlagChange');
} catch (exception) {
  console.error(`Failed to enable or disable the listener for watermark flag changes. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

