# once

## once(SensorId.ACCELEROMETER)

```TypeScript
function once(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>): void
```

Obtains data of the acceleration sensor once.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.ACCELEROMETER | 是 | Sensor type. The value is fixed at SensorId.ACCELEROMETER. |
| callback | Callback&lt;AccelerometerResponse> | 是 | Callback used to report the sensor data, which is an  AccelerometerResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.ACCELEROMETER, (data: sensor.AccelerometerResponse) => {
    console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.ACCELEROMETER_UNCALIBRATED)

```TypeScript
function once(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>): void
```

Obtains data of the uncalibrated acceleration sensor once.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.ACCELEROMETER_UNCALIBRATED | 是 | Sensor type. The value is fixed at  SensorId.ACCELEROMETER_UNCALIBRATED. |
| callback | Callback&lt;AccelerometerUncalibratedResponse> | 是 | Callback used to report the sensor data, which is  an AccelerometerUncalibratedResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.ACCELEROMETER_UNCALIBRATED, (data: sensor.AccelerometerUncalibratedResponse) => {
    console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
    console.info('Succeeded in invoking once. X-coordinate bias: ' + data.biasX);
    console.info('Succeeded in invoking once. Y-coordinate bias: ' + data.biasY);
    console.info('Succeeded in invoking once. Z-coordinate bias: ' + data.biasZ);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.AMBIENT_LIGHT)

```TypeScript
function once(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>): void
```

Obtains data of the ambient light sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.AMBIENT_LIGHT | 是 | Sensor type. The value is fixed at SensorId.AMBIENT_LIGHT. |
| callback | Callback&lt;LightResponse> | 是 | Callback used to report the sensor data, which is a LightResponse  object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.AMBIENT_LIGHT, (data: sensor.LightResponse) => {
    console.info('Succeeded in invoking once. the ambient light intensity: ' + data.intensity);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.AMBIENT_TEMPERATURE)

```TypeScript
function once(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>): void
```

Obtains data of the temperature sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.AMBIENT_TEMPERATURE | 是 | Sensor type. The value is fixed at SensorId.AMBIENT_TEMPERATURE. |
| callback | Callback&lt;AmbientTemperatureResponse> | 是 | Callback used to report the sensor data, which is an  AmbientTemperatureResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.AMBIENT_TEMPERATURE, (data: sensor.AmbientTemperatureResponse) => {
    console.info('Succeeded in invoking once. Temperature: ' + data.temperature);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.BAROMETER)

```TypeScript
function once(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>): void
```

Obtains data of the barometer sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.BAROMETER | 是 | Sensor type. The value is fixed at SensorId.BAROMETER. |
| callback | Callback&lt;BarometerResponse> | 是 | Callback used to report the sensor data, which is a  BarometerResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.BAROMETER, (data: sensor.BarometerResponse) => {
    console.info('Succeeded in invoking once. Atmospheric pressure: ' + data.pressure);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.GRAVITY)

```TypeScript
function once(type: SensorId.GRAVITY, callback: Callback<GravityResponse>): void
```

Obtains data of the gravity sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.GRAVITY | 是 | Sensor type. The value is fixed at SensorId.GRAVITY. |
| callback | Callback&lt;GravityResponse> | 是 | Callback used to report the sensor data, which is a  GravityResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.GRAVITY, (data: sensor.GravityResponse) => {
    console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.GYROSCOPE)

```TypeScript
function once(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>): void
```

Obtains data of the gyroscope sensor once.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GYROSCOPE

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.GYROSCOPE | 是 | Sensor type. The value is fixed at SensorId.GYROSCOPE. |
| callback | Callback&lt;GyroscopeResponse> | 是 | Callback used to report the sensor data, which is a  GyroscopeResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.GYROSCOPE, (data: sensor.GyroscopeResponse) => {
    console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.GYROSCOPE_UNCALIBRATED)

```TypeScript
function once(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>): void
```

Obtains data of the uncalibrated gyroscope sensor once.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GYROSCOPE

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.GYROSCOPE_UNCALIBRATED | 是 | Sensor type. The value is fixed at  SensorId.GYROSCOPE_UNCALIBRATED. |
| callback | Callback&lt;GyroscopeUncalibratedResponse> | 是 | Callback used to report the sensor data, which is a  GyroscopeUncalibratedResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.GYROSCOPE_UNCALIBRATED, (data: sensor.GyroscopeUncalibratedResponse) => {
    console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
    console.info('Succeeded in invoking once. X-coordinate bias: ' + data.biasX);
    console.info('Succeeded in invoking once. Y-coordinate bias: ' + data.biasY);
    console.info('Succeeded in invoking once. Z-coordinate bias: ' + data.biasZ);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.HALL)

