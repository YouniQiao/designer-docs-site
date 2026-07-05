# DeviceOrientationResponse

Defines a **DeviceOrientationResponse** object.

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#OrientationResponse

**系统能力：** SystemCapability.Sensors.Sensor.Lite

## 导入模块

```TypeScript
import { OnBodyStateResponse,subscribeAccelerometerOptions,ProximityResponse,SubscribeGyroscopeOptions,SubscribeStepCounterOptions,SubscribeDeviceOrientationOptions,HeartRateResponse,LightResponse,AccelerometerResponse,SubscribeLightOptions,DeviceOrientationResponse,SubscribeHeartRateOptions,StepCounterResponse,SubscribeCompassOptions,GetOnBodyStateOptions,SubscribeBarometerOptions,BarometerResponse,SubscribeProximityOptions,CompassResponse,GyroscopeResponse,SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';
```

## alpha

```TypeScript
alpha: number
```

Rotation angle around the Z axis when the X/Y axis of the device coincides with the X/Y axis of the earth.

**类型：** number

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#OrientationResponse.alpha

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

## gamma

```TypeScript
gamma: number
```

Rotation angle around the Y axis when the X/Z axis of the device coincides with the X/Z axis of the earth.

**类型：** number

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#OrientationResponse.gamma

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

## beta

```TypeScript
beta: number
```

Rotation angle around the X axis when the Y/Z axis of the device coincides with the Y/Z axis of the earth.

**类型：** number

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#OrientationResponse.beta

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

