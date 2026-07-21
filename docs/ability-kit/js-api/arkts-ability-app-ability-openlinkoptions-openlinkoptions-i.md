# OpenLinkOptions

**OpenLinkOptions** can be used as an input parameter of [openLink()](arkts-ability-uiabilitycontext-c.md#openlink-1) to indicate whether to enable only App Linking and pass in optional parameters in the form of key-value pairs.

**Since:** 12

<!--Device-unnamed-export default interface OpenLinkOptions--><!--Device-unnamed-export default interface OpenLinkOptions-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { OpenLinkOptions } from '@kit.AbilityKit';
```

## appLinkingOnly

```TypeScript
appLinkingOnly?: boolean
```

Whether the UIAbility must be started using <!--RP1-->[App Linking](docroot://application-models/app-linking-startup.md)<!--RP1End-->.

- If this parameter is set to **true** and no UIAbility matches the URL in App Linking, the result is returned directly.  
- If this parameter is set to **false** and no UIAbility matches the URL in App Linking, App Linking falls back to [Deep Linking](docroot://application-models/deep-linking-startup.md). The default value is **false**.

When the aa command is used to implicitly start an ability, you can set **--pb appLinkingOnly true** or **--pb appLinkingOnly false** to start the ability in App Linking mode.

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-OpenLinkOptions-appLinkingOnly?: boolean--><!--Device-OpenLinkOptions-appLinkingOnly?: boolean-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## completionHandler

```TypeScript
completionHandler?: CompletionHandler
```

Operation class used to handle the result of an application launch request.

**Type:** CompletionHandler

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-OpenLinkOptions-completionHandler?: CompletionHandler--><!--Device-OpenLinkOptions-completionHandler?: CompletionHandler-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## hideFailureTipDialog

```TypeScript
hideFailureTipDialog?: boolean
```

Whether to display a "No app available" dialog box when a suitable application is not found using [Deep Linking](docroot://application-models/deep-linking-startup.md).

- **true**: The "No app available" dialog box is not displayed.  
- **false**: The "No app available" dialog box is displayed. The default value is **false**.

Note: If **appLinkingOnly** is set to **true**, the Deep Linking process is not triggered, and this field does not take effect.

**Type:** boolean

**Default:** { false }

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-OpenLinkOptions-hideFailureTipDialog?: boolean--><!--Device-OpenLinkOptions-hideFailureTipDialog?: boolean-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## parameters

```TypeScript
parameters?: Record<string, Object>
```

List of parameters in Want.

Note: For details about the usage rules, see **parameters** in [want](arkts-ability-app-ability-want-want-c.md).

**Type:** Record&lt;string, Object&gt;

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-OpenLinkOptions-parameters?: Record<string, Object>--><!--Device-OpenLinkOptions-parameters?: Record<string, Object>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

