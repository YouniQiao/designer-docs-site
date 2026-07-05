# Animator

定义Animator类。

**Since:** 6

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AnimatorOptions,SimpleAnimatorOptions,AnimatorResult } from '@kit.ArkUI';
```

## create

```TypeScript
static create(options: AnimatorOptions): AnimatorResult
```

创建animator动画结果对象（AnimatorResult）。 > **说明：** > > - > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [createAnimator](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#createanimator)来明确UI的执行上下文。

**Since:** 9

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.UIContext#createAnimator

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AnimatorOptions | Yes | 定义动画选项。 |

**Return value:**

| Type | Description |
| --- | --- |
| AnimatorResult | Animator结果接口。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

**Example**

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

创建animator动画结果对象（AnimatorResult）。与[create]Animator.create(options: AnimatorOptions)相比，新增对 [SimpleAnimatorOptions](arkts-simpleanimatoroptions-c.md#SimpleAnimatorOptions)类型入参的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AnimatorOptions \| SimpleAnimatorOptions | Yes | 定义动画参数选项。 |

**Return value:**

| Type | Description |
| --- | --- |
| AnimatorResult | Animator结果接口。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

**Example**

```TypeScript
import { Animator as animator, SimpleAnimatorOptions } from '@kit.ArkUI';
let options: SimpleAnimatorOptions = new SimpleAnimatorOptions(100, 200).duration(2000);
animator.create(options);// You are advised to use UIContext.createAnimator().

```

## createAnimator

```TypeScript
static createAnimator(options: AnimatorOptions): AnimatorResult
```

创建动画。 > **说明：

**Since:** 6

**Deprecated since:** 9

**Substitute:** Animator.create(options:

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AnimatorOptions | Yes | 定义动画选项。 |

**Return value:**

| Type | Description |
| --- | --- |
| AnimatorResult | Animator结果接口。 |

**Example**

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

