# @ohos.uiAppearance

This module provides basic capabilities for obtaining system appearance configurations, including color mode (dark/ light) settings, font size scale factors, and font weight scale factors. > **NOTE**

**Since:** 20

**System capability:** SystemCapability.ArkUI.UiAppearance

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { uiAppearance } from '@ohos.uiAppearance';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getDarkMode](arkts-arkui-getdarkmode-f-sys.md#getdarkmode-1) | Obtains the current system dark mode configuration. &lt;!--Del--&gt; &gt; **NOTE** &gt; This API is a system API in API version 19 and earlier. Using this API requires the &gt; [ohos.permission.UPDATE_CONFIGURATION](../../../../security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration) &gt; permission. &lt;!--DelEnd--&gt; |
| [getFontScale](arkts-arkui-getfontscale-f-sys.md#getfontscale-1) | Obtains the current font size scale factor. &lt;!--Del--&gt; &gt; **NOTE** &gt; This API is a system API in API version 19 and earlier. Using this API requires the &gt; [ohos.permission.UPDATE_CONFIGURATION](../../../../security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration) &gt; permission. &lt;!--DelEnd--&gt; |
| [getFontWeightScale](arkts-arkui-getfontweightscale-f-sys.md#getfontweightscale-1) | Obtains the current font weight scale factor. &lt;!--Del--&gt; &gt; **NOTE** &gt; This API is a system API in API version 19 and earlier. Using this API requires the &gt; [ohos.permission.UPDATE_CONFIGURATION](../../../../security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration) &gt; permission. &lt;!--DelEnd--&gt; |
| [setDarkMode](arkts-arkui-setdarkmode-f-sys.md#setdarkmode-1) | Sets the system color mode. This API uses an asynchronous callback to return the result. **Permission required**: ohos.permission.UPDATE_CONFIGURATION |
| [setDarkMode](arkts-arkui-setdarkmode-f-sys.md#setdarkmode-2) | Sets the system color mode. This API uses a promise to return the result. **Permission required**: ohos.permission.UPDATE_CONFIGURATION |
| [setFontScale](arkts-arkui-setfontscale-f-sys.md#setfontscale-1) | Sets the system font scale. **Permission required**: ohos.permission.UPDATE_CONFIGURATION |
| [setFontWeightScale](arkts-arkui-setfontweightscale-f-sys.md#setfontweightscale-1) | Sets the system font weight scale. **Permission required**: ohos.permission.UPDATE_CONFIGURATION |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DarkMode](arkts-arkui-darkmode-e-sys.md) | Enumerates the color modes. |
<!--DelEnd-->

