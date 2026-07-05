# onDistanceMeasure

## onDistanceMeasure

```TypeScript
function onDistanceMeasure(configParams: DistanceMeasurementConfigParams,
    callback: Callback<DistanceMeasurementResponse>): void
```

Subscribe to distance measurement result data.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_SENSING_WITH_ULTRASOUND

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.DistanceMeasurement

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| configParams | DistanceMeasurementConfigParams | 是 | Configuration parameters of the distance measurement. |
| callback | Callback&lt;DistanceMeasurementResponse> | 是 | Callback of the ranging result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. Function can not work correctly due to  limited device capabilities. |
| 35100001 | Service exception. |
| 35100002 | Subscription failed. |
| 35100004 | Parameter invalid. |

**示例：**

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

