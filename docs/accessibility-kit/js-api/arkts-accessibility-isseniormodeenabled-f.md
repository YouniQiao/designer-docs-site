# isSeniorModeEnabled

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## isSeniorModeEnabled

```TypeScript
function isSeniorModeEnabled(): Promise<boolean>
```

Checks whether the senior mode is enabled. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** indicates that the senior modeis enabled, and the value **false** indicates that the senior mode is disabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9300000](../errorcode-accessibility.md#9300000-accessibility-service-abnormal) | System abnormality. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  aboutToAppear(): void {
    accessibility.isSeniorModeEnabled().then((data: boolean) => {
      console.info(`success data:isSeniorModeEnabled : ${JSON.stringify(data)}`);
    }).catch((err: BusinessError) => {
      console.error(`failed to call isSeniorModeEnabled, Code is ${err.code}, message is ${err.message}`);
    });
  }

  build() {
    Column() {
    }
  }
}

```

