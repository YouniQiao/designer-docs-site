# off (System API)

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## off

```TypeScript
function off(type: SensorId.COLOR, callback?: Callback<ColorResponse>): void
```

Unsubscribes from data of the color sensor.

**Since:** 10

<!--Device-sensor-function off(type: SensorId.COLOR, callback?: Callback<ColorResponse>): void--><!--Device-sensor-function off(type: SensorId.COLOR, callback?: Callback<ColorResponse>): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.COLOR | Yes | Sensor type. The value is fixed at **SensorId.COLOR**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ColorResponse> | No | Callback used for unsubscription. If this parameter is not specified,all callbacks of the specified sensor type are unsubscribed from. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameter types; 3. Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission check failed. A non-system application uses the system API.<br>**Applicable version:** 11 and later |


## off

```TypeScript
function off(type: SensorId.COLOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<ColorResponse>): void
```

Unsubscribes from data of the color sensor.

**Since:** 19

<!--Device-sensor-function off(type: SensorId.COLOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<ColorResponse>): void--><!--Device-sensor-function off(type: SensorId.COLOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<ColorResponse>): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.COLOR | Yes | Sensor type. The value is fixed at **SensorId.COLOR**. |
| sensorInfoParam | [SensorInfoParam](arkts-sensorservice-sensor-sensorinfoparam-i.md) | No | Sensor parameters, including **deviceId** and **sensorIndex**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ColorResponse> | No | Callback used for unsubscription. If this parameter is not specified, all callbacks of the specified sensor type are unsubscribed from. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission check failed. A non-system application uses the system API. |
| [14500101](../errorcode-sensor.md#14500101-service-exception) | Service exception. Possible causes: 1. Sensor hdf service exception;<br> 2. Sensor service ipc exception;3. Sensor data channel exception. |


## off

```TypeScript
function off(type: SensorId.SAR, callback?: Callback<SarResponse>): void
```

Unsubscribes from data of the SAR sensor.

**Since:** 10

<!--Device-sensor-function off(type: SensorId.SAR, callback?: Callback<SarResponse>): void--><!--Device-sensor-function off(type: SensorId.SAR, callback?: Callback<SarResponse>): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.SAR | Yes | Sensor type. The value is fixed at **SensorId.SAR**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<SarResponse> | No | Callback used for unsubscription. If this parameter is not specified,all callbacks of the specified sensor type are unsubscribed from. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameter types; 3. Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission check failed. A non-system application uses the system API.<br>**Applicable version:** 11 and later |


## off

```TypeScript
function off(type: SensorId.SAR, sensorInfoParam?: SensorInfoParam, callback?: Callback<SarResponse>): void
```

Unsubscribes from data of the SAR sensor.

**Since:** 19

<!--Device-sensor-function off(type: SensorId.SAR, sensorInfoParam?: SensorInfoParam, callback?: Callback<SarResponse>): void--><!--Device-sensor-function off(type: SensorId.SAR, sensorInfoParam?: SensorInfoParam, callback?: Callback<SarResponse>): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.SAR | Yes | Sensor type. The value is fixed at **SensorId.SAR**. |
| sensorInfoParam | [SensorInfoParam](arkts-sensorservice-sensor-sensorinfoparam-i.md) | No | Sensor parameters, including **deviceId** and **sensorIndex**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<SarResponse> | No | Callback used for unsubscription. If this parameter is not specified,all callbacks of the specified sensor type are unsubscribed from. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission check failed. A non-system application uses the system API. |
| [14500101](../errorcode-sensor.md#14500101-service-exception) | Service exception. Possible causes: 1. Sensor hdf service exception;<br> 2. Sensor service ipc exception;3. Sensor data channel exception. |

