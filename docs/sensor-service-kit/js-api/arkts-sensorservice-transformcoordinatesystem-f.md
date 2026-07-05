# transformCoordinateSystem

## Modules to Import

```TypeScript
import { sensor } from '@ohos.sensor';
```

## transformCoordinateSystem

```TypeScript
function transformCoordinateSystem(inRotationVector: Array<number>, coordinates: CoordinatesOptions,
    callback: AsyncCallback<Array<number>>): void
```

Rotates a rotation vector so that it can represent the coordinate system in different ways. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** transformRotationMatrix(inRotationVector:

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inRotationVector | Array&lt;number&gt; | Yes | Rotation vector. |
| coordinates | CoordinatesOptions | Yes | Direction of the coordinate system. |
| callback | AsyncCallback&lt;Array&lt;number&gt;&gt; | Yes | Callback used to return the rotation vector after being rotated. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** transformRotationMatrix(inRotationVector:

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inRotationVector | Array&lt;number&gt; | Yes | Rotation vector. |
| coordinates | CoordinatesOptions | Yes | Direction of the coordinate system. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number&gt;&gt; | Promise used to return the rotation vector after being rotated. |

**Example**

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

