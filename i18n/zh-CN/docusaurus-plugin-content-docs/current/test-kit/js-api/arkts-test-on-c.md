# On

自API版本9起，UiTest框架在**On**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。 **On**类提供的API具有以下特点： 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。 2. 为组件属性提供多种匹配模式。 3. 支持组件的绝对定位和相对定位。可以使用[ON.isBefore](arkts-test-on-c.md#isbefore-1)和 [ON.isAfter](arkts-test-on-c.md#isafter-1)等API指定相邻组件的特征来辅助定位。 **On**类中提供的所有API都是同步的。建议使用静态构造器**ON**以链式模式创建**On**对象。

**起始版本：** 9

**系统能力：** SystemCapability.Test.UiTest

## belongingDisplay

```TypeScript
belongingDisplay(displayId: number): On
```

获取指定显示器上的组件对象。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | number | 是 | 组件所属的显示ID。该值为大于或等于0的整数。<br>**注意**：如果输入的**displayId**不存在，将上报异常**17000007**。可以使用[getAllDisplays](../../apis-arkui/arkts-apis/arkts-arkui-getalldisplays-f.md#getalldisplays-1)获取当前所有**display**对象并使用它们获取对应的显示ID。&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 指定组件所属显示器的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000007](../errorcode-uitest.md#17000007-参数不合法) | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.belongingDisplay(0); // 使用静态构造器ON创建On对象，指定目标控件所属屏幕ID

```

## checkable

```TypeScript
checkable(b?: boolean): On
```

指定目标组件的可勾选属性。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的可勾选状态。值**true**表示组件可勾选，**false**表示不可勾选。默认值：**true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件可勾选属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。1.参数类型错误；2.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.checkable(true); // 使用静态构造器ON创建On对象，指定目标控件的能否被勾选状态属性。

```

## checked

```TypeScript
checked(b?: boolean): On
```

指定目标组件的勾选属性。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的勾选状态。值**true**表示组件已勾选，**false**表示未勾选。默认值：**true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件勾选属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.checked(true); // 使用静态构造器ON创建On对象，指定目标控件的被勾选状态属性

```

## clickable

```TypeScript
clickable(b?: boolean): On
```

指定目标组件的可点击属性。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的可点击状态。值**true**表示组件可点击，**false**表示不可点击。默认值：**true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件可点击属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.clickable(true); // 使用静态构造器ON创建On对象，指定目标控件的可点击状态属性。

```

## description

```TypeScript
description(val: string, pattern?: MatchPattern): On
```

指定目标组件的描述。支持多种匹配模式。

**起始版本：** 11

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| val | string | 是 | 组件的描述。&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | 否 | 匹配模式{@link MatchPattern}。<br>默认值：{@link MatchPattern.EQUALS} |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - **On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.description('123'); // 使用静态构造器ON创建On对象，指定目标控件的description属性。

```

## enabled

```TypeScript
enabled(b?: boolean): On
```

指定目标组件的可用属性。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的可用状态。值**true**表示组件可用，**false**表示不可用。默认值：**true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件可用属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.enabled(true); // 使用静态构造器ON创建On对象，指定目标控件的使能状态属性。

```

## focused

```TypeScript
focused(b?: boolean): On
```

指定目标组件的聚焦属性。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的聚焦状态。值**true**表示组件已聚焦，**false**表示未聚焦。默认值：**true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件聚焦属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.focused(true); // 使用静态构造器ON创建On对象，指定目标控件的获焦状态属性。

```

## hint

```TypeScript
hint(val: string, pattern?: MatchPattern): On
```

获取指定提示文本的组件对象并返回**On**对象。

**起始版本：** 18

**元服务API：** 从API版本18开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| val | string | 是 | 组件的指定提示文本。&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | 否 | 匹配模式{@link MatchPattern}。<br>默认值：{@link MatchPattern.EQUALS} |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 指定提示文本组件的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { MatchPattern, On, ON } from '@kit.TestKit';

let on: On = ON.hint('welcome', MatchPattern.EQUALS); // 使用静态构造器ON创建On对象，指定目标控件的提示文本属性。

```

## id

```TypeScript
id(id: string): On
```

指定目标组件的ID属性。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 组件ID。&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件ID属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.id('123'); // 使用静态构造器ON创建On对象，指定目标控件的id属性。

```

## id

```TypeScript
id(id: string, pattern: MatchPattern): On
```

指定目标组件的**id**属性和匹配模式。

**起始版本：** 18

**元服务API：** 从API版本18开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 组件ID。&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | 是 | 文本匹配模式{@link MatchPattern}。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件ID属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { MatchPattern, On, ON } from '@kit.TestKit';

let on: On = ON.id('id', MatchPattern.REG_EXP_ICASE); // 忽略大小写匹配控件的id属性值

```

## inWindow

```TypeScript
inWindow(bundleName: string): On
```

指定目标组件位于给定应用窗口内。

**起始版本：** 10

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用窗口的包名。&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - **On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.inWindow('com.uitestScene.acts'); // 使用静态构造器ON创建On对象，指定目标控件位于给出的应用窗口内。

```

## isAfter

```TypeScript
isAfter(on: On): On
```

指定目标组件位于给定属性组件的后方。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 属性组件的信息。&lt;!--RP3--&gt;&lt;!--RP3End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - **On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

// 使用静态构造器ON创建On对象，指定目标控件位于给出的特征属性控件之后。
let on: On = ON.type('Text').isAfter(ON.text('123')); // 查找 text为123之后的第一个Text组件

```

## isAfter

```TypeScript
isAfter(com: Component): On
```

要求目标组件位于给定{@link Component}对象指定的组件后方，用于相对定位组件。

**起始版本：** 26.0.0

**元服务API：** 从API版本26.0.0开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| com | Component | 是 | 描述目标组件在其后方的组件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | 此{@link On}对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000007](../errorcode-uitest.md#17000007-参数不合法) | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, On, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let component: Component = await driver.findComponent(ON.type('Text'));
  let on: On = ON.text('123').isAfter(component); // 查找第一个Text组件之后的text为123的组件
}

```

## isBefore

```TypeScript
isBefore(on: On): On
```

指定目标组件位于给定属性组件的前方。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 属性组件的信息。&lt;!--RP3--&gt;&lt;!--RP3End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - **On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

// 使用静态构造器ON创建On对象，指定目标控件位于给出的特征属性控件之前。
let on: On = ON.type('Button').isBefore(ON.text('123')); // 查找text为123之前的第一个Button组件

```

## isBefore

```TypeScript
isBefore(com: Component): On
```

要求目标组件位于给定{@link Component}对象指定的组件前方，用于相对定位组件。

**起始版本：** 26.0.0

**元服务API：** 从API版本26.0.0开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| com | Component | 是 | 描述目标组件在其前方的组件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | 此{@link On}对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000007](../errorcode-uitest.md#17000007-参数不合法) | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, On, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let component: Component = await driver.findComponent(ON.type('Text'));
  let on: On = ON.text('123').isBefore(component); // 查找第一个Text组件之前的text为123的组件
}

