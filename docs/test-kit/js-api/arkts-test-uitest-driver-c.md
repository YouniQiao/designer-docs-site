# Driver

The **Driver** class is the main entry to the UiTest framework. It provides APIs for features such as component matching/search, key injection, coordinate clicking/sliding, and screenshot.All APIs provided by this class, except **Driver.create()**, use a promise to return the result and must be invoked using **await**.

**Since:** 9

<!--Device-unnamed-declare class Driver--><!--Device-unnamed-declare class Driver-End-->

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@kit.TestKit';
```

## assertComponentExist

```TypeScript
assertComponentExist(on: On): Promise<void>
```

Asserts whether a component matches the specified attributes exists on the current page. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-assertComponentExist(on: On): Promise<void>--><!--Device-Driver-assertComponentExist(on: On): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | [On](arkts-test-uitest-on-c.md) | Yes | Attributes of the target {@link Component}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000003](../errorcode-uitest.md#17000003-assertion-failure) | Assertion failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.assertComponentExist(ON.text('next page'));
}

```

## click

```TypeScript
click(x: number, y: number): Promise<void>
```

Clicks the target coordinate point. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-click(x: int, y: int): Promise<void>--><!--Device-Driver-click(x: int, y: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | Number, which indicates the horizontal coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |
| y | number | Yes | Number, which indicates the vertical coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.click(100, 100);
}

```

## clickAt

```TypeScript
clickAt(point: Point): Promise<void>
```

Clicks the target coordinate point. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-clickAt(point: Point): Promise<void>--><!--Device-Driver-clickAt(point: Point): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which is used to transfer the target point information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.clickAt({ x: 100, y: 100, displayId: 0 });
}

```

## clickAtWithOptions

```TypeScript
clickAtWithOptions(point: Point, options?: TouchOptions): Promise<void>
```

Click on the specified location on the screen, with optional touch options.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Driver-clickAtWithOptions(point: Point, options?: TouchOptions): Promise<void>--><!--Device-Driver-clickAtWithOptions(point: Point, options?: TouchOptions): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](arkts-test-uitest-point-i.md) | Yes | the coordinate point where the finger touches the screen. |
| options | [TouchOptions](arkts-test-uitest-touchoptions-i.md) | No | the options for the click operation.Only the 'pressure' property is applicable for this method.Setting other properties will result in a BusinessError 17000007.Default value: Refer to the default value of TouchOptions. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

## create

```TypeScript
static create(): Driver
```

Creates a **Driver** object and returns the object created. This API is a static API.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-static create(): Driver--><!--Device-Driver-static create(): Driver-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Driver](arkts-test-uitest-driver-c.md) | - **{@link Driver}** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000001](../errorcode-uitest.md#17000001-initialization-failure) | Initialization failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
}

```

## createUIEventObserver

```TypeScript
createUIEventObserver(): UIEventObserver
```

Creates a UI event listener {@link UIEventObserver}.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-createUIEventObserver(): UIEventObserver--><!--Device-Driver-createUIEventObserver(): UIEventObserver-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [UIEventObserver](arkts-test-uitest-uieventobserver-i.md) | - UI event listener {@link UIEventObserver}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UIEventObserver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let observer: UIEventObserver = driver.createUIEventObserver();
}

```

## crownRotate

```TypeScript
crownRotate(d: number, speed?: number): Promise<void>
```

Injects a crown rotation event. You can specify the rotation speed. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-crownRotate(d: int, speed?: int): Promise<void>--><!--Device-Driver-crownRotate(d: int, speed?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| d | number | Yes | Number of rotation ticks. A positive value indicates rotation, and a negative value indicates counterclockwise rotation. The value must be an integer. |
| speed | number | No | Rotation speed.<br>Unit: ticks/s.<br>Value range: [1, 500]<br>Throws error code 17000007 if negative.<br>Default value: 20 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // Rotate 50 ticks clockwise at a speed of 30 ticks per second.
  await driver.crownRotate(50, 30);
  // Rotate 20 ticks counterclockwise at a speed of 30 ticks per second.
  await driver.crownRotate(-20, 30);
}

```

## delayMs

```TypeScript
delayMs(duration: number): Promise<void>
```

Delays execution for the specified duration. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-delayMs(duration: int): Promise<void>--><!--Device-Driver-delayMs(duration: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| duration | number | Yes | Specified time, in ms. The value is an integer greater than or equal to 0.<br>Unit: ms<br>Value range: The value should be >= 0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.delayMs(1000);
}

```

## doubleClick

```TypeScript
doubleClick(x: number, y: number): Promise<void>
```

Double-clicks the target coordinate point. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-doubleClick(x: int, y: int): Promise<void>--><!--Device-Driver-doubleClick(x: int, y: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | Number, which indicates the horizontal coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |
| y | number | Yes | Number, which indicates the vertical coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.doubleClick(100, 100);
}

```

## doubleClickAt

```TypeScript
doubleClickAt(point: Point): Promise<void>
```

Double-clicks the target coordinate point. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-doubleClickAt(point: Point): Promise<void>--><!--Device-Driver-doubleClickAt(point: Point): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which is used to transfer the target point information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.doubleClickAt({ x: 100, y: 100, displayId: 0 });
}

```

## drag

```TypeScript
drag(startx: number, starty: number, endx: number, endy: number, speed?: number): Promise<void>
```

