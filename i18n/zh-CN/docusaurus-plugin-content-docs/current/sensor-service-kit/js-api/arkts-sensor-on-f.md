# on

## on(SensorId.ACCELEROMETER)

```TypeScript
function on(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>,
    options?: Options): void
```

Subscribes to data of the acceleration sensor.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCELEROMETER

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.ACCELEROMETER | 是 | Sensor type. The value is fixed at SensorId.ACCELEROMETER. |
| callback | Callback&lt;AccelerometerResponse> | 是 | Callback used to report the sensor data, which is an  AccelerometerResponse object. |
| options | Options | 否 |  |

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
  // 订阅加速度传感器数据
  sensor.on(sensor.SensorId.ACCELEROMETER, (data: sensor.AccelerometerResponse) => {
    // 输出X、Y、Z坐标分量
    console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.ACCELEROMETER);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.ACCELEROMETER_UNCALIBRATED)

```TypeScript
function on(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>,
    options?: Options): void
```

Subscribes to data of the uncalibrated acceleration sensor.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.ACCELEROMETER_UNCALIBRATED | 是 | Sensor type. The value is fixed at  SensorId.ACCELEROMETER_UNCALIBRATED. |
| callback | Callback&lt;AccelerometerUncalibratedResponse> | 是 | Callback used to report the sensor data, which is  an AccelerometerUncalibratedResponse object. |
| options | Options | 否 |  |

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
  // 订阅未校准加速度传感器数据
  sensor.on(sensor.SensorId.ACCELEROMETER_UNCALIBRATED, (data: sensor.AccelerometerUncalibratedResponse) => {
    // 输出X、Y、Z坐标分量和偏移值
    console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
    console.info('Succeeded in invoking on. X-coordinate bias: ' + data.biasX);
    console.info('Succeeded in invoking on. Y-coordinate bias: ' + data.biasY);
    console.info('Succeeded in invoking on. Z-coordinate bias: ' + data.biasZ);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.ACCELEROMETER_UNCALIBRATED);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.AMBIENT_LIGHT)

```TypeScript
function on(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options): void
```

Subscribes to data of the ambient light sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.AMBIENT_LIGHT | 是 | Sensor type. The value is fixed at SensorId.AMBIENT_LIGHT. |
| callback | Callback&lt;LightResponse> | 是 | Callback used to report the sensor data, which is a LightResponse  object. |
| options | Options | 否 |  |

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
  // 订阅环境光传感器数据
  sensor.on(sensor.SensorId.AMBIENT_LIGHT, (data: sensor.LightResponse) => {
    // 输出环境光强度
    console.info('Succeeded in getting the ambient light intensity: ' + data.intensity);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.AMBIENT_LIGHT);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.AMBIENT_TEMPERATURE)

```TypeScript
function on(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>,
    options?: Options): void
```

Subscribes to data of the ambient temperature sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.AMBIENT_TEMPERATURE | 是 | Sensor type. The value is fixed at SensorId.AMBIENT_TEMPERATURE. |
| callback | Callback&lt;AmbientTemperatureResponse> | 是 | Callback used to report the sensor data, which is an  AmbientTemperatureResponse object. |
| options | Options | 否 |  |

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
  // 订阅温度传感器数据
  sensor.on(sensor.SensorId.AMBIENT_TEMPERATURE, (data: sensor.AmbientTemperatureResponse) => {
    // 输出温度值
    console.info('Succeeded in invoking on. Temperature: ' + data.temperature);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.AMBIENT_TEMPERATURE);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.BAROMETER)

```TypeScript
function on(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>, options?: Options): void
```

Subscribes to data of the barometer sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.BAROMETER | 是 | Sensor type. The value is fixed at SensorId.BAROMETER. |
| callback | Callback&lt;BarometerResponse> | 是 | Callback used to report the sensor data, which is a  BarometerResponse object. |
| options | Options | 否 |  |

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
  // 订阅气压计传感器数据
  sensor.on(sensor.SensorId.BAROMETER, (data: sensor.BarometerResponse) => {
    // 输出气压值
    console.info('Succeeded in invoking on. Atmospheric pressure: ' + data.pressure);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.BAROMETER);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.GRAVITY)

```TypeScript
function on(type: SensorId.GRAVITY, callback: Callback<GravityResponse>,
    options?: Options): void
```

