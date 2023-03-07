@REM convert the following sh comments to bat comments
@REM rm -r amplify
DEL /S /Q amplify

@REM rm -r src/graphql
DEL /S /Q src\graphql

@REM rm -r src/ui-components
DEL /S /Q src\ui-components

@REM rm src/API.ts src/aws-exports.js
DEL /S /Q src\API.ts

amplify pull --appId dd1gmnh1dmpn6 --envName iv
amplify codegen
amplify codegen models