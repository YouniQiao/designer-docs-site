# WindowFilter

Provides the flag attributes of this window.

**Since:** 9

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@ohos.UiTest';
```

## active

```TypeScript
active?: boolean
```

Whether the window is interacting with the user. The value **true** indicates that the window is interacting with the user, and **false** indicates the opposite.

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

## actived

```TypeScript
actived?: boolean
```

Whether the window is interacting with the user. The value **true** indicates that the window is interacting with the user, and **false** indicates the opposite. This API is deprecated since API version 11. You are advised to use the **active** API instead.

**Type:** boolean

**Since:** 9

**Deprecated since:** 11

**Substitutes:** active

**System capability:** SystemCapability.Test.UiTest

## bundleName

```TypeScript
bundleName?: string
```

Bundle name of the application to which the window belongs. The default value is empty.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

## displayId

```TypeScript
displayId?: number
```

ID of the display to which the window belongs. The value is an integer greater than or equal to 0. The default value is the default screen ID of the device.

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.UiTest

## focused

```TypeScript
focused?: boolean
```

Whether the window is focused. The value **true** indicates that the window is focused, and **false** indicates the opposite. The default value is **false**.

**Type:** boolean

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

## title

```TypeScript
title?: string
```

Title of the window. The default value is empty.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

