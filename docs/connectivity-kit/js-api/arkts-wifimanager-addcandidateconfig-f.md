# addCandidateConfig

## addCandidateConfig

```TypeScript
function addCandidateConfig(config: WifiDeviceConfig): Promise<int>
```

Add a specified candidate hotspot configuration and returns the networkId. This method adds one configuration at a time. After this configuration is added, your device will determine whether to connect to the hotspot. The app must be in the foreground.

**Since:** 12

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | Yes | candidate config. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  
  try {
    let config:wifiManager.WifiDeviceConfig = {
      ssid : "****",
      preSharedKey : "****",
      securityType : 0
    }
    wifiManager.addCandidateConfig(config).then(result => {
      console.info("result:" + JSON.stringify(result));
    }).catch((err:number) => {
      console.error("failed:" + JSON.stringify(err));
    });
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

## addCandidateConfig

```TypeScript
function addCandidateConfig(config: WifiDeviceConfig, callback: AsyncCallback<int>): void
```

Add a specified candidate hotspot configuration and returns the networkId. This method adds one configuration at a time. After this configuration is added, your device will determine whether to connect to the hotspot. The app must be in the foreground.

**Since:** 12

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | Yes | candidate config. |
| callback | AsyncCallback&lt;int> | Yes | Indicates call back of addCandidateConfig. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let config:wifiManager.WifiDeviceConfig = {
      ssid : "****",
      preSharedKey : "****",
      securityType : 0
    }
    wifiManager.addCandidateConfig(config,(error,result) => {
      console.info("result:" + JSON.stringify(result));
    });  
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

