# @ohos.app.ability.dialogRequest

dialogRequest模块用于处理模态弹框的能力，包括获取RequestInfo（用于绑定模态弹框）、获取RequestCallback（用于设置结果）。 模态弹框是指一个系统弹框，该弹框会拦截弹框之下的页面的鼠标、键盘、触屏等事件。销毁该弹框后，才能对页面进行操作。 > **说明：** > > - 本模块接口可以在ServiceExtensionAbility下使用，如果ServiceExtensionAbility实现了模态弹框，则可以使用本模块的接口获取请求方的RequestInfo、RequestCallback并 > 返回请求结果。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 导入模块

```TypeScript
import { dialogRequest } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getRequestCallback](arkts-dialogrequest-getrequestcallback-f.md#getRequestCallback-1) | 从Want中获取请求方的RequestCallback。 > **说明：** > > 该接口可以在ServiceExtensionAbility下使用，如果ServiceExtensionAbility实现了模态弹框，则能从Want中获取请求方的RequestCallback。其他场景使用该接口，均无法获取返回 > 值。 |
| [getRequestInfo](arkts-dialogrequest-getrequestinfo-f.md#getRequestInfo-1) | 从Want中获取请求方的RequestInfo。 > **说明：** > > 该接口可以在ServiceExtensionAbility下使用，如果ServiceExtensionAbility实现了模态弹框，则能从Want中获取请求方的RequestInfo。其他场景使用该接口，均无法获取返回值。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [RequestCallback](arkts-dialogrequest-requestcallback-i.md) | 用于设置模态弹框请求结果的callback接口。 |
| [RequestInfo](arkts-dialogrequest-requestinfo-i.md) | 表示发起方请求信息，作为窗口绑定模态弹框的入参。 |
| [RequestResult](arkts-dialogrequest-requestresult-i.md) | 模态弹框请求结果，包含结果码ResultCode和请求结果ResultWant。 |
| [WindowRect](arkts-dialogrequest-windowrect-i.md) | 表示模态弹框的属性。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ResultCode](arkts-dialogrequest-resultcode-e.md) | 模态弹框请求结果码。 |

