# hideAlertBeforeBackPage

## hideAlertBeforeBackPage

```TypeScript
function hideAlertBeforeBackPage(): void
```

禁用页面返回询问对话框。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用 > [hideAlertBeforeBackPage](arkts-router-c.md#hideAlertBeforeBackPage)替代。hideAlertBeforeBackPage需先 > 通过[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**Since:** 9

**Deprecated since:** 18

**Substitute:** @ohos.arkui.UIContext:Router#hideAlertBeforeBackPage

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
this.getUIContext().getRouter().hideAlertBeforeBackPage();   

```

