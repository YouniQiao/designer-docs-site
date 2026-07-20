# isAudioMonoEnabled

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

## isAudioMonoEnabled

```TypeScript
function isAudioMonoEnabled(): Promise<boolean>
```

Checks whether mono audio mode is enabled. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-accessibility-function isAudioMonoEnabled(): Promise<boolean>--><!--Device-accessibility-function isAudioMonoEnabled(): Promise<boolean>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. Returns **true** if mono audio mode is enabled;returns **false** otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  aboutToAppear(): void {
    accessibility.isAudioMonoEnabled().then((data: boolean) => {
      console.info(`success data:isAudioMonoEnabled : ${JSON.stringify(data)}`);
    }).catch((err: BusinessError) => {
      console.error(`failed to isAudioMonoEnabled, Code is ${err.code}, message is ${err.message}`);
    });
  }

  build() {
    Column() {
    }
  }
}

```

