# getAngleModify

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

<a id="getanglemodify"></a>
## getAngleModify

```TypeScript
function getAngleModify(currentRotationMatrix: Array<number>, preRotationMatrix: Array<number>,
    callback: AsyncCallback<Array<number>>): void
```

Obtains the angle change between two rotation matrices. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getAngleVariation(currentRotationMatrix:](arkts-sensorservice-sensor-getanglevariation-f.md#getanglevariation-1)

<!--Device-sensor-function getAngleModify(currentRotationMatrix: Array<number>, preRotationMatrix: Array<number>,
    callback: AsyncCallback<Array<number>>): void--><!--Device-sensor-function getAngleModify(currentRotationMatrix: Array<number>, preRotationMatrix: Array<number>,
    callback: AsyncCallback<Array<number>>): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| currentRotationMatrix | Array&lt;number&gt; | Yes | Current rotation matrix. |
| preRotationMatrix | Array&lt;number&gt; | Yes | The other rotation matrix. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;number&gt;&gt; | Yes | Callback used to return the angle change around the z, x, and y axes, in degrees. |

**Example**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

sensor.getAngleModify([1, 0, 0, 0, 1, 0, 0, 0, 1], [1, 0, 0, 0, 0.87, -0.50, 0, 0.50, 0.87],
                      (err: BusinessError, data: Array<number>) => {
  if (err) {
    console.error(`Failed to register data. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  for (let i = 0; i < data.length; i++) {
    console.info("data[" + i + "]: " + data[i]);
  }
})

```


<a id="getanglemodify-1"></a>
## getAngleModify

```TypeScript
function getAngleModify(currentRotationMatrix: Array<number>, preRotationMatrix: Array<number>): Promise<Array<number>>
```

Obtains the angle change between two rotation matrices. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getAngleVariation(currentRotationMatrix:](arkts-sensorservice-sensor-getanglevariation-f.md#getanglevariation-1)

<!--Device-sensor-function getAngleModify(currentRotationMatrix: Array<number>, preRotationMatrix: Array<number>): Promise<Array<number>>--><!--Device-sensor-function getAngleModify(currentRotationMatrix: Array<number>, preRotationMatrix: Array<number>): Promise<Array<number>>-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| currentRotationMatrix | Array&lt;number&gt; | Yes | Current rotation matrix. |
| preRotationMatrix | Array&lt;number&gt; | Yes | The other rotation matrix. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number&gt;&gt; | Promise used to return the angle change around the z, x, and y axes, in degrees. |

**Example**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

const promise = sensor.getAngleModify([1, 0, 0, 0, 1, 0, 0, 0, 1], [1, 0, 0, 0, 0.87, -0.50, 0, 0.50, 0.87]);
promise.then((data: Array<number>) => {
  console.info('Succeeded in getting AngleModify_promise.');
  for (let i = 0; i < data.length; i++) {
    console.info("Succeeded in getting data[" + i + "]: " + data[i]);
  }
}).catch((reason: BusinessError) => {
  let e: BusinessError = reason as BusinessError;
  console.info("Succeeded in getting promise::catch", e);
})

```

