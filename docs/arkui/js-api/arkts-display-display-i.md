# Display

屏幕实例。描述Display对象的属性和方法。 下列API示例中都需先使用[getAllDisplays()]display.getAllDisplays(callback: AsyncCallback<Array<Display>>)、 [getDefaultDisplaySync()]display.getDefaultDisplaySync中的任一方法获取到Display实例，再通过此实例调用对应方法。

**Since:** 7

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

## getAvailableArea

```TypeScript
getAvailableArea(): Promise<Rect>
```

获取当前设备屏幕的可用区域，使用Promise异步回调。 可用区域是扣除系统UI（如状态栏、Dock栏）后，可供应用程序自由使用的区域。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Rect> | Promise对象。返回当前屏幕可用矩形区域。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1400001 | Invalid display or screen. Possible cause:  1. This display is abnormal.  2. Internal task error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: display.Display | null = null;
try {
  displayClass = display.getDefaultDisplaySync();
  let promise = displayClass.getAvailableArea();
  promise.then((data) => {
    console.info(`Succeeded in getting the available area in this display. data: ${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to get the available area in this display. Code: ${err.code}, message: ${err.message}`);
  })
} catch (exception) {
  console.error(`Failed to obtain the default display object. Code: ${exception.code}, message: ${exception.message}`);
}

```

## getCutoutInfo

```TypeScript
getCutoutInfo(callback: AsyncCallback<CutoutInfo>): void
```

获取挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。使用callback异步回调。建议应用布局规避该区域。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CutoutInfo> | Yes | 回调函数。返回不可用屏幕区域对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1400001 | Invalid display or screen. Possible cause:  1. This display is abnormal.  2. Internal task error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: display.Display | null = null;
displayClass = display.getDefaultDisplaySync();

displayClass.getCutoutInfo((err: BusinessError, data: display.CutoutInfo) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to get cutoutInfo. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in getting cutoutInfo. Data: ${JSON.stringify(data)}`);
});

```

## getCutoutInfo

```TypeScript
getCutoutInfo(): Promise<CutoutInfo>
```

获取挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。使用Promise异步回调。建议应用布局规避该区域。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CutoutInfo> | Promise对象。返回描述不可用屏幕区域的CutoutInfo对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1400001 | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: display.Display | null = null;
displayClass = display.getDefaultDisplaySync();
let promise: Promise<display.CutoutInfo> = displayClass.getCutoutInfo();
promise.then((data: display.CutoutInfo) => {
  console.info(`Succeeded in getting cutoutInfo. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get cutoutInfo. Code: ${err.code}, message: ${err.message}`);
});

```

## getDisplayCapability

```TypeScript
getDisplayCapability(): string
```

Get current display capability, including foldstatus, displaymode, rotation, and orientation information.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| string | Indicates the current foldstatus, displaymode, rotation, and orientation information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.Function getDisplayCapability can not work correctly due  to limited device capabilities. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |

## getLiveCreaseRegion

```TypeScript
getLiveCreaseRegion(): FoldCreaseRegion
```

获取当前显示模式下的实时折痕区域。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| FoldCreaseRegion | 返回设备在当前显示模式下的折叠折痕区域。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
let displayClass: display.Display | null = null;
try {
  displayClass = display.getDefaultDisplaySync();
  let data: display.FoldCreaseRegion = displayClass.getLiveCreaseRegion();
  console.info(`Succeeded in getting the live crease region. Data: ${JSON.stringify(data)}`);
} catch (exception) {
  console.error(`Failed to get the live crease region. Code: ${exception.code}, message: ${exception.message}`);
}

```

## getRoundedCorner

```TypeScript
getRoundedCorner(): Array<RoundedCorner>
```

获取屏幕的圆角信息。屏幕圆角信息由产品配置决定，只有配置了屏幕圆角半径的物理屏幕才能返回圆角信息，否则返回空数组，虚拟屏同样返回空数组。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;RoundedCorner> | 返回当前屏幕的圆角信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: display.Display | null = null;
try {
  displayClass = display.getDefaultDisplaySync();
  let data = displayClass.getRoundedCorner();
  console.info(`Succeeded in getting rounded corner. Data: ${JSON.stringify(data)}`);
} catch (error) {
  console.error(`Failed to get rounded corner. Code: ${error.code}, message: ${error.message}`);
}

```

## hasImmersiveWindow

```TypeScript
hasImmersiveWindow(callback: AsyncCallback<boolean>): void
```

判断当前屏幕是否包含沉浸式窗口，使用callback异步回调。

**Since:** 11

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示当前屏幕包含沉浸式窗口，false表示不包含。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { display } from '@kit.ArkUI';

