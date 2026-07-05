# WithEnvAttribute

Define the WithEnv attribute functions.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { WithEnvAttribute, WithEnv } from '@ohos.arkui.WithEnv';
```

## customEnv

```TypeScript
customEnv<T>(key: CustomEnvKey<T>,  value: T): WithEnvAttribute
```

Defining Custom Environment Variables

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | CustomEnvKey&lt;T&gt; | Yes | Keys for custom environment variables. |
| value | T | Yes | Values of custom environment variables. |

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

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | WritableSystemEnvKey&lt;T&gt; | Yes | Keys for system environment variables. |
| value | T | Yes | Values of system environment variables. |

**Return value:**

| Type | Description |
| --- | --- |
| WithEnvAttribute | WithEnvAttribute object. |

