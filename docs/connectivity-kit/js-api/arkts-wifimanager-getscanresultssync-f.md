# getScanResultsSync

## getScanResultsSync

```TypeScript
function getScanResultsSync(): Array<WifiScanInfo>
```

Obtain the scanned sta list.

**Since:** 9

**Deprecated since:** 10

**Substitute:** wifiManager.getScanInfoList

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or * (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;WifiScanInfo> | Returns information about scanned Wi-Fi hotspot if any. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

