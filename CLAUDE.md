# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Expo/React Native mobile application for testing MSW (Mock Service Worker) integration with React Native. See https://mswjs.io/docs/integrations/react-native/ for MSW React Native documentation.

## Essential Commands

```bash
# Development
npx expo start                  # Start dev server
npx expo start --clear          # Clear cache and start
npx expo install <package>      # Install with compatible versions

# Quality
npx expo lint                   # Run ESLint
npx expo doctor                 # Check project health
npm run format                  # Run Prettier

# EAS Workflows
npm run development-builds      # Create development builds
npm run draft                   # Publish preview update
npm run deploy                  # Deploy to production

# Production builds
npx eas-cli@latest build --platform ios -s      # Build and submit iOS
npx eas-cli@latest build --platform android -s  # Build and submit Android
```

## Architecture

- **Routing**: Expo Router file-based routing in `app/` directory
- **Navigation**: Tab-based layout in `app/(tabs)/`
- **Components**: Reusable components in `components/`, UI primitives in `components/ui/`
- **Hooks**: Custom React hooks in `hooks/`
- **CI/CD**: EAS Workflows defined in `.eas/workflows/`

## Development Guidelines

- TypeScript with strict type checking
- React 19 patterns: function components, hooks, React Compiler
- Use Expo Router for navigation (`expo-router`)
- Use `expo-image` for images, `react-native-reanimated` for animations
- Create development builds when Expo Go has errors (sandbox limitations)

## Documentation Resources

Consult official Expo documentation for implementation details:

- https://docs.expo.dev/llms-full.txt - Complete Expo documentation
- https://docs.expo.dev/llms-eas.txt - EAS documentation
- https://docs.expo.dev/llms-sdk.txt - Expo SDK documentation
