# getParams

## getParams

```TypeScript
function getParams(): Object
```

获取发起跳转的页面往当前页传入的参数。 > **说明：** > > - 从API version 8开始支持，从API version 18开始废弃，建议使用[getParams](arkts-router-c.md#getParams)替代。 > getParams需先通过[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。 > > getParams只获取当前页面的参数，并不会清除页面关联的参数。

**Since:** 8

**Deprecated since:** 18

**Substitute:** @ohos.arkui.UIContext:Router#getParams

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Object | 发起跳转的页面往当前页传入的参数。 |

**Example**

```TypeScript
this.getUIContext().getRouter().getParams();

```

