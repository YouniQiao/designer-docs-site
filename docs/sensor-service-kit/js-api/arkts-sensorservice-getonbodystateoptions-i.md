---
last_update:
  date: 2026-07-04
---

# GetOnBodyStateOptions

Defines the callback invoked upon change in the wearing state of the device that houses the sensor.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** WEAR_DETECTION

**System capability:** SystemCapability.Sensors.Sensor.Lite

## Modules to Import

```TypeScript
import { OnBodyStateResponse, subscribeAccelerometerOptions, ProximityResponse, SubscribeGyroscopeOptions, SubscribeStepCounterOptions, SubscribeDeviceOrientationOptions, HeartRateResponse, LightResponse, AccelerometerResponse, SubscribeLightOptions, DeviceOrientationResponse, SubscribeHeartRateOptions, StepCounterResponse, SubscribeCompassOptions, GetOnBodyStateOptions, SubscribeBarometerOptions, BarometerResponse, SubscribeProximityOptions, CompassResponse, GyroscopeResponse, SubscribeOnBodyStateOptions } from '@system.sensor';
```

## complete

```TypeScript
complete?: () => void
```

Callback invoked when the API call is complete.

**Type:** () => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** once

**System capability:** SystemCapability.Sensors.Sensor.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Callback invoked when an API call fails.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** once

**System capability:** SystemCapability.Sensors.Sensor.Lite

## success

```TypeScript
success: (data: OnBodyStateResponse) => void
```

Callback upon a successful API call.

**Type:** (data: OnBodyStateResponse) => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** once

**System capability:** SystemCapability.Sensors.Sensor.Lite

