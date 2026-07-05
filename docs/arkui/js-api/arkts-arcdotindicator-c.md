# ArcDotIndicator

提供弧形圆点指示器属性及功能。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSwiperAttribute,ArcSwiper,ArcDirection,ArcSwiperController,ArcDotIndicator } from '@kit.ArkUI';
```

## arcDirection

```TypeScript
arcDirection(direction: Optional<ArcDirection>): ArcDotIndicator
```

设置弧形指示器的方向。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | Optional&lt;ArcDirection> | Yes | 设置弧形指示器的方向。 默认值：ArcDirection.SIX_CLOCK_DIRECTION，6点钟方向。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcDotIndicator | 提供弧形圆点指示器属性及功能。 |

## backgroundColor

```TypeScript
backgroundColor(color: Optional<ResourceColor>): ArcDotIndicator
```

设置弧形指示器被长按时，弧形指示器的颜色。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ResourceColor> | Yes | 设置弧形指示器被长按时，弧形指示器的颜色。 默认值：'#FF404040' |

**Return value:**

| Type | Description |
| --- | --- |
| ArcDotIndicator | 提供弧形圆点指示器属性及功能。 |

## constructor

```TypeScript
constructor()
```

ArcDotIndicator的构造函数。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## itemColor

```TypeScript
itemColor(color: Optional<ResourceColor>): ArcDotIndicator
```

设置弧形指示器中，未选中导航点的颜色。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ResourceColor> | Yes | 设置弧形指示器中，未选中导航点的颜色。 默认值：'#A9FFFFFF' |

**Return value:**

| Type | Description |
| --- | --- |
| ArcDotIndicator | 提供弧形圆点指示器属性及功能。 |

## maskColor

```TypeScript
maskColor(color: Optional<LinearGradient>): ArcDotIndicator
```

设置弧形指示器的遮罩渐变色。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;LinearGradient> | Yes | 设置弧形指示器的遮罩渐变色。 起始颜色默认值：'#00000000' 结束颜色默认值：'#FF000000' |

**Return value:**

| Type | Description |
| --- | --- |
| ArcDotIndicator | 提供弧形圆点指示器属性及功能。 |

## selectedItemColor

```TypeScript
selectedItemColor(color: Optional<ResourceColor>): ArcDotIndicator
```

设置弧形指示器中，选中导航点的颜色。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ResourceColor> | Yes | 设置弧形指示器中，选中导航点的颜色。 默认值：'#FF5EA1FF' |

**Return value:**

| Type | Description |
| --- | --- |
| ArcDotIndicator | 提供弧形圆点指示器属性及功能。 |

