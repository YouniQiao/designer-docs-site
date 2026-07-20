# getPowerMode

## Modules to Import

```TypeScript
import { wifiManagerExt } from '@kit.ConnectivityKit';
```

## getPowerMode

```TypeScript
function getPowerMode(): Promise<PowerMode>
```

Obtains the current Wi-Fi power mode.

**Since:** 9

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManagerExt-function getPowerMode(): Promise<PowerMode>--><!--Device-wifiManagerExt-function getPowerMode(): Promise<PowerMode>-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PowerMode> | @throws {BusinessError} 201 - Permission denied. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2701000](../errorcode-wifi.md#2701000-ap-extension-module-error) | Operation failed. |

**Example**

```TypeScript
  import { wifiManagerExt } from '@kit.ConnectivityKit';

  try {
      let model = wifiManagerExt.getPowerMode();
      console.info("model info:" + model);
  }catch(error){
      console.error("failed: " + JSON.stringify(error));
  }

```


## getPowerMode

```TypeScript
function getPowerMode(callback: AsyncCallback<PowerMode>): void
```

Obtains the current Wi-Fi power mode.

**Since:** 9

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManagerExt-function getPowerMode(callback: AsyncCallback<PowerMode>): void--><!--Device-wifiManagerExt-function getPowerMode(callback: AsyncCallback<PowerMode>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<PowerMode> | Yes | the callback of model |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2701000](../errorcode-wifi.md#2701000-ap-extension-module-error) | Operation failed. |

**Example**

```TypeScript
  import { wifiManagerExt } from '@kit.ConnectivityKit';

  wifiManagerExt.getPowerMode((err, data:wifiManagerExt.PowerMode) => {
      if (err) {
          console.error("Failed to get linked information");
          return;
      }
      console.info("get power mode info: " + JSON.stringify(data));
  });

  wifiManagerExt.getPowerMode().then(data => {
      console.info("get power mode info: " + JSON.stringify(data));
  }).catch((error:number) => {
      console.error("get power mode error");
  });

```

