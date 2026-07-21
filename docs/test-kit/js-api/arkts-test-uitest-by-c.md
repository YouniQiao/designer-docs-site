# By

The UiTest framework provides a wide range of UI component feature description APIs in the **By** class to filter and match components.

The APIs provided by the **By** class exhibit the following features:

1. Allow one or more attributes as the match conditions.For example, you can specify both the **text** and **id** attributes to find the target component.2. Provide multiple match patterns for component attributes.3. Support absolute positioning and relative positioning for components.APIs such as [By.isBefore<sup>(deprecated)</sup>](arkts-test-uitest-by-c.md#isbefore-1) and [By.isAfter<sup>(deprecated)</sup>](arkts-test-uitest-by-c.md#isafter-1)can be used to specify the features of adjacent components to assist positioning.

All APIs provided in the **By** class are synchronous. You are advised to use the static constructor **BY** to create a **By** object in chain mode.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [On](arkts-test-uitest-on-c.md)

<!--Device-unnamed-declare class By--><!--Device-unnamed-declare class By-End-->

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@kit.TestKit';
```

<a id="clickable"></a>
## clickable

```TypeScript
clickable(b?: boolean): By
```

Specifies the clickable attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [clickable](arkts-test-uitest-on-c.md#clickable-1)

<!--Device-By-clickable(b?: boolean): By--><!--Device-By-clickable(b?: boolean): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Clickable status of the component. The value **true** indicates that the component is clickable,and **false** indicates the opposite. Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object that matches the clickable attribute of the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.clickable(true); // Use the static constructor BY to create a By object and specify the clickable attribute of the target component.

```

<a id="enabled"></a>
## enabled

```TypeScript
enabled(b?: boolean): By
```

Specifies the enabled attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [enabled](arkts-test-uitest-on-c.md#enabled-1)

<!--Device-By-enabled(b?: boolean): By--><!--Device-By-enabled(b?: boolean): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Enabled status of the component. The value **true** indicates that the component is enabled, and **false** indicates the opposite. Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object that matches the enabled attribute of the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.enabled(true); // Use the static constructor BY to create a By object and specify the enabled attribute of the target component.

```

<a id="focused"></a>
## focused

```TypeScript
focused(b?: boolean): By
```

Specifies the focused attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [focused](arkts-test-uitest-on-c.md#focused-1)

<!--Device-By-focused(b?: boolean): By--><!--Device-By-focused(b?: boolean): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Focused status of the component. The value **true** indicates that the component is focused, and **false** indicates the opposite. Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object that matches the focused attribute of the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.focused(true); // Use the static constructor BY to create a By object and specify the focused attribute of the target component.

```

<a id="id"></a>
## id

```TypeScript
id(id: number): By
```

Specifies the ID attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [id(id:](arkts-test-uitest-on-c.md#id-1)

<!--Device-By-id(id: number): By--><!--Device-By-id(id: number): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Component ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object that matches the ID attribute of the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.id(123); // Use the static constructor BY to create a By object and specify the id attribute of the target component.

```

<a id="isafter"></a>
## isAfter

```TypeScript
isAfter(by: By): By
```

Specifies that the target component is located after the given attribute component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isAfter(on:](arkts-test-uitest-on-c.md#isafter-1)

<!--Device-By-isAfter(by: By): By--><!--Device-By-isAfter(by: By): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | [By](arkts-test-uitest-by-c.md) | Yes | Information about the attribute component. |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

// Use the static constructor BY to create a by object and specify that the target component is located after the given attribute component.
let by: By = BY.type('Text').isAfter(BY.text('123')); // Search for the first Text component located after the component whose text is 123.

```

<a id="isbefore"></a>
## isBefore

```TypeScript
isBefore(by: By): By
```

Specifies that the target component is located before the given attribute component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isBefore(on:](arkts-test-uitest-on-c.md#isbefore-1)

<!--Device-By-isBefore(by: By): By--><!--Device-By-isBefore(by: By): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | [By](arkts-test-uitest-by-c.md) | Yes | Information about the attribute component. |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

// Use the static constructor BY to create a by object and specify that the target component is located before the given attribute component.
let by: By = BY.type('Button').isBefore(BY.text('123')); // Search for the first Button component located before the component whose text is 123.

```

<a id="key"></a>
## key

```TypeScript
key(key: string): By
```

Specifies the key attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [id(id:](arkts-test-uitest-on-c.md#id-1)

<!--Device-By-key(key: string): By--><!--Device-By-key(key: string): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Component key. |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object that matches the key attribute of the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.key('123'); // Use the static constructor BY to create a By object and specify the key attribute of the target component.

```

<a id="scrollable"></a>
## scrollable

```TypeScript
scrollable(b?: boolean): By
```

Specifies the scrollable attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [scrollable](arkts-test-uitest-on-c.md#scrollable-1)

<!--Device-By-scrollable(b?: boolean): By--><!--Device-By-scrollable(b?: boolean): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Scrollable status of the component. The value **true** indicates that the component is scrollable, and **false** indicates the opposite. Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object that matches the scrollable attribute of the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.scrollable(true); // Use the static constructor BY to create a By object and specify the scrollable attribute of the target component.

```

<a id="selected"></a>
## selected

```TypeScript
selected(b?: boolean): By
```

Specifies the selected status of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [selected](arkts-test-uitest-on-c.md#selected-1)

<!--Device-By-selected(b?: boolean): By--><!--Device-By-selected(b?: boolean): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Selected status of the component. The value **true** indicates that the component is selected,and **false** indicates the opposite. Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object that matches the selected attribute of the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.selected(true); // Use the static constructor BY to create a By object and specify the selected attribute of the target component.

```

<a id="text"></a>
## text

```TypeScript
text(txt: string, pattern?: MatchPattern): By
```

Specifies the text attribute of the target component. Multiple match patterns are supported.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [text](arkts-test-uitest-on-c.md#text-1)

<!--Device-By-text(txt: string, pattern?: MatchPattern): By--><!--Device-By-text(txt: string, pattern?: MatchPattern): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| txt | string | Yes | Component text, used to match the target component. |
| pattern | [MatchPattern](arkts-test-uitest-matchpattern-e.md) | No | Match pattern {@link MatchPattern}.<br>Default value: {@link MatchPattern.EQUALS} |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object that matches the text attribute of the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { BY, By } from '@kit.TestKit';

let by: By = BY.text('123'); // Use the static constructor BY to create a By object and specify the text attribute of the target component.

```

<a id="type"></a>
## type

```TypeScript
type(tp: string): By
```

Specifies the type attribute of the target component.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [type(tp:](arkts-test-uitest-on-c.md#type-1)

<!--Device-By-type(tp: string): By--><!--Device-By-type(tp: string): By-End-->

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tp | string | Yes | Component type. |

**Return value:**

| Type | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | - **By** object that matches the type attribute of the target component. |

**Example**

```TypeScript
// xxx.test.ets
import { By, BY } from '@kit.TestKit';

let by: By = BY.type('Button'); // Use the static constructor BY to create a By object and specify the type attribute of the target component.

```

