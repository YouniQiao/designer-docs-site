# getStateByIndex

## getStateByIndex

```TypeScript
function getStateByIndex(index: number): RouterState | undefined
```

通过索引值获取对应页面的状态信息。 > **说明：** > > - 从API version 12开始支持，从API version 18开始废弃，建议使用 > [getStateByIndex](arkts-router-c.md#getStateByIndex)替代。getStateByIndex需先通过 > [UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 12开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**Since:** 12

**Deprecated since:** 18

**Substitute:** @ohos.arkui.UIContext:Router#getStateByIndex

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 表示要获取的页面索引。从栈底到栈顶，index从1开始递增。 |

**Return value:**

| Type | Description |
| --- | --- |
| RouterState | State information about the target page; undefined if the specified index  does not exist. |

**Example**

```TypeScript
let options: router.RouterState | undefined = router.getStateByIndex(1);
if (options != undefined) {
  console.info('index = ' + options.index);
  console.info('name = ' + options.name);
  console.info('path = ' + options.path);
  console.info(`params = ${JSON.stringify(options.params)}`);
}

```

