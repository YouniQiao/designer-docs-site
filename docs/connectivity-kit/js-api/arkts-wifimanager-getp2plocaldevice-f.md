# getP2pLocalDevice

## getP2pLocalDevice

```TypeScript
function getP2pLocalDevice(): Promise<WifiP2pDevice>
```

Obtain the information about own device information. DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00", if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.P2P

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WifiP2pDevice> | Returns the information about own device info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |

## getP2pLocalDevice

```TypeScript
function getP2pLocalDevice(callback: AsyncCallback<WifiP2pDevice>): void
```

Obtain the information about own device information. DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00", if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;WifiP2pDevice> | Yes | Indicates callback of function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |
| 2801001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  // The local device information can be obtained only after a P2P group is created or the connection is successful.
  wifiManager.getP2pLocalDevice((err, data:wifiManager.WifiP2pDevice) => {
    if (err) {
        console.error("get P2P local device error");
        return;
    }
    console.info("get P2P local device: " + JSON.stringify(data));
  });

  wifiManager.getP2pLocalDevice().then(data => {
    console.info("get P2P local device: " + JSON.stringify(data));
  });

```

