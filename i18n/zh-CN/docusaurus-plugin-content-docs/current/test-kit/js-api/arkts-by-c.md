# By

UiTest框架在**By**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。 **By**类提供的API具有以下特点： 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。 2. 为组件属性提供多种匹配模式。 3. 支持组件的绝对定位和相对定位。可以使用[By.isBefore<sup>(已废弃)</sup>](arkts-by-c.md#isBefore)和 [By.isAfter<sup>(已废弃)</sup>](arkts-by-c.md#isAfter)等API指定相邻组件的特征来辅助定位。 **By**类中提供的所有API都是同步的。建议使用静态构造器**BY**以链式模式创建**By**对象。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## clickable

```TypeScript
clickable(b?: boolean): By
```

指定目标组件的可点击属性。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#clickable

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的可点击状态。值true表示组件可点击，false表示不可点击。默认值：true |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - 匹配目标组件可点击属性的By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.clickable(true); // 使用静态构造器BY创建By对象，指定目标控件的可点击状态属性。

```

## enabled

```TypeScript
enabled(b?: boolean): By
```

指定目标组件的可用属性。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#enabled

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的可用状态。值true表示组件可用，false表示不可用。默认值：true |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - 匹配目标组件可用属性的By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.enabled(true); // 使用静态构造器BY创建By对象，指定目标控件的使能状态属性。

```

## focused

```TypeScript
focused(b?: boolean): By
```

指定目标组件的聚焦属性。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#focused

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的聚焦状态。值true表示组件已聚焦，false表示未聚焦。默认值：true |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - 匹配目标组件聚焦属性的By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.focused(true); // 使用静态构造器BY创建By对象，指定目标控件的获焦状态属性。

```

## id

```TypeScript
id(id: number): By
```

指定目标组件的ID属性。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#id(id:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 组件ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - 匹配目标组件ID属性的By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.id(123); // 使用静态构造器BY创建By对象，指定目标控件的id属性。

```

## isAfter

```TypeScript
isAfter(by: By): By
```

指定目标组件位于给定属性组件的后方。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#isAfter(on:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| by | By | 是 | 属性组件的信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

// 使用静态构造器BY创建By对象，指定目标控件位于给出的特征属性控件之后。
let by: By = BY.type('Text').isAfter(BY.text('123')); // 查找 text为123之后的第一个Text组件

```

## isBefore

```TypeScript
isBefore(by: By): By
```

指定目标组件位于给定属性组件的前方。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#isBefore(on:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| by | By | 是 | 属性组件的信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

// 使用静态构造器BY创建By对象，指定目标控件位于给出的特征属性控件之前。
let by: By = BY.type('Button').isBefore(BY.text('123')); // 查找text为123之前的第一个Button组件

```

## key

```TypeScript
key(key: string): By
```

指定目标组件的key属性。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#id(id:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 组件key。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - 匹配目标组件key属性的By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.key('123'); // 使用静态构造器BY创建By对象，指定目标控件的key值属性。

```

## scrollable

```TypeScript
scrollable(b?: boolean): By
```

指定目标组件的可滚动属性。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#scrollable

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的可滚动状态。值true表示组件可滚动，false表示不可滚动。默认值：true |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - 匹配目标组件可滚动属性的By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.scrollable(true); // 使用静态构造器BY创建By对象，指定目标控件的可滑动状态属性。

```

## selected

```TypeScript
selected(b?: boolean): By
```

指定目标组件的选中状态。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#selected

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| b | boolean | 否 | 组件的选中状态。值true表示组件已选中，false表示未选中。默认值：true |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - 匹配目标组件选中属性的By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.selected(true); // 使用静态构造器BY创建By对象，指定目标控件的被选中状态属性。

```

## text

```TypeScript
text(txt: string, pattern?: MatchPattern): By
```

指定目标组件的文本属性。支持多种匹配模式。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#text

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| txt | string | 是 | 组件文本，用于匹配目标组件。 |
| pattern | MatchPattern | 否 | 匹配模式{@link MatchPattern}。  默认值：{@link MatchPattern.EQUALS} |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - 匹配目标组件文本属性的By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { BY, By } from '@kit.TestKit';

let by: By = BY.text('123'); // 使用静态构造器BY创建By对象，指定目标控件的text属性。

```

## type

```TypeScript
type(tp: string): By
```

指定目标组件的类型属性。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** On#type(tp:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tp | string | 是 | 组件类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| By | - 匹配目标组件类型属性的By对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.type('Button'); // 使用静态构造器BY创建By对象，指定目标控件的控件类型属性。

```