```TypeScript
function once(type: SensorId.HALL, callback: Callback<HallResponse>): void
```

Obtains data of the Hall effect sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.HALL | 是 | Sensor type. The value is fixed at SensorId.HALL. |
| callback | Callback&lt;HallResponse> | 是 | Callback used to report the sensor data, which is a HallResponse  object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.HALL, (data: sensor.HallResponse) => {
    console.info('Succeeded in invoking once. Status: ' + data.status);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.HEART_RATE)

```TypeScript
function once(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>): void
```

Obtains data of the heart rate sensor once.

**起始版本：** 9

**需要权限：** 

 ohos.permission.READ_HEALTH_DATA

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.HEART_RATE | 是 | Sensor type. The value is fixed at SensorId.HEART_RATE. |
| callback | Callback&lt;HeartRateResponse> | 是 | Callback used to report the sensor data, which is a  HeartRateResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.HEART_RATE, (data: sensor.HeartRateResponse) => {
    console.info('Succeeded in invoking once. Heart rate: ' + data.heartRate);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.HUMIDITY)

```TypeScript
function once(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>): void
```

Obtains data of the humidity sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.HUMIDITY | 是 | Sensor type. The value is fixed at SensorId.HUMIDITY. |
| callback | Callback&lt;HumidityResponse> | 是 | Callback used to report the sensor data, which is a  HumidityResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.HUMIDITY, (data: sensor.HumidityResponse) => {
    console.info('Succeeded in invoking once. Humidity: ' + data.humidity);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.LINEAR_ACCELEROMETER)

```TypeScript
function once(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>): void
```

Obtains data of the linear acceleration sensor once.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.LINEAR_ACCELEROMETER | 是 | Sensor type. The value is fixed at  SensorId.LINEAR_ACCELEROMETER. |
| callback | Callback&lt;LinearAccelerometerResponse> | 是 | Callback used to report the sensor data, which is a  LinearAccelerometerResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.LINEAR_ACCELEROMETER, (data: sensor.LinearAccelerometerResponse) => {
    console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.MAGNETIC_FIELD)

```TypeScript
function once(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>): void
```

Obtains data of the magnetic field sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.MAGNETIC_FIELD | 是 | Sensor type. The value is fixed at SensorId.MAGNETIC_FIELD. |
| callback | Callback&lt;MagneticFieldResponse> | 是 | Callback used to report the sensor data, which is a  MagneticFieldResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.MAGNETIC_FIELD, (data: sensor.MagneticFieldResponse) => {
    console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.MAGNETIC_FIELD_UNCALIBRATED)

```TypeScript
function once(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>): void
```

Obtains data of the uncalibrated magnetic field sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.MAGNETIC_FIELD_UNCALIBRATED | 是 | Sensor type. The value is fixed at  SensorId.MAGNETIC_FIELD_UNCALIBRATED. |
| callback | Callback&lt;MagneticFieldUncalibratedResponse> | 是 | Callback used to report the sensor data, which is  a MagneticFieldUncalibratedResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.MAGNETIC_FIELD_UNCALIBRATED, (data: sensor.MagneticFieldUncalibratedResponse) => {
    console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
    console.info('Succeeded in invoking once. X-coordinate bias: ' + data.biasX);
    console.info('Succeeded in invoking once. Y-coordinate bias: ' + data.biasY);
    console.info('Succeeded in invoking once. Z-coordinate bias: ' + data.biasZ);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.ORIENTATION)

```TypeScript
function once(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>): void
```

Obtains data of the orientation sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.ORIENTATION | 是 | Sensor type. The value is fixed at SensorId.ORIENTATION. |
| callback | Callback&lt;OrientationResponse> | 是 | Callback used to report the sensor data, which is a  OrientationResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.ORIENTATION, (data: sensor.OrientationResponse) => {
    console.info('Succeeded in the device rotating at an angle around the X axis: ' + data.beta);
    console.info('Succeeded in the device rotating at an angle around the Y axis: ' + data.gamma);
    console.info('Succeeded in the device rotating at an angle around the Z axis: ' + data.alpha);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.PEDOMETER)

```TypeScript
function once(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>): void
```

Obtains data of the pedometer sensor once. The step counter sensor's data reporting is subject to some delay, and the delay is determined by specific product implementations.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACTIVITY_MOTION

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.PEDOMETER | 是 | Sensor type. The value is fixed at SensorId.PEDOMETER. |
| callback | Callback&lt;PedometerResponse> | 是 | Callback used to report the sensor data, which is a  PedometerResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.PEDOMETER, (data: sensor.PedometerResponse) => {
    console.info('Succeeded in invoking once. Step count: ' + data.steps);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.PEDOMETER_DETECTION)