let displayClass: display.Display | null = null;
// Obtain the default Display object.
displayClass = display.getDefaultDisplaySync();
// Check whether an immersive window is included.
displayClass.hasImmersiveWindow((err: BusinessError, data: boolean) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to check whether there is immersive window. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in checking whether there is immersive window. data: ${data}`);
});

```

## hasImmersiveWindow

```TypeScript
hasImmersiveWindow(): Promise<boolean>
```

判断当前屏幕是否包含沉浸式窗口，使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前屏幕包含沉浸式窗口，false表示不包含。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { display } from '@kit.ArkUI';

let displayClass: display.Display | null = null;
// Obtain the default Display object.
displayClass = display.getDefaultDisplaySync();
// Check whether an immersive window is included.
let promise = displayClass.hasImmersiveWindow();
promise.then((data) => {
  console.info(`Succeeded in checking whether there is immersive window. data: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to check whether there is immersive window. Code: ${err.code}, message: ${err.message}`);
});

```

## off('availableAreaChange')

```TypeScript
off(type: 'availableAreaChange', callback?: Callback<Rect>): void
```

关闭当前设备屏幕可用区域变化的监听。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'availableAreaChange' | Yes | 监听事件，固定为'availableAreaChange'，表示屏幕可用区域变更。 |
| callback | Callback&lt;Rect> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<display.Rect> = (data: display.Rect) => {
  console.info(`Listening enabled. Data: ${JSON.stringify(data)}`);
};
let displayClass: display.Display | null = null;
try {
  displayClass = display.getDefaultDisplaySync();
  displayClass.off('availableAreaChange', callback);
} catch (exception) {
  console.error(`Failed to unregister callback. Code: ${exception.code}, message: ${exception.message}`);
}

```

## offAvailableAreaChange

```TypeScript
offAvailableAreaChange(callback?: Callback<Rect>): void
```

Unregister the callback for available area changes.

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Rect> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1400003 | This display manager service works abnormally. |

## on('availableAreaChange')

```TypeScript
on(type: 'availableAreaChange', callback: Callback<Rect>): void
```

开启当前设备屏幕可用区域的监听。当屏幕旋转、进入/退出自由多窗模式、设置Dock栏/状态栏等系统控件可见性变化时，触发回调函数，返回可用区域信息。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'availableAreaChange' | Yes | 监听事件。固定为'availableAreaChange'，表示屏幕可用区域变更。 |
| callback | Callback&lt;Rect> | Yes | 回调函数。返回改变后的可用区域。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<display.Rect> = (data: display.Rect) => {
  console.info(`Listening enabled. Data: ${JSON.stringify(data)}`);
};
let displayClass: display.Display | null = null;
try {
  displayClass = display.getDefaultDisplaySync();
  displayClass.on('availableAreaChange', callback);
} catch (exception) {
  console.error(`Failed to register callback. Code: ${exception.code}, message: ${exception.message}`);
}

```

## onAvailableAreaChange

```TypeScript
onAvailableAreaChange(callback: Callback<Rect>): void
```

Register the callback for available area changes.

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Rect> | Yes | Callback used to return the available area |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1400003 | This display manager service works abnormally. |

## scaledDensity

```TypeScript
scaledDensity: double
```

显示设备上的字体的缩放因子。该参数为浮点数，通常与densityPixels相同。 SystemCapability.WindowManager.WindowManager.Core

**Type:** double

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## orientation

```TypeScript
orientation: Orientation
```

表示显示设备当前显示的方向。 SystemCapability.WindowManager.WindowManager.Core

**Type:** Orientation

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## sourceMode

```TypeScript
sourceMode?: DisplaySourceMode
```

显示设备的显示模式枚举，默认值为DisplaySourceMode.NONE。 SystemCapability.Window.SessionManager

**Type:** DisplaySourceMode

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## densityPixels

```TypeScript
densityPixels: double
```

显示设备逻辑像素的密度，代表物理像素与逻辑像素的缩放系数，计算方式为：![densityPixels](docroot://reference/apis-arkui/figures/densityPixels.jpg) 该参数为浮点数，受densityDPI范围限制，取值范围在[0.5，4.0]。一般取值1.0、3.0等，实际取值取决于不同设备提供的densityDPI。 SystemCapability.WindowManager.WindowManager.Core

**Type:** double

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## availableWidth

```TypeScript
availableWidth: long
```

显示设备的可用区域宽度，单位为px，该参数为大于0的整数。 SystemCapability.WindowManager.WindowManager.Core 该接口在2in1设备、Tablet设备中可正常调用；在其他设备中不可用，请通过width属性获取当前设备屏幕的可用区域宽度。

**Type:** long

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## availableHeight

```TypeScript
availableHeight: long
```

显示设备的可用区域高度，单位为px，该参数为大于0的整数。 SystemCapability.WindowManager.WindowManager.Core 该接口在2in1设备、Tablet设备中可正常调用；在其他设备中不可用，请通过height属性获取当前设备屏幕的可用区域高度。

**Type:** long

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## alive

```TypeScript
alive: boolean
```

显示设备的启用状态，表示设备是否处于正常运行状态。true表示已启用，处于正常运行状态；false表示未启用，未处于正常运行状态。 SystemCapability.WindowManager.WindowManager.Core

**Type:** boolean

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## rotation

```TypeScript
rotation: int
```

显示设备的屏幕顺时针旋转角度。 值为0时，表示显示设备屏幕顺时针旋转为0°，表示显示设备的标准显示方向； 值为1时，表示显示设备屏幕顺时针旋转为90°； 值为2时，表示显示设备屏幕顺时针旋转为180°； 值为3时，表示显示设备屏幕顺时针旋转为270°。 SystemCapability.WindowManager.WindowManager.Core

**Type:** int

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## hdrFormats

```TypeScript
hdrFormats: Array<hdrCapability.HDRFormat>
```

显示设备支持的所有HDR格式。 SystemCapability.WindowManager.WindowManager.Core

**Type:** Array<hdrCapability.HDRFormat>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## supportedRefreshRates

```TypeScript
supportedRefreshRates?: Array<int>
```

显示设备支持的所有刷新率，从小到大排序。刷新率值为正整数，单位为Hz。默认为空。 SystemCapability.Window.SessionManager

**Type:** Array<int>

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## densityDPI

```TypeScript
densityDPI: double
```

显示设备的物理像素密度，表示每英寸上的像素点数。该参数为浮点数，单位为px。一般取值160.0、480.0等，实际能取到的值取决于不同设备设置里提供的可选值。 SystemCapability.WindowManager.WindowManager.Core

**Type:** double

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## xDPI

```TypeScript
xDPI: double
```

x轴方向中每英寸屏幕的确切物理像素值，该参数为浮点数。 SystemCapability.WindowManager.WindowManager.Core

**Type:** double

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## screenShape

```TypeScript
screenShape?: ScreenShape
```

显示设备的屏幕形状，默认值为RECTANGLE。 SystemCapability.WindowManager.WindowManager.Core

**Type:** ScreenShape

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## refreshRate

```TypeScript
refreshRate: int
```

显示设备当前采用的刷新率，该参数为整数，单位为Hz。 SystemCapability.WindowManager.WindowManager.Core

**Type:** int

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## x

```TypeScript
x?: long
```

显示设备左上角相对于原点的y轴坐标，原点为主屏左上角，单位为px，该参数为整数，默认值为0。仅DisplaySourceMode为MAIN和EXTEND时返回实际值，其余默认返回默认值0。 SystemCapability.Window.SessionManager

**Type:** long

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## width

```TypeScript
width: long
```

显示设备的屏幕宽度，单位为px，该参数为整数。 SystemCapability.WindowManager.WindowManager.Core

**Type:** long

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## name

```TypeScript
name: string
```

显示设备的名称。 SystemCapability.WindowManager.WindowManager.Core

**Type:** string

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## y

```TypeScript
y?: long
```

显示设备左上角相对于原点的y轴坐标，原点为主屏左上角，单位为px，该参数为整数，默认值为0。仅DisplaySourceMode为MAIN和EXTEND时返回实际值，其余默认返回默认值0。 SystemCapability.Window.SessionManager

**Type:** long

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## colorSpaces

```TypeScript
colorSpaces: Array<colorSpaceManager.ColorSpace>
```

显示设备支持的所有色域类型。 SystemCapability.WindowManager.WindowManager.Core

**Type:** Array<colorSpaceManager.ColorSpace>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## state

```TypeScript
state: DisplayState
```

显示设备的状态。 SystemCapability.WindowManager.WindowManager.Core

**Type:** DisplayState

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## id

```TypeScript
id: long
```

显示设备的屏幕ID，该参数为大于等于0的整数。 SystemCapability.WindowManager.WindowManager.Core

**Type:** long

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## yDPI

```TypeScript
yDPI: double
```

y轴方向中每英寸屏幕的确切物理像素值，该参数为浮点数。 SystemCapability.WindowManager.WindowManager.Core

**Type:** double

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## height

```TypeScript
height: long
```

显示设备的屏幕高度，单位为px，该参数为整数。 SystemCapability.WindowManager.WindowManager.Core

**Type:** long

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

