# setCalibrationTraffic

## setCalibrationTraffic

```TypeScript
function setCalibrationTraffic(simId: int, remainTraffic: long, totalTraffic?: long): Promise<void>
```

Set calibration traffic data.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.GET_NETWORK_STATS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| simId | int | 是 | The ID of the specified sim card. |
| remainTraffic | long | 是 | The remaining traffic data. |
| totalTraffic | long | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 801 | Capability not supported. |
| 2100001 | Invalid parameter value, such as simId error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error, such as nullptr. |

**示例：**

```TypeScript
import { connection, statistics } from '@kit.NetworkKit';

let simId:number = 1;
let remainData:number = 600*1024*1024;   // 当前剩余流量为600MB。
let totalData:number = 1024*1024*1024;   // 套餐总流量为1GB。
statistics.setCalibrationTraffic(simId, remainData, totalData).then(() => {
  console.info(`setCalibrationTraffic succ`);
}).catch((error: BusinessError) => {
  console.info(`setCalibrationTraffic error. code:${error.code}, message:${error.message}`);
});

```

