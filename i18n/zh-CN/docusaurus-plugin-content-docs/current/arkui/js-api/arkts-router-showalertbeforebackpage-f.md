# showAlertBeforeBackPage

## showAlertBeforeBackPage

```TypeScript
function showAlertBeforeBackPage(options: EnableAlertOptions): void
```

开启页面返回询问对话框。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用 > [showAlertBeforeBackPage](arkts-router-c.md#showAlertBeforeBackPage)替代。showAlertBeforeBackPage需先 > 通过[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**起始版本：** 9

**废弃版本：** 18

**替代接口：** @ohos.arkui.UIContext:Router#showAlertBeforeBackPage

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | EnableAlertOptions | 是 | 文本弹窗信息描述。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |

**示例：**

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

