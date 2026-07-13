# SubscribeGyroscopeOptions

Defines the type of data to return for a subscription to data changes of the gyroscope sensor.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** GYROSCOPE

**Required permissions:** ohos.permission.GYROSCOPE

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

**Since:** 6

**Deprecated since:** 8

**Substitutes:** on

**Required permissions:** ohos.permission.GYROSCOPE

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## interval

```TypeScript
interval: string
```

Interval at which the callback is invoked to return the gyroscope sensor data.

The default value is **normal**. The options are as follows:

- **game**: called at an interval of 20 ms, which is applicable to gaming scenarios.
- **ui**: called at an interval of 60 ms, which is applicable to UI updating scenarios.
- **normal**: called at an interval of 200 ms, which is applicable to power-saving scenarios.

**Type:** string

**Since:** 6

**Deprecated since:** 8

**Substitutes:** Options.interval

**Required permissions:** ohos.permission.GYROSCOPE

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## success

```TypeScript
success: (data: GyroscopeResponse) => void
```

Callback invoked when the gyroscope sensor data changes.

**Type:** (data: GyroscopeResponse) => void

**Since:** 6

**Deprecated since:** 8

**Substitutes:** on

**Required permissions:** ohos.permission.GYROSCOPE

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

