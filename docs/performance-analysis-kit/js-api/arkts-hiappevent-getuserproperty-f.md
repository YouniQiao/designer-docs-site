# getUserProperty

## getUserProperty

```TypeScript
function getUserProperty(name: string): string
```

Obtains the value set through **setUserProperty**.

**Since:** 11

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Key of a user property. The value is string that contains a maximum of 256 characters,  including digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must not start with a  digit. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Value of a user property. If no user ID is found, an empty string is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';

hiAppEvent.setUserProperty('key', 'value');
try {
  let value: string = hiAppEvent.getUserProperty('key');
  hilog.info(0x0000, 'hiAppEvent', `getUserProperty event was successful, userProperty=${value}`);
} catch (error) {
  hilog.error(0x0000, 'hiAppEvent', `failed to getUserProperty event, code=${error.code}`);
}

```

