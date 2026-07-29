# disableAlertBeforeBackPage

## 导入模块

```TypeScript
import { router } from '@kit.ArkUI';
```

## disableAlertBeforeBackPage

```TypeScript
function disableAlertBeforeBackPage(): void
```

禁用页面返回询问对话框。调用此方法后，将关闭由[showAlertBeforeBackPage](#routershowalertbeforebackpagedeprecated)开启的返回询问对话框，[back](#routerbackdeprecated)操作将不再弹出确认对话框，直接执行页面返回。
> **说明：**  
>  
> 从API version 8开始支持，从API version 9开始废弃，建议使用  
> [hideAlertBeforeBackPage](arkts-arkui-arkui-uicontext-router-c.md#hidealertbeforebackpage)替代。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [hideAlertBeforeBackPage](arkts-arkui-arkui-uicontext-router-c.md#hidealertbeforebackpage)

<!--Device-router-function disableAlertBeforeBackPage(): void--><!--Device-router-function disableAlertBeforeBackPage(): void-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**示例：**

```TypeScript
import { router } from '@kit.ArkUI';

router.disableAlertBeforeBackPage();

```

