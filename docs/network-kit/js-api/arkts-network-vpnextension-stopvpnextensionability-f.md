# stopVpnExtensionAbility

## Modules to Import

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';
```

## stopVpnExtensionAbility

```TypeScript
function stopVpnExtensionAbility(want: Want): Promise<void>
```

Stops a service within the same application.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-vpnExtension-function stopVpnExtensionAbility(want: Want): Promise<void>--><!--Device-vpnExtension-function stopVpnExtensionAbility(want: Want): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Indicates the want info to start. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter is not valid parameter. |
| [16000001](../../apis-ability-kit/errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../../apis-ability-kit/errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000006](../../apis-ability-kit/errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000011](../../apis-ability-kit/errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../../apis-ability-kit/errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200001](../../apis-ability-kit/errorcode-ability.md#16200001-caller-released) | The caller has been released. |

