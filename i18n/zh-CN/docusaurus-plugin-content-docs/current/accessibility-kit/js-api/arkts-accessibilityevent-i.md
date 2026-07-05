# AccessibilityEvent

Defines an accessibility event.

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## 导入模块

```TypeScript
import { Rect,TouchPosition,AccessibilityVirtualNode,ElementAttributeKeys,FocusCondition,AccessibilityExtensionContext,ElementAttributeValues,AccessibilityEventInfo,AccessibilityEvent,AccessibilityElement,FocusRule,FocusMoveResult,FocusType,Parameter,FocusDirection,WindowType } from '@kit.AccessibilityKit';
```

## textAnnouncedForAccessibility

```TypeScript
textAnnouncedForAccessibility?: string
```

Content for auto-broadcasting. Set the broadcast content based on the actual scenario. No special restrictions.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## elementId

```TypeScript
elementId?: long
```

Component ID for auto-focusing. The default value is **0**.

**类型：** long

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## timeStamp

```TypeScript
timeStamp?: long
```

Timestamp of the event, in milliseconds. The default value is **0**.

**类型：** long

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## eventType

```TypeScript
eventType: accessibility.EventType | accessibility.WindowUpdateType |
        TouchGuideType | GestureType | PageUpdateType
```

Event type. **EventType**: accessibility event type. **WindowUpdateType**: window update type. **TouchGuideType**: touch guide type. **GestureType**: gesture type. **PageUpdateType**: page update type.

**类型：** accessibility.EventType | accessibility.WindowUpdateType | TouchGuideType | GestureType | PageUpdateType

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## extraInfo

```TypeScript
extraInfo?: string
```

Added or deleted text content carried by the **TextArea**, **TextInput**, **SearchField**, or **RichEdit** component. Set this parameter based on site requirements. No special restrictions.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## target

```TypeScript
target?: AccessibilityElement
```

Target component where the event occurs.

**类型：** AccessibilityElement

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

