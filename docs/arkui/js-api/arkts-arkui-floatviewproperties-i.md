# FloatViewProperties

Provides the properties of the float view.

**Since:** 26.0.0

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { floatView } from '@kit.ArkUI';
```

## avoidArea

```TypeScript
avoidArea: window.AvoidArea
```

Avoid area for the content of the float view.

Note:

On the page loaded by [setUIContext](arkts-arkui-floatviewcontroller-i.md#setuicontext-1), components in the avoid
area do not respond to gesture events. When adding components that require gesture response events, avoid the
area.

**Type:** window.AvoidArea

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

## displayId

```TypeScript
displayId: number
```

ID of the display where the float view is located.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

## inSidebar

```TypeScript
inSidebar: boolean
```

Whether the float view is in the sidebar. **true**: in the sidebar; **false**: not in the sidebar.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

## templateType

```TypeScript
templateType: FloatViewTemplateType
```

Template type of the float view.

**Type:** FloatViewTemplateType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

## windowId

```TypeScript
windowId: number
```

Float view ID.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

## windowRect

```TypeScript
windowRect: window.Rect
```

Rectangle area of the float view.

**Type:** window.Rect

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

## windowScale

```TypeScript
windowScale: number
```

Scale factor of the float view.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

