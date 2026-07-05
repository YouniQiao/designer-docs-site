# unsubscribeThermalLevel

## Modules to Import

```TypeScript
import { thermal } from '@ohos.thermal';
```

## unsubscribeThermalLevel

```TypeScript
function unsubscribeThermalLevel(callback?: AsyncCallback<void>): void
```

Unsubscribes from the thermal level changes. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [unregisterThermalLevelCallback](arkts-basicservices-unregisterthermallevelcallback-f.md#unregisterthermallevelcallback-1)

**System capability:** SystemCapability.PowerManager.ThermalManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | No | Callback that returns no value. If this parameter is not set, allcallbacks will be unregistered. |

**Example**

```TypeScript
thermal.unsubscribeThermalLevel(() => {
    console.info('unsubscribe thermal level success.');
});

```