Drags from the start coordinate point to the target coordinate point. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-drag(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>--><!--Device-Driver-drag(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startx | number | Yes | Number, which indicates the horizontal coordinate of the start point. The value is an integer greater than or equal to 0.<br>Unit: px |
| starty | number | Yes | Number, which indicates the vertical coordinate of the start point. The value is an integer greater than or equal to 0.<br>Unit: px |
| endx | number | Yes | Number, which indicates the horizontal coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |
| endy | number | Yes | Number, which indicates the vertical coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |
| speed | number | No | Drag speed, in px/s. The value ranges from 200 to 40000. If the set value is not in the range, the default value **600** is used.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.drag(100, 100, 200, 200, 600);
}

```

## dragBetween

```TypeScript
dragBetween(from: Point, to: Point, speed?: number, duration?: number): Promise<void>
```

Drags from the start point to the target point. You can specify the drag speed and the click duration before dragging. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-dragBetween(from: Point, to: Point, speed?: int, duration?: int): Promise<void>--><!--Device-Driver-dragBetween(from: Point, to: Point, speed?: int, duration?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which transfers the coordinates of the start point and the ID of the display to which the start point belongs. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which transfers the coordinates of the target point and the ID of the display to which it belongs.<br> **Note**: The target point and the start point must be on the same screen. Otherwise, the **17000007** exception is thrown. |
| speed | number | No | Drag speed, in px/s. The value ranges from 200 to 40000. If the set value is not in the range, the default value **600** is used.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 17000007 if negative.<br>Default value: 600 |
| duration | number | No | The duration of the long press before dragging.<br>Value range: The value should be >= 1500<br>Unit: ms<br>Default value: 1500 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.dragBetween({ x: 100, y: 100, displayId: 0 }, { x: 1000, y: 1000, displayId: 0 }, 800, 1500);
}

```

## dragBetweenWithOptions

```TypeScript
dragBetweenWithOptions(from: Point, to: Point, options?: TouchOptions): Promise<void>
```

Drag on the screen between the specified points with optional settings.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Driver-dragBetweenWithOptions(from: Point, to: Point, options?: TouchOptions): Promise<void>--><!--Device-Driver-dragBetweenWithOptions(from: Point, to: Point, options?: TouchOptions): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | the coordinate point where the finger touches the screen. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | the coordinate point where the finger leaves the screen. |
| options | [TouchOptions](arkts-test-uitest-touchoptions-i.md) | No | the options for the drag operation.Only the 'pressure', 'speed', and 'duration' properties are applicable for this method.Setting other properties will result in a BusinessError 17000007.Default value: Refer to the default value of TouchOptions. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

## dumpLayout

```TypeScript
dumpLayout(savePath: string, displayId?: number): Promise<boolean>
```

Get the current layout information and save as file with json format.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Driver-dumpLayout(savePath: string, displayId?: int): Promise<boolean>--><!--Device-Driver-dumpLayout(savePath: string, displayId?: int): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| savePath | string | Yes | the path where to store the json, must be in the application sandbox directory.The path must be the [sandbox path](../../../file-management/app-sandbox-directory.md) of the current application. |
| displayId | number | No | the Id of the specified display, default is the displayId of the main screen. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | true if dump layout and file-storing are completed successfully,false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // Obtain the current layout information and save it as a JSON file.
  await driver.dumpLayout('/data/storage/el2/base/cache/layout.json', 0);
}

```

## findComponent

```TypeScript
findComponent(on: On): Promise<Component>
```

Searches for the target component based on the specified attributes. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-findComponent(on: On): Promise<Component>--><!--Device-Driver-findComponent(on: On): Promise<Component>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | [On](arkts-test-uitest-on-c.md) | Yes | Attributes of the target {@link Component}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Component&gt; | - Promise used to return the {@link Component} or undefined. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.text('next page'));
}

```

## findComponents

```TypeScript
findComponents(on: On): Promise<Array<Component>>
```

Searches for all matched components based on the specified attributes and saves them in a list. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-findComponents(on: On): Promise<Array<Component>>--><!--Device-Driver-findComponents(on: On): Promise<Array<Component>>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | [On](arkts-test-uitest-on-c.md) | Yes | Attributes of the target {@link Component}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Component&gt;&gt; | - Promise used to return the list of {@link Component}s. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let buttonList: Array<Component> = await driver.findComponents(ON.text('next page'));
}

```

## findWindow

```TypeScript
findWindow(filter: WindowFilter): Promise<UiWindow>
```

Searches for a window based on the specified attributes. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-findWindow(filter: WindowFilter): Promise<UiWindow>--><!--Device-Driver-findWindow(filter: WindowFilter): Promise<UiWindow>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | [WindowFilter](arkts-test-uitest-windowfilter-i.md) | Yes | Attributes of the target {@link UiWindow}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UiWindow&gt; | - Promise used to return the target {@link UiWindow}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
}

```

## fling

```TypeScript
fling(from: Point, to: Point, stepLen: number, speed: number): Promise<void>
```

Simulates a fling operation. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-fling(from: Point, to: Point, stepLen: int, speed: int): Promise<void>--><!--Device-Driver-fling(from: Point, to: Point, stepLen: int, speed: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the point where the finger touches the screen. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the point where the finger leaves the screen. |
| stepLen | number | Yes | Step length, in pixels. The value is an integer greater than or equal to 0.<br>Unit: px |
| speed | number | Yes | Fling speed, in px/s. The value ranges from 200 to 40000. If the set value is not in the range, the default value **600** is used.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 17000007 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.fling({ x: 500, y: 480 }, { x: 450, y: 480 }, 5, 600);
}

```

## fling

```TypeScript
fling(direction: UiDirection, speed: number): Promise<void>
```

Simulates a fling operation with the specified direction and speed. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-fling(direction: UiDirection, speed: int): Promise<void>--><!--Device-Driver-fling(direction: UiDirection, speed: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | [UiDirection](arkts-test-uitest-uidirection-e.md) | Yes | Direction of the fling operation. |
| speed | number | Yes | Scroll speed.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiDirection } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.fling(UiDirection.DOWN, 10000);
}

```

## fling

```TypeScript
fling(direction: UiDirection, speed: number, displayId: number): Promise<void>
```

Simulates a fling operation on a specified display with the specified direction and speed. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-fling(direction: UiDirection, speed: int, displayId: int): Promise<void>--><!--Device-Driver-fling(direction: UiDirection, speed: int, displayId: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | [UiDirection](arkts-test-uitest-uidirection-e.md) | Yes | Direction of the fling operation. |
| speed | number | Yes | Fling speed, in px/s. The value ranges from 200 to 40000. If the set value is not in the range,the default value **600** is used.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |
| displayId | number | Yes | Display ID. The value is an integer greater than or equal to 0.<br> **Note**: If the input **displayId** does not exist, the exception **401** is reported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiDirection } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.fling(UiDirection.DOWN, 10000, 0);
}

```

## getDisplayDensity

```TypeScript
getDisplayDensity(): Promise<Point>
```

Obtains the display density of the current device. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-getDisplayDensity(): Promise<Point>--><!--Device-Driver-getDisplayDensity(): Promise<Point>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Point&gt; | Promise used to return the **Point** object. The density of the current device display is **Point.x*Point.y**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let density = await driver.getDisplayDensity();
}

```

## getDisplayDensity

```TypeScript
getDisplayDensity(displayId: number): Promise<Point>
```

Obtains the density of the specified display of the current device. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-getDisplayDensity(displayId: int): Promise<Point>--><!--Device-Driver-getDisplayDensity(displayId: int): Promise<Point>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | Yes | Display ID. The value is an integer greater than or equal to 0.<br> **Note**: If the input **displayId** does not exist, the exception **17000007** is reported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Point&gt; | Promise used to return the **Point** object. The density of the specified display is **Point.x*Point.y**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let density = await driver.getDisplayDensity(0);
}

```

## getDisplayRotation

```TypeScript
getDisplayRotation(): Promise<DisplayRotation>
```

Obtains the display rotation of the current device. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-getDisplayRotation(): Promise<DisplayRotation>--><!--Device-Driver-getDisplayRotation(): Promise<DisplayRotation>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DisplayRotation&gt; | - Promise used to return the display rotation of the current device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { DisplayRotation, Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let rotation: DisplayRotation = await driver.getDisplayRotation();
}

```

## getDisplayRotation

