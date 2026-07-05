# AbilityStage

AbilityStage是一个[Module](docroot://quick-start/application-package-overview.md#应用的多module设计机制)级别的组件管理器，用于进行Module级别的资源 预加载、线程创建等初始化操作，以及维护Module下的应用状态。AbilityStage与Module一一对应，即一个Module拥有一个AbilityStage。 应用的[HAP](docroot://quick-start/hap-package.md)/[HSP](docroot://quick-start/in-app-hsp.md)在首次加载时会创建一个AbilityStage实例。当一 个Module中存在AbilityStage和其他组件（UIAbility/ExtensionAbility组件），AbilityStage实例会早于其他组件实例创建。 AbilityStage拥有[onCreate()](arkts-abilitystage-c.md#onCreate)、[onDestroy()](arkts-abilitystage-c.md#onDestroy)生命周期回调和 [onAcceptWant()](arkts-abilitystage-c.md#onAcceptWant)、[onConfigurationUpdate()](arkts-abilitystage-c.md#onConfigurationUpdate) 、[onMemoryLevel()](arkts-abilitystage-c.md#onMemoryLevel)事件回调等。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { AbilityStage } from '@kit.AbilityKit';
```

## onAboutToCreateAbility

```TypeScript
onAboutToCreateAbility(): void
```

无

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAcceptWant

```TypeScript
onAcceptWant(want: Want): string
```

当启动模式配置为[specified](docroot://application-models/uiability-launch-type.md#specified启动模式)的UIAbility被拉起时，会触发该回调，并返回一个 string作为待启动的UIAbility实例的唯一标识。同步接口，不支持异步回调。 如果系统中已经有相同标识的UIAbility实例存在，则复用已有实例，否则创建新的实例。 > **说明：** > > 从API version 20开始，当[AbilityStage.onAcceptWantAsync](arkts-abilitystage-c.md#onAcceptWantAsync)实现时，本回调函数将不会被触发。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want类型参数，此处表示调用方传入的启动参数，如Ability名称，Bundle名称等。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回开发者自定义的UIAbility标识。如果已经启动了相同标识的UIAbility，则复用该UIAbility，否则创建新的实例并启动。 |

**Example**

```TypeScript
import { AbilityStage, Want } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
  onAcceptWant(want: Want) {
    console.info('MyAbilityStage.onAcceptWant called');
    return 'com.example.test';
  }
}

```

## onAcceptWantAsync

```TypeScript
onAcceptWantAsync(want: Want): Promise<string>
```

当启动模式配置为[specified](docroot://application-models/uiability-launch-type.md#specified启动模式)的UIAbility被拉起时，会触发该回调，并返回一个 string作为待启动的UIAbility实例的唯一标识。使用Promise异步回调。 如果系统中已经有相同标识的UIAbility实例存在，则复用已有实例，否则创建新的实例。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want类型参数，传入需要启动的UIAbility的信息，如UIAbility名称、Bundle名称等。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回一个string作为待启动的UIAbility实例的唯一标识。如果系统中已经有该标识的UIAbility实例存在，则复用已有实例，否则创建新的实例。 |

**Example**

```TypeScript
import { AbilityStage } from '@kit.AbilityKit';

class MyAbilityStage extends AbilityStage {
  async onAcceptWantAsync(): Promise<string> {
    await new Promise<string>((res, rej) => {
      setTimeout(res, 1000); // Execute the operation after 1 second.
    });
    return 'default';
  }
}

```

## onConfigurationUpdate

```TypeScript
onConfigurationUpdate(newConfig: Configuration): void
```

当系统全局配置（例如系统语言、深浅色等）发生变更时，会触发该回调。配置项均定义在[Configuration](arkts-configuration-i.md#Configuration)类中。同步接口 ，不支持异步回调。 > **说明：** > > 该回调方法在实际触发时存在一定限制。例如如果开发者通过[setLanguage]./application/ApplicationContext:ApplicationContext.setLanguage接口 > 设置应用的语言，即便系统语言发生变化，系统也不再触发onConfigurationUpdate回调。详见 > [使用场景](docroot://application-models/subscribe-system-environment-variable-changes.md#使用场景)。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newConfig | Configuration | Yes | 发生全局配置变更时触发回调，当前全局配置包括系统语言、深浅色模式。 |

**Example**

```TypeScript
import { AbilityStage, Configuration } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
  onConfigurationUpdate(config: Configuration) {
    console.info(`MyAbilityStage.onConfigurationUpdate, language: ${config.language}`);
  }
}

