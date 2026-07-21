# GesturePoint

The **GesturePoint** module provides APIs for creating gesture touch point information required for an accessibility application to inject gestures.

**Since:** 9

<!--Device-unnamed-export declare class GesturePoint--><!--Device-unnamed-export declare class GesturePoint-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## Modules to Import

```TypeScript
import { GesturePoint } from '@kit.AccessibilityKit';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(positionX: number, positionY: number)
```

Defines a constructor used to create a **GesturePoint** instance.

**Since:** 9

**Deprecated since:** 12

<!--Device-GesturePoint-constructor(positionX: double, positionY: double)--><!--Device-GesturePoint-constructor(positionX: double, positionY: double)-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| positionX | number | Yes | X coordinate of the touch point, in pixels (px). |
| positionY | number | Yes | Y coordinate of the touch point, in pixels (px). |

**Example**

```TypeScript
import { GesturePoint } from '@kit.AccessibilityKit';

let gesturePoint = new GesturePoint(1, 2);

```

## positionX

```TypeScript
positionX: number
```

X coordinate of the touch point, in pixels (px).

**Type:** number

**Since:** 9

<!--Device-GesturePoint-positionX: double--><!--Device-GesturePoint-positionX: double-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## positionY

```TypeScript
positionY: number
```

Y coordinate of the touch point, in pixels (px).

**Type:** number

**Since:** 9

<!--Device-GesturePoint-positionY: double--><!--Device-GesturePoint-positionY: double-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

