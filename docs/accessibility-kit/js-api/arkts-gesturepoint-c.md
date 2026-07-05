# GesturePoint

The **GesturePoint** module provides APIs for creating gesture touch point information required for an accessibility application to inject gestures.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## Modules to Import

```TypeScript
import { GesturePoint } from '@kit.AccessibilityKit';
```

## constructor

```TypeScript
constructor(positionX: double, positionY: double)
```

Defines a constructor used to create a **GesturePoint** instance.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| positionX | double | Yes | X coordinate of the touch point, in pixels (px). |
| positionY | double | Yes | Y coordinate of the touch point, in pixels (px). |

**Example**

```TypeScript
import { GesturePoint } from '@kit.AccessibilityKit';

let gesturePoint = new GesturePoint(1, 2);

```

## positionY

```TypeScript
positionY: double
```

Y coordinate of the touch point, in pixels (px).

**Type:** double

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## positionX

```TypeScript
positionX: double
```

X coordinate of the touch point, in pixels (px).

**Type:** double

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

