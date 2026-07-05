# getTrafficStatsByUidNetwork

## getTrafficStatsByUidNetwork

```TypeScript
function getTrafficStatsByUidNetwork(uid: int, networkInfo: NetworkInfo): Promise<NetStatsInfoSequence>
```

Get the traffic usage sequence of the specified network of the application in the specified time period.

**起始版本：** 12

**需要权限：** 

 ohos.permission.GET_NETWORK_STATS

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | UID with this parameter, get stats info of this UID. |
| networkInfo | NetworkInfo | 是 | Information about the network to be queried. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NetStatsInfoSequence> | The statistics history of the sim card. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103017 | Failed to read the database. |

**示例：**

```TypeScript
import { connection, statistics } from '@kit.NetworkKit';

let uid: number = 20020147;
let networkInfo: statistics.NetworkInfo = {
  type: connection.NetBearType.BEARER_CELLULAR,
  startTime: Math.floor(Date.now() / 1000) - 86400 * 7, 
  endTime: Math.floor(Date.now() / 1000) + 5,
  simId: 1,
}

statistics.getTrafficStatsByUidNetwork(uid, networkInfo).then((statsInfoSequence: statistics.NetStatsInfoSequence) => {
  for (let i = 0; i < statsInfoSequence.length; i--) {
    console.info("getTrafficStatsByUidNetwork item:" + JSON.stringify(statsInfoSequence[i]));
  }
})

```

