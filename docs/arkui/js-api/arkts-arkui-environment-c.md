# Environment

For details about how to use environment parameters, see [Environment: Device Environment Query](../../../../ui/state-management/arkts-environment.md). ###### Built-in Environment Variables | key | Type | Description | | -------------------- | --------------- | ------------------------------------------------------------ | | accessibilityEnabled | string | Whether to enable accessibility. If there is no value of **accessibilityEnabled** in the environment variables, the default value passed through APIs such as **envProp** and **envProps** is added to AppStorage.| | colorMode | [ColorMode](@link #ColorMode) | Color mode. The options are as follows:<br>- **ColorMode.LIGHT**: light mode.<br>- **ColorMode.DARK**: dark mode.| | fontScale | number | Font scale. | | fontWeightScale | number | Font weight ratio. | | layoutDirection | [LayoutDirection](@link LayoutDirection) | Layout direction. The options are as follows:<br>- **LayoutDirection.LTR**: from left to right.<br>- **LayoutDirection.RTL**: from right to left.<br>- **Auto**: follows the system settings.| | languageCode | string | Current system language, which is in lowercase letters, for example, **zh**.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## EnvProp

```TypeScript
static EnvProp<S>(key: string, value: S): boolean
```

Stores the built-in environment variable key from [Environment](../../../../ui/state-management/arkts-environment.md) into [AppStorage](../../../../ui/state-management/arkts-appstorage.md). If the value of the environment variable key is not found in AppStorage, the default value is used and stored in AppStorage. If the value is successfully stored, **true** is returned. If the value of the environment variable key already exists in AppStorage, **false** is returned. You are advised to call this API when the application is started. It is incorrect to use AppStorage to read environment variables without calling **EnvProp** first.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [envProp](arkts-arkui-environment-c.md#envprop-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Environment variable name. For details about the value range, see[Built-in Environment Variables](@link Environment). |
| value | S | Yes | Default value used if the value of the environment variable key is not found in AppStorage. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **false** if the property corresponding to the key exists in AppStorage; creates aproperty with the key and the default value and returns **true** otherwise. |

## EnvProps

```TypeScript
static EnvProps(
    props: {
      key: string;
      defaultValue: any;
    }[],
  ): void
```

Works in a way similar to the [EnvProp](arkts-arkui-environment-c.md#envprop-1) API, with the difference that it allows for initialization of multiple attributes in batches. It is recommended that this API be called during application startup to store system environment variables to [AppStorage](../../../../ui/state-management/arkts-appstorage.md) in batches.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [envProps](arkts-arkui-environment-c.md#envprops-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| props | {      key: string;      defaultValue: any;    }[] | Yes |  |

## Keys

```TypeScript
static Keys(): Array<string>
```

Returns the property key array of environment variables.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [keys](arkts-arkui-environment-c.md#keys-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Property key array of environment variables. |

## envProp

```TypeScript
static envProp<S>(key: string, value: S): boolean
```

Stores the built-in environment variable key from [Environment](../../../../ui/state-management/arkts-environment.md) into [AppStorage](../../../../ui/state-management/arkts-appstorage.md). If the value of the environment variable key is not found in AppStorage, the default value is used and stored in AppStorage. If the value is successfully stored, **true** is returned. If the value of the environment variable key already exists in AppStorage, **false** is returned. You are advised to call this API when the application is started. It is incorrect to use AppStorage to read environment variables without calling **envProp** first.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Environment variable name. For details about the value range, see[Built-in Environment Variables](@link Environment). |
| value | S | Yes | Default value used if the value of the environment variable key is not found in AppStorage. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **false** if the property corresponding to the key exists in AppStorage; creates aproperty with the key and the default value and returns **true** otherwise. |

## envProps

```TypeScript
static envProps(props: EnvPropsOptions[]): void
```

Works in a way similar to the [envProp](arkts-arkui-environment-c.md#envprop-1) API, with the difference that it allows for initialization of multiple attributes in batches. It is recommended that this API be called during application startup to store system environment variables to [AppStorage](../../../../ui/state-management/arkts-appstorage.md) in batches.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| props | EnvPropsOptions[] | Yes | Array of key-value pairs consisting of system environment variables anddefault values. |

## keys

```TypeScript
static keys(): Array<string>
```

Returns the property key array of environment variables.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Property key array of environment variables. |

