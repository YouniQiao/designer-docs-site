# ShowWindowOptions

显示子窗口或系统窗口时的参数。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## focusOnShow

```TypeScript
focusOnShow?: boolean
```

窗口调用[showWindow()](arkts-window-window-i.md#showWindow)显示时是否自动获焦，默认为true。该参数对 主窗、模态窗、dialog窗口不生效。

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

