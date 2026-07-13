# getRequestCallback

## Modules to Import

```TypeScript
import { dialogRequest } from '@kit.AbilityKit';
```

## getRequestCallback

```TypeScript
function getRequestCallback(want: Want): RequestCallback
```

Obtains the request callback from Want.

> **NOTE**
>
> This API can be used by a ServiceExtensionAbility. If the ServiceExtensionAbility implements modal dialog boxes,
> the request callback can be obtained from Want. If this API is used in other scenarios, no return value is
> obtained.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want passed in the request for a modal dialog box. |

**Return value:**

| Type | Description |
| --- | --- |
| RequestCallback | RequestCallback object obtained, which is used to set the return result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want, dialogRequest } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    try {
      let requestCallback = dialogRequest.getRequestCallback(want);
    } catch(err) {
      console.error(`getRequestInfo err= ${JSON.stringify(err)}`);
    }
  }
}

```

