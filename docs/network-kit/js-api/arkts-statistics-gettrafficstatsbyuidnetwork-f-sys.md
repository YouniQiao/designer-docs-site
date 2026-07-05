# getTrafficStatsByUidNetwork

## getTrafficStatsByUidNetwork

```TypeScript
function getTrafficStatsByUidNetwork(uid: int, networkInfo: NetworkInfo): Promise<NetStatsInfoSequence>
```

Get the traffic usage sequence of the specified network of the application in the specified time period.

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_NETWORK_STATS

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | UID with this parameter, get stats info of this UID. |
| networkInfo | NetworkInfo | Yes | Information about the network to be queried. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetStatsInfoSequence> | The statistics history of the sim card. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103017 | Failed to read the database. |

**Example**

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