Subscribes to data of the gravity sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.GRAVITY | 是 | Sensor type. The value is fixed at SensorId.GRAVITY. |
| callback | Callback&lt;GravityResponse> | 是 | Callback used to report the sensor data, which is a  GravityResponse object. |
| options | Options | 否 |  |

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
  // 订阅重力传感器数据
  sensor.on(sensor.SensorId.GRAVITY, (data: sensor.GravityResponse) => {
    // 输出X、Y、Z坐标分量
    console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.GRAVITY);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.GYROSCOPE)

```TypeScript
function on(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>,
    options?: Options): void
```

Subscribes to data of the gyroscope sensor.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GYROSCOPE

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.GYROSCOPE | 是 | Sensor type. The value is fixed at SensorId.GYROSCOPE. |
| callback | Callback&lt;GyroscopeResponse> | 是 | Callback used to report the sensor data, which is a  GyroscopeResponse object. |
| options | Options | 否 |  |

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
  // 订阅校准的陀螺仪传感器数据
  sensor.on(sensor.SensorId.GYROSCOPE, (data: sensor.GyroscopeResponse) => {
    // 输出X、Y、Z坐标分量
    console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.GYROSCOPE);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.GYROSCOPE_UNCALIBRATED)

```TypeScript
function on(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>,
    options?: Options): void
```

Subscribes to data of the uncalibrated gyroscope sensor.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GYROSCOPE

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.GYROSCOPE_UNCALIBRATED | 是 | Sensor type. The value is fixed at  SensorId.GYROSCOPE_UNCALIBRATED. |
| callback | Callback&lt;GyroscopeUncalibratedResponse> | 是 | Callback used to report the sensor data, which is a  GyroscopeUncalibratedResponse object. |
| options | Options | 否 |  |

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
  // 订阅未校准陀螺仪传感器数据
  sensor.on(sensor.SensorId.GYROSCOPE_UNCALIBRATED, (data: sensor.GyroscopeUncalibratedResponse) => {
    // 输出X、Y、Z坐标分量和偏移值
    console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
    console.info('Succeeded in invoking on. X-coordinate bias: ' + data.biasX);
    console.info('Succeeded in invoking on. Y-coordinate bias: ' + data.biasY);
    console.info('Succeeded in invoking on. Z-coordinate bias: ' + data.biasZ);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.GYROSCOPE_UNCALIBRATED);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}


```

## on(SensorId.HALL)

```TypeScript
function on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options): void
```

Subscribes to data of the Hall effect sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.HALL | 是 | Sensor type. The value is fixed at SensorId.HALL. |
| callback | Callback&lt;HallResponse> | 是 | Callback used to report the sensor data, which is a HallResponse  object. |
| options | Options | 否 |  |

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
  // 订阅霍尔传感器数据
  sensor.on(sensor.SensorId.HALL, (data: sensor.HallResponse) => {
    // 输出霍尔状态
    console.info('Succeeded in invoking on. Hall status: ' + data.status);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.HALL);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}


```

## on(SensorId.HEART_RATE)

```TypeScript
function on(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>,
    options?: Options): void
```

Subscribes to data of the heart rate sensor.

**起始版本：** 9

**需要权限：** 

 ohos.permission.READ_HEALTH_DATA

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.HEART_RATE | 是 | Sensor type. The value is fixed at SensorId.HEART_RATE. |
| callback | Callback&lt;HeartRateResponse> | 是 | Callback used to report the sensor data, which is a  HeartRateResponse object. |
| options | Options | 否 |  |

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
  // 订阅心率传感器数据
  sensor.on(sensor.SensorId.HEART_RATE, (data: sensor.HeartRateResponse) => {
    // 输出心率值
    console.info('Succeeded in invoking on. Heart rate: ' + data.heartRate);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.HEART_RATE);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.HUMIDITY)

```TypeScript
function on(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>,
    options?: Options): void
```

Subscribes to data of the humidity sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.HUMIDITY | 是 | Sensor type. The value is fixed at SensorId.HUMIDITY. |
| callback | Callback&lt;HumidityResponse> | 是 | Callback used to report the sensor data, which is a  HumidityResponse object. |
| options | Options | 否 |  |

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
  // 订阅湿度传感器数据
  sensor.on(sensor.SensorId.HUMIDITY, (data: sensor.HumidityResponse) => {
    // 输出湿度值
    console.info('Succeeded in invoking on. Humidity: ' + data.humidity);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.HUMIDITY);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.LINEAR_ACCELEROMETER)

