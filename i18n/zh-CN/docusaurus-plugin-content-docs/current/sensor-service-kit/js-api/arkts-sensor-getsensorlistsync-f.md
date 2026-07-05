# getSensorListSync

## getSensorListSync

```TypeScript
function getSensorListSync(): Array<Sensor>
```

Obtains information about all sensors on the device. This API returns the result synchronously.

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.Sensor

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;Sensor> | List of sensor attributes. |

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
  let ret = sensor.getSensorListSync()
  for (let i = 0; i < ret.length; i++) {
    console.info('Succeeded in getting sensor: ' + JSON.stringify(ret[i]));
  }
} catch(error) {
    let e: BusinessError = error as BusinessError;
    console.error(`Failed to get singleSensor . Code: ${e.code}, message: ${e.message}`);
}

```

