# getTrafficStatsByUidNetwork (System API)

## Modules to Import

```TypeScript
import { statistics } from '@kit.NetworkKit';
```

## getTrafficStatsByUidNetwork

```TypeScript
function getTrafficStatsByUidNetwork(uid: number, networkInfo: NetworkInfo): Promise<NetStatsInfoSequence>
```

Get the traffic usage sequence of the specified network of the application in the specified time period.

**Since:** 12

**Required permissions:** ohos.permission.GET_NETWORK_STATS

<!--Device-statistics-function getTrafficStatsByUidNetwork(uid: int, networkInfo: NetworkInfo): Promise<NetStatsInfoSequence>--><!--Device-statistics-function getTrafficStatsByUidNetwork(uid: int, networkInfo: NetworkInfo): Promise<NetStatsInfoSequence>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | UID with this parameter, get stats info of this UID. |
| networkInfo | [NetworkInfo](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-cachedownload-networkinfo-i.md) | Yes | Information about the network to be queried. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<NetStatsInfoSequence> | The statistics history of the sim card. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2103017](../errorcode-net-statistics.md#2103017-failed-to-read-the-database) | Failed to read the database. |

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

