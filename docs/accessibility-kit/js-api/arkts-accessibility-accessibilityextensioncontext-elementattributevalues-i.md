# ElementAttributeValues

Provides attribute names and value types of a node element.

**Since:** 9

<!--Device-unnamed-export interface ElementAttributeValues--><!--Device-unnamed-export interface ElementAttributeValues-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityFocused

```TypeScript
accessibilityFocused: boolean
```

Whether the element is focused for accessibility purposes. The value **true** indicates that the element is focused, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-accessibilityFocused: boolean--><!--Device-ElementAttributeValues-accessibilityFocused: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityNextFocusId

```TypeScript
accessibilityNextFocusId?: number
```

ID of the next component to be focused on. You can use **findElement('elementId')** to obtain the value of this attribute set on the component from the **AccessibilityElementInfo** object.

Default value: **-1**.

**Type:** number

**Since:** 18

<!--Device-ElementAttributeValues-accessibilityNextFocusId?: long--><!--Device-ElementAttributeValues-accessibilityNextFocusId?: long-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityPreviousFocusId

```TypeScript
accessibilityPreviousFocusId?: number
```

ID of the previous component to be focused on. You can use **findElement('elementId')** to obtain the value of this attribute set on the component from the **AccessibilityElementInfo** object.

Default value: **-1**.

**Type:** number

**Since:** 18

<!--Device-ElementAttributeValues-accessibilityPreviousFocusId?: long--><!--Device-ElementAttributeValues-accessibilityPreviousFocusId?: long-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityScrollable

```TypeScript
accessibilityScrollable?: boolean
```

Whether an element is scrollable for accessibility. This attribute has a higher priority than **scrollable**.

- **true** (default): the element is scrollable.  
- **false**: the element is not scrollable.

**Type:** boolean

**Since:** 18

<!--Device-ElementAttributeValues-accessibilityScrollable?: boolean--><!--Device-ElementAttributeValues-accessibilityScrollable?: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityText

```TypeScript
accessibilityText: string
```

Accessibility text information of an element.

**Type:** string

**Since:** 12

<!--Device-ElementAttributeValues-accessibilityText: string--><!--Device-ElementAttributeValues-accessibilityText: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## bundleName

```TypeScript
bundleName: string
```

Bundle name.

**Type:** string

**Since:** 9

<!--Device-ElementAttributeValues-bundleName: string--><!--Device-ElementAttributeValues-bundleName: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## checkable

```TypeScript
checkable: boolean
```

Whether the element is checkable. The value **true** indicates that the element is checkable, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-checkable: boolean--><!--Device-ElementAttributeValues-checkable: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## checked

```TypeScript
checked: boolean
```

Whether the element is checked. The value **true** indicates that the element is checked, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-checked: boolean--><!--Device-ElementAttributeValues-checked: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## children

```TypeScript
children: Array<AccessibilityElement>
```

All child elements.

**Type:** Array&lt;AccessibilityElement&gt;

**Since:** 9

<!--Device-ElementAttributeValues-children: Array<AccessibilityElement>--><!--Device-ElementAttributeValues-children: Array<AccessibilityElement>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## clickable

```TypeScript
clickable: boolean
```

Whether the element is clickable. The value **true** indicates that the element is clickable, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-clickable: boolean--><!--Device-ElementAttributeValues-clickable: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## componentId

```TypeScript
componentId: number
```

ID of the component to which the element belongs.

Default value: **-1**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-componentId: long--><!--Device-ElementAttributeValues-componentId: long-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## componentType

```TypeScript
componentType: string
```

Type of the component to which the element belongs, for example, **Button** for the button component and **Image** for the image component.

**Type:** string

**Since:** 9

<!--Device-ElementAttributeValues-componentType: string--><!--Device-ElementAttributeValues-componentType: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## contents

```TypeScript
contents: Array<string>
```

List of contents. Set this parameter based on site requirements. No special restrictions.

**Type:** Array&lt;string&gt;

**Since:** 9

<!--Device-ElementAttributeValues-contents: Array<string>--><!--Device-ElementAttributeValues-contents: Array<string>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## currentIndex

```TypeScript
currentIndex: number
```

Index of the current item.

Default value: **0**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-currentIndex: int--><!--Device-ElementAttributeValues-currentIndex: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## customComponentType

```TypeScript
customComponentType?: string
```

Custom component type. It corresponds to [AccessibilityRoleType Enumeration Description](../../apis-arkui/arkts-components/arkts-arkui-accessibilityroletype-e.md) of the element.

**Type:** string

**Since:** 18

<!--Device-ElementAttributeValues-customComponentType?: string--><!--Device-ElementAttributeValues-customComponentType?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## description

```TypeScript
description: string
```

Description of the element. Set this parameter based on site requirements. No special restrictions.

**Type:** string

**Since:** 9

<!--Device-ElementAttributeValues-description: string--><!--Device-ElementAttributeValues-description: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## editable

```TypeScript
editable: boolean
```

Whether the element is editable. The value **true** indicates that the element is editable, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-editable: boolean--><!--Device-ElementAttributeValues-editable: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## endIndex

