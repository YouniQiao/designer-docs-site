# UiWindow

The **UiWindow** class represents a window on the UI and provides APIs for obtaining window attributes, dragging a window, and adjusting the window size.All APIs provided in this class use a promise to return the result and must be invoked using **await**.

**Since:** 9

<!--Device-unnamed-declare class UiWindow--><!--Device-unnamed-declare class UiWindow-End-->

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@kit.TestKit';
```

<a id="close"></a>
## close

```TypeScript
close(): Promise<void>
```

Closes a window. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-close(): Promise<void>--><!--Device-UiWindow-close(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  await window.close();
}

```

<a id="focus"></a>
## focus

```TypeScript
focus(): Promise<void>
```

Focuses a window. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-focus(): Promise<void>--><!--Device-UiWindow-focus(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  await window.focus();
}

```

<a id="getbounds"></a>
## getBounds

```TypeScript
getBounds(): Promise<Rect>
```

Obtains the bounds information of a window. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-getBounds(): Promise<Rect>--><!--Device-UiWindow-getBounds(): Promise<Rect>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Rect&gt; | - Promise used to return the window border information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  let rect = await window.getBounds();
}

```

<a id="getbundlename"></a>
## getBundleName

```TypeScript
getBundleName(): Promise<string>
```

Obtains the bundle name of the application to which a window belongs. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-getBundleName(): Promise<string>--><!--Device-UiWindow-getBundleName(): Promise<string>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | - Promise used to return the bundle name of the application to which the window belongs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  let name: string = await window.getBundleName();
}

```

<a id="getdisplayid"></a>
## getDisplayId

```TypeScript
getDisplayId(): Promise<number>
```

Obtains the ID of the display to which a window belongs. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-UiWindow-getDisplayId(): Promise<int>--><!--Device-UiWindow-getDisplayId(): Promise<int>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | - Promise used to return the ID of the display to which the window belongs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

**Example**

```TypeScript
// xxx.test.ets
import { UiWindow, Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  let id = await window.getDisplayId();
}

```

<a id="gettitle"></a>
## getTitle

```TypeScript
getTitle(): Promise<string>
```

Obtains the window title. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-getTitle(): Promise<string>--><!--Device-UiWindow-getTitle(): Promise<string>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | - Promise used to return the window title. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  let title = await window.getTitle();
}

```

<a id="getwindowmode"></a>
## getWindowMode

```TypeScript
getWindowMode(): Promise<WindowMode>
```

Obtains the window mode. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-getWindowMode(): Promise<WindowMode>--><!--Device-UiWindow-getWindowMode(): Promise<WindowMode>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WindowMode&gt; | - Promise used to return the window mode information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  let mode = await window.getWindowMode();
}

```

<a id="isactive"></a>
## isActive

```TypeScript
isActive(): Promise<boolean>
```

Checks whether a window is active. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-isActive(): Promise<boolean>--><!--Device-UiWindow-isActive(): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the window is active. The value **true** indicates that the window is active, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  let focused = await window.isActive();
}

```

<a id="isactived"></a>
## isActived

```TypeScript
isActived(): Promise<boolean>
```

Checks whether a window is active. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 11

**Substitutes:** [isActive](arkts-test-uitest-uiwindow-c.md#isactive-1)

<!--Device-UiWindow-isActived(): Promise<boolean>--><!--Device-UiWindow-isActived(): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the window is active. The value **true** indicates that the window is active, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  let focused = await window.isActived();
}

```

<a id="isfocused"></a>
## isFocused

```TypeScript
isFocused(): Promise<boolean>
```

Checks whether a window is focused. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-isFocused(): Promise<boolean>--><!--Device-UiWindow-isFocused(): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the window is focused. The value **true** indicates that the component is focused, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  let focused = await window.isFocused();
}

```

<a id="maximize"></a>
## maximize

```TypeScript
maximize(): Promise<void>
```

Maximizes a window. This API uses a promise to return the result. This API is applicable to windows that can be maximized.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-maximize(): Promise<void>--><!--Device-UiWindow-maximize(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  await window.maximize();
}

```

<a id="minimize"></a>
## minimize

```TypeScript
minimize(): Promise<void>
```

Minimizes a window. This API uses a promise to return the result. This API is applicable to windows that can be minimized.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-minimize(): Promise<void>--><!--Device-UiWindow-minimize(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  await window.minimize();
}

```

<a id="moveto"></a>
## moveTo

```TypeScript
moveTo(x: number, y: number): Promise<void>
```

Moves a window to the target point. This API uses a promise to return the result. This API is applicable to moveable windows.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-moveTo(x: int, y: int): Promise<void>--><!--Device-UiWindow-moveTo(x: int, y: int): Promise<void>-End-->

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
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  await window.moveTo(100, 100);
}

```

<a id="resize"></a>
## resize

```TypeScript
resize(wide: number, height: number, direction: ResizeDirection): Promise<void>
```

Resizes a window based on the specified width, height, and direction. This API uses a promise to return the result. This API is applicable to resizable windows.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-resize(wide: int, height: int, direction: ResizeDirection): Promise<void>--><!--Device-UiWindow-resize(wide: int, height: int, direction: ResizeDirection): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wide | number | Yes | Width of the adjusted window, in number format.The value is an integer greater than or equal to 0.<br>Unit: px |
| height | number | Yes | Height of the adjusted window, in number format.The value is an integer greater than or equal to 0.<br>Unit: px |
| direction | [ResizeDirection](arkts-test-uitest-resizedirection-e.md) | Yes | Resize direction. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |

<a id="resume"></a>
## resume

```TypeScript
resume(): Promise<void>
```

Resumes a window to its previous mode. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-resume(): Promise<void>--><!--Device-UiWindow-resume(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  await window.resume();
}

```

<a id="split"></a>
## split

```TypeScript
split(): Promise<void>
```

Switches to the split-screen mode. This API uses a promise to return the result. This API is applicable to windows that support screen splitting.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UiWindow-split(): Promise<void>--><!--Device-UiWindow-split(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |
| [17000005](../errorcode-uitest.md#17000005-operation-not-supported) | This operation is not supported. |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ actived: true });
  await window.split();
}

```

