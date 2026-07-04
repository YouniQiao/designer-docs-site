# isFlashReminderEnabledSync

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## isFlashReminderEnabledSync

```TypeScript
function isFlashReminderEnabledSync(): boolean
```

Checks whether flash alerts mode is enabled with a synchronous method.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether flash alerts mode is enabled. Returns **true** if flash alerts mode is enabled;returns **false** otherwise. |

**Example**

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

