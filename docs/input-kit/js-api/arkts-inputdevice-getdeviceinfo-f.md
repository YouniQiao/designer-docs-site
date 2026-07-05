# getDeviceInfo

## getDeviceInfo

```TypeScript
function getDeviceInfo(deviceId: int, callback: AsyncCallback<InputDeviceData>): void
```

获取指定输入设备的信息，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | int | Yes | 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。 |
| callback | AsyncCallback&lt;InputDeviceData> | Yes | 回调函数。当获取成功，err为undefined，data为输入设备信息（包括输入设备ID、名称、支持的输入能力等）；否则为  错误对象。 |

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
          // Obtain the name of the device whose ID is 1.
          try {
            // Obtaining Input Device Information
            inputDevice.getDeviceInfo(1, (error: BusinessError, deviceData: inputDevice.InputDeviceData) => {
              if (error) {
                console.error(`Failed to get device info, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in getting device info: ${JSON.stringify(deviceData)}.`);
            });
          } catch (error) {
            console.error(`Failed to get device info, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## getDeviceInfo

```TypeScript
function getDeviceInfo(deviceId: int): Promise<InputDeviceData>
```

获取指定id的输入设备信息，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | int | Yes | 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;InputDeviceData> | Promise对象，返回输入设备信息，包括输入设备ID、名称、支持的输入能力、物理地址、版本信息及产品信息等。 |

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
          // Obtain the name of the device whose ID is 1.
          try {
            // Obtaining Input Device Information
            inputDevice.getDeviceInfo(1).then((deviceData: inputDevice.InputDeviceData) => {
              console.info(`Succeeded in getting device info: ${JSON.stringify(deviceData)}.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to get device info, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            });
          } catch (error) {
            console.error(`Failed to get device info, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