```TypeScript
getDisplayRotation(displayId: number): Promise<DisplayRotation>
```

Obtains the display rotation of the specified device. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-getDisplayRotation(displayId: int): Promise<DisplayRotation>--><!--Device-Driver-getDisplayRotation(displayId: int): Promise<DisplayRotation>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | Yes | Display ID. The value is an integer greater than or equal to 0.<br> **Note**: If the input **displayId** does not exist, the exception **17000007** is reported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DisplayRotation&gt; | - Promise used to return the display rotation of the specified device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { DisplayRotation, Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let rotation: DisplayRotation = await driver.getDisplayRotation(0);
}

```

## getDisplaySize

```TypeScript
getDisplaySize(): Promise<Point>
```

Obtains the display size of the current device. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-getDisplaySize(): Promise<Point>--><!--Device-Driver-getDisplaySize(): Promise<Point>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Point&gt; | - Promise used to return the **Point** object.The size of the current device screen is **Point.x * Point.y**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let size = await driver.getDisplaySize();
}

```

## getDisplaySize

```TypeScript
getDisplaySize(displayId: number): Promise<Point>
```

Obtains the size of the specified display on the current device. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-getDisplaySize(displayId: int): Promise<Point>--><!--Device-Driver-getDisplaySize(displayId: int): Promise<Point>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | Yes | Display ID. The value is an integer greater than or equal to 0.<br> **Note**: If the input **displayId** does not exist, the exception **17000007** is reported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Point&gt; | Promise used to return the **Point** object. The size of the specified display is **Point.x * Point.y**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let size = await driver.getDisplaySize(0);
}

```

## injectKnucklePointerAction

```TypeScript
injectKnucklePointerAction(pointers: PointerMatrix, speed?: number): Promise<void>
```

Simulates a multi-point knuckle scrolling operation. This API uses a promise to return the result.
> **NOTE**  
>  
> If the knuckle gesture is disabled on the device<!--RP4--><!--RP4End-->, 17000005 is returned.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Driver-injectKnucklePointerAction(pointers: PointerMatrix, speed?: int): Promise<void>--><!--Device-Driver-injectKnucklePointerAction(pointers: PointerMatrix, speed?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pointers | [PointerMatrix](arkts-test-uitest-pointermatrix-c.md) | Yes | Scroll trajectory, including the number of fingers and an array of coordinates along the trajectory.* **Note**: Currently, only the single-finger operation is supported. The value of **fingers** in **PointerMatrix** must be set to **1**. |
| speed | number | No | Knuckle pointer action speed.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 17000007 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, PointerMatrix } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // Simulate a knuckle gesture to draw an S on the display.
  let pointers: PointerMatrix = PointerMatrix.create(1, 6);
  pointers.setPoint(0, 0, { x: 750, y: 300 });
  pointers.setPoint(0, 1, { x: 500, y: 100 });
  pointers.setPoint(0, 2, { x: 250, y: 300 });
  pointers.setPoint(0, 3, { x: 750, y: 800 });
  pointers.setPoint(0, 4, { x: 500, y: 1000 });
  pointers.setPoint(0, 5, { x: 250, y: 800 });
  await driver.injectKnucklePointerAction(pointers);
}

```

## injectMultiPointerAction

```TypeScript
injectMultiPointerAction(pointers: PointerMatrix, speed?: number): Promise<boolean>
```

Injects a multi-finger operation into a device. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-injectMultiPointerAction(pointers: PointerMatrix, speed?: int): Promise<boolean>--><!--Device-Driver-injectMultiPointerAction(pointers: PointerMatrix, speed?: int): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pointers | [PointerMatrix](arkts-test-uitest-pointermatrix-c.md) | Yes | Scroll trajectory, including the number of fingers and an array of coordinates along the trajectory. |
| speed | number | No | Pointer action speed, in px/s.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the operation is successful.The value **true** indicates that the operation is successful, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, PointerMatrix } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let pointers: PointerMatrix = PointerMatrix.create(2, 5);
  pointers.setPoint(0, 0, { x: 250, y: 480 });
  pointers.setPoint(0, 1, { x: 250, y: 440 });
  pointers.setPoint(0, 2, { x: 250, y: 400 });
  pointers.setPoint(0, 3, { x: 250, y: 360 });
  pointers.setPoint(0, 4, { x: 250, y: 320 });
  pointers.setPoint(1, 0, { x: 250, y: 480 });
  pointers.setPoint(1, 1, { x: 250, y: 440 });
  pointers.setPoint(1, 2, { x: 250, y: 400 });
  pointers.setPoint(1, 3, { x: 250, y: 360 });
  pointers.setPoint(1, 4, { x: 250, y: 320 });
  await driver.injectMultiPointerAction(pointers);
}

```

## injectPenPointerAction

```TypeScript
injectPenPointerAction(pointers: PointerMatrix, speed?: number, pressure?: number): Promise<void>
```

Simulates a continuous multi-point pen injection operation. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Driver-injectPenPointerAction(pointers: PointerMatrix, speed?: int, pressure?: double): Promise<void>--><!--Device-Driver-injectPenPointerAction(pointers: PointerMatrix, speed?: int, pressure?: double): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pointers | [PointerMatrix](arkts-test-uitest-pointermatrix-c.md) | Yes | Scroll trajectory, including the number of fingers and an array of coordinates along the trajectory.**Note**: Currently, only the single-finger operation is supported. The value of **fingers** in **PointerMatrix** must be set to **1**. |
| speed | number | No | Pen pointer action speed.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |
| pressure | number | No | Injection pressure.<br>Value range:[0.0, 1.0]<br>Default value: 1.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, PointerMatrix } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let pointer = PointerMatrix.create(1, 8);
  for (let step = 0; step < 8; step++) {
    pointer.setPoint(0, step, { x: 500, y: 1100 - 100 * step });
  }
  await driver.injectPenPointerAction(pointer, 600, 0.5);
}

```

## inputText

```TypeScript
inputText(p: Point, text: string): Promise<void>
```

Inputs text at a specified coordinate without clearing the original text in the component. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-inputText(p: Point, text: string): Promise<void>--><!--Device-Driver-inputText(p: Point, text: string): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| p | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the end point. |
| text | string | Yes | Input text. Currently, English, Chinese, and special characters are supported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let text: Component = await driver.findComponent(ON.type('TextInput'));
  let point = await text.getBoundsCenter();
  await driver.inputText(point, '123');
}

