# setInputDeviceEnabled

## setInputDeviceEnabled

```TypeScript
function setInputDeviceEnabled(deviceId: int, enabled: boolean): Promise<void>
```

设置输入设备的开关状态。以触摸屏为例：关闭时，点击触摸屏设备不响应；开启时，可正常操作触摸屏。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.INPUT_DEVICE_CONTROLLER

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | int | Yes | 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。 |
| enabled | boolean | Yes | 输入设备的开关状态，取值为true表示开启输入设备，取值为false表示关闭输入设备。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API |
| 202 | Permission verification failed.  A non-system application calls a system API. |
| 401 | Input parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 3900001 | The specified device does not exist. |

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
            // Set the device ID to 0
            inputDevice.setInputDeviceEnabled(0, true).then(() => {
              console.info(`Succeeded in setting input device enabled.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to set device enabled, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to set device enabled, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

