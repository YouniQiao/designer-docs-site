# LiveFormExtensionContext

**LiveFormExtensionContext**, inherited from [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md), is the context of [LiveFormExtensionAbility](arkts-app-form-liveformextensionability.md).

**Inheritance/Implementation:** LiveFormExtensionContext extends [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md)

**Since:** 20

<!--Device-unnamed-declare class LiveFormExtensionContext extends ExtensionContext--><!--Device-unnamed-declare class LiveFormExtensionContext extends ExtensionContext-End-->

**System capability:** SystemCapability.Ability.Form

## connectServiceExtensionAbility

```TypeScript
public connectServiceExtensionAbility(want: Want, connection: ConnectOptions): number
```

Connect a service extension ability.The destination of the connection must be a service extension.You must implement the {@link ConnectOptions} interface to obtain the proxy of the target service extension when the Service extension is connected.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-LiveFormExtensionContext-public connectServiceExtensionAbility(want: Want, connection: ConnectOptions): long--><!--Device-LiveFormExtensionContext-public connectServiceExtensionAbility(want: Want, connection: ConnectOptions): long-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Indicates the service extension to connect. |
| connection | [ConnectOptions](../../apis-ability-kit/arkts-apis/arkts-ability-ability-connectoptions-t.md) | Yes | Indicates the callback of connection. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the connection id. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed,application which is not a system application uses system API. |
| [16500100](../errorcode-form.md#16500100-failed-to-obtain-widget-configuration-information) | Failed to obtain the configuration information. |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |
| [16501011](../errorcode-form.md#16501011-api-not-supported) | The form can not support this operation |

## disconnectServiceExtensionAbility

```TypeScript
public disconnectServiceExtensionAbility(connectionId: number): Promise<void>
```

Disconnect an ability to a service extension, in contrast to {@link connectServiceExtensionAbility}.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-LiveFormExtensionContext-public disconnectServiceExtensionAbility(connectionId: long): Promise<void>--><!--Device-LiveFormExtensionContext-public disconnectServiceExtensionAbility(connectionId: long): Promise<void>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connectionId | number | Yes | the connection id returned from connectServiceExtensionAbility api. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed,application which is not a system application uses system API. |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |
| [16501011](../errorcode-form.md#16501011-api-not-supported) | The form can not support this operation |

