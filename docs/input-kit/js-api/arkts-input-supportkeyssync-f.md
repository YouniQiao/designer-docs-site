# supportKeysSync

## Modules to Import

```TypeScript
import { inputDevice } from '@ohos.multimodalInput.inputDevice';
```

## supportKeysSync

```TypeScript
function supportKeysSync(deviceId: number, keys: Array<KeyCode>): Array<boolean>
```

Checks whether the input device supports the specified keys.

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | number | Yes | Unique ID of the input device. If a physical device is repeatedly reinstalled orrestarted, its ID may change. |
| keys | Array&lt;KeyCode&gt; | Yes | Keys to be queried. A maximum of five keys can be specified. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;boolean&gt; | Result indicating whether the input device supports the keycode value. The value**true** indicates yes, and the value **false** indicates no. |

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
          // Check whether the input device whose ID is 1 supports keys 17, 22, and 2055.
          try {
            let supportResult: Array<Boolean> = inputDevice.supportKeysSync(1, [17, 22, 2055])
            console.info(`Succeeded in querying support keys, result: ${JSON.stringify(supportResult)}.`)
          } catch (error) {
            console.error(`Failed to query support key, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`)
          }
        })
    }
  }
}

```