```TypeScript
function on(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>,
    options?: Options): void
```

Subscribes to data of the linear acceleration sensor.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.LINEAR_ACCELEROMETER | 是 | Sensor type. The value is fixed at  SensorId.LINEAR_ACCELEROMETER. |
| callback | Callback&lt;LinearAccelerometerResponse> | 是 | Callback used to report the sensor data, which is a  LinearAccelerometerResponse object. |
| options | Options | 否 |  |

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
  // 订阅线性加速度传感器数据
  sensor.on(sensor.SensorId.LINEAR_ACCELEROMETER, (data: sensor.LinearAccelerometerResponse) => {
    // 输出X、Y、Z坐标分量
    console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.LINEAR_ACCELEROMETER);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.MAGNETIC_FIELD)

```TypeScript
function on(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>,
    options?: Options): void
```

Subscribes to data of the magnetic field sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.MAGNETIC_FIELD | 是 | Sensor type. The value is fixed at SensorId.MAGNETIC_FIELD. |
| callback | Callback&lt;MagneticFieldResponse> | 是 | Callback used to report the sensor data, which is a  MagneticFieldResponse object. |
| options | Options | 否 |  |

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
  // 订阅地磁传感器数据
  sensor.on(sensor.SensorId.MAGNETIC_FIELD, (data: sensor.MagneticFieldResponse) => {
    // 输出X、Y、Z坐标分量
    console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.MAGNETIC_FIELD);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.MAGNETIC_FIELD_UNCALIBRATED)

```TypeScript
function on(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>,
    options?: Options): void
```

Subscribes to data of the uncalibrated magnetic field sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.MAGNETIC_FIELD_UNCALIBRATED | 是 | Sensor type. The value is fixed at  SensorId.MAGNETIC_FIELD_UNCALIBRATED. |
| callback | Callback&lt;MagneticFieldUncalibratedResponse> | 是 | Callback used to report the sensor data, which is  a MagneticFieldUncalibratedResponse object. |
| options | Options | 否 |  |

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
  // 订阅未校准地磁传感器数据
  sensor.on(sensor.SensorId.MAGNETIC_FIELD_UNCALIBRATED, (data: sensor.MagneticFieldUncalibratedResponse) => {
    // 输出X、Y、Z坐标分量和偏移值
    console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
    console.info('Succeeded in invoking on. X-coordinate bias: ' + data.biasX);
    console.info('Succeeded in invoking on. Y-coordinate bias: ' + data.biasY);
    console.info('Succeeded in invoking on. Z-coordinate bias: ' + data.biasZ);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.MAGNETIC_FIELD_UNCALIBRATED);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.ORIENTATION)

```TypeScript
function on(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>,
    options?: Options): void
```

Subscribes to data of the orientation sensor. > **NOTE** > > Applications or services invoking this API can prompt users to use figure-8 calibration to improve the accuracy > of the direction sensor. The sensor has a theoretical error of ��5 degrees, but the specific precision may vary > depending on different driver implementations and algorithmic designs.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.ORIENTATION | 是 | Sensor type. The value is fixed at SensorId.ORIENTATION. |
| callback | Callback&lt;OrientationResponse> | 是 | Callback used to report the sensor data, which is a  OrientationResponse object. |
| options | Options | 否 |  |

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
  // 订阅方向传感器数据
  sensor.on(sensor.SensorId.ORIENTATION, (data: sensor.OrientationResponse) => {
    // 输出设备绕Z、X、Y轴旋转的角度
    console.info('Succeeded in the device rotating at an angle around the Z axis: ' + data.alpha);
    console.info('Succeeded in the device rotating at an angle around the X axis: ' + data.beta);
    console.info('Succeeded in the device rotating at an angle around the Y axis: ' + data.gamma);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.ORIENTATION);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.PEDOMETER)

```TypeScript
function on(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>, options?: Options): void
```