```

## onCreate

```TypeScript
onCreate(): void
```

在加载Module的第一个Ability实例前，系统会先创建对应的AbilityStage实例，并在AbilityStage创建完成后，自动触发该回调。 开发者可以在该回调中执行Module的初始化操作（如资源预加载、线程创建等）。同步接口，不支持异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Example**

```TypeScript
import { AbilityStage } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
  onCreate() {
    console.info('MyAbilityStage.onCreate is called');
  }
}

```

## onDestroy

```TypeScript
onDestroy(): void
```

在对应Module的最后一个Ability实例退出后会触发该回调。此方法将在正常的调度生命周期中调用，当应用程序异常退出或被终止时，将不会调用此方法。同步接口，不支持异步回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Example**

```TypeScript
import { AbilityStage } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
  onDestroy() {
    console.info('MyAbilityStage.onDestroy is called');
  }
}

```

## onLaunchFromHyperSnap

```TypeScript
onLaunchFromHyperSnap(): void
```

进程从镜像启动时调用

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onMemoryLevel

```TypeScript
onMemoryLevel(level: AbilityConstant.MemoryLevel): void
```

该接口用于监听系统内存状态变化。当整机可用内存变化到指定程度时，系统会触发该回调。开发者可通过实现此接口，在收到内存紧张事件时，及时释放非必要资源（如缓存数据、临时对象等），以避免应用进程被系统强制终止。 同步接口，不支持异步回调。 > **说明：** > > onMemoryLevel回调运行在当前进程的主线程中，如果在该回调中做耗时的UI组件释放，会阻塞主线程任务，因此不建议在该回调中释放UI组件。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | AbilityConstant.MemoryLevel | Yes | 整机可用内存级别，对应的触发场景详见  [AbilityConstant.MemoryLevel](arkts-abilityconstant-memorylevel-e.md#MemoryLevel)。 |

**Example**

```TypeScript
import { AbilityStage, AbilityConstant } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
  onMemoryLevel(level: AbilityConstant.MemoryLevel) {
    console.info(`MyAbilityStage.onMemoryLevel, level: ${JSON.stringify(level)}`);
  }
}

```

## onNewProcessRequest

```TypeScript
onNewProcessRequest(want: Want): string
```

如果UIAbility<!--Del-->或UIExtensionAbility<!--DelEnd-->配置了在独立进程中运行（即 [module.json5配置文件](docroot://quick-start/module-configuration-file.md)中UIAbility<!--Del-->或UIExtensionAbility<!-- DelEnd-->的isolationProcess字段取值为true），当该UIAbility<!--Del-->或UIExtensionAbility<!--DelEnd-->被拉起时，会触发该回调，并返回一个string作为 进程唯一标识。同步接口，不支持异步回调。 如果该应用已有相同标识的进程存在，则待启动的UIAbility<!--Del-->或UIExtensionAbility<!--DelEnd-->运行在此进程中，否则创建新的进程。 如果开发者同时实现onNewProcessRequest和[onAcceptWant](arkts-abilitystage-c.md#onAcceptWant)，将先收到onNewProcessRequest回调，再收到 onAcceptWant回调。 <!--Del--> 仅支持sys/commonUI类型的UIExtensionAbility组件在[module.json5配置文件](docroot://quick-start/module-configuration-file.md)配置文件中配 置isolationProcess字段为true。 <!--DelEnd--> > **说明：** > > - 在API version 19及之前版本，仅支持在指定进程中启动UIAbility。<!--Del-->从API version 20开始，新增支持在指定进程中启动UIExtensionAbility。<!--DelEnd > --> > > - 从API version 20开始，当[AbilityStage.onNewProcessRequestAsync](arkts-abilitystage-c.md#onNewProcessRequestAsync)实现时，本回调函 > 数将不执行。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want类型参数，此处表示调用方传入的启动参数，如UIAbility或UIExtensionAbility名称、Bundle名称等。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回一个由开发者自行决定的进程字符串标识，如果之前此标识对应的进程已被创建，就让ability在此进程中运行，否则创建新的进程。 |

**Example**

```TypeScript
import { AbilityStage, Want } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
  onNewProcessRequest(want: Want) {
    console.info('MyAbilityStage.onNewProcessRequest called');
    return 'com.example.test';
  }
}

