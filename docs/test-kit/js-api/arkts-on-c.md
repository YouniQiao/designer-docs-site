# On

自API版本9起，UiTest框架在**On**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。 **On**类提供的API具有以下特点： 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。 2. 为组件属性提供多种匹配模式。 3. 支持组件的绝对定位和相对定位。可以使用[ON.isBefore](arkts-on-c.md#isBefore)和 [ON.isAfter](arkts-on-c.md#isAfter)等API指定相邻组件的特征来辅助定位。 **On**类中提供的所有API都是同步的。建议使用静态构造器**ON**以链式模式创建**On**对象。

**Since:** 9

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## belongingDisplay

```TypeScript
belongingDisplay(displayId: int): On
```

获取指定显示器上的组件对象。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | int | Yes | 组件所属的显示ID。该值为大于或等于0的整数。  注意：如果输入的displayId不存在，将上报异常17000007。可以使用  [getAllDisplays]@ohos.display:display.getAllDisplays(callback: AsyncCallback>)获取  当前所有display对象并使用它们获取对应的显示ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 指定组件所属显示器的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000007 | 参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.belongingDisplay(0); // Use the static constructor ON to create an On object and specify the ID of the display to which the target component belongs.

```

## checkable

```TypeScript
checkable(b?: boolean): On
```

指定目标组件的可勾选属性。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件可勾选属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。1.参数类型错误；2.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.checkable(true); // Use the static constructor ON to create an On object and specify the checkable attribute of the target component.

```

## checked

```TypeScript
checked(b?: boolean): On
```

指定目标组件的勾选属性。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件勾选属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.checked(true); // Use the static constructor ON to create an On object and specify the checked attribute of the target component.

```

## clickable

```TypeScript
clickable(b?: boolean): On
```

指定目标组件的可点击属性。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件可点击属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.clickable(true); // Use the static constructor ON to create an On object and specify the clickable attribute of the target component.

```

## description

```TypeScript
description(val: string, pattern?: MatchPattern): On
```

指定目标组件的描述。支持多种匹配模式。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | string | Yes | 组件的描述。 |
| pattern | MatchPattern | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.description('123'); // Use the static constructor ON to create an On object and specify the description attribute of the target component.

```

## enabled

```TypeScript
enabled(b?: boolean): On
```

指定目标组件的可用属性。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件可用属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.enabled(true); // Use the static constructor ON to create an On object and specify the enabled attribute of the target component.

```

## focused

```TypeScript
focused(b?: boolean): On
```

指定目标组件的聚焦属性。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件聚焦属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.focused(true); // Use the static constructor ON to create an On object and specify the focused attribute of the target component.

```

## hint

```TypeScript
hint(val: string, pattern?: MatchPattern): On
```

获取指定提示文本的组件对象并返回**On**对象。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | string | Yes | 组件的指定提示文本。 |
| pattern | MatchPattern | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 指定提示文本组件的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { MatchPattern, On, ON } from '@kit.TestKit';

let on: On = ON.hint('welcome', MatchPattern.EQUALS); // Use the static constructor ON to create an On object with the hint text attribute of the target component specified.

```

## id

```TypeScript
id(id: string): On
```

指定目标组件的ID属性。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | 组件ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件ID属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.id('123'); // Use the static constructor ON to create an On object and specify the ID attribute of the target component.

```

## id

```TypeScript
id(id: string, pattern: MatchPattern): On
```

指定目标组件的**id**属性和匹配模式。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | 组件ID。 |
| pattern | MatchPattern | Yes | 文本匹配模式{@link MatchPattern}。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件ID属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { MatchPattern, On, ON } from '@kit.TestKit';

let on: On = ON.id('id', MatchPattern.REG_EXP_ICASE); // Use case-insensitive regular expression to match the ID attribute value of the component.

```

## inWindow

```TypeScript
inWindow(bundleName: string): On
```

指定目标组件位于给定应用窗口内。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用窗口的包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | - On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.inWindow('com.uitestScene.acts'); // Use the static constructor ON to create an On object and specify that the target component is located within the given application window.

```

## isAfter

```TypeScript
isAfter(on: On): On
```

指定目标组件位于给定属性组件的后方。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | 属性组件的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | - On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

// Use the static constructor ON to create an On object and specify that the target component is located after the given attribute component.
let on: On = ON.type('Text').isAfter(ON.text('123')); // Search for the first Text component located after the component whose text is 123.

```

## isAfter

```TypeScript
isAfter(com: Component): On
```

要求目标组件位于给定{@link Component}对象指定的组件后方，用于相对定位组件。

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| com | Component | Yes | 描述目标组件在其后方的组件。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | 此{@link On}对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000007 | 参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, On, ON } from '@kit.TestKit';

