# addHotspotBlockList (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## addHotspotBlockList

```TypeScript
function addHotspotBlockList(stationInfo: StationInfo): void
```

Add the station into the block list, the station can NOT access the hotspot.

**Since:** 11

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stationInfo | StationInfo | Yes | station which will be added in the block list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1.Incorrect parameter types.2.Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2601000](../errorcode-wifi.md#2601000-hotspot-module-error) | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let config:wifiManager.StationInfo = {
    name : "testSsid",
    macAddress : "11:22:33:44:55:66",
    ipAddress : "192.168.1.111"
  }
  // The device can be added to the block list only after the hotspot is enabled.
  wifiManager.addHotspotBlockList(config);
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

