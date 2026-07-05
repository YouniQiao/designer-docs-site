# getDisplayByIdSync

## Modules to Import

```TypeScript
import { display } from '@ohos.display';
```

## getDisplayByIdSync

```TypeScript
function getDisplayByIdSync(displayId: number): Display
```

Obtains a Display object based on the display ID.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | Yes | Display ID. The value must be an integer greater than or equal to 0. An object can beobtained only when the passed-in display ID is correct. You can use the value of the **displayId** property in[WindowProperties](arkts-arkui-windowproperties-i.md#windowproperties) as the input parameter. |

**Return value:**

| Type | Description |
| --- | --- |
| Display | Display object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types.3. Parameter verification failed. |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally. Possible causes:Display is null, display id corresponding display does not exist. |

**Example**

```TypeScript
let displayClass: display.Display | null = null;

try {
  // Use the value of the displayId property in WindowProperties as the input parameter.
  let displayId = 0; 
  displayClass = display.getDisplayByIdSync(displayId);
} catch (exception) {
  console.error(`Failed to get display. Code: ${exception.code}, message: ${exception.message}`);
}

```

