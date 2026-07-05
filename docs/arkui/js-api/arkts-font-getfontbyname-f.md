# getFontByName

## getFontByName

```TypeScript
function getFontByName(fontName: string): FontInfo
```

根据传入的系统字体名称获取系统字体的相关信息。 > **说明：** > > -getFontByName需要先通过[UIContext]@ohos.arkui.UIContext中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取 > [Font]@ohos.arkui.UIContext对象，然后通过该对象进行调用。且直接使用getFontByName可能导致 > [UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的 > [Font]@ohos.arkui.UIContext对象。

**Since:** 10

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.Font#getFontByName

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontName | string | Yes | 系统的字体名。 |

**Return value:**

| Type | Description |
| --- | --- |
| FontInfo | 字体的详细信息。 |

