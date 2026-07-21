# push (System API)

## Modules to Import

```TypeScript
import { PluginComponentTemplate } from '@kit.ArkUI';
```

<a id="push"></a>
## push

```TypeScript
function push(param: PushParameterForStage, callback: AsyncCallback<void>): void
```

Plugin component push method used to send the information of the template it provides.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-pluginComponentManager-function push(param: PushParameterForStage, callback: AsyncCallback<void>): void--><!--Device-pluginComponentManager-function push(param: PushParameterForStage, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | [PushParameterForStage](arkts-arkui-plugincomponentmanager-pushparameterforstage-i-sys.md) | Yes | Plugin component push parameters for stage. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Plugin component push event callback. |

