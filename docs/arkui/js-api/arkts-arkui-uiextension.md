# @ohos.arkui.uiExtension

The **uiExtension** module provides APIs for the [EmbeddedUIExtensionAbility](../../../../application-models/embeddeduiextensionability.md) (or [UIExtensionAbility](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-uiextensionability-uiextensionability-c.md)) to obtain the host application window information or the information about the corresponding [EmbeddedComponent](./@internal/component/ets/embedded_component)<!--Del--> (or [UIExtensionComponent](./@internal/component/ets/ui_extension_component))<!--DelEnd--> component.

**Since:** 12

<!--Device-unnamed-declare namespace uiExtension--><!--Device-unnamed-declare namespace uiExtension-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { uiExtension } from '@kit.ArkUI';
```

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [AvoidAreaInfo](arkts-arkui-uiextension-avoidareainfo-i.md) | Represents the information about the avoidance area of the window. |
| [RectChangeOptions](arkts-arkui-uiextension-rectchangeoptions-i.md) | Provides the values and reasons returned when the rectangle (position and size) of the component (**EmbeddedComponent** or **UIExtensionComponent**) changes. |
| [WindowProxy](arkts-arkui-uiextension-windowproxy-i.md) | The proxy of the UIExtension window. |
| [WindowProxyProperties](arkts-arkui-uiextension-windowproxyproperties-i.md) | Provides information about a component. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [WindowProxy](arkts-arkui-uiextension-windowproxy-i-sys.md) | The proxy of the UIExtension window. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [EventFlag](arkts-arkui-uiextension-eventflag-e.md) | Enumerates event types. |
| [RectChangeReason](arkts-arkui-uiextension-rectchangereason-e.md) | Enumerates the reasons for changes in the rectangle (position and size) of the component (**EmbeddedComponent** or **UIExtensionComponent**). |