async function demo() {
  let driver = Driver.create();
  let com: Component = await driver.findComponent(ON.type('Text'));
  let on: On = ON.text('123').isAfter(com); // Search for the component whose text is 123 after the first text component.
}

```

## isBefore

```TypeScript
isBefore(on: On): On
```

指定目标组件位于给定属性组件的前方。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | 属性组件的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | - On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

// Use the static constructor ON to create an On object and specify that the target component is located before the given attribute component.
let on: On = ON.type('Button').isBefore(ON.text('123')); // Search for the first Button component located before the component whose text is 123.

```

## isBefore

```TypeScript
isBefore(com: Component): On
```

要求目标组件位于给定{@link Component}对象指定的组件前方，用于相对定位组件。

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| com | Component | Yes | 描述目标组件在其前方的组件。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | 此{@link On}对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000007 | 参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, On, ON } from '@kit.TestKit';

async function demo() {
  let driver = Driver.create();
  let com: Component = await driver.findComponent(ON.type('Text'));
  let on: On = ON.text('123').isBefore(com); // Search for the first component whose text is 123 before the first text component.
}

```

## longClickable

```TypeScript
longClickable(b?: boolean): On
```

指定目标组件的可长按属性。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件可长按属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.longClickable(true); // Use the static constructor ON to create an On object and specify the longClickable attribute of the target component.

```

## originalText

```TypeScript
originalText(text: string, pattern?: MatchPattern): On
```

指定组件的文本内容和文本匹配模式。 > **说明：** > > 如果组件的[accessibilityLevel]./@internal/component/ets/common:CommonMethod#accessibilityLevel > 设置为**no**或**no-hide-descendants**，可以使用此API指定目标组件的文本属性来查找组件。 > 此时[On.text()](arkts-on-c.md#text) API不生效。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 组件文本，用于匹配目标组件。 |
| pattern | MatchPattern | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件文本属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000007 | 参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.originalText('123'); // Use the static constructor ON to create an On object and specify the originalText attribute of the target component.

```

## scrollable

```TypeScript
scrollable(b?: boolean): On
```

指定目标组件的可滚动属性。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件可滚动属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.scrollable(true); // Use the static constructor ON to create an On object and specify the scrollable attribute of the target component.

```

## selected

```TypeScript
selected(b?: boolean): On
```

指定目标组件的选中属性。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件选中属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.selected(true); // Use the static constructor ON to create an On object and specify the selected attribute of the target component.

```

## text

```TypeScript
text(txt: string, pattern?: MatchPattern): On
```

指定目标组件的文本属性。支持多种匹配模式。 > **说明：** > > 如果组件的[accessibilityLevel]./@internal/component/ets/common:CommonMethod#accessibilityLevel > 设置为**no**或**no-hide-descendants**，则无法使用此API指定目标组件的文本属性来查找组件。 > 此时可以使用[On.originalText()](arkts-on-c.md#originalText) API。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| txt | string | Yes | 组件文本，用于匹配目标组件。 |
| pattern | MatchPattern | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件文本属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.text('123'); // Use the static constructor ON to create an On object and specify the text attribute of the target component.

```

## type

```TypeScript
type(tp: string): On
```

指定目标组件的类型属性。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tp | string | Yes | 组件类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件类型属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.type('Button'); // Use the static constructor ON to create an On object and specify the type attribute of the target component.

```

## type

```TypeScript
type(tp: string, pattern: MatchPattern): On
```

指定目标组件的**type**属性和匹配模式。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tp | string | Yes | 组件类型。 |
| pattern | MatchPattern | Yes | 文本匹配模式{@link MatchPattern}。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | - 匹配目标组件类型属性的On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON, MatchPattern } from '@kit.TestKit';

let on: On = ON.type('Button', MatchPattern.EQUALS); // Use the static constructor ON to create an On object and specify the type attribute of the target component.

```

## within

```TypeScript
within(on: On): On
```

指定目标组件位于给定属性组件的内部。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | 属性组件的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | - On对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

// Use the static constructor ON to create an On object and specify that the target component is located within the given attribute component.
let on: On = ON.text('java').within(ON.type('Scroll')); // Search for the child component whose text is java within the Scroller component.

```

## within

```TypeScript
within(com: Component): On
```

要求目标组件位于给定{@link Component}对象指定的组件内部，用于相对定位组件。

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| com | Component | Yes | 描述目标组件在其内部的组件。 |

**Return value:**

| Type | Description |
| --- | --- |
| On | 此{@link On}对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000007 | 参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, On, ON } from '@kit.TestKit';

async function demo() {
  let driver = Driver.create();
  let com: Component = await driver.findComponent(ON.type('Text'));
  let on: On = ON.text('123').within(com); // Search for the component whose text is 123 within the first text component.
}

```

