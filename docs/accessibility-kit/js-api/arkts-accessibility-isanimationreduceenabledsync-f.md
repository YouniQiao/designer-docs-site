# isAnimationReduceEnabledSync

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## isAnimationReduceEnabledSync

```TypeScript
function isAnimationReduceEnabledSync(): boolean
```

Checks whether animation reduction mode is enabled with a synchronous method.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether animation reduction mode is enabled. Returns **true** if animation reduction mode isenabled; returns **false** otherwise. |

**Example**

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

