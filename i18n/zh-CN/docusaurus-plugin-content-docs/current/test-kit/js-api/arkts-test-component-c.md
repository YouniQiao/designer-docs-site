# Component

表示UI上的组件，提供获取组件属性、单击组件、滚动查找组件和文本注入的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。

**起始版本：** 9

**系统能力：** SystemCapability.Test.UiTest

## clearText

```TypeScript
clearText(): Promise<void>
```

清除组件的文本信息。该API仅对可编辑文本组件生效。该API使用Promise返回结果。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, ON, Component } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 查找Button类型的控件
  let button: Component = await driver.findComponent(ON.type('Button'));
  // 点击该控件
  await button.click();
}

```

## doubleClick

```TypeScript
doubleClick(): Promise<void>
```

双击此组件。该API使用Promise返回结果。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | Component | 是 | 目标组件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 查找Button类型的目标控件
  let button: Component = await driver.findComponent(ON.type('Button'));
  // 查找text为'hello world'的控件作为拖拽目标
  let text: Component = await driver.findComponent(ON.text('hello world'));
  // 将Button控件拖拽至text控件处
  await button.dragTo(text);
}

```

## getBounds

```TypeScript
getBounds(): Promise<Rect>
```

获取此组件的边界信息。该API使用Promise返回结果。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Rect&gt; | - 用于返回组件对象边界信息的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Point&gt; | - 用于返回组件对象所占区域中心点的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 11

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | - 用于返回组件描述的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

获取组件所属的显示ID。该API使用Promise返回结果。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | - 用于返回组件所属显示ID的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 18

**元服务API：** 从API版本18开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | - 用于返回组件提示文本的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | - 用于返回组件ID的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

获取此组件的文本信息。该API使用Promise返回结果。如果组件的 [accessibilityLevel](../../apis-arkui/arkts-components/arkts-arkui-commonmethod-c.md#accessibilitylevel-1) 属性设置为**no**或**no-hide-descendants**，可以使用此API获取组件的文本信息， 但[Component.getText()](arkts-test-component-c.md#gettext-1)无法获取。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | - 用于返回组件文本信息的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

获取此组件的文本信息。该API使用Promise返回结果。 > **说明：** > > 如果组件的[accessibilityLevel](../../apis-arkui/arkts-components/arkts-arkui-commonmethod-c.md#accessibilitylevel-1) > 属性设置为**no**或**no-hide-descendants**，则无法使用此API获取组件的文本信息。 > 此时可以使用[Component.getOriginalText()](arkts-test-component-c.md#getoriginaltext-1)替代。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | - 用于返回组件文本信息的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | - 用于返回组件类型的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 输入文本。目前支持英文、中文和特殊字符。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 查找text为'hello world'的控件
  let text: Component = await driver.findComponent(ON.text('hello world'));
  // 清空原有文本并输入'123'
  await text.inputText('123');
}

```

## inputText

```TypeScript
inputText(text: string, mode: InputTextMode): Promise<void>
```

以指定文本输入模式向组件输入文本。该API仅对可编辑文本组件生效。该API使用Promise返回结果。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 输入文本。目前支持英文、中文和特殊字符。 |
| mode | InputTextMode | 是 | 文本输入模式。详见[InputTextMode](arkts-test-inputtextmode-i.md#inputtextmode)。<br>**注意**：如果**InputTextMode.addition**设置为**true**，则指定文本将追加到组件现有文本末尾。否则，指定文本将覆盖组件现有文本。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-请求广告返回错误码) | 能力不支持。由于设备能力限制，功能无法正常工作。 |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件对象是否可勾选的Promise对象。值**true**表示组件可勾选，**false**表示不可勾选。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件对象勾选状态的Promise对象。值**true**表示组件已勾选，**false**表示未勾选。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件对象是否可点击的Promise对象。值**true**表示组件可点击，**false**表示不可点击。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
  if (await button.isClickable()) {
    console.info('This button can be clicked');
  } else {
    console.info('This button cannot be clicked');
  }
}

```

## isEnabled

```TypeScript
isEnabled(): Promise<boolean>
```

获取此组件的可用状态。该API使用Promise返回结果。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件是否可用的Promise对象。值**true**表示组件可用，**false**表示不可用。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.findComponent(ON.type('Button'));
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

检查组件是否已聚焦。该API使用Promise返回结果。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件是否聚焦的Promise对象。值**true**表示组件已聚焦，**false**表示未聚焦。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件对象是否可长按的Promise对象。值**true**表示组件可长按，**false**表示不可长按。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件对象是否可滚动的Promise对象。值**true**表示组件可滚动，**false**表示不可滚动。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let scrollBar: Component = await driver.findComponent(ON.scrollable(true));
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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回组件是否选中的Promise对象。值**true**表示组件已选中，**false**表示未选中。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

以指定比例对此组件执行双指捏合操作。该API使用Promise返回结果。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scale | number | 是 | 缩放因子，为0到1之间的值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

以指定比例对此组件执行双指张开操作。该API使用Promise返回结果。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scale | number | 是 | 缩放因子，为大于1的值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标组件的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Component&gt; | - 用于返回目标组件的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 获取可滑动的Scroll控件
  let scrollBar: Component = await driver.findComponent(ON.type('Scroll'));
  // 在Scroll控件上滑动查找text为'next page'的控件
  let button = await scrollBar.scrollSearch(ON.text('next page'));
}

```

## scrollSearch

```TypeScript
scrollSearch(on: On, vertical?: boolean, offset?: number): Promise<Component>
```

在此组件上滚动查找目标组件。该API适用于支持滚动的组件。可以指定滚动方向和滚动起止点与组件边界的偏移量。 该API使用Promise返回结果。

**起始版本：** 18

**元服务API：** 从API版本18开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标组件的属性。 |
| vertical | boolean | 否 | 搜索方向是否为垂直方向。默认值**true**表示搜索方向为垂直方向。**false**表示搜索方向为水平方向。 |
| offset | number | 否 | 滚动起止点与组件边界的偏移量，单位为像素。默认值为**80**。该值为大于或等于0的整数。<br>默认值：80<br>单位：px |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Component&gt; | - 用于返回目标组件的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

滚动到此组件的底部。该API适用于支持滚动的组件。该API使用Promise返回结果。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| speed | number | 否 | 滚动速度。<br>取值范围：[200, 40000]<br>单位：px/s。<br>如果为负数则抛出错误码401。<br>默认值：600 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

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

滚动到此组件的顶部。该API适用于支持滚动的组件。该API使用Promise返回结果。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| speed | number | 否 | 滚动速度。<br>取值范围：[200, 40000]<br>单位：px/s。<br>如果为负数则抛出错误码401。<br>默认值：600 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000004](../errorcode-uitest.md#17000004-目标控件窗口丢失) | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let scrollBar: Component = await driver.findComponent(ON.type('Scroll'));
  await scrollBar.scrollToTop();
}

```

