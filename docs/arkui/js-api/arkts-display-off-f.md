# off

## off('add' | 'remove' | 'change')

```TypeScript
function off(type: 'add' | 'remove' | 'change', callback?: Callback<long>): void
```

关闭显示设备变化的监听。

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'add' \| 'remove' \| 'change' | Yes | 监听事件。 - type为"add"，表示增加显示设备事件。例如：插入显示器。 - type为"remove"，表示移除显  示设备事件。例如：移除显示器。 - type为"change"，表示改变显示设备事件。例如：显示器方向改变。 |
| callback | Callback&lt;long> | No | 需要取消注册的回调函数。返回监听到的屏幕ID，该参数为整数。若无此参数，则取消注册当前type类型事件监听的所有回调函数。 [since 7 - 19] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
// Unregister all the callbacks that have been registered through on().
display.off('remove');

let callback: Callback<number> = (data: number) => {
  console.info(`Succeeded in unregistering the callback for display remove. Data: ${data}`)
};
// Unregister the specified callback.
display.off('remove', callback);

```

## off('add' | 'remove' | 'change')

```TypeScript
function off(type: 'add' | 'remove' | 'change', callback?: Callback<long>): void
```

关闭显示设备变化的监听。

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'add' \| 'remove' \| 'change' | Yes | 监听事件。 - type为"add"，表示增加显示设备事件。例如：插入显示器。 - type为"remove"，表示移除显  示设备事件。例如：移除显示器。 - type为"change"，表示改变显示设备事件。例如：显示器方向改变。 |
| callback | Callback&lt;long> | No | 需要取消注册的回调函数。返回监听到的屏幕ID，该参数为整数。若无此参数，则取消注册当前type类型事件监听的所有回调函数。 [since 7 - 19] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
// Unregister all the callbacks that have been registered through on().
display.off('remove');

let callback: Callback<number> = (data: number) => {
  console.info(`Succeeded in unregistering the callback for display remove. Data: ${data}`)
};
// Unregister the specified callback.
display.off('remove', callback);

```

## off('add' | 'remove' | 'change')

```TypeScript
function off(type: 'add' | 'remove' | 'change', callback?: Callback<long>): void
```

关闭显示设备变化的监听。

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'add' \| 'remove' \| 'change' | Yes | 监听事件。 - type为"add"，表示增加显示设备事件。例如：插入显示器。 - type为"remove"，表示移除显  示设备事件。例如：移除显示器。 - type为"change"，表示改变显示设备事件。例如：显示器方向改变。 |
| callback | Callback&lt;long> | No | 需要取消注册的回调函数。返回监听到的屏幕ID，该参数为整数。若无此参数，则取消注册当前type类型事件监听的所有回调函数。 [since 7 - 19] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
// Unregister all the callbacks that have been registered through on().
display.off('remove');

let callback: Callback<number> = (data: number) => {
  console.info(`Succeeded in unregistering the callback for display remove. Data: ${data}`)
};
// Unregister the specified callback.
display.off('remove', callback);

```

## off('foldStatusChange')

```TypeScript
function off(type: 'foldStatusChange', callback?: Callback<FoldStatus>): void
```

关闭折叠设备折叠状态变化的监听。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'foldStatusChange' | Yes | 监听事件，固定为'foldStatusChange'，表示折叠设备折叠状态发生变化。 |
| callback | Callback&lt;FoldStatus> | No | 需要取消注册的回调函数。表示折叠设备折叠状态。若无此参数，则取消注册折叠状态变化监听的所有回调函数。 [since 10 - 19] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
// Unregister all the callbacks that have been registered through on().
display.off('foldStatusChange');

let callback: Callback<display.FoldStatus> = (data: display.FoldStatus) => {
  console.info(`unregistering FoldStatus changes callback. Data: ${data}`);
};
// Unregister the specified callback.
display.off('foldStatusChange', callback);

```

## off('foldAngleChange')

