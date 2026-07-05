# SubscribeGyroscopeOptions

Defines the type of data to return for a subscription to data changes of the gyroscope sensor.

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor.SensorId#GYROSCOPE

**需要权限：** 

 ohos.permission.GYROSCOPE

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

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#on

**需要权限：** 

 ohos.permission.GYROSCOPE

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

## success

```TypeScript
success: (data: GyroscopeResponse) => void
```

Callback invoked when the gyroscope sensor data changes.

**类型：** (data: GyroscopeResponse) => void

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#on

**需要权限：** 

 ohos.permission.GYROSCOPE

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

## interval

```TypeScript
interval: string
```

Interval at which the callback is invoked to return the gyroscope sensor data. The default value is **normal**. The options are as follows: - **game**: called at an interval of 20 ms, which is applicable to gaming scenarios. - **ui**: called at an interval of 60 ms, which is applicable to UI updating scenarios. - **normal**: called at an interval of 200 ms, which is applicable to power-saving scenarios.

**类型：** string

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.sensor/sensor#Options.interval

**需要权限：** 

 ohos.permission.GYROSCOPE

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.Sensor.Lite