```TypeScript
endIndex: number
```

Index of the last list item displayed on the screen.

Default value: **0**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-endIndex: int--><!--Device-ElementAttributeValues-endIndex: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## error

```TypeScript
error: string
```

Error status.

**Type:** string

**Since:** 9

<!--Device-ElementAttributeValues-error: string--><!--Device-ElementAttributeValues-error: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## extraInfo

```TypeScript
extraInfo?: string
```

Extended attributes, which are used to define the attributes of specific components, including:

- **CheckboxGroupSelectedStatus**: selection status of the **CheckboxGroup** component. The options are as follows:

**0**: selected

**1**: partially selected

**2**: not selected

- **Row**: row where a focused item is located in **Grid**.  
- **Column**: column where a focused item is located in **Grid**.  
- **ListItemIndex**: row where a focused item is located in **List**.  
- **SideBarContainerStates**: expansion state of the expandable components (such as **SideBarContainer** and **Select**). The options are as follows:

**0**: collapsed

**1**: expanded

- **ToggleType**: type of the **Toggle** component. The options are as follows:

**0**: checkbox

**1**: switch

**2**: button

- **BindSheet**: position of the **BindSheet** component on the screen. The options are as follows:

**0**: high

**1**: middle

**2**: low

- **hasRegisteredHover**: whether the component has registered the **onAccessibilityHover** event callback. The value **1** indicates that the component has registered the event callback; otherwise, this field is not used.  
- **direction**: layout direction of the **List** component. The value can be **vertical** or **horizontal**.  
- **expandedState**: expanded state of list items in the **List** component. The value can be **expanded** or **collapsed**.  
- **componentTypeDescription**: detailed information about the component type.

**Type:** string

**Since:** 18

<!--Device-ElementAttributeValues-extraInfo?: string--><!--Device-ElementAttributeValues-extraInfo?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## focusable

```TypeScript
focusable: boolean
```

Whether the element is focusable. The value **true** indicates that the element is focusable, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-focusable: boolean--><!--Device-ElementAttributeValues-focusable: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## hintText

```TypeScript
hintText: string
```

Hint text.

**Type:** string

**Since:** 9

<!--Device-ElementAttributeValues-hintText: string--><!--Device-ElementAttributeValues-hintText: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## hotArea

```TypeScript
hotArea: Rect
```

Touchable area of an element.

**Type:** Rect

**Since:** 12

<!--Device-ElementAttributeValues-hotArea: Rect--><!--Device-ElementAttributeValues-hotArea: Rect-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## inputType

```TypeScript
inputType: number
```

Type of the input text.

Default value: **0**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-inputType: int--><!--Device-ElementAttributeValues-inputType: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## inspectorKey

```TypeScript
inspectorKey: string
```

Alias of the element.

**Type:** string

**Since:** 9

<!--Device-ElementAttributeValues-inspectorKey: string--><!--Device-ElementAttributeValues-inspectorKey: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## isActive

```TypeScript
isActive: boolean
```

Whether the element is active. The value **true** indicates that the element is active and **false** indicates the opposite.

Default value: **true**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-isActive: boolean--><!--Device-ElementAttributeValues-isActive: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## isEnable

```TypeScript
isEnable: boolean
```

Whether the element is enabled. The value **true** indicates that the element is enabled, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-isEnable: boolean--><!--Device-ElementAttributeValues-isEnable: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## isFocused

```TypeScript
isFocused: boolean
```

Whether the element is focused. The value **true** indicates that the element is focused, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-isFocused: boolean--><!--Device-ElementAttributeValues-isFocused: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## isHint

```TypeScript
isHint: boolean
```

Whether the element is a hint. The value **true** indicates that the element is a hint, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-isHint: boolean--><!--Device-ElementAttributeValues-isHint: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## isPassword

```TypeScript
isPassword: boolean
```

Whether the element is a password. The value **true** indicates that the element is a password, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-isPassword: boolean--><!--Device-ElementAttributeValues-isPassword: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## isVisible

```TypeScript
isVisible: boolean
```

Whether the element is visible. The value **true** indicates that the element is visible, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-isVisible: boolean--><!--Device-ElementAttributeValues-isVisible: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## itemCount

```TypeScript
itemCount: number
```

Total number of items.

Default value: **0**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-itemCount: int--><!--Device-ElementAttributeValues-itemCount: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## lastContent

```TypeScript
lastContent: string
```

Last content.

**Type:** string

**Since:** 9

<!--Device-ElementAttributeValues-lastContent: string--><!--Device-ElementAttributeValues-lastContent: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## layer

```TypeScript
layer: number
```

Display layer of the element.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-layer: int--><!--Device-ElementAttributeValues-layer: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## longClickable

```TypeScript
longClickable: boolean
```

Whether the element is long-clickable. The value **true** indicates that the element is long-clickable, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-longClickable: boolean--><!--Device-ElementAttributeValues-longClickable: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## offset

```TypeScript
offset: number
```

