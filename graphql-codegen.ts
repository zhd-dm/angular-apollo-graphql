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
    },
};
export default config;
