# SubscribeOnBodyStateOptions

Defines the callback invoked upon change in the wearing state of the device that houses the sensor.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor.SensorId#WEAR_DETECTION

**系统能力：** SystemCapability.Sensors.Sensor.Lite

## 导入模块

```TypeScript
import { OnBodyStateResponse,subscribeAccelerometerOptions,ProximityResponse,SubscribeGyroscopeOptions,SubscribeStepCounterOptions,SubscribeDeviceOrientationOptions,HeartRateResponse,LightResponse,AccelerometerResponse,SubscribeLightOptions,DeviceOrientationResponse,SubscribeHeartRateOptions,StepCounterResponse,SubscribeCompassOptions,GetOnBodyStateOptions,SubscribeBarometerOptions,BarometerResponse,SubscribeProximityOptions,CompassResponse,GyroscopeResponse,SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';
```

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Callback invoked when an API call fails.

**类型：** (data: string, code: number) => void

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#on

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

## success

```TypeScript
success: (data: OnBodyStateResponse) => void
```

Callback invoked when the wearing state of the device that houses the sensor is successfully obtained.

**类型：** (data: OnBodyStateResponse) => void

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#on

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

