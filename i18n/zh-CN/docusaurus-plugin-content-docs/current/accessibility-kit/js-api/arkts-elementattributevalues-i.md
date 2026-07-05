# ElementAttributeValues

Provides attribute names and value types of a node element.

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## parent

```TypeScript
parent: AccessibilityElement
```

Parent element of the element.

**类型：** AccessibilityElement

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityFocused

```TypeScript
accessibilityFocused: boolean
```

Whether the element is focused for accessibility purposes. The value **true** indicates that the element is focused , and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## lastContent

```TypeScript
lastContent: string
```

Last content.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## clickable

```TypeScript
clickable: boolean
```

Whether the element is clickable. The value **true** indicates that the element is clickable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## textMoveUnit

```TypeScript
textMoveUnit: accessibility.TextMoveUnit
```

Granularity of movement when the text is read.

**类型：** accessibility.TextMoveUnit

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## hotArea

```TypeScript
hotArea: Rect
```

Touchable area of an element.

**类型：** Rect

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityVisible

```TypeScript
accessibilityVisible?: boolean
```

Whether the element is accessibility visible. **true** means the element is accessibility visible and **false** means the element is accessibility invisible. The default value is **true**.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## type

```TypeScript
type: WindowType
```

Window type of the element.

**类型：** WindowType

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## isActive

```TypeScript
isActive: boolean
```

Whether the element is active. The value **true** indicates that the element is active and **false** indicates the opposite. Default value: **true**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## currentIndex

```TypeScript
currentIndex: int
```

Index of the current item. Default value: **0**.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## isEnable

```TypeScript
isEnable: boolean
```

Whether the element is enabled. The value **true** indicates that the element is enabled, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## startIndex

```TypeScript
startIndex: int
```

Index of the first list item on the screen. Default value: **0**.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## children

```TypeScript
children: Array<AccessibilityElement>
```

All child elements.

**类型：** Array<AccessibilityElement>

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## navDestinationId

```TypeScript
navDestinationId?: long
```

ID of the navigation target associated with the element. The default value is **-1**.

**类型：** long

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## endIndex

```TypeScript
endIndex: int
```

Index of the last list item displayed on the screen. Default value: **0**.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## checked

```TypeScript
checked: boolean
```

Whether the element is checked. The value **true** indicates that the element is checked, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## inputType

```TypeScript
inputType: int
```

Type of the input text. Default value: **0**.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## text

```TypeScript
text: string
```

Text of the element.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityNextFocusId

```TypeScript
accessibilityNextFocusId?: long
```

ID of the next component to be focused on. You can use **findElement('elementId')** to obtain the value of this attribute set on the component from the **AccessibilityElementInfo** object. Default value: **-1**.

**类型：** long

**起始版本：** 18

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## selected

```TypeScript
selected: boolean
```

Whether the element is selected. The value **true** indicates that the element is selected, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## offset

```TypeScript
offset: double
```

For scrollable components such as **List** and **Grid**, this attribute indicates the pixel offset of the content area relative to the top coordinate of the component. The unit is pixel (px). Default value: **0**.

**类型：** double

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## isPassword

```TypeScript
isPassword: boolean
```

Whether the element is a password. The value **true** indicates that the element is a password, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## checkable

```TypeScript
checkable: boolean
```

Whether the element is checkable. The value **true** indicates that the element is checkable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## customActions

```TypeScript
customActions?: Array<string>
```

Indicates the custom actions supported by the component.

**类型：** Array<string>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## childrenIds

```TypeScript
childrenIds?: Array<long>
```

ID of the child component of the element.

**类型：** Array<long>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## childrenTreeId

```TypeScript
childrenTreeId?: int
```

Child component tree ID of the element. The default value is **-1**.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## isEssential

```TypeScript
isEssential?: boolean
```

Whether the element is mandatory for the user. The value **true** indicates that the element is mandatory, and the value **false** indicates that the element is not mandatory. The default value is **false**.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## textType

```TypeScript
textType: string
```

Accessibility text type of an element, which is configured by the **accessibilityTextHint** attribute of the component.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## resourceName

```TypeScript
resourceName: string
```

Resource name of the element.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## focusable

```TypeScript
focusable: boolean
```

Whether the element is focusable. The value **true** indicates that the element is focusable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## isVisible

```TypeScript
isVisible: boolean
```

Whether the element is visible. The value **true** indicates that the element is visible, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## pageId

```TypeScript
pageId: int
```

Page ID. Default value: **-1**.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## isFocused

```TypeScript
isFocused: boolean
```

Whether the element is focused. The value **true** indicates that the element is focused, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## windowId

```TypeScript
windowId: int
```

Window ID. Default value: **-1**.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## longClickable

```TypeScript
longClickable: boolean
```

Whether the element is long-clickable. The value **true** indicates that the element is long-clickable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## sourceType

```TypeScript
sourceType?: AccessibilitySourceType
```

Indicates the source of this element.

**类型：** AccessibilitySourceType

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## mainWindowId

```TypeScript
mainWindowId?: int
```

ID of the main window of the element. The default value is **-1**.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## contents

```TypeScript
contents: Array<string>
```

List of contents. Set this parameter based on site requirements. No special restrictions.