```

## inputText

```TypeScript
inputText(p: Point, text: string, mode: InputTextMode): Promise<void>
```

Inputs text at a specified coordinate point in a specified input mode. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-inputText(p: Point, text: string, mode: InputTextMode): Promise<void>--><!--Device-Driver-inputText(p: Point, text: string, mode: InputTextMode): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| p | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the end point. |
| text | string | Yes | Input text. Currently, English, Chinese, and special characters are supported. |
| mode | [InputTextMode](arkts-test-uitest-inputtextmode-i.md) | Yes | Text input mode.For details, see [InputTextMode](arkts-test-uitest-inputtextmode-i.md).**NOTE*** If **InputTextMode.addition** is set to **true**, the cursor moves to the end of the text and the specified text is input. If the value is **false**, the specified text is input at the coordinate point. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) |  |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let text: Component = await driver.findComponent(ON.type('TextInput'));
  let point = await text.getBoundsCenter();
  await driver.inputText(point, '123', { paste: true, addition: false });
}

async function demo_Chinese() {
  let driver: Driver = Driver.create();
  let text: Component = await driver.findComponent(ON.type('TextInput'));
  let point = await text.getBoundsCenter();
  await driver.inputText(point, 'Chinese&', { paste: false, addition: true });
  // Copy and paste Chinese and a special character to the end of the specified text.
}

```

## isComponentPresentWhenDrag

```TypeScript
isComponentPresentWhenDrag(on: On, from: Point, to: Point, speed?: number, duration?: number): Promise<boolean>
```

Drags from the start point to the end point and checks whether the target component exists. This API uses a promise to return the result.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Driver-isComponentPresentWhenDrag(on: On, from: Point, to: Point, speed?: int, duration?: int): Promise<boolean>--><!--Device-Driver-isComponentPresentWhenDrag(on: On, from: Point, to: Point, speed?: int, duration?: int): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | [On](arkts-test-uitest-on-c.md) | Yes | Attributes of the target {@link Component}. |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which transfers the coordinates of the start point and the ID of the display to which the start point belongs. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which transfers the coordinates of the target point and the ID of the display to which it belongs.<br> **Note**: The target point and the start point must be on the same screen. Otherwise, the **17000007** exception is thrown. |
| speed | number | No | Drag speed.<br>Value range:[200, 40000]<br>Throws error code 17000007 if negative.<br>Default value: 600 |
| duration | number | No | The duration of the long press before dragging.<br>Value range: The value should be >= 1500<br>Default value: 1500 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the target component exists during the dragging operation. The value **true** indicates that the target component exists, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let isExist = await driver.isComponentPresentWhenDrag(ON.id('123'), { x: 100, y: 100 }, { x: 200, y: 200 }, 1000, 2000);
}

```

## isComponentPresentWhenLongClick

```TypeScript
isComponentPresentWhenLongClick(on: On, point: Point, duration?: number): Promise<boolean>
```

Long-clicks at the specified coordinates and checks whether the target component exists. This API uses a promise to return the result.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Driver-isComponentPresentWhenLongClick(on: On, point: Point, duration?: int): Promise<boolean>--><!--Device-Driver-isComponentPresentWhenLongClick(on: On, point: Point, duration?: int): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | [On](arkts-test-uitest-on-c.md) | Yes | Attributes of the target {@link Component}. |
| point | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the long-clicked point. |
| duration | number | No | Long-click duration.<br>Value range: The value should be >= 1500<br>Default value: 1500 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the target component exists during a long-click operation. The value **true** indicates that the target component exists, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let isExist = await driver.isComponentPresentWhenLongClick(ON.id('123'), { x: 100, y: 100 }, 2000);
}

```

## isComponentPresentWhenSwipe

```TypeScript
isComponentPresentWhenSwipe(on: On, from: Point, to: Point, speed?: number): Promise<boolean>
```

Swipes from the start point to the end point and checks whether the target component exists. This API uses a promise to return the result.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Driver-isComponentPresentWhenSwipe(on: On, from: Point, to: Point, speed?: int): Promise<boolean>--><!--Device-Driver-isComponentPresentWhenSwipe(on: On, from: Point, to: Point, speed?: int): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | [On](arkts-test-uitest-on-c.md) | Yes | Attributes of the target component. |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which transfers the coordinates of the start point and the ID of the display to which the start point belongs. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which transfers the coordinates of the target point and the ID of the display to which it belongs.<br> **Note**: The target point and the start point must be on the same screen. Otherwise, the **17000007** exception is thrown. |
| speed | number | No | Scroll speed.<br>Value range:[200, 40000]<br>Throws error code 17000007 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the target component exists during the swiping operation.The value **true** indicates that the target component exists, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let isExist = await driver.isComponentPresentWhenSwipe(ON.id('123'), { x: 100, y: 100 }, { x: 200, y: 200 }, 1000);
}

```

## knuckleKnock

```TypeScript
knuckleKnock(pointers: Array<Point>, times: number): Promise<void>
```

Simulates a knuckle knock on the display. This API uses a promise to return the result.
> **NOTE**  
>  
> If the knuckle gesture is disabled on the device<!--RP4--><!--RP4End-->, 17000005 is returned.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Driver-knuckleKnock(pointers: Array<Point>, times: int): Promise<void>--><!--Device-Driver-knuckleKnock(pointers: Array<Point>, times: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pointers | Array&lt;Point&gt; | Yes | Array of knuckle knock coordinates on the display. The array length can be 1 or 2. |
| times | number | Yes | Number of consecutive knocks on the display.<br>Value range:[1,2] |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, Point } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // Simulate a single-knuckle double-knock gesture.
  let points: Array<Point> = [{ x: 100, y: 100 }];
  await driver.knuckleKnock(points, 2);
}

```

## longClick

```TypeScript
longClick(x: number, y: number): Promise<void>
```

Long-clicks the target coordinate point. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-longClick(x: int, y: int): Promise<void>--><!--Device-Driver-longClick(x: int, y: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | Number, which indicates the horizontal coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |
| y | number | Yes | Number, which indicates the vertical coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.longClick(100, 100);
}

```

## longClickAt

```TypeScript
longClickAt(point: Point, duration?: number): Promise<void>
```

Long-clicks the target coordinate point for a specified duration. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-longClickAt(point: Point, duration?: int): Promise<void>--><!--Device-Driver-longClickAt(point: Point, duration?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which is used to transfer the target point information. |
| duration | number | No | Long-click duration, in ms.<br>Value range: The value should be >= 1500<br>Unit: ms<br>Default value: 1500 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.longClickAt({ x: 100, y: 100, displayId: 0 }, 1500);
}

```

## longClickAtWithOptions

```TypeScript
longClickAtWithOptions(point: Point, options?: TouchOptions): Promise<void>
```

LongClick on the specified location on the screen, with optional touch settings.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Driver-longClickAtWithOptions(point: Point, options?: TouchOptions): Promise<void>--><!--Device-Driver-longClickAtWithOptions(point: Point, options?: TouchOptions): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](arkts-test-uitest-point-i.md) | Yes | the coordinate point where the finger touches the screen. |
| options | [TouchOptions](arkts-test-uitest-touchoptions-i.md) | No | the options for the long click operation.Only the 'duration' and 'pressure' properties are applicable for this method.Setting other properties will result in a BusinessError 17000007.Default value: Refer to the default value of TouchOptions. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

