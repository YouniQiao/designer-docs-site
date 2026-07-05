# OnBodyStateResponse

Specifies whether the device that houses the sensor is worn.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#WearDetectionResponse

**系统能力：** SystemCapability.Sensors.Sensor.Lite

## 导入模块

```TypeScript
import { OnBodyStateResponse,subscribeAccelerometerOptions,ProximityResponse,SubscribeGyroscopeOptions,SubscribeStepCounterOptions,SubscribeDeviceOrientationOptions,HeartRateResponse,LightResponse,AccelerometerResponse,SubscribeLightOptions,DeviceOrientationResponse,SubscribeHeartRateOptions,StepCounterResponse,SubscribeCompassOptions,GetOnBodyStateOptions,SubscribeBarometerOptions,BarometerResponse,SubscribeProximityOptions,CompassResponse,GyroscopeResponse,SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';
```

## value

```TypeScript
value: boolean
```

Boolean value indicating whether the device is worn. The value **true** indicates that the device is worn, and the value **false** indicates the opposite.

**类型：** boolean

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#WearDetectionResponse.value

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

