# pluginComponentManager

Plugin component manager interface.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { PluginComponentTemplate } from '@ohos.pluginComponent';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [push](arkts-arkui-push-f.md#push-1) | Plugin component push method. |
| [request](arkts-arkui-request-f.md#request-1) | Plugin component request method. |
| [on](arkts-arkui-on-f.md#on-1) | Plugin component event listener. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [push](arkts-arkui-push-f-sys.md#push-2) | Plugin component push method used to send the information of the template it provides. |
| [request](arkts-arkui-request-f-sys.md#request-2) | Plugin component request method used to send a request for the information of the template it wants. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [PushParameters](arkts-arkui-pushparameters-i.md) | Plugin component push parameters. |
| [RequestParameters](arkts-arkui-requestparameters-i.md) | Plugin component request parameters. |
| [RequestCallbackParameters](arkts-arkui-requestcallbackparameters-i.md) | Plugin component request callback parameters. |
| [RequestEventResult](arkts-arkui-requesteventresult-i.md) | Plugin component request event result value. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [PushParameterForStage](arkts-arkui-pushparameterforstage-i-sys.md) | Plugin component push parameters which is used in push function. |
| [RequestParameterForStage](arkts-arkui-requestparameterforstage-i-sys.md) | Plugin component request parameters which is used in request function. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [KVObject](arkts-arkui-kvobject-t.md) | Defines KVObject |
| [OnPushEventCallback](arkts-arkui-onpusheventcallback-t.md) | Plugin component push event callback. |
| [OnRequestEventCallback](arkts-arkui-onrequesteventcallback-t.md) | Plugin component request event callback. |

