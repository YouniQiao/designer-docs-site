# StepCounterResponse

Callback invoked when the step counter sensor data changes.

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor#PedometerResponse

**Required permissions:** 

 ohos.permission.ACTIVITY_MOTION

**System capability:** SystemCapability.Sensors.Sensor.Lite

## Modules to Import

```TypeScript
import { OnBodyStateResponse,subscribeAccelerometerOptions,ProximityResponse,SubscribeGyroscopeOptions,SubscribeStepCounterOptions,SubscribeDeviceOrientationOptions,HeartRateResponse,LightResponse,AccelerometerResponse,SubscribeLightOptions,DeviceOrientationResponse,SubscribeHeartRateOptions,StepCounterResponse,SubscribeCompassOptions,GetOnBodyStateOptions,SubscribeBarometerOptions,BarometerResponse,SubscribeProximityOptions,CompassResponse,GyroscopeResponse,SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';
```

## steps

```TypeScript
steps: number
```

Number of counted steps after the sensor is restarted.

**Type:** number

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor#PedometerResponse.steps

**Required permissions:** 

 ohos.permission.ACTIVITY_MOTION

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