## mouseClick

```TypeScript
mouseClick(p: Point, btnId: MouseButton, key1?: number, key2?: number): Promise<void>
```

Injects a mouse click action at the specified coordinates, with the optional key or key combination. This API uses a promise to return the result. For example, if the value of **key1** is **2072**, the **Ctrl** button is pressed with the mouse click.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-mouseClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>--><!--Device-Driver-mouseClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| p | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the mouse click. |
| btnId | [MouseButton](arkts-test-uitest-mousebutton-e.md) | Yes | Mouse button pressed. |
| key1 | number | No | First key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |
| key2 | number | No | Second key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, MouseButton } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseClick({ x: 248, y: 194 }, MouseButton.MOUSE_BUTTON_LEFT, 2072);
}

```

## mouseDoubleClick

```TypeScript
mouseDoubleClick(p: Point, btnId: MouseButton, key1?: number, key2?: number): Promise<void>
```

Injects a double-click action at the specified coordinates, with the optional key or key combination. This API uses a promise to return the result. For example, if the value of **key** is **2072**, the **Ctrl** button is pressed with the double-click.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-mouseDoubleClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>--><!--Device-Driver-mouseDoubleClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| p | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the double-click. |
| btnId | [MouseButton](arkts-test-uitest-mousebutton-e.md) | Yes | Mouse button pressed. |
| key1 | number | No | First key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |
| key2 | number | No | Second key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, MouseButton } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseDoubleClick({ x: 248, y: 194 }, MouseButton.MOUSE_BUTTON_LEFT, 2072);
}

```

## mouseDrag

```TypeScript
mouseDrag(from: Point, to: Point, speed?: number): Promise<void>
```

Drags the mouse pointer from the start point to the end point. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-mouseDrag(from: Point, to: Point, speed?: number): Promise<void>--><!--Device-Driver-mouseDrag(from: Point, to: Point, speed?: number): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the start point. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the end point. |
| speed | number | No | Mouse drag speed.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseDrag({ x: 100, y: 100 }, { x: 200, y: 200 }, 600);
}

```

## mouseDrag

```TypeScript
mouseDrag(from: Point, to: Point, speed?: number, duration?: number): Promise<void>
```

Drags the mouse from the start point to the end point. You can specify the dragging speed and the duration before dragging. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-mouseDrag(from: Point, to: Point, speed?: int, duration?: int): Promise<void>--><!--Device-Driver-mouseDrag(from: Point, to: Point, speed?: int, duration?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the start point. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the end point. |
| speed | number | No | Speed of mouse drag.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |
| duration | number | No | The duration of the long press before dragging.<br>Value range: The value should be >= 1500<br>Unit: ms<br>Default value: 1500 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseDrag({ x: 100, y: 100 }, { x: 200, y: 200 }, 600, 2000);
}

```

## mouseDragWithOptions

```TypeScript
mouseDragWithOptions(from: Point, to: Point, touchOptions?: TouchOptions, keyOptions?: KeyOptions): Promise<void>
```

Hold down the left mouse button and drag on the screen between the specified points,with optional touch and key settings.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Driver-mouseDragWithOptions(from: Point, to: Point, touchOptions?: TouchOptions, keyOptions?: KeyOptions): Promise<void>--><!--Device-Driver-mouseDragWithOptions(from: Point, to: Point, touchOptions?: TouchOptions, keyOptions?: KeyOptions): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | the starting point. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | the ending point. |
| touchOptions | [TouchOptions](arkts-test-uitest-touchoptions-i.md) | No | the touch options for speed and duration settings.Only 'speed' and 'duration' properties are valid in this method.Setting other properties will cause BusinessError 17000007.Default value: Refer to the default value of TouchOptions. |
| keyOptions | [KeyOptions](arkts-test-uitest-keyoptions-i.md) | No | the key options for key codes to press during drag.Default value: Refer to the default value of keyOptions. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

## mouseLongClick

```TypeScript
mouseLongClick(p: Point, btnId: MouseButton, key1?: number, key2?: number): Promise<void>
```

Injects a mouse long-click action at the specified coordinates, with the optional key or key combination. This API uses a promise to return the result. For example, if the value of **Key** is **2072**, the **Ctrl** button is long-clicked with the mouse device.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-mouseLongClick(p: Point, btnId: MouseButton, key1?: number, key2?: number): Promise<void>--><!--Device-Driver-mouseLongClick(p: Point, btnId: MouseButton, key1?: number, key2?: number): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| p | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the long-click of the mouse device. |
| btnId | [MouseButton](arkts-test-uitest-mousebutton-e.md) | Yes | Mouse button pressed. |
| key1 | number | No | First key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |
| key2 | number | No | Second key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, MouseButton } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseLongClick({ x: 248, y: 194 }, MouseButton.MOUSE_BUTTON_LEFT, 2072);
}

```

## mouseLongClick

```TypeScript
mouseLongClick(p: Point, btnId: MouseButton, key1?: number, key2?: number, duration?: number): Promise<void>
```

Injects a mouse long-click action at the specified coordinates, with the optional key or key combination and the specified duration. This API uses a promise to return the result. For example, if the value of **Key** is **2072**, the **Ctrl** button is long-clicked with the mouse device.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-mouseLongClick(p: Point, btnId: MouseButton, key1?: int, key2?: int, duration?: int): Promise<void>--><!--Device-Driver-mouseLongClick(p: Point, btnId: MouseButton, key1?: int, key2?: int, duration?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| p | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the long-click of the mouse device. |
| btnId | [MouseButton](arkts-test-uitest-mousebutton-e.md) | Yes | Mouse button pressed. |
| key1 | number | No | First key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |
| key2 | number | No | Second key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |
| duration | number | No | Long-click duration.<br>Value range: The value should be >= 1500<br>Unit: ms<br>Default value: 1500 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, MouseButton } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseLongClick({ x: 248, y: 194 }, MouseButton.MOUSE_BUTTON_LEFT, 2072, 0, 2000);
}

```

## mouseMoveTo

```TypeScript
mouseMoveTo(p: Point): Promise<void>
```

Moves the mouse cursor to the target point. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-mouseMoveTo(p: Point): Promise<void>--><!--Device-Driver-mouseMoveTo(p: Point): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| p | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the end point. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseMoveTo({ x: 100, y: 100 });
}

```

## mouseMoveWithTrack

```TypeScript
mouseMoveWithTrack(from: Point, to: Point, speed?: number): Promise<void>
```

Moves the mouse pointer from the start point to the end point. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-mouseMoveWithTrack(from: Point, to: Point, speed?: int): Promise<void>--><!--Device-Driver-mouseMoveWithTrack(from: Point, to: Point, speed?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the start point. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the end point. |
| speed | number | No | Mouse move speed.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseMoveWithTrack({ x: 100, y: 100 }, { x: 200, y: 200 }, 600);
}

```

