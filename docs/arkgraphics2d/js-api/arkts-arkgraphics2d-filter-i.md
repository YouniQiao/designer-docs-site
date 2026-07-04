# Filter

The Filter for Component.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { uiEffect } from '@ohos.graphics.uiEffect';
```

## blur

```TypeScript
blur(blurRadius: number): Filter
```

Set blur effect of the Component.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurRadius | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Filter | @syscap SystemCapability.Graphics.Drawing |

**Example**

```TypeScript
// xxx.ts
import { uiEffect } from '@kit.ArkGraphics2D';

let filter: uiEffect.Filter = uiEffect.createFilter();
filter.blur(10);

@Entry
@Component
struct UIEffectFilterExample {
    build(){
        Column({ space: 15 }) {
            Text('UIEffectFilter').fontSize(20).width('75%').fontColor('#DCDCDC')
            Image($r('app.media.foreground'))
                .width(100)
                .height(100)
                .backgroundImage($r('app.media.background'))
                .backgroundImagePosition(Alignment.Center)
                .backgroundImageSize({ width: 90, height: 90 })
                .backgroundFilter(filter)
        }
        .height('100%')
        .width('100%')
    }
}

```

