# Filter

The Filter for Component.

**Since:** 12

<!--Device-uiEffect-interface Filter--><!--Device-uiEffect-interface Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

<a id="blur"></a>
## blur

```TypeScript
blur(blurRadius: number): Filter
```

Set blur effect of the Component.

**Since:** 12

<!--Device-Filter-blur(blurRadius: double): Filter--><!--Device-Filter-blur(blurRadius: double): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurRadius | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | @syscap SystemCapability.Graphics.Drawing |

**Example**

```TypeScript
// xxx.ts
import { uiEffect } from '@kit.ArkGraphics2D';

// Create a Filter instance
let filter: uiEffect.Filter = uiEffect.createFilter();
// Set the blur radius to 10px
filter.blur(10);

@Entry
@Component
struct UIEffectFilterExample {
    build() {
        Column({ space: 15 }) {
            Text('UIEffectFilter').fontSize(20).width('75%').fontColor('#DCDCDC')
            Image($r('app.media.foreground'))
                .width(100)
                .height(100)
                .backgroundImage($r('app.media.background'))
                .backgroundImagePosition(Alignment.Center)
                .backgroundImageSize({ width: 90, height: 90 })
                // Apply the Filter effect to the component background
                .backgroundFilter(filter)
        }
        .height('100%')
        .width('100%')
    }
}

```

