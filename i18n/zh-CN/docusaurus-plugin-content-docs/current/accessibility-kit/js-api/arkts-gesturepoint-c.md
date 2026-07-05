# GesturePoint

The **GesturePoint** module provides APIs for creating gesture touch point information required for an accessibility application to inject gestures.

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## 导入模块

```TypeScript
import { GesturePoint } from '@kit.AccessibilityKit';
```

## constructor

```TypeScript
constructor(positionX: double, positionY: double)
```

Defines a constructor used to create a **GesturePoint** instance.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| positionX | double | 是 | X coordinate of the touch point, in pixels (px). |
| positionY | double | 是 | Y coordinate of the touch point, in pixels (px). |

**示例：**

```TypeScript
import { GesturePoint } from '@kit.AccessibilityKit';

let gesturePoint = new GesturePoint(1, 2);

```

## positionY

```TypeScript
positionY: double
```

Y coordinate of the touch point, in pixels (px).

**类型：** double

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## positionX

```TypeScript
positionX: double
```

X coordinate of the touch point, in pixels (px).

**类型：** double

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

