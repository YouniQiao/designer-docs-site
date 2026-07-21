# UiDriver

The **UiDriver** class is the main entry to the UiTest framework. It provides APIs for features such as component matching/search, key injection, coordinate clicking/sliding, and screenshot.All APIs provided by this class, except **UiDriver.create()**, use a promise to return the result and must be invoked using **await**.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [Driver](arkts-test-uitest-driver-c.md)

<!--Device-unnamed-declare class UiDriver--><!--Device-unnamed-declare class UiDriver-End-->

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@kit.TestKit';
```

<a id="assertcomponentexist"></a>
## assertComponentExist

```TypeScript
assertComponentExist(by: By): Promise<void>
```

Asserts that a component that matches the given attributes exists on the current page. If the component does not exist, the API throws a JS exception, causing the current test case to fail. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [assertComponentExist](arkts-test-uitest-driver-c.md#assertcomponentexist-1)

<!--Device-UiDriver-assertComponentExist(by: By): Promise<void>--><!--Device-UiDriver-assertComponentExist(by: By): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | [By](arkts-test-uitest-by-c.md) | Yes | Attributes of the target component. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | if the input parameters are invalid. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000003](../errorcode-uitest.md#17000003-assertion-failure) | if the assertion failed. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.assertComponentExist(BY.text('next page'));
}

```

<a id="click"></a>
## click

```TypeScript
click(x: number, y: number): Promise<void>
```

Clicks a specific point of this **UiDriver** object based on the given coordinates. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [click](arkts-test-uitest-component-c.md#click-1)

<!--Device-UiDriver-click(x: number, y: number): Promise<void>--><!--Device-UiDriver-click(x: number, y: number): Promise<void>-End-->

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

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.click(100, 100);
}

```

<a id="create"></a>
## create

```TypeScript
static create(): UiDriver
```

Creates a **UiDriver** object and returns the object created. This API is a static API.

> **NOTE**  
>  
> This method is supported since API version 8 and deprecated since API version 9. You are advised to use  
> [create<sup>9+</sup>](arkts-test-uitest-driver-c.md#create-1) instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [create](arkts-test-uitest-driver-c.md#create-1)

<!--Device-UiDriver-static create(): UiDriver--><!--Device-UiDriver-static create(): UiDriver-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [UiDriver](arkts-test-uitest-uidriver-c.md) | - **UiDriver** object created. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
}

```

<a id="delayms"></a>
## delayMs

```TypeScript
delayMs(duration: number): Promise<void>
```

Delays this **UiDriver** object within the specified duration. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [delayMs](arkts-test-uitest-driver-c.md#delayms-1)

<!--Device-UiDriver-delayMs(duration: number): Promise<void>--><!--Device-UiDriver-delayMs(duration: number): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| duration | number | Yes | Duration of time.<br>Unit: ms |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.delayMs(1000);
}

```

<a id="doubleclick"></a>
## doubleClick

```TypeScript
doubleClick(x: number, y: number): Promise<void>
```

Double-clicks a specific point of this **UiDriver** object based on the given coordinates. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [doubleClick](arkts-test-uitest-component-c.md#doubleclick-1)

<!--Device-UiDriver-doubleClick(x: number, y: number): Promise<void>--><!--Device-UiDriver-doubleClick(x: number, y: number): Promise<void>-End-->

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

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.doubleClick(100, 100);
}

```

<a id="findcomponent"></a>
## findComponent

```TypeScript
findComponent(by: By): Promise<UiComponent>
```

Searches this **UiDriver** object for the target component that matches the given attributes. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [findComponent(on:](arkts-test-uitest-driver-c.md#findcomponent-1)

<!--Device-UiDriver-findComponent(by: By): Promise<UiComponent>--><!--Device-UiDriver-findComponent(by: By): Promise<UiComponent>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | [By](arkts-test-uitest-by-c.md) | Yes | Attributes of the target component. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UiComponent&gt; | - Promise used to return the component. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.text('next page'));
}

