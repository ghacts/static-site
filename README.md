# Static Site Action

[![Test](https://github.com/ghacts/static-site/actions/workflows/test.yml/badge.svg)](https://github.com/ghacts/static-site/actions/workflows/test.yml)

<!-- action-docs-description -->

## Description

GitHub Actions for building and testing static site projects

<!-- action-docs-description -->

<!-- action-docs-inputs -->

## Inputs

| parameter               | description                                               | required | default        |
| ----------------------- | --------------------------------------------------------- | -------- | -------------- |
| project-path            | The path to the project to check                          | `false`  |                |
| is-sub-path             | Whether the project is a sub-path                         | `false`  | false          |
| package-manager         | The package manager which is used to manager dependencies | `false`  | pnpm           |
| package-manager-version | The version of package manager to use                     | `false`  | 8              |
| lock-file               | The lock file which is used to manage dependencies        | `false`  | pnpm-lock.yaml |
| node-version            | The version of Node.js to use                             | `false`  | latest         |
| lint-script             | The script name to lint code                              | `false`  | lint           |
| build-script            | The script name to build the project                      | `false`  | build          |
| test-script             | The script name to run test cases                         | `false`  | test           |
| skip-lint               | Skip the lint step                                        | `false`  | false          |
| skip-build              | Skip the build step                                       | `false`  | false          |
| skip-test               | Skip the test step                                        | `false`  | false          |
| artifact-name           | The name of the artifact to upload                        | `false`  | dist           |
| output-dir              | The path to the output directory                          | `false`  | dist/          |

<!-- action-docs-inputs -->

## Contact

Le Minh Tri [@ansidev](https://ansidev.xyz/about).

## License

This source code is available under the [MIT LICENSE](/LICENSE).