```TypeScript
function once(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>): void
```

Obtains data of the pedometer sensor once.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACTIVITY_MOTION

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.PEDOMETER_DETECTION | 是 | Sensor type. The value is fixed at SensorId.PEDOMETER_DETECTION. |
| callback | Callback&lt;PedometerDetectionResponse> | 是 | Callback used to report the sensor data, which is a  PedometerDetectionResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.PEDOMETER_DETECTION, (data: sensor.PedometerDetectionResponse) => {
    console.info('Succeeded in invoking once. Scalar data: ' + data.scalar);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.PROXIMITY)

```TypeScript
function once(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>): void
```

Obtains data of the proximity sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.PROXIMITY | 是 | Sensor type. The value is fixed at SensorId.PROXIMITY. |
| callback | Callback&lt;ProximityResponse> | 是 | Callback used to report the sensor data, which is a  ProximityResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.PROXIMITY, (data: sensor.ProximityResponse) => {
    console.info('Succeeded in invoking once. Distance: ' + data.distance);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.ROTATION_VECTOR)

```TypeScript
function once(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>): void
```

Obtains data of the rotation vector sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.ROTATION_VECTOR | 是 | Sensor type. The value is fixed at SensorId.ROTATION_VECTOR. |
| callback | Callback&lt;RotationVectorResponse> | 是 | Callback used to report the sensor data, which is a  RotationVectorResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.ROTATION_VECTOR, (data: sensor.RotationVectorResponse) => {
    console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
    console.info('Succeeded in invoking once. Scalar quantity: ' + data.w);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.SIGNIFICANT_MOTION)

```TypeScript
function once(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>): void
```

Obtains the significant motion sensor data once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.SIGNIFICANT_MOTION | 是 | Sensor type. The value is fixed at SensorId.SIGNIFICANT_MOTION. |
| callback | Callback&lt;SignificantMotionResponse> | 是 | Callback used to report the sensor data, which is a  SignificantMotionResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.SIGNIFICANT_MOTION, (data: sensor.SignificantMotionResponse) => {
    console.info('Succeeded in invoking once. Scalar data: ' + data.scalar);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorId.WEAR_DETECTION)

```TypeScript
function once(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>): void
```

Obtains data of the wear detection sensor once.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.WEAR_DETECTION | 是 | Sensor type. The value is fixed at SensorId.WEAR_DETECTION. |
| callback | Callback&lt;WearDetectionResponse> | 是 | Callback used to report the sensor data, which is a  WearDetectionResponse object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.once(sensor.SensorId.WEAR_DETECTION, (data: sensor.WearDetectionResponse) => {
    console.info('Succeeded in invoking once. Wear status: ' + data.value);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);
}

```

## once(SensorType.SENSOR_TYPE_ID_ACCELEROMETER)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>): void
```

Subscribes to only one data change of the acceleration sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_ACCELEROMETER | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_ACCELEROMETER. |
| callback | Callback&lt;AccelerometerResponse> | 是 | One-shot callback used to return the acceleration sensor  data. The reported data type in the callback is AccelerometerResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_ACCELEROMETER, (data: sensor.AccelerometerResponse) => {
  console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
});

```

## once(SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>): void
```

Subscribes to only one data change of the uncalibrated acceleration sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED. |
| callback | Callback&lt;AccelerometerUncalibratedResponse> | 是 | One-shot callback used to return the uncalibrated  acceleration sensor data. The reported data type in the callback is AccelerometerUncalibratedResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, (data: sensor.AccelerometerUncalibratedResponse) => {
  console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
  console.info('Succeeded in invoking once. X-coordinate bias: ' + data.biasX);
  console.info('Succeeded in invoking once. Y-coordinate bias: ' + data.biasY);
  console.info('Succeeded in invoking once. Z-coordinate bias: ' + data.biasZ);
});

```

## once(SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>): void
```

Subscribes to only one data change of the ambient light sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_AMBIENT_LIGHT. |
| callback | Callback&lt;LightResponse> | 是 | One-shot callback used to return the ambient light sensor data. The  reported data type in the callback is LightResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, (data: sensor.LightResponse) => {
  console.info('Succeeded in invoking once. invoking once. Illumination: ' + data.intensity);
});

```

## once(SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>): void
```

Subscribes to only one data change of the ambient temperature sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_AMBIENT_TEMPERATURE. |
| callback | Callback&lt;AmbientTemperatureResponse> | 是 | One-shot callback used to return the ambient temperature  sensor data. The reported data type in the callback is AmbientTemperatureResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, (data: sensor.AmbientTemperatureResponse) => {
  console.info('Succeeded in invoking once. Temperature: ' + data.temperature);
});

