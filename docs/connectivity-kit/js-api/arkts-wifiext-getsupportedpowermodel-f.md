# getSupportedPowerModel

## getSupportedPowerModel

```TypeScript
function getSupportedPowerModel(): Promise<Array<PowerModel>>
```

Obtains the supported power model.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.wifiManagerExt/wifiManagerExt.getSupportedPowerMode

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PowerModel>> | Returns the array of supported power model. |

## getSupportedPowerModel

```TypeScript
function getSupportedPowerModel(callback: AsyncCallback<Array<PowerModel>>): void
```

Obtains the supported power model.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.wifiManagerExt/wifiManagerExt.getSupportedPowerMode

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;PowerModel>> | Yes | callback function, no return value. |

