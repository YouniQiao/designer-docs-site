# activateCooperateWithOptions

## activateCooperateWithOptions

```TypeScript
function activateCooperateWithOptions(targetNetworkId: string, inputDeviceId: int,
    cooperateOptions?: CooperateOptions
  ): Promise<void>
```

启动键鼠穿越，使用选项开始屏幕跳转。

**Since:** 20

**Required permissions:** 

 ohos.permission.COOPERATE_MANAGER

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetNetworkId | string | Yes | 键鼠穿越目标设备描述符。 |
| inputDeviceId | int | Yes | 发起穿越操作的输入设备ID。 |
| cooperateOptions | CooperateOptions | No | 穿越可选控制参数，用于控制穿出点具体位置等。不设置此参数时，本接口能力  与[cooperate.activateCooperate]cooperate.activateCooperate(targetNetworkId: string, inputDeviceId: int)  相同。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 20900001 | Service exception. Possible causes:  1. A system error, such as null pointer, container-related exception, or IPC exception.  2. N-API invocation exception or invalid N-API status. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let targetNetworkId = "networkId";
let inputDeviceId = 0;
try {
  cooperate.activateCooperateWithOptions(targetNetworkId, inputDeviceId).then(() => {
    console.info(`activateCooperateWithOptions success.`);
  }, (error: BusinessError) => {
    console.error(`activateCooperateWithOptions, error: ${JSON.stringify(error, [`code`, `message`])}`);
  });
} catch (error) {
  console.error(`activateCooperateWithOptions, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```

