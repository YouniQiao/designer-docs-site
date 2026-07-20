# UiComponent

In **UiTest**, the **UiComponent** class represents a component on the UI and provides APIs for obtaining component attributes, clicking a component, scrolling to search for a component, and text injection.All APIs provided in this class use a promise to return the result and must be invoked using **await**.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [Component](arkts-test-uitest-component-c.md)

<!--Device-unnamed-declare class UiComponent--><!--Device-unnamed-declare class UiComponent-End-->

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@kit.TestKit';
```

## click

```TypeScript
click(): Promise<void>
```

Clicks this component. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [click](arkts-test-uitest-component-c.md#click-1)

<!--Device-UiComponent-click(): Promise<void>--><!--Device-UiComponent-click(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | - Promise that returns no value. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, Driver, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  await button.click();
}

```

## doubleClick

```TypeScript
doubleClick(): Promise<void>
```

Double-clicks this component. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [doubleClick](arkts-test-uitest-component-c.md#doubleclick-1)

<!--Device-UiComponent-doubleClick(): Promise<void>--><!--Device-UiComponent-doubleClick(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | - Promise that returns no value. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  await button.doubleClick();
}

```

## getId

```TypeScript
getId(): Promise<number>
```

Obtains the ID of this component. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getId](arkts-test-uitest-component-c.md#getid-1)

<!--Device-UiComponent-getId(): Promise<number>--><!--Device-UiComponent-getId(): Promise<number>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | - Promise used to return the component ID. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  let id = await button.getId();
}

```

## getKey

```TypeScript
getKey(): Promise<string>
```

Obtains the key of this component. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getId](arkts-test-uitest-component-c.md#getid-1)

<!--Device-UiComponent-getKey(): Promise<string>--><!--Device-UiComponent-getKey(): Promise<string>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | - Promise used to return the key value. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  let str_key = await button.getKey();
}

```

## getText

```TypeScript
getText(): Promise<string>
```

Obtains the text information of this component. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getText](arkts-test-uitest-component-c.md#gettext-1)

<!--Device-UiComponent-getText(): Promise<string>--><!--Device-UiComponent-getText(): Promise<string>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | - Promise used to return the text information of the component. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  let text = await button.getText();
}

```

## getType

```TypeScript
getType(): Promise<string>
```

Obtains the type of this component. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getType](arkts-test-uitest-component-c.md#gettype-1)

<!--Device-UiComponent-getType(): Promise<string>--><!--Device-UiComponent-getType(): Promise<string>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | - Promise used to return the component type. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  let type = await button.getType();
}

```

## inputText

```TypeScript
inputText(text: string): Promise<void>
```

Inputs text to a component. This API takes effect only for editable text components. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** inputText(text:

<!--Device-UiComponent-inputText(text: string): Promise<void>--><!--Device-UiComponent-inputText(text: string): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Text to enter. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | - Promise that returns no value. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let text: UiComponent = await driver.findComponent(BY.text('hello world'));
  await text.inputText('123');
}

```

## isClickable

```TypeScript
isClickable(): Promise<boolean>
```

Obtains the clickable status of this component. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isClickable](arkts-test-uitest-component-c.md#isclickable-1)

<!--Device-UiComponent-isClickable(): Promise<boolean>--><!--Device-UiComponent-isClickable(): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | - Promise used to return whether the component is clickable. The value **true** indicates that the component is clickable, and **false** indicates the opposite. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  if (await button.isClickable()) {
    console.info('This button can be Clicked');
  } else {
    console.info('This button can not be Clicked');
  }
}

```

## isEnabled

```TypeScript
isEnabled(): Promise<boolean>
```

Obtains the enabled status of this component. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isEnabled](arkts-test-uitest-component-c.md#isenabled-1)

<!--Device-UiComponent-isEnabled(): Promise<boolean>--><!--Device-UiComponent-isEnabled(): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | - Promise used to return whether the component is enabled. The value **true** indicates that the component is enabled, and **false** indicates the opposite. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
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

Obtains the focused status of this component. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isFocused](arkts-test-uitest-component-c.md#isfocused-1)

<!--Device-UiComponent-isFocused(): Promise<boolean>--><!--Device-UiComponent-isFocused(): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | - Promise used to return whether the component is focused. The value **true** indicates that the component is focused, and **false** indicates the opposite. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  if (await button.isFocused()) {
    console.info('This button is focused');
  } else {
    console.info('This button is not focused');
  }
}

```

## isScrollable

```TypeScript
isScrollable(): Promise<boolean>
```

Obtains the scrollable status of this component. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isScrollable](arkts-test-uitest-component-c.md#isscrollable-1)

<!--Device-UiComponent-isScrollable(): Promise<boolean>--><!--Device-UiComponent-isScrollable(): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | - Promise used to return whether the component is scrollable. The value **true** indicates that the component is scrollable, and **false** indicates the opposite. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let scrollBar: UiComponent = await driver.findComponent(BY.scrollable(true));
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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isSelected](arkts-test-uitest-component-c.md#isselected-1)

<!--Device-UiComponent-isSelected(): Promise<boolean>--><!--Device-UiComponent-isSelected(): Promise<boolean>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | - Promise used to return whether the component is selected. The value **true** indicates that the component is selected, and **false** indicates the opposite. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [longClick](arkts-test-uitest-component-c.md#longclick-1)

<!--Device-UiComponent-longClick(): Promise<void>--><!--Device-UiComponent-longClick(): Promise<void>-End-->

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | - Promise that returns no value. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  await button.longClick();
}

```

## scrollSearch

```TypeScript
scrollSearch(by: By): Promise<UiComponent>
```

Scrolls on this component to search for the target component (applicable to components that support scrolling, such as **List**). This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** scrollSearch(on:

<!--Device-UiComponent-scrollSearch(by: By): Promise<UiComponent>--><!--Device-UiComponent-scrollSearch(by: By): Promise<UiComponent>-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | [By](arkts-test-uitest-by-c.md) | Yes | Attributes of the target component. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<UiComponent> | - Promise used to return the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let scrollBar: UiComponent = await driver.findComponent(BY.type('Scroll'));
  let button = await scrollBar.scrollSearch(BY.text('next page'));
}

```

