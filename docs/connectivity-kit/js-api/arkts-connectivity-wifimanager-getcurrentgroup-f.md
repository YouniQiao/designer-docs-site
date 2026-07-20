# getCurrentGroup

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## getCurrentGroup

```TypeScript
function getCurrentGroup(): Promise<WifiP2pGroupInfo>
```

Obtain information about the current p2p group.

**Since:** 10

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManager-function getCurrentGroup(): Promise<WifiP2pGroupInfo>--><!--Device-wifiManager-function getCurrentGroup(): Promise<WifiP2pGroupInfo>-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<WifiP2pGroupInfo> | Returns p2p group information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2801000](../errorcode-wifi.md#2801000-p2p-module-error) | Operation failed. |


## getCurrentGroup

```TypeScript
function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void
```

Obtain information about the current p2p group.

**Since:** 10

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManager-function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void--><!--Device-wifiManager-function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<WifiP2pGroupInfo> | Yes | Indicates callback of function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2801000](../errorcode-wifi.md#2801000-p2p-module-error) | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  // The current group information can be obtained only after the P2P group is created or the connection is successful.
  wifiManager.getCurrentGroup((err, data:wifiManager.WifiP2pGroupInfo) => {
    if (err) {
        console.error("get current P2P group error");
        return;
    }
    console.info("get current P2P group: " + JSON.stringify(data));
  });

  wifiManager.getCurrentGroup().then(data => {
    console.info("get current P2P group: " + JSON.stringify(data));
  });

```

