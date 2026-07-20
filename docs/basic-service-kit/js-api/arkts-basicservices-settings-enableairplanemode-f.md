# enableAirplaneMode

## Modules to Import

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## enableAirplaneMode

```TypeScript
function enableAirplaneMode(enable: boolean, callback: AsyncCallback<void>): void
```

Enables or disables airplane mode.

**Since:** 7

**Deprecated since:** 26.0.0

<!--Device-settings-function enableAirplaneMode(enable: boolean, callback: AsyncCallback<void>): void--><!--Device-settings-function enableAirplaneMode(enable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Specifies whether to enable airplane mode. The value {@code true} means to enable airplane mode, and {@code false} means to disable airplane mode. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The callback of enableAirplaneMode result. |

**Example**

```TypeScript
let isEnabled :boolean = true;
settings.enableAirplaneMode(isEnabled, (err:Error) => {
    if (err) {
        console.error('Failed to enable AirplaneMode.');
        return;
    }
    console.info('Return true if enable.');
})

```


## enableAirplaneMode

```TypeScript
function enableAirplaneMode(enable: boolean): Promise<void>
```

Enables or disables airplane mode.

**Since:** 7

**Deprecated since:** 26.0.0

<!--Device-settings-function enableAirplaneMode(enable: boolean): Promise<void>--><!--Device-settings-function enableAirplaneMode(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Specifies whether to enable airplane mode. The value {@code true} means to enable airplane mode, and {@code false} means to disable airplane mode. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | - Return Promise. |

**Example**

```TypeScript
let isEnabled :boolean = true;
settings.enableAirplaneMode(isEnabled).then(() => {
  console.info('Succeeded in enabling AirplaneMode.');
}).catch((err:Error) => {
  console.error(`Failed to enable AirplaneMode. Cause: ${err}`);
})

```