Subscribes to data of the pedometer sensor. The step counter sensor's data reporting is subject to some delay, and the delay is determined by specific product implementations.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACTIVITY_MOTION

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.PEDOMETER | 是 | Sensor type. The value is fixed at SensorId.PEDOMETER. |
| callback | Callback&lt;PedometerResponse> | 是 | Callback used to report the sensor data, which is a  PedometerResponse object. |
| options | Options | 否 |  |

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
  // 订阅计步器传感器数据
  sensor.on(sensor.SensorId.PEDOMETER, (data: sensor.PedometerResponse) => {
    // 输出步数
    console.info('Succeeded in invoking on. Step count: ' + data.steps);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.PEDOMETER);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.PEDOMETER_DETECTION)

```TypeScript
function on(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>,
    options?: Options): void
```

Subscribes to data of the pedometer detection sensor.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACTIVITY_MOTION

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.PEDOMETER_DETECTION | 是 | Sensor type. The value is fixed at SensorId.PEDOMETER_DETECTION. |
| callback | Callback&lt;PedometerDetectionResponse> | 是 | Callback used to report the sensor data, which is a  PedometerDetectionResponse object. |
| options | Options | 否 |  |

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
  // 订阅计步检测器传感器数据
  sensor.on(sensor.SensorId.PEDOMETER_DETECTION, (data: sensor.PedometerDetectionResponse) => {
    // 输出计步标量值
    console.info('Succeeded in invoking on. Pedometer scalar: ' + data.scalar);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.PEDOMETER_DETECTION);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.PROXIMITY)

```TypeScript
function on(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>, options?: Options): void
```

Subscribes to data of the proximity sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.PROXIMITY | 是 | Sensor type. The value is fixed at SensorId.PROXIMITY. |
| callback | Callback&lt;ProximityResponse> | 是 | Callback used to report the sensor data, which is a  ProximityResponse object. |
| options | Options | 否 |  |

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
  // 订阅接近光传感器数据
  sensor.on(sensor.SensorId.PROXIMITY, (data: sensor.ProximityResponse) => {
    // 输出距离值
    console.info('Succeeded in invoking on. Distance: ' + data.distance);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.PROXIMITY);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.ROTATION_VECTOR)

```TypeScript
function on(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>,
    options?: Options): void
```

Subscribes to data of the rotation vector sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.ROTATION_VECTOR | 是 | Sensor type. The value is fixed at SensorId.ROTATION_VECTOR. |
| callback | Callback&lt;RotationVectorResponse> | 是 | Callback used to report the sensor data, which is a  RotationVectorResponse object. |
| options | Options | 否 |  |

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
  sensor.on(sensor.SensorId.ROTATION_VECTOR, (data: sensor.RotationVectorResponse) => {
    console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
    console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
    console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
    console.info('Succeeded in invoking on. Scalar quantity: ' + data.w);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.ROTATION_VECTOR);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.SIGNIFICANT_MOTION)

```TypeScript
function on(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>,
    options?: Options): void
```

Subscribes to the significant motion sensor data.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.SIGNIFICANT_MOTION | 是 | Sensor type. The value is fixed at SensorId.SIGNIFICANT_MOTION. |
| callback | Callback&lt;SignificantMotionResponse> | 是 | Callback used to report the sensor data, which is a  SignificantMotionResponse object. |
| options | Options | 否 |  |

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
  sensor.on(sensor.SensorId.SIGNIFICANT_MOTION, (data: sensor.SignificantMotionResponse) => {
    console.info('Succeeded in invoking on. Scalar data: ' + data.scalar);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.SIGNIFICANT_MOTION);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.WEAR_DETECTION)

```TypeScript
function on(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>,
    options?: Options): void
```

Subscribes to data of the wear detection sensor.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.WEAR_DETECTION | 是 | Sensor type. The value is fixed at SensorId.WEAR_DETECTION. |
| callback | Callback&lt;WearDetectionResponse> | 是 | Callback used to report the sensor data, which is a  WearDetectionResponse object. |
| options | Options | 否 |  |

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
  sensor.on(sensor.SensorId.WEAR_DETECTION, (data: sensor.WearDetectionResponse) => {
    console.info('Succeeded in invoking on. Wear status: ' + data.value);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.WEAR_DETECTION);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorId.FUSION_PRESSURE)

```TypeScript
function on(type: SensorId.FUSION_PRESSURE, callback: Callback<FusionPressureResponse>,
    options?: Options): void
```

Subscribes to the fused pressure sensor data.

