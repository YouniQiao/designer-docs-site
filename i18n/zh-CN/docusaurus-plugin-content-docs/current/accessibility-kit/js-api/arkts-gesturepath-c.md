# GesturePath

The **GesturePath** module provides APIs for creating gesture path information required for an accessibility application to inject gestures.

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## 导入模块

```TypeScript
import { GesturePath } from '@kit.AccessibilityKit';
```

## constructor

```TypeScript
constructor(durationTime: long)
```

Defines a constructor used to create a **GesturePath** instance.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| durationTime | long | 是 | Total gesture duration, in milliseconds. |

**示例：**

```TypeScript
import { GesturePath } from '@kit.AccessibilityKit';

let gesturePath = new GesturePath(20);

```

## durationTime

```TypeScript
durationTime: long
```

Total gesture duration, in milliseconds.

**类型：** long

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## points

```TypeScript
points: Array<GesturePoint>
```

Gesture touch point.

**类型：** Array<GesturePoint>

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

