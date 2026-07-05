# offIndoorOrOutdoorIdentify

## offIndoorOrOutdoorIdentify

```TypeScript
function offIndoorOrOutdoorIdentify(configParams: DistanceMeasurementConfigParams,
    callback?: Callback<DoorPositionResponse>): void
```

Unsubscribe from the results of indoor and outdoor recognition.

**Since:** 23

**Required permissions:** 

 ohos.permission.ACCESS_SENSING_WITH_ULTRASOUND

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.DistanceMeasurement

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configParams | DistanceMeasurementConfigParams | Yes | Configuration parameters for identification inside and  outside the door |
| callback | Callback&lt;DoorPositionResponse> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. Function can not work correctly due to  limited device capabilities. |
| 35100001 | Service exception. |
| 35100003 | Unsubscription failed. |
| 35100004 | Parameter invalid. |

**Example**

```TypeScript
import { spatialAwareness } from '@kit.MultimodalAwarenessKit';
   console.info('call offIndoorOrOutdoorIdentify before');
   let configParams: spatialAwareness.DistanceMeasurementConfigParams = {
      deviceList: ["123456"],
      techType: 2,
      reportMode: 0,
      reportFrequency: 340
   };
   console.info('call offIndoorOrOutdoorIdentify start');
   try {
      spatialAwareness.offIndoorOrOutdoorIdentify(configParams, (data:spatialAwareness.DoorPositionResponse) => {
         console.info('result = ${data.position}');
      });
   } catch (err) {
      console.error('call offIndoorOrOutdoorIdentify failed, errCode = ' + err.code);
   }

```

