# AcquireAuthorizationOptions

表示获取授权的选项。

**Since:** 24

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## challenge

```TypeScript
challenge?: Uint8Array
```

随机挑战值，可用于防止重放攻击，长度不得超过32字节，默认为undefined。

**Type:** Uint8Array

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## interactionContext

```TypeScript
interactionContext?: Context
```

用户交互上下文配置，默认为undefined。 - 未指定上下文时，授权对话框以模态系统模式显示。 - 指定[UIAbilityContext](../apis-ability-kit/js-apis-inner-application-uiAbilityContext.md)或 [UIExtensionContext](../apis-ability-kit/js-apis-inner-application-uiExtensionContext.md)时，以模态应用模式显示。 - 未提供有效上下文时，授权对话框无法显示。 **注意**：仅当isInteractionAllowed为true时生效。

**Type:** Context

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## isInteractionAllowed

```TypeScript
isInteractionAllowed?: boolean
```

是否允许用户交互，默认为true 。 如果为true，则允许在交互上下文中显示授权对话框；如果为false，则不允许显示授权对话框。 **注意**：此选项仅在调用者位于前台时生效。如果调用者在后台，则不允许用户交互。

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## isReuseNeeded

```TypeScript
isReuseNeeded?: boolean
```

是否需要重复用先前的授权，默认为true。 如果为true且存在有效的授权结果，则将复用该结果；否则，将执行新的授权。

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

