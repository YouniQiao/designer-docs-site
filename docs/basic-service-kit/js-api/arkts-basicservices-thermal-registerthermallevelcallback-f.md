# registerThermalLevelCallback

## Modules to Import

```TypeScript
import { thermal } from '@kit.BasicServicesKit';
```

<a id="registerthermallevelcallback"></a>
## registerThermalLevelCallback

```TypeScript
function registerThermalLevelCallback(callback: Callback<ThermalLevel>): void
```

Registers a callback to be invoked when the thermal level changes. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-thermal-function registerThermalLevelCallback(callback: Callback<ThermalLevel>): void--><!--Device-thermal-function registerThermalLevelCallback(callback: Callback<ThermalLevel>): void-End-->

**System capability:** SystemCapability.PowerManager.ThermalManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ThermalLevel&gt; | Yes | Callback used to return thermal level. This parameter is of the function type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; |

**Example**

```TypeScript
try {
    thermal.registerThermalLevelCallback((level: thermal.ThermalLevel) => {
        console.info('thermal level is: ' + level);
    });
    console.info('register thermal level callback success.');
} catch(err) {
    console.error('register thermal level callback failed, err: ' + err);
}

```