```

## once(SensorType.SENSOR_TYPE_ID_BAROMETER)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>): void
```

Subscribes to only one data change of the barometer sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_BAROMETER | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_BAROMETER. |
| callback | Callback&lt;BarometerResponse> | 是 | One-shot callback used to return the barometer sensor data. The  reported data type in the callback is BarometerResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_BAROMETER, (data: sensor.BarometerResponse) => {
  console.info('Succeeded in invoking once. Atmospheric pressure: ' + data.pressure);
});

```

## once(SensorType.SENSOR_TYPE_ID_GRAVITY)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: Callback<GravityResponse>): void
```

Subscribes to only one data change of the gravity sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_GRAVITY | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_GRAVITY. |
| callback | Callback&lt;GravityResponse> | 是 | One-shot callback used to return the gravity sensor data. The  reported data type in the callback is GravityResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_GRAVITY, (data: sensor.GravityResponse) => {
  console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
  });

```

## once(SensorType.SENSOR_TYPE_ID_GYROSCOPE)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>): void
```

Subscribes to only one data change of the gyroscope sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**需要权限：** 

 ohos.permission.GYROSCOPE

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_GYROSCOPE | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_GYROSCOPE. |
| callback | Callback&lt;GyroscopeResponse> | 是 | One-shot callback used to return the gyroscope sensor data. The  reported data type in the callback is GyroscopeResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_GYROSCOPE, (data: sensor.GyroscopeResponse) => {
  console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
});

```

## once(SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>): void
```

Subscribes to only one data change of the uncalibrated gyroscope sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**需要权限：** 

 ohos.permission.GYROSCOPE

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED. |
| callback | Callback&lt;GyroscopeUncalibratedResponse> | 是 | One-shot callback used to return the uncalibrated  gyroscope sensor data. The reported data type in the callback is GyroscopeUncalibratedResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, (data: sensor.GyroscopeUncalibratedResponse) => {
    console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
    console.info('Succeeded in invoking once. X-coordinate bias: ' + data.biasX);
    console.info('Succeeded in invoking once. Y-coordinate bias: ' + data.biasY);
    console.info('Succeeded in invoking once. Z-coordinate bias: ' + data.biasZ);
});

```

## once(SensorType.SENSOR_TYPE_ID_HALL)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_HALL, callback: Callback<HallResponse>): void
```

Subscribes to only one data change of the Hall effect sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_HALL | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_HALL. |
| callback | Callback&lt;HallResponse> | 是 | One-shot callback used to return the Hall effect sensor data. The  reported data type in the callback is HallResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_HALL, (data: sensor.HallResponse) => {
  console.info('Succeeded in invoking once. Status: ' + data.status);
});

```

## once(SensorType.SENSOR_TYPE_ID_HEART_RATE)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>): void
```

Subscribes to only one data change of the heart rate sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**需要权限：** 

 ohos.permission.HEART_RATE

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_HEART_RATE | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_HEART_RATE. |
| callback | Callback&lt;HeartRateResponse> | 是 | One-shot callback used to return the heart rate sensor data. The  reported data type in the callback is HeartRateResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_HEART_RATE, (data: sensor.HeartRateResponse) => {
  console.info("Succeeded in invoking once. Heart rate: " + data.heartRate);
});

```

## once(SensorType.SENSOR_TYPE_ID_HUMIDITY)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: Callback<HumidityResponse>): void
```

Subscribes to only one data change of the humidity sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_HUMIDITY | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_HUMIDITY. |
| callback | Callback&lt;HumidityResponse> | 是 | One-shot callback used to return the humidity sensor data. The  reported data type in the callback is HumidityResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_HUMIDITY, (data: sensor.HumidityResponse) => {
  console.info('Succeeded in invoking once. Humidity: ' + data.humidity);
});

```

## once(SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: Callback<LinearAccelerometerResponse>): void
```

Subscribes to only one data change of the linear acceleration sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_LINEAR_ACCELERATION. |
| callback | Callback&lt;LinearAccelerometerResponse> | 是 | One-shot callback used to return the linear  acceleration sensor data. The reported data type in the callback is LinearAccelerometerResponse. |

## once(SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>): void
```

Subscribes to only one data change of the magnetic field sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_MAGNETIC_FIELD. |
| callback | Callback&lt;MagneticFieldResponse> | 是 | One-shot callback used to return the magnetic field sensor  data. The reported data type in the callback is MagneticFieldResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, (data: sensor.MagneticFieldResponse) => {
  console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
});

```

