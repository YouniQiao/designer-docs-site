# showAlertBeforeBackPage

## showAlertBeforeBackPage

```TypeScript
function showAlertBeforeBackPage(options: EnableAlertOptions): void
```

开启页面返回询问对话框。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用 > [showAlertBeforeBackPage](arkts-router-c.md#showAlertBeforeBackPage)替代。showAlertBeforeBackPage需先 > 通过[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**Since:** 9

**Deprecated since:** 18

**Substitute:** @ohos.arkui.UIContext:Router#showAlertBeforeBackPage

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | EnableAlertOptions | Yes | 文本弹窗信息描述。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  this.getUIContext().getRouter().showAlertBeforeBackPage({
    message: 'Message Info'
  });
} catch (err) {
  console.error(`showAlertBeforeBackPage failed, code is ${(err as BusinessError).code}, message is ${(err as BusinessError).message}`);
}

```

