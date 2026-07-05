# getScanInfos

## Modules to Import

```TypeScript
import { wifi } from '@ohos.wifi';
```

## getScanInfos

```TypeScript
function getScanInfos(): Promise<Array<WifiScanInfo>>
```

Obtains the hotspot information that scanned.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** getScanInfoList

**Required permissions:** ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;WifiScanInfo&gt;&gt; | Returns information about scanned Wi-Fi hotspot if any. |


## getScanInfos

```TypeScript
function getScanInfos(callback: AsyncCallback<Array<WifiScanInfo>>): void
```

Obtains the hotspot information that scanned.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** getScanInfoList

**Required permissions:** ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;WifiScanInfo&gt;&gt; | Yes |  |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

wifi.getScanInfos().then(result => {
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

```

