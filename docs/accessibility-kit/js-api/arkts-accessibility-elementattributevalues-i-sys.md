# ElementAttributeValues

Provides attribute names and value types of a node element.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## accessibilityStateDescription

```TypeScript
accessibilityStateDescription?: string
```

Custom accessibility state broadcast text of an element.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityVisible

```TypeScript
accessibilityVisible?: boolean
```

Whether the element is accessibility visible. **true** means the element is accessibility visible and **false**
means the element is accessibility invisible. The default value is **true**.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## belongTreeId

```TypeScript
belongTreeId?: number
```

Component tree ID that the element belongs to. The default value is **-1**.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## childrenIds

```TypeScript
childrenIds?: Array<number>
```

ID of the child component of the element.

**Type:** Array<number>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## childrenTreeId

```TypeScript
childrenTreeId?: number
```

Child component tree ID of the element. The default value is **-1**.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## currentItem

```TypeScript
currentItem?: AccessibilityGrid
```

Position of the current element in the grid.

**Type:** AccessibilityGrid

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## customActions

```TypeScript
customActions?: Array<string>
```

Indicates the custom actions supported by the component.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## isEssential

```TypeScript
isEssential?: boolean
```

Whether the element is mandatory for the user. The value **true** indicates that the element is mandatory, and the
value **false** indicates that the element is not mandatory. The default value is **false**.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## mainWindowId

```TypeScript
mainWindowId?: number
```

ID of the main window of the element. The default value is **-1**.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## navDestinationId

```TypeScript
navDestinationId?: number
```

ID of the navigation target associated with the element. The default value is **-1**.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## parentId

```TypeScript
parentId?: number
```

ID of the parent component of the element. The default value is **-1**.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## sourceType

```TypeScript
sourceType?: AccessibilitySourceType
```

Indicates the source of this element.

**Type:** AccessibilitySourceType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## span

```TypeScript
span?: AccessibilitySpan[]
```

Array of the row and column ranges spanned by the element in the grid layout.

**Type:** AccessibilitySpan[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

