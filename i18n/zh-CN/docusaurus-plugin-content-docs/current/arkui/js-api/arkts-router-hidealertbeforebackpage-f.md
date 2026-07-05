# hideAlertBeforeBackPage

## hideAlertBeforeBackPage

```TypeScript
function hideAlertBeforeBackPage(): void
```

禁用页面返回询问对话框。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用 > [hideAlertBeforeBackPage](arkts-router-c.md#hideAlertBeforeBackPage)替代。hideAlertBeforeBackPage需先 > 通过[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**起始版本：** 9

**废弃版本：** 18

**替代接口：** @ohos.arkui.UIContext:Router#hideAlertBeforeBackPage

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**示例：**

```TypeScript
this.getUIContext().getRouter().hideAlertBeforeBackPage();   

```

