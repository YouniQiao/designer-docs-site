# ConnectOptions

globalConnect参数类型。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding,ComponentReuse,CustomComponentLifecycleState,ComponentInactive,PersistenceV2,ComponentDisappear,MutableBinding,CustomComponentLifecycleObserver,AppStorageV2,Type,ConnectOptionsCollections,CollectionType,CustomComponentContext,IReusePool,ConnectOptions,UIUtils,ComponentActive,CustomComponentLifecycle,ComponentInit,ComponentAppear,ComponentBuilt,ComponentRecycle,IReusableInfo } from '@kit.ArkUI';
```

## defaultCreator

```TypeScript
defaultCreator?: StorageDefaultCreator<T>
```

默认数据的构造器，建议传递，如果globalConnect是第一次连接key，不传会报错。

**Type:** StorageDefaultCreator<T>

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: TypeConstructorWithArgs<T>
```

指定的类型。

**Type:** TypeConstructorWithArgs<T>

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## areaMode

```TypeScript
areaMode?: contextConstant.AreaMode
```

加密级别：EL1-EL5，详见[加密级别](docroot://application-models/application-context-stage.md#获取和修改加密分区)，对应数值：0-4，不传时默认为EL2，不同加密级 别对应不同的加密分区，即不同的存储路径，传入的加密等级数值不在0-4会直接运行crash。

**Type:** contextConstant.AreaMode

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## key

```TypeScript
key?: string
```

传入的key，不传则使用type的名字作为key。

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

