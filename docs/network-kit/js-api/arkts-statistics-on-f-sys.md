# on

## on('netStatsChange')

```TypeScript
function on(type: 'netStatsChange', callback: Callback<NetStatsChangeInfo>): void
```

Register notifications of network traffic updates.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_NETWORK_STATS

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netStatsChange' | Yes | Indicates Event name. |
| callback | Callback&lt;NetStatsChangeInfo> | Yes | The callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { statistics } from '@kit.NetworkKit';

class IFace {
  iface: string = ""
  uid?: number = 0
}
statistics.on('netStatsChange', (data: IFace) => {
  console.info('on netStatsChange' + JSON.stringify(data));
});

```

