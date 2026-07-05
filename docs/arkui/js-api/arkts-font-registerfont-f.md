# registerFont

## registerFont

```TypeScript
function registerFont(options: FontOptions): void
```

在字体管理中注册自定义字体。 该接口为异步接口，不支持并发调用。 > **说明：** > > -registerFont需要先通过[UIContext]@ohos.arkui.UIContext中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取 > [Font]@ohos.arkui.UIContext对象，然后通过该对象进行调用。且直接使用registerFont可能导致 > [UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的 > [Font]@ohos.arkui.UIContext对象。

**Since:** 9

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.Font#registerFont

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FontOptions | Yes | 注册的自定义字体信息。 |

