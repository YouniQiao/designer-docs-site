# matchMediaSync

## matchMediaSync

```TypeScript
function matchMediaSync(condition: string): MediaQueryListener
```

设置媒体查询的查询条件，并返回对应的监听句柄。 > **说明：** > > -matchMediaSync需先通过[UIContext]@ohos.arkui.UIContext中的 > [getMediaQuery](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmediaquery)方法获取 > [MediaQuery]@ohos.arkui.UIContext对象，然后通过该对象进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getMediaQuery](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmediaquery)方法获取当前UI上下文关联的 > [MediaQuery]@ohos.arkui.UIContext对象。

**Since:** 7

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.MediaQuery#matchMediaSync

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | string | Yes | 媒体事件的匹配条件，具体可参考[媒体查询语法规则](docroot://ui/arkts-layout-development-media-query.md#语法规则)。 |

**Return value:**

| Type | Description |
| --- | --- |
| MediaQueryListener | 媒体事件监听句柄，用于注册和注销监听回调。 |

**Example**

```TypeScript
import { mediaquery } from '@kit.ArkUI';

let listener: mediaquery.MediaQueryListener = mediaquery.matchMediaSync('(orientation: landscape)'); // Listen for landscape events.

```

