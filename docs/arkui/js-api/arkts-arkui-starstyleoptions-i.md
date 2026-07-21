# StarStyleOptions

Provides style settings for the selected, unselected, and partially selected stars in the **Rating** component.

> **NOTE**  
>  
> To standardize anonymous object definitions, the element definitions here have been revised in API version 18.  
> While historical version information is preserved for anonymous objects, there may be cases where the outer element  
> 's @since version number is higher than inner elements'. This does not affect interface usability.

> **NOTE**  
>  
> The string type can be used to load network images and local images. When a relative path is used to reference a  
> local image, for example, **Image("common/test.jpg")**, the **common** directory must be placed at the same level  
> as the **pages** directory. Base64-encoded strings are also supported.

**Since:** 18

<!--Device-unnamed-declare interface StarStyleOptions--><!--Device-unnamed-declare interface StarStyleOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundUri

```TypeScript
backgroundUri: ResourceStr
```

Image path for the unselected star. You can use the default system image or a custom image.

Resource configuration is supported since API version 20. For details, see [Example 3: Setting the Rating Style Through Resource Configuration](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating.md#example-3-setting-the-rating-style-through-resource-configuration).

**Type:** ResourceStr

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-StarStyleOptions-backgroundUri: ResourceStr--><!--Device-StarStyleOptions-backgroundUri: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## foregroundUri

```TypeScript
foregroundUri: ResourceStr
```

Image path for the selected star. You can use the default system image or a custom image.

Resource configuration is supported since API version 20. For details, see [Example 3: Setting the Rating Style Through Resource Configuration](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating.md#example-3-setting-the-rating-style-through-resource-configuration).

**Type:** ResourceStr

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-StarStyleOptions-foregroundUri: ResourceStr--><!--Device-StarStyleOptions-foregroundUri: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryUri

```TypeScript
secondaryUri?: ResourceStr
```

Image path for the partially selected star. You can use the default system image or a custom image.

Resource configuration is supported since API version 20. For details, see [Example 3: Setting the Rating Style Through Resource Configuration](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating.md#example-3-setting-the-rating-style-through-resource-configuration).

**Type:** ResourceStr

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-StarStyleOptions-secondaryUri?: ResourceStr--><!--Device-StarStyleOptions-secondaryUri?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

