# SystemJS Single-SPA with React 19

This is a single-spa application using SystemJS as the module loader, demonstrating microfrontend architecture with React 19.

## How SystemJS Works

SystemJS is a dynamic module loader that allows you to load JavaScript modules at runtime. In this setup:

- **Root Config** acts as the orchestrator, loading and managing microfrontends
- **Import Maps** define where to find each microfrontend module
- **SystemJS** dynamically imports and executes the microfrontends based on routing rules
- Each microfrontend is built as a SystemJS module that can be independently deployed

## Project Structure

- `root-config/` - The root application that orchestrates all microfrontends
- `sample-mfe/` - A sample microfrontend application

## Getting Started

Both the root config and microfrontends need to be started separately:

### 1. Start the Root Config
```bash
cd root-config
yarn start --https
```
The root config will run on `https://localhost:9000`

### 2. Start the Sample Microfrontend
```bash
cd sample-mfe
yarn start --https
```
The sample MFE will run on `https://localhost:8080`

### 3. Access the Application

Open your browser and navigate to `https://localhost:9000`

You may need to accept the self-signed certificate warnings for both ports (9000 and 8080).

## Configuration Notes

- React 19 is bundled with each microfrontend (not shared)
- Only single-spa is loaded as a shared dependency via CDN
- SystemJS import maps are configured in `root-config/src/index.ejs`
