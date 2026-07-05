# UiComponent

在**UiTest**中，**UiComponent**类表示UI上的组件，提供获取组件属性、单击组件、滚动查找组件和文本注入的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## click

```TypeScript
click(): Promise<void>
```

单击此组件。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#click

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

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

双击此组件。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#doubleClick

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

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

获取此组件的ID。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#getId

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | - 用于返回组件ID的Promise对象。 |

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

获取此组件的key。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#getId

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - 用于返回key值的Promise对象。 |

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

获取此组件的文本信息。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#getText

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - 用于返回组件文本信息的Promise对象。 |

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

获取此组件的类型。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#getType

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - 用于返回组件类型的Promise对象。 |

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

向组件输入文本。该API仅对可编辑文本组件生效。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#inputText(text:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 要输入的文本。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

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

获取此组件的可点击状态。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#isClickable

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件是否可点击的Promise对象。值true表示组件可点击，false表示不可点击。 |

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

获取此组件的可用状态。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#isEnabled

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件是否可用的Promise对象。值true表示组件可用，false表示不可用。 |

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

获取此组件的聚焦状态。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#isFocused

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件是否聚焦的Promise对象。值true表示组件已聚焦，false表示未聚焦。 |

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

获取此组件的可滚动状态。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#isScrollable

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件是否可滚动的Promise对象。值true表示组件可滚动，false表示不可滚动。 |

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

获取此组件的选中状态。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#isSelected

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回组件是否选中的Promise对象。值true表示组件已选中，false表示未选中。 |

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

长按此组件。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#longClick

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

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

在此组件上滚动查找目标组件（适用于支持滚动的组件，如**List**）。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#scrollSearch(on:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | By | Yes | 目标组件的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UiComponent> | - 用于返回目标组件的Promise对象。 |

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

