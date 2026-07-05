# supportKeys

## supportKeys

```TypeScript
function supportKeys(deviceId: int, keys: Array<KeyCode>, callback: AsyncCallback<Array<boolean>>): void
```

查询指定输入设备是否支持指定按键，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | int | Yes | 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。 |
| keys | Array&lt;KeyCode> | Yes | 需要查询的键值，最多支持5个按键查询。 |
| callback | AsyncCallback&lt;Array&lt;boolean>> | Yes | 回调函数。当查询成功，err为undefined，data为按键支持查询结果（数组元素与keys参数一一对应，true表示支  持，false表示不支持）；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputDevice } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Check whether the input device whose ID is 1 supports keys 17, 22, and 2055.
          try {
            // Querying Key Support
            inputDevice.supportKeys(1, [17, 22, 2055], (error: BusinessError, supportResult: Array<Boolean>) => {
              console.info(`Succeeded in querying support keys, supportResult: ${JSON.stringify(supportResult)}.`);
            });
          } catch (error) {
            console.error(`Failed to query support key, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## supportKeys

```TypeScript
function supportKeys(deviceId: int, keys: Array<KeyCode>): Promise<Array<boolean>>
```

查询指定输入设备是否支持指定按键，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | int | Yes | 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。 |
| keys | Array&lt;KeyCode> | Yes | 需要查询的键值，最多支持查询5个按键。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;boolean>> | Promise对象，返回查询结果。true表示支持，false表示不支持。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputDevice } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Check whether the input device whose ID is 1 supports keys 17, 22, and 2055.
          try {
            // Querying Key Support
            inputDevice.supportKeys(1, [17, 22, 2055]).then((supportResult: Array<Boolean>) => {
              console.info(`Succeeded in querying support keys, result: ${JSON.stringify(supportResult)}.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to query support Keys, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            });
          } catch (error) {
            console.error(`Failed to query support key, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

