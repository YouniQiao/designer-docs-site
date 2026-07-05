# OpenLinkOptions

OpenLinkOptions可以作为[openLink()]./application/UIAbilityContext:UIAbilityContext.openLink的入参，用于标识是否仅打开 AppLinking和传递键值对可选参数。

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { OpenLinkOptions } from '@kit.AbilityKit';
```

## appLinkingOnly

```TypeScript
appLinkingOnly?: boolean
```

表示是否必须以<!--RP1-->[AppLinking](docroot://application-models/app-linking-startup.md)<!--RP1End-->的方式启动UIAbility。 - 取值为true时，如果不存在与AppLinking相匹配的UIAbility，直接返回。 - 取值为false时，如果不存在与AppLinking相匹配的UIAbility，AppLinking会退化为 [DeepLinking](docroot://application-models/deep-linking-startup.md)。默认值为false。 aa命令隐式拉起Ability时可以通过设置"--pb appLinkingOnly true/false"以AppLinking的方式进行启动。

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## hideFailureTipDialog

```TypeScript
hideFailureTipDialog?: boolean
```

表示[Deep Linking](docroot://application-models/deep-linking-startup.md)找不到应用时是否显示“暂无可用打开方式”的弹窗。 - 取值为true时，不显示“暂无可用打开方式”的弹窗。 - 取值为false时，显示“暂无可用打开方式”的弹窗。默认值为false。 **说明**：appLinkingOnly字段为true时不会触发Deep Linking流程，该字段不会生效。

**Type:** boolean

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## completionHandler

```TypeScript
completionHandler?: CompletionHandler
```

拉起应用结果的操作类，用于处理拉起应用的结果。

**Type:** CompletionHandler

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## parameters

```TypeScript
parameters?: Record<string, Object>
```

表示WantParams参数。 **说明**：具体使用规则请参考[want](arkts-want-c.md#Want)中的parameters属性。

**Type:** Record<string, Object>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
parameters?: Record<string, RecordData>
```

表示WantParams参数。

**Type:** Record<string, RecordData>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

