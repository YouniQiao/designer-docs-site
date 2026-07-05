# On

自API版本9起，UiTest框架在**On**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。 **On**类提供的API具有以下特点： 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。 2. 为组件属性提供多种匹配模式。 3. 支持组件的绝对定位和相对定位。可以使用[ON.isBefore](arkts-on-c.md#isBefore)和 [ON.isAfter](arkts-on-c.md#isAfter)等API指定相邻组件的特征来辅助定位。 **On**类中提供的所有API都是同步的。建议使用静态构造器**ON**以链式模式创建**On**对象。

**起始版本：** 9

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## belongingDisplay

```TypeScript
belongingDisplay(displayId: int): On
```

获取指定显示器上的组件对象。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | int | 是 | 组件所属的显示ID。该值为大于或等于0的整数。  注意：如果输入的displayId不存在，将上报异常17000007。可以使用  [getAllDisplays]@ohos.display:display.getAllDisplays(callback: AsyncCallback>)获取  当前所有display对象并使用它们获取对应的显示ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 指定组件所属显示器的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000007 | 参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件可勾选属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。1.参数类型错误；2.参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件勾选属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件可点击属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

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

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| val | string | 是 | 组件的描述。 |
| pattern | MatchPattern | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件可用属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件聚焦属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

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

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| val | string | 是 | 组件的指定提示文本。 |
| pattern | MatchPattern | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 指定提示文本组件的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 组件ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件ID属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 组件ID。 |
| pattern | MatchPattern | 是 | 文本匹配模式{@link MatchPattern}。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件ID属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用窗口的包名。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 属性组件的信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 该接口支持在原子化服务中使用。

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
| 17000007 | 参数校验失败。 |

## isBefore

```TypeScript
isBefore(on: On): On
```

指定目标组件位于给定属性组件的前方。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 属性组件的信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 该接口支持在原子化服务中使用。

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
| 17000007 | 参数校验失败。 |

## longClickable

```TypeScript
longClickable(b?: boolean): On
```

指定目标组件的可长按属性。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件可长按属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

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

指定组件的文本内容和文本匹配模式。 > **说明：** > > 如果组件的[accessibilityLevel]./@internal/component/ets/common:CommonMethod#accessibilityLevel > 设置为**no**或**no-hide-descendants**，可以使用此API指定目标组件的文本属性来查找组件。 > 此时[On.text()](arkts-on-c.md#text) API不生效。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 组件文本，用于匹配目标组件。 |
| pattern | MatchPattern | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件文本属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000007 | 参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件可滚动属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件选中属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.参数类型错误；2.参数校验失败。 |

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

指定目标组件的文本属性。支持多种匹配模式。 > **说明：** > > 如果组件的[accessibilityLevel]./@internal/component/ets/common:CommonMethod#accessibilityLevel > 设置为**no**或**no-hide-descendants**，则无法使用此API指定目标组件的文本属性来查找组件。 > 此时可以使用[On.originalText()](arkts-on-c.md#originalText) API。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| txt | string | 是 | 组件文本，用于匹配目标组件。 |
| pattern | MatchPattern | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件文本属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tp | string | 是 | 组件类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件类型属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tp | string | 是 | 组件类型。 |
| pattern | MatchPattern | 是 | 文本匹配模式{@link MatchPattern}。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - 匹配目标组件类型属性的On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 属性组件的信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| On | - On对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

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

**原子化服务API：** 该接口支持在原子化服务中使用。

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
| 17000007 | 参数校验失败。 |

