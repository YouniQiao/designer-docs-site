# on

## on(SensorId.COLOR)

```TypeScript
function on(type: SensorId.COLOR, callback: Callback<ColorResponse>, options?: Options): void
```

Subscribes to data of the color sensor.

**Since:** 10

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.COLOR | Yes | Sensor type. The value is fixed at SensorId.COLOR. |
| callback | Callback&lt;ColorResponse> | Yes | Callback used to report the sensor data, which is a ColorResponse  object. |
| options | Options | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |
| 202 | Permission check failed. A non-system application uses the system API. [since 11] |

## on(SensorId.SAR)

```TypeScript
function on(type: SensorId.SAR, callback: Callback<SarResponse>, options?: Options): void
```

Subscribes to data of the Sodium Adsorption Ratio (SAR) sensor.

**Since:** 10

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.SAR | Yes | Sensor type. The value is fixed at SensorId.SAR. |
| callback | Callback&lt;SarResponse> | Yes | Callback used to report the sensor data, which is a SarResponse  object. |
| options | Options | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |
| 202 | Permission check failed. A non-system application uses the system API. [since 11] |

