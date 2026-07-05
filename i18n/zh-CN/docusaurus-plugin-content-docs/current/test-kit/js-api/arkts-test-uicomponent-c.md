# UiComponent

在**UiTest**中，**UiComponent**类表示UI上的组件，提供获取组件属性、单击组件、滚动查找组件和文本注入的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [Component](arkts-test-component-c.md#component)

**系统能力：** SystemCapability.Test.UiTest

## click

```TypeScript
click(): Promise<void>
```

单击此组件。该API使用Promise返回结果。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [click](arkts-test-component-c.md#click-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [doubleClick](arkts-test-component-c.md#doubleclick-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [getId](arkts-test-component-c.md#getid-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | - 用于返回组件ID的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [getId](arkts-test-component-c.md#getid-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | - 用于返回key值的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [getText](arkts-test-component-c.md#gettext-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | - 用于返回组件文本信息的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [getType](arkts-test-component-c.md#gettype-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | - 用于返回组件类型的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputText(text:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 要输入的文本。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [isClickable](arkts-test-component-c.md#isclickable-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件是否可点击的Promise对象。值**true**表示组件可点击，**false**表示不可点击。 |

**示例：**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  if (await button.isClickable()) {
    console.info('This button can be Clicked');
  } else {
    console.info('This button cannot be Clicked');
  }
}

```

## isEnabled

```TypeScript
isEnabled(): Promise<boolean>
```

获取此组件的可用状态。该API使用Promise返回结果。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [isEnabled](arkts-test-component-c.md#isenabled-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件是否可用的Promise对象。值**true**表示组件可用，**false**表示不可用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.type('Button'));
  if (await button.isEnabled()) {
    console.info('This button can be operated');
  } else {
    console.info('This button cannot be operated');
  }
}


```

## isFocused

```TypeScript
isFocused(): Promise<boolean>
```

获取此组件的聚焦状态。该API使用Promise返回结果。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [isFocused](arkts-test-component-c.md#isfocused-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件是否聚焦的Promise对象。值**true**表示组件已聚焦，**false**表示未聚焦。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [isScrollable](arkts-test-component-c.md#isscrollable-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件是否可滚动的Promise对象。值**true**表示组件可滚动，**false**表示不可滚动。 |

**示例：**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let scrollBar: UiComponent = await driver.findComponent(BY.scrollable(true));
  if (await scrollBar.isScrollable()) {
    console.info('This scrollBar can be operated');
  } else {
    console.info('This scrollBar cannot be operated');
  }
}

```

## isSelected

```TypeScript
isSelected(): Promise<boolean>
```

获取此组件的选中状态。该API使用Promise返回结果。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [isSelected](arkts-test-component-c.md#isselected-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件是否选中的Promise对象。值**true**表示组件已选中，**false**表示未选中。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [longClick](arkts-test-component-c.md#longclick-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** scrollSearch(on:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| by | By | 是 | 目标组件的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;UiComponent&gt; | - 用于返回目标组件的Promise对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let scrollBar: UiComponent = await driver.findComponent(BY.type('Scroll'));
  let button = await scrollBar.scrollSearch(BY.text('next page'));
}

```

