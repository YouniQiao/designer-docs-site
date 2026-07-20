# getDeviceAltitude

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## getDeviceAltitude

```TypeScript
function getDeviceAltitude(seaPressure: number, currentPressure: number, callback: AsyncCallback<number>): void
```

Obtains the altitude based on the atmospheric pressure. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-sensor-function getDeviceAltitude(seaPressure: double, currentPressure: double, callback: AsyncCallback<double>): void--><!--Device-sensor-function getDeviceAltitude(seaPressure: double, currentPressure: double, callback: AsyncCallback<double>): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| seaPressure | number | Yes | Sea-level atmospheric pressure, in hPa. |
| currentPressure | number | Yes | Specified atmospheric pressure, in hPa. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the altitude, in meters. |

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
function getDeviceAltitude(seaPressure: number, currentPressure: number): Promise<number>
```

Obtains the altitude based on the atmospheric pressure. This API uses a promise to return the result.

**Since:** 9

<!--Device-sensor-function getDeviceAltitude(seaPressure: double, currentPressure: double): Promise<double>--><!--Device-sensor-function getDeviceAltitude(seaPressure: double, currentPressure: double): Promise<double>-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| seaPressure | number | Yes | Sea-level atmospheric pressure, in hPa. |
| currentPressure | number | Yes | Specified atmospheric pressure, in hPa. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the altitude, in meters. |

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

