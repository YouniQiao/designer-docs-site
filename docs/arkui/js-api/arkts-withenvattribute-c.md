# WithEnvAttribute

Define the WithEnv attribute functions.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { WithEnvAttribute,WithEnv } from '@kit.ArkUI';
```

## customEnv

```TypeScript
customEnv<T>(key: CustomEnvKey<T>,  value: T): WithEnvAttribute
```

Defining Custom Environment Variables

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | CustomEnvKey&lt;T> | Yes | Key for custom environment variables. |
| value | T | Yes | Value of custom environment variables. |

**Return value:**

| Type | Description |
| --- | --- |
| WithEnvAttribute | WithEnvAttribute object. |

## env

```TypeScript
env<T>(key: WritableSystemEnvKey<T>, value: T): WithEnvAttribute
```

Defining System Environment Variables

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | WritableSystemEnvKey&lt;T> | Yes | Key for system environment variables. |
| value | T | Yes | Value of system environment variables. |

**Return value:**

| Type | Description |
| --- | --- |
| WithEnvAttribute | WithEnvAttribute object. |

