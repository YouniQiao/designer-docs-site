# By

The UiTest framework provides a wide range of UI component feature description APIs in the **By** class to filter and match components. The APIs provided by the **By** class exhibit the following features: 1. Allow one or more attributes as the match conditions. For example, you can specify both the **text** and **id** attributes to find the target component. 2. Provide multiple match patterns for component attributes. 3. Support absolute positioning and relative positioning for components. APIs such as [By.isBefore<sup>(deprecated)</sup>](arkts-test-by-c.md#isbefore-1) and [By.isAfter<sup>(deprecated)</sup>](arkts-test-by-c.md#isafter-1) can be used to specify the features of adjacent components to assist positioning. All APIs provided in the **By** class are synchronous. You are advised to use the static constructor **BY** to create a **By** object in chain mode.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [On](arkts-test-on-c.md#on)

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@ohos.UiTest';
```

## clickable

```TypeScript
clickable(b?: boolean): By
```

Specifies the clickable attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [clickable](arkts-test-on-c.md#clickable-1)

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Clickable status of the component. The value **true** indicates that the component is clickable,and **false** indicates the opposite. Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object that matches the clickable attribute of the target component. |

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

Specifies the enabled attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [enabled](arkts-test-on-c.md#enabled-1)

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Enabled status of the component. The value **true** indicates that the component is enabled, and**false** indicates the opposite. Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object that matches the enabled attribute of the target component. |

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

Specifies the focused attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [focused](arkts-test-on-c.md#focused-1)

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Focused status of the component. The value **true** indicates that the component is focused, and**false** indicates the opposite. Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object that matches the focused attribute of the target component. |

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

Specifies the ID attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** id(id:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Component ID. |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object that matches the ID attribute of the target component. |

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

Specifies that the target component is located after the given attribute component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isAfter(on:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | By | Yes | Information about the attribute component. |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object. |

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

Specifies that the target component is located before the given attribute component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isBefore(on:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | By | Yes | Information about the attribute component. |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object. |

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

Specifies the key attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** id(id:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Component key. |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object that matches the key attribute of the target component. |

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

Specifies the scrollable attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [scrollable](arkts-test-on-c.md#scrollable-1)

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Scrollable status of the component. The value **true** indicates that the component is scrollable, and **false** indicates the opposite. Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object that matches the scrollable attribute of the target component. |

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

Specifies the selected status of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [selected](arkts-test-on-c.md#selected-1)

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Selected status of the component. The value **true** indicates that the component is selected,and **false** indicates the opposite. Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object that matches the selected attribute of the target component. |

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

Specifies the text attribute of the target component. Multiple match patterns are supported.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [text](arkts-test-on-c.md#text-1)

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| txt | string | Yes | Component text, used to match the target component. |
| pattern | MatchPattern | No | Match pattern {@link MatchPattern}.<br>Default value: {@link MatchPattern.EQUALS} |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object that matches the text attribute of the target component. |

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

Specifies the type attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** type(tp:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tp | string | Yes | Component type. |

**Return value:**

| Type | Description |
| --- | --- |
| By | - **By** object that matches the type attribute of the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.type('Button'); // Use the static constructor BY to create a By object and specify the type attribute of the target component.

```

