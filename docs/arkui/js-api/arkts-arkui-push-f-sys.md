# push (System API)

## Modules to Import

```TypeScript
import { PluginComponentTemplate } from '@ohos.pluginComponent';
```

## push

```TypeScript
function push(param: PushParameterForStage, callback: AsyncCallback<void>): void
```

Plugin component push method used to send the information of the template it provides.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | PushParameterForStage | Yes | Plugin component push parameters for stage. |
| callback | AsyncCallback&lt;void&gt; | Yes | Plugin component push event callback. |

