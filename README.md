# React Native and React Native Web Monorepo

A monorepo with a mobile and web app using React Native and React Native Web. Parcel Bundler was used to bundle the web application.

The approach uses a symlink to the `shared` folder in the mobile app.

This was based on the [Web and mobile apps using React Native Web tutorial on YouTube](https://youtu.be/2wOvhDtqsW8) by Robin Heinze.

## Getting Started

### Setting up the development environment for React Native

Follow the instructions on the [Setting up the development environment](https://reactnative.dev/docs/environment-setup) page of the React Native website.

### Local Development

1. Clone the repo.
1. Run `yarn install` in the `mobile` and `web` directory.
1. Run `pod install` in the `mobile/ios` directory.
1. Copy the full path of the `mobile/app/shared` directory and run the following command in the terminal in the web directory to create a symlink:

   For MacOS:

   ```bash
   ls -s <full-path-to-mobile-app-share> shared
   ```

   The `mobile/shared` folder is now shared between the mobile and web app.

1. In the mobile directory, run `yarn ios && yarn android` to start the iOS and Android app, respectively.
1. In the web directory, run `yarn start` to start the web server.
1. Make changes to the files in the `mobile/shared` folder to see changes in the iOS, Android and Web apps.
