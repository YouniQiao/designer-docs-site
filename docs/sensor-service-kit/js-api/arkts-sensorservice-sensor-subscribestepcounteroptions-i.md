# SubscribeStepCounterOptions

Defines the type of data to return for a subscription to data changes of the step counter sensor.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** PEDOMETER

**Required permissions:** ohos.permission.ACTIVITY_MOTION

<!--Device-unnamed-export interface SubscribeStepCounterOptions--><!--Device-unnamed-export interface SubscribeStepCounterOptions-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## Modules to Import

```TypeScript
import { OnBodyStateResponse, subscribeAccelerometerOptions, ProximityResponse, SubscribeGyroscopeOptions, SubscribeStepCounterOptions, SubscribeDeviceOrientationOptions, HeartRateResponse, LightResponse, AccelerometerResponse, SubscribeLightOptions, DeviceOrientationResponse, SubscribeHeartRateOptions, StepCounterResponse, SubscribeCompassOptions, GetOnBodyStateOptions, SubscribeBarometerOptions, BarometerResponse, SubscribeProximityOptions, CompassResponse, GyroscopeResponse, SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';
```

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Callback invoked when an API call fails.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** on

**Required permissions:** ohos.permission.ACTIVITY_MOTION

**Model restriction:** This API can be used only in the FA model.

<!--Device-SubscribeStepCounterOptions-fail?: (data: string, code: number) => void--><!--Device-SubscribeStepCounterOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## success

```TypeScript
success: (data: StepCounterResponse) => void
```

Defines a **StepCounterResponse** object.

**Type:** (data: StepCounterResponse) => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** on

**Required permissions:** ohos.permission.ACTIVITY_MOTION

**Model restriction:** This API can be used only in the FA model.

<!--Device-SubscribeStepCounterOptions-success: (data: StepCounterResponse) => void--><!--Device-SubscribeStepCounterOptions-success: (data: StepCounterResponse) => void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

