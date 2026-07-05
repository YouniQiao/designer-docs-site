# @ohos.app.ability.dialogSession

dialogSession模块用于支持系统应用弹框功能。

**起始版本：** 11

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { dialogSession } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getDialogSessionInfo](arkts-dialogsession-getdialogsessioninfo-f-sys.md#getDialogSessionInfo-1) | 通过dialogSessionId获取会话信息。 |
| <!--DelRow-->[getDialogSessionInfo](arkts-dialogsession-getdialogsessioninfo-f-sys.md#getDialogSessionInfo-2) | 根据dialogSessionId获取会话信息。 |
| <!--DelRow-->[sendDialogResult](arkts-dialogsession-senddialogresult-f-sys.md#sendDialogResult-1) | 发送用户请求。使用Promise异步回调。 |
| <!--DelRow-->[sendDialogResult](arkts-dialogsession-senddialogresult-f-sys.md#sendDialogResult-2) | 发送用户请求。使用callback异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DialogAbilityInfo](arkts-dialogsession-dialogabilityinfo-i-sys.md) | 提供会话组件信息，包括包名、模块名、组件名等信息。 |
| <!--DelRow-->[DialogSessionInfo](arkts-dialogsession-dialogsessioninfo-i-sys.md) | 提供会话信息，包括请求方信息、目标组件信息列表、其他参数。 |

