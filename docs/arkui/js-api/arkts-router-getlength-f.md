# getLength

## getLength

```TypeScript
function getLength(): string
```

获取当前在页面栈内的页面数量。 > **说明：** > > - 从API version 8开始支持，从API version 18开始废弃，建议使用[getLength](arkts-router-c.md#getLength)替代。 > getLength需先通过[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**Since:** 8

**Deprecated since:** 18

**Substitute:** @ohos.arkui.UIContext:Router#getLength

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | 页面数量，页面栈支持最大数值是32。 |

**Example**

```TypeScript
let size = this.getUIContext().getRouter().getLength();
console.info('pages stack size = ' + size);

```

