# ImageAnimatorAttribute

除支持[通用属性]./common外，还支持以下属性： 除支持[通用事件]./common外，还支持以下事件：

**Inheritance:** ImageAnimatorAttributeextends: CommonMethod<ImageAnimatorAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## duration

```TypeScript
duration(value: number)
```

设置播放时长。当Images中任意一帧图片设置了单独的duration后，该属性设置无效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 播放时长。 value为0时，不播放图片。 value平均分配给单张图片的播放时长小于一帧时间，  将导致播放异常。 设置为负数时，取默认值。  value的改变只会在下一次循环开始时生效。 单位：毫秒 默认值：1000ms |

## fillMode

```TypeScript
fillMode(value: FillMode)
```

设置当前播放方向下，动画开始前和结束后的状态。动画结束后的状态由fillMode和reverse属性共同决定。 例如，fillMode为Forwards表示停止时维持动画最后一个关键帧的状态，若reverse为false则维持正播的 最后一帧，即最后一张图，若reverse为true则维持逆播的最后一帧，即第一张图。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FillMode | Yes | 当前播放方向下，动画开始前和结束后的状态。 默认值：FillMode.Forwards |

## fixedSize

```TypeScript
fixedSize(value: boolean)
```

设置图片大小是否固定为组件大小。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 设置图片大小是否固定为组件大小。 true表示图片大小与组件大小一致，此时设置图片的  width 、height 、top 和left属性无效。false表示每一张图片的width 、height 、top和left属性都要单独设置。  图片宽高与组件宽高不一致时，图片不会被拉伸。 默认值：true |

## images

```TypeScript
images(value: Array<ImageFrameInfo>)
```

设置图片帧信息集合。不支持动态更新，动态更新可能会导致不可预期的行为。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;ImageFrameInfo> | Yes | 设置图片帧信息集合。每一帧的帧信息(ImageFrameInfo)包含图片路径、图片大小、  图片位置和图片播放时长信息，详见[ImageFrameInfo]  (docroot://reference/apis-arkui/arkui-ts/ts-basic-components-imageanimator.md#imageframeinfo对象说明)  对象说明。 默认值：[] 说明： 传入数组的内容过大时，内存占用会随之升高。此内存由开发者自行控制。  因此，开发者在传入数据前，请充分评估内存消耗情况，以避免内存不足等问题。 |

## iterations

```TypeScript
iterations(value: number)
```

设置播放次数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 默认播放一次，设置为-1时表示无限次播放，设置为小于-1的负数时取默认值。  设置为浮点数时，数值向下取整。 默认值：1 |

## monitorInvisibleArea

```TypeScript
monitorInvisibleArea(monitorInvisibleArea: boolean)
```

设置组件是否通过系统 [onVisibleAreaChange] {@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)} 的可见性判定，控制组件的暂停和播放。

**Since:** 17

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitorInvisibleArea | boolean | Yes | 当设置为true时，组件将基于系统的  [onVisibleAreaChange]  {@link CommonMethod#onVisibleAreaChange(ratios: Array, event: VisibleAreaChangeCallback)}  可见性判定，控制组件的暂停和播放。 当组件的运行状态为[AnimationStatus](arkts-animationstatus-e.md#AnimationStatus)  的Running时，若判定组件不可见，则自动执行暂停操作；若判定为可见，则自动恢复播放。  当设置为false时，组件的暂停和播放不受到onVisibleAreaChange影响。 默认值：false  说明： 当该属性由true动态修改为false时，组件将依据当前的[AnimationStatus]  {@link enums:AnimationStatus}状态进行处理。 例如，若当前状态为Running且因[onVisibleAreaChange]  {@link CommonMethod#onVisibleAreaChange(ratios: Array, event: VisibleAreaChangeCallback)}  的不可见回调暂停，则在属性由true改为false后，组件会从上次暂停的位置重新开始播放。  由该属性导致的不可见暂停和可见暂停操作不会改变用户设置的  [state](arkts-imageanimatorattribute-c.md#state)值。 |

## onCancel

```TypeScript
onCancel(event: () => void)
```

状态回调，动画返回最初状态时触发。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 状态回调，动画返回最初状态时触发。 |

## onFinish

```TypeScript
onFinish(event: () => void)
```

状态回调，动画播放完成时或者停止播放时触发。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 状态回调，动画播放完成时或者停止播放时触发。 |

## onPause

```TypeScript
onPause(event: () => void)
```

状态回调，动画暂停播放时触发。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 状态回调，动画暂停播放时触发。 |

## onRepeat

```TypeScript
onRepeat(event: () => void)
```

状态回调，动画重复播放时触发。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 状态回调，动画重复播放时触发。 |

## onStart

```TypeScript
onStart(event: () => void)
```

状态回调，动画开始播放时触发。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 状态回调，动画开始播放时触发。 |

## preDecode

```TypeScript
preDecode(value: number)
```

设置预解码的图片数量。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。当前无可替代接口。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 预解码的图片数量。例如，设置为2时，播放当前页时会提前加载后面两张图片至缓存，以提升性能。  默认值：0 |

## reverse

```TypeScript
reverse(value: boolean)
```

设置播放方向。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 播放方向。 false表示从第1张图片播放到最后1张图片，true表示从最后1张图片播放到第1张  图片。 默认值：false |

## state

```TypeScript
state(value: AnimationStatus)
```

控制播放状态。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | AnimationStatus | Yes | 默认为初始状态，用于控制播放状态。 默认值：AnimationStatus.Initial |