For scrollable components such as **List** and **Grid**, this attribute indicates the pixel offset of the content area relative to the top coordinate of the component. The unit is pixel (px).

Default value: **0**.

**Type:** number

**Since:** 12

<!--Device-ElementAttributeValues-offset: double--><!--Device-ElementAttributeValues-offset: double-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## pageId

```TypeScript
pageId: number
```

Page ID.

Default value: **-1**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-pageId: int--><!--Device-ElementAttributeValues-pageId: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## parent

```TypeScript
parent: AccessibilityElement
```

Parent element of the element.

**Type:** AccessibilityElement

**Since:** 9

<!--Device-ElementAttributeValues-parent: AccessibilityElement--><!--Device-ElementAttributeValues-parent: AccessibilityElement-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## pluralLineSupported

```TypeScript
pluralLineSupported: boolean
```

Whether the element supports multiple lines of text. The value **true** indicates that the element supports multiple lines of text, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-pluralLineSupported: boolean--><!--Device-ElementAttributeValues-pluralLineSupported: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## rect

```TypeScript
rect: Rect
```

Area of the element.

**Type:** Rect

**Since:** 9

<!--Device-ElementAttributeValues-rect: Rect--><!--Device-ElementAttributeValues-rect: Rect-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## resourceName

```TypeScript
resourceName: string
```

Resource name of the element.

**Type:** string

**Since:** 9

<!--Device-ElementAttributeValues-resourceName: string--><!--Device-ElementAttributeValues-resourceName: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## rootElement

```TypeScript
rootElement: AccessibilityElement
```

Root element of the window element.

**Type:** AccessibilityElement

**Since:** 9

<!--Device-ElementAttributeValues-rootElement: AccessibilityElement--><!--Device-ElementAttributeValues-rootElement: AccessibilityElement-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## screenRect

```TypeScript
screenRect: Rect
```

Display area of the element.

**Type:** Rect

**Since:** 9

<!--Device-ElementAttributeValues-screenRect: Rect--><!--Device-ElementAttributeValues-screenRect: Rect-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## scrollable

```TypeScript
scrollable: boolean
```

Whether the element is scrollable. The value **true** indicates that the element is scrollable, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-scrollable: boolean--><!--Device-ElementAttributeValues-scrollable: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## selected

```TypeScript
selected: boolean
```

Whether the element is selected. The value **true** indicates that the element is selected, and **false** indicates the opposite.

Default value: **false**.

**Type:** boolean

**Since:** 9

<!--Device-ElementAttributeValues-selected: boolean--><!--Device-ElementAttributeValues-selected: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## startIndex

```TypeScript
startIndex: number
```

Index of the first list item on the screen.

Default value: **0**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-startIndex: int--><!--Device-ElementAttributeValues-startIndex: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## text

```TypeScript
text: string
```

Text of the element.

**Type:** string

**Since:** 9

<!--Device-ElementAttributeValues-text: string--><!--Device-ElementAttributeValues-text: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## textLengthLimit

```TypeScript
textLengthLimit: number
```

Maximum text length of the element.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-textLengthLimit: int--><!--Device-ElementAttributeValues-textLengthLimit: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## textMoveUnit

```TypeScript
textMoveUnit: accessibility.TextMoveUnit
```

Granularity of movement when the text is read.

**Type:** accessibility.TextMoveUnit

**Since:** 9

<!--Device-ElementAttributeValues-textMoveUnit: accessibility.TextMoveUnit--><!--Device-ElementAttributeValues-textMoveUnit: accessibility.TextMoveUnit-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## textType

```TypeScript
textType: string
```

Accessibility text type of an element, which is configured by the **accessibilityTextHint** attribute of the component.

**Type:** string

**Since:** 12

<!--Device-ElementAttributeValues-textType: string--><!--Device-ElementAttributeValues-textType: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## triggerAction

```TypeScript
triggerAction: accessibility.Action
```

Action that triggers the element event.

**Type:** accessibility.Action

**Since:** 9

<!--Device-ElementAttributeValues-triggerAction: accessibility.Action--><!--Device-ElementAttributeValues-triggerAction: accessibility.Action-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## type

```TypeScript
type: WindowType
```

Window type of the element.

**Type:** WindowType

**Since:** 9

<!--Device-ElementAttributeValues-type: WindowType--><!--Device-ElementAttributeValues-type: WindowType-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## valueMax

```TypeScript
valueMax: number
```

Maximum value.

Default value: **0**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-valueMax: double--><!--Device-ElementAttributeValues-valueMax: double-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## valueMin

```TypeScript
valueMin: number
```

Minimum value.

Default value: **0**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-valueMin: double--><!--Device-ElementAttributeValues-valueMin: double-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## valueNow

```TypeScript
valueNow: number
```

Current value.

Default value: **0**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-valueNow: double--><!--Device-ElementAttributeValues-valueNow: double-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## windowId

```TypeScript
windowId: number
```

Window ID.

Default value: **-1**.

**Type:** number

**Since:** 9

<!--Device-ElementAttributeValues-windowId: int--><!--Device-ElementAttributeValues-windowId: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

