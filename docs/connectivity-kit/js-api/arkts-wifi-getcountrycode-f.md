# getCountryCode

## getCountryCode

```TypeScript
function getCountryCode(): string
```

Obtains the country code of this device.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.getCountryCode

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the country code of this device. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
  let code = wifi.getCountryCode();
  console.info("code:" + code);
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

