# onAttachmentDidFail

## onAttachmentDidFail

```TypeScript
function onAttachmentDidFail(callback: Callback<AttachFailureReason>): void
```

Subscribe the attachment failure event.

**起始版本：** 22

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AttachFailureReason> | 是 | the callback is invoked only when the attachment  triggered by the registrant's process fails. |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let attachmentDidFailCallback: Callback<inputMethod.AttachFailureReason> = 
  (reason: inputMethod.AttachFailureReason): void => {
    console.info(`Attachment failed with reason: ${reason}.`);
  if (reason === inputMethod.AttachFailureReason.CALLER_NOT_FOCUSED) {
    console.info(`Failure reason is CALLER_NOT_FOCUSED.`);
  }
  };
inputMethod.onAttachmentDidFail(attachmentDidFailCallback);

```

