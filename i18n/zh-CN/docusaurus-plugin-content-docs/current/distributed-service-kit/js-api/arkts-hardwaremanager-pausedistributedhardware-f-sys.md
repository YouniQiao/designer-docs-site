# pauseDistributedHardware

## pauseDistributedHardware

```TypeScript
function pauseDistributedHardware(description: HardwareDescriptor): Promise<void>
```

Pauses the distributed hardware service on the controlled device. This API uses a promise to return the result.

**起始版本：** 11

**需要权限：** 

 ohos.permission.ACCESS_DISTRIBUTED_HARDWARE

**系统能力：** SystemCapability.DistributedHardware.DistributedHardwareFWK

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| description | HardwareDescriptor | 是 | Hardware information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Input parameter error. |
| 24200101 | The specified distributed hardware is not started. |
| 24200102 | The specified source device is not connected. |

**示例：**

```TypeScript
import { hardwareManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let description: hardwareManager.HardwareDescriptor = {
    type: 1,
    srcNetworkId: '1111'
  };
  hardwareManager.pauseDistributedHardware(description).then(() => {
    console.info('pause distributed hardware successfully');
  }).catch((error: BusinessError) => {
    console.error('pause distributed hardware failed, cause:' + error);
  })
  console.info('pause distributed hardware successfully');
} catch (error) {
  console.error('pause distributed hardware failed:' + error);
}

```

