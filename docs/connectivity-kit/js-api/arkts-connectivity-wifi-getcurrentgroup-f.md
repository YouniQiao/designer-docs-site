# getCurrentGroup

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="getcurrentgroup"></a>
## getCurrentGroup

```TypeScript
function getCurrentGroup(): Promise<WifiP2pGroupInfo>
```

Obtains information about the current group.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getCurrentGroup

**Required permissions:** ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

<!--Device-wifi-function getCurrentGroup(): Promise<WifiP2pGroupInfo>--><!--Device-wifi-function getCurrentGroup(): Promise<WifiP2pGroupInfo>-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WifiP2pGroupInfo&gt; | Returns the current group information. |


<a id="getcurrentgroup-1"></a>
## getCurrentGroup

```TypeScript
function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void
```

Obtains information about the current group.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getCurrentGroup

**Required permissions:** ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

<!--Device-wifi-function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void--><!--Device-wifi-function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;WifiP2pGroupInfo&gt; | Yes |  |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

wifi.getCurrentGroup((err, data:wifi.WifiP2pGroupInfo) => {
   if (err) {
       console.error("get current P2P group error");
       return;
   }
  console.info("get current P2P group: " + JSON.stringify(data));
});

wifi.getCurrentGroup().then(data => {
  console.info("get current P2P group: " + JSON.stringify(data));
});

```

