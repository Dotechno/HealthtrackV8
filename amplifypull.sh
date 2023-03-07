rm -r amplify
rm -r src/graphql
rm -r src/ui-components
rm src/API.ts src/aws-exports.js

amplify pull --appId dd1gmnh1dmpn6 --envName iv
amplify codegen
amplify codegen models