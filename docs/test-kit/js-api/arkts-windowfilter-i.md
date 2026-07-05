# WindowFilter

提供此窗口的标志属性。

**Since:** 9

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## focused

```TypeScript
focused?: boolean
```

窗口是否已聚焦。值**true**表示窗口已聚焦，**false**表示未聚焦。默认值为**false**。

**Type:** boolean

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## active

```TypeScript
active?: boolean
```

窗口是否正在与用户交互。值**true**表示窗口正在与用户交互，**false**表示未交互。

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## bundleName

```TypeScript
bundleName?: string
```

窗口所属应用的包名。默认值为空。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## displayId

```TypeScript
displayId?: int
```

窗口所属的显示ID。该值为大于或等于0的整数。默认值为设备的默认屏幕ID。

**Type:** int

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## title

```TypeScript
title?: string
```

窗口标题。默认值为空。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## actived

```TypeScript
actived?: boolean
```

窗口是否正在与用户交互。值**true**表示窗口正在与用户交互，**false**表示未交互。 该API自API版本11起废弃。建议使用**active** API替代。

**Type:** boolean

**Since:** 9

**Deprecated since:** 11

**Substitute:** ohos.UiTest.WindowFilter#active

**System capability:** SystemCapability.Test.UiTest

