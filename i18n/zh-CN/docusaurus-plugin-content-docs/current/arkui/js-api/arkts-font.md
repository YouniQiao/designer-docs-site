# @ohos.font

本模块提供注册自定义字体。 > **说明：** > > - 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见 > [UIContext]{@link @ohos.arkui.UIContext}说明。 > > - 推荐使用字体引擎的[loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}接口注册自定义字体。

**起始版本：** 9

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { font } from '@kit.ArkUI';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getFontByName](arkts-font-getfontbyname-f.md#getFontByName-1) | 根据传入的系统字体名称获取系统字体的相关信息。 > **说明：** > > -getFontByName需要先通过[UIContext]{@link @ohos.arkui.UIContext}中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取 > [Font]{@link @ohos.arkui.UIContext}对象，然后通过该对象进行调用。且直接使用getFontByName可能导致 > [UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的 > [Font]{@link @ohos.arkui.UIContext}对象。 |
| [getSystemFontList](arkts-font-getsystemfontlist-f.md#getSystemFontList-1) | 获取系统字体列表。 该接口仅在PC/2in1设备上生效，在其他设备上返回空数组。 推荐使用[getSystemFontFullNamesByType]{@link @ohos.graphics.text:text.getSystemFontFullNamesByType}接口获取系统最新支持的字体列表数据。 > **说明：** > > -getSystemFontList需要先通过[UIContext]{@link @ohos.arkui.UIContext}中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取 > [Font]{@link @ohos.arkui.UIContext}对象，然后通过该对象进行调用。且直接使用getSystemFontList可能导致 > [UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的 > [Font]{@link @ohos.arkui.UIContext}对象。 |
| [getUIFontConfig](arkts-font-getuifontconfig-f.md#getUIFontConfig-1) | 获取系统字体配置文件的UI字体配置信息。 该接口仅支持获取配置文件内的信息以及当UI上下文不明确时可能返回undefined，如果想要获取全量的字体配置信息，推荐使用字体引擎的 [getSystemFontFullNamesByType]{@link @ohos.graphics.text:text.getSystemFontFullNamesByType}接口。 |
| [registerFont](arkts-font-registerfont-f.md#registerFont-1) | 在字体管理中注册自定义字体。 该接口为异步接口，不支持并发调用。 > **说明：** > > -registerFont需要先通过[UIContext]{@link @ohos.arkui.UIContext}中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取 > [Font]{@link @ohos.arkui.UIContext}对象，然后通过该对象进行调用。且直接使用registerFont可能导致 > [UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的 > [Font]{@link @ohos.arkui.UIContext}对象。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [FontInfo](arkts-font-fontinfo-i.md) | 字体的详细信息。 |
| [FontOptions](arkts-font-fontoptions-i.md) | 注册的自定义字体信息。 > **说明：** > > 直接使用font可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，推荐通过使用 > [UIContext]{@link @ohos.arkui.UIContext}中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的 > [Font]{@link @ohos.arkui.UIContext}对象。 |
| [UIFontAdjustInfo](arkts-font-uifontadjustinfo-i.md) | 系统的UI字体配置信息。 |
| [UIFontAliasInfo](arkts-font-uifontaliasinfo-i.md) | 系统的UI字体配置信息。 |
| [UIFontConfig](arkts-font-uifontconfig-i.md) | 系统的UI字体配置信息。 |
| [UIFontFallbackGroupInfo](arkts-font-uifontfallbackgroupinfo-i.md) | 系统的UI字体配置信息。 |
| [UIFontFallbackInfo](arkts-font-uifontfallbackinfo-i.md) | 系统的UI字体配置信息。 |
| [UIFontGenericInfo](arkts-font-uifontgenericinfo-i.md) | 系统的UI字体配置信息。 |

