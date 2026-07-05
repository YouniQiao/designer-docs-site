# isAnimationReduceEnabledSync

## isAnimationReduceEnabledSync

```TypeScript
function isAnimationReduceEnabledSync(): boolean
```

Checks whether animation reduction mode is enabled with a synchronous method.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether animation reduction mode is enabled. Returns true if animation reduction mode is  enabled; returns false otherwise. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  aboutToAppear(): void {
    let status: boolean = accessibility.isAnimationReduceEnabledSync();
    console.info(`status: ${JSON.stringify(status)}`);
  }

  build() {
    Column() {
    }
  }
}

```

