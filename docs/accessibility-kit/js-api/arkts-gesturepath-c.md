# GesturePath

The **GesturePath** module provides APIs for creating gesture path information required for an accessibility application to inject gestures.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## Modules to Import

```TypeScript
import { GesturePath } from '@kit.AccessibilityKit';
```

## constructor

```TypeScript
constructor(durationTime: long)
```

Defines a constructor used to create a **GesturePath** instance.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| durationTime | long | Yes | Total gesture duration, in milliseconds. |

**Example**

```TypeScript
import { GesturePath } from '@kit.AccessibilityKit';

let gesturePath = new GesturePath(20);

```

## durationTime

```TypeScript
durationTime: long
```

Total gesture duration, in milliseconds.

**Type:** long

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## points

```TypeScript
points: Array<GesturePoint>
```

Gesture touch point.

**Type:** Array<GesturePoint>

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

