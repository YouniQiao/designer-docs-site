# getLinkedInfo

## getLinkedInfo

```TypeScript
function getLinkedInfo(): Promise<WifiLinkedInfo>
```

Obtains information about a Wi-Fi connection.

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.getLinkedInfo

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WifiLinkedInfo> | Returns Wi-Fi linked information. |

## getLinkedInfo

```TypeScript
function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void
```

Obtains information about a Wi-Fi connection.

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.getLinkedInfo

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;WifiLinkedInfo> | Yes |  |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

wifi.getLinkedInfo((err, data:wifi.WifiLinkedInfo) => {
    if (err) {
        console.error("get linked info error");
        return;
    }
    console.info("get wifi linked info: " + JSON.stringify(data));
});

wifi.getLinkedInfo().then(data => {
    console.info("get wifi linked info: " + JSON.stringify(data));
}).catch((error:number) => {
    console.info("get linked info error");
});

```