**起始版本：** 22

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorId.FUSION_PRESSURE | 是 | Sensor type. The value is fixed at SensorId.FUSION_PRESSURE. |
| callback | Callback&lt;FusionPressureResponse> | 是 | Callback used to report the sensor data, which is a  FusionPressureResponse object. |
| options | Options | 否 |  |

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
  // 订阅融合压力传感器数据
  sensor.on(sensor.SensorId.FUSION_PRESSURE, (data: sensor.FusionPressureResponse) => {
    // 输出融合压力值
    console.info('Succeeded in invoking on. fusionPressure: ' + data.fusionPressure);
  }, { interval: 100000000 });
  setTimeout(() => {
    sensor.off(sensor.SensorId.FUSION_PRESSURE);
  }, 500);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

## on(SensorType.SENSOR_TYPE_ID_ACCELEROMETER)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>,
    options?: Options): void
```

Subscribes to data changes of the acceleration sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_ACCELEROMETER | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_ACCELEROMETER. |
| callback | Callback&lt;AccelerometerResponse> | 是 | Callback used to return the acceleration sensor data. The  reported data type in the callback is AccelerometerResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ACCELEROMETER, (data: sensor.AccelerometerResponse) => {
  console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>,
    options?: Options): void
```

Subscribes to data changes of the uncalibrated acceleration sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED. |
| callback | Callback&lt;AccelerometerUncalibratedResponse> | 是 | Callback used to return the uncalibrated  acceleration sensor data. The reported data type in the callback is AccelerometerUncalibratedResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, (data: sensor.AccelerometerUncalibratedResponse) => {
  console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
  console.info('Succeeded in invoking on. X-coordinate bias: ' + data.biasX);
  console.info('Succeeded in invoking on. Y-coordinate bias: ' + data.biasY);
  console.info('Succeeded in invoking on. Z-coordinate bias: ' + data.biasZ);
},
  { interval: 100000000 }
);


```

## on(SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>,
    options?: Options): void
```

Subscribes to data changes of the ambient light sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_AMBIENT_LIGHT. |
| callback | Callback&lt;LightResponse> | 是 | Callback used to return the ambient light sensor data. The reported  data type in the callback is LightResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, (data: sensor.LightResponse) => {
  console.info('Succeeded in invoking on. Illumination: ' + data.intensity);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>,
    options?: Options): void
```

Subscribes to data changes of the ambient temperature sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_AMBIENT_TEMPERATURE. |
| callback | Callback&lt;AmbientTemperatureResponse> | 是 | Callback used to return the ambient temperature sensor  data. The reported data type in the callback is AmbientTemperatureResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, (data: sensor.AmbientTemperatureResponse) => {
  console.info('Succeeded in invoking on. Temperature: ' + data.temperature);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_BAROMETER)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>,
    options?: Options): void
```

Subscribes to data changes of the barometer sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_BAROMETER | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_BAROMETER. |
| callback | Callback&lt;BarometerResponse> | 是 | Callback used to return the barometer sensor data. The reported  data type in the callback is BarometerResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_BAROMETER, (data: sensor.BarometerResponse) => {
  console.info('Succeeded in invoking on. Atmospheric pressure: ' + data.pressure);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_GRAVITY)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: Callback<GravityResponse>,
    options?: Options): void
```

Subscribes to data changes of the gravity sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_GRAVITY | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_GRAVITY. |
| callback | Callback&lt;GravityResponse> | 是 | Callback used to return the gravity sensor data. The reported data  type in the callback is GravityResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_GRAVITY, (data: sensor.GravityResponse) => {
  console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_GYROSCOPE)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>,
    options?: Options): void
```

Subscribes to data changes of the gyroscope sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**需要权限：** 

 ohos.permission.GYROSCOPE

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_GYROSCOPE | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_GYROSCOPE. |
| callback | Callback&lt;GyroscopeResponse> | 是 | Callback used to return the gyroscope sensor data. The reported  data type in the callback is GyroscopeResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_GYROSCOPE, (data: sensor.GyroscopeResponse) => {
  console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>,
    options?: Options): void
