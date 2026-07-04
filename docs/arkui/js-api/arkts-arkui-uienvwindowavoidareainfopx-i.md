# UIEnvWindowAvoidAreaInfoPX

Describes [environment variable](../../../../ui/arkts-env-system-property.md) data types for window avoidance areas of different types. All types of window avoidance areas are measured in px.

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@ohos.window';
```

## cutout

```TypeScript
cutout: AvoidArea
```

Avoidance area whose [AvoidAreaType](arkts-arkui-avoidareatype-e.md#avoidareatype) is **TYPE_CUTOUT** type, in px.

**Type:** AvoidArea

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## keyboard

```TypeScript
keyboard: AvoidArea
```

Avoidance area whose [AvoidAreaType](arkts-arkui-avoidareatype-e.md#avoidareatype) is **TYPE_KEYBOARD** type, in px.

**Type:** AvoidArea

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## navigationIndicator

```TypeScript
navigationIndicator: AvoidArea
```

Avoidance area whose [AvoidAreaType](arkts-arkui-avoidareatype-e.md#avoidareatype) is **TYPE_NAVIGATION_INDICATOR** type, in px.

**Type:** AvoidArea

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## statusBar

```TypeScript
statusBar: AvoidArea
```

Avoidance area whose [AvoidAreaType](arkts-arkui-avoidareatype-e.md#avoidareatype) is **TYPE_SYSTEM** type, in px.

**Type:** AvoidArea

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

