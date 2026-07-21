# deletePersistentGroup (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="deletepersistentgroup"></a>
## deletePersistentGroup

```TypeScript
function deletePersistentGroup(netId: number): void
```

Delete the persistent P2P group with the specified network ID.

**Since:** 9

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

<!--Device-wifiManager-function deletePersistentGroup(netId: int): void--><!--Device-wifiManager-function deletePersistentGroup(netId: int): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netId | number | Yes | Indicates the network ID of the group to be deleted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2801000](../errorcode-wifi.md#2801000-p2p-module-error) | Operation failed. |
| [2801001](../errorcode-wifi.md#2801001-p2p-module-error) | Wi-Fi STA disabled. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let netId = 0;
  wifiManager.deletePersistentGroup(netId);  
}catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

