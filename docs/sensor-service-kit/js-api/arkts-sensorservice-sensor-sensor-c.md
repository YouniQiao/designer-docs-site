# Sensor

**Since:** 6

**Deprecated since:** 8

**Substitutes:** sensor/sensor

<!--Device-unnamed-export default class Sensor--><!--Device-unnamed-export default class Sensor-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## Modules to Import

```TypeScript
import { OnBodyStateResponse, subscribeAccelerometerOptions, ProximityResponse, SubscribeGyroscopeOptions, SubscribeStepCounterOptions, SubscribeDeviceOrientationOptions, HeartRateResponse, LightResponse, AccelerometerResponse, SubscribeLightOptions, DeviceOrientationResponse, SubscribeHeartRateOptions, StepCounterResponse, SubscribeCompassOptions, GetOnBodyStateOptions, SubscribeBarometerOptions, BarometerResponse, SubscribeProximityOptions, CompassResponse, GyroscopeResponse, SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';
```

## getOnBodyState

```TypeScript
static getOnBodyState(options: GetOnBodyStateOptions): void
```

Obtains the wearing state of a wearable device.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** WEAR_DETECTION

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static getOnBodyState(options: GetOnBodyStateOptions): void--><!--Device-Sensor-static getOnBodyState(options: GetOnBodyStateOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [GetOnBodyStateOptions](arkts-sensorservice-sensor-getonbodystateoptions-i.md) | Yes | Callback invoked when obtaining the wearing state of the device that houses the sensor. |

## subscribeAccelerometer

```TypeScript
static subscribeAccelerometer(options: subscribeAccelerometerOptions): void
```

Subscribes to data changes of the acceleration sensor. If this API is called multiple times for the same application, the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ACCELEROMETER](arkts-sensorservice-sensor-on-f.md#on-25)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** on(type:

**Required permissions:** ohos.permission.ACCELEROMETER

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static subscribeAccelerometer(options: subscribeAccelerometerOptions): void--><!--Device-Sensor-static subscribeAccelerometer(options: subscribeAccelerometerOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [subscribeAccelerometerOptions](arkts-sensorservice-sensor-subscribeaccelerometeroptions-i.md) | Yes | Type of data to return. |

## subscribeBarometer

```TypeScript
static subscribeBarometer(options: SubscribeBarometerOptions): void
```

Subscribes to data changes of the barometer sensor. If this API is called multiple times for the same application,the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [BAROMETER](arkts-sensorservice-sensor-on-f.md#on-29)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** on(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static subscribeBarometer(options: SubscribeBarometerOptions): void--><!--Device-Sensor-static subscribeBarometer(options: SubscribeBarometerOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubscribeBarometerOptions](arkts-sensorservice-sensor-subscribebarometeroptions-i.md) | Yes | Type of data to return. |

## subscribeCompass

```TypeScript
static subscribeCompass(options: SubscribeCompassOptions): void
```

Subscribes to data changes of the compass sensor. If this API is called multiple times for the same application,the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ORIENTATION](arkts-sensorservice-sensor-on-f.md#on-39)  
> since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** ORIENTATION

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static subscribeCompass(options: SubscribeCompassOptions): void--><!--Device-Sensor-static subscribeCompass(options: SubscribeCompassOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubscribeCompassOptions](arkts-sensorservice-sensor-subscribecompassoptions-i.md) | Yes | Type of data to return. |

## subscribeDeviceOrientation

```TypeScript
static subscribeDeviceOrientation(options: SubscribeDeviceOrientationOptions): void
```

Subscribes to data changes of the device orientation sensor.

If this API is called multiple times for the same application, the last call takes effect. However, this API cannot be called multiple times in one click event.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ORIENTATION](arkts-sensorservice-sensor-on-f.md#on-39)  
> instead. since API Version 8.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** on(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static subscribeDeviceOrientation(options: SubscribeDeviceOrientationOptions): void--><!--Device-Sensor-static subscribeDeviceOrientation(options: SubscribeDeviceOrientationOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubscribeDeviceOrientationOptions](arkts-sensorservice-sensor-subscribedeviceorientationoptions-i.md) | Yes | Type of data to return. |

## subscribeGyroscope

```TypeScript
static subscribeGyroscope(options: SubscribeGyroscopeOptions): void
```

Subscribes to data changes of the gyroscope sensor.

If this API is called multiple times for the same application, the last call takes effect. However, this API cannot be called multiple times in one click event.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [GYROSCOPE](arkts-sensorservice-sensor-on-f.md#on-31)  
> instead. since API Version 8.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** on(type:

**Required permissions:** ohos.permission.GYROSCOPE

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static subscribeGyroscope(options: SubscribeGyroscopeOptions): void--><!--Device-Sensor-static subscribeGyroscope(options: SubscribeGyroscopeOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubscribeGyroscopeOptions](arkts-sensorservice-sensor-subscribegyroscopeoptions-i.md) | Yes | Type of data to return. |

## subscribeHeartRate

```TypeScript
static subscribeHeartRate(options: SubscribeHeartRateOptions): void
```

Subscribes to data changes of the heart rate sensor. If this API is called multiple times for the same application,the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [HEART_RATE](arkts-sensorservice-sensor-on-f.md#on-34)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** on(type:

**Required permissions:** ohos.permission.READ_HEALTH_DATA

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static subscribeHeartRate(options: SubscribeHeartRateOptions): void--><!--Device-Sensor-static subscribeHeartRate(options: SubscribeHeartRateOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubscribeHeartRateOptions](arkts-sensorservice-sensor-subscribeheartrateoptions-i.md) | Yes | Type of data to return. |

## subscribeLight

```TypeScript
static subscribeLight(options: SubscribeLightOptions): void
```

Subscribes to data changes of the ambient light sensor. If this API is called multiple times, the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [AMBIENT_LIGHT](arkts-sensorservice-sensor-on-f.md#on-27)  
> since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** AMBIENT_LIGHT

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static subscribeLight(options: SubscribeLightOptions): void--><!--Device-Sensor-static subscribeLight(options: SubscribeLightOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubscribeLightOptions](arkts-sensorservice-sensor-subscribelightoptions-i.md) | Yes | Type of data to return. |

## subscribeOnBodyState

```TypeScript
static subscribeOnBodyState(options: SubscribeOnBodyStateOptions): void
```

Subscribes to wearing status changes of a wearable device. If this API is called multiple times for the same application, the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [WEAR_DETECTION](arkts-sensorservice-sensor-on-f.md#on-45)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** on(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static subscribeOnBodyState(options: SubscribeOnBodyStateOptions): void--><!--Device-Sensor-static subscribeOnBodyState(options: SubscribeOnBodyStateOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubscribeOnBodyStateOptions](arkts-sensorservice-sensor-subscribeonbodystateoptions-i.md) | Yes | Type of data to return. |

## subscribeProximity

```TypeScript
static subscribeProximity(options: SubscribeProximityOptions): void
```

Subscribes to data changes of the proximity sensor. If this API is called multiple times for the same application,the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [PROXIMITY](arkts-sensorservice-sensor-on-f.md#on-42)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** PROXIMITY

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static subscribeProximity(options: SubscribeProximityOptions): void--><!--Device-Sensor-static subscribeProximity(options: SubscribeProximityOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubscribeProximityOptions](arkts-sensorservice-sensor-subscribeproximityoptions-i.md) | Yes | Type of data to return. |

## subscribeStepCounter

```TypeScript
static subscribeStepCounter(options: SubscribeStepCounterOptions): void
```

Subscribes to data changes of the step counter sensor. If this API is called multiple times for the same application, the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [PEDOMETER](arkts-sensorservice-sensor-on-f.md#on-40)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** on(type:

**Required permissions:** ohos.permission.ACTIVITY_MOTION

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static subscribeStepCounter(options: SubscribeStepCounterOptions): void--><!--Device-Sensor-static subscribeStepCounter(options: SubscribeStepCounterOptions): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubscribeStepCounterOptions](arkts-sensorservice-sensor-subscribestepcounteroptions-i.md) | Yes | Type of data to return. |

## unsubscribeAccelerometer

```TypeScript
static unsubscribeAccelerometer(): void
```

Unsubscribes from data changes of the acceleration sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ACCELEROMETER](arkts-sensorservice-sensor-off-f.md#off-48)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Required permissions:** ohos.permission.ACCELEROMETER

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeAccelerometer(): void--><!--Device-Sensor-static unsubscribeAccelerometer(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeBarometer

```TypeScript
static unsubscribeBarometer(): void
```

Unsubscribes from data changes of the barometer sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [BAROMETER](arkts-sensorservice-sensor-off-f.md#off-52)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeBarometer(): void--><!--Device-Sensor-static unsubscribeBarometer(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeCompass

```TypeScript
static unsubscribeCompass(): void
```

Unsubscribes from data changes of the compass sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ORIENTATION](arkts-sensorservice-sensor-off-f.md#off-62)  
> instead.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeCompass(): void--><!--Device-Sensor-static unsubscribeCompass(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeDeviceOrientation

```TypeScript
static unsubscribeDeviceOrientation(): void
```

Unsubscribes from data changes of the device orientation sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ORIENTATION](arkts-sensorservice-sensor-off-f.md#off-62)  
> instead. since API Version 8.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeDeviceOrientation(): void--><!--Device-Sensor-static unsubscribeDeviceOrientation(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeGyroscope

```TypeScript
static unsubscribeGyroscope(): void
```

Unsubscribes from data changes of the gyroscope sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [GYROSCOPE](arkts-sensorservice-sensor-off-f.md#off-54)  
> instead. since API Version 8.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** off(type:

**Required permissions:** ohos.permission.GYROSCOPE

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeGyroscope(): void--><!--Device-Sensor-static unsubscribeGyroscope(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeHeartRate

```TypeScript
static unsubscribeHeartRate(): void
```

Unsubscribes from data changes of the heart rate sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [HEART_RATE](arkts-sensorservice-sensor-off-f.md#off-57)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Required permissions:** ohos.permission.READ_HEALTH_DATA

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeHeartRate(): void--><!--Device-Sensor-static unsubscribeHeartRate(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeLight

```TypeScript
static unsubscribeLight(): void
```

Unsubscribes from data changes of the ambient light sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [AMBIENT_LIGHT](arkts-sensorservice-sensor-off-f.md#off-50)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeLight(): void--><!--Device-Sensor-static unsubscribeLight(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeOnBodyState

```TypeScript
static unsubscribeOnBodyState(): void
```

Unsubscribes from wearing status changes of a wearable device.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [WEAR_DETECTION](arkts-sensorservice-sensor-off-f.md#off-68)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeOnBodyState(): void--><!--Device-Sensor-static unsubscribeOnBodyState(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeProximity

```TypeScript
static unsubscribeProximity(): void
```

Unsubscribes from data changes of the proximity sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [PROXIMITY](arkts-sensorservice-sensor-off-f.md#off-65)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** PROXIMITY

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeProximity(): void--><!--Device-Sensor-static unsubscribeProximity(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

## unsubscribeStepCounter

```TypeScript
static unsubscribeStepCounter(): void
```

Unsubscribes from data changes of the step counter sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [PEDOMETER](arkts-sensorservice-sensor-off-f.md#off-63)  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Required permissions:** ohos.permission.ACTIVITY_MOTION

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeStepCounter(): void--><!--Device-Sensor-static unsubscribeStepCounter(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

