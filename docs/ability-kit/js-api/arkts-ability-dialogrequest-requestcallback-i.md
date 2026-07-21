# RequestCallback

Provides a callback for setting the modal dialog box request result.

**Since:** 9

<!--Device-dialogRequest-export interface RequestCallback--><!--Device-dialogRequest-export interface RequestCallback-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { dialogRequest } from '@kit.AbilityKit';
```

<a id="setrequestresult"></a>
## setRequestResult

```TypeScript
setRequestResult(result: RequestResult): void
```

Sets the result of the request for the modal dialog box.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-RequestCallback-setRequestResult(result: RequestResult): void--><!--Device-RequestCallback-setRequestResult(result: RequestResult): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | [RequestResult](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-requestresult-i-sys.md) | Yes | Request result to set. |

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
      let myResult: dialogRequest.RequestResult = {
        result : dialogRequest.ResultCode.RESULT_CANCEL,
      };
      requestCallback.setRequestResult(myResult);
    } catch(err) {
      console.error(`getRequestInfo err= ${JSON.stringify(err)}`);
    }
  }
}

```

