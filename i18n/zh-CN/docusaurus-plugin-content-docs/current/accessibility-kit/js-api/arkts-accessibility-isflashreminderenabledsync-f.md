# isFlashReminderEnabledSync

## isFlashReminderEnabledSync

```TypeScript
function isFlashReminderEnabledSync(): boolean
```

Checks whether flash alerts mode is enabled with a synchronous method.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether flash alerts mode is enabled. Returns true if flash alerts mode is enabled;  returns false otherwise. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  aboutToAppear(): void {
    let status: boolean = accessibility.isFlashReminderEnabledSync();
    console.info(`status: ${JSON.stringify(status)}`);
  }

  build() {
    Column() {
    }
  }
}

```

