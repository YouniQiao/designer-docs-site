# SubscribeHeartRateOptions

Defines the type of data to return for a subscription to data changes of the heart rate sensor.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** HEART_RATE

**Required permissions:** ohos.permission.READ_HEALTH_DATA

<!--Device-unnamed-export interface SubscribeHeartRateOptions--><!--Device-unnamed-export interface SubscribeHeartRateOptions-End-->

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

**Required permissions:** ohos.permission.READ_HEALTH_DATA

**Model restriction:** This API can be used only in the FA model.

<!--Device-SubscribeHeartRateOptions-fail?: (data: string, code: number) => void--><!--Device-SubscribeHeartRateOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## success

```TypeScript
success: (data: HeartRateResponse) => void
```

Callback invoked when the heart rate sensor data changes. This callback is invoked every five seconds.

**Type:** (data: HeartRateResponse) => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** on

**Required permissions:** ohos.permission.READ_HEALTH_DATA

**Model restriction:** This API can be used only in the FA model.

<!--Device-SubscribeHeartRateOptions-success: (data: HeartRateResponse) => void--><!--Device-SubscribeHeartRateOptions-success: (data: HeartRateResponse) => void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

