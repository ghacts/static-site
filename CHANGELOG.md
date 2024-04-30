# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org).

## [v2.0.0](https://github.com/ghacts/static-site/compare/v1.0.0...v2.0.0) (2024-04-30)

### Bug Fixes

- **github-workflow:** upgrade NodeJS versions

- **github-workflow:** upgrade action checkout to v4

- **action:** upgrade action upload-artifact to v4

- **action:** upgrade action setup-node to v4

- **action:** upgrade action checkout to v4

- **action:** change default pnpm version to `latest`

- **action:** upgrade action setup pnpm to v3

- **action:** correct default value for boolean type

- **action:** remove `type`

### Code Refactoring

- **action:** use working-directory to set working dir for the run commmand

Full Changelog: [v1.0.0...v2.0.0](https://github.com/ghacts/static-site/compare/v1.0.0...v2.0.0)

## v1.0.0 (2023-06-15)

### Bug Fixes

- **action:** change action name

- **action:** configure branding icon and color

- **action:** use different values for working directory and pnpm working directory

- **action:** do not set working directory for pnpm install command if it is empty (default value)

- **action:** add condition to skip checkout step while testing action

- **action:** add missing default branch

### Code Refactoring

- move test project to another repository

### Dev Features

- **changelog:** configure changelog generator

- **github-workflow:** add workflow for automate releasing new version

- **taskfile:** add task files

### Documentations

- **readme:** update README.md

### Features

- **action:** upload artifact after building

Full Changelog: [v1.0.0](https://github.com/ghacts/static-site/commits/v1.0.0)
