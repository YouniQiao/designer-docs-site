# @ohos.font

The **font** module provides APIs for registering custom fonts. > **NOTE** > > - The functionality of this module depends on UI context. This means that the APIs of this module cannot be used > where [the UI context is ambiguous](../../../../ui/arkts-global-interface.md#ambiguous-ui-context). For details, see > [UIContext](arkts-arkui-uicontext.md). > > - You are advised to use the [loadFontSync](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-fontcollection-c.md#loadfontsync-1) API of the > font engine to register custom fonts.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { font } from '@ohos.font';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getFontByName](arkts-arkui-getfontbyname-f.md#getfontbyname-1) | Obtains information about a system font based on the font name. &gt; **NOTE** &gt; &gt; - Since API version 10, you can use the &gt; [getFont](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont) API in &gt; [UIContext](arkts-arkui-uicontext.md) to obtain the [Font](arkts-arkui-uicontext.md) object associated with &gt; the current UI context. |
| [getSystemFontList](arkts-arkui-getsystemfontlist-f.md#getsystemfontlist-1) | Obtains this system font list. This API only takes effect on PCs/2-in-1 devices and returns an empty array on other devices. You are advised to use the [getSystemFontFullNamesByType](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-getsystemfontfullnamesbytype-f.md#getsystemfontfullnamesbytype-1) API to obtain the latest system-supported font list data. &gt; **NOTE** &gt; &gt; - Since API version 10, you can use the &gt; [getFont](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont) API in &gt; [UIContext](arkts-arkui-uicontext.md) to obtain the [Font](arkts-arkui-uicontext.md) object associated with &gt; the current UI context. |
| [getUIFontConfig](arkts-arkui-getuifontconfig-f.md#getuifontconfig-1) | Obtains the UI font configuration information in the system font configuration file. This API can only obtain the information in the configuration file. If the UI context is not clear, **undefined** may be returned. If you want to obtain the full font configuration information, you are advised to use the [getSystemFontFullNamesByType](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-getsystemfontfullnamesbytype-f.md#getsystemfontfullnamesbytype-1) API of the font engine. |
| [registerFont](arkts-arkui-registerfont-f.md#registerfont-1) | Registers a custom font with the font manager. This API is asynchronous and does not support concurrent calls. &gt; **NOTE** &gt; &gt; - Since API version 10, you can use the &gt; [getFont](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont) API in &gt; [UIContext](arkts-arkui-uicontext.md) to obtain the [Font](arkts-arkui-uicontext.md) object associated with &gt; the current UI context. |

### Interfaces

| Name | Description |
| --- | --- |
| [FontInfo](arkts-arkui-fontinfo-i.md) | Information about the system font. |
| [FontOptions](arkts-arkui-fontoptions-i.md) | Information about the custom font to register. &gt; **NOTE** &gt; &gt; Directly using **font** can lead to the issue of &gt; [ambiguous UI context](../../../../ui/arkts-global-interface.md#ambiguous-ui-context). To avoid this, obtain the &gt; [Font](arkts-arkui-uicontext.md) object associated with the current UI context by using the &gt; [getFont](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont) API in &gt; [UIContext](arkts-arkui-uicontext.md). |
| [UIFontAdjustInfo](arkts-arkui-uifontadjustinfo-i.md) | UI font configuration of the system. |
| [UIFontAliasInfo](arkts-arkui-uifontaliasinfo-i.md) | UI font configuration of the system. |
| [UIFontConfig](arkts-arkui-uifontconfig-i.md) | UI font configuration of the system. |
| [UIFontFallbackGroupInfo](arkts-arkui-uifontfallbackgroupinfo-i.md) | UI font configuration of the system. |
| [UIFontFallbackInfo](arkts-arkui-uifontfallbackinfo-i.md) | UI font configuration of the system. |
| [UIFontGenericInfo](arkts-arkui-uifontgenericinfo-i.md) | UI font configuration of the system. |

