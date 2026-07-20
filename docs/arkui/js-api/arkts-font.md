# @ohos.font

The **font** module provides APIs for registering custom fonts.

> **NOTE**  
>  
> - The functionality of this module depends on UI context. This means that the APIs of this module cannot be used  
> where [the UI context is ambiguous](../../../../ui/arkts-global-interface.md#ambiguous-ui-context). For details, see  
> [UIContext](arkts-arkui-uicontext.md).  
>  
> - You are advised to use the [loadFontSync](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-fontcollection-c.md#loadfontsync-1) API of the  
> font engine to register custom fonts.

**Since:** 9

<!--Device-unnamed-declare namespace font--><!--Device-unnamed-declare namespace font-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { font } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getFontByName](arkts-arkui-font-getfontbyname-f.md#getfontbyname-1) | Obtains information about a system font based on the font name. |
| [getSystemFontList](arkts-arkui-font-getsystemfontlist-f.md#getsystemfontlist-1) | Obtains this system font list.This API only takes effect on PCs/2-in-1 devices and returns an empty array on other devices.You are advised to use the [getSystemFontFullNamesByType](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-getsystemfontfullnamesbytype-f.md#getsystemfontfullnamesbytype-1) API to obtain the latest system-supported font list data. |
| [getUIFontConfig](arkts-arkui-font-getuifontconfig-f.md#getuifontconfig-1) | Obtains the UI font configuration information in the system font configuration file.This API can only obtain the information in the configuration file. If the UI context is not clear, **undefined** may be returned. If you want to obtain the full font configuration information, you are advised to use the [getSystemFontFullNamesByType](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-getsystemfontfullnamesbytype-f.md#getsystemfontfullnamesbytype-1) API of the font engine. |
| [registerFont](arkts-arkui-font-registerfont-f.md#registerfont-1) | Registers a custom font with the font manager.This API is asynchronous and does not support concurrent calls. |

### Interfaces

| Name | Description |
| --- | --- |
| [FontInfo](arkts-arkui-font-fontinfo-i.md) | Information about the system font. |
| [FontOptions](arkts-arkui-font-fontoptions-i.md) | Information about the custom font to register. |
| [UIFontAdjustInfo](arkts-arkui-font-uifontadjustinfo-i.md) | UI font configuration of the system. |
| [UIFontAliasInfo](arkts-arkui-font-uifontaliasinfo-i.md) | UI font configuration of the system. |
| [UIFontConfig](arkts-arkui-font-uifontconfig-i.md) | UI font configuration of the system. |
| [UIFontFallbackGroupInfo](arkts-arkui-font-uifontfallbackgroupinfo-i.md) | UI font configuration of the system. |
| [UIFontFallbackInfo](arkts-arkui-font-uifontfallbackinfo-i.md) | UI font configuration of the system. |
| [UIFontGenericInfo](arkts-arkui-font-uifontgenericinfo-i.md) | UI font configuration of the system. |

