# AccessibilityVirtualNode (System API)

Defines the **AccessibilityVirtualNode**.

**Since:** 26.0.0

<!--Device-unnamed-export declare interface AccessibilityVirtualNode--><!--Device-unnamed-export declare interface AccessibilityVirtualNode-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityFocused

```TypeScript
accessibilityFocused?: boolean
```

Whether the accessibility virtual node is focused for accessibility purposes.The value **true** indicates that the element is focused, and **false** indicates the opposite.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-accessibilityFocused?: boolean--><!--Device-AccessibilityVirtualNode-accessibilityFocused?: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityGroup

```TypeScript
accessibilityGroup?: boolean
```

Whether the accessibility virtual node is an accessibility group.The value **true** indicates that the element is an accessibility group, and **false** indicates the opposite.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-accessibilityGroup?: boolean--><!--Device-AccessibilityVirtualNode-accessibilityGroup?: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

This property determines whether the component can be recognized by accessibility services.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-accessibilityLevel?: string--><!--Device-AccessibilityVirtualNode-accessibilityLevel?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityText

```TypeScript
accessibilityText?: string
```

Accessibility text information of an accessibility virtual node.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-accessibilityText?: string--><!--Device-AccessibilityVirtualNode-accessibilityText?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## checkable

```TypeScript
checkable?: boolean
```

Whether the accessibility virtual node is checkable. The value **true** indicates that the node is checkable,and **false** indicates the opposite.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-checkable?: boolean--><!--Device-AccessibilityVirtualNode-checkable?: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## checked

```TypeScript
checked?: boolean
```

Whether the accessibility virtual node is checked. The value **true** indicates that the node is checked,and **false** indicates the opposite.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-checked?: boolean--><!--Device-AccessibilityVirtualNode-checked?: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## childNodeIds

```TypeScript
childNodeIds?: Array<number>
```

List of child accessibility virtual node ids of a component.

**Type:** Array<number>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-childNodeIds?: Array<long>--><!--Device-AccessibilityVirtualNode-childNodeIds?: Array<long>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## clickable

```TypeScript
clickable?: boolean
```

Whether the accessibility virtual node is clickable. The value **true** indicates that the node is clickable,and **false** indicates the opposite.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-clickable?: boolean--><!--Device-AccessibilityVirtualNode-clickable?: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## customComponentType

```TypeScript
customComponentType?: string
```

Component type of the accessibility virtual node.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-customComponentType?: string--><!--Device-AccessibilityVirtualNode-customComponentType?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## elementId

```TypeScript
elementId?: number
```

The id of accessibility element.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-elementId?: long--><!--Device-AccessibilityVirtualNode-elementId?: long-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## enabled

```TypeScript
enabled?: boolean
```

Whether the accessibility virtual node is enabled. The value **true** indicates that the node is enabled,and **false** indicates the opposite.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-enabled?: boolean--><!--Device-AccessibilityVirtualNode-enabled?: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## parentId

```TypeScript
parentId?: number
```

Parent element id of the accessibility element.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-parentId?: long--><!--Device-AccessibilityVirtualNode-parentId?: long-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## rect

```TypeScript
rect?: Rect
```

Area of the accessibility virtual node.

**Type:** Rect

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-rect?: Rect--><!--Device-AccessibilityVirtualNode-rect?: Rect-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## selected

```TypeScript
selected?: boolean
```

Whether the accessibility virtual node is selected. The value **true** indicates that the node is selected,and **false** indicates the opposite.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-selected?: boolean--><!--Device-AccessibilityVirtualNode-selected?: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## supportedActionNames

```TypeScript
supportedActionNames?: Array<string>
```

Supported action names.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-supportedActionNames?: Array<string>--><!--Device-AccessibilityVirtualNode-supportedActionNames?: Array<string>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## text

```TypeScript
text?: string
```

Text of the accessibility virtual node.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-text?: string--><!--Device-AccessibilityVirtualNode-text?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## touchPosition

```TypeScript
touchPosition?: TouchPosition
```

Click position of the accessibility virtual node.

**Type:** TouchPosition

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-touchPosition?: TouchPosition--><!--Device-AccessibilityVirtualNode-touchPosition?: TouchPosition-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## virtualNodeId

```TypeScript
virtualNodeId: number
```

ID of the accessibility virtual node.Default value: **-1**.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AccessibilityVirtualNode-virtualNodeId: long--><!--Device-AccessibilityVirtualNode-virtualNodeId: long-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