```TypeScript
function off(type: 'foldAngleChange', callback?: Callback<Array<double>>): void
```

关闭折叠设备折叠角度变化的监听。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'foldAngleChange' | Yes | 监听事件，固定为'foldAngleChange'表示折叠设备折叠角度发生变化。 |
| callback | Callback&lt;Array&lt;double>> | No | 需要取消注册的回调函数。表示折叠设备屏幕折叠角度值（0度~180度）。若无此参数，则取消注册折叠角度变化监听的所有回调函数  。 [since 12 - 19] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

// Unregister all the callbacks that have been registered through on().
display.off('foldAngleChange');

let callback: Callback<Array<number>> = (angles: Array<number>) => {
  console.info('Listening fold angles length: ' + angles.length);
};
// Unregister the specified callback.
display.off('foldAngleChange', callback);

```

## off('captureStatusChange')

```TypeScript
function off(type: 'captureStatusChange', callback?: Callback<boolean>): void
```

关闭设备的屏幕显示信息是否被获取的监听。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStatusChange' | Yes | 监听事件，固定为'captureStatusChange'表示设备的屏幕显示信息被获取的状态发生变化。 |
| callback | Callback&lt;boolean> | No | 需要取消注册的回调函数。表示设备的屏幕显示信息是否被获取。true表示设备的屏幕显示信息开始被获取，包括处于截屏、投屏、录屏状态，或创建了虚拟屏幕(虚  拟屏幕可能被应用获取屏幕图像)，截屏仅返回一次true；false表示获取结束。若无此参数，则取消注册设备的屏幕显示信息是否存在被获取监听的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

// Unregister all the callbacks that have been registered through on().
display.off('captureStatusChange');

let callback: Callback<boolean> = (captureStatus: boolean) => {
  console.info('Listening capture status: ' + captureStatus);
};
// Unregister the specified callback.
display.off('captureStatusChange', callback);

```

## off('foldDisplayModeChange')

```TypeScript
function off(type: 'foldDisplayModeChange', callback?: Callback<FoldDisplayMode>): void
```

关闭折叠设备屏幕显示模式变化的监听。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'foldDisplayModeChange' | Yes | 监听事件，固定为'foldDisplayModeChange'，表示折叠设备屏幕显示模式发生变化。 |
| callback | Callback&lt;FoldDisplayMode> | No | 需要取消注册的回调函数。表示折叠设备屏幕显示模式。若无此参数，则取消注册屏幕显示模式变化监听的所有回调函数  。 [since 10 - 19] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

// Unregister all the callbacks that have been registered through on().
display.off('foldDisplayModeChange');

let callback: Callback<display.FoldDisplayMode> = (data: display.FoldDisplayMode) => {
  console.info(`unregistering FoldDisplayMode changes callback. Data: ${data}`);
};
// Unregister the specified callback.
display.off('foldDisplayModeChange', callback);

```

## off('brightnessInfoChange')

```TypeScript
function off(type: 'brightnessInfoChange', callback?: BrightnessCallback<long, BrightnessInfo>): void
```

关闭所有屏幕亮度信息状态变化的监听。

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'brightnessInfoChange' | Yes | 监听事件，固定为'brightnessInfoChange'，表示屏幕亮度信息状态发生变化。 |
| callback | BrightnessCallback&lt;long, BrightnessInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 1400003 | This display manager service works abnormally. |
| 1400004 | Parameter error. Possible cause: 1. Invalid parameter range. |

**Example**

```TypeScript
let callback: display.BrightnessCallback<number, display.BrightnessInfo> = (id: number, data: display.BrightnessInfo) => {
  console.info(`Listening enabled ${id}. Data: ${JSON.stringify(data)}`);
};
try {
  display.off('brightnessInfoChange', callback);
} catch (error) {
  console.error(`Failed to unregister brightnessInfoChange listener. Code ${error.code}, message: ${error.message}`);
}

```

