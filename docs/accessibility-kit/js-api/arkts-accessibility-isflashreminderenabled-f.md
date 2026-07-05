# isFlashReminderEnabled

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## isFlashReminderEnabled

```TypeScript
function isFlashReminderEnabled(): Promise<boolean>
```

Checks whether flash alerts mode is enabled. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. Returns **true** if flash alerts mode is enabled;returns **false** otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  aboutToAppear(): void {
    accessibility.isFlashReminderEnabled().then((data: boolean) => {
      console.info(`success data:isFlashReminderEnabled : ${JSON.stringify(data)}`);
    }).catch((err: BusinessError) => {
      console.error(`failed to isFlashReminderEnabled, Code is ${err.code}, message is ${err.message}`);
    });
  }

  build() {
    Column() {
    }
  }
}

```

