# Animator

Creates an **Animator** object.

**Since:** 6

<!--Device-unnamed-export default class Animator--><!--Device-unnamed-export default class Animator-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AnimatorOptions, SimpleAnimatorOptions, AnimatorResult } from '@kit.ArkUI';
```

## create

```TypeScript
static create(options: AnimatorOptions): AnimatorResult
```

Creates an **AnimatorResult** object for animations.

> **NOTE**  
>  
> - Since API version 10, you can use the  
> [createAnimator](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#createanimator) API in  
> [UIContext](arkts-arkui-uicontext.md), which ensures that the object is created in the intended UI instance.

**Since:** 9

**Deprecated since:** 18

**Substitutes:** createAnimator

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Animator-static create(options: AnimatorOptions): AnimatorResult--><!--Device-Animator-static create(options: AnimatorOptions): AnimatorResult-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [AnimatorOptions](arkts-arkui-animator-animatoroptions-i.md) | Yes | Animator options. |

**Return value:**

| Type | Description |
| --- | --- |
| [AnimatorResult](arkts-arkui-animator-animatorresult-i.md) | Animator result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

**Example**

For precise UI context management, use the [createAnimator](arkts-apis-uicontext-uicontext.md#createanimator) API in [UIContext](arkts-apis-uicontext-uicontext.md) to specify the execution context.

```TypeScript
import { Animator as animator, AnimatorOptions } from '@kit.ArkUI';

let options: AnimatorOptions = {
  duration: 1500,
  easing: "friction",
  delay: 0,
  fill: "forwards",
  direction: "normal",
  iterations: 3,
  begin: 200.0,
  end: 400.0
};
animator.create(options); // You are advised to use UIContext.createAnimator().

```

## create

```TypeScript
static create(options: AnimatorOptions | SimpleAnimatorOptions): AnimatorResult
```

Creates an **AnimatorResult** object for animations. Compared with [create](Animator.create(options: AnimatorOptions)), this API accepts parameters of the [SimpleAnimatorOptions](arkts-arkui-animator-simpleanimatoroptions-c.md) type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Animator-static create(options: AnimatorOptions | SimpleAnimatorOptions): AnimatorResult--><!--Device-Animator-static create(options: AnimatorOptions | SimpleAnimatorOptions): AnimatorResult-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AnimatorOptions \| SimpleAnimatorOptions | Yes | Parameters of the animation. |

**Return value:**

| Type | Description |
| --- | --- |
| [AnimatorResult](arkts-arkui-animator-animatorresult-i.md) | Animator result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

**Example**

For precise UI context management, use the [createAnimator](arkts-apis-uicontext-uicontext.md#createanimator) API in [UIContext](arkts-apis-uicontext-uicontext.md) to specify the execution context.

```TypeScript
import { Animator as animator, SimpleAnimatorOptions } from '@kit.ArkUI';
let options: SimpleAnimatorOptions = new SimpleAnimatorOptions(100, 200).duration(2000);
animator.create(options);// You are advised to use UIContext.createAnimator().

```

## createAnimator

```TypeScript
static createAnimator(options: AnimatorOptions): AnimatorResult
```

Creates an animation.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** create

<!--Device-Animator-static createAnimator(options: AnimatorOptions): AnimatorResult--><!--Device-Animator-static createAnimator(options: AnimatorOptions): AnimatorResult-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [AnimatorOptions](arkts-arkui-animator-animatoroptions-i.md) | Yes | Animator options. |

**Return value:**

| Type | Description |
| --- | --- |
| [AnimatorResult](arkts-arkui-animator-animatorresult-i.md) | Animator result. |

**Example**

See [ArkTS-based Declarative Development Paradigm](#arkts-based-declarative-development-paradigm).

```TypeScript
import { Animator as animator } from '@kit.ArkUI';

let options: AnimatorOptions = {
  // There is no need to explicitly specify the type AnimatorOptions in the xxx.js file.
  duration: 1500,
  easing: "friction",
  delay: 0,
  fill: "forwards",
  direction: "normal",
  iterations: 3,
  begin: 200.0,
  end: 400.0,
};
this.animator = animator.createAnimator(options);

```

