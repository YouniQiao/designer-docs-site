# getTouchModeSync

## getTouchModeSync

```TypeScript
function getTouchModeSync(): string
```

Queries single- or double-touch mode.

**起始版本：** 20

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Touch mode.  - singleTouchMode: Single-touch mode.  - doubleTouchMode: Double-touch mode.  - none: Touch guide mode is disabled. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  aboutToAppear(): void {
    let touchMode: string = accessibility.getTouchModeSync();
    console.info(`current touch mode: ${JSON.stringify(touchMode)}`);
  }

  build() {
    Column() {
    }
  }
}

```

