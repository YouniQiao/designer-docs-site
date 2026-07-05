# getScanResults

## getScanResults

```TypeScript
function getScanResults(): Promise<Array<WifiScanInfo>>
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
| Promise&lt;Array&lt;WifiScanInfo>> | Returns information about scanned Wi-Fi hotspot if any. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

## getScanResults

```TypeScript
function getScanResults(callback: AsyncCallback<Array<WifiScanInfo>>): void
```

Obtain the scanned sta list.

**Since:** 9

**Deprecated since:** 10

**Substitute:** wifiManager.getScanInfoList

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or * (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;WifiScanInfo>> | Yes | Returns information about scanned Wi-Fi hotspot if any. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  
  wifiManager.getScanResults((err, result) => {
      if (err) {
          console.error("get scan info error");
          return;
      }
  
      let len = result.length;
      console.info("wifi received scan info: " + len);
      for (let i = 0; i < len; ++i) {
          console.info("ssid: " + result[i].ssid);
          console.info("bssid: " + result[i].bssid);
          console.info("capabilities: " + result[i].capabilities);
          console.info("securityType: " + result[i].securityType);
          console.info("rssi: " + result[i].rssi);
          console.info("band: " + result[i].band);
          console.info("frequency: " + result[i].frequency);
          console.info("channelWidth: " + result[i].channelWidth);
          console.info("timestamp: " + result[i].timestamp);
      }
  });
  
  wifiManager.getScanResults().then(result => {
      let len = result.length;
      console.info("wifi received scan info: " + len);
      for (let i = 0; i < len; ++i) {
          console.info("ssid: " + result[i].ssid);
          console.info("bssid: " + result[i].bssid);
          console.info("capabilities: " + result[i].capabilities);
          console.info("securityType: " + result[i].securityType);
          console.info("rssi: " + result[i].rssi);
          console.info("band: " + result[i].band);
          console.info("frequency: " + result[i].frequency);
          console.info("channelWidth: " + result[i].channelWidth);
          console.info("timestamp: " + result[i].timestamp);
      }
  }).catch((err:number) => {
      console.error("failed:" + JSON.stringify(err));
  });

```

