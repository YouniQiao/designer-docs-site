# AccessibilityVirtualNode

Defines the **AccessibilityVirtualNode**.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## elementId

```TypeScript
elementId?: long
```

The id of accessibility element.

**类型：** long

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## touchPosition

```TypeScript
touchPosition?: TouchPosition
```

Click position of the accessibility virtual node.

**类型：** TouchPosition

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityFocused

```TypeScript
accessibilityFocused?: boolean
```

Whether the accessibility virtual node is focused for accessibility purposes. The value **true** indicates that the element is focused, and **false** indicates the opposite.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## checkable

```TypeScript
checkable?: boolean
```

Whether the accessibility virtual node is checkable. The value **true** indicates that the node is checkable, and **false** indicates the opposite.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## clickable

```TypeScript
clickable?: boolean
```

Whether the accessibility virtual node is clickable. The value **true** indicates that the node is clickable, and **false** indicates the opposite.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

This property determines whether the component can be recognized by accessibility services.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityGroup

```TypeScript
accessibilityGroup?: boolean
```

Whether the accessibility virtual node is an accessibility group. The value **true** indicates that the element is an accessibility group, and **false** indicates the opposite.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityText

```TypeScript
accessibilityText?: string
```

Accessibility text information of an accessibility virtual node.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## parentId

```TypeScript
parentId?: long
```

Parent element id of the accessibility element.

**类型：** long

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## enabled

```TypeScript
enabled?: boolean
```

Whether the accessibility virtual node is enabled. The value **true** indicates that the node is enabled, and **false** indicates the opposite.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## rect

```TypeScript
rect?: Rect
```

Area of the accessibility virtual node.

**类型：** Rect

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## supportedActionNames

```TypeScript
supportedActionNames?: Array<string>
```

Supported action names.

**类型：** Array<string>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## childNodeIds

```TypeScript
childNodeIds?: Array<long>
```

List of child accessibility virtual node ids of a component.

**类型：** Array<long>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## virtualNodeId

```TypeScript
virtualNodeId: long
```

ID of the accessibility virtual node. Default value: **-1**.

**类型：** long

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## customComponentType

```TypeScript
customComponentType?: string
```

Component type of the accessibility virtual node.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## checked

```TypeScript
checked?: boolean
```

Whether the accessibility virtual node is checked. The value **true** indicates that the node is checked, and **false** indicates the opposite.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## text

```TypeScript
text?: string
```

Text of the accessibility virtual node.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## selected

```TypeScript
selected?: boolean
```

Whether the accessibility virtual node is selected. The value **true** indicates that the node is selected, and **false** indicates the opposite.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

