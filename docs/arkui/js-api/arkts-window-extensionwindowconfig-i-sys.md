# ExtensionWindowConfig

创建扩展窗口时需要配置的参数。

**Since:** 14

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## windowAttribute

```TypeScript
windowAttribute: ExtensionWindowAttribute
```

窗口的属性。用于配置创建的窗口是子窗口还是系统窗口。当windowAttribute配置为SUB_WINDOW时须配置subWindowOptions，当windowAttribute配置为SYSTEM_WINDOW时须配置 systemWindowOptions，否则创建窗口失败。

**Type:** ExtensionWindowAttribute

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## windowRect

```TypeScript
windowRect: Rect
```

窗口矩形区域。

**Type:** Rect

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## windowName

```TypeScript
windowName: string
```

窗口名。

**Type:** string

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## systemWindowOptions

```TypeScript
systemWindowOptions?: SystemWindowOptions
```

创建系统窗口的参数。无默认参数，当windowAttribute配置为SYSTEM_WINDOW时必选，否则会导致窗口创建失败。

**Type:** SystemWindowOptions

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## subWindowOptions

```TypeScript
subWindowOptions?: SubWindowOptions
```

创建子窗口的参数。无默认参数，当windowAttribute配置为SUB_WINDOW时必选，否则会导致窗口创建失败。

**Type:** SubWindowOptions

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

