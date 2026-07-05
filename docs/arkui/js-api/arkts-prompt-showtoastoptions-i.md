# ShowToastOptions

Defines the options of ShowToast.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.promptAction/promptAction.ShowToastOptions

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { prompt } from '@kit.ArkUI';
```

## duration

```TypeScript
duration?: number
```

Duration of toast dialog box. The default value is 1500. The recommended value ranges from 1500 ms to 10000ms. NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000 ms.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.promptAction/promptAction.ShowToastOptions#duration

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## bottom

```TypeScript
bottom?: string | number
```

The distance between toast dialog box and the bottom of screen.

**Type:** string | number

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.promptAction/promptAction.ShowToastOptions#bottom

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message: string
```

Text to display.

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.promptAction/promptAction.ShowToastOptions#message

**System capability:** SystemCapability.ArkUI.ArkUI.Full

