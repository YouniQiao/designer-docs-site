# SubscribeBarometerOptions

Defines the type of data to return for a subscription to data changes of the barometer sensor.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** BAROMETER

<!--Device-unnamed-export interface SubscribeBarometerOptions--><!--Device-unnamed-export interface SubscribeBarometerOptions-End-->

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

**Model restriction:** This API can be used only in the FA model.

<!--Device-SubscribeBarometerOptions-fail?: (data: string, code: number) => void--><!--Device-SubscribeBarometerOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## success

```TypeScript
success: (data: BarometerResponse) => void
```

Callback invoked when the barometer sensor data changes.

**Type:** (data: BarometerResponse) => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** on

**Model restriction:** This API can be used only in the FA model.

<!--Device-SubscribeBarometerOptions-success: (data: BarometerResponse) => void--><!--Device-SubscribeBarometerOptions-success: (data: BarometerResponse) => void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

