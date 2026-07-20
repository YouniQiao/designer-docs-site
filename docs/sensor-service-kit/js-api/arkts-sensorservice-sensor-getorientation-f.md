# getOrientation

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## getOrientation

```TypeScript
function getOrientation(rotationMatrix: Array<number>, callback: AsyncCallback<Array<number>>): void
```

Obtains the device direction based on the rotation matrix. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-sensor-function getOrientation(rotationMatrix: Array<double>, callback: AsyncCallback<Array<double>>): void--><!--Device-sensor-function getOrientation(rotationMatrix: Array<double>, callback: AsyncCallback<Array<double>>): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotationMatrix | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Rotation matrix. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<number>> | Yes | Callback used to return the rotation angle around the z, x, and y axes, in degrees. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameter types; 3. Parameter verification failed. |
| [14500101](../errorcode-sensor.md#14500101-service-exception) | Service exception. Possible causes: 1. Sensor hdf service exception;<br> 2. Sensor service ipc exception;3. Sensor data channel exception. |

**Example**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Use try catch to capture possible exceptions.
try {
  let preRotationMatrix = [
    1, 0, 0,
    0, 0.87, -0.50,
    0, 0.50, 0.87
  ];
  sensor.getOrientation(preRotationMatrix, (err: BusinessError, data: Array<number>) => {
    if (err) {
      console.error(`Failed to get orientation. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    if (data.length < 3) {
      console.error("Failed to get orientation, length" + data.length);
    }
    console.info("Succeeded in getting data. Z: " + data[0]);
    console.info("Succeeded in getting data. X: " + data[1]);
    console.info("Succeeded in getting data. Y: " + data[2]);
  })
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to get orientation. Code: ${e.code}, message: ${e.message}`);
}

```


## getOrientation

```TypeScript
function getOrientation(rotationMatrix: Array<number>): Promise<Array<number>>
```

Obtains the device direction based on the rotation matrix. This API uses a promise to return the result.

**Since:** 9

<!--Device-sensor-function getOrientation(rotationMatrix: Array<double>): Promise<Array<double>>--><!--Device-sensor-function getOrientation(rotationMatrix: Array<double>): Promise<Array<double>>-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotationMatrix | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Rotation matrix. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<number>> | Promise used to return the rotation angle around the z, x, and y axes, in degrees. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameter types; 3. Parameter verification failed. |
| [14500101](../errorcode-sensor.md#14500101-service-exception) | Service exception. Possible causes: 1. Sensor hdf service exception;<br> 2. Sensor service ipc exception;3. Sensor data channel exception. |

**Example**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Use try catch to capture possible exceptions.
try {
  let preRotationMatrix = [
    1, 0, 0,
    0, 0.87, -0.50,
    0, 0.50, 0.87
  ];
  const promise = sensor.getOrientation(preRotationMatrix);
  promise.then((data: Array<number>) => {
    for (let i = 0; i < data.length; i++) {
      console.info('Succeeded in getting data[' + i + ']: ' + data[i]);
    }
  }, (err: BusinessError) => {
    console.error(`Failed to getOrientation. Code: ${err.code}, message: ${err.message}`);
  });
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to getOrientation Code: ${e.code}, message: ${e.message}`);
}

```

