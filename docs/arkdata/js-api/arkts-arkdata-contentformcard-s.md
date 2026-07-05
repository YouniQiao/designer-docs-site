# ContentFormCard

Defines a content form card.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { ContentFormCard, FormType } from '@ohos.data.UdmfComponents';
```

## contentFormData

```TypeScript
contentFormData: uniformDataStruct.ContentForm
```

Data of the form card.

**Type:** uniformDataStruct.ContentForm

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

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

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## handleOnClick

```TypeScript
handleOnClick?: Function
```

Callback to be invoked when the form card is tapped.

**Type:** Function

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

