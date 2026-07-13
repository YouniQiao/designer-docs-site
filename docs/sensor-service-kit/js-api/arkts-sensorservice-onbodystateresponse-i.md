# OnBodyStateResponse

Specifies whether the device that houses the sensor is worn.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** WearDetectionResponse

**System capability:** SystemCapability.Sensors.Sensor.Lite

## Modules to Import

```TypeScript
import { OnBodyStateResponse, subscribeAccelerometerOptions, ProximityResponse, SubscribeGyroscopeOptions, SubscribeStepCounterOptions, SubscribeDeviceOrientationOptions, HeartRateResponse, LightResponse, AccelerometerResponse, SubscribeLightOptions, DeviceOrientationResponse, SubscribeHeartRateOptions, StepCounterResponse, SubscribeCompassOptions, GetOnBodyStateOptions, SubscribeBarometerOptions, BarometerResponse, SubscribeProximityOptions, CompassResponse, GyroscopeResponse, SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';
```

## value

```TypeScript
value: boolean
```

Boolean value indicating whether the device is worn. The value **true** indicates that the device is worn, and the
value **false** indicates the opposite.

**Type:** boolean

**Since:** 3

**Deprecated since:** 8

**Substitutes:** WearDetectionResponse.value

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

