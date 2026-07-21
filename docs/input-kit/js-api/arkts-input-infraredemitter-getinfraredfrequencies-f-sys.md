# getInfraredFrequencies (System API)

## Modules to Import

```TypeScript
import { infraredEmitter } from '@kit.InputKit';
```

<a id="getinfraredfrequencies"></a>
## getInfraredFrequencies

```TypeScript
function getInfraredFrequencies(): Array<InfraredFrequency>
```

Queries the frequency range of IR signals supported by the device.

**Since:** 15

**Required permissions:** ohos.permission.MANAGE_INPUT_INFRARED_EMITTER

<!--Device-infraredEmitter-function getInfraredFrequencies(): Array<InfraredFrequency>--><!--Device-infraredEmitter-function getInfraredFrequencies(): Array<InfraredFrequency>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InfraredEmitter

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;InfraredFrequency&gt; | Frequency range of IR signals, including multiple groups of maximum and minimum frequencies.<br>Since API version 23, one group of maximum and minimum frequencies, both of which are **0** Hz, are returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application.<br>**Applicable version:** 12 - 14 |

**Example**

```TypeScript
import { infraredEmitter } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            let frequencies = infraredEmitter.getInfraredFrequencies();
            console.info(`Succeeded in getting infrared frequencies, frequencies: ${JSON.stringify(frequencies)}.`);
          } catch (error) {
            console.error(`Failed to get infrared frequencies, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

