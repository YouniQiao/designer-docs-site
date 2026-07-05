# Component

表示UI上的组件，提供获取组件属性、单击组件、滚动查找组件和文本注入的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。

**Since:** 9

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## clearText

```TypeScript
clearText(): Promise<void>
```

清除组件的文本信息。该API仅对可编辑文本组件生效。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let text: Component = await driver.findComponent(ON.text('hello world'));
  await text.clearText();
}

```

## click

```TypeScript
click(): Promise<void>
```

单击此组件。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, ON, Component } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  await button.click();
}

```

## doubleClick

```TypeScript
doubleClick(): Promise<void>
```

双击此组件。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  await button.doubleClick();
}

```

## dragTo

```TypeScript
dragTo(target: Component): Promise<void>
```

将此组件拖动到目标组件。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | Component | Yes | 目标组件。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  let text: Component = await driver.findComponent(ON.text('hello world'));
  await button.dragTo(text);
}

```

## getBounds

```TypeScript
getBounds(): Promise<Rect>
```

获取此组件的边界信息。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Rect> | - 用于返回组件对象边界信息的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  let rect = await button.getBounds();
}

```

## getBoundsCenter

```TypeScript
getBoundsCenter(): Promise<Point>
```

获取此组件所占区域的中心点。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Point> | - 用于返回组件对象所占区域中心点的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  let point = await button.getBoundsCenter();
}

```

## getDescription

```TypeScript
getDescription(): Promise<string>
```

获取此组件的描述。该API使用Promise返回结果。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - 用于返回组件描述的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  let description = await button.getDescription();
}

```

## getDisplayId

```TypeScript
getDisplayId(): Promise<int>
```

获取组件所属的显示ID。该API使用Promise返回结果。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | - 用于返回组件所属显示ID的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('TextInput'));
  let displayId = await button.getDisplayId();
}

```

## getHint

```TypeScript
getHint(): Promise<string>
```

获取组件的提示文本。该API使用Promise返回结果。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - 用于返回组件提示文本的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('TextInput'));
  let hints = await button.getHint();
}

```

## getId

```TypeScript
getId(): Promise<string>
```

获取此组件的ID。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - 用于返回组件ID的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  let id = await button.getId();
}

```

## getOriginalText

```TypeScript
getOriginalText(): Promise<string>
```

获取此组件的文本信息。该API使用Promise返回结果。如果组件的 [accessibilityLevel]./@internal/component/ets/common:CommonMethod#accessibilityLevel 属性设置为**no**或**no-hide-descendants**，可以使用此API获取组件的文本信息， 但[Component.getText()](arkts-component-c.md#getText)无法获取。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - 用于返回组件文本信息的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  let text = await button.getOriginalText();
}

```

## getText

```TypeScript
getText(): Promise<string>
```

获取此组件的文本信息。该API使用Promise返回结果。 > **说明：** > > 如果组件的[accessibilityLevel]./@internal/component/ets/common:CommonMethod#accessibilityLevel > 属性设置为**no**或**no-hide-descendants**，则无法使用此API获取组件的文本信息。 > 此时可以使用[Component.getOriginalText()](arkts-component-c.md#getOriginalText)替代。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - 用于返回组件文本信息的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  let text = await button.getText();
}

```

## getType

```TypeScript
getType(): Promise<string>
```

获取此组件的类型。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - 用于返回组件类型的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  let type = await button.getType();
}

```

## inputText

```TypeScript
inputText(text: string): Promise<void>
```

清除组件中的原文本并输入指定文本。该API仅对可编辑文本组件生效。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 输入文本。目前支持英文、中文和特殊字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let text: Component = await driver.findComponent(ON.text('hello world'));
  await text.inputText('123');
}

```

## inputText

```TypeScript
inputText(text: string, mode: InputTextMode): Promise<void>
```

以指定文本输入模式向组件输入文本。该API仅对可编辑文本组件生效。该API使用Promise返回结果。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 输入文本。目前支持英文、中文和特殊字符。 |
| mode | InputTextMode | Yes | 文本输入模式。  详见[InputTextMode](arkts-inputtextmode-i.md#InputTextMode)。  注意：如果InputTextMode.addition设置为true，则指定文本将追加到组件现有文本末尾。  否则，指定文本将覆盖组件现有文本。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 801 | 能力不支持。由于设备能力限制，功能无法正常工作。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function mode_demo() {
  let driver: Driver = Driver.create();
  let text: Component = await driver.findComponent(ON.text('hello world'));
  await text.inputText('123', { paste: true, addition: false });
}

```

## isCheckable

```TypeScript
isCheckable(): Promise<boolean>
```

获取此组件的可勾选状态。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件对象是否可勾选的Promise对象。  值true表示组件可勾选，false表示不可勾选。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let checkBox: Component = await driver.findComponent(ON.type('Checkbox'));
  if (await checkBox.isCheckable()) {
    console.info('This checkBox is checkable');
  } else {
    console.info('This checkBox is not checkable');
  }
}

```

## isChecked

```TypeScript
isChecked(): Promise<boolean>
```