```

## longClickable

```TypeScript
longClickable(b?: boolean): On
```

指定目标组件的可长按属性。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的可长按状态。值**true**表示组件可长按，**false**表示不可长按。默认值：**true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件可长按属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.longClickable(true); // 使用静态构造器ON创建On对象，指定目标控件的可长按点击状态属性。

```

## originalText

```TypeScript
originalText(text: string, pattern?: MatchPattern): On
```

指定组件的文本内容和文本匹配模式。 > **说明：** > > 如果组件的[accessibilityLevel](../../apis-arkui/arkts-components/arkts-arkui-commonmethod-c.md#accessibilitylevel-1) > 设置为**no**或**no-hide-descendants**，可以使用此API指定目标组件的文本属性来查找组件。 > 此时[On.text()](arkts-test-on-c.md#text-1) API不生效。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 组件文本，用于匹配目标组件。&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | 否 | 匹配模式{@link MatchPattern}。<br>默认值：{@link MatchPattern.EQUALS} |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件文本属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000007](../errorcode-uitest.md#17000007-参数不合法) | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.originalText('123'); // 使用静态构造器ON创建On对象，指定目标控件的originalText属性

```

## scrollable

```TypeScript
scrollable(b?: boolean): On
```

指定目标组件的可滚动属性。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的可滚动状态。值**true**表示组件可滚动，**false**表示不可滚动。默认值：**true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件可滚动属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.scrollable(true); // 使用静态构造器ON创建On对象，指定目标控件的可滑动状态属性。

```

## selected

```TypeScript
selected(b?: boolean): On
```

指定目标组件的选中属性。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的选中状态。值**true**表示组件已选中，**false**表示未选中。默认值：**true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件选中属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.selected(true); // 使用静态构造器ON创建On对象，指定目标控件的被选中状态属性。

```

## text

```TypeScript
text(txt: string, pattern?: MatchPattern): On
```

指定目标组件的文本属性。支持多种匹配模式。 > **说明：** > > 如果组件的[accessibilityLevel](../../apis-arkui/arkts-components/arkts-arkui-commonmethod-c.md#accessibilitylevel-1) > 设置为**no**或**no-hide-descendants**，则无法使用此API指定目标组件的文本属性来查找组件。 > 此时可以使用[On.originalText()](arkts-test-on-c.md#originaltext-1) API。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| txt | string | 是 | 组件文本，用于匹配目标组件。&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | 否 | 匹配模式{@link MatchPattern}。<br>默认值：{@link MatchPattern.EQUALS} |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件文本属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.text('123'); // 使用静态构造器ON创建On对象，指定目标控件的text属性。

```

## type

```TypeScript
type(tp: string): On
```

指定目标组件的类型属性。

**起始版本：** 9

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tp | string | 是 | 组件类型。&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件类型属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.type('Button'); // 使用静态构造器ON创建On对象，指定目标控件的控件类型属性。

```

## type

```TypeScript
type(tp: string, pattern: MatchPattern): On
```

指定目标组件的**type**属性和匹配模式。

**起始版本：** 18

**元服务API：** 从API版本18开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tp | string | 是 | 组件类型。&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | 是 | 文本匹配模式{@link MatchPattern}。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件类型属性的**On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON, MatchPattern } from '@kit.TestKit';

let on: On = ON.type('Button', MatchPattern.EQUALS); // 使用静态构造器ON创建On对象，指定目标控件的控件类型属性。

```

## within

```TypeScript
within(on: On): On
```

指定目标组件位于给定属性组件的内部。

**起始版本：** 10

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 属性组件的信息。&lt;!--RP3--&gt;&lt;!--RP3End--&gt; |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - **On**对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

// 使用静态构造器ON创建On对象，指定目标控件位于给出的特征属性控件之内。
let on: On = ON.text('java').within(ON.type('Scroll')); // 查找Scroller里面的text为java的子组件

```

## within

```TypeScript
within(com: Component): On
```

要求目标组件位于给定{@link Component}对象指定的组件内部，用于相对定位组件。

**起始版本：** 26.0.0

**元服务API：** 从API版本26.0.0开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| com | Component | 是 | 描述目标组件在其内部的组件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | 此{@link On}对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000007](../errorcode-uitest.md#17000007-参数不合法) | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, On, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let component: Component = await driver.findComponent(ON.type('Text'));
  let on: On = ON.text('123').within(component); // 查找第一个Text组件内部的text为123的组件
}

```

