# AccessibilityEventInfo

Describes the accessibility event information.

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { Rect,TouchPosition,AccessibilityVirtualNode,ElementAttributeKeys,FocusCondition,AccessibilityExtensionContext,ElementAttributeValues,AccessibilityEventInfo,AccessibilityEvent,AccessibilityElement,FocusRule,FocusMoveResult,FocusType,Parameter,FocusDirection,WindowType } from '@kit.AccessibilityKit';
```

## eventType

```TypeScript
eventType: AccessibilityEventType
```

Event type.

**类型：** AccessibilityEventType

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## extraInfo

```TypeScript
extraInfo?: string
```

Added or deleted text content carried by the **TextArea**, **TextInput**, **SearchField**, or **RichEdit** component.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## timestamp

```TypeScript
timestamp?: long
```

Timestamp of the event, in milliseconds. The default value is **0**.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## target

```TypeScript
target?: AccessibilityElement
```

Target component where the event occurs.

**类型：** AccessibilityElement

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

