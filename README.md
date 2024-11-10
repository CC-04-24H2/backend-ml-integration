# backend-ml-integration

## Description

This repo is an hands-on project about integration of ML service on backend.

`backend-ml-integration` is a simple backend service. This app has single endpoint to do simple OCR service, `/v1/predict`.

### /v1/predict

- Method: `POST`
- Endpoint: `/v1/predict`
- Request Header:
  - Key: `X-Api-Key`
  - Value: defined api key on backend
- Request Body: `multipart/form-data`
- Form:
  - Field: `image`
  - Type: image, max size 1MB
- Response Body: `application/json`
  - status: `success | failed`
  - message: `string`
  - data: `object`

## Installation

- Prepare `.env`:

  Copy `.env.example` to `.env` and fill the key-value pair

- Install dependencies:

  ```bash
  npm install
  ```

- Run the service:
  ```bash
  node src/main.js
  ```

## ML Service

ML service for this backend is a simple OCR. (currently) Deployed on Cloud Run.

The repo: [simple-ocr](https://github.com/CC-04-24H2/simple-ocr)
