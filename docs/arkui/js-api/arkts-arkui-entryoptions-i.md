# EntryOptions

Defines the options of Entry ClassDecorator.

**Since:** 23

<!--Device-unnamed-declare interface EntryOptions--><!--Device-unnamed-declare interface EntryOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## routeName

```TypeScript
routeName? : string
```

Named route name.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EntryOptions-routeName? : string--><!--Device-EntryOptions-routeName? : string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## storage

```TypeScript
storage? : LocalStorage
```

LocalStorage to be passed.

**Type:** LocalStorage

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EntryOptions-storage? : LocalStorage--><!--Device-EntryOptions-storage? : LocalStorage-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## useSharedStorage

```TypeScript
useSharedStorage? : boolean
```

Determines whether to use the LocalStorage instance object returned by the LocalStorage.getShared() interface.

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-EntryOptions-useSharedStorage? : boolean--><!--Device-EntryOptions-useSharedStorage? : boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