获取此组件的勾选状态。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件对象勾选状态的Promise对象。  值true表示组件已勾选，false表示未勾选。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let checkBox: Component = await driver.findComponent(ON.type('Checkbox'));
  if (await checkBox.isChecked()) {
    console.info('This checkBox is checked');
  } else {
    console.info('This checkBox is not checked');
  }
}

```

## isClickable

```TypeScript
isClickable(): Promise<boolean>
```

获取此组件的可点击状态。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件对象是否可点击的Promise对象。  值true表示组件可点击，false表示不可点击。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  if (await button.isClickable()) {
    console.info('This button can be clicked');
  } else {
    console.info('This button can not be clicked');
  }
}

```

## isEnabled

```TypeScript
isEnabled(): Promise<boolean>
```

获取此组件的可用状态。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件是否可用的Promise对象。  值true表示组件可用，false表示不可用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  if (await button.isEnabled()) {
    console.info('This button can be operated');
  } else {
    console.info('This button can not be operated');
  }
}

```

## isFocused

```TypeScript
isFocused(): Promise<boolean>
```

检查组件是否已聚焦。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件是否聚焦的Promise对象。  值true表示组件已聚焦，false表示未聚焦。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  if (await button.isFocused()) {
    console.info('This button is focused');
  } else {
    console.info('This button is not focused');
  }
}

```

## isLongClickable

```TypeScript
isLongClickable(): Promise<boolean>
```

获取此组件的可长按状态。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件对象是否可长按的Promise对象。  值true表示组件可长按，false表示不可长按。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  if (await button.isLongClickable()) {
    console.info('This button supports long click');
  } else {
    console.info('This button can not support long click');
  }
}

```

## isScrollable

```TypeScript
isScrollable(): Promise<boolean>
```

获取此组件的可滚动状态。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件对象是否可滚动的Promise对象。  值true表示组件可滚动，false表示不可滚动。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let scrollBar: Component = await driver.findComponent(ON.scrollable(true));
  if (await scrollBar.isScrollable()) {
    console.info('This scrollBar can be operated');
  } else {
    console.info('This scrollBar can not be operated');
  }
}

```

## isSelected

```TypeScript
isSelected(): Promise<boolean>
```

获取此组件的选中状态。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件是否选中的Promise对象。  值true表示组件已选中，false表示未选中。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  if (await button.isSelected()) {
    console.info('This button is selected');
  } else {
    console.info('This button is not selected');
  }
}

```

## longClick

```TypeScript
longClick(): Promise<void>
```

长按此组件。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  await button.longClick();
}

```

## pinchIn

```TypeScript
pinchIn(scale: double): Promise<void>
```

以指定比例对此组件执行双指捏合操作。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | double | Yes | 缩放因子，为0到1之间的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let image: Component = await driver.findComponent(ON.type('Image'));
  await image.pinchIn(0.5);
}

```

## pinchOut

```TypeScript
pinchOut(scale: double): Promise<void>
```

以指定比例对此组件执行双指张开操作。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | double | Yes | 缩放因子，为大于1的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let image: Component = await driver.findComponent(ON.type('Image'));
  await image.pinchOut(1.5);
}

```

## scrollSearch

```TypeScript
scrollSearch(on: On): Promise<Component>
```

在此组件上滚动查找目标组件。该API适用于支持滚动的组件。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | 目标组件的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Component> | - 用于返回目标组件的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let scrollBar: Component = await driver.findComponent(ON.type('Scroll'));
  let button = await scrollBar.scrollSearch(ON.text('next page'));
}

```

## scrollSearch

```TypeScript
scrollSearch(on: On, vertical?: boolean, offset?: number): Promise<Component>
```

在此组件上滚动查找目标组件。该API适用于支持滚动的组件。可以指定滚动方向和滚动起止点与组件边界的偏移量。 该API使用Promise返回结果。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | 目标组件的属性。 |
| vertical | boolean | No |  |
| offset | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Component> | - 用于返回目标组件的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let scrollBar: Component = await driver.findComponent(ON.type('Scroll'));
  let button = await scrollBar.scrollSearch(ON.text('next page'));
}

```

## scrollSearch

```TypeScript
scrollSearch(on: On, vertical?: boolean, offset?: int): Promise<Component | null>
```

在此{@link Component}上滚动查找匹配的{@link Component}，适用于可滚动组件。

**Since:** 23

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | 目标{@link Component}的属性要求。 |
| vertical | boolean | No |  |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Component \| null> | 查找结果，如果未找到则返回null。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

## scrollToBottom

```TypeScript
scrollToBottom(speed?: int): Promise<void>
```

滚动到此组件的底部。该API适用于支持滚动的组件。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let scrollBar: Component = await driver.findComponent(ON.type('Scroll'));
  await scrollBar.scrollToBottom();
}

```

## scrollToTop

```TypeScript
scrollToTop(speed?: int): Promise<void>
```

滚动到此组件的顶部。该API适用于支持滚动的组件。该API使用Promise返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**Example**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let scrollBar: Component = await driver.findComponent(ON.type('Scroll'));
  await scrollBar.scrollToTop();
}

```

