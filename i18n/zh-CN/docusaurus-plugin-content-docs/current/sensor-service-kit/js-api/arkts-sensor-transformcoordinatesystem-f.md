# transformCoordinateSystem

## transformCoordinateSystem

```TypeScript
function transformCoordinateSystem(inRotationVector: Array<number>, coordinates: CoordinatesOptions,
    callback: AsyncCallback<Array<number>>): void
```

Rotates a rotation vector so that it can represent the coordinate system in different ways. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.transformRotationMatrix(inRotationVector:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inRotationVector | Array&lt;number> | 是 | Rotation vector. |
| coordinates | CoordinatesOptions | 是 | Direction of the coordinate system. |
| callback | AsyncCallback&lt;Array&lt;number>> | 是 | Callback used to return the rotation vector after being rotated. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

sensor.transformCoordinateSystem([1, 0, 0, 0, 1, 0, 0, 0, 1], { x: 2, y: 3 }, 
                                 (err: BusinessError, data: Array<number>) => {
  if (err) {
    console.error(`Failed to operate. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info("Succeeded in starting Operation. Data obtained: " + data);
  for (let i = 0; i < data.length; i++) {
    console.info("Succeeded in getting transformCoordinateSystem data[ " + i + "] = " + data[i]);
  }
})

```

## transformCoordinateSystem

```TypeScript
function transformCoordinateSystem(inRotationVector: Array<number>, coordinates: CoordinatesOptions): Promise<Array<number>>
```

Rotates a rotation vector so that it can represent the coordinate system in different ways. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sensor.transformRotationMatrix(inRotationVector:

**系统能力：** SystemCapability.Sensors.Sensor

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inRotationVector | Array&lt;number> | 是 | Rotation vector. |
| coordinates | CoordinatesOptions | 是 | Direction of the coordinate system. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;number>> | Promise used to return the rotation vector after being rotated. |

**示例：**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

const promise = sensor.transformCoordinateSystem([1, 0, 0, 0, 1, 0, 0, 0, 1], { x: 2, y: 3 });
promise.then((data: Array<number>) => {
  console.info("Succeeded in starting Operation");
  for (let i = 0; i < data.length; i++) {
    console.info("Succeeded in getting transformCoordinateSystem data[ " + i + "] = " + data[i]);
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to operate.`);
})

```