**类型：** Array<string>

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## customComponentType

```TypeScript
customComponentType?: string
```

Custom component type. It corresponds to [AccessibilityRoleType Enumeration Description]./../@internal/component/ets/common:AccessibilityRoleType of the element.

**类型：** string

**起始版本：** 18

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## bundleName

```TypeScript
bundleName: string
```

Bundle name.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## extraInfo

```TypeScript
extraInfo?: string
```

Extended attributes, which are used to define the attributes of specific components, including: - **CheckboxGroupSelectedStatus**: selection status of the **CheckboxGroup** component. The options are as follows: **0**: selected **1**: partially selected **2**: not selected - **Row**: row where a focused item is located in **Grid**. - **Column**: column where a focused item is located in **Grid**. - **ListItemIndex**: row where a focused item is located in **List**. - **SideBarContainerStates**: expansion state of the expandable components (such as **SideBarContainer** and **Select**). The options are as follows: **0**: collapsed **1**: expanded - **ToggleType**: type of the **Toggle** component. The options are as follows: **0**: checkbox **1**: switch **2**: button - **BindSheet**: position of the **BindSheet** component on the screen. The options are as follows: **0**: high **1**: middle **2**: low - **hasRegisteredHover**: whether the component has registered the **onAccessibilityHover** event callback. The value **1** indicates that the component has registered the event callback; otherwise, this field is not used. - **direction**: layout direction of the **List** component. The value can be **vertical** or **horizontal**. - **expandedState**: expanded state of list items in the **List** component. The value can be **expanded** or **collapsed**. - **componentTypeDescription**: detailed information about the component type.

**类型：** string

**起始版本：** 18

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## triggerAction

```TypeScript
triggerAction: accessibility.Action
```

Action that triggers the element event.

**类型：** accessibility.Action

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## valueMax

```TypeScript
valueMax: double
```

Maximum value. Default value: **0**.

**类型：** double

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## componentId

```TypeScript
componentId: long
```

ID of the component to which the element belongs. Default value: **-1**.

**类型：** long

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## rootElement

```TypeScript
rootElement: AccessibilityElement
```

Root element of the window element.

**类型：** AccessibilityElement

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## description

```TypeScript
description: string
```

Description of the element. Set this parameter based on site requirements. No special restrictions.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## error

```TypeScript
error: string
```

Error status.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## layer

```TypeScript
layer: int
```

Display layer of the element.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## pluralLineSupported

```TypeScript
pluralLineSupported: boolean
```

Whether the element supports multiple lines of text. The value **true** indicates that the element supports multiple lines of text, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## rect

```TypeScript
rect: Rect
```

Area of the element.

**类型：** Rect

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## valueMin

```TypeScript
valueMin: double
```

Minimum value. Default value: **0**.

**类型：** double

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## valueNow

```TypeScript
valueNow: double
```

Current value. Default value: **0**.

**类型：** double

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityStateDescription

```TypeScript
accessibilityStateDescription?: string
```

Custom accessibility state broadcast text of an element.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## inspectorKey

```TypeScript
inspectorKey: string
```

Alias of the element.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityScrollable

```TypeScript
accessibilityScrollable?: boolean
```

Whether an element is scrollable for accessibility. This attribute has a higher priority than **scrollable**. - **true** (default): the element is scrollable. - **false**: the element is not scrollable.

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## scrollable

```TypeScript
scrollable: boolean
```

Whether the element is scrollable. The value **true** indicates that the element is scrollable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityPreviousFocusId

```TypeScript
accessibilityPreviousFocusId?: long
```

ID of the previous component to be focused on. You can use **findElement('elementId')** to obtain the value of this attribute set on the component from the **AccessibilityElementInfo** object. Default value: **-1**.

**类型：** long

**起始版本：** 18

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## componentType

```TypeScript
componentType: string
```

Type of the component to which the element belongs, for example, **Button** for the button component and **Image** for the image component.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## editable

```TypeScript
editable: boolean
```

Whether the element is editable. The value **true** indicates that the element is editable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## textLengthLimit

```TypeScript
textLengthLimit: int
```

Maximum text length of the element.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## belongTreeId

```TypeScript
belongTreeId?: int
```

Component tree ID that the element belongs to. The default value is **-1**.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityText

```TypeScript
accessibilityText: string
```

Accessibility text information of an element.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## parentId

```TypeScript
parentId?: long
```

ID of the parent component of the element. The default value is **-1**.

**类型：** long

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## screenRect

```TypeScript
screenRect: Rect
```

Display area of the element.

**类型：** Rect

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## itemCount

```TypeScript
itemCount: int
```

Total number of items. Default value: **0**.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## isHint

```TypeScript
isHint: boolean
```

Whether the element is a hint. The value **true** indicates that the element is a hint, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## hintText

```TypeScript
hintText: string
```

Hint text.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## currentItem

```TypeScript
currentItem?: AccessibilityGrid
```

Position of the current element in the grid.

**类型：** AccessibilityGrid

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## span

```TypeScript
span?: AccessibilitySpan[]
```

Array of the row and column ranges spanned by the element in the grid layout.

**类型：** AccessibilitySpan[]

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