## mouseScroll

```TypeScript
mouseScroll(p: Point, down: boolean, d: number, key1?: number, key2?: number): Promise<void>
```

Injects a mouse scroll action at the specified coordinates, with the optional key or key combination. This API uses a promise to return the result. For example, if the value of **key1** is **2072**, the **Ctrl** button is pressed with mouse scrolling.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-mouseScroll(p: Point, down: boolean, d: number, key1?: number, key2?: number): Promise<void>--><!--Device-Driver-mouseScroll(p: Point, down: boolean, d: number, key1?: number, key2?: number): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| p | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the mouse click. |
| down | boolean | Yes | Whether the mouse wheel scrolls downward. The value **true** indicates the mouse wheel scrolls downward, and **false** indicates the mouse wheel scrolls upward. |
| d | number | Yes | Number of ticks scrolled by the mouse wheel. A tick indicates a 120 px shift to the target point.The value is an integer greater than or equal to 0.<br>Value range: The value should be >= 0<br>Unit: px |
| key1 | number | No | First key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |
| key2 | number | No | Second key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseScroll({ x: 360, y: 640 }, true, 30, 2072);
}

```

## mouseScroll

```TypeScript
mouseScroll(p: Point, down: boolean, d: number, key1?: number, key2?: number, speed?: number): Promise<void>
```

Injects a mouse scroll action at the specified coordinates, with the optional key or key combination and the specified scroll speed. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-mouseScroll(p: Point, down: boolean, d: int, key1?: int, key2?: int, speed?: int): Promise<void>--><!--Device-Driver-mouseScroll(p: Point, down: boolean, d: int, key1?: int, key2?: int, speed?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| p | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the mouse click. |
| down | boolean | Yes | Whether the mouse wheel scrolls downward. The value **true** indicates the mouse wheel scrolls downward, and **false** indicates the mouse wheel scrolls upward. |
| d | number | Yes | Number of ticks scrolled by the mouse wheel. A tick indicates a 120 px shift to the target point. The value is an integer greater than or equal to 0.<br>Unit: cell |
| key1 | number | No | First key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |
| key2 | number | No | Second key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |
| speed | number | No | Scroll speed of the mouse wheel.<br>Value range:[1, 500]<br>Unit: ticks/s<br>Throws error code 401 if negative.<br>Default value: 20 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseScroll({ x: 360, y: 640 }, true, 30, 2072, 20);
}

```

## penClick

```TypeScript
penClick(point: Point): Promise<void>
```

Simulates a pen click operation. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Driver-penClick(point: Point): Promise<void>--><!--Device-Driver-penClick(point: Point): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the clicked point. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.penClick({ x: 100, y: 100 });
}

```

## penDoubleClick

```TypeScript
penDoubleClick(point: Point): Promise<void>
```

Simulates a pen double-click operation. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Driver-penDoubleClick(point: Point): Promise<void>--><!--Device-Driver-penDoubleClick(point: Point): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the double-clicked point. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.penDoubleClick({ x: 100, y: 100 });
}

```

## penLongClick

```TypeScript
penLongClick(point: Point, pressure?: number): Promise<void>
```

Simulates a pen long-click operation. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Driver-penLongClick(point: Point, pressure?: double): Promise<void>--><!--Device-Driver-penLongClick(point: Point, pressure?: double): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the long-clicked point. |
| pressure | number | No | Swipe pressure of the pen. The value ranges from 0.0 to 1.0. The default value is **1.0**.<br>Value range:[0.0, 1.0]<br>Default value: 1.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.penLongClick({ x: 100, y: 100 }, 0.5);
}

```

## penSwipe

```TypeScript
penSwipe(startPoint: Point, endPoint: Point, speed?: number, pressure?: number): Promise<void>
```

Simulates a pen swipe operation. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Driver-penSwipe(startPoint: Point, endPoint: Point, speed?: int, pressure?: double): Promise<void>--><!--Device-Driver-penSwipe(startPoint: Point, endPoint: Point, speed?: int, pressure?: double): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startPoint | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the start point. |
| endPoint | [Point](arkts-test-uitest-point-i.md) | Yes | Coordinates of the end point. |
| speed | number | No | Speed of pen swipe.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |
| pressure | number | No | Swipe pressure of the pen.<br>Value range:[0.0, 1.0]<br>Default value: 1.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.penSwipe({ x: 100, y: 100 }, { x: 100, y: 500 }, 600, 0.5);
}

```

## pressBack

```TypeScript
pressBack(): Promise<void>
```

Presses the Back button. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-pressBack(): Promise<void>--><!--Device-Driver-pressBack(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.pressBack();
}

```

## pressBack

```TypeScript
pressBack(displayId: number): Promise<void>
```

Presses the Back button on the specified screen. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-pressBack(displayId: int): Promise<void>--><!--Device-Driver-pressBack(displayId: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | Yes | Display ID. The value is an integer greater than or equal to 0.<br> **Note**: If the input **displayId** does not exist, the exception **17000007** is reported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.pressBack(0);
}

```

## pressHome

```TypeScript
pressHome(): Promise<void>
```

Injects an operation of returning to the home screen on the device. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-pressHome(): Promise<void>--><!--Device-Driver-pressHome(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.pressHome();
}

```

## pressHome

```TypeScript
pressHome(displayId: number): Promise<void>
```

Injects an operation of returning to the home screen on the specified display. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-pressHome(displayId: int): Promise<void>--><!--Device-Driver-pressHome(displayId: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | Yes | Display ID. The value is an integer greater than or equal to 0.<br> **Note**: If the input **displayId** does not exist, the exception **17000007** is reported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.pressHome(0);
}

```

## screenCap

```TypeScript
screenCap(savePath: string): Promise<boolean>
```

Captures the current screen and saves it as a PNG image to the given save path. This API uses a promise to return the result. This API can be used in scenarios where screenshots are supported.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-screenCap(savePath: string): Promise<boolean>--><!--Device-Driver-screenCap(savePath: string): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| savePath | string | Yes | File save path. The path must be the [sandbox path](../../../file-management/app-sandbox-directory.md) of the current application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the screenshot operation is successful.The value **true** indicates that the operation is successful, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.screenCap('/data/storage/el2/base/cache/1.png');
}

```

## screenCap

```TypeScript
screenCap(savePath: string, displayId: number): Promise<boolean>
```

Captures the specified screen and saves it as a PNG image to the given save path. This API uses a promise to return the result. This API can be used in scenarios where screenshots are supported.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-screenCap(savePath: string, displayId: int): Promise<boolean>--><!--Device-Driver-screenCap(savePath: string, displayId: int): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| savePath | string | Yes | File save path. The path must be the [sandbox path](../../../file-management/app-sandbox-directory.md) of the current application. |
| displayId | number | Yes | Display ID. The value is an integer greater than or equal to 0.<br> **Note**: If the input **displayId** does not exist, the exception **401** is reported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return whether the screenshot operation is successful. The value **true** indicates that the screen capture operation is successful, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.screenCap('/data/storage/el2/base/cache/1.png', 0);
}

```

