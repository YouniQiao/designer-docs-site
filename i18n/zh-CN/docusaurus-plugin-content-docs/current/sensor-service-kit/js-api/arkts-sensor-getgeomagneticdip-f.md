# getGeomagneticDip

## getGeomagneticDip

```TypeScript
function getGeomagneticDip(inclinationMatrix: Array<number>, callback: AsyncCallback<number>): void
```

Obtains the magnetic dip based on the inclination matrix. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.getInclination(inclinationMatrix:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inclinationMatrix | Array&lt;number> | 是 | Inclination matrix. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the magnetic dip, in radians. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

sensor.getGeomagneticDip([1, 0, 0, 0, 1, 0, 0, 0, 1], (err: BusinessError, data: number) => {
  if (err) {
    console.error(`Failed to register data. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info("Succeeded in getting getGeomagneticDip interface get data: " + data);
})

```

## getGeomagneticDip

```TypeScript
function getGeomagneticDip(inclinationMatrix: Array<number>): Promise<number>
```

Obtains the magnetic dip based on the inclination matrix. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.getInclination(inclinationMatrix:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inclinationMatrix | Array&lt;number> | 是 | Inclination matrix. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the magnetic dip, in radians. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

const promise = sensor.getGeomagneticDip([1, 0, 0, 0, 1, 0, 0, 0, 1]);
promise.then((data: number) => {
  console.info('Succeeded in get GeomagneticDip_promise', data);
}).catch((err: BusinessError) => {
  console.error(`Failed to operate.`);
})

```

