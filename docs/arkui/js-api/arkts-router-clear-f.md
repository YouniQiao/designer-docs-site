# clear

## clear

```TypeScript
function clear(): void
```

清空页面栈中的所有历史页面，仅保留当前页面作为栈顶页面。 > **说明：** > > - 从API version 8开始支持，从API version 18开始废弃，建议使用[clear](arkts-router-c.md#clear)替代。clear需先通过 > [UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**Since:** 8

**Deprecated since:** 18

**Substitute:** @ohos.arkui.UIContext:Router#clear

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
this.getUIContext().getRouter().clear();

```

