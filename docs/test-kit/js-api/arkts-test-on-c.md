# On

Since API version 9, the UiTest framework provides a wide range of UI component feature description APIs in the **On** class to filter and match components. The APIs provided by the **On** class exhibit the following features: 1. Allow one or more attributes as the match conditions. For example, you can specify both the **text** and **id** attributes to find the target component. 2. Provide multiple match patterns for component attributes. 3. Support absolute positioning and relative positioning for components. APIs such as [ON.isBefore](arkts-test-on-c.md#isbefore-1) and [ON.isAfter](arkts-test-on-c.md#isafter-1) can be used to specify the features of adjacent components to assist positioning. All APIs provided in the **On** class are synchronous. You are advised to use the static constructor **ON** to create an **On** object in chain mode.

**Since:** 9

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@ohos.UiTest';
```

## afterComponent

```TypeScript
afterComponent(com: Component): On
```

Requires that the target Component which is after another Component that specified by the given {@link Component} object,used to locate Component relatively.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| com | Component | Yes | describes the Component which the target one is in back of. |

**Return value:**

| Type | Description |
| --- | --- |
| On | this {@link On} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

## beforeComponent

```TypeScript
beforeComponent(com: Component): On
```

Requires that the target Component which is before another Component that specified by the given {@link Component} object,used to locate Component relatively.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| com | Component | Yes | describes the Component which the target one is in front of. |

**Return value:**

| Type | Description |
| --- | --- |
| On | this {@link On} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

## belongingDisplay

```TypeScript
belongingDisplay(displayId: number): On
```

Obtains the component object on the specified display.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | Yes | ID of the display to which the component belongs. The value is an integer greater thanor equal to 0.<br>**Note**: If the input **displayId** does not exist, the exception **17000007** is reported. You can use[getAllDisplays](../../apis-arkui/arkts-apis/arkts-arkui-getalldisplays-f.md#getalldisplays-1) to obtainall current **display** objects and use them to obtain the corresponding display IDs.&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - The **On** object of the display to which the specified component belongs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.belongingDisplay(0); // Use the static constructor ON to create an On object and specify the ID of the display to which the target component belongs.

```

## checkable

```TypeScript
checkable(b?: boolean): On
```

Specifies the checkable attribute of the target component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Checkable status of the component. The value **true** indicates that the component is checkable, and **false** indicates the opposite. Default value: **true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the checkable attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. 1. Incorrect parameter types; 2. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.checkable(true); // Use the static constructor ON to create an On object and specify the checkable attribute of the target component.

```

## checked

```TypeScript
checked(b?: boolean): On
```

Specifies the checked attribute of the target component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Checked status of the component. The value **true** indicates that the component is checked,and **false** indicates the opposite. Default value: **true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the checked attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameterverification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.checked(true); // Use the static constructor ON to create an On object and specify the checked attribute of the target component.

```

## clickable

```TypeScript
clickable(b?: boolean): On
```

Specifies the clickable attribute of the target component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Clickable status of the component. The value **true** indicates that the component is clickable, and **false** indicates the opposite. Default value: **true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the clickable attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameterverification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.clickable(true); // Use the static constructor ON to create an On object and specify the clickable attribute of the target component.

```

## description

```TypeScript
description(val: string, pattern?: MatchPattern): On
```

Specifies the description of the target component. Multiple match patterns are supported.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | string | Yes | Description of the component.&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | No | Match pattern {@link MatchPattern} .<br>Default value: {@link MatchPattern.EQUALS} |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.description('123'); // Use the static constructor ON to create an On object and specify the description attribute of the target component.

```

## enabled

```TypeScript
enabled(b?: boolean): On
```

Specifies the enabled attribute of the target component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Enabled status of the component. The value **true** indicates that the component is enabled,and **false** indicates the opposite. Default value: **true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the enabled attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameterverification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.enabled(true); // Use the static constructor ON to create an On object and specify the enabled attribute of the target component.

```

## focused

```TypeScript
focused(b?: boolean): On
```

Specifies the focused attribute of the target component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Focused status of the component. The value **true** indicates that the component is focused,and **false** indicates the opposite. Default value: **true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the focused attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameterverification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.focused(true); // Use the static constructor ON to create an On object and specify the focused attribute of the target component.

```

## hint

```TypeScript
hint(val: string, pattern?: MatchPattern): On
```

Obtains the component object of the specified hint text and returns the **On** object.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | string | Yes | The specified hint text of the component.&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | No | Match pattern{@link MatchPattern}.<br>Default value: {@link MatchPattern.EQUALS} |

**Return value:**

| Type | Description |
| --- | --- |
| On | - The **On** object of the specified hint text component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { MatchPattern, On, ON } from '@kit.TestKit';

let on: On = ON.hint('welcome', MatchPattern.EQUALS); // Use the static constructor ON to create an On object with the hint text attribute of the target component specified.

```

## id

```TypeScript
id(id: string): On
```

Specifies the ID attribute of the target component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | Component ID.&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the ID attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.id('123'); // Use the static constructor ON to create an On object and specify the ID attribute of the target component.

```

## id

```TypeScript
id(id: string, pattern: MatchPattern): On
```

Specifies the **id** attribute and match pattern of the target component.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | Component ID.&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | Yes | Text matching pattern {@link MatchPattern}. |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the ID attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { MatchPattern, On, ON } from '@kit.TestKit';

let on: On = ON.id('id', MatchPattern.REG_EXP_ICASE); // Use case-insensitive regular expression to match the ID attribute value of the component.

```

## inWindow

```TypeScript
inWindow(bundleName: string): On
```

Specifies that the target component is located within the given application window.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application window.&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.inWindow('com.uitestScene.acts'); // Use the static constructor ON to create an On object and specify that the target component is located within the given application window.

```

## isAfter

```TypeScript
isAfter(on: On): On
```

Specifies that the target component is located after the given attribute component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | Information about the attribute component.&lt;!--RP3--&gt;&lt;!--RP3End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

// Use the static constructor ON to create an On object and specify that the target component is located after the given attribute component.
let on: On = ON.type('Text').isAfter(ON.text('123')); // Search for the first Text component located after the component whose text is 123.

```

## isBefore

```TypeScript
isBefore(on: On): On
```

Specifies that the target component is located before the given attribute component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | Information about the attribute component.&lt;!--RP3--&gt;&lt;!--RP3End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

// Use the static constructor ON to create an On object and specify that the target component is located before the given attribute component.
let on: On = ON.type('Button').isBefore(ON.text('123')); // Search for the first Button component located before the component whose text is 123.

```

## longClickable

```TypeScript
longClickable(b?: boolean): On
```

Specifies the long-clickable attribute of the target component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Long-clickable status of the component. The value **true** indicates that the component is long-clickable, and **false** indicates the opposite. Default value: **true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the long-clickable attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameterverification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.longClickable(true); // Use the static constructor ON to create an On object and specify the longClickable attribute of the target component.

```

## originalText

```TypeScript
originalText(text: string, pattern?: MatchPattern): On
```

Specifies the text content and text matching pattern of the component. > **NOTE** > > If the [accessibilityLevel](../../apis-arkui/arkts-components/arkts-arkui-commonmethod-c.md#accessibilitylevel-1) > of a component is set to **no** or **no-hide-descendants**, this API can be used to specify the text attribute of > the target component for searching for the component. In this case, the [On.text()](arkts-test-on-c.md#text-1) API does not > take effect.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Component text, used to match the target component.&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | No | Match pattern{@link MatchPattern}.<br>Default value: {@link MatchPattern.EQUALS} |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the text attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.originalText('123'); // Use the static constructor ON to create an On object and specify the originalText attribute of the target component.

```

## scrollable

```TypeScript
scrollable(b?: boolean): On
```

Specifies the scrollable attribute of the target component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Scrollable status of the component. The value **true** indicates that the component isscrollable, and **false** indicates the opposite. Default value: **true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the scrollable attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameterverification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.scrollable(true); // Use the static constructor ON to create an On object and specify the scrollable attribute of the target component.

```

## selected

```TypeScript
selected(b?: boolean): On
```

Specifies the selected attribute of the target component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| b | boolean | No | Selected status of the component. The value **true** indicates that the component is selected,and **false** indicates the opposite. Default value: **true**&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the selected attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameterverification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.selected(true); // Use the static constructor ON to create an On object and specify the selected attribute of the target component.

```

## text

```TypeScript
text(txt: string, pattern?: MatchPattern): On
```

Specifies the text attribute of the target component. Multiple match patterns are supported. > **NOTE** > > If the [accessibilityLevel](../../apis-arkui/arkts-components/arkts-arkui-commonmethod-c.md#accessibilitylevel-1) > of a component is set to **no** or **no-hide-descendants**, this API cannot be used to specify the text attribute > of the target component for searching for the component. In this case, you can use the > [On.originalText()](arkts-test-on-c.md#originaltext-1) API.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| txt | string | Yes | Component text, used to match the target component.&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | No | Match pattern {@link MatchPattern} .<br>Default value: {@link MatchPattern.EQUALS} |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the text attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.text('123'); // Use the static constructor ON to create an On object and specify the text attribute of the target component.

```

## type

```TypeScript
type(tp: string): On
```

Specifies the type attribute of the target component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tp | string | Yes | Component type.&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the type attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

let on: On = ON.type('Button'); // Use the static constructor ON to create an On object and specify the type attribute of the target component.

```

## type

```TypeScript
type(tp: string, pattern: MatchPattern): On
```

Specifies the **type** attribute and match pattern of the target component.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tp | string | Yes | Component type.&lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| pattern | MatchPattern | Yes | Text matching pattern {@link MatchPattern}. |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object that matches the type attribute of the target component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON, MatchPattern } from '@kit.TestKit';

let on: On = ON.type('Button', MatchPattern.EQUALS); // Use the static constructor ON to create an On object and specify the type attribute of the target component.

```

## within

```TypeScript
within(on: On): On
```

Specifies that the target component is located within the given attribute component.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | On | Yes | Information about the attribute component.&lt;!--RP3--&gt;&lt;!--RP3End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| On | - **On** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// xxx.test.ets
import { On, ON } from '@kit.TestKit';

// Use the static constructor ON to create an On object and specify that the target component is located within the given attribute component.
let on: On = ON.text('java').within(ON.type('Scroll')); // Search for the child component whose text is java within the Scroller component.

```

## withinComponent

```TypeScript
withinComponent(com: Component): On
```

Requires that the target Component which is inside of another Component that specified by the given {@link Component} object,used to locate Component relatively.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| com | Component | Yes | describes the Component which the target one is inside of. |

**Return value:**

| Type | Description |
| --- | --- |
| On | this {@link On} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17000007](../errorcode-uitest.md#17000007-parameters-are-invalid) | Parameter verification failed. |

