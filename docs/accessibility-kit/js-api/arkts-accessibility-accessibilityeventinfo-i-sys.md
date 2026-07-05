# AccessibilityEventInfo (System API)

Describes the accessibility event information.

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Rect, TouchPosition, AccessibilityVirtualNode, ElementAttributeKeys, FocusCondition, AccessibilityExtensionContext, ElementAttributeValues, AccessibilityEventInfo, AccessibilityEvent, AccessibilityElement, FocusRule, FocusMoveResult, FocusType, Parameter, FocusDirection, WindowType } from '@ohos.application.AccessibilityExtensionAbility';
```

## eventType

```TypeScript
eventType: AccessibilityEventType
```

Event type.

**Type:** AccessibilityEventType

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## extraInfo

```TypeScript
extraInfo?: string
```

Added or deleted text content carried by the **TextArea**, **TextInput**, **SearchField**, or **RichEdit** component.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## target

```TypeScript
target?: AccessibilityElement
```

Target component where the event occurs.

**Type:** AccessibilityElement

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## timestamp

```TypeScript
timestamp?: number
```

Timestamp of the event, in milliseconds. The default value is **0**.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