## once(SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>): void
```

Subscribes to only one data change of the uncalibrated magnetic field sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED | 是 | Type of the sensor to subscribe to, which  is SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED. |
| callback | Callback&lt;MagneticFieldUncalibratedResponse> | 是 | One-shot callback used to return the uncalibrated  magnetic field sensor data. The reported data type in the callback is MagneticFieldUncalibratedResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, (data: sensor.MagneticFieldUncalibratedResponse) => {
  console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
  console.info('Succeeded in invoking once. X-coordinate bias: ' + data.biasX);
  console.info('Succeeded in invoking once. Y-coordinate bias: ' + data.biasY);
  console.info('Succeeded in invoking once. Z-coordinate bias: ' + data.biasZ);
});

```

## once(SensorType.SENSOR_TYPE_ID_ORIENTATION)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>): void
```

Subscribes to only one data change of the orientation sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_ORIENTATION | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_ORIENTATION. |
| callback | Callback&lt;OrientationResponse> | 是 | One-shot callback used to return the orientation sensor data.  The reported data type in the callback is OrientationResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, (data: sensor.OrientationResponse) => {
  console.info('Succeeded in invoking the device rotating at an angle around the X axis: ' + data.beta);
  console.info('Succeeded in invoking the device rotating at an angle around the Y axis: ' + data.gamma);
  console.info('Succeeded in invoking the device rotating at an angle around the Z axis: ' + data.alpha);
});

```

## once(SensorType.SENSOR_TYPE_ID_PEDOMETER)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>): void
```

Subscribes to only one data change of the pedometer sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**需要权限：** 

 ohos.permission.ACTIVITY_MOTION

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_PEDOMETER | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_PEDOMETER. |
| callback | Callback&lt;PedometerResponse> | 是 | One-shot callback used to return the pedometer sensor data. The  reported data type in the callback is PedometerResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_PEDOMETER, (data: sensor.PedometerResponse) => {
  console.info('Succeeded in invoking once. Steps: ' + data.steps);
});

```

## once(SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>): void
```

Subscribes to only one data change of the pedometer detection sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**需要权限：** 

 ohos.permission.ACTIVITY_MOTION

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_PEDOMETER_DETECTION. |
| callback | Callback&lt;PedometerDetectionResponse> | 是 | One-shot callback used to return the pedometer detection  sensor data. The reported data type in the callback is PedometerDetectionResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, (data: sensor.PedometerDetectionResponse) => {
  console.info('Succeeded in invoking once. Scalar data: ' + data.scalar);
});

```

## once(SensorType.SENSOR_TYPE_ID_PROXIMITY)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>): void
```

Subscribes to only one data change of the proximity sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_PROXIMITY | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_PROXIMITY. |
| callback | Callback&lt;ProximityResponse> | 是 | One-shot callback used to return the proximity sensor data. The  reported data type in the callback is ProximityResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_PROXIMITY, (data: sensor.ProximityResponse) => {
  console.info('Succeeded in invoking once. Distance: ' + data.distance);
}
);

```

## once(SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: Callback<RotationVectorResponse>): void
```

Subscribes to only one data change of the rotation vector sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_ROTATION_VECTOR. |
| callback | Callback&lt;RotationVectorResponse> | 是 | One-shot callback used to return the rotation vector sensor  data. The reported data type in the callback is RotationVectorResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, (data: sensor.RotationVectorResponse) => {
  console.info('Succeeded in invoking once. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking once. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking once. Z-coordinate component: ' + data.z);
  console.info('Succeeded in invoking once. Scalar quantity: ' + data.w);
});

```

## once(SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>): void
```

Subscribes to only one data change of the significant motion sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_SIGNIFICANT_MOTION. |
| callback | Callback&lt;SignificantMotionResponse> | 是 | One-shot callback used to return the significant motion  sensor data. The reported data type in the callback is SignificantMotionResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, (data: sensor.SignificantMotionResponse) => {
  console.info('Succeeded in invoking once. Scalar data: ' + data.scalar);
});

```

## once(SensorType.SENSOR_TYPE_ID_WEAR_DETECTION)

```TypeScript
function once(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>): void
```

Subscribes to only one data change of the wear detection sensor.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.once(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_WEAR_DETECTION | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_WEAR_DETECTION. |
| callback | Callback&lt;WearDetectionResponse> | 是 | One-shot callback used to return the wear detection sensor  data. The reported data type in the callback is WearDetectionResponse. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.once(sensor.SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, (data: sensor.WearDetectionResponse) => {
  console.info("Succeeded in invoking once. Wear status: " + data.value);
});

```

