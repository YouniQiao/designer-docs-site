# InputMethodExtensionContext

The **InputMethodExtensionContext** module, inherited from **ExtensionContext**, provides context for **InputMethodExtension** abilities. You can use the APIs of this module to start, terminate, connect, and disconnect abilities.

> **NOTE**  
>  
> - The APIs of this module can be used only in the stage model.

**Inheritance/Implementation:** InputMethodExtensionContext extends [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md)

**Since:** 9

<!--Device-unnamed-declare class InputMethodExtensionContext extends ExtensionContext--><!--Device-unnamed-declare class InputMethodExtensionContext extends ExtensionContext-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { InputMethodExtensionContext } from '@kit.IMEKit';
```

## destroy

```TypeScript
destroy(callback: AsyncCallback<void>): void
```

Destroys this input method. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-InputMethodExtensionContext-destroy(callback: AsyncCallback<void>): void--><!--Device-InputMethodExtensionContext-destroy(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

class InputMethodExtAbility extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    console.info('onCreate, want:' + want.abilityName);
  }

  onDestroy() {
    this.context.destroy((err: BusinessError) => {
      if (err) {
        console.error(`Failed to destroy context, err code = ${err.code}`);
        return;
      }
      console.info('Succeeded in destroying context.');
    });
  }
}

```

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroys this input method. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-InputMethodExtensionContext-destroy(): Promise<void>--><!--Device-InputMethodExtensionContext-destroy(): Promise<void>-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Example**

```TypeScript
import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

class InputMethodExtAbility extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    console.info('onCreate, want:' + want.abilityName);
  }

  onDestroy() {
    this.context.destroy().then(() => {
      console.info('Succeed in destroying context.');
    }).catch((err: BusinessError)=>{
      console.error(`Failed to destroy context, err code = ${err.code}`);
    });
  }
}

```

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

Starts an ability. This API uses a promise to return the result.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-InputMethodExtensionContext-startAbility(want: Want): Promise<void>--><!--Device-InputMethodExtensionContext-startAbility(want: Want): Promise<void>-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information, including the ability name and bundle name of the target application. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
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
| [16200001](../../apis-ability-kit/errorcode-ability.md#16200001-caller-released) | The caller has been released. |

**Example**

```TypeScript
import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

class InputMethodExtAbility extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    const context: InputMethodExtensionContext = this.context;
    const targetWant: Want = {
      bundleName: "com.example.aafwk.test",
      abilityName: "com.example.aafwk.test.TwoAbility"
    };

    context.startAbility(targetWant)
      .then(() => console.info('startAbility success'))
      .catch((err: BusinessError) => {
        console.error(`StartAbility failed. Code: ${err.code}, Message: ${err.message}`);
      });
  }

  onDestroy() {
    this.context.destroy().then(() => {
      console.info('Succeed in destroying context.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to destroy context, err code = ${err.code}`);
    });
  }
}

```

