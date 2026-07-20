# SubscribeProximityOptions

Defines the type of data to return for a subscription to data changes of the proximity sensor.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** PROXIMITY

<!--Device-unnamed-export interface SubscribeProximityOptions--><!--Device-unnamed-export interface SubscribeProximityOptions-End-->

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

<!--Device-SubscribeProximityOptions-fail?: (data: string, code: number) => void--><!--Device-SubscribeProximityOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## success

```TypeScript
success: (data: ProximityResponse) => void
```

Defines a **ProximityResponse** object.

**Type:** (data: ProximityResponse) => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** on

**Model restriction:** This API can be used only in the FA model.

<!--Device-SubscribeProximityOptions-success: (data: ProximityResponse) => void--><!--Device-SubscribeProximityOptions-success: (data: ProximityResponse) => void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

