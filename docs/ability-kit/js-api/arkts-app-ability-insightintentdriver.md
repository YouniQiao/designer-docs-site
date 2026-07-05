# @ohos.app.ability.insightIntentDriver

The module provides APIs for executing intent calls. The system executes intent calls based on user interaction and more. > **NOTE** > > Starting from API version 20, this module supports application navigation using intents defined by the > [@InsightIntentLink](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) > decorator.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@ohos.app.ability.insightIntentDriver';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [execute](arkts-ability-execute-f-sys.md#execute-1) | Executes a call to an intent. This API uses an asynchronous callback to return the result. When the caller is in the background, the ohos.permission.START_ABILITIES_FROM_BACKGROUND permission is required. When [ExecuteMode](arkts-ability-executemode-e.md#executemode) of the intent call is set to **UI_ABILITY_BACKGROUND**, the ohos.permission.ABILITY_BACKGROUND_COMMUNICATION permission is required. On API 26.0.0 and above, intent can be executed across devices. When the intent call is cross-device, the ohos.permission.EXECUTE_DISTRIBUTED_INTENT permission is required. |
| [execute](arkts-ability-execute-f-sys.md#execute-2) | Executes a call to an intent. This API uses a promise to return the result. When the caller is in the background, the ohos.permission.START_ABILITIES_FROM_BACKGROUND permission is required. When [ExecuteMode](arkts-ability-executemode-e.md#executemode) of the intent call is set to **UI_ABILITY_BACKGROUND**, the ohos.permission.ABILITY_BACKGROUND_COMMUNICATION permission is required. When the intent call is cross-device, the ohos.permission.EXECUTE_DISTRIBUTED_INTENT permission is required. On API 26.0.0 and above, intent can be executed across devices. When the intent call is cross-device, the ohos.permission.EXECUTE_DISTRIBUTED_INTENT permission is required. |
| [getAllInsightIntentInfo](arkts-ability-getallinsightintentinfo-f-sys.md#getallinsightintentinfo-1) | Obtains the information about all intents on the current device. This API uses a promise to return the result. |
| [getInsightIntentInfoByBundleName](arkts-ability-getinsightintentinfobybundlename-f-sys.md#getinsightintentinfobybundlename-1) | Obtains the intent information on the current device based on the given bundle name. This API uses a promise to return the result. |
| [getInsightIntentInfoByFilter](arkts-ability-getinsightintentinfobyfilter-f-sys.md#getinsightintentinfobyfilter-1) | Obtains the intent information on the current device based on the given intent filter. This API uses a promise to return the result.<br>If the user ID of the calling application is different from the user ID of the intent, the calling application must request the ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission. |
| [getInsightIntentInfoByIntentName](arkts-ability-getinsightintentinfobyintentname-f-sys.md#getinsightintentinfobyintentname-1) | Obtains the intent information on the current device based on the bundle name, module name, and intent name. This API uses a promise to return the result. |
| [queryEntityInfo](arkts-ability-queryentityinfo-f-sys.md#queryentityinfo-1) | Query insight intent entity information. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [FunctionIntentInfo](arkts-ability-functionintentinfo-i.md) | Defines the parameter type of the [@InsightIntentFunctionMethod](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentfunctionmethod) decorator. All parameters inherit from [IntentDecoratorInfo](arkts-ability-intentdecoratorinfo-i.md#intentdecoratorinfo). |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [EntityInfo](arkts-ability-entityinfo-i-sys.md) | EntityInfo inherits from [IntentEntityDecoratorInfo](arkts-ability-intententitydecoratorinfo-i.md#intententitydecoratorinfo) and is used to describe the information about the intent entity defined by the [@InsightIntentEntity](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity) decorator. |
| [EntryIntentInfo](arkts-ability-entryintentinfo-i-sys.md) | Describes the parameters supported by the [@InsightIntentForm](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform) decorator, such as the widget name. It also describes the widget information bound to the [intent developed using a configuration file](../../../../application-models/insight-intent-config-development.md). |
| [ExecuteParam](arkts-ability-executeparam-i-sys.md) | Defines the parameter used to execute an intent call. |
| [FormIntentInfo](arkts-ability-formintentinfo-i-sys.md) | Describes the parameters supported by the [@InsightIntentForm](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform) decorator, such as the widget name. It also describes the widget information bound to the [intent developed using a configuration file](../../../../application-models/insight-intent-config-development.md). |
| [InsightIntentInfo](arkts-ability-insightintentinfo-i-sys.md) | Defines the intent information, which is the specific parameter configuration of the intent in the device. |
| [InsightIntentInfoFilter](arkts-ability-insightintentinfofilter-i-sys.md) | Defines an intent filter, which specifies the criteria for selecting target intents. It is used to filter intents on the device that meet these criteria. |
| [LinkIntentInfo](arkts-ability-linkintentinfo-i-sys.md) | Describes the parameters supported by the [@InsightIntentLink](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) decorator, such as the URI required for application redirection. |
| [PageIntentInfo](arkts-ability-pageintentinfo-i-sys.md) | Describes the parameters supported by the [@InsightIntentPage](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentpage) decorator, such as the [NavDestination](../../../../reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10) name of the target page. |
| [QueryParam](arkts-ability-queryparam-i-sys.md) | Param when query insight intent entity. |
| [ServiceExtensionIntentInfo](arkts-ability-serviceextensionintentinfo-i-sys.md) | Describes the information of the ServiceExtensionAbility bound to the [intent developed using a configuration file](../../../../application-models/insight-intent-config-development.md). |
| [SubIntentInfoForConfiguration](arkts-ability-subintentinfoforconfiguration-i-sys.md) | Describes the unique information of the [intent developed using a configuration file](../../../../application-models/insight-intent-config-development.md). |
| [UIAbilityIntentInfo](arkts-ability-uiabilityintentinfo-i-sys.md) | Describes the information of the UIAbility bound to the [intent developed using a configuration file](../../../../application-models/insight-intent-config-development.md). |
| [UIExtensionIntentInfo](arkts-ability-uiextensionintentinfo-i-sys.md) | Describes the information of the UIExtensionAbility bound to the [intent developed using a configuration file](../../../../application-models/insight-intent-config-development.md). |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DevelopType](arkts-ability-developtype-e-sys.md) | Enumerates the modes that define how an intent is developed. |
| [ExecuteModeForConfiguration](arkts-ability-executemodeforconfiguration-e-sys.md) | Enumerates the execution modes supported by an [intent developed using a configuration file](../../../../application-models/insight-intent-config-development.md). For example, if **executeMode** in the [insight_intent.json configuration file] (../../../../application-models/insight-intent-config-development.md#description-of-the-insight_intentjson-file) is set to **foreground**, the intent bound to the UIAbility can run in the foreground. |
| [GetInsightIntentFlag](arkts-ability-getinsightintentflag-e-sys.md) | Enumerates the flags of intent information ([InsightIntentInfo](arkts-ability-insightintentinfo-i-sys.md#insightintentinfo)). It is used in [getAllInsightIntentInfo](arkts-ability-getinsightintentinfobybundlename-f-sys.md#getinsightintentinfobybundlename-1), [getInsightIntentInfoByBundleName](arkts-ability-getinsightintentinfobybundlename-f-sys.md#getinsightintentinfobybundlename-1), and [getInsightIntentInfoByIntentName](arkts-ability-getinsightintentinfobyintentname-f-sys.md#getinsightintentinfobyintentname-1). &gt; **NOTE** &gt; &gt; - For intents developed using a configuration file, the full and brief information queried through the preceding &gt; APIs are the same. &gt; &gt; - For intents developed using a decorator, the full and brief information queried through the preceding APIs are &gt; different, as described below. &gt; &gt; Table 1 Differences between full intent information and brief intent information &gt; &gt; \| Name\| Included in Full Intent Information\| Included in Brief Intent Information\| &gt; \| -------- \| -------- \| -------- \| &gt; \| bundleName \| Yes\| Yes\| &gt; \| moduleName \| Yes\| Yes\| &gt; \| intentName \| Yes\| Yes\| &gt; \| domain \| Yes\| No\| &gt; \| intentVersion \| Yes\| No\| &gt; \| displayName \| Yes\| Yes\| &gt; \| displayDescription \| Yes\| No\| &gt; \| schema \| Yes\| No\| &gt; \| icon \| Yes\| No\| &gt; \| llmDescription \| Yes\| No\| &gt; \| keywords \| Yes\| No\| &gt; \| intentType \| Yes\| Yes\| &gt; \| subIntentInfo \| Yes\| Yes\| &gt; \| parameters \| Yes\| Yes\| &gt; \| entities \| No\| No\| &gt; \| developType&lt;sup&gt;23+&lt;/sup&gt; \| Yes\| Yes\| &gt; \| subIntentInfoForConfiguration&lt;sup&gt;23+&lt;/sup&gt; \| No\| No\| |
| [InsightIntentType](arkts-ability-insightintenttype-e-sys.md) | Enumerates the intent types defined by the intent decorator. You can obtain the intent type from [LinkIntentInfo](arkts-ability-linkintentinfo-i-sys.md#linkintentinfo) returned by calling APIs such as [getAllInsightIntentInfo](arkts-ability-getallinsightintentinfo-f-sys.md#getallinsightintentinfo-1). |
<!--DelEnd-->

