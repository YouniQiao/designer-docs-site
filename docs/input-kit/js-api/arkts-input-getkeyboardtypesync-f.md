# getKeyboardTypeSync

## Modules to Import

```TypeScript
import { inputDevice } from '@ohos.multimodalInput.inputDevice';
```

## getKeyboardTypeSync

```TypeScript
function getKeyboardTypeSync(deviceId: number): KeyboardType
```

Obtains the keyboard type of the input device.

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | number | Yes | Unique ID of the input device. If a physical device is repeatedly reinstalled orrestarted, its ID may change. |

**Return value:**

| Type | Description |
| --- | --- |
| KeyboardType | Keyboard type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputDevice } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Query the keyboard type of the input device whose ID is 1.
          try {
            let type: inputDevice.KeyboardType = inputDevice.getKeyboardTypeSync(1)
            console.info(`Succeeded in getting keyboard type: ${JSON.stringify(type)}.`)
          } catch (error) {
            console.error(`Failed to get keyboard type, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`)
          }
        })
    }
  }
}

```

