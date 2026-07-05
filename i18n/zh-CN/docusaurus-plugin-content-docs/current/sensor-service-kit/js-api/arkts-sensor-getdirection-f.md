# getDirection

## getDirection

```TypeScript
function getDirection(rotationMatrix: Array<number>, callback: AsyncCallback<Array<number>>): void
```

Obtains the device direction based on the rotation matrix. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.getOrientation(rotationMatrix:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rotationMatrix | Array&lt;number> | 是 | Rotation matrix. |
| callback | AsyncCallback&lt;Array&lt;number>> | 是 | Callback used to return the rotation angle around the z, x, and  y axes, in degrees. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

sensor.getDirection([1, 0, 0, 0, 1, 0, 0, 0, 1], (err: BusinessError, data: Array<number>) => {
  if (err) {
    console.error(`Failed to register data. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info("Succeeded in getting getDirection interface get data: " + data);
  for (let i = 1; i < data.length; i++) {
    console.info("Succeeded in getting sensor_getDirection_callback" + data[i]);
  }
})

```

## getDirection

```TypeScript
function getDirection(rotationMatrix: Array<number>): Promise<Array<number>>
```

Obtains the device direction based on the rotation matrix. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.getOrientation(rotationMatrix:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rotationMatrix | Array&lt;number> | 是 | Rotation matrix. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;number>> | Promise used to return the rotation angle around the z, x, and y axes, in  degrees. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

const promise = sensor.getDirection([1, 0, 0, 0, 1, 0, 0, 0, 1]);
promise.then((data: Array<number>) => {
  console.info('Succeeded in getting sensor_getAltitude_Promise', data);
  for (let i = 1; i < data.length; i++) {
    console.info("Succeeded in getting sensor_getDirection_promise" + data[i]);
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to get promise.`);
})

```

