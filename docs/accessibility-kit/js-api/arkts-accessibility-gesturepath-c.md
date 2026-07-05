# GesturePath

The **GesturePath** module provides APIs for creating gesture path information required for an accessibility application to inject gestures.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## Modules to Import

```TypeScript
import { GesturePath } from '@ohos.accessibility.GesturePath';
```

## constructor

```TypeScript
constructor(durationTime: number)
```

Defines a constructor used to create a **GesturePath** instance.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| durationTime | number | Yes | Total gesture duration, in milliseconds. |

**Example**

```TypeScript
import { GesturePath } from '@kit.AccessibilityKit';

let gesturePath = new GesturePath(20);

```

## durationTime

```TypeScript
durationTime: number
```

Total gesture duration, in milliseconds.

**Type:** number

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

