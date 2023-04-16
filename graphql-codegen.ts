import type {CodegenConfig} from '@graphql-codegen/cli';

const scalars = {
    Date: 'string',
    ObjectID: 'number',
    timestamptz: 'string',
    uuid: 'string',
};

const config: CodegenConfig = {
    schema: 'libs/graphql/graphql-schema.json',
    // documents: ['apps/**/*.graphql', 'libs/**/*.graphql'],
    generates: {
        'libs/graphql/graphql-types.generated.ts': {
            plugins: ['typescript'],
            config: {
                avoidOptionals: false,
                scalars,
                strictScalars: true,
            },
        },
        'libs/graphql/services': {
            documents: ['**/*.graphql'],
            preset: 'near-operation-file',
            presetConfig: {
                extension: '.generated.ts',
                baseTypesPath: 'libs/graphql',
                importTypesNamespace: 'SchemaTypes',
            },
            plugins: ['typescript-operations', 'typescript-apollo-angular'],
            config: {
                // namedClient: GQL_GATEWAY_SERVICE,
                avoidOptionals: true,
                addExplicitOverride: true,
                sdkClass: true,
                serviceName: 'GqlSdkService',
                scalars,
            },
        },
    },
};
export default config;
