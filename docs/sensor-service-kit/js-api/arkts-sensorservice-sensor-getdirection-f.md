# getDirection

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## getDirection

```TypeScript
function getDirection(rotationMatrix: Array<number>, callback: AsyncCallback<Array<number>>): void
```

Obtains the device direction based on the rotation matrix. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getOrientation(rotationMatrix:

<!--Device-sensor-function getDirection(rotationMatrix: Array<number>, callback: AsyncCallback<Array<number>>): void--><!--Device-sensor-function getDirection(rotationMatrix: Array<number>, callback: AsyncCallback<Array<number>>): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotationMatrix | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Rotation matrix. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<number>> | Yes | Callback used to return the rotation angle around the z, x, and y axes, in degrees. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getOrientation(rotationMatrix:

<!--Device-sensor-function getDirection(rotationMatrix: Array<number>): Promise<Array<number>>--><!--Device-sensor-function getDirection(rotationMatrix: Array<number>): Promise<Array<number>>-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotationMatrix | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Rotation matrix. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<number>> | Promise used to return the rotation angle around the z, x, and y axes, in degrees. |

**Example**

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