```

## onNewProcessRequestAsync

```TypeScript
onNewProcessRequestAsync(want: Want): Promise<string>
```

如果UIAbility<!--Del-->或UIExtensionAbility<!--DelEnd-->配置了在独立进程中运行（即 [module.json5配置文件](docroot://quick-start/module-configuration-file.md)中UIAbility<!--Del-->或UIExtensionAbility<!-- DelEnd-->的isolationProcess字段取值为true），当该UIAbility<!--Del-->或UIExtensionAbility<!--DelEnd-->被拉起时，会触发该回调，并返回一个string作为 进程唯一标识。使用Promise异步回调。 如果该应用已有相同标识的进程存在，则待启动的UIAbility<!--Del-->或UIExtensionAbility<!--DelEnd-->运行在此进程中，否则创建新的进程。 <!--Del--> 仅支持sys/commonUI类型的UIExtensionAbility组件在[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中配置 isolationProcess字段为true。 <!--DelEnd-->

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want类型参数，此处表示调用方传入的启动参数，如UIAbility或UIExtensionAbility名称、Bundle名称等。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回一个由开发者自定义的进程字符串标识。如果该应用已有相同标识的进程存在，则UIAbility或UIExtensionAbility  在此进程中运行，否则创建新的进程。 |

**Example**

```TypeScript
import { AbilityStage } from '@kit.AbilityKit';

class MyAbilityStage extends AbilityStage {
  async onNewProcessRequestAsync(): Promise<string> {
    await new Promise<string>((res, rej) => {
      setTimeout(res, 1000); // Execute the operation after 1 second.
    });
    return '';
  }
}

```

## onPrepareTermination

```TypeScript
onPrepareTermination(): AbilityConstant.PrepareTermination
```

当应用被用户关闭时调用，可用于询问用户选择立即执行操作还是取消操作。同步接口，不支持异步回调。 > **说明：** > > - 仅当应用正常退出（例如，通过doc栏/托盘关闭应用，或者应用随设备关机而退出）时会调用该接口。如果应用被强制关闭，则不会调用该接口。 > > - 当[AbilityStage.onPrepareTerminationAsync](arkts-abilitystage-c.md#onPrepareTerminationAsync)实现时，本回调函数将不执行。

**Since:** 15

**Required permissions:** 

 ohos.permission.PREPARE_APP_TERMINATE

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| AbilityConstant.PrepareTermination | The user's choice. |

**Example**

```TypeScript
import { AbilityConstant, AbilityStage } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
  onPrepareTermination(): AbilityConstant.PrepareTermination {
    console.info('MyAbilityStage.onPrepareTermination is called');
    return AbilityConstant.PrepareTermination.CANCEL;
  }
}

```

## onPrepareTerminationAsync

```TypeScript
onPrepareTerminationAsync(): Promise<AbilityConstant.PrepareTermination>
```

当应用被用户关闭时调用，可用于询问用户选择立即执行操作还是取消操作。使用Promise异步回调。 > **说明：** > > - 仅当应用正常退出（例如，通过doc栏/托盘关闭应用，或者应用随设备关机而退出）时会调用该接口。如果应用被强制关闭，则不会调用该接口。 > > - 若异步回调内发生crash，按超时处理，执行等待超过10秒未响应，应用将被强制关闭。

**Since:** 15

**Required permissions:** 

 ohos.permission.PREPARE_APP_TERMINATE

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AbilityConstant.PrepareTermination> | Promise used to return the user's choice. |

**Example**

```TypeScript
import { AbilityConstant, AbilityStage } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
  async onPrepareTerminationAsync(): Promise<AbilityConstant.PrepareTermination> {
    await new Promise<AbilityConstant.PrepareTermination>((res, rej) => {
      setTimeout(res, 3000); // Execute the operation after 3 seconds.
    });
    return AbilityConstant.PrepareTermination.CANCEL;
  }
}

```

## context

```TypeScript
context: AbilityStageContext
```

AbilityStage上下文。

**Type:** AbilityStageContext

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

