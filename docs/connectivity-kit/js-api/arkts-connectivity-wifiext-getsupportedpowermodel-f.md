# getSupportedPowerModel

## Modules to Import

```TypeScript
import { wifiext } from '@kit.ConnectivityKit';
```

## getSupportedPowerModel

```TypeScript
function getSupportedPowerModel(): Promise<Array<PowerModel>>
```

Obtains the supported power model.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getSupportedPowerMode

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiext-function getSupportedPowerModel(): Promise<Array<PowerModel>>--><!--Device-wifiext-function getSupportedPowerModel(): Promise<Array<PowerModel>>-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<PowerModel>> | Returns the array of supported power model. |


## getSupportedPowerModel

```TypeScript
function getSupportedPowerModel(callback: AsyncCallback<Array<PowerModel>>): void
```

Obtains the supported power model.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getSupportedPowerMode

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiext-function getSupportedPowerModel(callback: AsyncCallback<Array<PowerModel>>): void--><!--Device-wifiext-function getSupportedPowerModel(callback: AsyncCallback<Array<PowerModel>>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<PowerModel>> | Yes | callback function, no return value. |

