# showAppNetPolicySettings

## Modules to Import

```TypeScript
import { policy } from '@ohos.net.policy';
```

## showAppNetPolicySettings

```TypeScript
function showAppNetPolicySettings(context: Context): Promise<void>
```

Open the network settings interface of the application, which is presented in a semi-modal form and can be used to configure the network connection method. This API uses a promise to return the result.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates Context instance. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { policy } from '@kit.NetworkKit';
import { common } from '@kit.AbilityKit';

let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
policy.showAppNetPolicySettings(context).then(() => {
    console.info("showAppNetPolicySettings success");
}).catch(() => {
    console.error("showAppNetPolicySettings failed");
    }
)

```

