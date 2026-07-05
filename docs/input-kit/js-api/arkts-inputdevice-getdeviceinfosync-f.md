# getDeviceInfoSync

## getDeviceInfoSync

```TypeScript
function getDeviceInfoSync(deviceId: int): InputDeviceData
```

获取指定输入设备的信息。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | int | Yes | 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。 |

**Return value:**

| Type | Description |
| --- | --- |
| InputDeviceData | 返回输入设备信息，包括输入设备ID、名称、支持的输入能力、物理地址、版本信息及产品信息等。 |

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
          // Obtain the name of the device whose ID is 1.
          try {
            let deviceData: inputDevice.InputDeviceData = inputDevice.getDeviceInfoSync(1);
            console.info(`Succeeded in getting device info: ${JSON.stringify(deviceData)}.`);
          } catch (error) {
            console.error(`Failed to get device info, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

