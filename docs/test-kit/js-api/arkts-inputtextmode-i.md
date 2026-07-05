# InputTextMode

描述文本输入模式。

**Since:** 20

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## paste

```TypeScript
paste?: boolean
```

是否复制粘贴文本。值**true**表示复制粘贴文本，**false**表示键入文本。默认值：**false** **注意**：如果输入文本包含中文字符、特殊字符或文本长度超过200个字符， 无论此参数值如何，都将采用复制粘贴方式。

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## addition

```TypeScript
addition?: boolean
```

是否以追加模式输入文本。值**true**表示以追加模式输入文本，**false**表示相反。默认值：**false

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

