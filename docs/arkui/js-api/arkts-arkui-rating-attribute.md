# Rating properties/events

**Inheritance/Implementation:** RatingAttribute extends [CommonMethod<RatingAttribute>](CommonMethod<RatingAttribute>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<RatingConfiguration>)
```

Creates a content modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;RatingConfiguration&gt; | Yes | Content modifier to apply to the current component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API. |

## contentModifier

```TypeScript
contentModifier(modifier: Optional<ContentModifier<RatingConfiguration>>)
```

Creates a content modifier. Compared with [contentModifier](RatingAttribute#contentModifier(modifier: ContentModifier<RatingConfiguration>)), this API supports the **undefined** type for the **modifier** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;ContentModifier&lt;RatingConfiguration&gt;&gt; | Yes | Content modifier to apply to the currentcomponent.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.<br>If **modifier** is set to **undefined**, no content modifier is used. |

## onChange

```TypeScript
onChange(callback: (value: number) => void)
```

Triggered when the rating value changes.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: number) =&gt; void | Yes |  |

## onChange

```TypeScript
onChange(callback: Optional<OnRatingChangeCallback>)
```

Triggered when the rating value changes. Compared with [onChange](RatingAttribute#onChange(callback: (value: number) => void)), this API supports the **undefined** type for the **callback** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;OnRatingChangeCallback&gt; | Yes | Defines the callback triggered when the rating valuechanges.<br>If **callback** is set to **undefined**, the callback function is not used. |

## starStyle

```TypeScript
starStyle(options: StarStyleOptions)
```

Sets the star style. For details about the supported image types, see [Image](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md). Local and network images are supported. The PixelMap type is not supported. By default, the image is loaded in asynchronous mode. Synchronous loading is not supported.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | StarStyleOptions | Yes | Star style.<br>**NOTE**<br>If an incorrect image path is provided for**backgroundUri**, **foregroundUri**, or **secondaryUri**, the previously displayed image will be retained. Ifthe first provided path is incorrect, no image will be displayed.<br>When **backgroundUri** or**foregroundUri** is set to **undefined** or an empty string, the **Rating** component falls back to thedefault star image.<br>If **secondaryUri** is not set, or is set to **undefined** or an empty string,**backgroundUri** will be used as a fallback. The behavior in this case is the same as when only**foregroundUri** and **backgroundUri** are configured.<br>**Since:** 18 |

## starStyle

```TypeScript
starStyle(options: Optional<StarStyleOptions>)
```

Sets the star style. For details about the supported image types, see [Image](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md). Local and network images are supported. The PixelMap type is not supported. By default, the image is loaded in asynchronous mode. Synchronous loading is not supported. Compared with [starStyle](RatingAttribute#starStyle(options: StarStyleOptions)), this API supports the **undefined** type for the **options** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Optional&lt;StarStyleOptions&gt; | Yes | Star style.<br>**NOTE**<br>If an incorrect image path is providedfor **backgroundUri**, **foregroundUri**, or **secondaryUri**, the previously displayed image will be retained.If the first provided path is incorrect, no image will be displayed.<br>When **backgroundUri** or**foregroundUri** is set to **undefined** or an empty string, the **Rating** component falls back to thedefault star image.<br>If **secondaryUri** is not set, or is set to **undefined** or an empty string,**backgroundUri** will be used as a fallback. The behavior in this case is the same as when only**foregroundUri** and **backgroundUri** are configured. |

## stars

```TypeScript
stars(value: number)
```

Sets the total number of stars. Values less than 0 are treated as the default value.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Total number of stars.<br>Default value: **5** |

## stars

```TypeScript
stars(starCount: Optional<number>)
```

Sets the total number of stars. Values less than 0 are treated as the default value. Compared with [stars](RatingAttribute#stars(value: number)), this API supports the **undefined** type for the **starCount** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| starCount | Optional&lt;number&gt; | Yes | Total number of stars.<br>If **starCount** is set to **undefined**, thedefault value **5** is used. |

## stepSize

```TypeScript
stepSize(value: number)
```

Sets the step for rating. Values less than 0.1 are treated as the default value.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Step for rating.<br>Default value: **0.5**<br>Value range: [0.1, stars] |

## stepSize

```TypeScript
stepSize(size: Optional<number>)
```

Sets the step for rating. Values less than 0.1 are treated as the default value. Compared with [stepSize](RatingAttribute#stepSize(value: number)), this API supports the **undefined** type for the **size** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | Optional&lt;number&gt; | Yes | Step for rating.<br>If **size** is set to **undefined**, the default value**0.5** is used.<br>Value range: [0.1, stars] |

