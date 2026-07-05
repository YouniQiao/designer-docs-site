# AppServiceExtensionAbility

class of app service extension ability.

**Inheritance/Implementation:** AppServiceExtensionAbility extends [ExtensionAbility](arkts-ability-extensionability-c.md#extensionability)

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { AppServiceExtensionAbility } from '@ohos.app.ability.AppServiceExtensionAbility';
```

## onConnect

```TypeScript
onConnect(want: Want): rpc.RemoteObject
```

Called back when an app service extension is first connected to an ability.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates connection information about the app service ability. |

**Return value:**

| Type | Description |
| --- | --- |
| rpc.RemoteObject | A RemoteObject for communication between the client and server. |

**Example**

```TypeScript
import { AppServiceExtensionAbility, Want } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[AppServiceExtAbility]';

class StubTest extends rpc.RemoteObject {
  constructor(des: string) {
    super(des);
  }

  onConnect(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence, option: rpc.MessageOption) {
  }
}

export default class AppServiceExtAbility extends AppServiceExtensionAbility {
  onConnect(want: Want) {
    hilog.info(0x0000, TAG, `onConnect, want: ${want.abilityName}`);
    return new StubTest('test');
  }
}

```

## onCreate

```TypeScript
onCreate(want: Want): void
```

Called back when an app service extension is started for initialization.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the want of created app service extension. |

**Example**

```TypeScript
import { AppServiceExtensionAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[AppServiceExtAbility]';

export default class AppServiceExtAbility extends AppServiceExtensionAbility {
  onCreate(want: Want) {
    hilog.info(0x0000, TAG, `onCreate, want: ${want.abilityName}`);
  }
}

```

## onDestroy

```TypeScript
onDestroy(): void
```

Called back before an app service extension is destroyed.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Example**

```TypeScript
import { AppServiceExtensionAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[AppServiceExtAbility]';

export default class AppServiceExtAbility extends AppServiceExtensionAbility {
  onDestroy() {
    hilog.info(0x0000, TAG, `onDestroy`);
  }
}

```

## onDisconnect

```TypeScript
onDisconnect(want: Want): void
```

Called back when all abilities connected to an app service extension are disconnected.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates disconnection information about the app service extension. |

**Example**

```TypeScript
import { AppServiceExtensionAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[AppServiceExtAbility]';

export default class AppServiceExtAbility extends AppServiceExtensionAbility {
  onDisconnect(want: Want) {
    hilog.info(0x0000, TAG, `onDisconnect, want: ${want.abilityName}`);
  }
}

```

## onRequest

```TypeScript
onRequest(want: Want, startId: number): void
```

Called back when an app service extension is started.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the want of app service extension to start. |
| startId | number | Yes | Indicates the number of times the app service extension has been started.The {@code startId} is incremented by 1 every time the app service extension is started. |

**Example**

```TypeScript
import { AppServiceExtensionAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[AppServiceExtAbility]';

export default class AppServiceExtAbility extends AppServiceExtensionAbility {
  onRequest(want: Want, startId: number) {
    hilog.info(0x0000, TAG, `onRequest, want: ${want.abilityName}, startId: ${startId}`);
  }
}

```

## context

```TypeScript
context: AppServiceExtensionContext
```

Indicates app service extension ability context.

**Type:** AppServiceExtensionContext

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

