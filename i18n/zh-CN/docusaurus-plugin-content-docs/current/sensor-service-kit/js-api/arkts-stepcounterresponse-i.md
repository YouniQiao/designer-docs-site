# StepCounterResponse

Callback invoked when the step counter sensor data changes.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#PedometerResponse

**需要权限：** 

 ohos.permission.ACTIVITY_MOTION

**系统能力：** SystemCapability.Sensors.Sensor.Lite

## 导入模块

```TypeScript
import { OnBodyStateResponse,subscribeAccelerometerOptions,ProximityResponse,SubscribeGyroscopeOptions,SubscribeStepCounterOptions,SubscribeDeviceOrientationOptions,HeartRateResponse,LightResponse,AccelerometerResponse,SubscribeLightOptions,DeviceOrientationResponse,SubscribeHeartRateOptions,StepCounterResponse,SubscribeCompassOptions,GetOnBodyStateOptions,SubscribeBarometerOptions,BarometerResponse,SubscribeProximityOptions,CompassResponse,GyroscopeResponse,SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';
```

## steps

```TypeScript
steps: number
```

Number of counted steps after the sensor is restarted.

**类型：** number

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#PedometerResponse.steps

**需要权限：** 

 ohos.permission.ACTIVITY_MOTION

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