```

<a id="findcomponents"></a>
## findComponents

```TypeScript
findComponents(by: By): Promise<Array<UiComponent>>
```

Searches this **UiDriver** object for all components that match the given attributes. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [findComponents(on:](arkts-test-uitest-driver-c.md#findcomponents-1)

<!--Device-UiDriver-findComponents(by: By): Promise<Array<UiComponent>>--><!--Device-UiDriver-findComponents(by: By): Promise<Array<UiComponent>>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | [By](arkts-test-uitest-by-c.md) | Yes | Attributes of the target component. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;UiComponent&gt;&gt; | - Promise used to return the list of components. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let buttonList: Array<UiComponent> = await driver.findComponents(BY.text('next page'));
}

```

<a id="longclick"></a>
## longClick

```TypeScript
longClick(x: number, y: number): Promise<void>
```

Long-clicks a specific point of this **UiDriver** object based on the given coordinates. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [longClick](arkts-test-uitest-component-c.md#longclick-1)

<!--Device-UiDriver-longClick(x: number, y: number): Promise<void>--><!--Device-UiDriver-longClick(x: number, y: number): Promise<void>-End-->

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

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.longClick(100, 100);
}

```

<a id="pressback"></a>
## pressBack

```TypeScript
pressBack(): Promise<void>
```

Presses the Back button on this **UiDriver** object. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [pressBack()](arkts-test-uitest-driver-c.md#pressback-1)

<!--Device-UiDriver-pressBack(): Promise<void>--><!--Device-UiDriver-pressBack(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.pressBack();
}

```

<a id="screencap"></a>
## screenCap

```TypeScript
screenCap(savePath: string): Promise<boolean>
```

Captures the current screen of this **UiDriver** object and saves it as a PNG image to the given save path. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [screenCap(savePath:](arkts-test-uitest-driver-c.md#screencap-1)

<!--Device-UiDriver-screenCap(savePath: string): Promise<boolean>--><!--Device-UiDriver-screenCap(savePath: string): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| savePath | string | Yes | File save path. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the screenshot operation is successful. The value **true* The value **true** indicates the screenshot operation is successful, and **false** indicates the opposite. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.screenCap('/data/storage/el2/base/cache/1.png');
}

```

<a id="swipe"></a>
## swipe

```TypeScript
swipe(startx: number, starty: number, endx: number, endy: number): Promise<void>
```

Swipes on this **UiDriver** object from the start point to the end point based on the given coordinates. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [swipe](arkts-test-uitest-driver-c.md#swipe-1)

<!--Device-UiDriver-swipe(startx: number, starty: number, endx: number, endy: number): Promise<void>--><!--Device-UiDriver-swipe(startx: number, starty: number, endx: number, endy: number): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startx | number | Yes | Number, which indicates the horizontal coordinate of the start point. The value is an integer greater than or equal to 0.<br>Unit: px |
| starty | number | Yes | Number, which indicates the vertical coordinate of the start point. The value is an integer greater than or equal to 0.<br>Unit: px |
| endx | number | Yes | Number, which indicates the horizontal coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |
| endy | number | Yes | Number, which indicates the vertical coordinate of the target point. The value is an integer greater than or equal to 0.<br>Unit: px |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.swipe(100, 100, 200, 200);
}

```

<a id="triggerkey"></a>
## triggerKey

```TypeScript
triggerKey(keyCode: number): Promise<void>
```

Triggers the key of this **UiDriver** object that matches the given key code. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [triggerKey(keyCode:](arkts-test-uitest-driver-c.md#triggerkey-1)

<!--Device-UiDriver-triggerKey(keyCode: number): Promise<void>--><!--Device-UiDriver-triggerKey(keyCode: number): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyCode | number | Yes | Key value. The value is an integer greater than or equal to 0.For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiDriver } from '@kit.TestKit';
import { KeyCode } from '@kit.InputKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.triggerKey(KeyCode.KEYCODE_BACK); // Back button
}

```

