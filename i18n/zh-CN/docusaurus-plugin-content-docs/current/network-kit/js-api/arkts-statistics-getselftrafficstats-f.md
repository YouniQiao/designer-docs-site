# getSelfTrafficStats

## getSelfTrafficStats

```TypeScript
function getSelfTrafficStats(networkInfo: NetworkInfo): Promise<NetStatsInfo>
```

Get the traffic usage details of the specified network of the calling application in the specified time period and the specified networktype.

**起始版本：** 22

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkInfo | NetworkInfo | 是 | Information about the network to be queried. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NetStatsInfo> | The statistics of the calling application. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103017 | Failed to read the database. |
| 2103019 | The timestamp in param is invalid. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { connection, statistics } from '@kit.NetworkKit';

let networkInfo: statistics.NetworkInfo = {
    type: connection.NetBearType.BEARER_CELLULAR,
    startTime: Math.floor(Date.now() / 1000) - 86400 * 31,
    endTime: Math.floor(Date.now() / 1000),
    simId: 1,
}

statistics.getSelfTrafficStats(networkInfo).then((stats: statistics.NetStatsInfo) => {
    console.info('getSelfTrafficStats success : ' + JSON.stringify(stats));
}).catch((err: BusinessError) => {
    console.error('getSelfTrafficStats error. code: ' + `${err.code}` + ', message: ' + `${err.message}`);
});

```

