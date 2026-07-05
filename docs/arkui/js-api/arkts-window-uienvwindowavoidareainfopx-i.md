# UIEnvWindowAvoidAreaInfoPX

窗口不同类型避让区域信息组成的[环境变量](docroot://ui/arkts-env-system-property.md)数据类型，每种类型避让区域单位为px。

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## keyboard

```TypeScript
keyboard: AvoidArea
```

表示[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_KEYBOARD类型的避让区域，单位为px。

**Type:** AvoidArea

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## navigationIndicator

```TypeScript
navigationIndicator: AvoidArea
```

表示[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_NAVIGATION_INDICATOR类型的避让区域，单位为px。

**Type:** AvoidArea

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## cutout

```TypeScript
cutout: AvoidArea
```

表示[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_CUTOUT类型的避让区域，单位为px。

**Type:** AvoidArea

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## statusBar

```TypeScript
statusBar: AvoidArea
```

表示[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_SYSTEM类型的避让区域，单位为px。

**Type:** AvoidArea

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

