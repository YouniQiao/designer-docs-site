# lib.es5

## 汇总

### 命名空间

| 名称 | 描述 |
| --- | --- |
| [Intl](arkts-intl-n.md) |  |

### 函数

| 名称 | 描述 |
| --- | --- |
| [decodeURI](arkts-lib-es5-decodeuri-f.md#decodeURI-1) | Gets the unencoded version of an encoded Uniform Resource Identifier (URI). |
| [decodeURIComponent](arkts-lib-es5-decodeuricomponent-f.md#decodeURIComponent-1) | Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI). |
| [encodeURI](arkts-lib-es5-encodeuri-f.md#encodeURI-1) | Encodes a text string as a valid Uniform Resource Identifier (URI) |
| [encodeURIComponent](arkts-lib-es5-encodeuricomponent-f.md#encodeURIComponent-1) | Encodes a text string as a valid component of a Uniform Resource Identifier (URI). |
| [escape](arkts-lib-es5-escape-f.md#escape-1) | Computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. |
| [eval](arkts-lib-es5-eval-f.md#eval-1) | Evaluates JavaScript code and executes it. |
| [isFinite](arkts-lib-es5-isfinite-f.md#isFinite-1) | Determines whether a supplied number is finite. |
| [isNaN](arkts-lib-es5-isnan-f.md#isNaN-1) | Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). |
| [parseFloat](arkts-lib-es5-parsefloat-f.md#parseFloat-1) | Converts a string to a floating-point number. |
| [parseInt](arkts-lib-es5-parseint-f.md#parseInt-1) | Converts a string to an integer. |
| [unescape](arkts-lib-es5-unescape-f.md#unescape-1) | Computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [Array](arkts-array-i.md) |  |
| [ArrayBuffer](arkts-arraybuffer-i.md) | Represents a raw buffer of binary data, which is used to store data for the different typed arrays. ArrayBuffers cannot be read from or written to directly, but can be passed to a typed array or DataView Object to interpret the raw buffer as needed. |
| [ArrayBufferConstructor](arkts-arraybufferconstructor-i.md) |  |
| [ArrayBufferTypes](arkts-arraybuffertypes-i.md) | Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays. |
| [ArrayBufferView](arkts-arraybufferview-i.md) |  |
| [ArrayConstructor](arkts-arrayconstructor-i.md) |  |
| [ArrayLike](arkts-arraylike-i.md) |  |
| [Boolean](arkts-boolean-i.md) |  |
| [BooleanConstructor](arkts-booleanconstructor-i.md) |  |
| [CallableFunction](arkts-callablefunction-i.md) |  |
| [ConcatArray](arkts-concatarray-i.md) |  |
| [DataView](arkts-dataview-i.md) |  |
| [DataViewConstructor](arkts-dataviewconstructor-i.md) |  |
| [Date](arkts-date-i.md) | Enables basic storage and retrieval of dates and times. |
| [Date](arkts-date-i.md) |  |
| [DateConstructor](arkts-dateconstructor-i.md) |  |
| [Error](arkts-error-i.md) |  |
| [ErrorConstructor](arkts-errorconstructor-i.md) |  |
| [EvalError](arkts-evalerror-i.md) |  |
| [EvalErrorConstructor](arkts-evalerrorconstructor-i.md) |  |
| [Float32Array](arkts-float32array-i.md) | A typed array of 32-bit float values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised. |
| [Float32ArrayConstructor](arkts-float32arrayconstructor-i.md) |  |
| [Float64Array](arkts-float64array-i.md) | A typed array of 64-bit float values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised. |
| [Float64ArrayConstructor](arkts-float64arrayconstructor-i.md) |  |
| [Function](arkts-function-i.md) | Creates a new function. |
| [FunctionConstructor](arkts-functionconstructor-i.md) |  |
| [IArguments](arkts-iarguments-i.md) |  |
| [ImportAssertions](arkts-importassertions-i.md) | The type for the `assert` property of the optional second argument to `import()`. |
| [ImportCallOptions](arkts-importcalloptions-i.md) | The type for the optional second argument to `import()`. If your host environment supports additional options, this type may be augmented via interface merging. |
| [ImportMeta](arkts-importmeta-i.md) | The type of `import.meta`. If you need to declare that a given property exists on `import.meta`, this type may be augmented via interface merging. |
| [Int16Array](arkts-int16array-i.md) | A typed array of 16-bit signed integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised. |
| [Int16ArrayConstructor](arkts-int16arrayconstructor-i.md) |  |
| [Int32Array](arkts-int32array-i.md) | A typed array of 32-bit signed integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised. |
| [Int32ArrayConstructor](arkts-int32arrayconstructor-i.md) |  |
| [Int8Array](arkts-int8array-i.md) | A typed array of 8-bit integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised. |
| [Int8ArrayConstructor](arkts-int8arrayconstructor-i.md) |  |
| [JSON](arkts-json-i.md) |  |
| [Math](arkts-math-i.md) |  |
| [NewableFunction](arkts-newablefunction-i.md) |  |
| [Number](arkts-number-i.md) |  |
| [Number](arkts-number-i.md) |  |
| [NumberConstructor](arkts-numberconstructor-i.md) |  |
| [Object](arkts-object-i.md) |  |
| [ObjectConstructor](arkts-objectconstructor-i.md) |  |
| [Promise](arkts-promise-i.md) | Represents the completion of an asynchronous operation |
| [PromiseLike](arkts-promiselike-i.md) |  |
| [PropertyDescriptor](arkts-propertydescriptor-i.md) |  |
| [PropertyDescriptorMap](arkts-propertydescriptormap-i.md) |  |
| [RangeError](arkts-rangeerror-i.md) |  |
| [RangeErrorConstructor](arkts-rangeerrorconstructor-i.md) |  |
| [ReadonlyArray](arkts-readonlyarray-i.md) |  |
| [ReferenceError](arkts-referenceerror-i.md) |  |
| [ReferenceErrorConstructor](arkts-referenceerrorconstructor-i.md) |  |
| [RegExp](arkts-regexp-i.md) |  |
| [RegExpConstructor](arkts-regexpconstructor-i.md) |  |
| [RegExpExecArray](arkts-regexpexecarray-i.md) |  |
| [RegExpMatchArray](arkts-regexpmatcharray-i.md) |  |
| [String](arkts-string-i.md) |  |
| [String](arkts-string-i.md) |  |
| [StringConstructor](arkts-stringconstructor-i.md) |  |
| [Symbol](arkts-symbol-i.md) |  |
| [SyntaxError](arkts-syntaxerror-i.md) |  |
| [SyntaxErrorConstructor](arkts-syntaxerrorconstructor-i.md) |  |
| [TemplateStringsArray](arkts-templatestringsarray-i.md) |  |
| [ThisType](arkts-thistype-i.md) | Marker for contextual 'this' type |
| [TypedPropertyDescriptor](arkts-typedpropertydescriptor-i.md) |  |
| [TypeError](arkts-typeerror-i.md) |  |
| [TypeErrorConstructor](arkts-typeerrorconstructor-i.md) |  |
| [Uint16Array](arkts-uint16array-i.md) | A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised. |
| [Uint16ArrayConstructor](arkts-uint16arrayconstructor-i.md) |  |
| [Uint32Array](arkts-uint32array-i.md) | A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised. |
| [Uint32ArrayConstructor](arkts-uint32arrayconstructor-i.md) |  |
| [Uint8Array](arkts-uint8array-i.md) | A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised. |
| [Uint8ArrayConstructor](arkts-uint8arrayconstructor-i.md) |  |
| [Uint8ClampedArray](arkts-uint8clampedarray-i.md) | A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised. |
| [Uint8ClampedArrayConstructor](arkts-uint8clampedarrayconstructor-i.md) |  |
| [URIError](arkts-urierror-i.md) |  |
| [URIErrorConstructor](arkts-urierrorconstructor-i.md) |  |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ArrayBufferLike](arkts-arraybufferlike-t.md) |  |
| [Awaited](arkts-awaited-t.md) | Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to `never`. This emulates the behavior of `await`. |
| [Capitalize](arkts-capitalize-t.md) | Convert first character of string literal type to uppercase |
| [ClassDecorator](arkts-classdecorator-t.md) |  |
| [ConstructorParameters](arkts-constructorparameters-t.md) | Obtain the parameters of a constructor function type in a tuple |
| [ESObject](arkts-esobject-t.md) |  |
| [Exclude](arkts-exclude-t.md) | Exclude from T those types that are assignable to U |
| [Extract](arkts-extract-t.md) | Extract from T those types that are assignable to U |
| [InstanceType](arkts-instancetype-t.md) | Obtain the return type of a constructor function type |
| [Lowercase](arkts-lowercase-t.md) | Convert string literal type to lowercase |
| [MethodDecorator](arkts-methoddecorator-t.md) |  |
| [NonNullable](arkts-nonnullable-t.md) | Exclude null and undefined from T |
| [Omit](arkts-omit-t.md) | Construct a type with the properties of T except for those in type K. |
| [OmitThisParameter](arkts-omitthisparameter-t.md) | Removes the 'this' parameter from a function type. |
| [ParameterDecorator](arkts-parameterdecorator-t.md) |  |
| [Parameters](arkts-parameters-t.md) | Obtain the parameters of a function type in a tuple |
| [Partial](arkts-partial-t.md) | Make all properties in T optional |
| [Pick](arkts-pick-t.md) | From T, pick a set of properties whose keys are in the union K |
| [PromiseConstructorLike](arkts-promiseconstructorlike-t.md) |  |
| [PropertyDecorator](arkts-propertydecorator-t.md) |  |
| [PropertyKey](arkts-propertykey-t.md) |  |
| [Readonly](arkts-readonly-t.md) | Make all properties in T readonly |
| [Record](arkts-record-t.md) | Construct a type with a set of properties K of type T |
| [Required](arkts-required-t.md) | Make all properties in T required |
| [ReturnType](arkts-returntype-t.md) | Obtain the return type of a function type |
| [ThisParameterType](arkts-thisparametertype-t.md) | Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter. |
| [Uncapitalize](arkts-uncapitalize-t.md) | Convert first character of string literal type to lowercase |
| [Uppercase](arkts-uppercase-t.md) | Convert string literal type to uppercase |

