# getAllSystemHotkeys

## Modules to Import

```TypeScript
import { inputConsumer } from '@kit.InputKit';
```

## getAllSystemHotkeys

```TypeScript
function getAllSystemHotkeys(): Promise<Array<HotkeyOptions>>
```

Obtains all system shortcut keys. This API uses a promise to return the result.

**Since:** 14

<!--Device-inputConsumer-function getAllSystemHotkeys(): Promise<Array<HotkeyOptions>>--><!--Device-inputConsumer-function getAllSystemHotkeys(): Promise<Array<HotkeyOptions>>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<HotkeyOptions>> | Promise used to return the list of all system shortcut keys. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { inputConsumer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Obtains all system shortcut keys.
          inputConsumer.getAllSystemHotkeys().then((data: Array<inputConsumer.HotkeyOptions>) => {
            console.info(`Succeeded in getting list of system hotkeys: ${JSON.stringify(data)}.`);
          }).catch((error: BusinessError) => {
            console.error(`Failed to get all system hotkeys, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          })
        })
    }
  }
}

```

