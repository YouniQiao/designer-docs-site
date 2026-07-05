# SubscribeBarometerOptions

Defines the type of data to return for a subscription to data changes of the barometer sensor.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor.SensorId#BAROMETER

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
success: (data: BarometerResponse) => void
```

Callback invoked when the barometer sensor data changes.

**类型：** (data: BarometerResponse) => void

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#on

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

