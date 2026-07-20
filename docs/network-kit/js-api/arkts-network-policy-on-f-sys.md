# on (System API)

## Modules to Import

```TypeScript
import { policy } from '@kit.NetworkKit';
```

## on('netUidPolicyChange')

```TypeScript
function on(type: 'netUidPolicyChange', callback: Callback<NetUidPolicyInfo>): void
```

Register uid policy change listener.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function on(type: 'netUidPolicyChange', callback: Callback<NetUidPolicyInfo>): void--><!--Device-policy-function on(type: 'netUidPolicyChange', callback: Callback<NetUidPolicyInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netUidPolicyChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<NetUidPolicyInfo> | Yes | the callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |


## on('netUidRuleChange')

```TypeScript
function on(type: 'netUidRuleChange', callback: Callback<NetUidRuleInfo>): void
```

Register uid rule change listener.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function on(type: 'netUidRuleChange', callback: Callback<NetUidRuleInfo>): void--><!--Device-policy-function on(type: 'netUidRuleChange', callback: Callback<NetUidRuleInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netUidRuleChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<NetUidRuleInfo> | Yes | the callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |


## on('netMeteredIfacesChange')

```TypeScript
function on(type: 'netMeteredIfacesChange', callback: Callback<Array<string>>): void
```

Register metered ifaces change listener.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function on(type: 'netMeteredIfacesChange', callback: Callback<Array<string>>): void--><!--Device-policy-function on(type: 'netMeteredIfacesChange', callback: Callback<Array<string>>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netMeteredIfacesChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Array<string>> | Yes | the callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |


## on('netQuotaPolicyChange')

```TypeScript
function on(type: 'netQuotaPolicyChange', callback: Callback<Array<NetQuotaPolicy>>): void
```

Register quota policies change listener.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function on(type: 'netQuotaPolicyChange', callback: Callback<Array<NetQuotaPolicy>>): void--><!--Device-policy-function on(type: 'netQuotaPolicyChange', callback: Callback<Array<NetQuotaPolicy>>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netQuotaPolicyChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Array<NetQuotaPolicy>> | Yes | the callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |


## on('netBackgroundPolicyChange')

```TypeScript
function on(type: 'netBackgroundPolicyChange', callback: Callback<boolean>): void
```

Register network background policy change listener.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function on(type: 'netBackgroundPolicyChange', callback: Callback<boolean>): void--><!--Device-policy-function on(type: 'netBackgroundPolicyChange', callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netBackgroundPolicyChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<boolean> | Yes | the callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

