# FloatViewProperties

标准悬浮窗窗口的属性。

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

## inSidebar

```TypeScript
inSidebar: boolean
```

标准悬浮窗是否在侧边栏中。true为在侧边栏中，false为不在侧边栏中。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## windowRect

```TypeScript
windowRect: window.Rect
```

标准悬浮窗窗口矩形区域。

**Type:** window.Rect

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## windowScale

```TypeScript
windowScale: double
```

标准悬浮窗窗口缩放比例。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## avoidArea

```TypeScript
avoidArea: window.AvoidArea
```

标准悬浮窗内容的避让区域。 **注意：** 通过[setUIContext()]floatView.FloatViewController.setUIContext或 [setUIContextByName()]floatView.FloatViewController.setUIContextByName加载的页面中，位于避让区域的组件将不响应手势事件，添加需要手势响应事件 的组件时，请注意避让这些区域。

**Type:** window.AvoidArea

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## displayId

```TypeScript
displayId: int
```

标准悬浮窗所在屏幕ID。 取值限定为整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## windowId

```TypeScript
windowId: int
```

标准悬浮窗窗口ID。 取值限定为整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

