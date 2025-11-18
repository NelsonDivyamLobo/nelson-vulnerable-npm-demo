# Nelson's Vulnerable NPM Demo

This repository is intentionally vulnerable for testing **VeeCLI fix-left**.

## Vulnerable Dependencies

| Package        | Version   | CVEs |
|----------------|-----------|------|
| lodash         | 4.17.11   | 6+   |
| express        | 4.17.1    | 1–2  |
| mongoose       | 5.4.0     | 1–2  |
| handlebars     | 4.0.5     | 1–2  |
| debug          | 2.6.8     | 1    |
| minimist       | 1.2.0     | 1    |
| jsonwebtoken   | 8.1.0     | 1    |
| axios          | 0.21.0    | 1    |

Total: **10–12 CVEs**

## Run the app

\`\`\`
npm install
npm start
\`\`\`

## Run VeeCLI fix-left

\`\`\`
./veecli fix --repo-url <your-repo-url> --pat <your-PAT>
\`\`\`

