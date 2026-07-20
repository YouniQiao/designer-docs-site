# SelectionExtensionContext (System API)

**SelectionExtensionContext** is the context of [SelectionExtensionAbility](arkts-basicservices-selectioninput-selectionextensionability-selectionextensionability-c-sys.md), which is inherited from [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md).When a **SelectionExtensionAbility** component is instantiated, the system automatically creates the corresponding **SelectionExtensionContext**. You can use **SelectionExtensionContext** to start other abilities in the same application.

> **NOTE**  
> - This module is supported only on PCs/2-in-1 devices.

**Inheritance/Implementation:** SelectionExtensionContext extends [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md)

**Since:** 24

<!--Device-unnamed-declare class SelectionExtensionContext extends ExtensionContext--><!--Device-unnamed-declare class SelectionExtensionContext extends ExtensionContext-End-->

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { SelectionExtensionContext } from '@kit.BasicServicesKit';
```

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

Starts an ability. This API uses a promise to return the result.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-SelectionExtensionContext-startAbility(want: Want): Promise<void>--><!--Device-SelectionExtensionContext-startAbility(want: Want): Promise<void>-End-->

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information of the ability to start, including the ability name and bundle name. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000001](../../apis-ability-kit/errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../../apis-ability-kit/errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../../apis-ability-kit/errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../../apis-ability-kit/errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../../apis-ability-kit/errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../../apis-ability-kit/errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../../apis-ability-kit/errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../../apis-ability-kit/errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../../apis-ability-kit/errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../../apis-ability-kit/errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../../apis-ability-kit/errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000019](../../apis-ability-kit/errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found. |
| [16000050](../../apis-ability-kit/errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../../apis-ability-kit/errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../../apis-ability-kit/errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16000061](../../apis-ability-kit/errorcode-ability.md#16000061-unsupported-operation) | Operation not supported. |
| [16000069](../../apis-ability-kit/errorcode-ability.md#16000069-extensionability-fails-to-start-a-thirdparty-application-in-strict-mode) | The extension cannot start the third party application. |
| [16000070](../../apis-ability-kit/errorcode-ability.md#16000070-extensionability-fails-to-start-a-serviceextensionability-in-strict-mode) | The extension cannot start the service. |
| [16000083](../../apis-ability-kit/errorcode-ability.md#16000083-specified-ability-cannot-be-started-by-this-type-of-extensionability) | The ExtensionAbility cannot start the ability due to system control. |
| [16200001](../../apis-ability-kit/errorcode-ability.md#16200001-caller-released) | The caller has been released. |

**Example**

```TypeScript
import { SelectionExtensionAbility, BusinessError } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class SelectionAbilityStub extends rpc.RemoteObject {
  constructor(des: string) {
    super(des);
  }
  onRemoteMessageRequest(
    code: number,
    data: rpc.MessageSequence,
    reply: rpc.MessageSequence,
    options: rpc.MessageOption
  ): boolean | Promise<boolean> {
    console.info(`onRemoteMessageRequest code: ${code}`);
    return true;
  }
}

class SelectionExtAbility extends SelectionExtensionAbility {
  onConnect(want: Want): rpc.RemoteObject {
    try {
      let wantAbility: Want = {
        bundleName: "com.selection.selectionapplication",
        abilityName: "EntryAbility",
      };
      this.context.startAbility(wantAbility).then(() => {
        console.info(`startAbility success`);
      }).catch((err: BusinessError) => {
        console.error(`startAbility error: ${err.code}, error message: ${err.message}`);
      })
    } catch (err) {
      console.error(`startAbility error: ${err.code}, error message: ${err.message}`);
    }
    return new SelectionAbilityStub('remote');
  }
}

```

