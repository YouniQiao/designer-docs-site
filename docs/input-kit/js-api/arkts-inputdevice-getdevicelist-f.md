# getDeviceList

## getDeviceList

```TypeScript
function getDeviceList(callback: AsyncCallback<Array<int>>): void
```

获取所有输入设备的ID列表，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;int>> | Yes | 回调函数。当获取成功，err为undefined，data为所有输入设备的ID列表（ID是输入设备的唯一标识）；否则为错误对象。 |

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
          try {
            // Obtaining the Input Device List
            inputDevice.getDeviceList((error: BusinessError, ids: Array<number>) => {
              if (error) {
                console.error(`Failed to get device id list, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in getting device id list: ${JSON.stringify(ids)}.`);
            });
          } catch (error) {
            console.error(`Failed to get device id list, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## getDeviceList

```TypeScript
function getDeviceList(): Promise<Array<int>>
```

获取所有输入设备的ID列表，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;int>> | Promise对象，返回所有输入设备的ID列表。ID是输入设备的唯一标识。 |

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
          try {
            // Obtaining the Input Device List
            inputDevice.getDeviceList().then((ids: Array<number>) => {
              console.info(`Succeeded in getting device id list: ${JSON.stringify(ids)}.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to get device id list, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            });
          } catch (error) {
            console.error(`Failed to get device id list, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

