# Want

Want is a carrier for information transfer between objects (application components). Want can be used as a parameter of **startAbility** to specify a startup target and information that needs to be carried during startup, for example,**bundleName** and **abilityName**, which respectively indicate the bundle name of the target ability and the ability name in the bundle. When ability A needs to start ability B and transfer some data to ability B, it can use Want a carrier to transfer the data.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** Want/Want

<!--Device-unnamed-export default class Want--><!--Device-unnamed-export default class Want-End-->

**System capability:** SystemCapability.Ability.AbilityBase

## abilityName

```TypeScript
abilityName?: string
```

Name of the ability. If both **bundleName** and **abilityName** are specified in a Want object, the Want object can match a specific ability. The value of **abilityName** must be unique in an application.

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitutes:** abilityName

<!--Device-Want-abilityName?: string--><!--Device-Want-abilityName?: string-End-->

**System capability:** SystemCapability.Ability.AbilityBase

## action

```TypeScript
action?: string
```

Action to take, such as viewing and sharing application details. In implicit Want, you can define this property and use it together with **uri** or **parameters** to specify the operation to be performed on the data. For details,see [action](arkts-ability-wantconstant-action-depr-e.md). For details about the definition and matching rules of implicit Want, see [Matching Rules of Explicit Want and Implicit Want](../../../../application-models/explicit-implicit-want-mappings.md).

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitutes:** action

<!--Device-Want-action?: string--><!--Device-Want-action?: string-End-->

**System capability:** SystemCapability.Ability.AbilityBase

## bundleName

```TypeScript
bundleName?: string
```

Bundle name.

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitutes:** bundleName

<!--Device-Want-bundleName?: string--><!--Device-Want-bundleName?: string-End-->

**System capability:** SystemCapability.Ability.AbilityBase

## deviceId

```TypeScript
deviceId?: string
```

ID of the device running the ability. If this field is unspecified, the local device is used.

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitutes:** deviceId

<!--Device-Want-deviceId?: string--><!--Device-Want-deviceId?: string-End-->

**System capability:** SystemCapability.Ability.AbilityBase

## entities

```TypeScript
entities?: Array<string>
```

Additional category information (such as browser and video player) of the ability. It is a supplement to the **action** field for implicit Want. and is used to filter ability types. For details, see [entity](arkts-ability-wantconstant-entity-depr-e.md).

**Type:** Array<string>

**Since:** 8

**Deprecated since:** 9

**Substitutes:** entities

<!--Device-Want-entities?: Array<string>--><!--Device-Want-entities?: Array<string>-End-->

**System capability:** SystemCapability.Ability.AbilityBase

## flags

```TypeScript
flags?: number
```

How the Want object will be handled. By default, numbers are passed in. For details, see [flags](arkts-ability-wantconstant-flags-depr-e.md).

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitutes:** flags

<!--Device-Want-flags?: number--><!--Device-Want-flags?: number-End-->

**System capability:** SystemCapability.Ability.AbilityBase

## parameters

```TypeScript
parameters?: { [key: string]: any }
```

Want parameters in the form of custom key-value (KV) pairs. By default, the following keys are carried:

**ohos.aafwk.param.callerPid**: PID of the caller.

**ohos.aafwk.param.callerToken**: token of the caller.

**ohos.aafwk.param.callerUid**: UID in [bundleInfo](js-apis-bundle-BundleInfo.md#bundleinfodeprecated), that is,the application UID in the bundle information.

- **component.startup.newRules**: whether to enable the new control rule.  
- **moduleName**: module name of the caller. No matter what this field is set to, the correct module name will be sent to the peer.  
- **ohos.dlp.params.sandbox**: available only for DLP files.

**Type:** { [key: string]: any }

**Since:** 8

**Deprecated since:** 9

**Substitutes:** parameters

<!--Device-Want-parameters?: { [key: string]: any }--><!--Device-Want-parameters?: { [key: string]: any }-End-->

**System capability:** SystemCapability.Ability.AbilityBase

## type

```TypeScript
type?: string
```

MIME type, that is, the type of the file to open, for example, **'text/xml'** and **'image/*'**. For details about the MIME type definition, see https://www.iana.org/assignments/media-types/media-types.xhtml?utm_source=ld246.com.

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitutes:** type

<!--Device-Want-type?: string--><!--Device-Want-type?: string-End-->

**System capability:** SystemCapability.Ability.AbilityBase

## uri

```TypeScript
uri?: string
```

URI information to match. If **Uri** is specified in a Want object, the Want object will match the specified URI information, including **scheme**, **schemeSpecificPart**, **authority**, and **path**.

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitutes:** uri

<!--Device-Want-uri?: string--><!--Device-Want-uri?: string-End-->

**System capability:** SystemCapability.Ability.AbilityBase

