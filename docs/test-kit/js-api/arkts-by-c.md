# By

UiTest框架在**By**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。 **By**类提供的API具有以下特点： 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。 2. 为组件属性提供多种匹配模式。 3. 支持组件的绝对定位和相对定位。可以使用[By.isBefore<sup>(已废弃)</sup>](arkts-by-c.md#isBefore)和 [By.isAfter<sup>(已废弃)</sup>](arkts-by-c.md#isAfter)等API指定相邻组件的特征来辅助定位。 **By**类中提供的所有API都是同步的。建议使用静态构造器**BY**以链式模式创建**By**对象。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## clickable

```TypeScript
clickable(b?: boolean): By
```

指定目标组件的可点击属性。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#clickable

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | 组件的可点击状态。值true表示组件可点击，false表示不可点击。默认值：true |

**Return value:**

| Type | Description |
| --- | --- |
| By | - 匹配目标组件可点击属性的By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.clickable(true); // Use the static constructor BY to create a By object and specify the clickable attribute of the target component.

```

## enabled

```TypeScript
enabled(b?: boolean): By
```

指定目标组件的可用属性。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#enabled

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | 组件的可用状态。值true表示组件可用，false表示不可用。默认值：true |

**Return value:**

| Type | Description |
| --- | --- |
| By | - 匹配目标组件可用属性的By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.enabled(true); // Use the static constructor BY to create a By object and specify the enabled attribute of the target component.

```

## focused

```TypeScript
focused(b?: boolean): By
```

指定目标组件的聚焦属性。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#focused

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | 组件的聚焦状态。值true表示组件已聚焦，false表示未聚焦。默认值：true |

**Return value:**

| Type | Description |
| --- | --- |
| By | - 匹配目标组件聚焦属性的By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.focused(true); // Use the static constructor BY to create a By object and specify the focused attribute of the target component.

```

## id

```TypeScript
id(id: number): By
```

指定目标组件的ID属性。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#id(id:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 组件ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| By | - 匹配目标组件ID属性的By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.id(123); // Use the static constructor BY to create a By object and specify the id attribute of the target component.

```

## isAfter

```TypeScript
isAfter(by: By): By
```

指定目标组件位于给定属性组件的后方。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#isAfter(on:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | By | Yes | 属性组件的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| By | - By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

// Use the static constructor BY to create a by object and specify that the target component is located after the given attribute component.
let by: By = BY.type('Text').isAfter(BY.text('123')); // Search for the first Text component located after the component whose text is 123.

```

## isBefore

```TypeScript
isBefore(by: By): By
```

指定目标组件位于给定属性组件的前方。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#isBefore(on:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | By | Yes | 属性组件的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| By | - By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

// Use the static constructor BY to create a by object and specify that the target component is located before the given attribute component.
let by: By = BY.type('Button').isBefore(BY.text('123')); // Search for the first Button component located before the component whose text is 123.

```

## key

```TypeScript
key(key: string): By
```

指定目标组件的key属性。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#id(id:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 组件key。 |

**Return value:**

| Type | Description |
| --- | --- |
| By | - 匹配目标组件key属性的By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.key('123'); // Use the static constructor BY to create a By object and specify the key attribute of the target component.

```

## scrollable

```TypeScript
scrollable(b?: boolean): By
```

指定目标组件的可滚动属性。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#scrollable

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | 组件的可滚动状态。值true表示组件可滚动，false表示不可滚动。默认值：true |

**Return value:**

| Type | Description |
| --- | --- |
| By | - 匹配目标组件可滚动属性的By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.scrollable(true); // Use the static constructor BY to create a By object and specify the scrollable attribute of the target component.

```

## selected

```TypeScript
selected(b?: boolean): By
```

指定目标组件的选中状态。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#selected

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | 组件的选中状态。值true表示组件已选中，false表示未选中。默认值：true |

**Return value:**

| Type | Description |
| --- | --- |
| By | - 匹配目标组件选中属性的By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.selected(true); // Use the static constructor BY to create a By object and specify the selected attribute of the target component.

```

## text

```TypeScript
text(txt: string, pattern?: MatchPattern): By
```

指定目标组件的文本属性。支持多种匹配模式。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#text

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| txt | string | Yes | 组件文本，用于匹配目标组件。 |
| pattern | MatchPattern | No | 匹配模式{@link MatchPattern}。  默认值：{@link MatchPattern.EQUALS} |

**Return value:**

| Type | Description |
| --- | --- |
| By | - 匹配目标组件文本属性的By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { BY, By } from '@kit.TestKit';

let by: By = BY.text('123'); // Use the static constructor BY to create a By object and specify the text attribute of the target component.

```

## type

```TypeScript
type(tp: string): By
```

指定目标组件的类型属性。

**Since:** 8

**Deprecated since:** 9

**Substitute:** On#type(tp:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tp | string | Yes | 组件类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| By | - 匹配目标组件类型属性的By对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.type('Button'); // Use the static constructor BY to create a By object and specify the type attribute of the target component.

```

