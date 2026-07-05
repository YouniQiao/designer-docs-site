# off

## off('netStatsChange')

```TypeScript
function off(type: 'netStatsChange', callback?: Callback<NetStatsChangeInfo>): void
```

Unregister notifications of network traffic updates.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_NETWORK_STATS

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netStatsChange' | Yes | Indicates Event name. |
| callback | Callback&lt;NetStatsChangeInfo> | No | The callback of off. |

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
let callback: (data: IFace) => void = (data: IFace) => {
    console.info("on netStatsChange, iFace:" + data.iface + " uid: " + data.uid);
}
statistics.on('netStatsChange', callback);
// You can pass the callback of the on method to cancel listening for a certain type of callback. If you do not pass the callback, you will cancel listening for all callbacks.
statistics.off('netStatsChange', callback);
statistics.off('netStatsChange');

```

