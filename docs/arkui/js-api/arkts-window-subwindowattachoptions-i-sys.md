# SubWindowAttachOptions

子窗与主窗保持相对位置不变时的参数。

**Since:** 24

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## isIntersectedWidthLimit

```TypeScript
isIntersectedWidthLimit?: boolean
```

是否使用处于协同关系中两个窗口的宽度限制的交集。

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## currentLayoutMode

```TypeScript
currentLayoutMode?: string
```

子窗当前布局模式，用于控制应用定制的UI效果。若不传，则默认为空字符串。

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## parentWindowSizeChangeCallback

```TypeScript
parentWindowSizeChangeCallback?: Callback<Size>
```

父窗大小变化的回调。绑定后立即回调一次，后续父窗大小变化时通知。默认不传，无法收到父窗大小变化通知。

**Type:** Callback<Size>

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## parentWindowStatusChangeCallback

```TypeScript
parentWindowStatusChangeCallback?: Callback<WindowStatusType>
```

父窗模式变化的回调。绑定后立即回调一次，后续父窗模式变化时通知。默认不传，无法收到父窗模式变化通知。

**Type:** Callback<WindowStatusType>

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## isIntersectedHeightLimit

```TypeScript
isIntersectedHeightLimit?: boolean
```

是否使用处于协同关系中两个窗口的高度限制的交集。

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

