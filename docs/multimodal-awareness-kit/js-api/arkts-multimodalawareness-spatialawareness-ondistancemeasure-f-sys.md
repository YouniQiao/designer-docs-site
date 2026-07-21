# onDistanceMeasure (System API)

## Modules to Import

```TypeScript
import { spatialAwareness } from '@kit.MultimodalAwarenessKit';
```

<a id="ondistancemeasure"></a>
## onDistanceMeasure

```TypeScript
function onDistanceMeasure(configParams: DistanceMeasurementConfigParams,
    callback: Callback<DistanceMeasurementResponse>): void
```

Subscribe to distance measurement result data.

**Since:** 23

**Required permissions:** ohos.permission.ACCESS_SENSING_WITH_ULTRASOUND

**Model restriction:** This API can be used only in the stage model.

<!--Device-spatialAwareness-function onDistanceMeasure(configParams: DistanceMeasurementConfigParams,
    callback: Callback<DistanceMeasurementResponse>): void--><!--Device-spatialAwareness-function onDistanceMeasure(configParams: DistanceMeasurementConfigParams,
    callback: Callback<DistanceMeasurementResponse>): void-End-->

**System capability:** SystemCapability.MultimodalAwareness.DistanceMeasurement

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configParams | [DistanceMeasurementConfigParams](arkts-multimodalawareness-spatialawareness-distancemeasurementconfigparams-i-sys.md) | Yes | Configuration parameters of the distance measurement. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DistanceMeasurementResponse&gt; | Yes | Callback of the ranging result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work correctly due to<br> limited device capabilities. |
| [35100001](../../apis-multimodalawareness-kit/errorcode-spatialAwareness.md#35100001-service-exception) | Service exception. |
| [35100002](../../apis-multimodalawareness-kit/errorcode-spatialAwareness.md#35100002-subscription-failed) | Subscription failed. |
| [35100004](../../apis-multimodalawareness-kit/errorcode-spatialAwareness.md#35100004-invalid-parameter) | Parameter invalid. |

**Example**

```TypeScript
import { spatialAwareness } from '@kit.MultimodalAwarenessKit';
   console.info('call onDistanceMeasure before');
   let configParams: spatialAwareness.DistanceMeasurementConfigParams = {
      deviceList: ["123456"],
      techType: 2,
      reportMode: 0,
      reportFrequency: 340
   };
   console.info('call onDistanceMeasure start');
   try {
      spatialAwareness.onDistanceMeasure(configParams, (data:spatialAwareness.DistanceMeasurementResponse) => {
         console.info('result = ${data.distance}');
      });
   } catch (err) {
      console.error('call onDistanceMeasure failed, errCode = ' + err.code);
   }

```

