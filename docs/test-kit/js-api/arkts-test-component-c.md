# Component

Represents a component on the UI and provides APIs for obtaining component attributes, clicking a component,
scrolling to search for a component, and text injection.
All APIs provided in this class use a promise to return the result and must be invoked using **await**.

**Since:** 9

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@kit.TestKit';
```

## clearText

```TypeScript
clearText(): Promise<void>
```

Clears the text information of a component. This API takes effect only for editable text components. This API
uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

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

Clicks this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

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

Double-clicks this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

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

Drags a component to the target component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | Component | Yes | Target component. |

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

Obtains the bounds information of this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Rect&gt; | - Promise used to return the bound information of the component object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the center point of the area occupied by this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Point&gt; | - Promise used to return the center point of the area occupied by the component object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the description of this component. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | - Promise used to return the description of the component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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
getDisplayId(): Promise<number>
```

Obtains the ID of the display to which the component belongs. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | - Promise used to return the ID of the display to which the component belongs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the hint text of a component. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | - Promise used to return the hint text of a component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the ID of this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | - Promise used to return the component ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the text information of this component. This API uses a promise to return the result. If the
[accessibilityLevel](../../apis-arkui/arkts-components/arkts-arkui-commonmethod-c.md#accessibilitylevel-1)
attribute of the component is set to **no** or **no-hide-descendants**, this API can be used
to obtain the text information of the component, but [Component.getText()](arkts-test-component-c.md#gettext-1) cannot.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | - Promise used to return the text information of the component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the text information of this component. This API uses a promise to return the result.

> **NOTE**
>
> If the [accessibilityLevel](../../apis-arkui/arkts-components/arkts-arkui-commonmethod-c.md#accessibilitylevel-1)
> attribute of the component is set to **no** or **no-hide-descendants**, this API cannot be used to obtain the
> text information of the component. In this case, you can use
> [Component.getOriginalText ()](arkts-test-component-c.md#getoriginaltext-1) instead.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | - Promise used to return the text information of the component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the type of this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | - Promise used to return the component type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Clears the original text in a component and inputs the specified text. This API takes effect only for editable
text components. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
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
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Inputs text to a component in a specified text input mode. This API takes effect only for editable text
components. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Input text. Currently, English, Chinese, and special characters are supported. |
| mode | InputTextMode | Yes | Text input mode.For details, see [InputTextMode](arkts-test-inputtextmode-i.md).<br> **Note**: If **InputTextMode.addition** is set to **true**, the specified text is added to the end of theexisting text in the component. Otherwise, the specified text overwrites the existing text of the component. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work correctly due to limited devicecapabilities. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the checkable status of this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the component object is checkable.The value **true** indicates indicates that the component is checkable, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the checked status of this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return the checked status of the component object.The value **true** indicates indicates that the component is checked, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the clickable status of this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the component object is clickable.The value **true** indicates that the component is clickable, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the enabled status of this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the component is enabled.The value **true** indicates that the component is enabled, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Checks whether a component is focused. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the component is focused.The value **true** indicates that the component is focused, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the clickable status of this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the component object is clickable.The value **true** indicates that the component is clickable, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the scrollable status of this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the component object is scrollable.The value **true** indicates that the component is scrollable, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Obtains the selected status of this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return whether the component is selected.The value **true** indicates that the component is selected, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Long-clicks this component. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

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
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  await button.longClick();
}

```

## pinchIn

```TypeScript
pinchIn(scale: number): Promise<void>
```

Pinches in a component at the specified scale. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number | Yes | Scale factor, which is a value ranging from 0 to 1. |

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
pinchOut(scale: number): Promise<void>
```

Pinches out a component at the specified scale. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number | Yes | Scale factor, which is a value greater than 1. |

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

Scrolls on this component to search for the target component. This API is applicable to components that support
scrolling. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | Attributes of the target component. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Component&gt; | - Promise used to return the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

Scrolls on this component to search for the target component. This API is applicable to components that support
scrolling. You can specify the scrolling direction and the offset between the scrolling start and end points and
the component border. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | Attributes of the target component. |
| vertical | boolean | No | Whether the search direction is vertical. The default value **true** indicates that thesearch direction is vertical. **false** indicates that the search direction is horizontal. |
| offset | number | No | Offset from the scrolling start/end point to the component border, in pixels. The defaultvalue is **80**. The value is an integer greater than or equal to 0.<br>Default value: 80<br>Unit: px |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Component&gt; | - Promise used to return the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

## scrollToBottom

```TypeScript
scrollToBottom(speed?: number): Promise<void>
```

Scrolls to the bottom of this component. This API is applicable to components that support scrolling. This API
uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | number | No | Scroll speed.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameterverification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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
scrollToTop(speed?: number): Promise<void>
```

Scrolls to the top of this component. This API is applicable to components that support scrolling. This API uses
a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | number | No | Scroll speed.<br>Value range:[200, 40000]<br>Unit: px/s.<br>Throws error code 401 if negative.<br>Default value: 600 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameterverification failed. |
| [17000002](../errorcode-uitest.md#17000002-unable-to-call-the-api) | The API does not support concurrent calls. |
| [17000004](../errorcode-uitest.md#17000004-target-componentwindow-lost) | The window or component is invisible or destroyed. |

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

