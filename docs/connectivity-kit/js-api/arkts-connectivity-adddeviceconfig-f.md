# addDeviceConfig

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## addDeviceConfig

```TypeScript
function addDeviceConfig(config: WifiDeviceConfig): Promise<number>
```

Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is added.

**Since:** 15

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | Yes | Indicates the device configuration for connection to the Wi-Fi network. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3.Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |
| [2501001](../errorcode-wifi.md#2501001-sta-disabled) | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  
  try {
    let config:wifiManager.WifiDeviceConfig = {
      ssid : "****",
      preSharedKey : "****",
      securityType : 0
    }
    wifiManager.addDeviceConfig(config).then(result => {
      console.info("result:" + JSON.stringify(result));
    }).catch((err:number) => {
      console.error("failed:" + JSON.stringify(err));
    });
  }catch(error){  
    console.error("failed:" + JSON.stringify(error));
  }

```


## addDeviceConfig

```TypeScript
function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<number>): void
```

Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is added.

**Since:** 15

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | Yes | Indicates the device configuration for connection to the Wi-Fi network. |
| callback | AsyncCallback&lt;number&gt; | Yes | Indicates call back of addDeviceConfig. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3.Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |
| [2501001](../errorcode-wifi.md#2501001-sta-disabled) | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  
    try {
      let config:wifiManager.WifiDeviceConfig = {
        ssid : "****",
        preSharedKey : "****",
        securityType : 0
      }
      wifiManager.addDeviceConfig(config,(error,result) => {
        console.info("result:" + JSON.stringify(result));
      });
    }catch(error){
      console.error("failed:" + JSON.stringify(error));
    }


```