## screenCapture

```TypeScript
screenCapture(savePath: string, rect?: Rect): Promise<boolean>
```

Captures the specified area of the current screen and saves the captured screenshot as a PNG image to the specified path. This API uses a promise to return the result. This API can be used in scenarios where screenshots are supported.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-screenCapture(savePath: string, rect?: Rect): Promise<boolean>--><!--Device-Driver-screenCapture(savePath: string, rect?: Rect): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| savePath | string | Yes | File save path. The path must be the [sandbox path](../../../file-management/app-sandbox-directory.md) of the current application. |
| rect | [Rect](../../apis-form-kit/arkts-apis/arkts-form-forminfo-rect-i.md) | No | Area of the screen to capture. The default value is the entire screen. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the screenshot operation is successful.The value **true** indicates the screenshot operation is successful, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.screenCapture('/data/storage/el2/base/cache/1.png', {
    left: 0,
    top: 0,
    right: 100,
    bottom: 100
  });
}

```

## setDisplayRotation

```TypeScript
setDisplayRotation(rotation: DisplayRotation): Promise<void>
```

Sets the display rotation of the current scene. This API uses a promise to return the result. It applies to rotatable scenarios.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-setDisplayRotation(rotation: DisplayRotation): Promise<void>--><!--Device-Driver-setDisplayRotation(rotation: DisplayRotation): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotation | [DisplayRotation](arkts-test-uitest-displayrotation-e.md) | Yes | Display rotation of the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, DisplayRotation } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.setDisplayRotation(DisplayRotation.ROTATION_180);
}

```

## setDisplayRotationEnabled

```TypeScript
setDisplayRotationEnabled(enabled: boolean): Promise<void>
```

Enables or disables display rotation. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-setDisplayRotationEnabled(enabled: boolean): Promise<void>--><!--Device-Driver-setDisplayRotationEnabled(enabled: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether the screen can be rotated. The value **true** indicates that the screen can be rotated, and **false** indicates the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.setDisplayRotationEnabled(false);
}

```

## swipe

```TypeScript
swipe(startx: number, starty: number, endx: number, endy: number, speed?: number): Promise<void>
```

Swipes from the start coordinate point to the target coordinate point. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-swipe(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>--><!--Device-Driver-swipe(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startx | number | Yes | Number, which indicates the horizontal coordinate of the start point. The value is an integer greater than or equal to 0.<br>Unit: px |
| starty | number | Yes | Number, which indicates the vertical coordinate of the start point. The value is an integer greater than or equal to 0.<br>Unit: px |
| endx | number | Yes | Number, which indicates the horizontal coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |
| endy | number | Yes | Number, which indicates the vertical coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |
| speed | number | No | Swipe speed, in px/s. The value ranges from 200 to 40000. If the set value is not in the range, the default value **600** is used.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.swipe(100, 100, 200, 200, 600);
}

```

## swipeBetween

```TypeScript
swipeBetween(from: Point, to: Point, speed?: number): Promise<void>
```

Swipes from the start coordinate point to the target coordinate point. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-swipeBetween(from: Point, to: Point, speed?: int): Promise<void>--><!--Device-Driver-swipeBetween(from: Point, to: Point, speed?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which transfers the coordinates of the start point and the ID of the display to which the start point belongs. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | Point object, which transfers the coordinates of the target point and the ID of the display to which it belongs.<br> **Note**: The target point and the start point must be on the same screen. Otherwise, the **17000007** exception is thrown. |
| speed | number | No | Swipe speed, in px/s. The value ranges from 200 to 40000. If the set value is not in the range, the default value **600** is used.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 17000007 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.swipeBetween({ x: 100, y: 100, displayId: 0 }, { x: 1000, y: 1000, displayId: 0 }, 800);
}

```

## swipeBetweenWithOptions

```TypeScript
swipeBetweenWithOptions(from: Point, to: Point, options?: TouchOptions): Promise<void>
```

Swipe on the screen between the specified points with optional touch options.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Driver-swipeBetweenWithOptions(from: Point, to: Point, options?: TouchOptions): Promise<void>--><!--Device-Driver-swipeBetweenWithOptions(from: Point, to: Point, options?: TouchOptions): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | [Point](arkts-test-uitest-point-i.md) | Yes | the coordinate point where the finger touches the screen. |
| to | [Point](arkts-test-uitest-point-i.md) | Yes | the coordinate point where the finger leaves the screen. |
| options | [TouchOptions](arkts-test-uitest-touchoptions-i.md) | No | the options for the swipe operation.Only the 'speed' and 'pressure' properties are applicable for this method.Setting other properties will result in a BusinessError 17000007.Default value: Refer to the default value of TouchOptions. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

## touchPadMultiFingerSwipe

```TypeScript
touchPadMultiFingerSwipe(fingers: number, direction: UiDirection, options?: TouchPadSwipeOptions): Promise<void>
```

Simulates a multi-finger swipe gesture on the touchpad. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Driver-touchPadMultiFingerSwipe(fingers: int, direction: UiDirection, options?: TouchPadSwipeOptions): Promise<void>--><!--Device-Driver-touchPadMultiFingerSwipe(fingers: int, direction: UiDirection, options?: TouchPadSwipeOptions): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fingers | number | Yes | Number of fingers. The value can be 3 or 4. |
| direction | [UiDirection](arkts-test-uitest-uidirection-e.md) | Yes | Swipe direction. |
| options | [TouchPadSwipeOptions](arkts-test-uitest-touchpadswipeoptions-i.md) | No | Additional options for the multi-finger swipe gesture on the touchpad. The default values of the attributes in **{@link TouchPadSwipeOptions}** are used by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) |  |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiDirection } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.touchPadMultiFingerSwipe(3, UiDirection.UP);
}

```

## touchPadTwoFingersScroll

```TypeScript
touchPadTwoFingersScroll(point: Point, direction: UiDirection, d: number, speed?: number): Promise<void>
```

Simulates a two-finger scroll gesture on the touchpad. This API uses a promise to return the result.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Driver-touchPadTwoFingersScroll(point: Point, direction: UiDirection, d: int, speed?: int): Promise<void>--><!--Device-Driver-touchPadTwoFingersScroll(point: Point, direction: UiDirection, d: int, speed?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](arkts-test-uitest-point-i.md) | Yes | Point of the mouse cursor when the two-finger scrolling is performed on the touchpad. |
| direction | [UiDirection](arkts-test-uitest-uidirection-e.md) | Yes | Direction of two-finger scrolling on the touchpad. |
| d | number | Yes | Number of grids scrolled by two fingers on the touchpad. A grid indicates a 120 px shift to the target point. The value is an integer greater than or equal to 0. |
| speed | number | No | Speed of two-finger scrolling on the touchpad.<br>Unit: ticks/s.<br>Value range: [1, 500]<br>Throws error code 17000007 if negative.<br>Default value: 20 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiDirection } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.touchPadTwoFingersScroll({ x: 100, y: 100 }, UiDirection.UP, 20, 10);
}

