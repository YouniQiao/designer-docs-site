# createQuaternion

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## createQuaternion

```TypeScript
function createQuaternion(rotationVector: Array<number>, callback: AsyncCallback<Array<number>>): void
```

Converts a rotation vector into a quaternion. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getQuaternion(rotationVector:

<!--Device-sensor-function createQuaternion(rotationVector: Array<number>, callback: AsyncCallback<Array<number>>): void--><!--Device-sensor-function createQuaternion(rotationVector: Array<number>, callback: AsyncCallback<Array<number>>): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotationVector | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Rotation vector to convert. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<number>> | Yes | Callback used to return the quaternion. |

**Example**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

sensor.createQuaternion([0.20046076, 0.21907, 0.73978853, 0.60376877],
                        (err: BusinessError, data: Array<number>) => {
  if (err) {
    console.error(`Failed to register data. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  for (let i = 0; i < data.length; i++) {
    console.info("Succeeded in getting data[" + i + "]: " + data[i]);
  }
})

```


## createQuaternion

```TypeScript
function createQuaternion(rotationVector: Array<number>): Promise<Array<number>>
```

Converts a rotation vector into a quaternion. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getQuaternion(rotationVector:

<!--Device-sensor-function createQuaternion(rotationVector: Array<number>): Promise<Array<number>>--><!--Device-sensor-function createQuaternion(rotationVector: Array<number>): Promise<Array<number>>-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotationVector | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Rotation vector to convert. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<number>> | Promise used to return the quaternion. |

**Example**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

const promise = sensor.createQuaternion([0.20046076, 0.21907, 0.73978853, 0.60376877]);
promise.then((data: Array<number>) => {
  console.info('Succeeded in getting createQuaternion_promise');
  for (let i = 0; i < data.length; i++) {
    console.info("data[" + i + "]: " + data[i]);
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to get promise.`);
})

```