```

Subscribes to data changes of the uncalibrated gyroscope sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**需要权限：** 

 ohos.permission.GYROSCOPE

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED. |
| callback | Callback&lt;GyroscopeUncalibratedResponse> | 是 | Callback used to return the uncalibrated gyroscope  sensor data. The reported data type in the callback is GyroscopeUncalibratedResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, (data: sensor.GyroscopeUncalibratedResponse) => {
  console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
  console.info('Succeeded in invoking on. X-coordinate bias: ' + data.biasX);
  console.info('Succeeded in invoking on. Y-coordinate bias: ' + data.biasY);
  console.info('Succeeded in invoking on. Z-coordinate bias: ' + data.biasZ);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_HALL)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_HALL, callback: Callback<HallResponse>,
    options?: Options): void
```

Subscribes to data changes of the Hall effect sensor. If this API is called multiple times for the same application , the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_HALL | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_HALL. |
| callback | Callback&lt;HallResponse> | 是 | Callback used to return the Hall effect sensor data. The reported data  type in the callback is HallResponse. |
| options | Options | 否 | List of optional parameters. The default value is 200,000,000 ns. This parameter is  used to set the data reporting frequency when Hall effect events are frequently triggered. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, (data: sensor.HallResponse) => {
  console.info('Succeeded in invoking on. Status: ' + data.status);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_HEART_RATE)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>,
    options?: Options): void
```

Subscribes to data changes of the heart rate sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**需要权限：** 

 ohos.permission.HEALTH_DATA

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_HEART_RATE | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_HEART_RATE. |
| callback | Callback&lt;HeartRateResponse> | 是 | Callback used to return the heart rate sensor data. The reported  data type in the callback is HeartRateResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

## on(SensorType.SENSOR_TYPE_ID_HUMIDITY)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: Callback<HumidityResponse>,
    options?: Options): void
```

Subscribes to data changes of the humidity sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_HUMIDITY | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_HUMIDITY. |
| callback | Callback&lt;HumidityResponse> | 是 | Callback used to return the humidity sensor data. The reported  data type in the callback is HumidityResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HUMIDITY, (data: sensor.HumidityResponse) => {
  console.info('Succeeded in invoking on. Humidity: ' + data.humidity);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: Callback<LinearAccelerometerResponse>,
    options?: Options): void
```

Subscribes to data changes of the linear acceleration sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**需要权限：** 

 ohos.permission.ACCELEROMETER

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_LINEAR_ACCELERATION. |
| callback | Callback&lt;LinearAccelerometerResponse> | 是 | Callback used to return the linear acceleration sensor  data. The reported data type in the callback is LinearAccelerometerResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

## on(SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>,
    options?: Options): void
```

Subscribes to data changes of the magnetic field sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_MAGNETIC_FIELD. |
| callback | Callback&lt;MagneticFieldResponse> | 是 | Callback used to return the magnetic field sensor data. The  reported data type in the callback is MagneticFieldResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, (data: sensor.MagneticFieldResponse) => {
  console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>,
    options?: Options): void
```

Subscribes to data changes of the uncalibrated magnetic field sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED | 是 | Type of the sensor to subscribe to, which  is SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED. |
| callback | Callback&lt;MagneticFieldUncalibratedResponse> | 是 | Callback used to return the uncalibrated magnetic  field sensor data. The reported data type in the callback is MagneticFieldUncalibratedResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, (data: sensor.MagneticFieldUncalibratedResponse) => {
  console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
  console.info('Succeeded in invoking on. X-coordinate bias: ' + data.biasX);
  console.info('Succeeded in invoking on. Y-coordinate bias: ' + data.biasY);
  console.info('Succeeded in invoking on. Z-coordinate bias: ' + data.biasZ);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_ORIENTATION)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>,
    options?: Options): void
```

Subscribes to data changes of the orientation sensor. If this API is called multiple times for the same application , the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_ORIENTATION | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_ORIENTATION. |
| callback | Callback&lt;OrientationResponse> | 是 | Callback used to return the orientation sensor data. The  reported data type in the callback is OrientationResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, (data: sensor.OrientationResponse) => {
  console.info('Succeeded in the device rotating at an angle around the X axis: ' + data.beta);
  console.info('Succeeded in the device rotating at an angle around the Y axis: ' + data.gamma);
  console.info('Succeeded in the device rotating at an angle around the Z axis: ' + data.alpha);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_PEDOMETER)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>,
    options?: Options): void
