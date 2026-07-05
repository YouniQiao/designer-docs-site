# showToast

## showToast

```TypeScript
function showToast(options: ShowToastOptions): void
```

Displays the notification text.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.arkui.UIContext.PromptAction#showToast

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ShowToastOptions | 是 | Options. |

**示例：**

```TypeScript
import prompt from '@ohos.prompt'
prompt.showToast({
  message: 'Message Info',
    duration: 2000
});

```

