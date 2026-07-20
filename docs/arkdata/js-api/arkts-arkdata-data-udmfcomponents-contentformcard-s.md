# ContentFormCard

Defines a content form card.

**Since:** 20

<!--Device-unnamed-declare struct ContentFormCard--><!--Device-unnamed-declare struct ContentFormCard-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { ContentFormCard, FormType } from '@kit.ArkData';
```

## contentFormData

```TypeScript
contentFormData: uniformDataStruct.ContentForm
```

Data of the form card.

**Type:** uniformDataStruct.ContentForm

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

<!--Device-ContentFormCard-contentFormData: uniformDataStruct.ContentForm--><!--Device-ContentFormCard-contentFormData: uniformDataStruct.ContentForm-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## formHeight

```TypeScript
formHeight?: number
```

Height of the content form card. The unit of measurement is vp.

**Type:** number

**Since:** 20

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

<!--Device-ContentFormCard-formHeight?: double--><!--Device-ContentFormCard-formHeight?: double-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## formType

```TypeScript
formType: FormType
```

Type of the form card.

**Type:** FormType

**Since:** 20

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

<!--Device-ContentFormCard-formType: FormType--><!--Device-ContentFormCard-formType: FormType-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## formWidth

```TypeScript
formWidth?: number
```

Width of the content form card. The unit of measurement is vp.

**Type:** number

**Since:** 20

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

<!--Device-ContentFormCard-formWidth?: double--><!--Device-ContentFormCard-formWidth?: double-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## handleOnClick

```TypeScript
handleOnClick?: Function
```

Callback to be invoked when the form card is tapped.

**Type:** Function

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

<!--Device-ContentFormCard-handleOnClick?: Function--><!--Device-ContentFormCard-handleOnClick?: Function-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

