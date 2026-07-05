# getDeviceAltitude

## getDeviceAltitude

```TypeScript
function getDeviceAltitude(seaPressure: double, currentPressure: double, callback: AsyncCallback<double>): void
```

Obtains the altitude based on the atmospheric pressure. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| seaPressure | double | 是 | Sea-level atmospheric pressure, in hPa. |
| currentPressure | double | 是 | Specified atmospheric pressure, in hPa. |
| callback | AsyncCallback&lt;double> | 是 | Callback used to return the altitude, in meters. |

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
  let seaPressure = 1013.2;
  let currentPressure = 1500.0;
  sensor.getDeviceAltitude(seaPressure, currentPressure, (err: BusinessError, data: number) => {
    if (err) {
      console.error(`Failed to get altitude. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in getting altitude: ' + data);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to get altitude. Code: ${e.code}, message: ${e.message}`);
}

```

## getDeviceAltitude

```TypeScript
function getDeviceAltitude(seaPressure: double, currentPressure: double): Promise<double>
```

Obtains the altitude based on the atmospheric pressure. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| seaPressure | double | 是 | Sea-level atmospheric pressure, in hPa. |
| currentPressure | double | 是 | Specified atmospheric pressure, in hPa. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;double> | Promise used to return the altitude, in meters. |

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
  let seaPressure = 1013.2;
  let currentPressure = 1500.0;
  const promise = sensor.getDeviceAltitude(seaPressure, currentPressure);
  promise.then((data: number) => {
    console.info('Succeeded in getting sensor_getDeviceAltitude_Promise', data);
  }, (err: BusinessError) => {
    console.error(`Failed to get altitude. Code: ${err.code}, message: ${err.message}`);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to get altitude. Code: ${e.code}, message: ${e.message}`);
}

```

