# @ohos.thermal

The **thermal** module provides thermal level-related callback and query APIs to obtain the information required for thermal control.

**Since:** 8

**System capability:** SystemCapability.PowerManager.ThermalManager

## Modules to Import

```TypeScript
import { thermal } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getLevel](arkts-basicservices-getlevel-f.md#getlevel-1) | Obtains the current thermal level. |
| [getThermalLevel](arkts-basicservices-getthermallevel-f.md#getthermallevel-1) | Obtains the current thermal level. |
| [registerThermalLevelCallback](arkts-basicservices-registerthermallevelcallback-f.md#registerthermallevelcallback-1) | Registers a callback to be invoked when the thermal level changes. This API uses an asynchronous callback to return the result. |
| [subscribeThermalLevel](arkts-basicservices-subscribethermallevel-f.md#subscribethermallevel-1) | Subscribes to the thermal level changes. This API uses an asynchronous callback to return the result. |
| [unregisterThermalLevelCallback](arkts-basicservices-unregisterthermallevelcallback-f.md#unregisterthermallevelcallback-1) | Unregisters from the thermal level changes. This API uses an asynchronous callback to return the result. |
| [unsubscribeThermalLevel](arkts-basicservices-unsubscribethermallevel-f.md#unsubscribethermallevel-1) | Unsubscribes from the thermal level changes. This API uses an asynchronous callback to return the result. |

### Enums

| Name | Description |
| --- | --- |
| [ThermalLevel](arkts-basicservices-thermallevel-e.md) | Enumerates thermal levels. |

