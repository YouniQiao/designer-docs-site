# AnimatorResult

定义Animator结果接口。

**Since:** 6

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AnimatorOptions,SimpleAnimatorOptions,AnimatorResult } from '@kit.ArkUI';
```

## cancel

```TypeScript
cancel(): void
```

取消动画，会触发[onCancel](docroot://reference/apis-arkui/js-apis-animator.md#属性)回调。此接口和 [finish](arkts-animatorresult-i.md#finish)接口功能上没有区别，仅触发的回调不同，建议使用finish接口结束动画。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
animator.cancel();

```

## finish

```TypeScript
finish(): void
```

结束动画，会触发[onFinish](docroot://reference/apis-arkui/js-apis-animator.md#属性)回调。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
animator.finish();

```

## pause

```TypeScript
pause(): void
```

暂停动画。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
animator.pause();

```

## play

```TypeScript
play(): void
```

启动动画。动画会保留上一次的播放状态，比如播放状态设置reverse后，再次播放会保留reverse的播放状态。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
animator.play();

```

## reset

```TypeScript
reset(options: AnimatorOptions): void
```

重置当前animator动画参数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AnimatorOptions | Yes | 定义动画选项。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | The specified page is not found or the object property list is not obtained. |

**Example**

```TypeScript
import { AnimatorResult } from '@kit.ArkUI';

@Entry
@Component
struct AnimatorTest {
  private animatorResult: AnimatorResult | undefined = undefined;

  create() {
    this.animatorResult = this.getUIContext().createAnimator({
      duration: 1500,
      easing: "friction",
      delay: 0,
      fill: "forwards",
      direction: "normal",
      iterations: 3,
      begin: 200.0,
      end: 400.0
    })
    this.animatorResult.reset({
      duration: 1500,
      easing: "friction",
      delay: 0,
      fill: "forwards",
      direction: "normal",
      iterations: 5,
      begin: 200.0,
      end: 400.0
    });
  }

  build() {
    // ......
  }
}

```

## reset

```TypeScript
reset(options: AnimatorOptions | SimpleAnimatorOptions): void
```

重置当前animator动画参数。与[reset](arkts-animatorresult-i.md#reset)相比，新增对 [SimpleAnimatorOptions](arkts-simpleanimatoroptions-c.md#SimpleAnimatorOptions)类型入参的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AnimatorOptions \| SimpleAnimatorOptions | Yes | 定义动画选项。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | The specified page is not found or the object property list is not obtained. |

**Example**

```TypeScript
import { Animator as animator, AnimatorResult, AnimatorOptions, SimpleAnimatorOptions } from '@kit.ArkUI';

let options: AnimatorOptions = {
  duration: 1500,
  easing: "ease",
  delay: 0,
  fill: "forwards",
  direction: "normal",
  iterations: 1,
  begin: 100,
  end: 200
};
let optionsNew: SimpleAnimatorOptions = new SimpleAnimatorOptions(100, 200)
  .duration(2000)
  .iterations(3)
  .delay(1000);
let animatorResult: AnimatorResult = animator.create(options);
animatorResult.reset(optionsNew);

```

## reverse

```TypeScript
reverse(): void
```

以相反的顺序播放动画。使用interpolating-spring曲线时此接口无效。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
animator.reverse();

```

## setExpectedFrameRateRange

```TypeScript
setExpectedFrameRateRange(rateRange: ExpectedFrameRateRange): void
```

设置期望的帧率范围。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rateRange | ExpectedFrameRateRange | Yes | 设置期望的帧率范围。 |

**Example**

```TypeScript
import { AnimatorResult } from '@kit.ArkUI';

let expectedFrameRate: ExpectedFrameRateRange = {
  min: 0,
  max: 120,
  expected: 30
}

@Entry
@Component
struct AnimatorTest {
  private backAnimator: AnimatorResult | undefined = undefined

  create() {
    this.backAnimator = this.getUIContext().createAnimator({
      duration: 2000,
      easing: "ease",
      delay: 0,
      fill: "forwards",
      direction: "normal",
      iterations: 1,
      begin: 100, // Start point of the animation interpolation.
      end: 200 // End point of the animation interpolation.
    })
    this.backAnimator.setExpectedFrameRateRange(expectedFrameRate);
  }

  build() {
    // ......
  }
}

```

## update

```TypeScript
update(options: AnimatorOptions): void
```

更新当前动画器。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃。建议使用[reset](arkts-animatorresult-i.md#reset)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** AnimatorResult.reset(options:

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AnimatorOptions | Yes | 定义动画选项。 |

**Example**

```TypeScript
animator.update(options);

```

## oncancel

```TypeScript
oncancel: () => void
```

动画被取消时回调。 **说明:** 从API version 6开始支持，从API version 12开始废弃，推荐使用onCancel。

**Type:** () => void

**Since:** 6

**Deprecated since:** 12

**Substitute:** ohos.animator.onCancel

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onframe

```TypeScript
onframe: (progress: number) => void
```

接收到帧时回调。 **说明:** 从API version 6开始支持，从API version 12开始废弃，推荐使用onFrame。

**Type:** (progress: number) => void

**Since:** 6

**Deprecated since:** 12

**Substitute:** ohos.animator.onFrame

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onrepeat

```TypeScript
onrepeat: () => void
```

动画重复时回调。 **说明:** 从API version 6开始支持，从API version 12开始废弃，推荐使用onRepeat。

**Type:** () => void

**Since:** 6

**Deprecated since:** 12

**Substitute:** ohos.animator.onRepeat

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCancel

```TypeScript
onCancel: () => void
```

动画被取消时回调。

**Type:** () => void

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onFrame

```TypeScript
onFrame: (progress: number) => void
```

接收到帧时回调。 progress表示动画的当前值。取值范围为[AnimatorOptions](arkts-animatoroptions-i.md#AnimatorOptions)定义的[begin, end]，默认取值范围为[0, 1]。

**Type:** (progress: number) => void

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onRepeat

```TypeScript
onRepeat: () => void
```

动画重复时回调。

**Type:** () => void

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onfinish

```TypeScript
onfinish: () => void
```

动画完成时回调。 **说明:** 从API version 6开始支持，从API version 12开始废弃，推荐使用onFinish。

**Type:** () => void

**Since:** 6

**Deprecated since:** 12

**Substitute:** ohos.animator.onFinish

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onFinish

```TypeScript
onFinish: () => void
```

动画完成时回调。

**Type:** () => void

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

