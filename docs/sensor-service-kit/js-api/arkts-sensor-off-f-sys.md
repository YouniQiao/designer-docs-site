# off

## off(SensorId.COLOR)

```TypeScript
function off(type: SensorId.COLOR, callback?: Callback<ColorResponse>): void
```

Unsubscribes from data of the color sensor.

**Since:** 10

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.COLOR | Yes | Sensor type. The value is fixed at SensorId.COLOR. |
| callback | Callback&lt;ColorResponse> | No | Callback used for unsubscription. If this parameter is not specified,  all callbacks of the specified sensor type are unsubscribed from. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission check failed. A non-system application uses the system API. [since 11] |

## off(SensorId.COLOR)

```TypeScript
function off(type: SensorId.COLOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<ColorResponse>): void
```

Unsubscribes from data of the color sensor.

**Since:** 19

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.COLOR | Yes | Sensor type. The value is fixed at SensorId.COLOR. |
| sensorInfoParam | SensorInfoParam | No |  |
| callback | Callback&lt;ColorResponse> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

## off(SensorId.SAR)

```TypeScript
function off(type: SensorId.SAR, callback?: Callback<SarResponse>): void
```

Unsubscribes from data of the SAR sensor.

**Since:** 10

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.SAR | Yes | Sensor type. The value is fixed at SensorId.SAR. |
| callback | Callback&lt;SarResponse> | No | Callback used for unsubscription. If this parameter is not specified,  all callbacks of the specified sensor type are unsubscribed from. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission check failed. A non-system application uses the system API. [since 11] |

## off(SensorId.SAR)

```TypeScript
function off(type: SensorId.SAR, sensorInfoParam?: SensorInfoParam, callback?: Callback<SarResponse>): void
```

Unsubscribes from data of the SAR sensor.

**Since:** 19

**System capability:** SystemCapability.Sensors.Sensor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId.SAR | Yes | Sensor type. The value is fixed at SensorId.SAR. |
| sensorInfoParam | SensorInfoParam | No |  |
| callback | Callback&lt;SarResponse> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

