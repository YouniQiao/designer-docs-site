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

<a id="getonbodystate"></a>
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

<a id="subscribeaccelerometer"></a>
## subscribeAccelerometer

```TypeScript
static subscribeAccelerometer(options: subscribeAccelerometerOptions): void
```

Subscribes to data changes of the acceleration sensor. If this API is called multiple times for the same application, the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ACCELEROMETER](@ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>, options?: Options))  
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

<a id="subscribebarometer"></a>
## subscribeBarometer

```TypeScript
static subscribeBarometer(options: SubscribeBarometerOptions): void
```

Subscribes to data changes of the barometer sensor. If this API is called multiple times for the same application,the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [BAROMETER](@ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>, options?: Options))  
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

<a id="subscribecompass"></a>
## subscribeCompass

```TypeScript
static subscribeCompass(options: SubscribeCompassOptions): void
```

Subscribes to data changes of the compass sensor. If this API is called multiple times for the same application,the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ORIENTATION](@ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>, options?: Options))  
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

<a id="subscribedeviceorientation"></a>
## subscribeDeviceOrientation

```TypeScript
static subscribeDeviceOrientation(options: SubscribeDeviceOrientationOptions): void
```

Subscribes to data changes of the device orientation sensor.

If this API is called multiple times for the same application, the last call takes effect. However, this API cannot be called multiple times in one click event.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ORIENTATION](@ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>, options?: Options))  
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

<a id="subscribegyroscope"></a>
## subscribeGyroscope

```TypeScript
static subscribeGyroscope(options: SubscribeGyroscopeOptions): void
```

Subscribes to data changes of the gyroscope sensor.

If this API is called multiple times for the same application, the last call takes effect. However, this API cannot be called multiple times in one click event.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [GYROSCOPE](@ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>, options?: Options))  
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

<a id="subscribeheartrate"></a>
## subscribeHeartRate

```TypeScript
static subscribeHeartRate(options: SubscribeHeartRateOptions): void
```

Subscribes to data changes of the heart rate sensor. If this API is called multiple times for the same application,the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [HEART_RATE](@ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>, options?: Options))  
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

<a id="subscribelight"></a>
## subscribeLight

```TypeScript
static subscribeLight(options: SubscribeLightOptions): void
```

Subscribes to data changes of the ambient light sensor. If this API is called multiple times, the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [AMBIENT_LIGHT](@ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options))  
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

<a id="subscribeonbodystate"></a>
## subscribeOnBodyState

```TypeScript
static subscribeOnBodyState(options: SubscribeOnBodyStateOptions): void
```

Subscribes to wearing status changes of a wearable device. If this API is called multiple times for the same application, the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [WEAR_DETECTION](@ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options))  
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

<a id="subscribeproximity"></a>
## subscribeProximity

```TypeScript
static subscribeProximity(options: SubscribeProximityOptions): void
```

Subscribes to data changes of the proximity sensor. If this API is called multiple times for the same application,the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [PROXIMITY](@ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>, options?: Options))  
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

<a id="subscribestepcounter"></a>
## subscribeStepCounter

```TypeScript
static subscribeStepCounter(options: SubscribeStepCounterOptions): void
```

Subscribes to data changes of the step counter sensor. If this API is called multiple times for the same application, the last call takes effect.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [PEDOMETER](@ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>, options?: Options))  
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

<a id="unsubscribeaccelerometer"></a>
## unsubscribeAccelerometer

```TypeScript
static unsubscribeAccelerometer(): void
```

Unsubscribes from data changes of the acceleration sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ACCELEROMETER](@ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback?: Callback<AccelerometerResponse>))  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Required permissions:** ohos.permission.ACCELEROMETER

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeAccelerometer(): void--><!--Device-Sensor-static unsubscribeAccelerometer(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

<a id="unsubscribebarometer"></a>
## unsubscribeBarometer

```TypeScript
static unsubscribeBarometer(): void
```

Unsubscribes from data changes of the barometer sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [BAROMETER](@ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback?: Callback<BarometerResponse>))  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeBarometer(): void--><!--Device-Sensor-static unsubscribeBarometer(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

<a id="unsubscribecompass"></a>
## unsubscribeCompass

```TypeScript
static unsubscribeCompass(): void
```

Unsubscribes from data changes of the compass sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ORIENTATION](@ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>))  
> instead.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeCompass(): void--><!--Device-Sensor-static unsubscribeCompass(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

<a id="unsubscribedeviceorientation"></a>
## unsubscribeDeviceOrientation

```TypeScript
static unsubscribeDeviceOrientation(): void
```

Unsubscribes from data changes of the device orientation sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [ORIENTATION](@ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>))  
> instead. since API Version 8.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeDeviceOrientation(): void--><!--Device-Sensor-static unsubscribeDeviceOrientation(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

<a id="unsubscribegyroscope"></a>
## unsubscribeGyroscope

```TypeScript
static unsubscribeGyroscope(): void
```

Unsubscribes from data changes of the gyroscope sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [GYROSCOPE](@ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback?: Callback<GyroscopeResponse>))  
> instead. since API Version 8.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** off(type:

**Required permissions:** ohos.permission.GYROSCOPE

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeGyroscope(): void--><!--Device-Sensor-static unsubscribeGyroscope(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

<a id="unsubscribeheartrate"></a>
## unsubscribeHeartRate

```TypeScript
static unsubscribeHeartRate(): void
```

Unsubscribes from data changes of the heart rate sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [HEART_RATE](@ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback?: Callback<HeartRateResponse>))  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Required permissions:** ohos.permission.READ_HEALTH_DATA

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeHeartRate(): void--><!--Device-Sensor-static unsubscribeHeartRate(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

<a id="unsubscribelight"></a>
## unsubscribeLight

```TypeScript
static unsubscribeLight(): void
```

Unsubscribes from data changes of the ambient light sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [AMBIENT_LIGHT](@ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback?: Callback<LightResponse>))  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeLight(): void--><!--Device-Sensor-static unsubscribeLight(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

<a id="unsubscribeonbodystate"></a>
## unsubscribeOnBodyState

```TypeScript
static unsubscribeOnBodyState(): void
```

Unsubscribes from wearing status changes of a wearable device.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [WEAR_DETECTION](@ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback?: Callback<WearDetectionResponse>))  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeOnBodyState(): void--><!--Device-Sensor-static unsubscribeOnBodyState(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

<a id="unsubscribeproximity"></a>
## unsubscribeProximity

```TypeScript
static unsubscribeProximity(): void
```

Unsubscribes from data changes of the proximity sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [PROXIMITY](@ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback?: Callback<ProximityResponse>))  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** PROXIMITY

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeProximity(): void--><!--Device-Sensor-static unsubscribeProximity(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

<a id="unsubscribestepcounter"></a>
## unsubscribeStepCounter

```TypeScript
static unsubscribeStepCounter(): void
```

Unsubscribes from data changes of the step counter sensor.

> **NOTE**  
>  
> Except for lite wearables, You are advised to use  
> [PEDOMETER](@ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback?: Callback<PedometerResponse>))  
> instead. since API Version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** off(type:

**Required permissions:** ohos.permission.ACTIVITY_MOTION

**Model restriction:** This API can be used only in the FA model.

<!--Device-Sensor-static unsubscribeStepCounter(): void--><!--Device-Sensor-static unsubscribeStepCounter(): void-End-->

**System capability:** SystemCapability.Sensors.Sensor.Lite

