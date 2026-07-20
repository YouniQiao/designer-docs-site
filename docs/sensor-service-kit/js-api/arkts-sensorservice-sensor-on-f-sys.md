# on (System API)

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## on

```TypeScript
function on(type: SensorId.COLOR, callback: Callback<ColorResponse>, options?: Options): void
```

Subscribes to data of the color sensor.

**Since:** 10

<!--Device-sensor-function on(type: SensorId.COLOR, callback: Callback<ColorResponse>, options?: Options): void--><!--Device-sensor-function on(type: SensorId.COLOR, callback: Callback<ColorResponse>, options?: Options): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.COLOR | Yes | Sensor type. The value is fixed at **SensorId.COLOR**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ColorResponse> | Yes | Callback used to report the sensor data, which is a **ColorResponse** object. |
| options | [Options](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-zlib-options-i.md) | No | List of optional parameters. This parameter is used to set the data reporting frequency. The default value is 200,000,000 ns. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameter types; 3. Parameter verification failed. |
| [14500101](../errorcode-sensor.md#14500101-service-exception) | Service exception. Possible causes: 1. Sensor hdf service exception;<br> 2. Sensor service ipc exception;3. Sensor data channel exception. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission check failed. A non-system application uses the system API.<br>**Applicable version:** 11 and later |


## on

```TypeScript
function on(type: SensorId.SAR, callback: Callback<SarResponse>, options?: Options): void
```

Subscribes to data of the Sodium Adsorption Ratio (SAR) sensor.

**Since:** 10

<!--Device-sensor-function on(type: SensorId.SAR, callback: Callback<SarResponse>, options?: Options): void--><!--Device-sensor-function on(type: SensorId.SAR, callback: Callback<SarResponse>, options?: Options): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.SAR | Yes | Sensor type. The value is fixed at **SensorId.SAR**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<SarResponse> | Yes | Callback used to report the sensor data, which is a **SarResponse** object. |
| options | [Options](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-zlib-options-i.md) | No | List of optional parameters. This parameter is used to set the data reporting frequency. The default value is 200,000,000 ns. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameter types; 3. Parameter verification failed. |
| [14500101](../errorcode-sensor.md#14500101-service-exception) | Service exception. Possible causes: 1. Sensor hdf service exception;<br> 2. Sensor service ipc exception;3. Sensor data channel exception. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission check failed. A non-system application uses the system API.<br>**Applicable version:** 11 and later |

