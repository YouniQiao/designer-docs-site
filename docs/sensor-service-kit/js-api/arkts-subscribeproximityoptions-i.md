# SubscribeProximityOptions

Defines the type of data to return for a subscription to data changes of the proximity sensor.

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor.SensorId#PROXIMITY

**System capability:** SystemCapability.Sensors.Sensor.Lite

## Modules to Import

```TypeScript
import { OnBodyStateResponse,subscribeAccelerometerOptions,ProximityResponse,SubscribeGyroscopeOptions,SubscribeStepCounterOptions,SubscribeDeviceOrientationOptions,HeartRateResponse,LightResponse,AccelerometerResponse,SubscribeLightOptions,DeviceOrientationResponse,SubscribeHeartRateOptions,StepCounterResponse,SubscribeCompassOptions,GetOnBodyStateOptions,SubscribeBarometerOptions,BarometerResponse,SubscribeProximityOptions,CompassResponse,GyroscopeResponse,SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';
```

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Callback invoked when an API call fails.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor#on

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## success

```TypeScript
success: (data: ProximityResponse) => void
```

Defines a **ProximityResponse** object.

**Type:** (data: ProximityResponse) => void

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor#on

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

