# AISessionEvent

自定义AI会话配置对象，用于定义AI会话的生命周期回调。

**Since:** 26.0.0

**System capability:** SystemCapability.Web.Webview.Core

## onExecuteAIAction

```TypeScript
onExecuteAIAction: OnExecuteAIAction
```

AI会话执行操作时触发的回调函数。

**Type:** OnExecuteAIAction

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

## onCreateAISession

```TypeScript
onCreateAISession: OnCreateAISession
```

AI会话创建时触发的回调函数。返回`true`跳过系统默认行为，返回`false`继续执行系统默认逻辑。

**Type:** OnCreateAISession

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

## onDestroyAISession

```TypeScript
onDestroyAISession: OnDestroyAISession
```

AI会话销毁时触发的回调函数，用于清理与自定义AI模型关联的资源。

**Type:** OnDestroyAISession

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

## aiSessionType

```TypeScript
aiSessionType: AISessionType
```

AI会话类型。

**Type:** AISessionType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

