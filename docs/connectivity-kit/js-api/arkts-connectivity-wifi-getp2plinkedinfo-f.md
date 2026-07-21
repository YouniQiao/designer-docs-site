# getP2pLinkedInfo

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="getp2plinkedinfo"></a>
## getP2pLinkedInfo

```TypeScript
function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>
```

Obtains information about a P2P connection.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getP2pLinkedInfo

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>--><!--Device-wifi-function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WifiP2pLinkedInfo&gt; | Returns the P2P connection information. |


<a id="getp2plinkedinfo-1"></a>
## getP2pLinkedInfo

```TypeScript
function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void
```

Obtains information about a P2P connection.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getP2pLinkedInfo

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void--><!--Device-wifi-function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;WifiP2pLinkedInfo&gt; | Yes |  |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

wifi.getP2pLinkedInfo((err, data:wifi.WifiP2pLinkedInfo) => {
   if (err) {
       console.error("get p2p linked info error");
       return;
   }
  console.info("get wifi p2p linked info: " + JSON.stringify(data));
});

wifi.getP2pLinkedInfo().then(data => {
  console.info("get wifi p2p linked info: " + JSON.stringify(data));
});

```

