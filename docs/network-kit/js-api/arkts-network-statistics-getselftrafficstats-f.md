# getSelfTrafficStats

## Modules to Import

```TypeScript
import { statistics } from '@kit.NetworkKit';
```

## getSelfTrafficStats

```TypeScript
function getSelfTrafficStats(networkInfo: NetworkInfo): Promise<NetStatsInfo>
```

Get the traffic usage details of the specified network of the calling application in the specified time period and the specified networktype.

**Since:** 22

<!--Device-statistics-function getSelfTrafficStats(networkInfo: NetworkInfo): Promise<NetStatsInfo>--><!--Device-statistics-function getSelfTrafficStats(networkInfo: NetworkInfo): Promise<NetStatsInfo>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkInfo | [NetworkInfo](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-cachedownload-networkinfo-i.md) | Yes | Information about the network to be queried. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<NetStatsInfo> | The statistics of the calling application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2103017](../errorcode-net-statistics.md#2103017-failed-to-read-the-database) | Failed to read the database. |
| [2103019](../errorcode-net-statistics.md#2103019-invalid-timestamp) | The timestamp in param is invalid. |

**Example**

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

