# getPointerSpeedSync (System API)

## Modules to Import

```TypeScript
import { pointer } from '@kit.InputKit';
```

<a id="getpointerspeedsync"></a>
## getPointerSpeedSync

```TypeScript
function getPointerSpeedSync(): number
```

Obtains the mouse pointer speed. This API returns the result synchronously.

**Since:** 10

<!--Device-pointer-function getPointerSpeedSync(): int--><!--Device-pointer-function getPointerSpeedSync(): int-End-->

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | Mouse pointer speed. The value ranges from 1 to 20. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | SystemAPI permission error. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { pointer } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            let speed = pointer.getPointerSpeedSync();
            console.info(`Succeeded in getting pointer speed, speed: ${JSON.stringify(speed)}.`);
          } catch (error) {
            console.error(`Failed to get pointer speed, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

