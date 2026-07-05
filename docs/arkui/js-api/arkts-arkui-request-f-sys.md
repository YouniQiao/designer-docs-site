# request (System API)

## Modules to Import

```TypeScript
import { PluginComponentTemplate } from '@ohos.pluginComponent';
```

## request

```TypeScript
function request(param: RequestParameterForStage, callback: AsyncCallback<RequestCallbackParameters>): void
```

Plugin component request method used to send a request for the information of the template it wants.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | RequestParameterForStage | Yes | Plugin component request parameters for stage. |
| callback | AsyncCallback&lt;RequestCallbackParameters&gt; | Yes | Plugin component request event callback. |

