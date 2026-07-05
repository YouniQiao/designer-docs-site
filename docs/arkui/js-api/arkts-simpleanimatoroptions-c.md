# SimpleAnimatorOptions

animator简易动画参数对象。与AnimatorOptions相比，部分动画参数有默认值，可不设置。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AnimatorOptions,SimpleAnimatorOptions,AnimatorResult } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(begin: number, end: number)
```

SimpleAnimatorOptions的构造函数。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | Yes | 动画插值起点。 |
| end | number | Yes | 动画插值终点。 |

**Example**

```TypeScript
import { AnimatorResult, SimpleAnimatorOptions } from '@kit.ArkUI';

@Entry
@Component
struct AnimatorTest {
  private animatorResult: AnimatorResult | undefined = undefined;
  options: SimpleAnimatorOptions = new SimpleAnimatorOptions(100, 200); // Animation interpolation from 100 to 200, with other animation parameters set to default values.

  create() {
    this.animatorResult = this.getUIContext().createAnimator(this.options);
  }

  build() {
    // ......
  }
}

```

## delay

```TypeScript
delay(delay: number): SimpleAnimatorOptions
```

设置animator动画播放时延。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| delay | number | Yes | 设置animator动画播放时延，单位毫秒，设置为0时，表示不延时。设置为负数时动画提前播放，如果提前播放的时长大于动画总时长，动画直接过渡到终点。 默认值：0 |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleAnimatorOptions | Animator简易动画参数对象。 |

**Example**

```TypeScript
import { AnimatorResult, SimpleAnimatorOptions } from '@kit.ArkUI';

@Entry
@Component
struct AnimatorTest {
  private animatorResult: AnimatorResult | undefined = undefined;
  options: SimpleAnimatorOptions = new SimpleAnimatorOptions(100, 200).delay(500);

  create() {
    this.animatorResult = this.getUIContext().createAnimator(this.options);
  }

  build() {
    // ......
  }
}

```

## direction

```TypeScript
direction(direction: PlayMode): SimpleAnimatorOptions
```

设置animator动画播放方向。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | PlayMode | Yes | 设置animator动画播放方向。 默认值：PlayMode.Normal |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleAnimatorOptions | Animator简易动画参数对象。 |

## duration

```TypeScript
duration(duration: number): SimpleAnimatorOptions
```

设置animator动画时长。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| duration | number | Yes | 设置动画时长，单位毫秒。 默认值：1000 |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleAnimatorOptions | Animator简易动画参数对象。 |

**Example**

```TypeScript
import { AnimatorResult, SimpleAnimatorOptions } from '@kit.ArkUI';

@Entry
@Component
struct AnimatorTest {
  private animatorResult: AnimatorResult | undefined = undefined;
  options: SimpleAnimatorOptions = new SimpleAnimatorOptions(100, 200).duration(500);

  create() {
    this.animatorResult = this.getUIContext().createAnimator(this.options);
  }

  build() {
    // ......
  }
}

```

## easing

```TypeScript
easing(curve: string): SimpleAnimatorOptions
```

设置animator动画插值曲线。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| curve | string | Yes | 设置animator动画插值曲线，具体说明参考[AnimatorOptions](arkts-animatoroptions-i.md#AnimatorOptions)。 默认值：“ease” |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleAnimatorOptions | Animator简易动画参数对象。 |

**Example**

```TypeScript
import { AnimatorResult, SimpleAnimatorOptions } from '@kit.ArkUI';

@Entry
@Component
struct AnimatorTest {
  private animatorResult: AnimatorResult | undefined = undefined;
  options: SimpleAnimatorOptions = new SimpleAnimatorOptions(100, 200).easing("ease-in");

  create() {
    this.animatorResult = this.getUIContext().createAnimator(this.options);
  }

  build() {
    // ......
  }
}

```

## fill

```TypeScript
fill(fillMode: FillMode): SimpleAnimatorOptions
```

设置animator动画填充方式。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fillMode | FillMode | Yes | 设置animator动画填充方式，影响动画delay期间和结束时的表现。 默认值：FillMode.Forwards |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleAnimatorOptions | Animator简易动画参数对象。 |

## iterations

```TypeScript
iterations(iterations: number): SimpleAnimatorOptions
```

设置animator动画播放次数。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iterations | number | Yes | 设置animator动画播放次数，设置为0时不播放，设置为-1时无限次播放。 默认值：1 |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleAnimatorOptions | Animator简易动画参数对象。 |

**Example**

```TypeScript
import { AnimatorResult, SimpleAnimatorOptions } from '@kit.ArkUI';

@Entry
@Component
struct AnimatorTest {
  private animatorResult: AnimatorResult | undefined = undefined;
  options: SimpleAnimatorOptions = new SimpleAnimatorOptions(100, 200).iterations(3);

  create() {
    this.animatorResult = this.getUIContext().createAnimator(this.options);
  }

  build() {
    // ......
  }
}

```

