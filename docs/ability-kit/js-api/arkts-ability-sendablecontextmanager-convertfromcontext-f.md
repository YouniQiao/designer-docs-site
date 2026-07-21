# convertFromContext

## Modules to Import

```TypeScript
import { sendableContextManager } from '@kit.AbilityKit';
```

<a id="convertfromcontext"></a>
## convertFromContext

```TypeScript
function convertFromContext(context: common.Context): SendableContext
```

Converts a Context object to a SendableContext object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-sendableContextManager-function convertFromContext(context: common.Context): SendableContext--><!--Device-sendableContextManager-function convertFromContext(context: common.Context): SendableContext-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.Context | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [SendableContext](arkts-ability-sendablecontextmanager-sendablecontext-t.md) | [SendableContext](arkts-ability-sendablecontext-i.md) object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter invalid. Possible causes: 1.Incorrect parameter types;2.Parameter verification failed. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want, sendableContextManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { worker } from '@kit.ArkTS';

@Sendable
export class SendableObject {
  constructor(sendableContext: sendableContextManager.SendableContext) {
    this.sendableContext = sendableContext;
  }

  sendableContext: sendableContextManager.SendableContext;
  // other sendable object
}

export default class EntryAbility extends UIAbility {
  worker: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');

  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');

    // convert and post
    try {
      let sendableContext: sendableContextManager.SendableContext =
        sendableContextManager.convertFromContext(this.context);
      let object: SendableObject = new SendableObject(sendableContext);
      hilog.info(0x0000, 'testTag', '%{public}s', 'Ability post message');
      this.worker.postMessageWithSharedSendable(object);
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'convertFromContext failed %{public}s', JSON.stringify(error));
    }
  }
}

```