```

## triggerCombineKeys

```TypeScript
triggerCombineKeys(key0: number, key1: number, key2?: number): Promise<void>
```

Triggers a combination key event based on the specified key values. This API uses a promise to return the result.For example, if the value of **Key** is (2072, 2019), the combination key **Ctrl+C** that matches the value is found and clicked.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-triggerCombineKeys(key0: number, key1: number, key2?: number): Promise<void>--><!--Device-Driver-triggerCombineKeys(key0: number, key1: number, key2?: number): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key0 | number | Yes | First key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md). |
| key1 | number | Yes | Second key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md). |
| key2 | number | No | Third key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.triggerCombineKeys(2072, 2047, 2035);
}

```

## triggerCombineKeys

```TypeScript
triggerCombineKeys(key0: number, key1: number, key2?: number, displayId?: number): Promise<void>
```

Triggers a combination key event based on the specified key values on the specified screen. This API uses a promise to return the result. For example, if the value of **Key** is (2072, 2019), the combination key **Ctrl+C** that matches the value is found and clicked.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-triggerCombineKeys(key0: int, key1: int, key2?: int, displayId?: int): Promise<void>--><!--Device-Driver-triggerCombineKeys(key0: int, key1: int, key2?: int, displayId?: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key0 | number | Yes | First key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md). |
| key1 | number | Yes | Second key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md). |
| key2 | number | No | Third key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).<br>Default value: 0 |
| displayId | number | No | Display ID. The value is an integer greater than or equal to 0. The default value is the default display ID of the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.triggerCombineKeys(2072, 2047, 2035, 0);
}

```

## triggerKey

```TypeScript
triggerKey(keyCode: number): Promise<void>
```

Triggers a key event by passing the key value. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-triggerKey(keyCode: int): Promise<void>--><!--Device-Driver-triggerKey(keyCode: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyCode | number | Yes | Key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';
import { KeyCode } from '@kit.InputKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.triggerKey(KeyCode.KEYCODE_BACK); // Back button
}

```

## triggerKey

```TypeScript
triggerKey(keyCode: number, displayId: number): Promise<void>
```

Triggers a key event by passing the key value on the specified screen. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Driver-triggerKey(keyCode: int, displayId: int): Promise<void>--><!--Device-Driver-triggerKey(keyCode: int, displayId: int): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyCode | number | Yes | Key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md). |
| displayId | number | Yes | Display ID. The value is an integer greater than or equal to 0.<br> **Note**: If the input **displayId** does not exist, the exception **401** is reported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';
import { KeyCode } from '@kit.InputKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.triggerKey(KeyCode.KEYCODE_BACK, 0); // Back button
}

```

## triggerPenKey

```TypeScript
triggerPenKey(key: PenKey, mode: PenMode, operation: PenKeyOperation, options?: PenKeyOperationOptions): Promise<void>
```

Trigger pen key operation.

Supported combinations:

- HANDWRITING mode: HANDWRITING key with CLICK or DOUBLE_CLICK operation.  
- AIR_MOUSE mode: AIR_MOUSE key with CLICK or DOUBLE_CLICK operation (requires point in options),HANDWRITING key with CLICK or DOUBLE_CLICK operation, SMART key with CLICK operation.Other combinations will result in a BusinessError 17000007.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Driver-triggerPenKey(key: PenKey, mode: PenMode, operation: PenKeyOperation, options?: PenKeyOperationOptions): Promise<void>--><!--Device-Driver-triggerPenKey(key: PenKey, mode: PenMode, operation: PenKeyOperation, options?: PenKeyOperationOptions): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | [PenKey](arkts-test-uitest-penkey-e.md) | Yes | the pen key to operate. |
| mode | [PenMode](arkts-test-uitest-penmode-e.md) | Yes | the pen mode. |
| operation | [PenKeyOperation](arkts-test-uitest-penkeyoperation-e.md) | Yes | the operation type. |
| options | [PenKeyOperationOptions](arkts-test-uitest-penkeyoperationoptions-i.md) | No | the operation options, including optional coordinate point.Default value: Refer to the default value of PenKeyOperationOption. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. Unsupported key, mode, and operation combination. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, PenKey, PenMode, PenKeyOperation } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // Trigger the handwriting key click in handwriting mode.
  await driver.triggerPenKey(PenKey.HANDWRITING, PenMode.HANDWRITING, PenKeyOperation.CLICK);
  // Trigger the air mouse key double-click in air mouse mode.
  await driver.triggerPenKey(PenKey.AIR_MOUSE, PenMode.AIR_MOUSE, PenKeyOperation.DOUBLE_CLICK, { point: { x: 500, y: 500 } });
  // Trigger the smart key click in air mouse mode.
  await driver.triggerPenKey(PenKey.SMART, PenMode.AIR_MOUSE, PenKeyOperation.CLICK);
}

```

## waitForComponent

```TypeScript
waitForComponent(on: On, time: number): Promise<Component>
```

Searches for the target component based on the attributes within a specified time. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-waitForComponent(on: On, time: number): Promise<Component>--><!--Device-Driver-waitForComponent(on: On, time: number): Promise<Component>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | [On](arkts-test-uitest-on-c.md) | Yes | Attributes of the target {@link Component}. |
| time | number | Yes | Duration for searching for the target {@link Component}, in ms. The value is an integer greater than or equal to 0.<br>Unit: ms<br>Value range: The value should be >= 0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Component&gt; | the first matched {@link Component} or undefined. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.waitForComponent(ON.text('next page'), 500);
}

```

## waitForIdle

```TypeScript
waitForIdle(idleTime: number, timeout: number): Promise<boolean>
```

Checks whether all components on the current UI are idle. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-waitForIdle(idleTime: int, timeout: int): Promise<boolean>--><!--Device-Driver-waitForIdle(idleTime: int, timeout: int): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| idleTime | number | Yes | Idle time threshold, in ms. If the duration for which a component remains inactive reaches this threshold, it is considered as idle. The value must be an integer greater than or equal to 0.<br>Unit: ms |
| timeout | number | Yes | Maximum waiting time, in milliseconds. The value is an integer greater than or equal to 0.<br>Unit: ms |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether all components on the current UI are idle. The value true indicates that all components on the current UI are idle, and false indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let idled: boolean = await driver.waitForIdle(4000, 5000);
}

```

## wakeUpDisplay

```TypeScript
wakeUpDisplay(): Promise<void>
```

Wakes up the current display. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Driver-wakeUpDisplay(): Promise<void>--><!--Device-Driver-wakeUpDisplay(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.wakeUpDisplay();
}

```

