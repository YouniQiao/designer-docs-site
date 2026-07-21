# isAnimationReduceEnabled

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

<a id="isanimationreduceenabled"></a>
## isAnimationReduceEnabled

```TypeScript
function isAnimationReduceEnabled(): Promise<boolean>
```

Checks whether animation reduction mode is enabled. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-accessibility-function isAnimationReduceEnabled(): Promise<boolean>--><!--Device-accessibility-function isAnimationReduceEnabled(): Promise<boolean>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. Returns **true** if animation reduction mode is enabled; returns **false** otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  aboutToAppear(): void {
    accessibility.isAnimationReduceEnabled().then((data: boolean) => {
      console.info(`success data:isAnimationReduceEnabled : ${JSON.stringify(data)}`);
    }).catch((err: BusinessError) => {
      console.error(`failed to isAnimationReduceEnabled, Code is ${err.code}, message is ${err.message}`);
    });
  }

  build() {
    Column() {
    }
  }
}

```

