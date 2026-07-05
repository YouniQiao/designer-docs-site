# removeDevice

## removeDevice

```TypeScript
function removeDevice(id: int): void
```

Remove a Wi-Fi DeviceConfig with networkId. After a Wi-Fi DeviceConfig is removed, its configuration will be deleted from the list of Wi-Fi configurations. If the Wi-Fi DeviceConfig is being connected, the connection will be interrupted. The application can only delete Wi-Fi DeviceConfig it has created.

**Since:** 15

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or * ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | int | Yes | Indicate the ID of the Wi-Fi DeviceConfig. The value of networkId cannot be less than 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  
    try {
      let id = 0;
      wifiManager.removeDevice(id);  
    }catch(error){
      console.error("failed:" + JSON.stringify(error));
    }

```

