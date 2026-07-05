# FloatViewConfiguration

创建标准悬浮窗控制器时需要提供的参数配置。

**Since:** 26.0.0

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { floatView } from '@kit.ArkUI';
```

## templateType

```TypeScript
templateType: FloatViewTemplateType
```

标准悬浮窗的模板类型。

**Type:** FloatViewTemplateType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## isConfirmOnClose

```TypeScript
isConfirmOnClose?: boolean
```

控制关闭窗口时是否弹出确认对话框.如果为 true，则点击关闭按钮时需要用户确认；如果为 false，则不需要确认，直接关闭。 默认值： 默认值为false。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## context

```TypeScript
context: BaseContext
```

表示上下文环境。

**Type:** BaseContext

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

