# HitTestValue

提供点击区域的元素信息。示例代码参考 [getLastHitTest](arkts-webview-webviewcontroller-c.md#getLastHitTest).

**起始版本：** 9

**系统能力：** SystemCapability.Web.Webview.Core

## 导入模块

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## extra

```TypeScript
extra: string
```

点击区域的附加参数信息。若被点击区域为图片或链接，则附加参数信息为其url地址。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Web.Webview.Core

## type

```TypeScript
type: WebHitTestType
```

当前被点击区域的元素类型。

**类型：** WebHitTestType

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Web.Webview.Core

