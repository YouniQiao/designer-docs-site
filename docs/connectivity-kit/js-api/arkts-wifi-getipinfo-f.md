# getIpInfo

## getIpInfo

```TypeScript
function getIpInfo(): IpInfo
```

Obtains the IP information of a Wi-Fi connection. <p>The IP information includes the host IP address, gateway address, and DNS information.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.getIpInfo

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| IpInfo | Returns the IP information of the Wi-Fi connection. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
  let info = wifi.getIpInfo();
  console.info("info:" + JSON.stringify(info));
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

