# Sensor

**Since:** 6

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor

**System capability:** SystemCapability.Sensors.Sensor.Lite

## Modules to Import

```TypeScript
import { OnBodyStateResponse,subscribeAccelerometerOptions,ProximityResponse,SubscribeGyroscopeOptions,SubscribeStepCounterOptions,SubscribeDeviceOrientationOptions,HeartRateResponse,LightResponse,AccelerometerResponse,SubscribeLightOptions,DeviceOrientationResponse,SubscribeHeartRateOptions,StepCounterResponse,SubscribeCompassOptions,GetOnBodyStateOptions,SubscribeBarometerOptions,BarometerResponse,SubscribeProximityOptions,CompassResponse,GyroscopeResponse,SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';
```

## getOnBodyState

```TypeScript
static getOnBodyState(options: GetOnBodyStateOptions): void
```

Obtains the wearing state of a wearable device.

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor.SensorId#WEAR_DETECTION

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | GetOnBodyStateOptions | Yes | Callback invoked when obtaining the wearing state of the device that  houses the sensor. |

## subscribeAccelerometer

```TypeScript
static subscribeAccelerometer(options: subscribeAccelerometerOptions): void
```

Subscribes to data changes of the acceleration sensor. If this API is called multiple times for the same application, the last call takes effect. > **NOTE** > > Except for lite wearables, You are advised to use > [ACCELEROMETER](arkts-sensor-on-f.md#on-23) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.on(type:

**Required permissions:** 

 ohos.permission.ACCELEROMETER

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | subscribeAccelerometerOptions | Yes | Type of data to return. |

## subscribeBarometer

```TypeScript
static subscribeBarometer(options: SubscribeBarometerOptions): void
```

Subscribes to data changes of the barometer sensor. If this API is called multiple times for the same application, the last call takes effect. > **NOTE** > > Except for lite wearables, You are advised to use > [BAROMETER](arkts-sensor-on-f.md#on-27) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.on(type:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeBarometerOptions | Yes | Type of data to return. |

## subscribeCompass

```TypeScript
static subscribeCompass(options: SubscribeCompassOptions): void
```

Subscribes to data changes of the compass sensor. If this API is called multiple times for the same application, the last call takes effect. > **NOTE** > > Except for lite wearables, You are advised to use > [ORIENTATION](arkts-sensor-on-f.md#on-37) > since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor.SensorId#ORIENTATION

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeCompassOptions | Yes | Type of data to return. |

## subscribeDeviceOrientation

```TypeScript
static subscribeDeviceOrientation(options: SubscribeDeviceOrientationOptions): void
```

Subscribes to data changes of the device orientation sensor. If this API is called multiple times for the same application, the last call takes effect. However, this API cannot be called multiple times in one click event. > **NOTE** > > Except for lite wearables, You are advised to use > [ORIENTATION](arkts-sensor-on-f.md#on-37) > instead. since API Version 8.

**Since:** 6

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.on(type:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeDeviceOrientationOptions | Yes | Type of data to return. |

## subscribeGyroscope

```TypeScript
static subscribeGyroscope(options: SubscribeGyroscopeOptions): void
```

Subscribes to data changes of the gyroscope sensor. If this API is called multiple times for the same application, the last call takes effect. However, this API cannot be called multiple times in one click event. > **NOTE** > > Except for lite wearables, You are advised to use > [GYROSCOPE](arkts-sensor-on-f.md#on-29) > instead. since API Version 8.

**Since:** 6

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.on(type:

**Required permissions:** 

 ohos.permission.GYROSCOPE

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeGyroscopeOptions | Yes | Type of data to return. |

## subscribeHeartRate

```TypeScript
static subscribeHeartRate(options: SubscribeHeartRateOptions): void
```

Subscribes to data changes of the heart rate sensor. If this API is called multiple times for the same application, the last call takes effect. > **NOTE** > > Except for lite wearables, You are advised to use > [HEART_RATE](arkts-sensor-on-f.md#on-32) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.on(type:

**Required permissions:** 

 ohos.permission.READ_HEALTH_DATA

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeHeartRateOptions | Yes | Type of data to return. |

## subscribeLight

```TypeScript
static subscribeLight(options: SubscribeLightOptions): void
```

Subscribes to data changes of the ambient light sensor. If this API is called multiple times, the last call takes effect. > **NOTE** > > Except for lite wearables, You are advised to use > [AMBIENT_LIGHT](arkts-sensor-on-f.md#on-25) > since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor.SensorId#AMBIENT_LIGHT

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeLightOptions | Yes | Type of data to return. |

## subscribeOnBodyState

```TypeScript
static subscribeOnBodyState(options: SubscribeOnBodyStateOptions): void
```

Subscribes to wearing status changes of a wearable device. If this API is called multiple times for the same application, the last call takes effect. > **NOTE** > > Except for lite wearables, You are advised to use > [WEAR_DETECTION](arkts-sensor-on-f.md#on-43) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.on(type:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeOnBodyStateOptions | Yes | Type of data to return. |

## subscribeProximity

```TypeScript
static subscribeProximity(options: SubscribeProximityOptions): void
```

Subscribes to data changes of the proximity sensor. If this API is called multiple times for the same application, the last call takes effect. > **NOTE** > > Except for lite wearables, You are advised to use > [PROXIMITY](arkts-sensor-on-f.md#on-40) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor.SensorId#PROXIMITY

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeProximityOptions | Yes | Type of data to return. |

## subscribeStepCounter

```TypeScript
static subscribeStepCounter(options: SubscribeStepCounterOptions): void
```

Subscribes to data changes of the step counter sensor. If this API is called multiple times for the same application, the last call takes effect. > **NOTE** > > Except for lite wearables, You are advised to use > [PEDOMETER](arkts-sensor-on-f.md#on-38) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.on(type:

**Required permissions:** 

 ohos.permission.ACTIVITY_MOTION

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeStepCounterOptions | Yes | Type of data to return. |

## unsubscribeAccelerometer

```TypeScript
static unsubscribeAccelerometer(): void
```

Unsubscribes from data changes of the acceleration sensor. > **NOTE** > > Except for lite wearables, You are advised to use > [ACCELEROMETER](arkts-sensor-off-f.md#off-44) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.off(type:

**Required permissions:** 

 ohos.permission.ACCELEROMETER

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeBarometer

```TypeScript
static unsubscribeBarometer(): void
```

Unsubscribes from data changes of the barometer sensor. > **NOTE** > > Except for lite wearables, You are advised to use > [BAROMETER](arkts-sensor-off-f.md#off-48) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.off(type:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeCompass

```TypeScript
static unsubscribeCompass(): void
```

Unsubscribes from data changes of the compass sensor. > **NOTE** > > Except for lite wearables, You are advised to use > [ORIENTATION](arkts-sensor-off-f.md#off-58) > instead.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.off(type:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeDeviceOrientation

```TypeScript
static unsubscribeDeviceOrientation(): void
```

Unsubscribes from data changes of the device orientation sensor. > **NOTE** > > Except for lite wearables, You are advised to use > [ORIENTATION](arkts-sensor-off-f.md#off-58) > instead. since API Version 8.

**Since:** 6

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.off(type:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeGyroscope

```TypeScript
static unsubscribeGyroscope(): void
```

Unsubscribes from data changes of the gyroscope sensor. > **NOTE** > > Except for lite wearables, You are advised to use > [GYROSCOPE](arkts-sensor-off-f.md#off-50) > instead. since API Version 8.

**Since:** 6

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.off(type:

**Required permissions:** 

 ohos.permission.GYROSCOPE

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeHeartRate

```TypeScript
static unsubscribeHeartRate(): void
```

Unsubscribes from data changes of the heart rate sensor. > **NOTE** > > Except for lite wearables, You are advised to use > [HEART_RATE](arkts-sensor-off-f.md#off-53) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.off(type:

**Required permissions:** 

 ohos.permission.READ_HEALTH_DATA

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeLight

```TypeScript
static unsubscribeLight(): void
```

Unsubscribes from data changes of the ambient light sensor. > **NOTE** > > Except for lite wearables, You are advised to use > [AMBIENT_LIGHT](arkts-sensor-off-f.md#off-46) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.off(type:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeOnBodyState

```TypeScript
static unsubscribeOnBodyState(): void
```

Unsubscribes from wearing status changes of a wearable device. > **NOTE** > > Except for lite wearables, You are advised to use > [WEAR_DETECTION](arkts-sensor-off-f.md#off-64) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.off(type:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeProximity

```TypeScript
static unsubscribeProximity(): void
```

Unsubscribes from data changes of the proximity sensor. > **NOTE** > > Except for lite wearables, You are advised to use > [PROXIMITY](arkts-sensor-off-f.md#off-61) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.sensor/sensor.SensorId#PROXIMITY

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeStepCounter

```TypeScript
static unsubscribeStepCounter(): void
```

Unsubscribes from data changes of the step counter sensor. > **NOTE** > > Except for lite wearables, You are advised to use > [PEDOMETER](arkts-sensor-off-f.md#off-59) > instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.sensor:sensor.off(type:

**Required permissions:** 

 ohos.permission.ACTIVITY_MOTION

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.Sensor.Lite

