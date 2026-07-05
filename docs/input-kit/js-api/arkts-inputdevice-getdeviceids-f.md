# getDeviceIds

## getDeviceIds

```TypeScript
function getDeviceIds(callback: AsyncCallback<Array<number>>): void
```

获取所有输入设备的ID列表，使用callback异步回调。 > **说明**：

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.multimodalInput.inputDevice#getDeviceList

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;number>> | Yes | 回调函数。当获取成功，err为undefined，data为所有输入设备的ID列表；否则为错误对象。 |

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
          // Obtaining the Input Device ID List
          inputDevice.getDeviceIds((error: BusinessError, ids: Array<number>) => {
            if (error) {
              console.error(`Failed to get device id list, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
              return;
            }
            console.info(`Succeeded in getting device id list: ${JSON.stringify(ids)}.`);
          });
        })
    }
  }
}

```

## getDeviceIds

```TypeScript
function getDeviceIds(): Promise<Array<number>>
```

获取所有输入设备的ID列表，使用Promise异步回调。 > **说明**：

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.multimodalInput.inputDevice#getDeviceList

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number>> | Promise对象，返回所有输入设备的ID列表。ID是输入设备的唯一标识。 |

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
          // Obtaining the Input Device ID List
          inputDevice.getDeviceIds().then((ids: Array<number>) => {
            console.info(`Succeeded in getting device id list: ${JSON.stringify(ids)}.`);
          }).catch((error: BusinessError) => {
            console.error(`Failed to get device id list, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          })
        })
    }
  }
}

```

