# WithEnvAttribute

Define the WithEnv attribute functions.

**Since:** 26.0.0

<!--Device-unnamed-export declare class WithEnvAttribute--><!--Device-unnamed-export declare class WithEnvAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { WithEnvAttribute, WithEnv } from '@kit.ArkUI';
```

## customEnv

```TypeScript
customEnv<T>(key: CustomEnvKey<T>,  value: T): WithEnvAttribute
```

Defining Custom Environment Variables

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-WithEnvAttribute-customEnv<T>(key: CustomEnvKey<T>,  value: T): WithEnvAttribute--><!--Device-WithEnvAttribute-customEnv<T>(key: CustomEnvKey<T>,  value: T): WithEnvAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | [CustomEnvKey](../arkts-components/arkts-arkui-common-customenvkey-c.md)<T> | Yes | Key for custom environment variables. |
| value | T | Yes | Value of custom environment variables. |

**Return value:**

| Type | Description |
| --- | --- |
| [WithEnvAttribute](arkts-arkui-arkui-withenv-withenvattribute-c.md) | WithEnvAttribute object. |

## env

```TypeScript
env<T>(key: WritableSystemEnvKey<T>, value: T): WithEnvAttribute
```

Defining System Environment Variables

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-WithEnvAttribute-env<T>(key: WritableSystemEnvKey<T>, value: T): WithEnvAttribute--><!--Device-WithEnvAttribute-env<T>(key: WritableSystemEnvKey<T>, value: T): WithEnvAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | [WritableSystemEnvKey](../arkts-components/arkts-arkui-common-writablesystemenvkey-c.md)<T> | Yes | Key for system environment variables. |
| value | T | Yes | Value of system environment variables. |

**Return value:**

| Type | Description |
| --- | --- |
| [WithEnvAttribute](arkts-arkui-arkui-withenv-withenvattribute-c.md) | WithEnvAttribute object. |

