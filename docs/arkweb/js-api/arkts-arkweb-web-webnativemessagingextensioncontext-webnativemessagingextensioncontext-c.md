# WebNativeMessagingExtensionContext

WebNativeMessagingExtensionContext is the context of web native message extension and is inherited from ExtensionContext. It provides the capability of exchanging messages with WebNativeMessagingExtension.The APIs of this module can be used only in the stage model.

**Inheritance/Implementation:** WebNativeMessagingExtensionContext extends [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md)

**Since:** 21

<!--Device-unnamed-export default class WebNativeMessagingExtensionContext extends ExtensionContext--><!--Device-unnamed-export default class WebNativeMessagingExtensionContext extends ExtensionContext-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { WebNativeMessagingExtensionContext } from '@kit.ArkWeb';
```

<a id="startability"></a>
## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

Starts an ability using a promise.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebNativeMessagingExtensionContext-startAbility(want: Want, options?: StartOptions): Promise<void>--><!--Device-WebNativeMessagingExtensionContext-startAbility(want: Want, options?: StartOptions): Promise<void>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Information about the ability to start. |
| options | [StartOptions](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-startoptions-startoptions-c.md) | No | Startup options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [16000001](../../apis-ability-kit/errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../../apis-ability-kit/errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../../apis-ability-kit/errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../../apis-ability-kit/errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000008](../../apis-ability-kit/errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../../apis-ability-kit/errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../../apis-ability-kit/errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../../apis-ability-kit/errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../../apis-ability-kit/errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../../apis-ability-kit/errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000019](../../apis-ability-kit/errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found. |
| [16000050](../../apis-ability-kit/errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Failed to connect to the system service;2. The system service failed to communicate with dependency module. |
| [16000055](../../apis-ability-kit/errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16000071](../../apis-ability-kit/errorcode-ability.md#16000071-application-clone-is-not-supported) | App clone is not supported. |
| [16000072](../../apis-ability-kit/errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | App clone or multi-instance is not supported. |
| [16000073](../../apis-ability-kit/errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid. |
| [16000076](../../apis-ability-kit/errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid. |
| [16000077](../../apis-ability-kit/errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit. |
| [16000078](../../apis-ability-kit/errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The multi-instance is not supported. |
| [16000079](../../apis-ability-kit/errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified. |
| [16000080](../../apis-ability-kit/errorcode-ability.md#16000080-new-instances-cannot-be-created) | Creating a new instance is not supported. |

**Example**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';
import { Want } from '@kit.AbilityKit';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onConnectNative(info: ConnectionInfo): void {
    const abilityWant: Want = {
    bundleName: 'com.example.mybundle',
    abilityName: 'MainAbility'
    };
    try {
        const context = this.context; // Obtain the WebNativeMessagingExtensionContext instance.
        context.startAbility(abilityWant);
        console.info('Ability started successfully');
    } catch (err) {
        console.error(`Failed to start ability. Code: ${err.code}, Message: ${err.message}`);
    }
  }
}

```

<a id="startabilityforresult"></a>
## startAbilityForResult

```TypeScript
startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>
```

Starts an ability and returns the execution result when the ability is destroyed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebNativeMessagingExtensionContext-startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>--><!--Device-WebNativeMessagingExtensionContext-startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Indicates the ability to start. |
| options | [StartOptions](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-startoptions-startoptions-c.md) | No | Indicates the start options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AbilityResult&gt; | Returns the result of startAbility. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [16000001](../../apis-ability-kit/errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../../apis-ability-kit/errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../../apis-ability-kit/errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../../apis-ability-kit/errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000008](../../apis-ability-kit/errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../../apis-ability-kit/errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../../apis-ability-kit/errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../../apis-ability-kit/errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../../apis-ability-kit/errorcode-ability.md#16000012-application-under-control) | The application is controlled by the AppGallery and cannot be started. |
| [16000013](../../apis-ability-kit/errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by Enterprise Device Manager and cannot be started. |
| [16000019](../../apis-ability-kit/errorcode-ability.md#16000019-no-matching-ability-is-found-during-implicit-startup) | No matching ability is found. |
| [16000050](../../apis-ability-kit/errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Failed to connect to the system service;2. The system service failed to communicate with dependency module. |
| [16000055](../../apis-ability-kit/errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16000071](../../apis-ability-kit/errorcode-ability.md#16000071-application-clone-is-not-supported) | The application does not support appClone mode in multiAppMode. |
| [16000072](../../apis-ability-kit/errorcode-ability.md#16000072-multiapp-mode-is-not-supported) | The application does not support appClone and multi-instance mode in multiAppMode. |
| [16000073](../../apis-ability-kit/errorcode-ability.md#16000073-appcloneindex-is-invalid) | The app clone index is invalid. |
| [16000076](../../apis-ability-kit/errorcode-ability.md#16000076-appinstancekey-does-not-exist) | The app instance key is invalid. |
| [16000077](../../apis-ability-kit/errorcode-ability.md#16000077-number-of-application-instances-reaches-the-upper-limit) | The number of app instances reaches the limit. |
| [16000078](../../apis-ability-kit/errorcode-ability.md#16000078-multiinstance-mode-is-not-supported) | The application does not support multiple instances. |
| [16000079](../../apis-ability-kit/errorcode-ability.md#16000079-appinstancekey-cannot-be-specified) | The APP_INSTANCE_KEY cannot be specified. |
| [16000080](../../apis-ability-kit/errorcode-ability.md#16000080-new-instances-cannot-be-created) | Instances cannot be created for other applications during inter-application startup. |

<a id="stopnativeconnection"></a>
## stopNativeConnection

```TypeScript
stopNativeConnection(connectionId: number): Promise<void>
```

Stops a native connection. This API uses a promise to return the result.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebNativeMessagingExtensionContext-stopNativeConnection(connectionId: number): Promise<void>--><!--Device-WebNativeMessagingExtensionContext-stopNativeConnection(connectionId: number): Promise<void>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connectionId | number | Yes | ID of the connection to stop<br>The value range is all integers. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call the interface. |
| [16000011](../../apis-ability-kit/errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../../apis-ability-kit/errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Failed to connect to the system service;2. The system service failed to communicate with dependency module. |

**Example**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onConnectNative(info: ConnectionInfo): void {
    const CONNECTION_ID = 12345; // Actual connection ID.
    try {
        const context = this.context;// Obtain the WebNativeMessagingExtensionContext instance.
        context.stopNativeConnection(CONNECTION_ID);
        console.info('Native connection stopped successfully');
    } catch (err) {
        console.error(`Failed to stop native connection. Code: ${err.code}, Message: ${err.message}`);
    }
  }
}

```

<a id="terminateself"></a>
## terminateSelf

```TypeScript
terminateSelf(): Promise<void>
```

Destroys the current native web message extension.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebNativeMessagingExtensionContext-terminateSelf(): Promise<void>--><!--Device-WebNativeMessagingExtensionContext-terminateSelf(): Promise<void>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000009](../../apis-ability-kit/errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000011](../../apis-ability-kit/errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../../apis-ability-kit/errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Failed to connect to the system service;2. The system service failed to communicate with dependency module. |

**Example**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onConnectNative(info: ConnectionInfo): void {
    try {
        const context = this.context; // Obtain the WebNativeMessagingExtensionContext instance.
        context.terminateSelf();
        console.info('Extension terminated successfully');
    } catch (err) {
        console.error(`Failed to terminate extension. Code: ${err.code}, Message: ${err.message}`);
    }
  }
}

```