```

Subscribes to data changes of the pedometer sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**需要权限：** 

 ohos.permission.ACTIVITY_MOTION

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_PEDOMETER | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_PEDOMETER. |
| callback | Callback&lt;PedometerResponse> | 是 | Callback used to return the pedometer sensor data. The reported  data type in the callback is PedometerResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_PEDOMETER, (data: sensor.PedometerResponse) => {
  console.info('Succeeded in invoking on. Steps: ' + data.steps);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>,
    options?: Options): void
```

Subscribes to data changes of the pedometer detection sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**需要权限：** 

 ohos.permission.ACTIVITY_MOTION

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_PEDOMETER_DETECTION. |
| callback | Callback&lt;PedometerDetectionResponse> | 是 | Callback used to return the pedometer detection sensor  data. The reported data type in the callback is PedometerDetectionResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, (data: sensor.PedometerDetectionResponse) => {
  console.info('Succeeded in invoking on. Scalar data: ' + data.scalar);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_PROXIMITY)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>,
    options?: Options): void
```

Subscribes to data changes of the proximity sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_PROXIMITY | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_PROXIMITY. |
| callback | Callback&lt;ProximityResponse> | 是 | Callback used to return the proximity sensor data. The reported  data type in the callback is ProximityResponse. |
| options | Options | 否 | List of optional parameters. The default value is 200,000,000 ns. This parameter is  used to set the data reporting frequency when proximity sensor events are frequently triggered. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_PROXIMITY, (data: sensor.ProximityResponse) => {
  console.info('Succeeded in invoking on. Distance: ' + data.distance);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: Callback<RotationVectorResponse>,
    options?: Options): void
```

Subscribes to data changes of the rotation vector sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_ROTATION_VECTOR. |
| callback | Callback&lt;RotationVectorResponse> | 是 | Callback used to return the rotation vector sensor data. The  reported data type in the callback is RotationVectorResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, (data: sensor.RotationVectorResponse) => {
  console.info('Succeeded in invoking on. X-coordinate component: ' + data.x);
  console.info('Succeeded in invoking on. Y-coordinate component: ' + data.y);
  console.info('Succeeded in invoking on. Z-coordinate component: ' + data.z);
  console.info('Succeeded in invoking on. Scalar quantity: ' + data.w);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>,
    options?: Options): void
```

Subscribes to data changes of the significant motion sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_SIGNIFICANT_MOTION. |
| callback | Callback&lt;SignificantMotionResponse> | 是 | Callback used to return the significant motion sensor  data. The reported data type in the callback is SignificantMotionResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, (data: sensor.SignificantMotionResponse) => {
  console.info('Succeeded in invoking on. Scalar data: ' + data.scalar);
},
  { interval: 100000000 }
);

```

## on(SensorType.SENSOR_TYPE_ID_WEAR_DETECTION)

```TypeScript
function on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>,
    options?: Options): void
```

Subscribes to data changes of the wear detection sensor. If this API is called multiple times for the same application, the last call takes effect.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.on(type:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SensorType.SENSOR_TYPE_ID_WEAR_DETECTION | 是 | Type of the sensor to subscribe to, which is  SENSOR_TYPE_ID_WEAR_DETECTION. |
| callback | Callback&lt;WearDetectionResponse> | 是 | Callback used to return the wear detection sensor data. The  reported data type in the callback is WearDetectionResponse. |
| options | Options | 否 | List of optional parameters. This parameter is used to set the data reporting  frequency. The default value is 200,000,000 ns. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';

sensor.on(sensor.SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, (data: sensor.WearDetectionResponse) => {
  console.info('Succeeded in invoking on. Wear status: ' + data.value);
},
  { interval: 100000000 }
);

```

## on('sensorStatusChange')

```TypeScript
function on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>): void
```

Enables listening for sensor status changes. This API asynchronously returns the result through a callback.

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sensorStatusChange' | 是 | Event type. The value sensorStatusChange indicates the sensor status  change event. |
| callback | Callback&lt;SensorStatusEvent> | 是 | Callback used to return the sensor status change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14500101 | Service exception. Possible causes: 1. Sensor hdf service exception;  2. Sensor service ipc exception;3. Sensor data channel exception. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  sensor.on('sensorStatusChange', (data: sensor.SensorStatusEvent) => {
    console.info('sensorStatusChange : ' + JSON.stringify(data));
  });
  setTimeout(() => {
    sensor.off('sensorStatusChange');
  }, 5000);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
}

```

