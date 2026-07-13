# AbilityDelegatorArgs

The **AbilityDelegatorArgs** module provides APIs to obtain an **AbilityDelegatorArgs** object during the execution
of test cases.

> **NOTE**
>
> The APIs of this module can be used only in [JsUnit](../../../../application-test/unittest-guidelines.md).

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## bundleName

```TypeScript
bundleName: string
```

Bundle name of the application to test.

**Type:** string

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## parameters

```TypeScript
parameters: Record<string, string>
```

Parameters of the unit test that is started currently.

**Type:** Record<string, string>

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## testCaseNames

```TypeScript
testCaseNames: string
```

Test case name.

**Type:** string

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## testRunnerClassName

```TypeScript
testRunnerClassName: string
```

Names of the test case executors.

**Type:** string

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

