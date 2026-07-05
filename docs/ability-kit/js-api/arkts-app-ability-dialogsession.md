# @ohos.app.ability.dialogSession

dialogSession模块用于支持系统应用弹框功能。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dialogSession } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getDialogSessionInfo](arkts-dialogsession-getdialogsessioninfo-f-sys.md#getDialogSessionInfo-1) | 通过dialogSessionId获取会话信息。 |
| <!--DelRow-->[getDialogSessionInfo](arkts-dialogsession-getdialogsessioninfo-f-sys.md#getDialogSessionInfo-2) | 根据dialogSessionId获取会话信息。 |
| <!--DelRow-->[sendDialogResult](arkts-dialogsession-senddialogresult-f-sys.md#sendDialogResult-1) | 发送用户请求。使用Promise异步回调。 |
| <!--DelRow-->[sendDialogResult](arkts-dialogsession-senddialogresult-f-sys.md#sendDialogResult-2) | 发送用户请求。使用callback异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[DialogAbilityInfo](arkts-dialogsession-dialogabilityinfo-i-sys.md) | 提供会话组件信息，包括包名、模块名、组件名等信息。 |
| <!--DelRow-->[DialogSessionInfo](arkts-dialogsession-dialogsessioninfo-i-sys.md) | 提供会话信息，包括请求方信息、目标组件信息列表、其他参数。 |

