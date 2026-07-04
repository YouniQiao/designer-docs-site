# subscribeThermalLevel

## Modules to Import

```TypeScript
import { thermal } from '@ohos.thermal';
```

## subscribeThermalLevel

```TypeScript
function subscribeThermalLevel(callback: AsyncCallback<ThermalLevel>): void
```

Subscribes to the thermal level changes. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [registerThermalLevelCallback](arkts-basicservices-registerthermallevelcallback-f.md#registerthermallevelcallback-1)

**System capability:** SystemCapability.PowerManager.ThermalManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;ThermalLevel&gt; | Yes | Callback used to return thermal level. This parameter is of thefunction type. |

**Example**

```TypeScript
thermal.subscribeThermalLevel((err: Error, level: thermal.ThermalLevel) => {
    console.info('thermal level is: ' + level);
});

```

