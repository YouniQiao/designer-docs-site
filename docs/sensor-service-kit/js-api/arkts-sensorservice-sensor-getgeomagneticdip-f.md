# getGeomagneticDip

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## getGeomagneticDip

```TypeScript
function getGeomagneticDip(inclinationMatrix: Array<number>, callback: AsyncCallback<number>): void
```

Obtains the magnetic dip based on the inclination matrix. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getInclination(inclinationMatrix:

<!--Device-sensor-function getGeomagneticDip(inclinationMatrix: Array<number>, callback: AsyncCallback<number>): void--><!--Device-sensor-function getGeomagneticDip(inclinationMatrix: Array<number>, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inclinationMatrix | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Inclination matrix. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the magnetic dip, in radians. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getInclination(inclinationMatrix:

<!--Device-sensor-function getGeomagneticDip(inclinationMatrix: Array<number>): Promise<number>--><!--Device-sensor-function getGeomagneticDip(inclinationMatrix: Array<number>): Promise<number>-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inclinationMatrix | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Inclination matrix. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the magnetic dip, in radians. |

**Example**

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

