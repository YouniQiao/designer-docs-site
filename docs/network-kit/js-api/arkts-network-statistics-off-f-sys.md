# off (System API)

## Modules to Import

```TypeScript
import { statistics } from '@kit.NetworkKit';
```

## off('netStatsChange')

```TypeScript
function off(type: 'netStatsChange', callback?: Callback<NetStatsChangeInfo>): void
```

Unregister notifications of network traffic updates.

**Since:** 11

**Required permissions:** ohos.permission.GET_NETWORK_STATS

<!--Device-statistics-function off(type: 'netStatsChange', callback?: Callback<NetStatsChangeInfo>): void--><!--Device-statistics-function off(type: 'netStatsChange', callback?: Callback<NetStatsChangeInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netStatsChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<NetStatsChangeInfo> | No | The callback of off. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

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

