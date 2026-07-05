# WidgetParam

用户认证界面配置相关参数。该接口用于配置认证界面的显示样式和交互方式，包括标题、导航按钮文本、窗口模式等。通过合理配置这些参数，可以为用户提供清晰的认证引导和良好的交互体验。

**Since:** 10

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## windowMode

```TypeScript
windowMode?: WindowModeType
```

用户认证界面的显示类型。用于控制系统身份认证组件的窗口样式，可选择对话框模式（DIALOG_BOX）或全屏模式（FULLSCREEN）。默认值为WindowModeType.DIALOG_BOX。

**Type:** WindowModeType

**Since:** 10

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## navigationButtonText

```TypeScript
navigationButtonText?: string
```

导航按键的说明文本，最大长度为60字符。点击该按钮可触发应用自定义的操作，如跳转到自定义认证页面或取消认证等。在单指纹、单人脸场景下支持，从API 18开始，增加支持人脸+指纹组合认证场景。默认为不展示自定义导航按键。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## uiContext

```TypeScript
uiContext?: Context
```

以模应用弹窗方式显示身份认证对话框，仅支持在2in1设备上使用。传入有效的uiContext后，认证对话框将以模应用弹窗方式显示，认证结果返回后应用需先获取控件释放消息（订阅 [on('authTip')]userAuth.UserAuthInstance.on(type: 'authTip', callback: AuthTipCallback)并等待WIDGET_RELEASED 状态）才能弹出其他窗口。如果没有此参数或其他类型的设备，身份认证对话框将以模系统弹窗方式显示，此时控件释放后应用可直接进行后续操作。 **默认值：** 以模系统弹窗方式显示身份认证对话框。

**Type:** Context

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## title

```TypeScript
title: string
```

用户认证界面的标题，建议传入认证目的，例如用于支付、登录应用等，不支持传空字串，最大长度为500字符。标题会显示在认证界面，帮助用户理解当前认证的目的，提升用户信任度和配合度。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## appWindow

```TypeScript
appWindow?: window.Window
```

是否在模应用模式下显示鉴权对话框。该模式仅适用于平板电脑和二合一设备。如果未使用此模式或使用其他类型的设备，则身份验证对话框以模系统模式显示。默认情况下，身份验证对话框以模系统方式显示。如果提供了uiContext，则该参数将 被忽略。

**Type:** window.Window

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

