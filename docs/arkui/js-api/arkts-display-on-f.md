# on

## on('add' | 'remove' | 'change')

```TypeScript
function on(type: 'add' | 'remove' | 'change', callback: Callback<long>): void
```

开启显示设备变化的监听。

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'add' \| 'remove' \| 'change' | Yes | 监听事件。 - type为"add"，表示增加显示设备事件。例如：插入显示器。 - type为"remove"，表示移除显  示设备事件。例如：移除显示器。 - type为"change"，表示改变显示设备事件。例如：显示器方向改变。 |
| callback | Callback&lt;long> | Yes | 回调函数。返回监听到的屏幕ID，该参数为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<number> = (data: number) => {
  console.info(`Listening enabled. Data: ${data}`);
};

display.on('add', callback);

```

## on('add' | 'remove' | 'change')

```TypeScript
function on(type: 'add' | 'remove' | 'change', callback: Callback<long>): void
```

开启显示设备变化的监听。

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'add' \| 'remove' \| 'change' | Yes | 监听事件。 - type为"add"，表示增加显示设备事件。例如：插入显示器。 - type为"remove"，表示移除显  示设备事件。例如：移除显示器。 - type为"change"，表示改变显示设备事件。例如：显示器方向改变。 |
| callback | Callback&lt;long> | Yes | 回调函数。返回监听到的屏幕ID，该参数为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<number> = (data: number) => {
  console.info(`Listening enabled. Data: ${data}`);
};

display.on('add', callback);

```

## on('add' | 'remove' | 'change')

```TypeScript
function on(type: 'add' | 'remove' | 'change', callback: Callback<long>): void
```

开启显示设备变化的监听。

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'add' \| 'remove' \| 'change' | Yes | 监听事件。 - type为"add"，表示增加显示设备事件。例如：插入显示器。 - type为"remove"，表示移除显  示设备事件。例如：移除显示器。 - type为"change"，表示改变显示设备事件。例如：显示器方向改变。 |
| callback | Callback&lt;long> | Yes | 回调函数。返回监听到的屏幕ID，该参数为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<number> = (data: number) => {
  console.info(`Listening enabled. Data: ${data}`);
};

display.on('add', callback);

```

## on('foldStatusChange')

```TypeScript
function on(type: 'foldStatusChange', callback: Callback<FoldStatus>): void
```

开启折叠设备折叠状态变化的监听。 本接口监听设备物理折叠状态的变化，如果要监听屏幕显示模式的变化，需要使用 [display.on('foldDisplayModeChange')]display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>) 接口。 两者存在差异，时序上物理折叠状态变化在前，底层会根据物理折叠状态匹配屏幕显示模式状态。 若需监听当前显示内容是显示在折叠设备的内屏还是外屏，请使用 [display.on('foldDisplayModeChange')]display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>) 。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'foldStatusChange' | Yes | 监听事件，固定为'foldStatusChange'，表示折叠设备折叠状态发生变化。 |
| callback | Callback&lt;FoldStatus> | Yes | 回调函数。表示折叠设备折叠状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

/**
 * The callback parameter used for subscription must be passed as an object.
 * If an anonymous function is used for registration, a new underlying object is created each time the function is called, causing memory leakage.
 */
let callback: Callback<display.FoldStatus> = (data: display.FoldStatus) => {
  console.info(`Listening enabled. Data: ${data}`);
};
display.on('foldStatusChange', callback);

```

## on('foldAngleChange')

```TypeScript
function on(type: 'foldAngleChange', callback: Callback<Array<double>>): void
```

开启折叠设备折叠角度变化的监听。如果是双折轴设备，则有两个角度值；在充电口朝下的状态下，从右到左分别是折轴一和折轴二。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'foldAngleChange' | Yes | 监听事件，固定为'foldAngleChange'，表示折叠设备折叠角度发生变化。 |
| callback | Callback&lt;Array&lt;double>> | Yes | 回调函数。表示折叠设备屏幕折叠角度值（0度~180度）。如果是双折轴设备，则数组返回两个角度值，第一个值是折轴一的折叠角度值，第二个值是折  轴二的折叠角度值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<Array<number>> = (angles: Array<number>) => {
  console.info('Listening fold angles length: ' + angles.length);
};
display.on('foldAngleChange', callback);

```

## on('captureStatusChange')

```TypeScript
function on(type: 'captureStatusChange', callback: Callback<boolean>): void
```

开启设备的屏幕显示信息是否被获取的监听。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStatusChange' | Yes | 监听事件，固定为'captureStatusChange'表示设备的屏幕显示信息被获取的状态发生变化。 |
| callback | Callback&lt;boolean> | Yes | 回调函数。表示设备的屏幕显示信息是否被获取。true表示设备的屏幕显示信息开始被获取，包括处于截屏、投屏、录屏状态，或创建了虚拟屏幕(虚拟屏幕可能被  应用获取屏幕图像)，截屏仅返回一次true；false表示获取结束。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<boolean> = (captureStatus: boolean) => {
  console.info('Listening capture status: ' + captureStatus);
};
display.on('captureStatusChange', callback);

```

## on('foldDisplayModeChange')

```TypeScript
function on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>): void
```

开启折叠设备屏幕显示模式变化的监听。 本接口监听设备屏幕显示模式的变化，如果要监听设备物理折叠状态的变化，需要使用 [display.on('foldStatusChange')]display.on(type: 'foldStatusChange', callback: Callback<FoldStatus>)接口。 两者存在差异，时序上物理折叠状态变化在前，底层会根据物理折叠状态匹配屏幕显示模式状态。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'foldDisplayModeChange' | Yes | 监听事件，固定为'foldDisplayModeChange'，表示折叠设备屏幕显示模式发生变化。 |
| callback | Callback&lt;FoldDisplayMode> | Yes | 回调函数。表示折叠设备屏幕显示模式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

/**
 * The callback parameter used for subscription must be passed as an object.
 * If an anonymous function is used for registration, a new underlying object is created each time the function is called, causing memory leakage.
 */
let callback: Callback<display.FoldDisplayMode> = (data: display.FoldDisplayMode) => {
  console.info(`Listening enabled. Data: ${data}`);
}; 
display.on('foldDisplayModeChange', callback);

```

## on('brightnessInfoChange')

```TypeScript
function on(type: 'brightnessInfoChange', callback: BrightnessCallback<long, BrightnessInfo>): void
```

开启所有屏幕亮度信息变化的监听。如果屏幕不支持HDR，监听到的[BrightnessInfo]display.BrightnessInfo对象中的currentHeadroom和maxHeadroom为默认值。虚拟 屏的BrightnessInfo对象中sdrNits为默认值。

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'brightnessInfoChange' | Yes | 监听事件，固定为'brightnessInfoChange'，表示屏幕亮度信息状态发生变化。 |
| callback | BrightnessCallback&lt;long, BrightnessInfo> | Yes | 回调函数。返回屏幕亮度信息改变的displayId(参数1)及对应的屏幕亮度信息(参数2)。 |

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
  display.on('brightnessInfoChange', callback);
} catch (error) {
  console.error(`Failed to register brightnessInfoChange listener. Code ${error.code}, message: ${error.message}`);
}

```

