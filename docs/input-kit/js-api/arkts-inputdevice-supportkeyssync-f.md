# supportKeysSync

## supportKeysSync

```TypeScript
function supportKeysSync(deviceId: int, keys: Array<KeyCode>): Array<boolean>
```

查询指定id的输入设备对指定键值的支持情况。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | int | Yes | 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。 |
| keys | Array&lt;KeyCode> | Yes | 需要查询的键值，最多支持查询5个按键。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;boolean> | 返回查询结果。true表示支持，false表示不支持。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

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

