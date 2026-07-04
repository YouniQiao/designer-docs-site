# AccessibilityEvent

Defines an accessibility event.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## Modules to Import

```TypeScript
import { Rect, TouchPosition, AccessibilityVirtualNode, ElementAttributeKeys, FocusCondition, AccessibilityExtensionContext, ElementAttributeValues, AccessibilityEventInfo, AccessibilityEvent, AccessibilityElement, FocusRule, FocusMoveResult, FocusType, Parameter, FocusDirection, WindowType } from '@ohos.application.AccessibilityExtensionAbility';
```

## elementId

```TypeScript
elementId?: number
```

Component ID for auto-focusing. The default value is **0**.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## eventType

```TypeScript
eventType: accessibility.EventType | accessibility.WindowUpdateType |
        TouchGuideType | GestureType | PageUpdateType
```

Event type. **EventType**: accessibility event type. **WindowUpdateType**: window update type. **TouchGuideType**: touch guide type. **GestureType**: gesture type. **PageUpdateType**: page update type.

**Type:** accessibility.EventType | accessibility.WindowUpdateType | TouchGuideType | GestureType | PageUpdateType

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## extraInfo

```TypeScript
extraInfo?: string
```

Added or deleted text content carried by the **TextArea**, **TextInput**, **SearchField**, or **RichEdit** component. Set this parameter based on site requirements. No special restrictions.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## target

```TypeScript
target?: AccessibilityElement
```

Target component where the event occurs.

**Type:** AccessibilityElement

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## textAnnouncedForAccessibility

```TypeScript
textAnnouncedForAccessibility?: string
```

Content for auto-broadcasting. Set the broadcast content based on the actual scenario. No special restrictions.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## timeStamp

```TypeScript
timeStamp?: number
```

Timestamp of the event, in milliseconds. The default value is **0**.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

